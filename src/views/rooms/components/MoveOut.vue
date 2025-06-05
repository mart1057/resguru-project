<template>
  <div class="mt-[14px]">
    <div class="font-bold">รายการทรัพย์สินทั้งหมด</div>
    <div class="flex mt-[14px]">
      <div
        class="w-[118px] h-[137px] rounded-[12px] flex items-center justify-center cursor-pointer"
        @click="tab = false"
        :class="tab == false ? 'bg-[#FFF2C0] text-[#D48C00] ' : 'bg-[#F3F7FA]'"
      >
        <div class="flex flex-col justify-between items-center">
          <div>ผู้เช่าย้ายออก</div>
          <div>
            <svg
              width="65"
              height="65"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_430_4811"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="65"
                height="65"
              >
                <rect width="65" height="65" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_430_4811)">
                <path
                  d="M6.51036 55.5208C5.8168 55.5208 5.23541 55.2862 4.76619 54.8169C4.29706 54.3478 4.0625 53.7664 4.0625 53.0728V11.9272C4.0625 11.2336 4.29709 10.6522 4.76626 10.1831C5.23543 9.71384 5.8168 9.47923 6.51036 9.47923H36.9269C37.6205 9.47923 38.2018 9.71384 38.671 10.1831C39.1402 10.6522 39.3748 11.2336 39.3748 11.9272V53.0728C39.3748 53.7664 39.1402 54.3478 38.671 54.8169C38.2018 55.2862 37.6205 55.5208 36.9269 55.5208H25.3124V44.7916H18.1248V55.5208H6.51036ZM8.12487 51.4583H14.0624V40.7292H29.3749V51.4583H35.3124V13.5417H8.12487V51.4583ZM14.0624 34.7917H18.7499V30.1042H14.0624V34.7917ZM14.0624 24.1667H18.7499V19.4792H14.0624V24.1667ZM24.6874 34.7917H29.3749V30.1042H24.6874V34.7917ZM24.6874 24.1667H29.3749V19.4792H24.6874V24.1667ZM43.6457 32.4991C43.6457 31.9233 43.8404 31.441 44.2297 31.0521C44.619 30.6633 45.1014 30.4688 45.6769 30.4688H53.2083L50.979 28.2395C50.6041 27.8646 50.4122 27.3958 50.4035 26.8334C50.3948 26.2708 50.5979 25.7867 51.0128 25.3809C51.3931 25.009 51.8685 24.823 52.4391 24.823C53.0097 24.823 53.4796 25.0105 53.8488 25.3855L59.2498 30.7865C59.7394 31.2761 59.9842 31.8472 59.9842 32.5C59.9842 33.1528 59.7394 33.7239 59.2498 34.2135L53.8488 39.6145C53.4781 39.9838 53.0148 40.1768 52.4588 40.1936C51.9028 40.2103 51.4235 40.0173 51.0207 39.6145C50.6283 39.2396 50.4296 38.7708 50.4244 38.2084C50.4192 37.6458 50.6041 37.1632 50.979 36.7605L53.2083 34.5312H45.6769C45.1014 34.5312 44.619 34.3365 44.2297 33.947C43.8404 33.5575 43.6457 33.0749 43.6457 32.4991Z"
                  :fill="tab == false ? '#D48C00' : '#003765'"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div
        class="w-[118px] h-[137px] rounded-[12px] flex items-center justify-center bg-[#F3F7FA] ml-[14px] cursor-pointer"
        @click="tab = true"
        :class="tab == true ? 'bg-[#FFE2E9] text-[#D44769]' : 'bg-[#F3F7FA]'"
      >
        <div class="flex flex-col justify-between items-center">
          <div>ติดต่อผู้เช่าไม่ได้</div>
          <div>
            <svg
              width="65"
              height="65"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_430_4829"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="65"
                height="65"
              >
                <rect width="65" height="65" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_430_4829)">
                <path
                  d="M32.6093 35.2864L16.1457 51.776C15.7256 52.1961 15.2387 52.4062 14.6849 52.4062C14.131 52.4062 13.6441 52.1961 13.2239 51.776C12.8038 51.3559 12.5938 50.8689 12.5938 50.3151C12.5938 49.7613 12.8038 49.2743 13.2239 48.8542L38.448 23.6979H29.1144V27.0833C29.1144 27.6589 28.9197 28.1413 28.5303 28.5306C28.1408 28.9199 27.6581 29.1145 27.0824 29.1145C26.5066 29.1145 26.0243 28.9199 25.6354 28.5306C25.2465 28.1413 25.0521 27.6589 25.0521 27.0833V22.0963C25.0521 21.3898 25.2867 20.803 25.7558 20.336C26.225 19.869 26.8064 19.6355 27.4999 19.6355H40.6875C41.3418 19.6355 41.9654 19.7622 42.5584 20.0157C43.1514 20.2691 43.6701 20.6181 44.1146 21.0626L51.927 28.8073C52.934 29.8143 54.0702 30.6441 55.3359 31.2969C56.6015 31.9497 57.9687 32.3942 59.4374 32.6303C60.0291 32.7303 60.5425 32.9889 60.9775 33.4058C61.4126 33.8228 61.6301 34.3238 61.6301 34.9089C61.6301 35.4939 61.3879 35.9739 60.9036 36.3489C60.4192 36.7239 59.8888 36.8749 59.3124 36.802C57.3507 36.5659 55.5338 36.0329 53.862 35.2031C52.1901 34.3732 50.6493 33.2673 49.2395 31.8853L46.1666 28.7291L38.9842 35.8854L42.677 39.6042C43.2568 40.184 43.4947 40.8663 43.3905 41.6511C43.2863 42.4357 42.8853 43.0364 42.1874 43.4531L30.3333 50.276C29.8575 50.5503 29.3379 50.6194 28.7744 50.4832C28.2109 50.347 27.7925 50.0406 27.5192 49.5639C27.246 49.0873 27.1871 48.5674 27.3427 48.0043C27.4983 47.4412 27.818 47.0231 28.302 46.75L38.3073 40.9844L32.6093 35.2864ZM11.5104 34.5312C10.9349 34.5312 10.4525 34.3365 10.0632 33.947C9.67383 33.5575 9.47917 33.0749 9.47917 32.4991C9.47917 31.9233 9.67383 31.441 10.0632 31.0521C10.4525 30.6633 10.9349 30.4688 11.5104 30.4688H19.6354C20.2109 30.4688 20.6933 30.6635 21.0826 31.053C21.4719 31.4425 21.6666 31.9251 21.6666 32.5009C21.6666 33.0767 21.4719 33.559 21.0826 33.9479C20.6933 34.3367 20.2109 34.5312 19.6354 34.5312H11.5104ZM6.09375 26.4062C5.51823 26.4062 5.03581 26.2115 4.64648 25.822C4.25716 25.4325 4.0625 24.9499 4.0625 24.3741C4.0625 23.7983 4.25716 23.316 4.64648 22.9271C5.03581 22.5383 5.51823 22.3438 6.09375 22.3438H14.2188C14.7942 22.3438 15.2766 22.5386 15.6659 22.928C16.0553 23.3175 16.2499 23.8001 16.2499 24.3759C16.2499 24.9517 16.0553 25.434 15.6659 25.8229C15.2766 26.2117 14.7942 26.4062 14.2188 26.4062H6.09375ZM52.7447 20.9895C51.4287 20.9895 50.2986 20.5223 49.3542 19.588C48.4097 18.6536 47.9375 17.5303 47.9375 16.2182C47.9375 14.9061 48.4097 13.7848 49.3542 12.8542C50.2986 11.9236 51.4287 11.4584 52.7447 11.4584C54.0607 11.4584 55.1909 11.9256 56.1353 12.86C57.0797 13.7944 57.552 14.9176 57.552 16.2297C57.552 17.5418 57.0797 18.6632 56.1353 19.5937C55.1909 20.5242 54.0607 20.9895 52.7447 20.9895ZM11.5104 18.2812C10.9349 18.2812 10.4525 18.0865 10.0632 17.697C9.67383 17.3075 9.47917 16.8249 9.47917 16.2491C9.47917 15.6733 9.67383 15.191 10.0632 14.8021C10.4525 14.4133 10.9349 14.2188 11.5104 14.2188H19.6354C20.2109 14.2188 20.6933 14.4135 21.0826 14.803C21.4719 15.1925 21.6666 15.6751 21.6666 16.2509C21.6666 16.8267 21.4719 17.309 21.0826 17.6979C20.6933 18.0867 20.2109 18.2812 19.6354 18.2812H11.5104Z"
                  :fill="tab == true ? '#D44769' : '#003765'"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-[100%] h-[1px] mt-[34px] mb-[34px] bg-gray-200 border-0 dark:bg-gray-700"
    ></div>
    <div class="">
      <div class="font-bold text-[16px]">ยอดค้างชำระสะสม</div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        <div
          class="flex flex-col justify-between h-[126px] rounded-[22px] border p-[16px] mt-[14px]"
        >
          <div>คงเหลือ</div>
          <div
            class="text-[#D44769] font-bold text-[16px]"
            v-if="list_debt.total"
          >
            {{ list_debt.total }}
          </div>
        </div>
        <div
          class="flex flex-col justify-between h-[126px] rounded-[22px] border p-[16px] mt-[14px]"
        >
          <div>เงินมัดจำ</div>
          <div class="text-[#D44769] font-bold text-[16px]">
            {{ list_debt.deposit }}
          </div>
        </div>
        <div
          class="flex flex-col justify-between h-[126px] rounded-[22px] border p-[16px] mt-[14px]"
        >
          <div>เงินประกัน</div>
          <div class="text-[#D44769] font-bold text-[16px]">
            {{ list_debt.deposit2 }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-[100%] h-[1px] mt-[34px] mb-[34px] bg-gray-200 border-0 dark:bg-gray-700"
    ></div>

    <!-- /////////////////////////////////// items ///////////////////////////////// -->
<div class="mt-[14px]">
    <!-- Equipment Inspection List -->
    <div class="mt-[24px]">
      <div class="text-[18px] text-[#141629] text-custom font-bold">
        รายการตรวจจับ
      </div>
    </div>
    
    <div class="mt-[14px]">
      <div id="app" class="p-6 bg-gray-50">
        <div class="w-full">
            <h1 class="text-2xl font-bold text-gray-800 mb-6">รายการตรวจสอบอุปกรณ์</h1>
            <!-- Action buttons -->
            <div class="mt-6 mb-6 flex justify-center space-x-4">
                <button @click="expandAll" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    เปิดทั้งหมด
                </button>
                <button @click="collapseAll" class="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors">
                    ปิดทั้งหมด
                </button>
            </div>
            
            <!-- Collapsible Sections - 2 Columns -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div v-for="(section, sectionIndex) in sections" :key="sectionIndex" 
                     class="bg-white rounded-lg shadow-sm border section-container h-fit">
                    <!-- Section Header -->
                    <div 
                        @click="toggleSection(sectionIndex)"
                        class="section-header flex items-center justify-between p-4 cursor-pointer border-b border-gray-200"
                    >
                        <div class="flex items-center">
                            <h3 class="text-lg font-semibold text-gray-800">{{ section.name }}</h3>
                            <span class="ml-3 text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                {{ getSectionItems(sectionIndex).length }} รายการ
                            </span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <!-- Progress indicator -->
                            <div class="text-sm text-gray-600">
                                {{ getCompletedCount(sectionIndex) }}/{{ getSectionItems(sectionIndex).length }} เสร็จ
                            </div>
                            <!-- Chevron icon -->
                            <svg 
                                :class="['chevron w-5 h-5 text-gray-500 transition-transform duration-300', section.collapsed ? '' : 'rotate-180']"
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>

                    <!-- Section Content -->
                    <div 
                        class="section-content overflow-hidden transition-all duration-300 ease-in-out"
                        :style="{ maxHeight: section.collapsed ? '0px' : '1000px' }"
                    >
                        <div class="overflow-x-auto">
                            <table class="min-w-full">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">รายการ</th>
                                        <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">สถานะ</th>
                                        <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ราคา</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr v-for="(item, i) in getSectionItems(sectionIndex)" :key="i" class="hover:bg-gray-50">
                                        <td class="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
                                            {{ item.name }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            <div class="flex justify-center space-x-6">
                                                <label class="flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        v-model="item.check"
                                                        @change="
                                                            item.checked = false;
                                                            item.check ? addOptions(item) : removeOptions(item)
                                                        "
                                                        class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 focus:ring-2 mr-2"
                                                    />
                                                    <span class="text-sm text-red-600 font-medium">เสียหาย</span>
                                                </label>
                                                <label class="flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        v-model="item.checked"
                                                        @change="
                                                            item.check = false;
                                                            removeOptions(item)
                                                        "
                                                        class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2 mr-2"
                                                    />
                                                    <span class="text-sm text-green-600 font-medium">ไม่เสียหาย</span>
                                                </label>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            <input
                                                class="h-10 w-24 bg-gray-50 border border-gray-300 rounded-lg text-center text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                                                type="number"
                                                v-model="item.price"
                                                :disabled="item.checked == true"
                                                placeholder="0"
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
      </div>
    </div>
  
  


<!-- รายละเอียด -->
      <div
        class="w-[100%] h-[1px] mt-[34px] mb-[34px] bg-gray-200 border-0 dark:bg-gray-700"
      ></div>
      <div class="flex w-[100%]">
        <div class="w-[40%]">
          <div class="font-bold text-[16px]">รายละเอียด</div>
          <!-- <div class="mt-[14px]">รายละเอียด</div>
                    <div class="mt-[8px]">
                        <vs-select placeholder="เลือกผู้ใช้จากระบบ">
                            <vs-option label="อาคาร A" value="1">
                                อาคาร A
                            </vs-option>
                            <vs-option label="อาคาร B" value="2">
                                อาคาร B
                            </vs-option>
                        </vs-select>
                    </div> -->
          <div class="mt-[14px] text-[12px] text-[#141629]">
            <div>
              {{ user_detail.sex ? "นาง" : "นาย" }} {{ user_detail.firstName }}
              {{ user_detail.lastName }}
            </div>
            <div>{{ user_detail.contactAddress }}</div>
            <div>
              เลขประจำตัวผู้เสียภาษี
              {{ user_detail.idCard ? user_detail.idCard : "-" }}
            </div>
            <!-- <div>วันที่ 07/06/2023</div> -->
          </div>
        </div>

        <!-- <div class="w-[10%]">
                    <div @click="payment = true"
                        class="bg-[#CFFBDA] text-[#0B9A3C] rounded-[12px] pt-[7px] pb-[7px] pl-[12px] pr-[12px] text-center cursor-pointer">
                        บันทึกหนี้สูญแล้ว</div>
                </div> -->
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="mt-[50px]">
          <div class="text-custom">
            <div>
              <div class="flex justify-start items-start">คืนเงินประกัน</div>
              <div class="mt-[14px] flex">
                <div>
                  <div
                    class="font-bold text-custom text-[#8396A6] text-[12px] flex justify-start items-start"
                  >
                    รายการ
                  </div>
                  <div>
                    <div
                      class="h-[36px] w-[215px] bg-[#F3F8FD] rounded-[12px] flex justify-start items-center pl-[8px]"
                    >
                      เงินประกัน
                    </div>
                  </div>
                </div>
                <div class="ml-[8px] mt-[-8px]">
                  <div>
                    <div
                      class="font-bold text-custom text-[#8396A6] text-[12px] flex justify-start items-start"
                    >
                      จำนวนเงิน(บาท)
                    </div>
                    <div>
                      <input
                        class="h-[36px] w-[120px] bg-[#F3F8FD] rounded-[12px] flex justify-start items-center pl-[8px]"
                        type="input"
                        v-model="list_debt.deposit2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="flex mt-[24px]">
                            <div>
                                <div class="font-bold text-custom text-[12px] flex justify-start items-start">
                                    รวมทั้งหมด
                                </div>
                            </div>
                            <div class="ml-[168px]">
                                <div>
                                    <div class="font-bold text-custom text-[12px] flex justify-start items-start">
                                        {{ list_debt.deposit2 }}
                                    </div>
                                </div>
                            </div>
                        </div> -->
            </div>
          </div>
          <div class="w-[50%] flex flex-col justify-end mt-[14px]">
            รายการชำระเงิน
            <div class="w-[50%] flex justify-between mt-[8px]">
              <div>
                <div class="text-[12px] text-[#8396A6]">รายการ</div>
                <div class="mt-[8px]">
                  <div
                    class="h-[36px] w-[215px] bg-[#F3F8FD] rounded-[12px] flex justify-start items-center pl-[8px]"
                  >
                    ค่าหอพัก
                  </div>
                </div>
                <div class="mt-[8px]">
                  <div
                    class="h-[36px] w-[215px] bg-[#F3F8FD] rounded-[12px] flex justify-start items-center pl-[8px]"
                  >
                    ค่าน้ำ
                  </div>
                </div>
                <div class="mt-[8px]">
                  <div
                    class="h-[36px] w-[215px] bg-[#F3F8FD] rounded-[12px] flex justify-start items-center pl-[8px]"
                  >
                    ค่าไฟ
                  </div>
                </div>

                <div class="mt-[8px]">
                  <div
                    class="h-[36px] w-[215px] bg-[#F3F8FD] rounded-[12px] flex justify-start items-center pl-[8px]"
                  >
                    ค่าส่วนกลาง
                  </div>
                </div>
                <div class="mt-[8px]">
                  <div
                    class="h-[36px] w-[215px] bg-[#F3F8FD] rounded-[12px] flex justify-start items-center pl-[8px]"
                  >
                    ค่าอื่น ๆ
                  </div>
                </div>
                <div class="mt-[32px]">
                  <div
                    class="font-bold text-custom text-[14px] flex justify-start items-start ml-[16px]"
                  >
                    รวมทั้งหมด
                  </div>
                </div>
              </div>
              <div>
                <div class="text-[12px] text-[#8396A6]">จำนวนเงินบาท</div>
                <div class="flex">
                  <input
                    class="h-[36px] w-[120px] bg-[#F3F8FD] rounded-[12px] flex justify-start items-center"
                    type="number"
                    v-model="bill_detail.room"
                    @input="sumValue"
                  />
                </div>
                <div class="flex mt-[-8px]">
                  <input
                    class="h-[36px] w-[120px] bg-[#F3F8FD] rounded-[12px] flex justify-start"
                    type="number"
                    v-model="bill_detail.water"
                    @input="sumValue"
                  />
                </div>
                <div class="flex mt-[-8px]">
                  <input
                    class="h-[36px] w-[120px] bg-[#F3F8FD] rounded-[12px] flex justify-start"
                    type="number"
                    v-model="bill_detail.ele"
                    @input="sumValue"
                  />
                </div>
                <div class="flex mt-[-8px]">
                  <input
                    class="h-[36px] w-[120px] bg-[#F3F8FD] rounded-[12px] flex justify-start"
                    type="number"
                    v-model="bill_detail.communalPrice"
                    @input="sumValue"
                  />
                </div>
                <div class="flex mt-[-8px]">
                  <input
                    class="h-[36px] w-[120px] bg-[#F3F8FD] rounded-[12px] flex justify-start"
                    type="number"
                    v-model="bill_detail.other"
                    @input="sumValue"
                  />
                </div>
                <div>
                  <div
                    v-if="bill_detail.room"
                    class="font-bold text-custom text-[14px] flex justify-start items-start pl-[16px] mt-[24px]"
                  >
                    {{ total }}
                  </div>
                  <div
                    v-else
                    class="font-bold text-custom text-[14px] flex justify-start items-start pl-[16px] mt-[24px]"
                  >
                    -
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-[100%] justify-end mt-[50px]">
          <div class="w-[90%] flex flex-col items-center">
            <div class="text-custom text-[18px] font-bold text-[#003765]">
              สรุปการย้ายออก
            </div>
            <div class="w-[100%] mt-[14px]">
              <div class="flex justify-between w-[100%]">
                <div class="text-custom">ค้างชำระ</div>
                <div
                  class="text-custom"
                  v-if="
                    bill_detail.water || bill_detail.room || bill_detail.other
                  "
                >
                  {{ total }} <span class="ml-[4px] text-custom">บาท</span>
                </div>

                <div class="text-custom" v-else>
                  -<span class="ml-[4px] text-custom">บาท</span>
                </div>
              </div>
              <div
                class="flex justify-between w-[100%] mt-[4px]"
                v-for="item in options"
              >
                <div class="text-custom">
                  ค่าปรับทรัพย์สินเสียหาย ({{ item.name }})
                </div>
                <div class="text-custom">
                  {{ item.price }} <span class="ml-[4px] text-custom">บาท</span>
                </div>
              </div>
              <div class="flex justify-between w-[100%] mt-[4px]">
                <div class="text-custom">คืนค่ามัดจำ</div>
                <div class="text-custom">
                  -{{ list_debt.deposit }}
                  <span class="ml-[4px] text-custom">บาท</span>
                </div>
              </div>
              <div class="flex justify-between w-[100%] mt-[4px]">
                <div class="text-custom">คืนเงินประกัน</div>
                <div class="text-custom">
                  -{{ list_debt.deposit2 }}
                  <span class="ml-[4px] text-custom">บาท</span>
                </div>
              </div>
              <div class="flex justify-between w-[100%] mt-[4px]">
                <div class="text-custom text-[16px] font-bold">รวมทั้งสิ้น</div>
                <div
                  class="text-custom text-[16px] font-bold"
                  v-if="list_debt.total"
                >
                  {{
                    totalBillItems() +
                    -list_debt.deposit2 +
                    -list_debt.deposit +
                    parseInt(total)
                  }}
                  <span class="ml-[4px] text-custom">บาท</span>
                </div>
                <div class="text-custom text-[16px] font-bold" v-else>
                  {{
                    totalBillItems() + -list_debt.deposit2 + -list_debt.deposit
                  }}
                  <span class="ml-[4px] text-custom">บาท</span>
                </div>
              </div>
              <div
                class="flex justify-between w-[100%] mt-[4px]"
                v-if="tab == true"
              >
                <div class="text-custom text-[#D44769] font-bold text-[16px]">
                  หนี้สูญ
                  {{
                    totalBillItems() +
                      -list_debt.deposit2 +
                      -list_debt.deposit +
                      total <
                    0
                      ? 0
                      : totalBillItems() +
                        -list_debt.deposit2 +
                        -list_debt.deposit +
                        total
                  }}
                  บาท
                </div>
              </div>
            </div>
            <div
              class="text-custom text-[12px] font-bold text-[#003765] mt-[24px]"
            >
              วันที่ย้ายออก
            </div>
            <div>
              <input
                class="h-[28px] w-[180px] bg-[#F3F8FD] rounded-[12px] mt-[4px] flex justify-start pl-[8px] pr-[8px]"
                type="date"
                v-model="date_moveout"
              />
            </div>
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[14px]"
            >
              <button
                @click="PDFPrint()"
                class="bg-[#165D98] mb-[36px] rounded-[12px] flex justify-center items-center mt-[8px] pl-[14px] pr-[14px] pt-[4px] pb-[4px]"
              >
                <div class="flex">
                  <div class="flex justify-center items-center">
                    <svg
                      width="22"
                      height="23"
                      viewBox="0 0 22 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_3285_9902"
                        style="mask-type: alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="22"
                        height="23"
                      >
                        <rect y="0.5" width="22" height="22" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_3285_9902)">
                        <path
                          d="M14.6652 8.11546V5.36546H7.33187V8.11546H5.9569V4.81532C5.9569 4.58155 6.0363 4.38564 6.19511 4.22757C6.35391 4.06951 6.55068 3.99048 6.78543 3.99048H15.208C15.4466 3.99048 15.645 4.06954 15.8031 4.22767C15.9611 4.38579 16.0402 4.58173 16.0402 4.81548V8.11546H14.6652ZM16.3222 11.7821C16.582 11.7821 16.7997 11.6942 16.9754 11.5185C17.1511 11.3428 17.2389 11.1251 17.2389 10.8654C17.2389 10.6057 17.1511 10.388 16.9754 10.2123C16.7997 10.0366 16.582 9.94874 16.3222 9.94874C16.0625 9.94874 15.8448 10.0366 15.6691 10.2123C15.4934 10.388 15.4056 10.6057 15.4056 10.8654C15.4056 11.1251 15.4934 11.3428 15.6691 11.5185C15.8448 11.6942 16.0625 11.7821 16.3222 11.7821ZM7.61395 17.9167H14.3831C14.4654 17.9167 14.533 17.8903 14.5859 17.8374C14.6388 17.7845 14.6652 17.7169 14.6652 17.6346V14.0032H7.33187V17.6346C7.33187 17.7169 7.35832 17.7845 7.41121 17.8374C7.4641 17.8903 7.53168 17.9167 7.61395 17.9167ZM7.61395 19.2917C7.15826 19.2917 6.76817 19.1294 6.44367 18.8049C6.11915 18.4804 5.9569 18.0903 5.9569 17.6346V15.625H3.38319C3.14845 15.625 2.95168 15.5456 2.79288 15.3868C2.63409 15.228 2.55469 15.0312 2.55469 14.7965V10.4071C2.55469 9.75779 2.77651 9.21352 3.22014 8.77429C3.66378 8.33507 4.20583 8.11546 4.84631 8.11546H17.1508C17.8001 8.11546 18.3443 8.33507 18.7836 8.77429C19.2228 9.21352 19.4424 9.75779 19.4424 10.4071V14.7965C19.4424 15.0312 19.363 15.228 19.2042 15.3868C19.0454 15.5456 18.8486 15.625 18.6139 15.625H16.0402V17.6346C16.0402 18.0903 15.8779 18.4804 15.5534 18.8049C15.2289 19.1294 14.8388 19.2917 14.3831 19.2917H7.61395ZM18.0674 14.25V10.4071C18.0674 10.1474 17.9796 9.92965 17.8039 9.75395C17.6282 9.57826 17.4105 9.49041 17.1508 9.49041H4.84631C4.58659 9.49041 4.36888 9.57826 4.19318 9.75395C4.01749 9.92965 3.92964 10.1474 3.92964 10.4071V14.25H5.9569V12.6283H16.0402V14.25H18.0674Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </div>
                  <div class="text-[white] ml-[4px]">พิมพ์</div>
                </div>
              </button>
              <button
                @click="move_confirm = true"
                class="bg-[#D44769] ml-[8px] mb-[36px] rounded-[12px] flex justify-center items-center mt-[8px] pl-[14px] pr-[14px] pt-[4px] pb-[4px]"
              >
                <div class="flex">
                  <div class="flex justify-center items-center">
                    <svg
                      width="22"
                      height="23"
                      viewBox="0 0 22 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_3339_790"
                        style="mask-type: alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="22"
                        height="23"
                      >
                        <rect y="0.5" width="22" height="22" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_3339_790)">
                        <path
                          d="M2.20351 19.2915C1.96876 19.2915 1.77199 19.2121 1.61317 19.0533C1.45439 18.8945 1.375 18.6978 1.375 18.463V4.53678C1.375 4.30204 1.4544 4.10527 1.6132 3.94647C1.77199 3.78766 1.96876 3.70825 2.20351 3.70825H12.4983C12.7331 3.70825 12.9299 3.78766 13.0886 3.94647C13.2474 4.10527 13.3268 4.30204 13.3268 4.53678V18.463C13.3268 18.6978 13.2474 18.8945 13.0886 19.0533C12.9299 19.2121 12.7331 19.2915 12.4983 19.2915H8.56728V15.6601H6.13454V19.2915H2.20351ZM2.74995 17.9166H4.75959V14.2852H9.94226V17.9166H11.9519V5.08323H2.74995V17.9166ZM4.75959 12.2755H6.34611V10.689H4.75959V12.2755ZM4.75959 8.67938H6.34611V7.09286H4.75959V8.67938ZM8.35574 12.2755H9.94226V10.689H8.35574V12.2755ZM8.35574 8.67938H9.94226V7.09286H8.35574V8.67938ZM14.7724 11.4996C14.7724 11.3047 14.8383 11.1415 14.97 11.0098C15.1018 10.8782 15.2651 10.8124 15.4599 10.8124H18.009L17.2544 10.0579C17.1275 9.93098 17.0626 9.77233 17.0596 9.58195C17.0567 9.39156 17.1255 9.2277 17.2659 9.09037C17.3946 8.96447 17.5555 8.90151 17.7486 8.90151C17.9417 8.90151 18.1008 8.96498 18.2257 9.09191L20.0538 10.9199C20.2195 11.0856 20.3023 11.279 20.3023 11.4999C20.3023 11.7208 20.2195 11.9141 20.0538 12.0798L18.2257 13.9079C18.1003 14.0329 17.9435 14.0982 17.7553 14.1039C17.5671 14.1095 17.4049 14.0442 17.2686 13.9079C17.1357 13.781 17.0685 13.6223 17.0667 13.432C17.065 13.2416 17.1275 13.0782 17.2544 12.9419L18.009 12.1874H15.4599C15.2651 12.1874 15.1018 12.1215 14.97 11.9896C14.8383 11.8578 14.7724 11.6945 14.7724 11.4996Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </div>
                  <div class="text-[white] ml-[4px]">เคลียร์บิลและย้ายออก</div>
                </div>
              </button>
              <button
                @click="darftBill()"
                class="bg-[#003765] ml-[8px] mb-[36px] rounded-[12px] flex justify-center items-center mt-[8px] pl-[14px] pr-[14px] pt-[4px] pb-[4px]"
              >
                <div class="flex">
                  <div class="flex justify-center items-center"></div>
                  <div class="text-[white] ml-[4px]">บันทึกแบบร่าง</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <vs-dialog width="550px" not-center v-model="move_confirm" not-close>
      <template #header>
        <div class="pl-[16px] pr-[16px] pt-[16px]">
          <div class="font-bold">ยืนยันการย้ายออก</div>
        </div>
      </template>
      <div class="con-content pl-[16px] pr-[16px]">
        <div class="text-[#D44769]">
          คุณได้ตรวจสอบความถูกต้องของผู้เช่าห้อง
          {{ $route.query.number_room }} ก่อนจะย้ายออกแล้วหรือไม่ ?
        </div>
        <div class="center mt-[4px]">
          <vs-checkbox v-model="check_final" color="#003765">
            ตรวจสอบแล้ว
          </vs-checkbox>
        </div>
      </div>
      <template #footer>
        <div class="con-footer flex justify-end">
          <vs-button @click="move_confirm = false" transparent>
            <div class="text-[#5C6B79] text-[14px]">ยกเลิก</div>
          </vs-button>
          <vs-button
            @click="submitBill()"
            color="#003765"
            :disabled="check_final == false"
          >
            <div class="text-[white] text-[14px]">ยืนยันการย้ายออก</div>
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog width="300px" not-center v-model="payment" not-close>
      <template #header>
        <div class="pl-[16px] pr-[16px] pt-[16px]">
          <div class="font-bold">การชำระเงิน</div>
        </div>
      </template>
      <div class="con-content pl-[16px] pr-[16px]">
        <div class="text-[#141629]">
          ห้อง {{ $route.query.number_room }} ได้ทำการชำระเงินแล้ว ?
        </div>
        <div class="center mt-[12px] flex justify-center">
          <vs-select placeholder="เลือก">
            <vs-option label="อาคาร A" value="1"> อาคาร A </vs-option>
            <vs-option label="อาคาร B" value="2"> อาคาร B </vs-option>
          </vs-select>
        </div>
      </div>
      <template #footer>
        <div class="con-footer flex justify-around mt-[4px]">
          <vs-button @click="payment = false" transparent>
            <div class="text-[#5C6B79] text-[14px]">ยกเลิก</div>
          </vs-button>
          <vs-button @click="payment = !payment" color="#39B974">
            <div class="text-[white] text-[14px]">ยืนยัน</div>
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog width="300px" not-center v-model="move_done" not-close>
      <template #header>
        <div class="pl-[16px] pr-[16px] pt-[16px]">
          <div class="flex">
            <div class="font-bold text-[#39B974]">ย้ายออกเสร็จสิ้น</div>
            <div class="ml-[8px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_1413_28277"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1413_28277)">
                  <path
                    d="M10.0001 17.9166C8.90513 17.9166 7.87593 17.7089 6.91249 17.2933C5.94903 16.8777 5.11096 16.3138 4.39828 15.6014C3.68559 14.8891 3.12137 14.0514 2.70564 13.0883C2.2899 12.1253 2.08203 11.0963 2.08203 10.0014C2.08203 8.90644 2.28984 7.87725 2.70547 6.9138C3.12109 5.95034 3.68516 5.11227 4.39766 4.39959C5.11016 3.6869 5.948 3.12268 6.9112 2.70695C7.87438 2.29121 8.90354 2.08334 9.99868 2.08334C10.6921 2.08334 11.3641 2.17175 12.0147 2.34857C12.6654 2.52539 13.2877 2.781 13.8817 3.11541C14.0419 3.20516 14.1467 3.33443 14.1958 3.50322C14.2449 3.67202 14.2161 3.82961 14.1093 3.97597C14.0024 4.12233 13.8611 4.21394 13.6854 4.2508C13.5097 4.28766 13.3401 4.26122 13.1766 4.17147C12.6894 3.89904 12.1769 3.69124 11.6389 3.54807C11.101 3.40491 10.5542 3.33332 9.99868 3.33332C8.15145 3.33332 6.57854 3.98263 5.27993 5.28124C3.98132 6.57985 3.33201 8.15277 3.33201 9.99999C3.33201 11.8472 3.98132 13.4201 5.27993 14.7187C6.57854 16.0174 8.15145 16.6667 9.99868 16.6667C11.8459 16.6667 13.4188 16.0174 14.7174 14.7187C16.016 13.4201 16.6653 11.8472 16.6653 9.99999C16.6653 9.83871 16.6592 9.68247 16.6469 9.53126C16.6346 9.38007 16.6135 9.22487 16.5836 9.06568C16.5558 8.88822 16.5863 8.71859 16.6749 8.55678C16.7636 8.39499 16.8971 8.29005 17.0754 8.24197C17.2433 8.1939 17.399 8.21473 17.5427 8.30447C17.6864 8.39422 17.7722 8.52349 17.7999 8.69228C17.8384 8.90275 17.8672 9.11565 17.8865 9.33097C17.9057 9.54629 17.9153 9.76929 17.9153 9.99999C17.9153 11.0951 17.7075 12.1243 17.292 13.0875C16.8764 14.0507 16.3125 14.8885 15.6001 15.601C14.8877 16.3135 14.05 16.8776 13.087 17.2932C12.124 17.7088 11.095 17.9166 10.0001 17.9166ZM8.81599 11.7885L16.598 3.99359C16.7134 3.87822 16.8563 3.81706 17.0267 3.81011C17.1971 3.80317 17.3475 3.86491 17.478 3.99534C17.5975 4.1149 17.6573 4.26068 17.6573 4.4327C17.6573 4.6047 17.5969 4.75106 17.4762 4.87178L9.34322 13.0176C9.19258 13.1682 9.01684 13.2436 8.81599 13.2436C8.61513 13.2436 8.43938 13.1682 8.28874 13.0176L6.00189 10.7307C5.88651 10.6154 5.82748 10.4703 5.8248 10.2957C5.82214 10.121 5.88116 9.9733 6.00189 9.85257C6.12261 9.73184 6.26898 9.67147 6.44099 9.67147C6.61299 9.67147 6.75935 9.73184 6.88007 9.85257L8.81599 11.7885Z"
                    fill="#39B974"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </template>
      <div class="con-content pl-[16px] pr-[16px]">
        <div class="text-[#141629]">กรุณากำหนดสถานะของห้อง 101</div>
        <div class="center mt-[12px] flex justify-center">
          <vs-select placeholder="เลือก">
            <vs-option label="อาคาร A" value="1"> อาคาร A </vs-option>
            <vs-option label="อาคาร B" value="2"> อาคาร B </vs-option>
          </vs-select>
        </div>
      </div>
      <template #footer>
        <div class="con-footer flex justify-around mt-[4px]">
          <vs-button @click="move_done = false" transparent>
            <div class="text-[#5C6B79] text-[14px]">ยกเลิก</div>
          </vs-button>
          <vs-button @click="move_done = !move_done" color="#39B974">
            <div class="text-[white] text-[14px]">ยืนยัน</div>
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <PDFgenerator ref="childComponentPDFMoveOut" />
  </div>
</template>
<script>
import axios from "axios";
import PDFgenerator from "./PDFgenerator.vue";
export default {
  components: {
    PDFgenerator,
  },
  data() {
    return {
      add_item: false,
      value_item: "",
      check_final: false,
      create: false,
      tab: false,
      move_confirm: false,
      payment: false,
      move_done: false,
      date_moveout: null,
      list_debt: {
        total: 0,
        deposit: 0,
        deposit2: 0,
      },
      options: [],
      sections: [
          { name: 'ทำความสะอาด & สี', collapsed: true },
          { name: 'ห้องนอน & เครื่องนอน', collapsed: true },
          { name: 'ห้องน้ำ & สุขภัณฑ์', collapsed: true },
          { name: 'เครื่องใช้ไฟฟ้า', collapsed: true }
      ],
      list_items: [
        { name: "ค่าทำความสะอาด", price: 0, check: false, checked: true },
        { name: "ค่าทาสีผนัง", price: 0, check: false, checked: true },
        { name: "ผนังห้องสีด้าน", price: 0, check: false, checked: true },
        { name: "พื้นห้อง", price: 0, check: false, checked: true },
        { name: "หน้าต่าง", price: 0, check: false, checked: true },
        { name: "มุ้งลวด", price: 0, check: false, checked: true },
        
        { name: "ระเบียง+ราวระเบียง", price: 0, check: false, checked: true },
        { name: "ตะแกรงน้ำระเบียง", price: 0, check: false, checked: true },

        { name: "ประตูหน้าห้อง", price: 0, check: false, checked: true },
        { name: "ลูกบิดหน้าห้อง", price: 0, check: false, checked: true },
        { name: "ตู้เสื้อผ้า", price: 0, check: false, checked: true },
        { name: "โต๊ะเครื่องแป้ง", price: 0, check: false, checked: true },
        { name: "โต๊ะวางของ", price: 0, check: false, checked: true },
        { name: "เตียงนอน", price: 0, check: false, checked: true },
        { name: "ฟูกนอน", price: 0, check: false, checked: true },
        { name: "ผ้าม่านใหญ่", price: 0, check: false, checked: true },
        { name: "ราวม่าน", price: 0, check: false, checked: true },

        { name: "ลูกบิดห้องน้ำ", price: 0, check: false, checked: true },
        { name: "ประตูห้องน้ำ", price: 0, check: false, checked: true },
        { name: "กระจกห้องน้ำ", price: 0, check: false, checked: true },
        { name: "ชั้นวางหน้ากระจกในห้องน้ำ",price: 0,check: false,checked: true},
        { name: "รางแขวนผ้าในห้องน้ำ", price: 0, check: false, checked: true },
        { name: "ก๊อกน้ำ", price: 0, check: false, checked: true },
        { name: "สายฝักบัว", price: 0, check: false, checked: true },
        { name: "ก๊อกฝักบัว", price: 0, check: false, checked: true },
        { name: "ตะแกรงน้ำห้องน้ำ", price: 0, check: false, checked: true },
        { name: "สายฉีดชำระ", price: 0, check: false, checked: true },
        { name: "เครื่องทำน้ำอุ่น", price: 0, check: false, checked: true },
        { name: "ที่เสียบทิชชู่", price: 0, check: false, checked: true },
        { name: "ผนังห้องน้ำ", price: 0, check: false, checked: true },

        { name: "เต้าเสียบปลั๊ก", price: 0, check: false, checked: true },
        { name: "เต้าเสียบสายทีวี", price: 0, check: false, checked: true },
        { name: "ชักโครก", price: 0, check: false, checked: true },
        { name: "หลอดไฟหัวนอน", price: 0, check: false, checked: true },
        { name: "หลอดไฟห้องน้ำ", price: 0, check: false, checked: true },
      ],
      items_other: [],
      bill_detail: {},
      user_detail: {
        ele: 0,
        water: 0,
        room: 0,
        other: 0,
      },
      total: 0,
    };
  },
  created() {
    const loading = this.$vs.loading({});
    // const now = new Date();
    // const month = now.getMonth() + 1;
    // const day = now.getDate();
    // const year = now.getFullYear();
    // this.date_moveout= `${month}/${day}/${year}`;
    // console.log(this.date_moveout);
    this.getDetailRoom();
    setTimeout(() => {
      loading.close();
    }, 1000);
  },
  methods: {
    addOptions(item) {
      this.options.push(item);
    },
    removeOptions(item) {
      this.options = this.options.filter((items) => item.name !== item.name);
    },
    getDetailRoom(id) {
      const loading = this.$vs.loading();
      // fetch('https://api.resguru.app/api/getRoom?buildingid=' + this.$store.state.building + '&buildingFloor=' + this.filter.floor)
      fetch(
        "https://api.resguru.app/api" +
          "/user-sign-contracts/" +
          this.$route.query.id_contract +
          "?populate=deep,4"
      )
        .then((response) => response.json())
        .then((resp) => {
          this.list_debt.deposit = resp.data?.attributes.roomDeposit;
          this.list_debt.deposit2 = resp.data?.attributes.roomInsuranceDeposit;
          this.user_detail =
            resp.data?.attributes.users_permissions_user.data?.attributes;
        })
        .finally(() => {
          fetch(
            "https://api.resguru.app/api" +
              "/tenant-bills" +
              "?populate=*&filters[user_sign_contract][id][$eq]=" +
              this.$route.query.id_contract
          )
            .then((response) => response.json())
            .then((resp) => {
              if (resp.data.length == 0) {
                this.generateInvoice();
                //window.location.reload()
              }
              console.log("bill", resp.data[0]);
              this.list_debt.total = resp.data[0]?.attributes.total
                ? resp.data[0]?.attributes.total
                : 0;
              this.bill_detail.id = resp.data[0]?.id;
              this.bill_detail.ele = resp.data[0]?.attributes.electricPrice
                ? resp.data[0]?.attributes.electricPrice
                : 0;
              this.bill_detail.water = resp.data[0]?.attributes.waterPrice
                ? resp.data[0]?.attributes.waterPrice
                : 0;
              this.bill_detail.communalPrice = resp.data[0]?.attributes
                .communalPrice
                ? resp.data[0]?.attributes.communalPrice
                : 0;
              this.bill_detail.vat = 7;
              this.bill_detail.invoiceNumber =
                resp.data[0]?.attributes.invoiceNumber;
              this.bill_detail.room = resp.data[0]?.attributes.roomPrice
                ? resp.data[0]?.attributes.roomPrice
                : 0;
              this.bill_detail.other = resp.data[0]?.attributes.otherPrice
                ? resp.data[0]?.attributes.roomPrice
                : 0;
            })
            .finally(() => {
              fetch(
                "https://api.resguru.app/api" +
                  "/room-histories?populate=*&filters[building][id][$eq]=" +
                  this.$store.state.building +
                  "&filters[room][id][$eq]=" +
                  this.$route.query.id_room +
                  "&filters[user_sign_contract][id][$eq]=" +
                  this.$route.query.id_contract +
                  "&filters[publishedAt][$null]=true&publicationState=preview"
              )
                .then((response) => response.json())
                .then((resp) => {
                  console.log(resp?.data.length == 0);
                  if (resp?.data.length == 0) {
                    console.log("1");
                    fetch(
                      "https://api.resguru.app/api" +
                        "/rooms/" +
                        this.$route.query.id_room +
                        "?populate=deep"
                    )
                      .then((response) => response.json())
                      .then((resp) => {
                        resp.data?.attributes.other_of_buildings.data?.forEach(
                          (item) => {
                            this.items_other.push({
                              name: item.attributes.title,
                              price: item.attributes.price,
                              img_bf: "",
                              img_af: "",
                              remark: "เสียหาย",
                            });
                          }
                        );
                      })
                      .finally(() => {});
                  } else {
                    (this.tab =
                      resp.data[0]?.attributes.ExitType == "Missing"
                        ? true
                        : false),
                      resp.data[0]?.attributes.room_detect_histories.data?.forEach(
                        (item) => {
                          this.items_other.push({
                            id: item.id,
                            name: item.attributes.name,
                            price: item.attributes.charge,
                            img_bf: "",
                            img_af: "",
                            remark: item.attributes.remark,
                          });
                        }
                      );
                  }
                });
              this.sumValue();
            });
        });
      loading.close();
    },
    addItem(data) {
      this.items_other.push({
        name: data,
        price: 0,
        img_bf: "",
        img_af: "",
        remark: "เสียหาย",
      });
      this.value_item = "";
    },
    deleteItem(i) {
      this.items_other.splice(i, 1);
    },
    totalBillItems() {
      let totalPrice = 0;
      // Loop through each item and add its price to totalPrice
      this.options.forEach((item) => {
        totalPrice += parseInt(item.price);
      });
      return parseInt(totalPrice);
    },
    darftBill() {
      fetch(
        "https://api.resguru.app/api" +
          "/room-histories?populate=*&filters[building][id][$eq]=" +
          this.$store.state.building +
          "&filters[room][id][$eq]=" +
          this.$route.query.id_room +
          "&filters[user_sign_contract][id][$eq]=" +
          this.$route.query.id_contract +
          "&filters[publishedAt][$null]=true&publicationState=preview"
      )
        .then((response) => response.json())
        .then((resp) => {
          console.log(resp?.data.length == 0);
          if (resp?.data.length == 0) {
            //// draft ครั้งแรก
            axios
              .post("https://api.resguru.app/api" + "/room-histories", {
                data: {
                  building: this.$store.state.building,
                  room: this.$route.query.id_room,
                  users_permissions_user: this.$route.query.id_user,
                  date_moveout: this.date_moveout,
                  user_sign_contract: this.$route.query.id_contract,
                  ExitType: this.tab ? "Missing" : "Move",
                  // "publishedAt": null
                },
              })
              .then((resp) => {
                this.options.forEach((element) => {
                  axios.post(
                    "https://api.resguru.app/api" + "/room-detect-histories",
                    {
                      data: {
                        remark: element.remark,
                        charge: element.price,
                        room_history: resp.data.data.id,
                        name: element.name,
                      },
                    }
                  );
                });
              })
              .finally(() => {
                axios.put(
                  "https://api.resguru.app/api" +
                    "/tenant-bills/" +
                    this.bill_detail.id,
                  {
                    data: {
                      roomPrice: this.bill_detail.room,
                      waterPrice: this.bill_detail.water,
                      electricPrice: this.bill_detail.ele,
                      otherPrice: this.bill_detail.other,
                      communalPrice: this.bill_detail.communalPrice,
                      subtotal:
                        parseInt(this.bill_detail.room) +
                        parseInt(this.bill_detail.water) +
                        parseInt(this.bill_detail.ele) +
                        parseInt(this.bill_detail.other),
                      total:
                        parseInt(this.bill_detail.room) +
                        parseInt(this.bill_detail.water) +
                        parseInt(this.bill_detail.ele) +
                        parseInt(this.bill_detail.other) +
                        parseInt(this.bill_detail.communalPrice) +
                        (parseInt(this.bill_detail.room) +
                          parseInt(this.bill_detail.water) +
                          parseInt(this.bill_detail.ele) +
                          parseInt(this.bill_detail.other) +
                          parseInt(this.bill_detail.communalPrice)) *
                          0.07,
                      // "publishedAt": null
                    },
                  }
                );
              });
          } else {
            ////แก้ไข draft และยังคง draft
            axios
              .put(
                "https://api.resguru.app/api" +
                  "/room-histories/" +
                  resp?.data[0].id,
                {
                  data: {
                    date_moveout: this.date_moveout,
                    ExitType: this.tab ? "Missing" : "Move",
                    // "publishedAt": null
                  },
                }
              )
              .then((resp) => {
                //////////////// ไปแก้ไขตอนดึงมาแสดงด้วย
                this.options.forEach((element) => {
                  axios.put(
                    "https://api.resguru.app/api" +
                      "/room-detect-histories/" +
                      element.id,
                    {
                      data: {
                        remark: element.remark,
                        charge: element.price,
                        room_history: resp.data.data.id,
                        name: element.name,
                      },
                    }
                  );
                });
              })
              .finally(() => {
                axios.put(
                  "https://api.resguru.app/api" +
                    "/tenant-bills/" +
                    this.bill_detail.id,
                  {
                    data: {
                      roomPrice: this.bill_detail.room,
                      waterPrice: this.bill_detail.water,
                      electricPrice: this.bill_detail.ele,
                      otherPrice: this.bill_detail.other,
                      communalPrice: this.bill_detail.communalPrice,
                      subtotal:
                        parseInt(this.bill_detail.room) +
                        parseInt(this.bill_detail.water) +
                        parseInt(this.bill_detail.ele) +
                        parseInt(this.bill_detail.other),
                      total:
                        parseInt(this.bill_detail.room) +
                        parseInt(this.bill_detail.water) +
                        parseInt(this.bill_detail.ele) +
                        parseInt(this.bill_detail.other) +
                        parseInt(this.bill_detail.communalPrice) +
                        (parseInt(this.bill_detail.room) +
                          parseInt(this.bill_detail.water) +
                          parseInt(this.bill_detail.ele) +
                          parseInt(this.bill_detail.other) +
                          parseInt(this.bill_detail.communalPrice)) *
                          0.07,
                      // "publishedAt": null
                    },
                  }
                );
              });
          }
        })
        .finally(() => {
          this.$showNotification("#3A89CB", "บันทึกแบบร่างสำเร็จ");
        });
    },
    submitBill() {
      fetch(
        "https://api.resguru.app/api" +
          "/room-histories?populate=*&filters[building][id][$eq]=" +
          this.$store.state.building +
          "&filters[room][id][$eq]=" +
          this.$route.query.id_room +
          "&filters[user_sign_contract][id][$eq]=" +
          this.$route.query.id_contract +
          "&filters[publishedAt][$null]=true&publicationState=preview"
      )
        .then((response) => response.json())
        .then((resp) => {
          console.log(resp?.data.length == 0);
          if (resp?.data.length == 0) {
            ///// ไม่มี draft สร้างแล้วจบ flow เลย
            axios
              .post("https://api.resguru.app/api" + "/room-histories", {
                data: {
                  building: this.$store.state.building,
                  room: this.$route.query.id_room,
                  users_permissions_user: this.$route.query.id_user,
                  ExitType: this.tab ? "Missing" : "Move",
                  date_moveout: this.date_moveout,
                  user_sign_contract: this.$route.query.id_contract,
                },
              })
              .then((resp) => {
                this.options.forEach((element) => {
                  axios.post(
                    "https://api.resguru.app/api" + "/room-detect-histories",
                    {
                      data: {
                        remark: element.remark,
                        charge: element.price,
                        room_history: resp.data.data.id,
                        name: element.name,
                      },
                    }
                  );
                });
              })
              .finally(() => {
                axios.put(
                  "https://api.resguru.app/api" +
                    "/user-sign-contracts/" +
                    this.$route.query.id_contract,
                  {
                    data: {
                      room: null,
                    },
                  }
                );
                axios
                  .put(
                    "https://api.resguru.app/api" +
                      "/tenant-bills/" +
                      this.bill_detail.id,
                    {
                      data: {
                        roomPrice: this.bill_detail.room,
                        waterPrice: this.bill_detail.water,
                        electricPrice: this.bill_detail.ele,
                        otherPrice: this.bill_detail.other,
                        communalPrice: this.bill_detail.communalPrice,
                        subtotal:
                          parseInt(this.bill_detail.room) +
                          parseInt(this.bill_detail.water) +
                          parseInt(this.bill_detail.ele) +
                          parseInt(this.bill_detail.other),
                        total:
                          parseInt(this.bill_detail.room) +
                          parseInt(this.bill_detail.water) +
                          parseInt(this.bill_detail.ele) +
                          parseInt(this.bill_detail.other) +
                          parseInt(this.bill_detail.communalPrice) +
                          (parseInt(this.bill_detail.room) +
                            parseInt(this.bill_detail.water) +
                            parseInt(this.bill_detail.ele) +
                            parseInt(this.bill_detail.other) +
                            parseInt(this.bill_detail.communalPrice)) *
                            0.07,
                        publishedAt: Date.now(),
                      },
                    }
                  )
                  .then(() => {
                    console.log(this.$route.query.id_contract);
                  });
                axios.put(
                  "https://api.resguru.app/api" +
                    "/rooms/" +
                    this.$route.query.id_room,
                  {
                    data: {
                      roomStatus: "Maintenance",
                    },
                  }
                );
                (this.move_confirm = !this.move_confirm),
                  (this.move_done = true);
                this.$router.push({
                  path: "/rooms",
                });
              });
          } else {
            ////// มี draft แล้วจบ flow
            axios
              .put(
                "https://api.resguru.app/api" +
                  "/room-histories/" +
                  resp?.data[0].id,
                {
                  data: {
                    date_moveout: this.date_moveout,
                    ExitType: this.tab ? "Missing" : "Move",
                    publishedAt: Date.now(),
                  },
                }
              )
              .then((resp) => {
                //////////////// ไปแก้ไขตอนดึงมาแสดงด้วย
                this.options.forEach((element) => {
                  axios.put(
                    "https://api.resguru.app/api" +
                      "/room-detect-histories/" +
                      element.id,
                    {
                      data: {
                        remark: element.remark,
                        charge: element.price,
                        room_history: resp.data.data.id,
                        name: element.name,
                      },
                    }
                  );
                });
              })
              .finally(() => {
                // axios.delete('https://api.resguru.app/api' + '/user-sign-contracts/' + this.$route.query.id_contract)
                axios.put(
                  "https://api.resguru.app/api" +
                    "/user-sign-contracts/" +
                    this.$route.query.id_contract,
                  {
                    data: {
                      room: null,
                    },
                  }
                );
                axios
                  .put(
                    "https://api.resguru.app/api" +
                      "/tenant-bills/" +
                      this.bill_detail.id,
                    {
                      data: {
                        roomPrice: this.bill_detail.room,
                        waterPrice: this.bill_detail.water,
                        electricPrice: this.bill_detail.ele,
                        otherPrice: this.bill_detail.other,
                        communalPrice: this.bill_detail.communalPrice,
                        subtotal:
                          parseInt(this.bill_detail.room) +
                          parseInt(this.bill_detail.water) +
                          parseInt(this.bill_detail.ele) +
                          parseInt(this.bill_detail.other),
                        total:
                          parseInt(this.bill_detail.room) +
                          parseInt(this.bill_detail.water) +
                          parseInt(this.bill_detail.ele) +
                          parseInt(this.bill_detail.other) +
                          parseInt(this.bill_detail.communalPrice) +
                          (parseInt(this.bill_detail.room) +
                            parseInt(this.bill_detail.water) +
                            parseInt(this.bill_detail.ele) +
                            parseInt(this.bill_detail.other) +
                            parseInt(this.bill_detail.communalPrice)) *
                            0.07,
                        publishedAt: Date.now(),
                      },
                    }
                  )
                  .then(() => {
                    axios.put(
                      "https://api.resguru.app/api" +
                        "/rooms/" +
                        this.$route.query.id_room,
                      {
                        data: {
                          roomStatus: "Maintenance",
                        },
                      }
                    );
                    (this.move_confirm = !this.move_confirm),
                      (this.move_done = true);
                    this.$router.push({
                      path: "/rooms",
                    });
                  });
              });
          }
        })
        .finally(() => {
          this.$showNotification("#3A89CB", "สำเร็จ");
        });
    },
    PDFPrint() {
      console.log("sdf");
      this.$refs.childComponentPDFMoveOut.generatePDF(
        this.user_detail,
        this.bill_detail,
        this.options,
        this.list_debt
      );
    },
    generateInvoice() {
      const currentdate = new Date();
      const month = currentdate.getMonth();
      const year = currentdate.getFullYear();
      axios
        .get(
          `https://api.resguru.app/api/generateInvoice?buildingid=${this.$store.state.building}&roomid=${this.$route.query.id_room}&month=${month}&year=${year}`
        )
        .then((response) => {
          this.$showNotification("#3A89CB", response.data.meta.message);
        })
        .catch((error) => {
          const errorMessage = error.message
            ? error.message
            : "Error updating information";
          this.$showNotification("danger", errorMessage);
        })
        .finally(() => {
          // window.location.reload()
        });
    },
    sumValue() {
      this.total =
        parseInt(this.bill_detail.room) +
        parseInt(this.bill_detail.water) +
        parseInt(this.bill_detail.ele) +
        parseInt(this.bill_detail.other) +
        parseInt(this.bill_detail.communalPrice);
    },
    getSectionItems(sectionIndex) {
        const customGroups = {
            0: [0, 1, 2, 3, 4, 5, 6, 7],           // Cleaning & surfaces: items 0-7
            1: [8, 9, 10, 11, 12, 13, 14, 15, 16], // Bedroom & furniture: items 8-16  
            2: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], // Bathroom: items 17-29
            3: [30, 31, 32, 33, 34]                // Electrical: items 30-34
        };
        
        return customGroups[sectionIndex] ? 
              customGroups[sectionIndex].map(index => this.list_items[index]).filter(item => item) : 
              [];
    },
    toggleSection(sectionIndex) {
        this.sections[sectionIndex].collapsed = !this.sections[sectionIndex].collapsed;
    },
    getCompletedCount(sectionIndex) {
        const items = this.getSectionItems(sectionIndex);
        return items.filter(item => item.check || item.checked).length;
    },
    expandAll() {
        this.sections.forEach(section => section.collapsed = false);
    },
    collapseAll() {
        this.sections.forEach(section => section.collapsed = true);
    },
    addOptions(item) {
        this.options.push(item);
    },
    removeOptions(item) {
        this.options = this.options.filter((items) => items.name !== item.name);
    },
  },
};
</script>
<style>
    .section-header {
        transition: all 0.3s ease;
    }
    .section-header:hover {
        background-color: #f9fafb;
    }
    .section-content {
        transition: all 0.3s ease;
        overflow: hidden;
    }
    .chevron {
        transition: transform 0.3s ease;
    }
    .chevron.rotated {
        transform: rotate(180deg);
    }
    .collapse-enter-active, .collapse-leave-active {
        transition: all 0.3s ease;
    }
    .collapse-enter, .collapse-leave-to {
        max-height: 0;
        opacity: 0;
    }
    .collapse-enter-to, .collapse-leave {
        max-height: 1000px;
        opacity: 1;
    }
    .grid > div {
        align-self: start;
    }
</style>