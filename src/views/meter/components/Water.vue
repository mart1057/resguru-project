<template>
  <div class="mt-[14px] bg-[white] rounded-[12px] p-[24px]">
    <div class="flex justify-between">
      <div class="font-bold text-[18px]">ชั้น {{ tab }}</div>
      <!-- <div
        @click="updateMeterAll(WaterFee.map((data) => data.newWater))"
        :disabled="WaterFee.length < 1"
      >
        <vs-button>บันทึกทั้งหมด</vs-button>
      </div> -->
    </div>

    <div class="mt-[14px]">
      <vs-table>
        <template #thead>
          <vs-tr>
            <vs-th> เลขห้อง </vs-th>
            <vs-th> สถานะห้อง </vs-th>
            <vs-th> ชื่อผู้เช่า </vs-th>
            <vs-th> เลขมิเตอร์เดือนก่อนหน้า </vs-th>
            <vs-th> เลขมิเตอร์เดือนล่าสุด </vs-th>
            <vs-th> หน่วยที่ใช้ </vs-th>
            <vs-th> Action </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr :key="i" v-for="(tr, i) in WaterFee" :data="tr">
            <vs-td>
              {{ tr.RoomNumber }}
            </vs-td>
            <vs-td>
              <div class="flex justify-start items-center">
                <div
                  class="pl-[12px] pr-[12px] pb-[4px] pt-[4px] rounded-[12px] text-center"
                  :class="
                    tr.user_sign_contract
                      ? 'text-[#1DC56A] bg-[#D8FAD5]'
                      : 'text-[#8396A6] bg-[#DEEAF5]'
                  "
                >
                  {{ tr.user_sign_contract ? "มีผู้เข้าพัก" : "ห้องว่าง" }}
                </div>
              </div>
            </vs-td>
            <vs-td>
              {{
                tr.user_sign_contract
                  ? tr.user_sign_contract.users_permissions_user.firstName +
                    " " +
                    tr.user_sign_contract.users_permissions_user.lastName
                  : ""
              }}
            </vs-td>
            <vs-td>
              <div>
                <div v-if="tr.water_fees[1]">
                  <vs-input disabled v-model="tr.water_fees[1].meterUnit">
                    <template #icon>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_3354_881"
                          style="mask-type: alpha"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="25"
                        >
                          <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_3354_881)">
                          <path
                            d="M12 21.9998C10.0156 21.9998 8.26953 21.3072 6.76172 19.9221C5.25391 18.5369 4.5 16.6627 4.5 14.2994C4.5 12.8125 5.06635 11.1953 6.19905 9.44791C7.33173 7.70048 9.04392 5.79805 11.3356 3.74063C11.4298 3.66088 11.5339 3.59922 11.648 3.55563C11.7621 3.51203 11.8795 3.49023 12 3.49023C12.1205 3.49023 12.2378 3.51203 12.3519 3.55563C12.466 3.59922 12.5701 3.66088 12.6643 3.74063C14.956 5.79805 16.6682 7.70048 17.8009 9.44791C18.9336 11.1953 19.5 12.8125 19.5 14.2994C19.5 16.6627 18.746 18.5369 17.2382 19.9221C15.7304 21.3072 13.9843 21.9998 12 21.9998ZM12 20.4998C13.6769 20.4998 15.0961 19.9232 16.2577 18.77C17.4192 17.6168 18 16.1267 18 14.2998C18 13.1165 17.5083 11.7623 16.525 10.2373C15.5416 8.71231 14.0333 7.01648 12 5.14981C9.96664 7.01648 8.45831 8.71231 7.47497 10.2373C6.49164 11.7623 5.99997 13.1165 5.99997 14.2998C5.99997 16.1267 6.58074 17.6168 7.74227 18.77C8.90382 19.9232 10.3231 20.4998 12 20.4998ZM12.2461 19.346C12.4205 19.3293 12.5641 19.2641 12.6769 19.1503C12.7897 19.0365 12.8461 18.8993 12.8461 18.7386C12.8461 18.5512 12.7846 18.4027 12.6617 18.2931C12.5387 18.1835 12.3816 18.137 12.1903 18.1537C11.507 18.2037 10.7628 18.0033 9.95765 17.5527C9.15253 17.1021 8.64997 16.3184 8.44997 15.2017C8.41664 15.0312 8.34517 14.8972 8.23555 14.7998C8.12593 14.7024 7.99548 14.6537 7.8442 14.6537C7.66215 14.6537 7.51055 14.7219 7.3894 14.8585C7.26825 14.995 7.22948 15.1703 7.27308 15.3844C7.54358 16.837 8.19742 17.8754 9.2346 18.4998C10.2718 19.1242 11.2756 19.4062 12.2461 19.346Z"
                            fill="#003765"
                          />
                        </g>
                      </svg>
                    </template>
                  </vs-input>
                </div>
                <div v-else>
                  <vs-input disabled value="0">
                    <template #icon>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_3354_881"
                          style="mask-type: alpha"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="25"
                        >
                          <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_3354_881)">
                          <path
                            d="M12 21.9998C10.0156 21.9998 8.26953 21.3072 6.76172 19.9221C5.25391 18.5369 4.5 16.6627 4.5 14.2994C4.5 12.8125 5.06635 11.1953 6.19905 9.44791C7.33173 7.70048 9.04392 5.79805 11.3356 3.74063C11.4298 3.66088 11.5339 3.59922 11.648 3.55563C11.7621 3.51203 11.8795 3.49023 12 3.49023C12.1205 3.49023 12.2378 3.51203 12.3519 3.55563C12.466 3.59922 12.5701 3.66088 12.6643 3.74063C14.956 5.79805 16.6682 7.70048 17.8009 9.44791C18.9336 11.1953 19.5 12.8125 19.5 14.2994C19.5 16.6627 18.746 18.5369 17.2382 19.9221C15.7304 21.3072 13.9843 21.9998 12 21.9998ZM12 20.4998C13.6769 20.4998 15.0961 19.9232 16.2577 18.77C17.4192 17.6168 18 16.1267 18 14.2998C18 13.1165 17.5083 11.7623 16.525 10.2373C15.5416 8.71231 14.0333 7.01648 12 5.14981C9.96664 7.01648 8.45831 8.71231 7.47497 10.2373C6.49164 11.7623 5.99997 13.1165 5.99997 14.2998C5.99997 16.1267 6.58074 17.6168 7.74227 18.77C8.90382 19.9232 10.3231 20.4998 12 20.4998ZM12.2461 19.346C12.4205 19.3293 12.5641 19.2641 12.6769 19.1503C12.7897 19.0365 12.8461 18.8993 12.8461 18.7386C12.8461 18.5512 12.7846 18.4027 12.6617 18.2931C12.5387 18.1835 12.3816 18.137 12.1903 18.1537C11.507 18.2037 10.7628 18.0033 9.95765 17.5527C9.15253 17.1021 8.64997 16.3184 8.44997 15.2017C8.41664 15.0312 8.34517 14.8972 8.23555 14.7998C8.12593 14.7024 7.99548 14.6537 7.8442 14.6537C7.66215 14.6537 7.51055 14.7219 7.3894 14.8585C7.26825 14.995 7.22948 15.1703 7.27308 15.3844C7.54358 16.837 8.19742 17.8754 9.2346 18.4998C10.2718 19.1242 11.2756 19.4062 12.2461 19.346Z"
                            fill="#003765"
                          />
                        </g>
                      </svg>
                    </template>
                  </vs-input>
                </div>
              </div>
            </vs-td>
            <vs-td v-if="tr.water_fees[0]">
              <!-- case HAVE last month water -->
              <vs-input v-model="tr.water_fees[0].meterUnit">
                <template #icon>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_3354_881"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="25"
                    >
                      <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_3354_881)">
                      <path
                        d="M12 21.9998C10.0156 21.9998 8.26953 21.3072 6.76172 19.9221C5.25391 18.5369 4.5 16.6627 4.5 14.2994C4.5 12.8125 5.06635 11.1953 6.19905 9.44791C7.33173 7.70048 9.04392 5.79805 11.3356 3.74063C11.4298 3.66088 11.5339 3.59922 11.648 3.55563C11.7621 3.51203 11.8795 3.49023 12 3.49023C12.1205 3.49023 12.2378 3.51203 12.3519 3.55563C12.466 3.59922 12.5701 3.66088 12.6643 3.74063C14.956 5.79805 16.6682 7.70048 17.8009 9.44791C18.9336 11.1953 19.5 12.8125 19.5 14.2994C19.5 16.6627 18.746 18.5369 17.2382 19.9221C15.7304 21.3072 13.9843 21.9998 12 21.9998ZM12 20.4998C13.6769 20.4998 15.0961 19.9232 16.2577 18.77C17.4192 17.6168 18 16.1267 18 14.2998C18 13.1165 17.5083 11.7623 16.525 10.2373C15.5416 8.71231 14.0333 7.01648 12 5.14981C9.96664 7.01648 8.45831 8.71231 7.47497 10.2373C6.49164 11.7623 5.99997 13.1165 5.99997 14.2998C5.99997 16.1267 6.58074 17.6168 7.74227 18.77C8.90382 19.9232 10.3231 20.4998 12 20.4998ZM12.2461 19.346C12.4205 19.3293 12.5641 19.2641 12.6769 19.1503C12.7897 19.0365 12.8461 18.8993 12.8461 18.7386C12.8461 18.5512 12.7846 18.4027 12.6617 18.2931C12.5387 18.1835 12.3816 18.137 12.1903 18.1537C11.507 18.2037 10.7628 18.0033 9.95765 17.5527C9.15253 17.1021 8.64997 16.3184 8.44997 15.2017C8.41664 15.0312 8.34517 14.8972 8.23555 14.7998C8.12593 14.7024 7.99548 14.6537 7.8442 14.6537C7.66215 14.6537 7.51055 14.7219 7.3894 14.8585C7.26825 14.995 7.22948 15.1703 7.27308 15.3844C7.54358 16.837 8.19742 17.8754 9.2346 18.4998C10.2718 19.1242 11.2756 19.4062 12.2461 19.346Z"
                        fill="#003765"
                      />
                    </g>
                  </svg>
                </template>
              </vs-input>
            </vs-td>
            <vs-td v-else>
              <!-- case no last month water -->
              <vs-input class="newWater" v-model="tr.newWater">
                <template #icon>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_3354_881"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="25"
                    >
                      <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_3354_881)">
                      <path
                        d="M12 21.9998C10.0156 21.9998 8.26953 21.3072 6.76172 19.9221C5.25391 18.5369 4.5 16.6627 4.5 14.2994C4.5 12.8125 5.06635 11.1953 6.19905 9.44791C7.33173 7.70048 9.04392 5.79805 11.3356 3.74063C11.4298 3.66088 11.5339 3.59922 11.648 3.55563C11.7621 3.51203 11.8795 3.49023 12 3.49023C12.1205 3.49023 12.2378 3.51203 12.3519 3.55563C12.466 3.59922 12.5701 3.66088 12.6643 3.74063C14.956 5.79805 16.6682 7.70048 17.8009 9.44791C18.9336 11.1953 19.5 12.8125 19.5 14.2994C19.5 16.6627 18.746 18.5369 17.2382 19.9221C15.7304 21.3072 13.9843 21.9998 12 21.9998ZM12 20.4998C13.6769 20.4998 15.0961 19.9232 16.2577 18.77C17.4192 17.6168 18 16.1267 18 14.2998C18 13.1165 17.5083 11.7623 16.525 10.2373C15.5416 8.71231 14.0333 7.01648 12 5.14981C9.96664 7.01648 8.45831 8.71231 7.47497 10.2373C6.49164 11.7623 5.99997 13.1165 5.99997 14.2998C5.99997 16.1267 6.58074 17.6168 7.74227 18.77C8.90382 19.9232 10.3231 20.4998 12 20.4998ZM12.2461 19.346C12.4205 19.3293 12.5641 19.2641 12.6769 19.1503C12.7897 19.0365 12.8461 18.8993 12.8461 18.7386C12.8461 18.5512 12.7846 18.4027 12.6617 18.2931C12.5387 18.1835 12.3816 18.137 12.1903 18.1537C11.507 18.2037 10.7628 18.0033 9.95765 17.5527C9.15253 17.1021 8.64997 16.3184 8.44997 15.2017C8.41664 15.0312 8.34517 14.8972 8.23555 14.7998C8.12593 14.7024 7.99548 14.6537 7.8442 14.6537C7.66215 14.6537 7.51055 14.7219 7.3894 14.8585C7.26825 14.995 7.22948 15.1703 7.27308 15.3844C7.54358 16.837 8.19742 17.8754 9.2346 18.4998C10.2718 19.1242 11.2756 19.4062 12.2461 19.346Z"
                        fill="#003765"
                      />
                    </g>
                  </svg>
                </template>
              </vs-input>
            </vs-td>
            <vs-td>
              <div v-if="tr.water_fees[1]">
                {{
                  tr.water_fees[0]
                    ? tr.water_fees[0].meterUnit - tr.water_fees[1].meterUnit
                    : 0
                }}
              </div>
              <div v-else-if="!tr.water_fees[1] && tr.water_fees[0]">
                {{ tr.water_fees[0].meterUnit }}
              </div>
              <div v-else>
                {{
                  tr.water_fees[0] ? tr.water_fees[0].usageMeter : tr.newWater
                }}
              </div>
            </vs-td>
            <vs-td>
              <!-- Action HERE -->
              <div>
                <div v-if="tr.water_fees[1]">
                  <!-- Save when HAVE last month -->
                  <vs-button
                    @click="
                      updateWaterfee(
                        tr.water_fees[0].id,
                        // tr.water_fees[0].meterUnit,
                        // tr.water_fees[0].meterUnit - tr.water_fees[1].meterUnit
                        tr.water_fees[0].meterUnit,
                        tr.water_fees[0].meterUnit - tr.water_fees[1].meterUnit
                      )
                    "
                    >บันทึก</vs-button
                  >
                </div>
                <div v-else-if="tr.water_fees[0]">
                  <!-- Save when HAVE last month -->
                  <vs-button
                    @click="
                      updateWaterfee(
                        tr.water_fees[0].id,
                        tr.water_fees[0].meterUnit,
                        tr.water_fees[0].meterUnit
                      )
                    "
                    >บันทึก</vs-button
                  >
                </div>
                <div v-else>
                  <!-- Save when no last month -->
                  <vs-button
                    :disabled="!tr.newWater"
                    @click="
                      createNewWaterfee(
                        tr.id, // roomID
                        tr.user_sign_contract.id,
                        // tr.water_fees[0].id,
                        // tr.water_fees[0].meterUnit,
                        // tr.water_fees[0].meterUnit
                        tr.newWater,
                        tr.newWater
                      )
                    "
                    >บันทึก</vs-button
                  >
                </div>
              </div>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  props: {
    tab: { type: { String } },
    id: { type: { String } },
  },
  data() {
    return {
      WaterFee: [],
      waterUnit: 0,
      floor: [],
      code: 0,
      text: "",
      month: "",
      year: "",
      importExcel: [],
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
    this.getWaterFee(this.id, this.month, this.year);
  },
  methods: {
    getWaterFee(id, m, y) {
      console.log("month", m);
      console.log("year", y);
      this.WaterFee = [];
      const loading = this.$vs.loading();
      fetch(
        `https://api.resguru.app/api/getwaterlist?buildingid=${this.$store.state.building}&buildingFloor=${id}&month=${m}&year=${y}`
      )
        .then((response) => response.json())
        .then((resp) => {
          console.log("Return from getCommonFeeRoom()", resp.data);
          if (this.code == 8) {
            this.WaterFee = resp.data.filter((item) =>
              item.RoomNumber.toLowerCase().includes(this.text.toLowerCase())
            );
          } else {
            this.WaterFee = resp.data;
          }
        })
        .finally(() => {
          loading.close();
        });
    },
    createNewWaterfee(room, user_sign_contract, waterUnit, usageMeter) {
      console.log("room", room);
      console.log("user_sign_contract", user_sign_contract);
      console.log("waterUnit", waterUnit);
      console.log("usageMeter", usageMeter);
      axios
        .post(`https://api.resguru.app/api/water-fees/`, {
          data: {
            room: room,
            user_sign_contract: user_sign_contract,
            meterUnit: waterUnit,
            usageMeter: usageMeter,
          },
        })
        .then((resp) => {})
        .catch((error) => {
          const errorMessage = error.message
            ? error.message
            : "Error updating information";
          this.$showNotification("danger", errorMessage);
        })
        .finally(() => {
          this.$showNotification("#3A89CB", "Update Water Fee Success");
          this.getWaterFee(this.id, this.month, this.year);
        });
    },
    updateWaterfee(waterFeeId, waterUnit, usageMeter) {
      // console.log("Received values:", {
      //   waterFeeId,
      //   waterUnit,
      //   usageMeter
      // });
      axios
        .put(`https://api.resguru.app/api/water-fees/${waterFeeId}`, {
          data: {
            meterUnit: waterUnit,
            usageMeter: usageMeter,
          },
        })
        .then((resp) => {})
        .catch((error) => {
          const errorMessage = error.message
            ? error.message
            : "Error updating information";
          this.$showNotification("danger", errorMessage);
        })
        .finally(() => {
          this.$showNotification("#3A89CB", "Update Water Fee Success");
          this.getWaterFee(this.id, this.month, this.year);
        });
    },
    updateMeterAll(newWaterArray) {
      if (this.WaterFee.length > 0) {
        // console.log(this.WaterFee.length);
        const loading = this.$vs.loading();
        // Collect all newWater values into an array

        this.WaterFee.forEach((data, i) => {
          console.log("data", i, data);

          if (data.water_fees[0] && data.water_fees[0].meterUnit) {
            console.log("RESD", i, data);
            axios
              .put(
                `https://api.resguru.app/api/water-fees/${data.water_fees[0].id}`,
                {
                  data: {
                    meterUnit: parseInt(data.newWater),
                  },
                }
              )
              .then(() => {
                // if (this.WaterFee.length == i + 1) {
                //   loading.close();
                //   this.$showNotification("#3A89CB", "Update Water Fee Success");
                // }
              });
          } else if (data.water_fees[0]) {
            console.log("data2 else", i, data.water_fees[0].meterUnit);
            axios
              .post(`https://api.resguru.app/api/water-fees/`, {
                data: {
                  room: data.id,
                  user_sign_contract: data.user_sign_contract.id,
                  meterUnit: parseInt(data.water_fees[0].meterUnit),
                  usageMeter: parseInt(data.water_fees[0].meterUnit),
                },
              })
              .then(() => {})
              .catch((error) => {
                const errorMessage = error.message
                  ? error.message
                  : "Error updating information";
                this.$showNotification("danger", errorMessage);
              });
          }
        });
        loading.close();
        this.$showNotification("#3A89CB", "Update Water Fee Success");
      }
    },
    filterData(text, code) {
      this.text = text;
      console.log("filter", text);
      this.WaterFee = this.WaterFee.filter((item) =>
        item.RoomNumber.toLowerCase().includes(text.toLowerCase())
      );
      if (text == "") {
        this.getWaterFee(this.id, this.month, this.year);
      }
      if (code == 8) {
        this.code = 8;
        this.getWaterFee(this.id, this.month, this.year);
      }
    },
    // importWater(){
    //             this.importExcel = this.$refs.importExcel.files[0]
    //             if(this.importExcel.length != 0){
    //                         let formData = new FormData();
    //                         formData.append("file", this.fileBanner);
    //                         formData.append("building", String(this.$store.state.building));
    //                         axios.put("https://api.resguru.app/api/importWater", formData, {
    //                             headers: {
    //                             "Content-Type": "multipart/form-data",
    //                             },
    //                         })
    //                         .then( (resp) =>{
    //                             console.log(resp)
    //                         })
    //                         .catch(error => {
    //                         const errorMessage = error.message ? error.message : 'Error updating information';
    //                         this.$showNotification('danger', errorMessage);
    //                         })
    //                         .finally(()=>{
    //                             this.getBuildingData();
    //                             this.$showNotification('#3A89CB', 'Import Excel Success')
    //                         })
    //             }
    // }
  },
  // watch: {
  //   WaterFee: {
  //     handler(newVal) {
  //       console.log("Updated WaterFee:", newVal);
  //     },
  //     deep: true,
  //   },
  // },
};
</script>
