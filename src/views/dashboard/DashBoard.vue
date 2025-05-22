<template>
  <div class="dashboard-wrapper" @click="hideOverlay()">
    <!-- Gray Overlay -->
    <div v-if="isCountUserEmpty" class="overlay">
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
              :childFunction2="getDashboard" 
              :routeLink="'/payment'" 
          />
          <Notification 
              :data="db_services" 
              :routeLink="'/staff'" 
          />
        </div>
        <div class="w-[44%]">
          <!-- Expenses component with conditional blur wrapper -->
          <div class="relative">
            <Expenses 
                :data="db_expense" 
                :routeLink="'/expenses'"
                :class="{ 'blur-sm pointer-events-none': isPackageBasic }"
            />
            <!-- Package upgrade overlay for basic package -->
            <div v-if="isPackageBasic" class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 rounded-lg">
              <div class="text-center p-4">
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
      db_expense: [],
      count_user: {},
      showOverlay: true,
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
    getDashboard(check) {
      console.log(check);
      fetch(
        `https://api.resguru.app/api/getdashboard?buildingid=${
          this.$store.state.building
        }&month=10&year=2023&allBuilding=${check == true ? "1" : "0"}&user_id=${
          this.$store.state.userInfo.id
        }`
      )
        .then((response) => response.json())
        .then((resp) => {
          console.log("Return from getRoom()", resp.sumMeter);
          this.db_meter = resp.room.roomData;
          this.db_meter2 = resp.sumMeter;
          this.db_annocment = resp.announcement.announceData;
          this.db_services = resp.service.notiData;
          this.db_payment = resp.paymentStatus.paymentStatus;
          this.db_expense = resp.accounting;
          this.count_user = resp.room.meta;
        });
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