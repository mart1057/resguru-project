<template>
  <div class="pl-[20px] pr-[20px] pt-[10px]">
    <div
      class="text-[18px] h-[100%] bg-[white] rounded-t-lg pt-[28px] pl-[28px] pr-[28px] flex flex-col justify-end mt-[14px]"
    >
      <div class="flex justify-center">
        <div
          class="flex justify-center items-center cursor-pointer"
          :class="tab == 1 ? 'font-bold text-[20px]' : ''"
          @click="tab = 1"
        >
          โปรไฟล์
        </div>
        <div
          class="flex justify-center items-center ml-[24px] cursor-pointer"
          :class="tab == 2 ? 'font-bold text-[20px]' : ''"
          @click="tab = 2"
        >
          จัดการห้องพัก
        </div>
        <div
          class="flex justify-center items-center ml-[24px] cursor-pointer"
          :class="tab == 3 ? 'font-bold text-[20px]' : ''"
          @click="tab = 3"
        >
          ค่าน้ำค่าไฟและบริการ
        </div>
        <div
          class="flex justify-center items-center ml-[24px] cursor-pointer"
          :class="tab == 4 ? 'font-bold text-[20px]' : ''"
          @click="tab = 4"
        >
          ข้อมูลบัญชีธนาคาร
        </div>
        <!-- <div class="flex justify-center items-center ml-[24px] cursor-pointer"
                    :class="tab == 5 ? 'font-bold text-[16px]' : ''" @click="tab = 5">การจัดการสัญญา</div> -->
        <div
          class="flex justify-center items-center ml-[24px] cursor-pointer"
          :class="tab == 6 ? 'font-bold text-[20px]' : ''"
          @click="tab = 6"
        >
          บุคลากร
        </div>
      </div>
      <div
        class="w-[100%] h-[1px] mb-[14px] bg-gray-200 border-0 dark:bg-gray-700"
      ></div>
    </div>
    <Profile v-if="tab == 1" />
    <Room v-else-if="tab == 2" />
    <Meter v-else-if="tab == 3" />
    <Payment v-else-if="tab == 4" />
    <Contract v-else-if="tab == 5" />
    <Empolyee v-else-if="tab == 6" />
  </div>
</template>
<script>
import Profile from "@/views/setting/components/Profile.vue";
import Room from "./components/Room.vue";
import Meter from "./components/Meter.vue";
import Payment from "./components/Payment.vue";
import Contract from "./components/Contract.vue";
import Empolyee from "./components/Empolyee.vue";
export default {
  components: { Profile, Room, Meter, Payment, Contract, Empolyee },
  data() {
    return {
      tab: 1,
    };
  },
  created() {
    const loading = this.$vs.loading({
      opacity: 1,
    });
    setTimeout(() => {
      loading.close();
    }, 50);
  },
  mounted() {
    this.queryTab();
  },
  methods: {
    queryTab() {
      this.tab = 1;
      if (this.$route.query.tab !== undefined) {
        this.tab = this.$route.query.tab;
      }
    },
  },
};
</script>
