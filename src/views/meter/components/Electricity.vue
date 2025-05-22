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
                  <vs-input 
                    v-model="tr.electric_fees[1].electicUnit"
                    @blur="updatePreviousElectricfee(
                      tr.electric_fees[1].id,
                      tr.electric_fees[1].electicUnit,
                      calculateUsageMeter(tr.electric_fees[0].electicUnit, tr.electric_fees[1].electicUnit)
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
                            d="M11.5 6.5L15.25 10.5H13V16.5H10V10.5H7.75L11.5 6.5ZM5 18.5V20.5H18V18.5H5Z"
                            :fill="tab == 1 ? 'white' : '#003765'"
                          />
                        </g>
                      </svg>
                    </template>
                  </vs-input>
                </div>
                <div v-else>
                  <vs-input 
                    v-model="tr.previousElectricValue"
                    @blur="createPreviousMonthElectricfee(
                      tr.id, 
                      tr.user_sign_contract ? tr.user_sign_contract.id : null,
                      tr.previousElectricValue,
                      tr.electric_fees[0] ? calculateUsageMeter(tr.electric_fees[0].electicUnit, tr.previousElectricValue) : 0
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
                            d="M11.5 6.5L15.25 10.5H13V16.5H10V10.5H7.75L11.5 6.5ZM5 18.5V20.5H18V18.5H5Z"
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
              <vs-input 
                v-model="tr.electric_fees[0].electicUnit"
                @blur="updateElectfee(
                  tr.electric_fees[0].id,
                  tr.electric_fees[0].electicUnit,
                  tr.electric_fees[0].electicUnit - (tr.electric_fees[1] ? tr.electric_fees[1].electicUnit : tr.previousElectricValue || 0)
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
                        d="M11.5 6.5L15.25 10.5H13V16.5H10V10.5H7.75L11.5 6.5ZM5 18.5V20.5H18V18.5H5Z"
                        :fill="tab == 1 ? 'white' : '#003765'"
                      />
                    </g>
                  </svg>
                </template>
              </vs-input>
            </vs-td>
            <vs-td v-else>
              <!-- case no last month elec -->
              <vs-input 
                class="newElec" 
                v-model="tr.newElec"
                @blur="createNewElectricityfee(
                  tr.id, 
                  tr.user_sign_contract ? tr.user_sign_contract.id : null,
                  tr.newElec,
                  tr.newElec - (tr.previousElectricValue || 0)
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
                        d="M11.5 6.5L15.25 10.5H13V16.5H10V10.5H7.75L11.5 6.5ZM5 18.5V20.5H18V18.5H5Z"
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
                    ? tr.electric_fees[0].electicUnit - tr.electric_fees[1].electicUnit
                    : 0
                }}
              </div>
              <div v-else-if="!tr.electric_fees[1] && tr.electric_fees[0]">
                {{ tr.electric_fees[0].electicUnit - (tr.previousElectricValue || 0) }}
              </div>
              <div v-else>
                {{ tr.newElec - (tr.previousElectricValue || 0) }}
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
                        tr.electric_fees[0].electicUnit - tr.electric_fees[1].electicUnit
                      )
                    "
                    >บันทึก</vs-button
                  >
                </div>
                <div v-else-if="tr.electric_fees[0]">
                  <!-- Save when HAVE last month -->
                  <vs-button
                    @click="
                      updateElectfee(
                        tr.electric_fees[0].id,
                        tr.electric_fees[0].electicUnit,
                        tr.electric_fees[0].electicUnit - (tr.previousElectricValue || 0)
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
                        tr.user_sign_contract ? tr.user_sign_contract.id : null,
                        tr.newElec,
                        tr.newElec - (tr.previousElectricValue || 0)
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
      console.log("month", m);
      console.log("year", y);
      this.ElectricityFee = [];
      const loading = this.$vs.loading();
      fetch(
        `https://api.resguru.app/api/getelectriclist?buildingid=${this.$store.state.building}&buildingFloor=${id}&month=${m}&year=${y}`
      )
        .then((response) => response.json())
        .then((resp) => {
          console.log("Return from getElecFeeRoom()", resp.data);
          
          // Process the data and initialize previousElectricValue for each entry
          const processedData = resp.data.map(item => {
            // Initialize the previousElectricValue for entries without electric_fees[1]
            if (!item.electric_fees[1]) {
              // Default to starting electric value or 0
              item.previousElectricValue = item.user_sign_contract?.startElectric || 0;
            }
            return item;
          });
          
          if (this.code == 8) {
            this.ElectricityFee = processedData.filter((item) =>
              item.RoomNumber.toLowerCase().includes(this.text.toLowerCase())
            );
          } else {
            this.ElectricityFee = processedData;
          }
        })
        .finally(() => {
          loading.close();
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
    
    /**
     * Creates an electric fee record for the previous month
     * @param {number} roomId - The room ID
     * @param {number} contractId - The contract ID
     * @param {number} electicUnit - The meter reading for previous month
     * @param {number} currentUsageMeter - The usage meter for current month (to update)
     */
    createPreviousMonthElectricfee(roomId, contractId, electicUnit, currentUsageMeter) {
      // Skip if invalid data
      if (!roomId || !contractId || !electicUnit) {
        console.warn("Cannot create previous month electric fee: Missing required data");
        return;
      }
      
      const loading = this.$vs.loading();
      
      // Convert to number and ensure it's not negative
      const numericValue = Math.max(0, Number(electicUnit));
      
      // Calculate previous month date (for createDate)
      const currentDate = new Date();
      // Go back one month
      let prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
      // Format date for API (YYYY-MM-DD format)
      const prevMonthFormatted = prevMonth.toISOString().split('T')[0];
      
      // Create the electric fee for the previous month
      axios
        .post(`https://api.resguru.app/api/electric-fees/`, {
          data: {
            room: roomId,
            user_sign_contract: contractId,
            electicUnit: numericValue,
            usageMeter: 0, // Previous month doesn't have usage since we're creating it now
            createdAt: prevMonthFormatted, // Set creation date to previous month
          },
        })
        .then((response) => {
          // If there is a current month reading, update its usage calculation
          const roomData = this.ElectricityFee.find(item => item.id === roomId);
          if (roomData && roomData.electric_fees[0]) {
            // Get current month reading
            const currentMeterReading = Number(roomData.electric_fees[0].electicUnit);
            
            // Calculate new usage for current month based on current reading minus previous month value
            const newUsage = Math.max(0, currentMeterReading - numericValue);
            
            return axios.put(`https://api.resguru.app/api/electric-fees/${roomData.electric_fees[0].id}`, {
              data: {
                usageMeter: newUsage,
              },
            });
          }
        })
        .catch((error) => {
          const errorMessage = error.message
            ? error.message
            : "Error creating previous month electric meter record";
          this.$showNotification("danger", errorMessage);
        })
        .finally(() => {
          loading.close();
          this.$showNotification("#3A89CB", "Created Previous Month Electric Meter Record");
          // Refresh the data to show the new record
          this.getElectricityFee(this.id, this.month, this.year);
        });
    },
    
    /**
     * Updates an existing previous month electric fee
     * @param {number} electricFeeId - The electric fee ID
     * @param {number} electricUnit - The meter reading
     * @param {number} currentUsageMeter - The usage meter for current month (to update)
     */
    updatePreviousElectricfee(electricFeeId, electricUnit, currentUsageMeter) {
      // Skip if invalid data
      if (!electricFeeId || !electricUnit) {
        console.warn("Cannot update previous month electric fee: Missing required data");
        return;
      }
      
      const loading = this.$vs.loading();
      
      // Convert to number and ensure it's not negative
      const numericValue = Math.max(0, Number(electricUnit));
      
      // Update the previous month electric fee
      axios
        .put(`https://api.resguru.app/api/electric-fees/${electricFeeId}`, {
          data: {
            electicUnit: numericValue,
          },
        })
        .then(() => {
          // Find the room data for this electric fee
          const roomData = this.ElectricityFee.find(item => 
            item.electric_fees[1] && item.electric_fees[1].id === electricFeeId
          );
          
          // If there is a current month reading, update its usage calculation
          if (roomData && roomData.electric_fees[0]) {
            // Get current month reading
            const currentMeterReading = Number(roomData.electric_fees[0].electicUnit);
            
            // Calculate new usage for current month based on current reading minus updated previous month value
            const newUsage = Math.max(0, currentMeterReading - numericValue);
            
            return axios.put(`https://api.resguru.app/api/electric-fees/${roomData.electric_fees[0].id}`, {
              data: {
                usageMeter: newUsage,
              },
            });
          }
        })
        .catch((error) => {
          const errorMessage = error.message
            ? error.message
            : "Error updating previous month electric meter reading";
          this.$showNotification("danger", errorMessage);
        })
        .finally(() => {
          loading.close();
          this.$showNotification("#3A89CB", "Updated Previous Month Electric Meter Reading");
          // Refresh the data to show the updated record
          this.getElectricityFee(this.id, this.month, this.year);
        });
    },
    
    createNewElectricityfee(room, user_sign_contract, electicUnit, usageMeter) {
      // Skip if not ready to save
      if (!electicUnit || !user_sign_contract) {
        return;
      }
      
      console.log("room", room);
      console.log("user_sign_contract", user_sign_contract);
      console.log("electicUnit", electicUnit);
      console.log("usageMeter", usageMeter);
      
      const loading = this.$vs.loading();
      
      // Ensure values are numeric
      const numericElectricUnit = Number(electicUnit) || 0;
      const numericUsageMeter = Math.max(0, Number(usageMeter) || 0);
      
      axios
        .post(`https://api.resguru.app/api/electric-fees/`, {
          data: {
            room: room,
            user_sign_contract: user_sign_contract,
            electicUnit: numericElectricUnit,
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
          this.$showNotification("#3A89CB", "Update Electricity Fee Success");
          this.getElectricityFee(this.id, this.month, this.year);
        });
    },
    
    updateElectfee(electFeeId, electicUnit, usageMeter) {
      // Skip if empty values
      if (!electicUnit) {
        return;
      }
      
      // Ensure numeric values
      const numericElectricUnit = Number(electicUnit) || 0;
      // Ensure usageMeter is not negative
      const numericUsageMeter = Math.max(0, Number(usageMeter) || 0);
      
      console.log("Updating electric fee:", {
        electFeeId,
        electicUnit: numericElectricUnit,
        usageMeter: numericUsageMeter
      });
      
      const loading = this.$vs.loading();
      axios
        .put(`https://api.resguru.app/api/electric-fees/${electFeeId}`, {
          data: {
            electicUnit: numericElectricUnit,
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
          this.$showNotification("#3A89CB", "Update Electric Fee Success");
          this.getElectricityFee(this.id, this.month, this.year);
        });
    },
    
    updateMeterAll(newElecArray) {
      if (this.ElectricityFee.length > 0) {
        const loading = this.$vs.loading();
        
        // Create a promise array to track all updates
        const updatePromises = [];
        
        this.ElectricityFee.forEach((data, i) => {
          console.log("Processing room data:", i, data);
          
          if (data.electric_fees[0] && data.electric_fees[0].electicUnit) {
            // Calculate usage meter based on whether there's a previous reading
            let usageMeter = 0;
            if (data.electric_fees[1]) {
              usageMeter = Math.max(0, Number(data.electric_fees[0].electicUnit) - Number(data.electric_fees[1].electicUnit));
            } else if (data.previousElectricValue) {
              usageMeter = Math.max(0, Number(data.electric_fees[0].electicUnit) - Number(data.previousElectricValue));
            } else {
              usageMeter = Number(data.electric_fees[0].electicUnit);
            }
            
            // Add promise to array
            updatePromises.push(
              axios.put(
                `https://api.resguru.app/api/electric-fees/${data.electric_fees[0].id}`,
                {
                  data: {
                    electicUnit: Number(data.electric_fees[0].electicUnit),
                    usageMeter: usageMeter
                  },
                }
              )
            );
          } else if (data.newElec) {
            // Calculate usage for new entries
            let usageMeter = 0;
            if (data.previousElectricValue) {
              usageMeter = Math.max(0, Number(data.newElec) - Number(data.previousElectricValue));
            } else {
              usageMeter = Number(data.newElec);
            }
            
            // Create new electric fee if we have the required data
            if (data.id && data.user_sign_contract && data.user_sign_contract.id) {
              updatePromises.push(
                axios.post(`https://api.resguru.app/api/electric-fees/`, {
                  data: {
                    room: data.id,
                    user_sign_contract: data.user_sign_contract.id,
                    electicUnit: Number(data.newElec),
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
            this.$showNotification("#3A89CB", "All Electric Fees Updated Successfully");
            this.getElectricityFee(this.id, this.month, this.year);
          })
          .catch((error) => {
            const errorMessage = error.message
              ? error.message
              : "Error updating some electric fees";
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
        this.getElectricityFee(this.id, this.month, this.year);
      } else {
        // Filter the current dataset
        this.ElectricityFee = this.ElectricityFee.filter((item) =>
          item.RoomNumber.toLowerCase().includes(text.toLowerCase())
        );
      }
      
      // Handle backspace code (code 8)
      if (code == 8) {
        this.code = 8;
        this.getElectricityFee(this.id, this.month, this.year);
      }
    },
    
    /**
     * Export electric meter readings to Excel
     */
    exportToExcel() {
      const loading = this.$vs.loading();
      
      try {
        // Prepare data for export
        const exportData = this.ElectricityFee.map(item => {
          const previousReading = item.electric_fees[1] ? 
            Number(item.electric_fees[1].electicUnit) : 
            Number(item.previousElectricValue || 0);
            
          const currentReading = item.electric_fees[0] ? 
            Number(item.electric_fees[0].electicUnit) : 
            Number(item.newElec || 0);
            
          const usage = Math.max(0, currentReading - previousReading);
          
          return {
            'Room Number': item.RoomNumber,
            'Status': item.user_sign_contract ? 'มีผู้เข้าพัก' : 'ห้องว่าง',
            'Tenant Name': item.user_sign_contract ? 
              `${item.user_sign_contract.users_permissions_user.firstName} ${item.user_sign_contract.users_permissions_user.lastName}` : 
              '',
            'Previous Reading': previousReading,
            'Current Reading': currentReading,
            'Usage': usage
          };
        });
        
        // Convert data to CSV format
        let csvContent = 'Room Number,Status,Tenant Name,Previous Reading,Current Reading,Usage\n';
        
        exportData.forEach(row => {
          const values = Object.values(row).map(value => 
            typeof value === 'string' ? `"${value.replace(/"/g, '""')}"` : value
          );
          csvContent += values.join(',') + '\n';
        });
        
        // Create and download the file
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        
        link.setAttribute('href', url);
        link.setAttribute('download', `ElectricMeter_Floor${this.tab}_${this.year}_${this.month}.csv`);
        link.style.visibility = 'hidden';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        this.$showNotification("#3A89CB", "Electric Meter Data Exported Successfully");
      } catch (error) {
        console.error('Export error:', error);
        this.$showNotification("danger", "Error exporting electric meter data");
      } finally {
        loading.close();
      }
    },
    
    /**
     * Calculate electric bill amount for a specific room
     * @param {Object} roomData - The room data object
     * @returns {number} - The calculated bill amount
     */
    calculateElectricBill(roomData) {
      // Skip if no contract or no electric fee data
      if (!roomData.user_sign_contract) return 0;
      
      const electricRate = roomData.user_sign_contract.electricRate || 0;
      let usage = 0;
      
      if (roomData.electric_fees[0]) {
        // Calculate usage based on current and previous readings
        const currentReading = Number(roomData.electric_fees[0].electicUnit) || 0;
        const previousReading = roomData.electric_fees[1] ? 
          Number(roomData.electric_fees[1].electicUnit) : 
          Number(roomData.previousElectricValue || 0);
          
        usage = Math.max(0, currentReading - previousReading);
      } else if (roomData.newElec) {
        // Calculate usage for new electric meter entries
        const currentReading = Number(roomData.newElec) || 0;
        const previousReading = Number(roomData.previousElectricValue || 0);
        
        usage = Math.max(0, currentReading - previousReading);
      }
      
      // Calculate the bill amount
      return usage * electricRate;
    },
    
    /**
     * Generate electric bills for all rooms
     */
    generateElectricBills() {
      if (this.ElectricityFee.length === 0) {
        this.$showNotification("warning", "No electric meter data available");
        return;
      }
      
      const loading = this.$vs.loading();
      const billPromises = [];
      
      // Process each room
      this.ElectricityFee.forEach(room => {
        // Skip rooms without contracts
        if (!room.user_sign_contract) return;
        
        // Calculate the bill amount
        const billAmount = this.calculateElectricBill(room);
        
        // Skip if bill amount is zero
        if (billAmount <= 0) return;
        
        // Prepare bill data
        const billData = {
          data: {
            room: room.id,
            user_sign_contract: room.user_sign_contract.id,
            amount: billAmount,
            billType: 'electric',
            billMonth: this.month,
            billYear: this.year,
            isPaid: false,
            description: `Electric usage bill for ${this.month}/${this.year}`
          }
        };
        
        // Create the bill
        billPromises.push(
          axios.post('https://api.resguru.app/api/bills', billData)
        );
      });
      
      // Wait for all bills to be created
      Promise.all(billPromises)
        .then(responses => {
          this.$showNotification("#3A89CB", `Created ${responses.length} electric bills successfully`);
        })
        .catch(error => {
          const errorMessage = error.message
            ? error.message
            : "Error generating electric bills";
          this.$showNotification("danger", errorMessage);
        })
        .finally(() => {
          loading.close();
        });
    }
  },
};
</script>