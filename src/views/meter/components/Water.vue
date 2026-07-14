<!-- The template section -->
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
                  <vs-input v-model="tr.water_fees[1].meterUnit" 
                    @blur="updatePreviousWaterfee(
                      tr.water_fees[1].id,
                      tr.water_fees[1].meterUnit,
                      calculateUsageMeter(tr.water_fees[0].meterUnit, tr.water_fees[1].meterUnit)
                    )">
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
                  <vs-input v-model="tr.previousWaterValue"
                    @blur="createPreviousMonthWaterfee(
                      tr.id,
                      tr.user_sign_contract ? tr.user_sign_contract.id : null,
                      tr.previousWaterValue
                    )">
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
            <vs-td>
              <!-- current month's record is always created lazily by the backend -->
              <vs-input
                v-model="tr.water_fees[0].meterUnit"
                @blur="updateWaterfee(
                  tr.water_fees[0].id,
                  tr.water_fees[0].meterUnit,
                  calculateUsageMeter(tr.water_fees[0].meterUnit, previousReading(tr))
                )"
              >
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
              {{ calculateUsageMeter(tr.water_fees[0].meterUnit, previousReading(tr)) }}
            </vs-td>
            <vs-td>
              <!-- Action HERE -->
              <div>
                <vs-button
                  :disabled="tr.water_fees[0].meterUnit === null || tr.water_fees[0].meterUnit === undefined || tr.water_fees[0].meterUnit === ''"
                  @click="
                    updateWaterfee(
                      tr.water_fees[0].id,
                      tr.water_fees[0].meterUnit,
                      calculateUsageMeter(tr.water_fees[0].meterUnit, previousReading(tr))
                    )
                  "
                  >บันทึก</vs-button
                >
              </div>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </div>
</template>

<!-- The script section -->
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
      savedScrollPosition: 0, 
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
  // Helper method to save current scroll position
  saveScrollPosition() {
    this.savedScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  },
  
  // Helper method to restore scroll position
  restoreScrollPosition() {
    if (this.savedScrollPosition !== undefined) {
      // Use setTimeout to ensure DOM is updated first
      this.$nextTick(() => {
        setTimeout(() => {
          window.scrollTo(0, this.savedScrollPosition);
        }, 100);
      });
    }
  },

  // Updated getWaterFee method - preserve scroll position
  getWaterFee(id, m, y, preserveScroll = false) {
    // Save scroll position if we want to preserve it
    if (preserveScroll) {
      this.saveScrollPosition();
    }
    
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

        // Backend already guarantees water_fees[0] is this month's record
        // (created blank if nobody has read it yet). water_fees[1] is last
        // month's record if one exists in the DB - it often won't right
        // after migrating from the old overwrite-in-place system, so seed
        // an editable baseline from the contract's starting reading.
        const processedData = resp.data.map(item => {
          item.water_fees = item.water_fees || [];
          if (!item.water_fees[1]) {
            item.previousWaterValue = item.user_sign_contract?.startWater || 0;
          }
          return item;
        });

        if (this.code == 8) {
          this.WaterFee = processedData.filter((item) =>
            item.RoomNumber.toLowerCase().includes(this.text.toLowerCase())
          );
        } else {
          this.WaterFee = processedData;
        }
        
        // Restore scroll position if preserved
        if (preserveScroll) {
          this.restoreScrollPosition();
        }
      })
      .finally(() => {
        loading.close();
      });
  },

  // Returns the previous month's meter reading for a room: last month's
  // actual fee record if one exists, otherwise whatever's currently in the
  // editable previousWaterValue field (seeded from the contract's starting
  // reading, but staff can correct it - see createPreviousMonthWaterfee).
  previousReading(tr) {
    if (tr.water_fees[1]) {
      return tr.water_fees[1].meterUnit;
    }
    return tr.previousWaterValue || 0;
  },

  getPreviousMonthYear() {
    const month = parseInt(this.month, 10);
    const year = parseInt(this.year, 10);
    if (month === 1) {
      return { previousMonth: 12, previousYear: year - 1 };
    }
    return { previousMonth: month - 1, previousYear: year };
  },

  // Creates a single, correctly-tagged record for last month when no such
  // record exists yet (new tenancy, or a room whose old data predates the
  // billMonth/billYear tagging). Unlike the old flow this never creates a
  // duplicate current-month record - that one is already guaranteed by
  // the backend.
  createPreviousMonthWaterfee(roomId, contractId, previousMeterUnit) {
    if (!roomId || !contractId || previousMeterUnit === undefined || previousMeterUnit === null || previousMeterUnit === '') {
      console.warn("Cannot create previous month water fee: Missing required data");
      this.$showNotification("warning", "กรุณาใส่ค่ามิเตอร์น้ำเดือนก่อนหน้าก่อนบันทึก");
      return;
    }

    this.saveScrollPosition();
    const loading = this.$vs.loading();
    const numericValue = Math.max(0, Number(previousMeterUnit) || 0);
    const { previousMonth, previousYear } = this.getPreviousMonthYear();

    axios
      .post(`https://api.resguru.app/api/water-fees/`, {
        data: {
          room: roomId,
          user_sign_contract: contractId,
          billMonth: previousMonth,
          billYear: previousYear,
          meterUnit: numericValue,
          usageMeter: 0,
        },
      })
      .then(() => {
        this.$showNotification("#3A89CB", "บันทึกค่าน้ำเดือนก่อนหน้าสำเร็จ");
        this.getWaterFee(this.id, this.month, this.year, true);
      })
      .catch((error) => {
        const errorMessage = error.response && error.response.data && error.response.data.error
          ? error.response.data.error.message
          : (error.message || "Error creating previous month water fee");
        this.$showNotification("danger", errorMessage);
      })
      .finally(() => {
        loading.close();
      });
  },

  // Updated updateWaterfee method
  updateWaterfee(waterFeeId, waterUnit, usageMeter) {
    // Skip if empty values
    if (!waterUnit) {
      return;
    }
    
    // Save scroll position before API call
    this.saveScrollPosition();
    
    // Ensure numeric values
    const numericWaterUnit = Number(waterUnit) || 0;
    // Ensure usageMeter is not negative
    const numericUsageMeter = Math.max(0, Number(usageMeter) || 0);
    
    console.log("Updating water fee:", {
      waterFeeId,
      waterUnit: numericWaterUnit,
      usageMeter: numericUsageMeter
    });
    
    const loading = this.$vs.loading();
    axios
      .put(`https://api.resguru.app/api/water-fees/${waterFeeId}`, {
        data: {
          meterUnit: numericWaterUnit,
          usageMeter: numericUsageMeter,
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
        loading.close();
        this.$showNotification("#3A89CB", "แก้ไขค่าน้ำสำเร็จ");
        // Refresh data but preserve scroll position
        this.getWaterFee(this.id, this.month, this.year, true);
      });
  },

  // Updated updatePreviousWaterfee method
  updatePreviousWaterfee(waterFeeId, waterUnit, currentUsageMeter) {
    // Skip if invalid data
    if (!waterFeeId || !waterUnit) {
      console.warn("Cannot update previous month water fee: Missing required data");
      return;
    }
    
    // Save scroll position before API call
    this.saveScrollPosition();
    
    const loading = this.$vs.loading();
    
    // Convert to number and ensure it's not negative
    const numericValue = Math.max(0, Number(waterUnit));
    
    // Update the previous month water fee
    axios
      .put(`https://api.resguru.app/api/water-fees/${waterFeeId}`, {
        data: {
          meterUnit: numericValue,
        },
      })
      .then(() => {
        // Find the room data for this water fee
        const roomData = this.WaterFee.find(item => 
          item.water_fees[1] && item.water_fees[1].id === waterFeeId
        );
        
        // If there is a current month reading, update its usage calculation
        if (roomData && roomData.water_fees[0]) {
          // Get current month reading
          const currentMeterReading = Number(roomData.water_fees[0].meterUnit);
          
          // Calculate new usage for current month based on current reading minus updated previous month value
          const newUsage = Math.max(0, currentMeterReading - numericValue);
          
          return axios.put(`https://api.resguru.app/api/water-fees/${roomData.water_fees[0].id}`, {
            data: {
              usageMeter: newUsage,
            },
          });
        }
      })
      .catch((error) => {
        const errorMessage = error.message
          ? error.message
          : "Error updating previous month water meter reading";
        this.$showNotification("danger", errorMessage);
      })
      .finally(() => {
        loading.close();
        this.$showNotification("#3A89CB", "บันทึกค่าน้ำสำเร็จ");
        // Refresh the data to show the updated record but preserve scroll position
        this.getWaterFee(this.id, this.month, this.year, true);
      });
  },
    
    // Helper method to calculate usage meter
    calculateUsageMeter(currentReading, previousReading) {
      // Ensure readings are treated as numbers
      const current = Number(currentReading) || 0;
      const previous = Number(previousReading) || 0;
      
      // Calculate usage and ensure it's not negative
      return Math.max(0, current - previous);
    },
    
    updateMeterAll(newWaterArray) {
      if (this.WaterFee.length > 0) {
        const loading = this.$vs.loading();
        
        // Create a promise array to track all updates
        const updatePromises = [];
        
        this.WaterFee.forEach((data, i) => {
          console.log("Processing room data:", i, data);
          
          if (data.water_fees[0] && data.water_fees[0].meterUnit) {
            // Calculate usage meter based on whether there's a previous reading
            let usageMeter = 0;
            if (data.water_fees[1]) {
              usageMeter = Math.max(0, Number(data.water_fees[0].meterUnit) - Number(data.water_fees[1].meterUnit));
            } else if (data.previousWaterValue) {
              usageMeter = Math.max(0, Number(data.water_fees[0].meterUnit) - Number(data.previousWaterValue));
            } else {
              usageMeter = Number(data.water_fees[0].meterUnit);
            }
            
            // Add promise to array
            updatePromises.push(
              axios.put(
                `https://api.resguru.app/api/water-fees/${data.water_fees[0].id}`,
                {
                  data: {
                    meterUnit: Number(data.water_fees[0].meterUnit),
                    usageMeter: usageMeter
                  },
                }
              )
            );
          } else if (data.newWater) {
            // Calculate usage for new entries
            let usageMeter = 0;
            if (data.previousWaterValue) {
              usageMeter = Math.max(0, Number(data.newWater) - Number(data.previousWaterValue));
            } else {
              usageMeter = Number(data.newWater);
            }
            
            // Create new water fee if we have the required data
            if (data.id && data.user_sign_contract && data.user_sign_contract.id) {
              updatePromises.push(
                axios.post(`https://api.resguru.app/api/water-fees/`, {
                  data: {
                    room: data.id,
                    user_sign_contract: data.user_sign_contract.id,
                    meterUnit: Number(data.newWater),
                    usageMeter: usageMeter,
                  },
                })
              );
            }
          }
        });
        
        // Wait for all updates to complete
        Promise.all(updatePromises)
          .then(() => {
            this.$showNotification("#3A89CB", "แก้ไขค่าน้ำสำเร็จ");
            this.getWaterFee(this.id, this.month, this.year);
          })
          .catch((error) => {
            const errorMessage = error.message
              ? error.message
              : "Error updating some water fees";
            this.$showNotification("danger", errorMessage);
          })
          .finally(() => {
            loading.close();
          });
      }
    },
    
    filterData(text, code) {
      this.text = text;
      console.log("Filtering by text:", text);
      
      if (text === "") {
        // If text is empty, reset to full data
        this.getWaterFee(this.id, this.month, this.year);
      } else {
        // Filter the current dataset
        this.WaterFee = this.WaterFee.filter((item) =>
          item.RoomNumber.toLowerCase().includes(text.toLowerCase())
        );
      }
      
      // Handle backspace code (code 8)
      if (code == 8) {
        this.code = 8;
        this.getWaterFee(this.id, this.month, this.year);
      }
    },
  },
};
</script>