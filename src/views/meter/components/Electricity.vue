<template>
  <div class="mt-[14px] bg-[white] rounded-[12px] p-[24px]">
    <div class="flex justify-between">
      <div class="font-bold text-[18px]">ชั้น {{ tab }}</div>
      <!-- <div
        @click="updateMeterAll(ElectricityFee.map((data) => data.newElec))"
        :disabled="ElectricityFee.length < 1"
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
          <vs-tr :key="i" v-for="(tr, i) in ElectricityFee" :data="tr">
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
                <div v-if="tr.electric_fees[1]">
                  <vs-input disabled v-model="tr.electric_fees[1].electicUnit">
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
                            d="M34.4999 61.8126C28.7949 61.8126 23.7749 59.8215 19.44 55.8392C15.105 51.8569 12.9375 46.4685 12.9375 39.6739C12.9375 35.3991 14.5658 30.7498 17.8223 25.726C21.0787 20.7021 26.0013 15.2326 32.5899 9.31756C32.8607 9.08827 33.1601 8.91098 33.4881 8.78568C33.8162 8.66033 34.1534 8.59766 34.4999 8.59766C34.8464 8.59766 35.1837 8.66033 35.5117 8.78568C35.8397 8.91098 36.1392 9.08827 36.4099 9.31756C42.9986 15.2326 47.9211 20.7021 51.1776 25.726C54.4341 30.7498 56.0624 35.3991 56.0624 39.6739C56.0624 46.4685 53.8949 51.8569 49.5599 55.8392C45.225 59.8215 40.205 61.8126 34.4999 61.8126ZM34.4999 57.5002C39.3211 57.5002 43.4014 55.8425 46.7408 52.527C50.0802 49.2115 51.7499 44.9276 51.7499 39.6752C51.7499 36.2731 50.3364 32.3799 47.5093 27.9955C44.6822 23.6111 40.3458 18.7356 34.4999 13.3689C28.6541 18.7356 24.3176 23.6111 21.4906 27.9955C18.6635 32.3799 17.2499 36.2731 17.2499 39.6752C17.2499 44.9276 18.9196 49.2115 22.259 52.527C25.5985 55.8425 29.6788 57.5002 34.4999 57.5002ZM35.2076 54.1829C35.7089 54.1349 36.1217 53.9474 36.4461 53.6202C36.7704 53.2931 36.9326 52.8986 36.9326 52.4368C36.9326 51.898 36.7558 51.471 36.4023 51.1559C36.0488 50.8407 35.5971 50.7071 35.0473 50.755C33.0827 50.8988 30.943 50.3228 28.6282 49.0273C26.3135 47.7317 24.8687 45.4786 24.2937 42.2682C24.1978 41.778 23.9924 41.3928 23.6772 41.1127C23.3621 40.8326 22.987 40.6925 22.5521 40.6925C22.0287 40.6925 21.5928 40.8888 21.2445 41.2813C20.8962 41.6739 20.7847 42.1779 20.9101 42.7935C21.6878 46.9696 23.5676 49.9551 26.5495 51.7502C29.5314 53.5452 32.4174 54.3561 35.2076 54.1829Z"
                            :fill="tab == 1 ? 'white' : '#003765'"
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
                            d="M34.4999 61.8126C28.7949 61.8126 23.7749 59.8215 19.44 55.8392C15.105 51.8569 12.9375 46.4685 12.9375 39.6739C12.9375 35.3991 14.5658 30.7498 17.8223 25.726C21.0787 20.7021 26.0013 15.2326 32.5899 9.31756C32.8607 9.08827 33.1601 8.91098 33.4881 8.78568C33.8162 8.66033 34.1534 8.59766 34.4999 8.59766C34.8464 8.59766 35.1837 8.66033 35.5117 8.78568C35.8397 8.91098 36.1392 9.08827 36.4099 9.31756C42.9986 15.2326 47.9211 20.7021 51.1776 25.726C54.4341 30.7498 56.0624 35.3991 56.0624 39.6739C56.0624 46.4685 53.8949 51.8569 49.5599 55.8392C45.225 59.8215 40.205 61.8126 34.4999 61.8126ZM34.4999 57.5002C39.3211 57.5002 43.4014 55.8425 46.7408 52.527C50.0802 49.2115 51.7499 44.9276 51.7499 39.6752C51.7499 36.2731 50.3364 32.3799 47.5093 27.9955C44.6822 23.6111 40.3458 18.7356 34.4999 13.3689C28.6541 18.7356 24.3176 23.6111 21.4906 27.9955C18.6635 32.3799 17.2499 36.2731 17.2499 39.6752C17.2499 44.9276 18.9196 49.2115 22.259 52.527C25.5985 55.8425 29.6788 57.5002 34.4999 57.5002ZM35.2076 54.1829C35.7089 54.1349 36.1217 53.9474 36.4461 53.6202C36.7704 53.2931 36.9326 52.8986 36.9326 52.4368C36.9326 51.898 36.7558 51.471 36.4023 51.1559C36.0488 50.8407 35.5971 50.7071 35.0473 50.755C33.0827 50.8988 30.943 50.3228 28.6282 49.0273C26.3135 47.7317 24.8687 45.4786 24.2937 42.2682C24.1978 41.778 23.9924 41.3928 23.6772 41.1127C23.3621 40.8326 22.987 40.6925 22.5521 40.6925C22.0287 40.6925 21.5928 40.8888 21.2445 41.2813C20.8962 41.6739 20.7847 42.1779 20.9101 42.7935C21.6878 46.9696 23.5676 49.9551 26.5495 51.7502C29.5314 53.5452 32.4174 54.3561 35.2076 54.1829Z"
                            :fill="tab == 1 ? 'white' : '#003765'"
                          />
                        </g>
                      </svg>
                    </template>
                  </vs-input>
                </div>
              </div>
            </vs-td>
            <vs-td v-if="tr.electric_fees[0]">
              <!-- case HAVE last month elec -->
              <vs-input v-model="tr.electric_fees[0].electicUnit">
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
                        d="M34.4999 61.8126C28.7949 61.8126 23.7749 59.8215 19.44 55.8392C15.105 51.8569 12.9375 46.4685 12.9375 39.6739C12.9375 35.3991 14.5658 30.7498 17.8223 25.726C21.0787 20.7021 26.0013 15.2326 32.5899 9.31756C32.8607 9.08827 33.1601 8.91098 33.4881 8.78568C33.8162 8.66033 34.1534 8.59766 34.4999 8.59766C34.8464 8.59766 35.1837 8.66033 35.5117 8.78568C35.8397 8.91098 36.1392 9.08827 36.4099 9.31756C42.9986 15.2326 47.9211 20.7021 51.1776 25.726C54.4341 30.7498 56.0624 35.3991 56.0624 39.6739C56.0624 46.4685 53.8949 51.8569 49.5599 55.8392C45.225 59.8215 40.205 61.8126 34.4999 61.8126ZM34.4999 57.5002C39.3211 57.5002 43.4014 55.8425 46.7408 52.527C50.0802 49.2115 51.7499 44.9276 51.7499 39.6752C51.7499 36.2731 50.3364 32.3799 47.5093 27.9955C44.6822 23.6111 40.3458 18.7356 34.4999 13.3689C28.6541 18.7356 24.3176 23.6111 21.4906 27.9955C18.6635 32.3799 17.2499 36.2731 17.2499 39.6752C17.2499 44.9276 18.9196 49.2115 22.259 52.527C25.5985 55.8425 29.6788 57.5002 34.4999 57.5002ZM35.2076 54.1829C35.7089 54.1349 36.1217 53.9474 36.4461 53.6202C36.7704 53.2931 36.9326 52.8986 36.9326 52.4368C36.9326 51.898 36.7558 51.471 36.4023 51.1559C36.0488 50.8407 35.5971 50.7071 35.0473 50.755C33.0827 50.8988 30.943 50.3228 28.6282 49.0273C26.3135 47.7317 24.8687 45.4786 24.2937 42.2682C24.1978 41.778 23.9924 41.3928 23.6772 41.1127C23.3621 40.8326 22.987 40.6925 22.5521 40.6925C22.0287 40.6925 21.5928 40.8888 21.2445 41.2813C20.8962 41.6739 20.7847 42.1779 20.9101 42.7935C21.6878 46.9696 23.5676 49.9551 26.5495 51.7502C29.5314 53.5452 32.4174 54.3561 35.2076 54.1829Z"
                        :fill="tab == 1 ? 'white' : '#003765'"
                      />
                    </g>
                  </svg>
                </template>
              </vs-input>
            </vs-td>
            <vs-td v-else>
              <!-- case no last month elec -->
              <vs-input class="newElec" v-model="tr.newElec">
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
                        d="M34.4999 61.8126C28.7949 61.8126 23.7749 59.8215 19.44 55.8392C15.105 51.8569 12.9375 46.4685 12.9375 39.6739C12.9375 35.3991 14.5658 30.7498 17.8223 25.726C21.0787 20.7021 26.0013 15.2326 32.5899 9.31756C32.8607 9.08827 33.1601 8.91098 33.4881 8.78568C33.8162 8.66033 34.1534 8.59766 34.4999 8.59766C34.8464 8.59766 35.1837 8.66033 35.5117 8.78568C35.8397 8.91098 36.1392 9.08827 36.4099 9.31756C42.9986 15.2326 47.9211 20.7021 51.1776 25.726C54.4341 30.7498 56.0624 35.3991 56.0624 39.6739C56.0624 46.4685 53.8949 51.8569 49.5599 55.8392C45.225 59.8215 40.205 61.8126 34.4999 61.8126ZM34.4999 57.5002C39.3211 57.5002 43.4014 55.8425 46.7408 52.527C50.0802 49.2115 51.7499 44.9276 51.7499 39.6752C51.7499 36.2731 50.3364 32.3799 47.5093 27.9955C44.6822 23.6111 40.3458 18.7356 34.4999 13.3689C28.6541 18.7356 24.3176 23.6111 21.4906 27.9955C18.6635 32.3799 17.2499 36.2731 17.2499 39.6752C17.2499 44.9276 18.9196 49.2115 22.259 52.527C25.5985 55.8425 29.6788 57.5002 34.4999 57.5002ZM35.2076 54.1829C35.7089 54.1349 36.1217 53.9474 36.4461 53.6202C36.7704 53.2931 36.9326 52.8986 36.9326 52.4368C36.9326 51.898 36.7558 51.471 36.4023 51.1559C36.0488 50.8407 35.5971 50.7071 35.0473 50.755C33.0827 50.8988 30.943 50.3228 28.6282 49.0273C26.3135 47.7317 24.8687 45.4786 24.2937 42.2682C24.1978 41.778 23.9924 41.3928 23.6772 41.1127C23.3621 40.8326 22.987 40.6925 22.5521 40.6925C22.0287 40.6925 21.5928 40.8888 21.2445 41.2813C20.8962 41.6739 20.7847 42.1779 20.9101 42.7935C21.6878 46.9696 23.5676 49.9551 26.5495 51.7502C29.5314 53.5452 32.4174 54.3561 35.2076 54.1829Z"
                        :fill="tab == 1 ? 'white' : '#003765'"
                      />
                    </g>
                  </svg>
                </template>
              </vs-input>
            </vs-td>
            <vs-td>
              <div v-if="tr.electric_fees[1]">
                {{
                  tr.electric_fees[0]
                    ? tr.electric_fees[0].electicUnit -
                      tr.electric_fees[1].electicUnit
                    : 0
                }}
              </div>
              <div v-else-if="!tr.electric_fees[1] && tr.electric_fees[0]">
                {{ tr.electric_fees[0].electicUnit }}
              </div>
              <div v-else>
                {{
                  tr.electric_fees[0]
                    ? tr.electric_fees[0].usageMeter
                    : tr.newElec
                }}
              </div>
            </vs-td>
            <vs-td>
              <div>
                <div v-if="tr.electric_fees[1]">
                  <!-- Save when HAVE last month -->
                  <vs-button
                    @click="
                      updateElectfee(
                        tr.electric_fees[0].id,
                        tr.electric_fees[0].electicUnit,
                        tr.electric_fees[0].electicUnit -
                          tr.electric_fees[1].electicUnit
                      )
                    "
                    >บันทึก1</vs-button
                  >
                </div>
                <div v-else-if="tr.electric_fees[0]">
                  <!-- Save when HAVE last month -->
                  <vs-button
                    @click="
                      updateElectfee(
                        tr.electric_fees[0].id,
                        tr.electric_fees[0].electicUnit,
                        tr.electric_fees[0].electicUnit
                      )
                    "
                    >บันทึก</vs-button
                  >
                </div>
                <div v-else>
                  <!-- Save when no last month -->
                  <vs-button
                    :disabled="!tr.newElec"
                    @click="
                      createNewElectricityfee(
                        tr.id, // roomID
                        tr.user_sign_contract.id,
                        tr.newElec,
                        tr.newElec
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
      ElectricityFee: [],
      electicUnit: 0,
      floor: [],
      code: 0,
      text: "",
      month: "",
      year: "",
      importExcel: [],
    };

    // return {
    //   users: [

    //   ElectricityFee: [],
    //   electicUnit: 0,
    //   code: 0,
    //   text: "",
    //   month: "",
    //   year: "",
    // };
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
    this.getElectricityFee(this.id, this.month, this.year);
  },
  methods: {
    getElectricityFee(id, m, y) {
      this.ElectricityFee = [];
      const loading = this.$vs.loading();
      fetch(
        `https://api.resguru.app/api/getelectriclist?buildingid=${this.$store.state.building}&buildingFloor=${id}&month=${m}&year=${y}`
      )
        .then((response) => response.json())
        .then((resp) => {
          console.log("Return from getElecFeeRoom()", resp.data);
          if (this.code == 8) {
            this.ElectricityFee = resp.data.filter((item) =>
              item.RoomNumber.toLowerCase().includes(this.text.toLowerCase())
            );
          } else {
            this.ElectricityFee = resp.data;
          }
        })
        .finally(() => {
          loading.close();
        });
    },
    createNewElectricityfee(room, user_sign_contract, electicUnit, usageMeter) {
      console.log("room", room);
      console.log("user_sign_contract", user_sign_contract);
      console.log("electicUnit", electicUnit);
      console.log("usageMeter", usageMeter);
      axios
        .post(`https://api.resguru.app/api/electric-fees/`, {
          data: {
            room: room,
            user_sign_contract: user_sign_contract,
            electicUnit: electicUnit,
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
          this.$showNotification("#3A89CB", "Update Electricity Fee Success");
          this.getElectricityFee(this.id, this.month, this.year);
        });
    },
    updateElectfee(electFeeId, electicUnit, usageMeter) {
      console.log("test", usageMeter);
      axios
        .put(`https://api.resguru.app/api/electric-fees/${electFeeId}`, {
          data: {
            electicUnit: electicUnit,
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
          this.$showNotification("#3A89CB", "Update Electric Fee Success");
          this.getElectricityFee(this.id, this.month, this.year);
        });
    },
    updateMeterAll(newElecArray) {
      if (this.ElectricityFee.length > 0) {
        // console.log(this.ElectricityFee.length);
        const loading = this.$vs.loading();
        // Collect all newElec values into an array

        this.ElectricityFee.forEach((data, i) => {
          console.log("data", i, data);

          if (data.electric_fees[0] && data.electric_fees[0].electicUnit) {
            console.log("RESD", i, data);
            axios
              .put(
                `https://api.resguru.app/api/electric-fees/${data.electric_fees[0].id}`,
                {
                  data: {
                    electicUnit: parseInt(data.newElec),
                  },
                }
              )
              .then(() => {
                // if (this.ElectricityFee.length == i + 1) {
                //   loading.close();
                //   this.$showNotification("#3A89CB", "Update Electricity Fee Success");
                // }
              });
          } else if (data.electric_fees[0]) {
            console.log("data2 else", i, data.electric_fees[0].electicUnit);
            axios
              .post(`https://api.resguru.app/api/electric-fees/`, {
                data: {
                  room: data.id,
                  user_sign_contract: data.user_sign_contract.id,
                  electicUnit: parseInt(data.electric_fees[0].electicUnit),
                  usageMeter: parseInt(data.electric_fees[0].electicUnit),
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
        this.$showNotification("#3A89CB", "Update Electric Fee Success");
      }
    },
    filterData(text, code) {
      this.text = text;
      console.log("filter", text);
      this.ElectricityFee = this.ElectricityFee.filter((item) =>
        item.RoomNumber.toLowerCase().includes(text.toLowerCase())
      );
      if (text == "") {
        this.getElectricityFee(this.id, this.month, this.year);
      }
      if (code == 8) {
        this.code = 8;
        this.getElectricityFee(this.id, this.month, this.year);
      }
    },
  },
};
</script>
