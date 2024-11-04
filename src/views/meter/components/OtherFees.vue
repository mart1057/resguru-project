<template>
  <div class="mt-[14px] bg-[white] rounded-[12px] p-[24px]">
    <div class="font-bold text-[18px]">ชั้น {{ tab }}</div>
    <div class="mt-[14px]">
      <vs-table>
        <template #thead>
          <vs-tr>
            <vs-th> เลขห้อง </vs-th>
            <vs-th> สถานะห้อง </vs-th>
            <vs-th> ชื่อผู้เช่า </vs-th>
            <vs-th> รายการค่าบริการเสริม </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr :key="i" v-for="(tr, i) in OtherFee" :data="tr">
            <vs-td>
              {{ tr.attributes.RoomNumber }}
            </vs-td>
            <vs-td>
              <div class="flex justify-start items-center">
                <div
                  class="pl-[12px] pr-[12px] pb-[4px] pt-[4px] rounded-[12px] text-center"
                  :class="
                    tr.attributes.user_sign_contract.data
                      ? 'text-[#1DC56A] bg-[#D8FAD5]'
                      : 'text-[#8396A6] bg-[#DEEAF5]'
                  "
                >
                  {{
                    tr.attributes.user_sign_contract.data
                      ? "มีผู้เข้าพัก"
                      : "ห้องว่าง"
                  }}
                </div>
              </div>
            </vs-td>
            <vs-td>
              {{
                tr.attributes.user_sign_contract.data &&
                tr.attributes.user_sign_contract.data.attributes
                  .users_permissions_user.data &&
                tr.attributes.user_sign_contract.data.attributes
                  .users_permissions_user.data.attributes.firstName
                  ? tr.attributes.user_sign_contract.data.attributes
                      .users_permissions_user.data.attributes.firstName
                  : ""
              }}
              {{
                tr.attributes.user_sign_contract.data &&
                tr.attributes.user_sign_contract.data.attributes
                  .users_permissions_user.data &&
                tr.attributes.user_sign_contract.data.attributes
                  .users_permissions_user.data.attributes.lastName
                  ? tr.attributes.user_sign_contract.data.attributes
                      .users_permissions_user.data.attributes.lastName
                  : ""
              }}
            </vs-td>
            <vs-td>
              <div class="flex">
                <div v-for="data in tr.attributes.other_of_buildings.data">
                  <div
                    class="bg-[#3A89CB] pl-[10px] cursor-pointer pr-[10px] pb-[10px] pt-[10px] ml-[8px] rounded-[12px] text-[white]"
                  >
                    <div class="flex">
                      <div>
                        {{ data.attributes.title }} :
                        {{ data.attributes.price }}
                      </div>
                      <div class="flex items-center ml-[8px]"></div>
                    </div>
                  </div>
                </div>
                <!-- <vs-tooltip bottom shadow not-hover v-model="tr.add_item">
                                    <div @click="tr.add_item = true"
                                        class="bg-[#003765]  pl-[10px] cursor-pointer pr-[10px] pb-[10px] pt-[10px] ml-[8px] rounded-[12px] flex text-[white]">
                                        <div class="flex justify-center items-center"><svg width="16" height="15"
                                                viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.99968 12.6875C6.8048 12.6875 6.64155 12.6216 6.50993 12.4898C6.37831 12.3581 6.3125 12.1948 6.3125 12V7.18746H1.49998C1.30519 7.18746 1.14191 7.12155 1.01016 6.98973C0.878385 6.8579 0.8125 6.69455 0.8125 6.49968C0.8125 6.3048 0.878385 6.14155 1.01016 6.00993C1.14191 5.87831 1.30519 5.8125 1.49998 5.8125H6.3125V0.999977C6.3125 0.805185 6.37841 0.641904 6.51023 0.510133C6.64206 0.378378 6.80541 0.3125 7.00028 0.3125C7.19516 0.3125 7.35841 0.378378 7.49003 0.510133C7.62165 0.641904 7.68745 0.805185 7.68745 0.999977V5.8125H12.5C12.6948 5.8125 12.8581 5.87841 12.9898 6.01023C13.1216 6.14206 13.1875 6.30541 13.1875 6.50028C13.1875 6.69516 13.1216 6.85841 12.9898 6.99003C12.8581 7.12164 12.6948 7.18746 12.5 7.18746H7.68745V12C7.68745 12.1948 7.62155 12.3581 7.48973 12.4898C7.3579 12.6216 7.19455 12.6875 6.99968 12.6875Z"
                                                    fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                    <template #tooltip>
                                        <div class="w-[100%]">
                                            <div class="center">
                                                <vs-checkbox v-model="option">
                                                    <div class="text-custom">ที่จอดรถจักรยานยนต์</div>
                                                </vs-checkbox>
                                            </div>
                                            <div class="center">
                                                <vs-checkbox v-model="option">
                                                    <div class="text-custom">ที่จอดรถยนต์</div>
                                                </vs-checkbox>
                                            </div>
                                            <div class="center">
                                                <vs-checkbox v-model="option">
                                                    <div class="text-custom">อินเทอร์เน็ต</div>
                                                </vs-checkbox>
                                            </div>
                                            <div class="center">
                                                <vs-checkbox v-model="option">
                                                    <div class="text-custom">บริการเสริม</div>
                                                </vs-checkbox>
                                            </div>
                                        </div>
                                    </template>
                                </vs-tooltip> -->
              </div>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tab: { type: { String } },
    id: { type: { String } },
  },
  data() {
    return {
      add_item: false,
      OtherFee: [],
      code: 0,
      text: "",
      month: "",
      year: "",
    };
  },
  created() {
    const loading = this.$vs.loading({});
    setTimeout(() => {
      loading.close();
    }, 1000);
  },
  mounted() {
    const dateStr = new Date().toISOString().substr(0, 7);
    const [y, m] = dateStr.split("-");
    this.month = m;
    this.year = y;
    this.getOtherFee(this.id, this.month, this.year);
  },
  methods: {
    getOtherFee(id, m, y) {
      //// รอ custom api เดือน/ปี
      const loading = this.$vs.loading();
      fetch(
        `https://api.resguru.app/api/rooms?filters[room_building][id][$eq]=${this.$store.state.building}&filters[building_floor][id][$eq]=${id}&sort[0]=RoomNumber&populate=deep,3`
      )
        .then((response) => response.json())
        .then((resp) => {
          console.log("Return from getCommonFeeRoom()", resp.data);
          if (this.code == 8) {
            this.OtherFee = resp.data.filter((item) =>
              item.attributes.RoomNumber.toLowerCase().includes(
                this.text.toLowerCase()
              )
            );
          } else {
            this.OtherFee = resp.data;
          }
        })
        .finally(() => {
          loading.close();
        });
    },
    filterData(text, code) {
      this.text = text;
      console.log("filter", text);
      this.OtherFee = this.OtherFee.filter((item) =>
        item.attributes.RoomNumber.toLowerCase().includes(text.toLowerCase())
      );
      if (text == "") {
        this.getOtherFee(this.id, this.month, this.year);
      }
      if (code == 8) {
        this.code = 8;
        this.getOtherFee(this.id, this.month, this.year);
      }
    },
  },
};
</script>
