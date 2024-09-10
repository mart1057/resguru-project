<template>
  <div class="dashboard-wrapper" @click="hideOverlay()">
    <!-- Gray Overlay -->
    <div v-if="showOverlay" class="overlay">
      <div class="highlighted-menu">
        <p>
          Welcome to ResGuru, Please add Room and Utility cost in our setting
          menu here.
        </p>
        <!-- <button @click="hideOverlay" class="highlight-button"> -->
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
          <PayMent :data="db_payment" :childFunction2="getDashboard" />
          <Notification :data="db_services" />
        </div>
        <div class="w-[44%]">
          <Expenses :data="db_expense" />
          <Meters :data="db_meter" />
          <News :data="db_annocment" />
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
      showOverlay: true, // Initially show the overlay
    };
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
          // this.count_user = resp.room
        });
    },
  },
};
</script>
<!-- <style> -->
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
</style>
