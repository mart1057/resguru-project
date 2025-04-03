<template>
  <div class="pl-[20px] pr-[20px] pt-[10px]">
    <div
      class="h-[auto] bg-[white] rounded-[12px] pt-[28px] pl-[28px] pr-[28px] flex flex-col justify-end mt-[14px]"
    >
      <div>
        <div class="flex justify-between">
          <div class="flex">
            <div>
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_451_9406"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="34"
                  height="34"
                >
                  <rect width="34" height="34" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_451_9406)">
                  <path
                    d="M30.4596 8.93591V25.064C30.4596 25.7796 30.2117 26.3853 29.7158 26.8812C29.22 27.377 28.6143 27.6249 27.8987 27.6249H6.10388C5.38827 27.6249 4.78255 27.377 4.28672 26.8812C3.79089 26.3853 3.54297 25.7796 3.54297 25.064V8.93591C3.54297 8.2203 3.79089 7.61458 4.28672 7.11875C4.78255 6.62292 5.38827 6.375 6.10388 6.375H27.8987C28.6143 6.375 29.22 6.62292 29.7158 7.11875C30.2117 7.61458 30.4596 8.2203 30.4596 8.93591ZM5.66793 11.9055H28.3346V8.93591C28.3346 8.82692 28.2892 8.72701 28.1984 8.63618C28.1076 8.54537 28.0076 8.49996 27.8987 8.49996H6.10388C5.99489 8.49996 5.89498 8.54537 5.80415 8.63618C5.71334 8.72701 5.66793 8.82692 5.66793 8.93591V11.9055ZM5.66793 16.4278V25.064C5.66793 25.173 5.71334 25.2729 5.80415 25.3638C5.89498 25.4546 5.99489 25.5 6.10388 25.5H27.8987C28.0076 25.5 28.1076 25.4546 28.1984 25.3638C28.2892 25.2729 28.3346 25.173 28.3346 25.064V16.4278H5.66793Z"
                    fill="#003765"
                  />
                </g>
              </svg>
            </div>
            <div
              class="text-[24px] font-bold ml-[8px] flex justify-center items-center"
            >
              การจ่ายเงิน
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <div class="flex">
            <!-- <input
              v-model="selectedDate"
              type="month"
              placeholder="ค้นหาตามหมายเลขห้อง"
              id="datepicker"
              @input="filterByDate()"
              v-bind:class="{
                'h-[36px] pl-[8px] text-[center] pr-[8px] bg-[#003765] flex cursor-pointer text-[white]  justify-center  rounded-[12px] mt-[12px]': true,
              }"
            /> -->
            <div class="date-picker-container">
            <!-- Custom month picker that works in all browsers including Safari -->
            <div 
              v-bind:class="{
                'h-[36px] pl-[8px] pr-[8px] bg-[#003765] flex cursor-pointer text-[white] justify-center rounded-[12px] mt-[12px]': true,
              }"
              @click="showDatePicker = true"
            >
              {{ displayDate }}
            </div>
            
            <!-- Custom overlay dropdown for month/year selection -->
            <div v-if="showDatePicker" class="date-picker-dropdown">
              <div class="date-picker-header">
                <div class="year-selector">
                  <select v-model="selectedYear" @change="updateSelectedDate">
                    <option v-for="year in yearOptions" :key="year" :value="year">{{ year }}</option>
                  </select>
                </div>
                <div class="month-selector">
                  <select v-model="selectedMonth" @change="updateSelectedDate">
                    <option v-for="(month, index) in monthOptions" :key="index" :value="index + 1">
                      {{ month }}
                    </option>
                  </select>
                </div>
                <button class="close-button" @click="showDatePicker = false">✓</button>
              </div>
            </div>
          </div>
            <div class="flex justify-start items-center mt-[5px] ml-[14px]">
              <input
                class="h-[36px] w-[250px] bg-[#F3F7FA] rounded-[12px]"
                placeholder="ค้นหาตามหมายเลขห้อง"
                v-model="filter.search"
                @input="filterData"
                type="input"
                @keydown="handleKeyDown"
              />
            </div>
            <vs-tooltip bottom shadow not-hover v-model="popup_filter">
              <div
                @click="popup_filter = true"
                class="h-[36px] w-[132px] flex justify-center rounded-[12px] mt-[12px] _ cursor-pointer"
              >
                <div class="flex justify-center items-center">
                  <svg
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_3262_4178"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="22"
                      height="23"
                    >
                      <rect y="0.5" width="22" height="22" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_3262_4178)">
                      <path
                        d="M10.0846 16.7707C9.88982 16.7707 9.72655 16.7048 9.59479 16.573C9.46302 16.4411 9.39714 16.2778 9.39714 16.0829C9.39714 15.888 9.46302 15.7248 9.59479 15.5932C9.72655 15.4615 9.88982 15.3957 10.0846 15.3957H11.9179C12.1127 15.3957 12.276 15.4616 12.4078 15.5935C12.5395 15.7253 12.6054 15.8886 12.6054 16.0835C12.6054 16.2784 12.5395 16.4416 12.4078 16.5733C12.276 16.7049 12.1127 16.7707 11.9179 16.7707H10.0846ZM3.66795 7.25144C3.47315 7.25144 3.30988 7.18553 3.17813 7.05369C3.04635 6.92186 2.98047 6.75851 2.98047 6.56364C2.98047 6.36876 3.04635 6.20551 3.17813 6.07389C3.30988 5.94227 3.47315 5.87646 3.66795 5.87646H18.3346C18.5294 5.87646 18.6927 5.94238 18.8245 6.07421C18.9562 6.20603 19.0221 6.36938 19.0221 6.56426C19.0221 6.75913 18.9562 6.92237 18.8245 7.05399C18.6927 7.18563 18.5294 7.25144 18.3346 7.25144H3.66795ZM6.41795 12.0111C6.22315 12.0111 6.05988 11.9451 5.92813 11.8133C5.79635 11.6815 5.73047 11.5181 5.73047 11.3233C5.73047 11.1284 5.79635 10.9651 5.92813 10.8335C6.05988 10.7019 6.22315 10.6361 6.41795 10.6361H15.5846C15.7794 10.6361 15.9427 10.702 16.0745 10.8338C16.2062 10.9657 16.2721 11.129 16.2721 11.3239C16.2721 11.5188 16.2062 11.682 16.0745 11.8136C15.9427 11.9452 15.7794 12.0111 15.5846 12.0111H6.41795Z"
                        fill="#003765"
                      />
                    </g>
                  </svg>
                </div>
                <div
                  class="font-bold ml-[8px] flex justify-center items-center"
                >
                  ฟิลเตอร์
                </div>
              </div>
              <template #tooltip>
                <div class="w-[100%]">
                  <div class="center">
                    <vs-checkbox
                      v-model="filter.select"
                      val="Not Paid"
                      @input="
                        getRoomBill(
                          filter.floor,
                          0,
                          filter.selectedMonth,
                          filter.selectedYear
                        )
                      "
                    >
                      <div class="text-custom">ห้องค้างชำระ</div>
                    </vs-checkbox>
                  </div>
                  <div class="center">
                    <vs-checkbox
                      v-model="filter.select"
                      val="Paid"
                      @input="
                        getRoomBill(
                          filter.floor,
                          0,
                          filter.selectedMonth,
                          filter.selectedYear
                        )
                      "
                    >
                      <div class="text-custom">ห้องชำระเงินแล้ว</div>
                    </vs-checkbox>
                  </div>
                  <div class="center">
                    <vs-checkbox
                      v-model="filter.select"
                      val="Partial Paid"
                      @input="
                        getRoomBill(
                          filter.floor,
                          0,
                          filter.selectedMonth,
                          filter.selectedYear
                        )
                      "
                    >
                      <div class="text-custom">ห้องชำระบางส่วน</div>
                    </vs-checkbox>
                  </div>
                </div>
              </template>
            </vs-tooltip>
            <div
              v-if="selected.length > 0"
              class="h-[36px] w-[132px] flex justify-center rounded-[12px] mt-[12px] _ cursor-pointer"
            >
              <div class="flex justify-center items-center">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_3430_22284"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="22"
                    height="23"
                  >
                    <rect y="0.5" width="22" height="22" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_3430_22284)">
                    <path
                      d="M11 14.469C10.8895 14.469 10.7867 14.4514 10.6915 14.4161C10.5963 14.3809 10.5058 14.3203 10.42 14.2345L7.56956 11.3841C7.44265 11.2572 7.37772 11.0976 7.37479 10.9055C7.37184 10.7134 7.43676 10.5509 7.56956 10.4181C7.70235 10.2853 7.8657 10.2166 8.05961 10.2118C8.25351 10.2071 8.41687 10.2712 8.54968 10.404L10.3125 12.1668V5.15427C10.3125 4.95919 10.3783 4.79584 10.5099 4.66422C10.6415 4.53261 10.8049 4.4668 11 4.4668C11.1951 4.4668 11.3584 4.53261 11.49 4.66422C11.6216 4.79584 11.6875 4.95919 11.6875 5.15427V12.1668L13.4503 10.404C13.5772 10.2771 13.7391 10.2145 13.9359 10.2162C14.1328 10.218 14.2976 10.2853 14.4304 10.4181C14.5632 10.5509 14.6296 10.7119 14.6296 10.9011C14.6296 11.0903 14.5632 11.2513 14.4304 11.3841L11.5799 14.2345C11.4941 14.3203 11.4037 14.3809 11.3085 14.4161C11.2133 14.4514 11.1105 14.469 11 14.469ZM5.78206 18.3754C5.31902 18.3754 4.92708 18.215 4.60625 17.8942C4.28542 17.5733 4.125 17.1814 4.125 16.7183V14.9379C4.125 14.7428 4.19082 14.5795 4.32245 14.4479C4.45407 14.3162 4.61742 14.2504 4.8125 14.2504C5.00758 14.2504 5.17093 14.3162 5.30255 14.4479C5.43417 14.5795 5.49998 14.7428 5.49998 14.9379V16.7183C5.49998 16.7889 5.52936 16.8535 5.58811 16.9123C5.64689 16.971 5.71154 17.0004 5.78206 17.0004H16.2179C16.2884 17.0004 16.3531 16.971 16.4118 16.9123C16.4706 16.8535 16.5 16.7889 16.5 16.7183V14.9379C16.5 14.7428 16.5658 14.5795 16.6974 14.4479C16.829 14.3162 16.9924 14.2504 17.1875 14.2504C17.3825 14.2504 17.5459 14.3162 17.6775 14.4479C17.8091 14.5795 17.875 14.7428 17.875 14.9379V16.7183C17.875 17.1814 17.7145 17.5733 17.3937 17.8942C17.0729 18.215 16.6809 18.3754 16.2179 18.3754H5.78206Z"
                      fill="#003765"
                    />
                  </g>
                </svg>
              </div>
              <div class="font-bold ml-[8px] flex justify-center items-center">
                ดาวน์โหลด
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 
            <div class="flex items-center mb-[8px] mt-[14px] table-container">
                <div v-for="(data, i) in roomFloor" class="flex-initial flex-nowrap w-32 p-2 border-1"
                :class="tab_floor == i ? 'font-bold text-[16px] text-[white] bg-[#003765]' : 'text-[#8396A6]'">
                    <div class="cursor-pointer whitespace-nowrap"
                        :class="tab_floor == i ? 'font-bold text-[16px]' : 'text-[#8396A6]'"
                        @click="tab_floor = i, filter.floor = data.id, getRoom(), name_floor = data.attributes.floorName">
                        ชั้น {{ data.attributes.floorName }}
                    </div>
                </div>
            </div> -->

      <div class="flex items-center mb-[8px] mt-[14px] table-container">
        <!-- <div class="mr-[14px] font-bold cursor-pointer" v-for="floors in floor">อาคาร A ชั้น {{ floors.attributes.floorName }}</div> -->
        <!-- <div class="text-[#8396A6] cursor-pointer">อาคาร A ชั้น 2</div> -->
        <div
          v-for="(data, i) in floor"
          class="flex-initial flex-nowrap w-32 p-2 border-1"
          :class="
            tab_floor == i
              ? 'font-bold text-[16px] text-[white] bg-[#003765]'
              : 'text-[#8396A6]'
          "
        >
          <div
            class="cursor-pointer whitespace-nowrap mr-[16px]"
            :class="tab_floor == i ? 'font-bold text-[16px]' : 'text-[#8396A6]'"
            @click="
              (tab_floor = i),
                (filter.floor = data.id),
                getRoomBill(
                  data.id,
                  0,
                  filter.selectedMonth,
                  filter.selectedYear
                ),
                (name_floor = data.attributes.floorName)
            "
          >
            ชั้น {{ data.attributes.floorName }}
          </div>
        </div>
      </div>
    </div>
    <div class="mt-[14px] bg-[white] rounded-[12px] p-[24px]">
      <div class="font-bold text-[20px]">ชั้น {{ name_floor }}</div>
      <div class="mt-[14px]">
        <vs-table v-model="selected">
          <template #thead>
            <vs-tr>
              <!-- <vs-th>
                                <vs-checkbox :indeterminate="selected.length == payments.length" v-model="allCheck"
                                    @change="selected = $vs.checkAll(selected, payments)" />
                            </vs-th> -->
              <vs-th> ห้อง </vs-th>
              <vs-th> ชื่อผู้เช่า </vs-th>
              <vs-th> ประเภทห้อง </vs-th>
              <!-- <vs-th>
                                ค่าเช่าห้อง
                            </vs-th>
                            <vs-th>
                                ค่าส่วนกลาง
                            </vs-th>
                            <vs-th>
                                ค่าบริการเสริม
                            </vs-th> -->
              <vs-th> ยอดรวม </vs-th>
              <vs-th> ค้างชำระ </vs-th>
              <vs-th> ชำระแล้ว </vs-th>
              <vs-th> สถานะ </vs-th>

              <vs-th> Select Action </vs-th>
              <vs-th> </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in payments"
              :data="tr"
              :is-selected="!!selected.includes(tr)"
            >
              <!-- <vs-td checkbox>
                                <vs-checkbox :val="tr" v-model="selected" />
                            </vs-td> -->
              <vs-td>
                <div
                  @click="
                    routeTo(tr.id),
                      ($route.meta.desc =
                        'การจ่ายเงิน - การจ่ายเงินห้อง ' + tr.RoomNumber),
                      ($route.meta.title = 'การจ่ายเงินห้อง ' + tr.RoomNumber)
                  "
                >
                  {{ tr.RoomNumber }}
                </div>
              </vs-td>
              <vs-td>
                <div @click="routeTo(tr.id)">
                  <div
                    v-if="
                      tr.user_sign_contract &&
                      tr.user_sign_contract.users_permissions_user
                    "
                  >
                    {{ tr.user_sign_contract.users_permissions_user.firstName }}
                    {{ tr.user_sign_contract.users_permissions_user.lastName }}
                  </div>
                  <div v-else>ยังไม่มีผู้เช่า</div>
                </div>
              </vs-td>
              <vs-td>
                <div @click="routeTo(tr.id)">
                  {{ tr.room_type.roomTypeName }}
                </div>
              </vs-td>
              <!-- <vs-td>
                                <div @click="routeTo(tr.attributes.user_sign_contract.data.id)">
                                {{ tr.attributes.user_sign_contract.data ?
                                    tr.attributes.user_sign_contract.data.attributes.room.data.attributes.room_type.data.attributes.roomTypeName
                                    : "" }}
                                    </div>
                            </vs-td> -->

              <!-- <vs-td>
                                <div @click="routeTo(tr.id)">
                                    <div v-if="tr.user_sign_contract && tr.tenant_bills[0]">
                                        {{ $formatNumber(tr.tenant_bills[0].roomPrice) }}
                                    </div>
                                </div>
                            </vs-td>
                            <vs-td>
                                <div @click="routeTo(tr.id)">

                                    <div v-if="tr.user_sign_contract && tr.tenant_bills[0]">
                                        {{ $formatNumber(tr.tenant_bills[0].communalPrice) }}
                                    </div>
                                </div>
                            </vs-td>
                            <vs-td>
                                <div @click="routeTo(tr.id)">
                                    <div v-if="tr.user_sign_contract && tr.tenant_bills[0]">
                                        {{ $formatNumber(tr.tenant_bills[0].otherPrice) }}
                                    </div>
                                </div>
                            </vs-td> -->
              <vs-td>
                <div @click="routeTo(tr.id)">
                  <div v-if="tr.user_sign_contract && tr.tenant_bills[0]">
                    {{ $formatNumber(tr.tenant_bills[0].total) }}
                  </div>
                  <div v-else>-</div>
                </div>
              </vs-td>
              <vs-td>
                <div @click="routeTo(tr.id)">
                  <div v-if="tr.user_sign_contract && tr.tenant_bills[0]">
                    {{ $formatNumber(tr.tenant_bills[0].remainPaid) }}
                  </div>
                  <div v-else>-</div>
                </div>
              </vs-td>
              <vs-td>
                <div @click="routeTo(tr.id)">
                  <div v-if="tr.user_sign_contract && tr.tenant_bills[0]">
                    {{ $formatNumber(tr.tenant_bills[0].paid) }}
                  </div>
                  <div v-else>-</div>
                </div>
              </vs-td>

              <vs-td>
                <div class="flex items-center justify-start">
                  <!-- <div class="h-[36px] w-[auto] flex items-center justify-center pl-[12px] pr-[12px] rounded-[12px] pb-[4px] pt-[4px]"
                                        :class="tr.attributes.paymentStatus == 1 ? 'bg-[#CFFBDA] text-[#0B9A3C]' : tr.attributes.paymentStatus == 'ยังไม่ชำระ' ? 'bg-[#FFE1E8] text-[#EA2F5C]' : ' bg-[#FFF2BC] text-[#D48C00] '"> -->
                  <div
                    class="h-[36px] w-[auto] flex items-center justify-center pl-[12px] pr-[12px] rounded-[12px] pb-[4px] pt-[4px]"
                  >
                    <div v-if="tr.user_sign_contract && tr.tenant_bills[0]">
                      {{ tr.tenant_bills[0].paymentStatus }}
                    </div>

                    <div v-else>-</div>
                  </div>
                </div>
                <!-- <div v-if="tr.attributes.paymentStatus == ชำระบางส่วน">
                                        <vs-button >
                                            ใบเสร็จรับเงิน
                                        </vs-button>
                                </div> -->
              </vs-td>

              <vs-td>
                <div v-if="!tr.user_sign_contract">
                  <vs-button warn class="small">ผู้เช่าย้ายออก</vs-button>
                </div>
                <div
                  v-else-if="
                    tr.tenant_bills[0] &&
                    tr.tenant_bills[0].paymentStatus === 'Not Paid'
                  "
                >
                  <!-- <vs-button  primary class="small">แก้ไขใบแจ้งหนี้</vs-button>   -->
                  <!-- to: internal link -->
                  <vs-select
                    placeholder="เมนู"
                    v-model="tr.tenant_bills[0].lastEvent"
                    @change="selectMenu(tr.tenant_bills[0].lastEvent, tr)"
                  >
                    <vs-option label="เลือกเมนู" value="">
                      เลือกเมนู
                    </vs-option>
                    <vs-option label="อัพเดทใบแจ้งหนี้" value="Update">
                      อัพเดทใบแจ้งหนี้
                    </vs-option>
                    <vs-option label="ดูรายการใบแจ้งหนี้" value="View">
                      ดูรายการใบแจ้งหนี้
                    </vs-option>
                    <vs-option label="ชำระเงิน" value="Partial Payment">
                      ชำระเงิน
                    </vs-option>
                  </vs-select>

                  <!--  Need to add option for select here -->
                </div>
                <div
                  v-else-if="
                    tr.user_sign_contract === null && tr.tenant_bills[0]
                  "
                >
                  <vs-button warn class="small">ผู้เช่าย้ายออก</vs-button>
                </div>
                <!-- <div v-else-if="tr.user_sign_contract">
                                    <vs-button color="rgb(59,222,200)" class="small"
                                        @click="generateInvoice(tr.id)">สร้างใบแจ้งหนี้</vs-button>
                                </div> -->
                <div
                  v-else-if="
                    tr.tenant_bills[0] &&
                    tr.tenant_bills[0].paymentStatus === 'Partial Paid'
                  "
                >
                  <!-- <vs-button  primary class="small">แก้ไขใบแจ้งหนี้</vs-button>   -->
                  <!-- to: internal link -->
                  <vs-select
                    placeholder="เมนู"
                    v-model="tr.tenant_bills[0].lastEvent"
                    @change="selectMenu(tr.tenant_bills[0].lastEvent, tr)"
                  >
                    <vs-option label="เลือกเมนู" value="">
                      เลือกเมนู
                    </vs-option>
                    <vs-option label="ดูรายการใบแจ้งหนี้" value="View">
                      ดูรายการใบแจ้งหนี้
                    </vs-option>
                    <vs-option label="ชำระเงิน" value="Partial Payment">
                      ชำระบางส่วน
                    </vs-option>
                  </vs-select>

                  <!--  Need to add option for select here -->
                </div>
                <div
                  v-else-if="
                    tr.tenant_bills[0] &&
                    (tr.tenant_bills[0].paymentStatus === 'Paid' ||
                      tr.tenant_bills[0].paymentStatus === 'In Review Progress')
                  "
                >
                  <vs-select
                    placeholder="เมนู"
                    v-model="tr.tenant_bills[0].lastEvent"
                    @change="selectMenu(tr.tenant_bills[0].lastEvent, tr)"
                  >
                    <vs-option label="เลือกเมนู" value="">
                      เลือกเมนู
                    </vs-option>
                    <vs-option label="ดูรายการใบแจ้งหนี้" value="View">
                      ดูรายการใบแจ้งหนี้
                    </vs-option>
                  </vs-select>
                </div>
                <div v-else-if="tr.user_sign_contract">
                  <vs-button
                    color="rgb(59,222,200)"
                    class="small"
                    @click="generateInvoice(tr.id)"
                    >สร้างใบแจ้งหนี้</vs-button
                  >
                </div>
                <div v-else>
                  <vs-button dark class="small">ยังไม่มีผู้เช่า</vs-button>
                </div>
              </vs-td>
              <!-- <vs-td>
                <svg
                  @click="PDFPrint(tr)"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_2691_23279"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_2691_23279)">
                    <path
                      d="M12 15.2386C11.8795 15.2386 11.7673 15.2194 11.6634 15.1809C11.5596 15.1425 11.4609 15.0765 11.3673 14.9829L8.2577 11.8733C8.11925 11.7348 8.04842 11.5608 8.04522 11.3512C8.04201 11.1416 8.11283 10.9643 8.2577 10.8195C8.40257 10.6746 8.58077 10.5996 8.7923 10.5945C9.00383 10.5893 9.18204 10.6592 9.32692 10.8041L11.25 12.7272V5.07712C11.25 4.86431 11.3218 4.68611 11.4654 4.54252C11.609 4.39894 11.7872 4.32715 12 4.32715C12.2128 4.32715 12.391 4.39894 12.5346 4.54252C12.6782 4.68611 12.7499 4.86431 12.7499 5.07712V12.7272L14.673 10.8041C14.8115 10.6656 14.9881 10.5974 15.2028 10.5993C15.4176 10.6012 15.5974 10.6746 15.7422 10.8195C15.8871 10.9643 15.9595 11.14 15.9595 11.3464C15.9595 11.5528 15.8871 11.7284 15.7422 11.8733L12.6327 14.9829C12.5391 15.0765 12.4403 15.1425 12.3365 15.1809C12.2327 15.2194 12.1205 15.2386 12 15.2386ZM6.3077 19.5002C5.80257 19.5002 5.375 19.3252 5.025 18.9752C4.675 18.6252 4.5 18.1976 4.5 17.6925V15.7502C4.5 15.5374 4.5718 15.3592 4.7154 15.2156C4.85898 15.072 5.03718 15.0002 5.25 15.0002C5.46282 15.0002 5.64102 15.072 5.7846 15.2156C5.92818 15.3592 5.99997 15.5374 5.99997 15.7502V17.6925C5.99997 17.7694 6.03202 17.8399 6.09612 17.904C6.16024 17.9681 6.23077 18.0002 6.3077 18.0002H17.6922C17.7692 18.0002 17.8397 17.9681 17.9038 17.904C17.9679 17.8399 18 17.7694 18 17.6925V15.7502C18 15.5374 18.0718 15.3592 18.2154 15.2156C18.3589 15.072 18.5371 15.0002 18.75 15.0002C18.9628 15.0002 19.141 15.072 19.2845 15.2156C19.4281 15.3592 19.5 15.5374 19.5 15.7502V17.6925C19.5 18.1976 19.325 18.6252 18.975 18.9752C18.625 19.3252 18.1974 19.5002 17.6922 19.5002H6.3077Z"
                      fill="#8396A6"
                    />
                  </g>
                </svg>
              </vs-td> -->
              <vs-td>
                <!-- Button with background and shadow -->
                <!-- <button 
                  @click="PDFPrint(tr)"
                  class="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center border border-gray-200"
                >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-gray-500 hover:text-gray-700"
                  >
                    <mask
                      id="mask0_2691_23279"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_2691_23279)">
                      <path
                        d="M12 15.2386C11.8795 15.2386 11.7673 15.2194 11.6634 15.1809C11.5596 15.1425 11.4609 15.0765 11.3673 14.9829L8.2577 11.8733C8.11925 11.7348 8.04842 11.5608 8.04522 11.3512C8.04201 11.1416 8.11283 10.9643 8.2577 10.8195C8.40257 10.6746 8.58077 10.5996 8.7923 10.5945C9.00383 10.5893 9.18204 10.6592 9.32692 10.8041L11.25 12.7272V5.07712C11.25 4.86431 11.3218 4.68611 11.4654 4.54252C11.609 4.39894 11.7872 4.32715 12 4.32715C12.2128 4.32715 12.391 4.39894 12.5346 4.54252C12.6782 4.68611 12.7499 4.86431 12.7499 5.07712V12.7272L14.673 10.8041C14.8115 10.6656 14.9881 10.5974 15.2028 10.5993C15.4176 10.6012 15.5974 10.6746 15.7422 10.8195C15.8871 10.9643 15.9595 11.14 15.9595 11.3464C15.9595 11.5528 15.8871 11.7284 15.7422 11.8733L12.6327 14.9829C12.5391 15.0765 12.4403 15.1425 12.3365 15.1809C12.2327 15.2194 12.1205 15.2386 12 15.2386ZM6.3077 19.5002C5.80257 19.5002 5.375 19.3252 5.025 18.9752C4.675 18.6252 4.5 18.1976 4.5 17.6925V15.7502C4.5 15.5374 4.5718 15.3592 4.7154 15.2156C4.85898 15.072 5.03718 15.0002 5.25 15.0002C5.46282 15.0002 5.64102 15.072 5.7846 15.2156C5.92818 15.3592 5.99997 15.5374 5.99997 15.7502V17.6925C5.99997 17.7694 6.03202 17.8399 6.09612 17.904C6.16024 17.9681 6.23077 18.0002 6.3077 18.0002H17.6922C17.7692 18.0002 17.8397 17.9681 17.9038 17.904C17.9679 17.8399 18 17.7694 18 17.6925V15.7502C18 15.5374 18.0718 15.3592 18.2154 15.2156C18.3589 15.072 18.5371 15.0002 18.75 15.0002C18.9628 15.0002 19.141 15.072 19.2845 15.2156C19.4281 15.3592 19.5 15.5374 19.5 15.7502V17.6925C19.5 18.1976 19.325 18.6252 18.975 18.9752C18.625 19.3252 18.1974 19.5002 17.6922 19.5002H6.3077Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </button> -->
                <button 
      @click="PDFPrint(tr)"
      :class="`p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center border border-gray-200 
        ${tr.tenant_bills[0]? 'bg-gray-100' : ''}`"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :class="`${tr.tenant_bills[0]? 'text-gray-700' : 'text-gray-500 hover:text-gray-700'}`"
      >
        <mask
          id="mask0_2691_23279"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2691_23279)">
          <path
            d="M12 15.2386C11.8795 15.2386 11.7673 15.2194 11.6634 15.1809C11.5596 15.1425 11.4609 15.0765 11.3673 14.9829L8.2577 11.8733C8.11925 11.7348 8.04842 11.5608 8.04522 11.3512C8.04201 11.1416 8.11283 10.9643 8.2577 10.8195C8.40257 10.6746 8.58077 10.5996 8.7923 10.5945C9.00383 10.5893 9.18204 10.6592 9.32692 10.8041L11.25 12.7272V5.07712C11.25 4.86431 11.3218 4.68611 11.4654 4.54252C11.609 4.39894 11.7872 4.32715 12 4.32715C12.2128 4.32715 12.391 4.39894 12.5346 4.54252C12.6782 4.68611 12.7499 4.86431 12.7499 5.07712V12.7272L14.673 10.8041C14.8115 10.6656 14.9881 10.5974 15.2028 10.5993C15.4176 10.6012 15.5974 10.6746 15.7422 10.8195C15.8871 10.9643 15.9595 11.14 15.9595 11.3464C15.9595 11.5528 15.8871 11.7284 15.7422 11.8733L12.6327 14.9829C12.5391 15.0765 12.4403 15.1425 12.3365 15.1809C12.2327 15.2194 12.1205 15.2386 12 15.2386ZM6.3077 19.5002C5.80257 19.5002 5.375 19.3252 5.025 18.9752C4.675 18.6252 4.5 18.1976 4.5 17.6925V15.7502C4.5 15.5374 4.5718 15.3592 4.7154 15.2156C4.85898 15.072 5.03718 15.0002 5.25 15.0002C5.46282 15.0002 5.64102 15.072 5.7846 15.2156C5.92818 15.3592 5.99997 15.5374 5.99997 15.7502V17.6925C5.99997 17.7694 6.03202 17.8399 6.09612 17.904C6.16024 17.9681 6.23077 18.0002 6.3077 18.0002H17.6922C17.7692 18.0002 17.8397 17.9681 17.9038 17.904C17.9679 17.8399 18 17.7694 18 17.6925V15.7502C18 15.5374 18.0718 15.3592 18.2154 15.2156C18.3589 15.072 18.5371 15.0002 18.75 15.0002C18.9628 15.0002 19.141 15.072 19.2845 15.2156C19.4281 15.3592 19.5 15.5374 19.5 15.7502V17.6925C19.5 18.1976 19.325 18.6252 18.975 18.9752C18.625 19.3252 18.1974 19.5002 17.6922 19.5002H6.3077Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </button>
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </div>
      <div>
        <PDFgenerator ref="childComponentPDF" />
      </div>
      <b-modal
        centered
        v-model="createFullpayment"
        size="l"
        hide-backdrop
        hide-header-close
        hide-header
        hide-footer
        class="p-[-20px] text-custom"
      >
        <div>
          <div class="flex justify-between">
            <div
              class="text-custom flex justify-center items-center text-[16px] font-bold"
            >
              แนบหลักฐานการชำระเงิน
            </div>
            <div @click="createFullpayment = false" class="cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_417_4814"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_417_4814)">
                  <path
                    d="M12.0005 13.0538L6.92737 18.1269C6.78892 18.2654 6.61489 18.3362 6.40527 18.3394C6.19567 18.3426 6.01844 18.2718 5.87357 18.1269C5.72869 17.982 5.65625 17.8064 5.65625 17.6C5.65625 17.3936 5.72869 17.218 5.87357 17.0731L10.9466 12L5.87357 6.92689C5.73511 6.78844 5.66427 6.6144 5.66107 6.40479C5.65786 6.19519 5.72869 6.01795 5.87357 5.87309C6.01844 5.7282 6.19407 5.65576 6.40047 5.65576C6.60687 5.65576 6.78251 5.7282 6.92737 5.87309L12.0005 10.9462L17.0736 5.87309C17.212 5.73462 17.3861 5.66379 17.5957 5.66059C17.8053 5.65737 17.9825 5.7282 18.1274 5.87309C18.2723 6.01795 18.3447 6.19359 18.3447 6.39999C18.3447 6.60639 18.2723 6.78202 18.1274 6.92689L13.0543 12L18.1274 17.0731C18.2658 17.2115 18.3367 17.3856 18.3399 17.5952C18.3431 17.8048 18.2723 17.982 18.1274 18.1269C17.9825 18.2718 17.8069 18.3442 17.6005 18.3442C17.3941 18.3442 17.2184 18.2718 17.0736 18.1269L12.0005 13.0538Z"
                    fill="#5C6B79"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div
            class="w-[100%] h-[1px] mt-[24px] mb-[14px] bg-gray-200 border-0 dark:bg-gray-700"
          ></div>
          <!-- <div class="mt-[14px]">
                        <div class="text-custom">เลขที่ใบแจ้งหนี้ (Invoice)</div>
                        <div>
                            <input disabled
                                class="w-[100%] h-[36px]  rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                                v-model="fullPaymentForm.invoiceName" />
                            <input
                                class="w-[100%] h-[36px]  rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                                v-model="fullPaymentForm.invoiceID" hidden />
                        </div>
                    </div> -->
          <div class="mt-[14px]">
            <div class="text-custom">เลขห้อง</div>
            <div>
              <input
                disabled
                class="w-[100%] h-[36px] rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                v-model="fullPaymentForm.roomName"
              />
            </div>
          </div>
          <div class="mt-[14px]">
            <div class="text-custom">ชื่อธนาคาร</div>
            <div>
              <select
                placeholder="Select"
                v-model="fullPaymentForm.bankName"
                class="w-[100%] h-[36px] rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
              >
                <option label="เลือก" value="0" disabled>เลือก</option>
                <option label="ธนาคารกรุงเทพ" value="ธนาคารกรุงเทพ">
                  ธนาคารกรุงเทพ
                </option>
                <option label="ธนาคารกสิกรไทย" value="ธนาคารกสิกรไทย">
                  ธนาคารกสิกรไทย
                </option>
                <option label="ธนาคารกรุงไทย" value="ธนาคารกรุงไทย">
                  ธนาคารกรุงไทย
                </option>
                <option label="ธนาคารทหารไทย" value="ธนาคารทหารไทย">
                  ธนาคารทหารไทย
                </option>
                <option label="ธนาคารไทยพาณิชย์" value="ธนาคารไทยพาณิชย์">
                  ธนาคารไทยพาณิชย์
                </option>
                <option label="ธนาคารกรุงศรีอยุธยา" value="ธนาคารกรุงศรีอยุธยา">
                  ธนาคารกรุงศรีอยุธยา
                </option>
                <option label="ธนาคารเกียรตินาคิน" value="ธนาคารเกียรตินาคิน">
                  ธนาคารเกียรตินาคิน
                </option>
                <option label="ธนาคารซีไอเอ็มบีไทย" value="ธนาคารซีไอเอ็มบีไทย">
                  ธนาคารซีไอเอ็มบีไทย
                </option>
                <option label="ธนาคารทิสโก้" value="ธนาคารทิสโก้">
                  ธนาคารทิสโก้
                </option>
                <option label="ธนาคารธนชาต" value="ธนาคารธนชาต">
                  ธนาคารธนชาต
                </option>
                <option label="ธนาคารยูโอบี" value="ธนาคารยูโอบี">
                  ธนาคารยูโอบี
                </option>
                <option
                  label="ธนาคารสแตนดาร์ดชาร์เตอร์ด"
                  value="ธนาคารสแตนดาร์ดชาร์เตอร์ด"
                >
                  ธนาคารสแตนดาร์ดชาร์เตอร์ด (ไทย)
                </option>
                <option
                  label="ธนาคารไทยเครดิตเพื่อรายย่อย"
                  value="ธนาคารไทยเครดิตเพื่อรายย่อย"
                >
                  ธนาคารไทยเครดิตเพื่อรายย่อย
                </option>
                <option
                  label="ธนาคารแลนด์แอนด์เฮาส์ "
                  value="ธนาคารแลนด์แอนด์เฮาส์"
                >
                  ธนาคารแลนด์ แอนด์ เฮาส์
                </option>
                <option label="ธนาคารไอซีบีซี" value="ธนาคารไอซีบีซี">
                  ธนาคารไอซีบีซี (ไทย)
                </option>
                <option
                  label="ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย"
                  value="ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย"
                >
                  ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย
                </option>
                <option
                  label="ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร"
                  value="ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร"
                >
                  ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร
                </option>
                <option
                  label="ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย"
                  value="ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย"
                >
                  ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย
                </option>
                <option label="ธนาคารออมสิน" value="ธนาคารออมสิน">
                  ธนาคารออมสิน
                </option>
                <option
                  label="ธนาคารอาคารสงเคราะห์"
                  value="ธนาคารอาคารสงเคราะห์"
                >
                  ธนาคารอาคารสงเคราะห์
                </option>
                <option
                  label="ธนาคารอิสลามแห่งประเทศไทย"
                  value="ธนาคารอิสลามแห่งประเทศไทย"
                >
                  ธนาคารอิสลามแห่งประเทศไทย
                </option>
                <option label="ธนาคารแห่งประเทศจีน" value="ธนาคารแห่งประเทศจีน">
                  ธนาคารแห่งประเทศจีน
                </option>
                <option
                  label="ธนาคารซูมิโตโมมิตซุยทรัสต์"
                  value="ธนาคารซูมิโตโมมิตซุยทรัสต์"
                >
                  ธนาคารซูมิโตโม มิตซุย ทรัสต์ (ไทย)
                </option>
                <option
                  label="ธนาคารฮ่องกงและเซี้ยงไฮ้แบงกิ้งคอร์ปอเรชั่น"
                  value="ธนาคารฮ่องกงและเซี้ยงไฮ้แบงกิ้งคอร์ปอเรชั่น"
                >
                  ธนาคารฮ่องกงและเซี้ยงไฮ้แบงกิ้งคอร์ปอเรชั่น จำกัด
                </option>
              </select>
            </div>
          </div>
          <div class="mt-[14px]">
            <div class="text-custom">ชื่อผู้โอน</div>
            <div>
              <input
                class="w-[100%] h-[36px] rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                v-model="fullPaymentForm.accountBankName"
              />
              <input
                class="w-[100%] h-[36px] rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                v-model="fullPaymentForm.userID"
                hidden
              />
            </div>
          </div>
          <div class="mt-[14px]">
            <div class="text-custom">ยอดโอน (เต็มจำนวน)</div>
            <div>
              <input
                disabled
                class="w-[100%] h-[36px] rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                v-model="fullPaymentForm.amount"
              />
            </div>
          </div>
          <div class="mt-[14px]">
            <div class="text-custom">วันที่</div>
            <div>
              <input
                type="date"
                class="w-[100%] h-[36px] rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                v-model="fullPaymentForm.paymentDate"
              />
            </div>
          </div>
          <div class="mt-[14px]">
            <div class="text-custom">เวลา</div>
            <div>
              <input
                type="time"
                class="w-[100%] h-[36px] rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                v-model="fullPaymentForm.paymentTime"
              />
            </div>
          </div>
          <div class="mt-[14px]">
            <div class="text-custom">แนบหลักฐานการโอน</div>
            <div class="mt-[4px] flex">
              <input
                class="h-[28px] w-[120px] rounded-[12px] border flex justify-start"
                id="upload"
                ref="FullPayment"
                hidden
                @change="setUploadFileFullPayment()"
                type="file"
              />
              <label for="upload">
                <div
                  class="h-[28px] w-[120px] flex justify-center text-custom items-center bg-[#165D98] text-[14px] text-[white] rounded-[12px] cursor-pointer"
                >
                  อัพโหลดรูปภาพ
                </div>
              </label>
              <div
                v-if="this.fileFullPayment.name"
                class="text-[#5C6B79] text-custom flex justify-center items-center ml-[8px] text-[12px]"
              >
                {{ this.fileFullPayment.name }}
              </div>
              <div
                v-else
                class="text-[#5C6B79] text-custom flex justify-center items-center ml-[8px] text-[12px]"
              >
                ยังไม่ได้เลือกไฟล์
              </div>
            </div>
          </div>
          <div class="flex justify-end mt-[30px]">
            <div>
              <vs-button dark shadow @click="createFullpayment = false">
                <div class="text-custom">ยกเลิก</div>
              </vs-button>
            </div>
            <div>
              <vs-button @click="createFullPayment()" color="#003765">
                <div class="text-custom">บันทึก</div>
              </vs-button>
            </div>
          </div>
        </div>
      </b-modal>
      <b-modal
        centered
        v-model="createPartialPayment"
        size="l"
        hide-backdrop
        hide-header-close
        hide-header
        hide-footer
        class="p-[-20px] text-custom"
      >
        <div>
          <div class="flex justify-between">
            <div
              class="text-custom flex justify-center items-center text-[16px] font-bold"
            >
              แนบหลักฐานการชำระเงิน
            </div>
            <div @click="createPartialPayment = false" class="cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_417_4814"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_417_4814)">
                  <path
                    d="M12.0005 13.0538L6.92737 18.1269C6.78892 18.2654 6.61489 18.3362 6.40527 18.3394C6.19567 18.3426 6.01844 18.2718 5.87357 18.1269C5.72869 17.982 5.65625 17.8064 5.65625 17.6C5.65625 17.3936 5.72869 17.218 5.87357 17.0731L10.9466 12L5.87357 6.92689C5.73511 6.78844 5.66427 6.6144 5.66107 6.40479C5.65786 6.19519 5.72869 6.01795 5.87357 5.87309C6.01844 5.7282 6.19407 5.65576 6.40047 5.65576C6.60687 5.65576 6.78251 5.7282 6.92737 5.87309L12.0005 10.9462L17.0736 5.87309C17.212 5.73462 17.3861 5.66379 17.5957 5.66059C17.8053 5.65737 17.9825 5.7282 18.1274 5.87309C18.2723 6.01795 18.3447 6.19359 18.3447 6.39999C18.3447 6.60639 18.2723 6.78202 18.1274 6.92689L13.0543 12L18.1274 17.0731C18.2658 17.2115 18.3367 17.3856 18.3399 17.5952C18.3431 17.8048 18.2723 17.982 18.1274 18.1269C17.9825 18.2718 17.8069 18.3442 17.6005 18.3442C17.3941 18.3442 17.2184 18.2718 17.0736 18.1269L12.0005 13.0538Z"
                    fill="#5C6B79"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div
            class="w-[100%] h-[1px] mt-[24px] mb-[14px] bg-gray-200 border-0 dark:bg-gray-700"
          ></div>
          <!-- <div class="text-custom">เลขที่ใบแจ้งหนี้ (Invoice)</div>
                <div>
                    <input disabled
                        class="w-[100%] h-[36px]  rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                        v-model="partialPaymentForm.invoiceName" />
                    <input class="w-[100%] h-[36px]  rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                        v-model="partialPaymentForm.invoiceID" hidden />
                </div> -->
          <div class="mt-[14px]">
            <div class="text-custom">ชื่อธนาคาร</div>
            <div>
              <input
                class="w-[100%] h-[36px] rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                v-model="partialPaymentForm.bankName"
              />
            </div>
          </div>
          <div class="mt-[14px]">
            <div class="text-custom">ชื่อผู้โอน</div>
            <div>
              <input
                class="w-[100%] h-[36px] rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                v-model="partialPaymentForm.accountBankName"
              />
              <input
                class="w-[100%] h-[36px] rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                v-model="partialPaymentForm.userID"
                hidden
              />
            </div>
          </div>
          <div class="mt-[14px]">
            <div class="text-custom">ยอดโอน</div>
            <div>
              <input
                class="w-[100%] h-[36px] rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                v-model="partialPaymentForm.amount"
              />
            </div>
          </div>
          <div class="mt-[14px]">
            <div class="text-custom">วันที่</div>
            <div>
              <input
                type="date"
                class="w-[100%] h-[36px] rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                v-model="partialPaymentForm.paymentDate"
              />
            </div>
          </div>
          <div class="mt-[14px]">
            <div class="text-custom">เวลา</div>
            <div>
              <input
                type="time"
                class="w-[100%] h-[36px] rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                v-model="partialPaymentForm.paymentTime"
              />
            </div>
          </div>
          <div class="mt-[14px]">
            <div class="text-custom">แนบหลักฐานการโอน</div>
            <div class="mt-[4px] flex">
              <input
                class="h-[28px] w-[120px] rounded-[12px] border flex justify-start"
                id="upload"
                ref="PartialPayment"
                hidden
                @change="setUploadFilePayment()"
                type="file"
              />
              <label for="upload">
                <div
                  class="h-[28px] w-[120px] flex justify-center text-custom items-center bg-[#165D98] text-[14px] text-[white] rounded-[12px] cursor-pointer"
                >
                  อัพโหลดรูปภาพ
                </div>
              </label>
              <div
                v-if="this.file.name"
                class="text-[#5C6B79] text-custom flex justify-center items-center ml-[8px] text-[12px]"
              >
                {{ this.file.name }}
              </div>
              <div
                v-else
                class="text-[#5C6B79] text-custom flex justify-center items-center ml-[8px] text-[12px]"
              >
                ยังไม่ได้เลือกไฟล์
              </div>
            </div>
          </div>
          <div class="flex justify-end mt-[30px]">
            <div>
              <vs-button dark shadow @click="createPartialPayment = false">
                <div class="text-custom">ยกเลิก</div>
              </vs-button>
            </div>
            <div>
              <vs-button @click="createPartial()" color="#003765">
                <div class="text-custom">บันทึก</div>
              </vs-button>
            </div>
          </div>
        </div>
      </b-modal>
      <!-- <b-modal centered v-model="createPartialPayment" size="l" hide-backdrop hide-header-close hide-header
                hide-footer class="p-[-20px] text-custom">
                <div>
                    <div class="flex justify-between">
                        <div class="text-custom flex justify-center items-center text-[16px] font-bold">
                            แนบหลักฐานการชำระบางส่วน</div>
                        <div @click="createPartialPayment = false" class="cursor-pointer">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_417_4814" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                    width="24" height="24">
                                    <rect width="24" height="24" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_417_4814)">
                                    <path
                                        d="M12.0005 13.0538L6.92737 18.1269C6.78892 18.2654 6.61489 18.3362 6.40527 18.3394C6.19567 18.3426 6.01844 18.2718 5.87357 18.1269C5.72869 17.982 5.65625 17.8064 5.65625 17.6C5.65625 17.3936 5.72869 17.218 5.87357 17.0731L10.9466 12L5.87357 6.92689C5.73511 6.78844 5.66427 6.6144 5.66107 6.40479C5.65786 6.19519 5.72869 6.01795 5.87357 5.87309C6.01844 5.7282 6.19407 5.65576 6.40047 5.65576C6.60687 5.65576 6.78251 5.7282 6.92737 5.87309L12.0005 10.9462L17.0736 5.87309C17.212 5.73462 17.3861 5.66379 17.5957 5.66059C17.8053 5.65737 17.9825 5.7282 18.1274 5.87309C18.2723 6.01795 18.3447 6.19359 18.3447 6.39999C18.3447 6.60639 18.2723 6.78202 18.1274 6.92689L13.0543 12L18.1274 17.0731C18.2658 17.2115 18.3367 17.3856 18.3399 17.5952C18.3431 17.8048 18.2723 17.982 18.1274 18.1269C17.9825 18.2718 17.8069 18.3442 17.6005 18.3442C17.3941 18.3442 17.2184 18.2718 17.0736 18.1269L12.0005 13.0538Z"
                                        fill="#5C6B79" />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="w-[100%] h-[1px]  mt-[24px] mb-[14px] bg-gray-200 border-0 dark:bg-gray-700"></div>
                    <div class="mt-[14px]">
                        <div class="text-custom">เลขที่ใบแจ้งหนี้ (Invoice)</div>
                        <div>
                            <input disabled
                                class="w-[100%] h-[36px]  rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                                v-model="partialPaymentForm.invoiceName" />
                            <input
                                class="w-[100%] h-[36px]  rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                                v-model="partialPaymentForm.invoiceID" hidden />
                        </div>
                    </div>
                    <div class="mt-[14px]">
                        <div class="text-custom">เลขห้อง</div>
                        <div>
                            <input disabled
                                class="w-[100%] h-[36px]  rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                                v-model="partialPaymentForm.roomName" />
                        </div>
                    </div>
                    <div class="mt-[14px]">
                        <div class="text-custom">ชื่อธนาคาร</div>
                        <div>
                            <input
                                class="w-[100%] h-[36px]  rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                                v-model="partialPaymentForm.bankName" />
                        </div>
                    </div>
                    <div class="mt-[14px]">
                        <div class="text-custom">ชื่อผู้โอน</div>
                        <div>
                            <input
                                class="w-[100%] h-[36px]  rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                                v-model="partialPaymentForm.accountBankName" />
                            <input
                                class="w-[100%] h-[36px]  rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                                v-model="partialPaymentForm.userID" hidden />
                        </div>
                    </div>
                    <div class="mt-[14px]">
                        <div class="text-custom">ยอดโอน</div>
                        <div>
                            <input
                                class="w-[100%] h-[36px]  rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                                v-model="partialPaymentForm.amount" />
                        </div>
                    </div>
                    <div class="mt-[14px]">
                        <div class="text-custom">วันที่</div>
                        <div>
                            <input type="date"
                                class="w-[100%] h-[36px]  rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                                v-model="partialPaymentForm.paymentDate" />
                        </div>
                    </div>
                    <div class="mt-[14px]">
                        <div class="text-custom">เวลา</div>
                        <div>
                            <input type="time"
                                class="w-[100%] h-[36px]  rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                                v-model="partialPaymentForm.paymentTime" />
                        </div>
                    </div>
                    <div class="mt-[14px]">
                        <div class="text-custom">แนบหลักฐานการโอน</div>
                        <div class="mt-[4px] flex">
                            <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start"
                                id="uploadPartialPayment" ref="PartialPayment" hidden @change="setUploadFilePayment()"
                                type="file" />
                            <label for="uploadPartialPayment">
                                <div
                                    class="h-[28px] w-[120px] flex justify-center text-custom items-center bg-[#165D98] text-[14px] text-[white] rounded-[12px] cursor-pointer">
                                    อัพโหลดรูปภาพ</div>
                            </label>
                            <div v-if="this.file.name"
                                class="text-[#5C6B79] text-custom flex justify-center items-center ml-[8px] text-[12px]">
                                {{ this.file.name }}</div>
                            <div v-else
                                class="text-[#5C6B79] text-custom flex justify-center items-center ml-[8px] text-[12px]">
                                ยังไม่ได้เลือกไฟล์</div>
                        </div>
                    </div>
                    <div class="flex justify-end mt-[30px]">
                        <div>
                            <vs-button dark shadow @click="createPartialPayment = false">
                                <div class="text-custom">ยกเลิก</div>
                            </vs-button>
                        </div>
                        <div>
                            <vs-button @click="createPartial()" color="#003765">
                                <div class="text-custom">บันทึก</div>
                            </vs-button>
                        </div>
                    </div>
                </div>
            </b-modal> -->
    </div>
    <div>
      Please make sure to add utility for this month before generate invoice
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";
import download from "downloadjs";
import PDFgenerator from "@/views/payment/components/PDFgenerator";
export default {
  components: { PDFgenerator },
  data() {
    return {
      value: "",
      popup_filter: false,
      menu_option: 0,
      createFullpayment: false,
      createPartialPayment: false,
      allCheck: false,
      file: [],
      fileFullPayment: [],
      fullPaymentForm: {
        invoiceID: "",
        invoiceName: "",
        roomName: "",
        userID: "",
        bankName: "",
        accountBankName: "",
        amount: 0,
        paymentDate: "",
        paymentTime: "",
        building: "",
      },
      partialPaymentForm: {
        invoiceID: "",
        invoiceName: "",
        roomName: "",
        userID: "",
        bankName: "",
        accountBankName: "",
        amount: 0,
        paymentDate: "",
        paymentTime: "",
        building: "",
      },
      selected: [],
      payments: [],
      floor: [],
      tab_floor: "0",
      filter: {
        search: "",
        select: [],
        checkSelect: [],
        floor: "",
        selectedMonth: "",
        selectedYear: "",
      },
      name_floor: "",
      selectedDate: null,
      persistentFilters: {
        month: '',
        year: '',
        floor: ''
      },
      showDatePicker: false,
      selectedMonth: new Date().getMonth() + 1, // 1-12
      selectedYear: new Date().getFullYear(),
      monthOptions: [
        'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 
        'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
      ],
    };
  },
  created() {
    const loading = this.$vs.loading({});
    this.filter.checkSelect = ["Not Paid", "Partial Paid", "Paid"];
    setTimeout(() => {
      loading.close();
    }, 1000);
  },
  // mounted() {
  //   (this.selectedDate = new Date().toISOString().substr(0, 7)), // Set the default to current month
  //     this.getfloor();
  // },
  mounted() {
    // Set default date
    this.selectedDate = new Date().toISOString().substr(0, 7);
    
    // Check for saved filters
    const savedFilters = localStorage.getItem('paymentFilters');
    if (savedFilters) {
      const filters = JSON.parse(savedFilters);
      this.filter.selectedMonth = filters.month;
      this.filter.selectedYear = filters.year;
      this.filter.floor = filters.floor;
      
      // Update selectedDate to match
      this.selectedDate = `${filters.year}-${filters.month}`;
    }
    
    // Now load data
    this.getfloor();
  },
  computed: {
    yearOptions() {
      const currentYear = new Date().getFullYear();
      // Generate a range of years (current year -2 to current year +2)
      return Array.from({length: 5}, (_, i) => currentYear - 2 + i);
    },
    
    displayDate() {
      // Format the date for display (e.g., "2025-02")
      return `${this.selectedYear}-${String(this.selectedMonth).padStart(2, '0')}`;
    }
  },
  methods: {
    // filterByDate() {
    //   const dateStr = this.selectedDate;
    //   const [a, b] = dateStr.split("-");
    //   this.filter.selectedMonth = b;
    //   this.filter.selectedYear = a;
    //   this.getRoomBill(
    //     this.filter.floor,
    //     0,
    //     this.filter.selectedMonth,
    //     this.filter.selectedYear
    //   );
    // },
    updateSelectedDate() {
      // Set the selectedDate in the format YYYY-MM
      this.selectedDate = `${this.selectedYear}-${String(this.selectedMonth).padStart(2, '0')}`;
      // Call your existing filter function
      this.filterByDate();
      // Hide the picker after selection
      this.showDatePicker = false;
    },
    filterByDate() {
      this.filter.selectedMonth = String(this.selectedMonth).padStart(2, '0');
      this.filter.selectedYear = String(this.selectedYear);
      
      this.getRoomBill(
        this.filter.floor,
        0,
        this.filter.selectedMonth,
        this.filter.selectedYear
      );
    },
    routeTo(roomID) {
      this.$router.push({
        path: `/payment-detail?roomID=${roomID}`,
      });
    },
    selectMenu(menu_option, roomdata) {
      if (menu_option === "Full Payment") {
        //make this.form = inputfrom function
        // ex. this.invoiceName = roomdata.attributes.invoiceName
        let sumAmount;
        for (let k = 0; k < roomdata.tenant_bills.length(); k++) {
          sumAmount = sumAmount + k.total;
        }
        console.log("Data from Select", roomdata);
        this.fullPaymentForm.roomName = roomdata.RoomNumber;
        this.fullPaymentForm.amount = sumAmount;
        this.fullPaymentForm.userID = roomdata.user_sign_contract.id;
        this.fullPaymentForm.building = roomdata.room_building.id;
        this.fullPaymentForm.accountBankName =
          this.userProfile.firstName + " " + this.userProfile.lastName;
        this.createFullpayment = true;
        // this.fullPaymentForm.invoiceName = roomdata.tenant_bills[0].invoiceNumber
        // this.fullPaymentForm.invoiceID = roomdata.tenant_bills[0].id

        this.fullPaymentForm.amount = this.userPayRemain;
        this.fullPaymentForm.invoiceName = tr.attributes.invoiceNumber;
        // this.fullPaymentForm.invoiceName = generateReNumber()
        this.fullPaymentForm.building = tr.attributes.building.data.id;
        this.fullPaymentForm.userID = tr.attributes.user_sign_contract.data.id;
        this.fullPaymentForm.invoiceID = tr.id;
        this.fullPaymentForm.accountBankName =
          this.userProfile.firstName + " " + this.userProfile.lastName;
        // this.fullPaymentForm.accountBankName = "test"
        this.createFullpayment = true;
      } else if (menu_option === "Partial Payment") {
        this.partialPaymentForm.invoiceName =
          roomdata.tenant_bills[0].invoiceNumber;
        this.partialPaymentForm.invoiceID = roomdata.tenant_bills[0].id;
        this.partialPaymentForm.roomName = roomdata.RoomNumber;
        this.partialPaymentForm.userID = roomdata.user_sign_contract.id;
        this.partialPaymentForm.building = roomdata.room_building.id;
        this.createPartialPayment = true;
      } else if (menu_option === "View") {
        this.routeTo(roomdata.id);
      } else if (menu_option === "Update") {
        this.reGenerateInvoice(roomdata.tenant_bills[0].id);
      }
    },
    reGenerateInvoice(invoiceID) {
      console.log("Invoice", invoiceID);
      console.log("building", this.$store.state.building);
      const currentdate = new Date();
      const month = currentdate.getMonth();
      const year = currentdate.getFullYear();
      axios
        .get(
          `https://api.resguru.app/api/regenerateinvoice?buildingid=${this.$store.state.building}&invoiceid=${invoiceID}&month=${month}&year=${year}`
        )
        .then((response) => {
          // console.log("reGenerateInvoice",response.data.meta.message)
          // this.$showNotification('#3Axw89CB', response.data.meta.message)
        })
        .catch((error) => {
          const errorMessage = error.message
            ? error.message
            : "Error updating information";
          this.$showNotification(
            "danger",
            "Please filled out all necessary information"
          );
        })
        .finally(() => {
          this.getfloor();
        });
    },
    createFullPayment() {
      let valit = validateCreateForm("full");
      if (valit == false) {
        this.$showNotification(
          "danger",
          "Please filled out all necessary information"
        );
        return false;
      }
      axios
        .post("https://api.resguru.app/api/tenant-evidence-payments", {
          data: {
            tenant_bill: this.fullPaymentForm.invoiceID,
            user_sign_contract: this.fullPaymentForm.userID,
            bankName: this.fullPaymentForm.accountBankName,
            accountBankName: this.fullPaymentForm.bankName,
            amount: this.fullPaymentForm.amount,
            paymentDate:
              this.fullPaymentForm.paymentDate != ""
                ? this.fullPaymentForm.paymentDate
                : new Date(),
            paymentTime:
              this.fullPaymentForm.paymentTime != ""
                ? this.fullPaymentForm.paymentTime
                : new Date().toTimeString,
            building: this.fullPaymentForm.building,
            room: this.$route.query.roomID,
          },
        })
        .then((resp) => {
          // console.log("Response in create", resp)
          // console.log("Response Evidence ID", resp.data.data.id)
          axios
            .put(
              "https://api.resguru.app/api/tenant-bills/" +
                this.fullPaymentForm.invoiceID,
              {
                data: {
                  paymentStatus: "Waiting Review",
                },
              }
            )
            .then((res) => {
              // console.log("Response in Edit Invoice", res)
            });

          if (this.fileFullPayment.length != 0) {
            let formData = new FormData();
            formData.append("files", this.fileFullPayment);
            formData.append("refId", String(resp.data.data.id));
            formData.append(
              "ref",
              "api::tenant-evidence-payment.tenant-evidence-payment"
            );
            formData.append("field", "evidence");

            axios
              .post("https://api.resguru.app/api/upload", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              })
              .then((result) => {
                // console.log("Upload file", result)
              })
              .catch((error) => {
                // console.log(error);
              });
          }
        })
        .catch((error) => {
          const errorMessage = error.message
            ? error.message
            : "Error updating information";
          this.$showNotification("danger", "Fail to Create Payment ");
        })
        .finally(() => {
          this.getfloor();
          this.$showNotification("#3A89CB", "Update Service Success");
        });
      this.createFullpayment = false;
    },
    createPartial() {
      let valit = validateCreateForm("part");
      if (valit == false) {
        this.$showNotification(
          "danger",
          "Please filled out all necessary information"
        );
        return false;
      }
      axios
        .post("https://api.resguru.app/api/tenant-evidence-payments", {
          data: {
            tenant_bill: this.partialPaymentForm.invoiceID,
            user_sign_contract: this.partialPaymentForm.userID,
            bankName: this.partialPaymentForm.accountBankName,
            accountBankName: this.partialPaymentForm.bankName,
            amount: this.partialPaymentForm.amount,
            paymentDate:
              this.partialPaymentForm.paymentDate != ""
                ? this.partialPaymentForm.paymentDate
                : new Date(),
            paymentTime:
              this.partialPaymentForm.paymentTime != ""
                ? this.partialPaymentForm.paymentTime
                : new Date().toTimeString,
            building: this.partialPaymentForm.building,
            room: this.$route.query.roomID,
          },
        })
        .then((resp) => {
          // console.log("Response in create", resp)
          // console.log("Response Evidence ID", resp.data.data.id)
          axios
            .put(
              "https://api.resguru.app/api/tenant-bills/" +
                this.partialPaymentForm.invoiceID,
              {
                data: {
                  paymentStatus: "Waiting Review",
                },
              }
            )
            .then((res) => {
              console.log("Response in Edit Invoice", res);
            });

          if (this.file.length != 0) {
            let formData = new FormData();
            formData.append("files", this.file);
            formData.append("refId", String(resp.data.data.id));
            formData.append(
              "ref",
              "api::tenant-evidence-payment.tenant-evidence-payment"
            );
            formData.append("field", "evidence");

            axios
              .post("https://api.resguru.app/api/upload", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              })
              .then((result) => {
                // console.log("Upload file", result)
              })
              .catch((error) => {
                console.log(error);
              });
          }
          this.$showNotification("#3A89CB", "Update Service Success");
        })
        .finally(() => {
          this.getfloor();
          this.$showNotification("#3A89CB", "Create Payment Success");
        })
        .catch((error) => {
          const errorMessage = error.message
            ? error.message
            : "Error updating information";
          this.$showNotification("danger", "Fail to Create New Payment");
        });
      this.createPartialPayment = false;
    },
    validateCreateForm(type) {
      if (type == "full") {
        if (
          this.fullPaymentForm.invoiceID == "" ||
          this.fullPaymentForm.userID == "" ||
          this.fullPaymentForm.accountBankName == "" ||
          this.fullPaymentForm.bankName == "" ||
          this.fullPaymentForm.amount == "" ||
          this.fullPaymentForm.building == "" ||
          this.$route.query.roomID == ""
        ) {
          return false;
        } else {
          return true;
        }
      } else if (type == "part") {
        if (
          this.partialPaymentForm.invoiceID == "" ||
          this.partialPaymentForm.userID == "" ||
          this.partialPaymentForm.accountBankName == "" ||
          this.partialPaymentForm.bankName == "" ||
          this.partialPaymentForm.amount == "" ||
          this.partialPaymentForm.building == "" ||
          this.$route.query.roomID
        ) {
          return false;
        } else {
          return true;
        }
      }
    },
    getRoomBill(id, code, m, y) {
      // console.log("this.filter.floor",this.filter.floor)
      const loading = this.$vs.loading();
      const output =
        this.filter.select.length > 0
          ? this.filter.select.join(",")
          : this.filter.checkSelect.join(",");
      // fetch('https://api.resguru.app/api' + '/announcements?filters[building][id][$eq]=' + this.$store.state.building +'&poopulate=*')
      fetch(
        `https://api.resguru.app/api/getPayment?buildingid=${this.$store.state.building}&floor=${id}&month=${m}&year=${y}&paymentStatus=` +
          output
      )
        .then((response) => response.json())
        .then((resp) => {
          // console.log("Return from getRoomBill()", resp.data);
          if (code == 8) {
            this.payments = resp.data.filter((item) =>
              item.RoomNumber.toLowerCase().includes(
                this.filter.search.toLowerCase()
              )
            );
          } else {
            this.payments = resp.data;
          }
          // this.payments = resp.data
        })
        .finally(() => {
          loading.close();
        });
    },
    getfloor() {
      fetch(
        "https://api.resguru.app/api/building-floors?filters[building][id][$eq]=" +
          this.$store.state.building +
          "&populate=*"
      )
        .then((response) => response.json())
        .then((resp) => {
          // console.log("Return from getfloor()", resp.data);
          this.floor = resp.data;
          // console.log("resp.data[0].id", resp.data[0].id)
          // console.log("resp.data[0].attributes.floorName", resp.data[0].attributes.floorName)
          // console.log("this.filter.floor", this.filter.floor)
          if (resp.data[0]) {
            this.filter.floor = resp.data[0].id;
            this.name_floor = resp.data[0].attributes.floorName;
          }
        })
        .finally(() => {
          this.filterByDate();
          // loading.close()
        });
    },
    generateInvoice(roomid) {
      const currentdate = new Date();
      const month = currentdate.getMonth() + 1;
      const year = currentdate.getFullYear();
      // console.log("11111",this.$store.state.building)
      // console.log("22222", roomid)
      // console.log("22222", month)
      // console.log("22222", year)
      // console.log("22222", this.$store.state)
      axios
        .get(
          `https://api.resguru.app/api/generateInvoice?buildingid=${this.$store.state.building}&roomid=${roomid}&month=${month}&year=${year}`
        )
        .then((response) => {
          this.$showNotification("#3A89CB", response.data.meta.message);
        })
        .finally(() => {
          this.filterByDate();
        })
        .catch((error) => {
          const errorMessage = error.message
            ? "ไม่สามารถสร้างใบเรียกเก็บเงินใหม่ได้ กรุณาตรวจสอบค่าน่ำและค่าไฟเดือนปัจจุบันของห้องดังกล่าว"
            : "Error updating information";
          // this.$showNotification("danger", errorMessage);
          this.$showNotification(
            "danger",
            "ไม่สามารถสร้างใบเรียกเก็บเงินใหม่ได้ กรุณาตรวจสอบค่าน่ำและค่าไฟเดือนปัจจุบันของห้องดังกล่าว"
          );
        });
    },
    setUploadFilePayment() {
      this.file = this.$refs.PartialPayment.files[0];
    },
    setUploadFileFullPayment() {
      this.fileFullPayment = this.$refs.FullPayment.files[0];
    },
    async PDFPrint(tr) {
      this.$refs.childComponentPDF.generatePDF(tr);
    },
    filterData() {
      this.payments = this.payments.filter((item) =>
        item.RoomNumber.toLowerCase().includes(this.filter.search.toLowerCase())
      );
      if (this.filter.search == "") {
        this.getRoomBill(
          this.filter.floor,
          0,
          this.filter.selectedMonth,
          this.filter.selectedYear
        );
      }
    },
    handleKeyDown(event) {
      // Check if the pressed key is the backspace key
      if (event.keyCode === 8) {
        this.getRoomBill(
          this.filter.floor,
          8,
          this.filter.selectedMonth,
          this.filter.selectedYear
        );
        // Perform your desired action here when backspace is pressed
      }
    },
  },
};
</script>
<style>
tbody tr:nth-child(odd) {
  background-color: #c3d4f1;
  border-radius: solid !important;
}
tbody tr:nth-child(even) {
  background-color: #e3e5e9;
  border-radius: solid !important;
}
th {
  font-size: 20px;
}
tbody td:first-child {
  font-size: 16px !important;
  width: 10%;
}
tbody td {
  font-size: 16px !important;
}

.table-container {
  width: 100%;
  /* Set a fixed height to enable scrolling */
  overflow-y: scroll;
  padding: 8px;
  /* Enable vertical scrolling */
  /* Optional: Add padding for spacing */
}
</style>
