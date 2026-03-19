<template>
  <div class="dashboard-wrapper" @click="hideOverlay()">
    <!-- Gray Overlay -->
    <div v-if="showOverlay && isCountUserEmpty" class="overlay">
      <div class="highlighted-menu">
        <p>
          Welcome to ResGuru, Please add Room and Utility cost in our setting
          menu here.
        </p>
        <button @click="routerTo('/setting')" class="highlight-button">
          Go to Settings
        </button>
      </div>
    </div>

    <!-- Dashboard Content Wrapper -->
    <div class="dashboard-content">
      <!-- Your existing dashboard content -->
      <div class="flex mt-[10px] justify-between tt">
        <div class="w-[55%]">
          <UserPlan :data="count_user" :childFunction="getDashboard" />
          <Meters2 :data="db_meter2" />
          <PayMent 
              :data="db_payment" 
              :allBuilding="isAllBuildingView"
              :childFunction2="getDashboard" 
              :routeLink="'/payment'" 
          />
          <Notification 
              :data="db_services" 
              :allBuilding="isAllBuildingView"
              :routeLink="'/staff'" 
          />
        </div>
        <div class="w-[44%]">
          <!-- Expenses component with conditional blur wrapper -->
          <div class="relative">
            <Expenses 
                :data="safeExpenseData" 
              :allBuilding="isAllBuildingView"
                :routeLink="'/expenses'"
                :class="{ 'blur-sm pointer-events-none': isPackageBasic }"
            />
            <!-- Package upgrade overlay for basic package -->
            <div v-if="isPackageBasic" class="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-40 rounded-lg">
              <div class="text-center p-4 bg-white rounded-lg shadow-lg">
                <div class="text-lg font-bold text-gray-700 mb-2">
                  อัพเกรดแพ็คเกจ
                </div>
                <div class="text-sm text-gray-600 mb-4">
                  ฟีเจอร์นี้ใช้ได้กับแพ็คเกจ Professional เท่านั้น
                </div>
                <button 
                  @click="routerTo('/pricing')" 
                  class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  อัพเกรดแพ็คเกจ
                </button>
              </div>
            </div>
          </div>
          
          <Meters 
              :data="db_meter" 
              :allBuilding="isAllBuildingView"
              :routeLink="'/fee'" 
          />
          <News 
              :data="db_annocment" 
              :routeLink="'/announcement'" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserPlan from "@/views/dashboard/components/UserPlan";
import PayMent from "@/views/dashboard/components/PayMent";
import Notification from "@/views/dashboard/components/Notification";
import Expenses from "@/views/dashboard/components/Expenses";
import Meters from "@/views/dashboard/components/Meters";
import Meters2 from "@/views/dashboard/components/Meters2";
import News from "@/views/dashboard/components/News";

export default {
  components: {
    UserPlan,
    PayMent,
    Notification,
    Expenses,
    Meters,
    Meters2,
    News,
  },
  data() {
    return {
      db_meter: [],
      db_meter2: [],
      db_annocment: [],
      db_services: [],
      db_payment: [],
      db_expense: { receive: 0, expense: [] },
      count_user: {},
      showOverlay: true,
      isAllBuildingView: false,
      buildingNameById: {},
    };
  },
  computed: {
    isCountUserEmpty() {
      // Check if count_user is an empty object
      return Object.keys(this.count_user).length === 0;
    },
    isPackageBasic() {
      // Check if package ID is 1 (Basic package)
      const packageId = this.$store.state.buildingInfo[0]?.attributes?.package?.data?.id;
      return packageId === 1;
    },
    safeExpenseData() {
      return {
        receive: Number(this.db_expense?.receive || 0),
        expense: Array.isArray(this.db_expense?.expense) ? this.db_expense.expense : [],
      };
    },
  },
  created() {
    this.$store.state.main = true;
    const loading = this.$vs.loading({
      opacity: 1,
    });
    setTimeout(() => {
      loading.close();
    }, 1000);
  },
  mounted() {
    this.getDashboard(false);
  },
  methods: {
    toNumber(value) {
      const num = Number(value);
      return Number.isFinite(num) ? num : 0;
    },
    async getBuildingIdsForAggregation() {
      const buildingInfo = this.$store.state.buildingInfo;

      if (Array.isArray(buildingInfo)) {
        const ids = buildingInfo
          .map((item) => item?.id || item?.attributes?.id)
          .filter((id) => id !== undefined && id !== null);
        if (ids.length > 1) return ids;
      }

      if (Array.isArray(buildingInfo?.data)) {
        const ids = buildingInfo.data
          .map((item) => item?.id || item?.attributes?.id)
          .filter((id) => id !== undefined && id !== null);
        if (ids.length > 1) return ids;
      }

      try {
        const response = await fetch(
          `https://api.resguru.app/api/buildings?filters[$or][0][user_owner][id][$eq]=${this.$store.state.userInfo.id}&filters[$or][1][users_admin][id][$in]=${this.$store.state.userInfo.id}&publicationState=live&populate=*`
        );
        const resp = await response.json();
        const ids = (resp?.data || [])
          .map((item) => item?.id || item?.attributes?.id)
          .filter((id) => id !== undefined && id !== null);

        if (ids.length) {
          return ids;
        }
      } catch (error) {
        console.error("getBuildingIdsForAggregation error:", error);
      }

      return [this.$store.state.building].filter(
        (id) => id !== undefined && id !== null
      );
    },
    async getBuildingsForAggregation() {
      const normalize = (item) => {
        const id = item?.id || item?.attributes?.id;
        const buildingName = item?.attributes?.buildingName || item?.buildingName || "-";
        if (id === undefined || id === null) return null;
        return { id, buildingName };
      };

      const buildingInfo = this.$store.state.buildingInfo;

      if (Array.isArray(buildingInfo) && buildingInfo.length > 1) {
        const mapped = buildingInfo.map(normalize).filter(Boolean);
        if (mapped.length > 1) return mapped;
      }

      if (Array.isArray(buildingInfo?.data) && buildingInfo.data.length > 1) {
        const mapped = buildingInfo.data.map(normalize).filter(Boolean);
        if (mapped.length > 1) return mapped;
      }

      try {
        const response = await fetch(
          `https://api.resguru.app/api/buildings?filters[$or][0][user_owner][id][$eq]=${this.$store.state.userInfo.id}&filters[$or][1][users_admin][id][$in]=${this.$store.state.userInfo.id}&publicationState=live&populate=*&pagination[pageSize]=100`
        );
        const resp = await response.json();
        const mapped = (resp?.data || []).map(normalize).filter(Boolean);

        if (mapped.length) {
          return mapped;
        }
      } catch (error) {
        console.error("getBuildingsForAggregation error:", error);
      }

      const fallbackId = this.$store.state.building;
      const fallbackName = buildingInfo?.[0]?.attributes?.buildingName || "-";
      return [{ id: fallbackId, buildingName: fallbackName }].filter(
        (item) => item.id !== undefined && item.id !== null
      );
    },
    async fetchDashboardByBuilding(buildingId, month, year) {
      const response = await fetch(
        `https://api.resguru.app/api/getdashboard?buildingid=${buildingId}&month=${month}&year=${year}&allBuilding=0&user_id=${this.$store.state.userInfo.id}`
      );
      return response.json();
    },
    mergeMeterSummary(items) {
      const merged = {};

      items.forEach((item) => {
        if (!item || typeof item !== "object") return;

        Object.keys(item).forEach((key) => {
          merged[key] = this.toNumber(merged[key]) + this.toNumber(item[key]);
        });
      });

      return merged;
    },
    mergeExpenseByType(expenseLists) {
      const map = {};

      expenseLists.forEach((expenseList) => {
        if (!Array.isArray(expenseList)) return;

        expenseList.forEach((item) => {
          const type = item?.type;
          if (!type) return;
          map[type] = this.toNumber(map[type]) + this.toNumber(item?.count);
        });
      });

      return Object.keys(map).map((type) => ({ type, count: map[type] }));
    },
    mergeRoomMeta(metaList) {
      const merged = {};

      metaList.forEach((meta) => {
        if (!meta || typeof meta !== "object") return;

        Object.keys(meta).forEach((key) => {
          merged[key] = this.toNumber(merged[key]) + this.toNumber(meta[key]);
        });
      });

      const countRoom = this.toNumber(merged.countRoom);
      const occuRoom = this.toNumber(merged.occuRoom);
      const reservedRoom = this.toNumber(merged.reservedRoom);

      if (merged.availableRoom === undefined || merged.availableRoom === null) {
        merged.availableRoom = Math.max(countRoom - occuRoom, 0);
      }

      const availableRoom = this.toNumber(merged.availableRoom);
      merged.availableRoomPer =
        countRoom > 0 ? ((availableRoom / countRoom) * 100).toFixed(2) : "0.00";
      merged.occuRoom = occuRoom;
      merged.reservedRoom = reservedRoom;
      merged.countRoom = countRoom;

      return merged;
    },
    getBuildingNameById(buildingId) {
      const id = Number(buildingId);
      const mappedName = this.buildingNameById?.[id];
      if (mappedName) return mappedName;

      const buildingInfo = this.$store.state.buildingInfo;

      if (Array.isArray(buildingInfo)) {
        const matched = buildingInfo.find((item) => Number(item?.id || item?.attributes?.id) === id);
        const name = matched?.attributes?.buildingName || matched?.buildingName;
        if (name) return name;
      }

      if (Array.isArray(buildingInfo?.data)) {
        const matched = buildingInfo.data.find(
          (item) => Number(item?.id || item?.attributes?.id) === id
        );
        const name = matched?.attributes?.buildingName || matched?.buildingName;
        if (name) return name;
      }

      if (Array.isArray(this.db_payment)) {
        const existing = this.db_payment.find(
          (item) => Number(item?.room_building?.id) === id && item?.room_building?.buildingName
        );
        if (existing?.room_building?.buildingName) {
          return existing.room_building.buildingName;
        }
      }

      return "-";
    },
    extractBuildingNameFromResponse(resp, buildingId) {
      const roomRows = resp?.room?.roomData || [];
      const paymentRows = resp?.paymentStatus?.paymentStatus || [];
      const serviceRows = resp?.service?.notiData || [];
      const announceRows = resp?.announcement?.announceData || [];

      const id = Number(buildingId);

      const roomName = roomRows.find((item) => Number(item?.room_building?.id) === id)
        ?.room_building?.buildingName;
      if (roomName) return roomName;

      const paymentName = paymentRows.find((item) => Number(item?.room_building?.id) === id)
        ?.room_building?.buildingName;
      if (paymentName) return paymentName;

      const serviceName = serviceRows.find(
        (item) => Number(item?.user_sign_contract?.room?.room_building?.id || item?.room_building?.id) === id
      )?.user_sign_contract?.room?.room_building?.buildingName ||
        serviceRows.find((item) => Number(item?.room_building?.id) === id)?.room_building?.buildingName;
      if (serviceName) return serviceName;

      const announceName = announceRows.find((item) => Number(item?.building?.id) === id)
        ?.building?.buildingName;
      if (announceName) return announceName;

      return this.getBuildingNameById(id);
    },
    attachBuildingToRoom(room, buildingId, buildingNameFromResponse) {
      const buildingName = buildingNameFromResponse || this.getBuildingNameById(buildingId);
      const existingBuilding = room?.room_building || {};

      const normalizedBuilding = {
        id: existingBuilding?.id || buildingId,
        buildingName: existingBuilding?.buildingName || buildingName,
      };

      const clonedRoom = {
        ...(room || {}),
        room_building: normalizedBuilding,
      };

      if (clonedRoom?.user_sign_contract?.room) {
        clonedRoom.user_sign_contract = {
          ...clonedRoom.user_sign_contract,
          room: {
            ...clonedRoom.user_sign_contract.room,
            room_building: clonedRoom.user_sign_contract.room?.room_building || normalizedBuilding,
          },
        };
      }

      return clonedRoom;
    },
    attachBuildingToService(service, buildingId, buildingNameFromResponse) {
      const buildingName = buildingNameFromResponse || this.getBuildingNameById(buildingId);
      const existingBuilding =
        service?.room_building || service?.user_sign_contract?.room?.room_building || {};

      const normalizedBuilding = {
        id: existingBuilding?.id || buildingId,
        buildingName: existingBuilding?.buildingName || buildingName,
      };

      const clonedService = {
        ...(service || {}),
        room_building: normalizedBuilding,
      };

      if (clonedService?.user_sign_contract?.room) {
        clonedService.user_sign_contract = {
          ...clonedService.user_sign_contract,
          room: {
            ...clonedService.user_sign_contract.room,
            room_building:
              clonedService.user_sign_contract.room?.room_building || normalizedBuilding,
          },
        };
      }

      return clonedService;
    },
    aggregateDashboardResponses(responses) {
      const roomData = [];
      const announcements = [];
      const services = [];
      const payments = [];
      const sumMeters = [];
      const expenseLists = [];
      const receives = [];
      const metas = [];

      responses.forEach((result) => {
        const resp = result?.response || result;
        const buildingId = result?.buildingId;
        const extractedBuildingName =
          result?.buildingName || this.extractBuildingNameFromResponse(resp, buildingId);

        if (buildingId !== undefined && buildingId !== null && extractedBuildingName) {
          this.buildingNameById = {
            ...this.buildingNameById,
            [Number(buildingId)]: extractedBuildingName,
          };
        }

        const rooms = (resp?.room?.roomData || []).map((room) =>
          this.attachBuildingToRoom(room, buildingId, extractedBuildingName)
        );
        const paymentRows = (resp?.paymentStatus?.paymentStatus || []).map((room) =>
          this.attachBuildingToRoom(room, buildingId, extractedBuildingName)
        );
        const serviceRows = (resp?.service?.notiData || []).map((service) =>
          this.attachBuildingToService(service, buildingId, extractedBuildingName)
        );

        roomData.push(...rooms);
        announcements.push(...(resp?.announcement?.announceData || []));
        services.push(...serviceRows);
        payments.push(...paymentRows);
        sumMeters.push(resp?.sumMeter || {});
        expenseLists.push(resp?.accounting?.expense || []);
        receives.push(this.toNumber(resp?.accounting?.receive));
        metas.push(resp?.room?.meta || {});
      });

      return {
        room: {
          roomData,
          meta: this.mergeRoomMeta(metas),
        },
        sumMeter: this.mergeMeterSummary(sumMeters),
        announcement: {
          announceData: announcements,
        },
        service: {
          notiData: services,
        },
        paymentStatus: {
          paymentStatus: payments,
        },
        accounting: {
          receive: receives.reduce((sum, value) => sum + this.toNumber(value), 0),
          expense: this.mergeExpenseByType(expenseLists),
        },
      };
    },
    applyDashboardResponse(resp) {
      this.db_meter = resp?.room?.roomData || [];
      this.db_meter2 = resp?.sumMeter || {};
      this.db_annocment = resp?.announcement?.announceData || [];
      this.db_services = resp?.service?.notiData || [];
      this.db_payment = resp?.paymentStatus?.paymentStatus || [];
      this.db_expense = {
        receive: Number(resp?.accounting?.receive || 0),
        expense: Array.isArray(resp?.accounting?.expense)
          ? resp.accounting.expense
          : [],
      };
      this.count_user = resp?.room?.meta || {};
      this.syncPaymentSummaryFromPaymentWidget();
    },
    hasTenant(room) {
      return !!room?.user_sign_contract?.users_permissions_user?.id;
    },
    getLatestBill(room) {
      const bills = room?.tenant_bills || [];
      if (!bills.length) {
        return null;
      }

      return bills.reduce((latest, bill) => {
        return new Date(bill.createdAt) > new Date(latest.createdAt) ? bill : latest;
      }, bills[0]);
    },
    syncPaymentSummaryFromPaymentWidget() {
      const paymentRows = Array.isArray(this.db_payment) ? this.db_payment : [];
      const tenantRooms = paymentRows.filter((room) => this.hasTenant(room));
      const total = tenantRooms.length;

      let paidCount = 0;
      let unpaidCount = 0;

      tenantRooms.forEach((room) => {
        const latestBill = this.getLatestBill(room);
        const status = latestBill?.paymentStatus;

        if (status === "Paid") {
          paidCount += 1;
        } else {
          unpaidCount += 1;
        }
      });

      const paidPercent = total > 0 ? ((paidCount / total) * 100).toFixed(2) : "0.00";
      const unpaidPercent = total > 0 ? ((unpaidCount / total) * 100).toFixed(2) : "0.00";

      this.count_user = {
        ...this.count_user,
        makePayment: paidCount,
        makePaymentPer: paidPercent,
        latePayment: unpaidCount,
        latePaymentPer: unpaidPercent,
      };
    },
    async routerTo(path) {
      await setTimeout(() => {
        this.sidebar = false;
      }, 1);
      if (path == "/") {
        this.$vs.loading({
          opacity: 1,
          color: "dark",
        });
        setTimeout(() => {
          window.location.reload();
        }, 100);
      }
      await this.$router.push({
        path: path,
      });
    },
    hideOverlay() {
      this.showOverlay = false; // Hide overlay when button is clicked
    },
    async getDashboard(check) {
      this.isAllBuildingView = check === true;
      if (this.isAllBuildingView) {
        this.buildingNameById = {};
      }

      const now = new Date();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = String(now.getFullYear());

      try {
        let finalResponse = null;

        if (this.isAllBuildingView) {
          const buildings = await this.getBuildingsForAggregation();

          this.buildingNameById = buildings.reduce((acc, item) => {
            acc[Number(item.id)] = item.buildingName || "-";
            return acc;
          }, {});

          const results = await Promise.allSettled(
            buildings.map(async ({ id: buildingId, buildingName }) => {
              const response = await this.fetchDashboardByBuilding(buildingId, month, year);
              const detectedName = this.extractBuildingNameFromResponse(response, buildingId);
              return {
                buildingId,
                buildingName: buildingName || detectedName,
                response,
              };
            })
          );

          const successResponses = results
            .filter((result) => result.status === "fulfilled")
            .map((result) => result.value);

          if (!successResponses.length) {
            throw new Error("No dashboard responses for all-building mode");
          }

          finalResponse = this.aggregateDashboardResponses(successResponses);
        } else {
          finalResponse = await this.fetchDashboardByBuilding(
            this.$store.state.building,
            month,
            year
          );
        }

        this.applyDashboardResponse(finalResponse);
      } catch (error) {
        console.error("getDashboard error:", error);
        this.db_meter = [];
        this.db_meter2 = {};
        this.db_annocment = [];
        this.db_services = [];
        this.db_payment = [];
        this.db_expense = { receive: 0, expense: [] };
        this.count_user = {};
      }
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensures it appears above other content */
}

.highlighted-menu {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.highlight-button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Blur effect */
.blur-sm {
  filter: blur(4px);
}

.pointer-events-none {
  pointer-events: none;
}

/* Relative positioning for overlay */
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>