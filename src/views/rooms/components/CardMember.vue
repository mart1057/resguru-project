<template>
  <div>
    <!-- Tenant Cards Grid -->
    <div class="grid grid-cols-7 w-full gap-4 mt-4">
      <!-- Tenant Card (Repeated for each tenant) -->
      <div
        v-for="data in user"
        class="h-[212px] w-[11.25rem] border rounded-[12px] flex flex-col justify-between items-center p-[14px] cursor-pointer"
      >
        <!-- Status Badge -->
        <div
          :class="
            $route.query.status == 'Checked In'
              ? 'bg-[#D7F1E3] text-[#39B974]'
              : 'bg-[#F0F8FF] text-[#003765]'
          "
          @click="getDetailRentalContract()"
          class="h-[24px] w-auto mt-[-22px] text-[12px] flex items-center justify-center p-[8px] rounded-[8px]"
        >
          {{
            $route.query.status == "Checked In"
              ? "ทำสัญญาแล้ว"
              : $route.query.status == "Reserved"
              ? "ยังไม่ทำสัญญา"
              : "ห้องว่าง"
          }}
        </div>
        
        <!-- Tenant Profile Image -->
        <img
          v-if="data.imageProfile"
          :src="'https://api.resguru.app' + data.imageProfile?.url"
          @click="getDetailRentalContract()"
          class="w-[78px] h-[78px] rounded-[22px] object-cover"
          alt="Tenant Profile"
        />
        
        <!-- Tenant Name -->
        <div @click="getDetailRentalContract()" class="text-[18px] font-medium text-center">
          {{ data.firstName }} {{ data.lastName }}
        </div>
        
        <!-- Contact Information -->
        <div class="flex w-full" @click="getDetailRentalContract()">
          <div class="grid grid-cols-1 gap-1 w-full">
            <!-- Phone -->
            <div class="grid grid-cols-6 gap-0">
              <div class="col-span-1">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_417_4380" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                    <rect width="16" height="16" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_417_4380)">
                    <path d="M12.9553 13.6283C11.6587 13.6283 10.3748 13.3206 9.10339 12.7052C7.83203 12.0899 6.697 11.2828 5.69829 10.2841C4.69957 9.28539 3.89145 8.15142 3.27394 6.8822C2.65642 5.61297 2.34766 4.33007 2.34766 3.0335C2.34766 2.8335 2.41432 2.66683 2.54766 2.5335C2.68099 2.40016 2.84766 2.3335 3.04766 2.3335H5.22197C5.39463 2.3335 5.54527 2.3867 5.67391 2.49311C5.80253 2.59952 5.88223 2.73692 5.91301 2.9053L6.29506 4.86681C6.32155 5.03091 6.31877 5.18006 6.28672 5.31425C6.25467 5.44844 6.18437 5.56553 6.07582 5.66553L4.54249 7.16425C5.06899 8.05827 5.69677 8.86596 6.42584 9.58733C7.1549 10.3087 7.98011 10.9378 8.90149 11.4745L10.3912 9.95913C10.4998 9.85059 10.6282 9.77345 10.7765 9.72773C10.9248 9.682 11.0767 9.67238 11.2322 9.69888L13.0835 10.0758C13.2519 10.1134 13.3893 10.1948 13.4957 10.32C13.6021 10.4452 13.6553 10.5942 13.6553 10.7668V12.9283C13.6553 13.1283 13.5886 13.295 13.4553 13.4283C13.322 13.5617 13.1553 13.6283 12.9553 13.6283ZM4.06302 6.21811L5.25277 5.07965C5.27414 5.06255 5.28803 5.03904 5.29444 5.00913C5.30085 4.97921 5.29978 4.95143 5.29122 4.9258L5.00149 3.43605C4.99293 3.40186 4.97797 3.37622 4.95661 3.35913C4.93524 3.34203 4.90746 3.33348 4.87327 3.33348H3.44764C3.422 3.33348 3.40062 3.34203 3.38352 3.35913C3.36643 3.37622 3.35789 3.39759 3.35789 3.42323C3.39207 3.87879 3.46664 4.34161 3.58161 4.8117C3.69656 5.28179 3.85703 5.75059 4.06302 6.21811ZM12.5656 12.6078C12.5912 12.6078 12.6126 12.5993 12.6297 12.5822C12.6468 12.5651 12.6553 12.5437 12.6553 12.5181V11.1155C12.6553 11.0813 12.6468 11.0536 12.6297 11.0322C12.6126 11.0108 12.5869 10.9959 12.5527 10.9873L11.1528 10.7027C11.1271 10.6942 11.1047 10.6931 11.0854 10.6995C11.0662 10.7059 11.0459 10.7198 11.0245 10.7412L9.83736 11.9412C10.2792 12.1472 10.7401 12.3046 11.2201 12.4136C11.7 12.5226 12.1485 12.5873 12.5656 12.6078Z" fill="#141629" />
                  </g>
                </svg>
              </div>
              <div class="col-span-5 flex items-center ml-1 text-[12px] truncate">
                {{ data.phone }}
              </div>
            </div>
            
            <!-- Email -->
            <div class="grid grid-cols-6 gap-0">
              <div class="col-span-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32">
                  <path fill="#003765" d="M28.516 7.167H3.482L16 14.275zM16.74 17.303a1.494 1.494 0 0 1-1.48 0L2.5 10.06v14.773h27V10.06z" />
                </svg>
              </div>
              <div class="col-span-5 flex items-center ml-1 text-[12px] truncate">
                {{ data.email ? data.email : " - " }}
              </div>
            </div>
            
            <!-- Line ID -->
            <div class="grid grid-cols-6 gap-0">
              <div class="col-span-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#003765" d="M13.78 9.46a.38.38 0 0 0-.38.38v1.67L12 9.65a.4.4 0 0 0-.33-.19a.38.38 0 0 0-.38.38v2.84a.38.38 0 0 0 .38.38a.38.38 0 0 0 .38-.38V11l1.39 1.91a.27.27 0 0 0 .15.11a.32.32 0 0 0 .14 0A.33.33 0 0 0 14 13l.1-.07a.39.39 0 0 0 .11-.27V9.84a.38.38 0 0 0-.43-.38M9.2 12.27H8.14V9.84a.38.38 0 0 0-.38-.38a.38.38 0 0 0-.38.38v2.84a.38.38 0 0 0 .38.38H9.2a.39.39 0 0 0 .39-.38a.39.39 0 0 0-.39-.41m1.11-2.81a.39.39 0 0 0-.39.38v2.84a.39.39 0 0 0 .39.38a.38.38 0 0 0 .38-.38V9.84a.38.38 0 0 0-.38-.38M17.91 2H6.09A4.1 4.1 0 0 0 2 6.09v11.82A4.1 4.1 0 0 0 6.09 22h11.82A4.1 4.1 0 0 0 22 17.91V6.09A4.1 4.1 0 0 0 17.91 2m.31 12.28a1.55 1.55 0 0 1-.13.17a5.5 5.5 0 0 1-.8.8c-2 1.87-5.36 4.11-5.81 3.76s.64-1.76-.53-2a1 1 0 0 1-.25 0c-3.44-.48-6-2.89-6-5.78c0-3.25 3.29-5.88 7.34-5.88s7.34 2.63 7.34 5.88a5 5 0 0 1-1.16 3.05m-1.71-4.81H15a.38.38 0 0 0-.38.38v2.84a.38.38 0 0 0 .38.38h1.48a.38.38 0 0 0 .38-.38a.38.38 0 0 0-.38-.38h-1.03v-.6h1.06a.39.39 0 0 0 .38-.39a.38.38 0 0 0-.38-.38h-1.06v-.61h1.06a.38.38 0 0 0 .38-.38a.38.38 0 0 0-.38-.48" />
                </svg>
              </div>
              <div class="col-span-5 flex items-center ml-1 text-[12px] truncate">
                {{ data.lineID ? data.lineID : " - " }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Add New Tenant Card -->
      <div
        v-if="user.length == 0"
        class="h-[212px] w-[11.25rem] border rounded-[12px] flex flex-col justify-center items-center p-[14px] cursor-pointer hover:bg-gray-50"
        @click="(is_edit = false), (create = true), clearButton1(), getUsers()"
      >
        <div class="flex flex-col items-center">
          <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="38" cy="38" r="38" fill="#dadfe3" />
            <mask id="mask0_2514_22683" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="7" y="7" width="62" height="62">
              <rect x="7.60156" y="7.6001" width="60.8" height="60.8" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_2514_22683)">
              <path d="M38.0015 55.1003C37.4629 55.1003 37.0117 54.9182 36.648 54.5541C36.2842 54.1899 36.1023 53.7387 36.1023 53.2003V39.9003H22.8023C22.2639 39.9003 21.8127 39.7181 21.4486 39.3538C21.0844 38.9895 20.9023 38.538 20.9023 37.9995C20.9023 37.4609 21.0844 37.0098 21.4486 36.646C21.8127 36.2823 22.2639 36.1004 22.8023 36.1004H36.1023V22.8003C36.1023 22.262 36.2845 21.8107 36.6488 21.4466C37.0131 21.0825 37.4646 20.9004 38.0031 20.9004C38.5417 20.9004 38.9929 21.0825 39.3566 21.4466C39.7203 21.8107 39.9022 22.262 39.9022 22.8003V36.1004H53.2023C53.7406 36.1004 54.1919 36.2825 54.556 36.6468C54.9202 37.0112 55.1022 37.4626 55.1022 38.0012C55.1022 38.5397 54.9202 38.9909 54.556 39.3546C54.1919 39.7184 53.7406 39.9003 53.2023 39.9003H39.9022V53.2003C39.9022 53.7387 39.7201 54.1899 39.3558 54.5541C38.9914 54.9182 38.54 55.1003 38.0015 55.1003Z" fill="#B9CCDC" />
            </g>
          </svg>
          <div class="flex justify-center mt-2 text-gray-700 font-medium">เพิ่มผู้เช่า (จอง)</div>
        </div>
      </div>
    </div>

    <!-- Add/Edit Tenant Modal -->
    <b-modal
      centered
      v-model="create"
      size="xl"
      hide-backdrop
      hide-header-close
      hide-header
      hide-footer
      class="p-0 text-custom"
    >
      <div class="p-4">
        <!-- Modal Header -->
        <div class="flex justify-between items-center mb-6">
          <div class="text-custom flex items-center text-[18px] font-bold">
            {{ is_edit ? room_detail.name + " " + room_detail.last_name : "เพิ่มผู้เช่า" }}
          </div>
          <div @click="create = false" class="cursor-pointer hover:bg-gray-100 p-1 rounded-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_417_4814" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_417_4814)">
                <path d="M12.0005 13.0538L6.92737 18.1269C6.78892 18.2654 6.61489 18.3362 6.40527 18.3394C6.19567 18.3426 6.01844 18.2718 5.87357 18.1269C5.72869 17.982 5.65625 17.8064 5.65625 17.6C5.65625 17.3936 5.72869 17.218 5.87357 17.0731L10.9466 12L5.87357 6.92689C5.73511 6.78844 5.66427 6.6144 5.66107 6.40479C5.65786 6.19519 5.72869 6.01795 5.87357 5.87309C6.01844 5.7282 6.19407 5.65576 6.40047 5.65576C6.60687 5.65576 6.78251 5.7282 6.92737 5.87309L12.0005 10.9462L17.0736 5.87309C17.212 5.73462 17.3861 5.66379 17.5957 5.66059C17.8053 5.65737 17.9825 5.7282 18.1274 5.87309C18.2723 6.01795 18.3447 6.19359 18.3447 6.39999C18.3447 6.60639 18.2723 6.78202 18.1274 6.92689L13.0543 12L18.1274 17.0731C18.2658 17.2115 18.3367 17.3856 18.3399 17.5952C18.3431 17.8048 18.2723 17.982 18.1274 18.1269C17.9825 18.2718 17.8069 18.3442 17.6005 18.3442C17.3941 18.3442 17.2184 18.2718 17.0736 18.1269L12.0005 13.0538Z" fill="#5C6B79" />
              </g>
            </svg>
          </div>
        </div>

        <!-- Tenant Information Section -->
        <div class="mb-6">
          <div class="font-bold text-[16px] mb-4 text-custom">ข้อมูลผู้เช่า</div>
          
          <!-- Main Information -->
          <div class="mb-4">
            <div class="flex mb-4">
              <div class="w-[30%] text-custom">ข้อมูลหลัก</div>
              <div class="w-[70%]">
                <!-- User Type Selection (New or Existing) -->
                <div class="grid grid-cols-2 text-custom" v-if="is_edit == false">
                  <div class="flex space-x-4">
                    <vs-radio
                      v-model="room_detail.check_user"
                      color="#003765"
                      :val="true"
                      @input="clearButton1()"
                    >
                      ผู้เช่าในระบบ
                    </vs-radio>
                    <vs-radio
                      v-model="room_detail.check_user"
                      color="#003765"
                      :val="false"
                      @input="clearButton2()"
                    >
                      ผู้เช่าใหม่
                    </vs-radio>
                  </div>
                </div>
                
                <!-- Existing User Search -->
                <div
                  class="grid grid-cols-4 text-custom mt-4 gap-4"
                  v-if="room_detail.check_user == true && is_edit == false"
                >
                  <div class="col-span-2">
                    <div class="mb-1">
                      <span class="text-red-500 mr-1">*</span>ค้นหาผู้เช่าด้วยรหัสบัตรประชาชน/หนังสือเดินทาง
                    </div>
                    <div class="flex space-x-2">
                      <input
                        type="input"
                        class="h-[36px] flex-1 rounded-[12px] bg-[#dadfe3] px-3"
                        v-model="id_card"
                      />
                      <vs-button primary @click="getUserDetail(id_card)">ค้นหา</vs-button>
                    </div>
                  </div>
                  <div class="col-span-2">
                    <div class="mb-1"><span class="text-red-500 mr-1">*</span>อีเมลล์</div>
                    <input
                      type="input"
                      v-model="room_detail.email"
                      class="h-[36px] w-full rounded-[12px] bg-[#dadfe3] px-3"
                      :disabled="is_edit == true"
                    />
                  </div>
                </div>
                
                <!-- New User Information -->
                <div v-else>
                  <div class="grid grid-cols-2 text-custom mt-4 gap-4">
                    <div class="col-span-1">
                      <div class="mb-1">
                        <span class="text-red-500 mr-1">*</span>อีเมลล์
                      </div>
                      <input
                        type="input"
                        v-model="room_detail.email"
                        class="h-[36px] w-full rounded-[12px] bg-[#dadfe3] px-3"
                        :disabled="is_edit == true"
                      />
                    </div>
                    <div class="col-span-1">
                      <div class="mb-1">
                        <span class="text-red-500 mr-1">*</span>(ในกรณีผู้เช่าไม่มีอีเมลล์ กดเพื่อสร้างอีเมลล์ชัวคราว)
                      </div>
                      <button
                        @click="autoGenMail()"
                        class="h-[36px] w-full bg-[#003765] text-white rounded-[12px] text-[14px] hover:bg-[#004d8c]"
                      >
                        สร้างอีเมลล์ชั่วคราว
                      </button>
                    </div>
                  </div>
                  
                  <!-- Gender Selection -->
                  <div class="mt-4">
                    <div class="font-medium mb-2">
                      <span class="text-red-500 mr-1">*</span>เพศ
                    </div>
                    <div class="flex space-x-4">
                      <div
                        @click="room_detail.sex = true"
                        class="h-[41px] w-[78px] rounded-[12px] border flex items-center justify-center space-x-2 cursor-pointer transition-colors"
                        :class="
                          room_detail.sex
                            ? 'bg-[#008EF4] text-white'
                            : 'bg-white text-[#008EF4]'
                        "
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <mask id="mask0_902_17193" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_902_17193)">
                            <path d="M9.50085 19.75C8.03745 19.75 6.79646 19.241 5.77788 18.223C4.75929 17.2049 4.25 15.9642 4.25 14.5009C4.25 13.0375 4.75908 11.7965 5.77725 10.7779C6.79543 9.75929 8.03634 9.25 9.49998 9.25C10.0628 9.25 10.6093 9.34198 11.1394 9.52595C11.6695 9.70993 12.166 9.96859 12.6288 10.3019L17.1808 5.74995H15C14.7875 5.74995 14.6094 5.67805 14.4656 5.53425C14.3219 5.39043 14.25 5.21223 14.25 4.99965C14.25 4.78705 14.3219 4.60896 14.4656 4.46538C14.6094 4.32179 14.7875 4.25 15 4.25H18.8461C19.1022 4.25 19.3169 4.33662 19.4901 4.50985C19.6633 4.68308 19.75 4.89774 19.75 5.15383V8.99998C19.75 9.21248 19.6781 9.3906 19.5343 9.53435C19.3904 9.67808 19.2122 9.74995 18.9997 9.74995C18.7871 9.74995 18.609 9.67808 18.4654 9.53435C18.3218 9.3906 18.25 9.21248 18.25 8.99998V6.82878L13.698 11.3461C14.0211 11.8192 14.2772 12.3203 14.4663 12.8495C14.6554 13.3787 14.75 13.9288 14.75 14.5C14.75 15.9636 14.241 17.2045 13.223 18.2227C12.2049 19.2409 10.9642 19.75 9.50085 19.75ZM9.49843 10.75C8.46228 10.75 7.57849 11.1162 6.84708 11.8486C6.11566 12.5811 5.74995 13.4654 5.74995 14.5015C5.74995 15.5377 6.11618 16.4215 6.84863 17.1529C7.58108 17.8843 8.46538 18.25 9.50153 18.25C10.5377 18.25 11.4215 17.8838 12.1529 17.1513C12.8843 16.4189 13.25 15.5346 13.25 14.4984C13.25 13.4623 12.8838 12.5785 12.1513 11.8471C11.4189 11.1157 10.5346 10.75 9.49843 10.75Z" :fill="room_detail.sex ? 'white' : '#008EF4'" />
                          </g>
                        </svg>
                        <span>ชาย</span>
                      </div>
                      <div
                        @click="room_detail.sex = false"
                        class="h-[41px] w-[78px] rounded-[12px] border flex items-center justify-center space-x-2 cursor-pointer transition-colors"
                        :class="
                          room_detail.sex == false
                            ? 'bg-[#CC00FF] text-white'
                            : 'bg-white text-[#CC00FF]'
                        "
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <mask id="mask0_902_17246" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_902_17246)">
                            path d="M11.25 14.6884C9.95257 14.5 8.87821 13.9125 8.02692 12.9259C7.17564 11.9394 6.75 10.7872 6.75 9.4692C6.75 8.01677 7.26186 6.78379 8.28558 5.77028C9.30928 4.75676 10.5474 4.25 12 4.25C13.4525 4.25 14.6907 4.75676 15.7144 5.77028C16.7381 6.78379 17.25 8.01677 17.25 9.4692C17.25 10.7872 16.8243 11.9394 15.973 12.9259C15.1217 13.9125 14.0474 14.5 12.7499 14.6884V17.25H14C14.2125 17.25 14.3906 17.3219 14.5343 17.4657C14.6781 17.6095 14.75 17.7877 14.75 18.0003C14.75 18.2129 14.6781 18.391 14.5343 18.5346C14.3906 18.6782 14.2125 18.75 14 18.75H12.7499V20C12.7499 20.2125 12.678 20.3906 12.5342 20.5343C12.3904 20.6781 12.2122 20.75 11.9997 20.75C11.7871 20.75 11.609 20.6781 11.4654 20.5343C11.3218 20.3906 11.25 20.2125 11.25 20V18.75H9.99997C9.78747 18.75 9.60936 18.6781 9.46563 18.5343C9.32188 18.3904 9.25 18.2122 9.25 17.9997C9.25 17.7871 9.32188 17.609 9.46563 17.4654C9.60936 17.3218 9.78747 17.25 9.99997 17.25H11.25V14.6884ZM12.0015 13.25C13.0377 13.25 13.9215 12.8838 14.6529 12.1513C15.3843 11.4189 15.75 10.5346 15.75 9.49843C15.75 8.46228 15.3838 7.57849 14.6513 6.84708C13.9189 6.11566 13.0346 5.74995 11.9984 5.74995C10.9623 5.74995 10.0785 6.11618 9.34707 6.84863C8.61566 7.58108 8.24995 8.46538 8.24995 9.50153C8.24995 10.5377 8.61618 11.4215 9.34863 12.1529C10.0811 12.8843 10.9654 13.25 12.0015 13.25Z" :fill="room_detail.sex == false ? 'white' : '#CC00FF'" />
                          </g>
                        </svg>
                        <span>หญิง</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Personal Information Section -->
            <div class="grid grid-cols-6 gap-4 mt-4">
              <div class="col-span-2">
                <div class="mb-1"><span class="text-red-500 mr-1">*</span>ชื่อ</div>
                <input
                  type="text"
                  class="h-[36px] w-full rounded-[12px] bg-[#dadfe3] px-3"
                  v-model="room_detail.name"
                  :disabled="is_edit"
                />
              </div>
              <div class="col-span-2">
                <div class="mb-1"><span class="text-red-500 mr-1">*</span>สกุล</div>
                <input
                  type="text"
                  class="h-[36px] w-full rounded-[12px] bg-[#dadfe3] px-3"
                  v-model="room_detail.last_name"
                  :disabled="is_edit"
                />
              </div>
              <div class="col-span-2">
                <div class="mb-1">ชื่อเล่น</div>
                <input
                  type="text"
                  class="h-[36px] w-full rounded-[12px] bg-[#dadfe3] px-3"
                  v-model="room_detail.nick_name"
                  :disabled="is_edit"
                />
              </div>
            </div>

            <!-- Contact Information Section -->
            <div class="grid grid-cols-6 gap-4 mt-4">
              <div class="col-span-2">
                <div class="mb-1"><span class="text-red-500 mr-1">*</span>เบอร์โทรศัพท์</div>
                <input
                  type="text"
                  class="h-[36px] w-full rounded-[12px] bg-[#dadfe3] px-3"
                  v-model="room_detail.phone"
                  :disabled="is_edit"
                />
              </div>
              <div class="col-span-2">
                <div class="mb-1">
                  <span class="text-red-500 mr-1">*</span>หมายเลขบัตรประชาชน/หนังสือเดินทาง
                </div>
                <input
                  type="text"
                  class="h-[36px] w-full rounded-[12px] bg-[#dadfe3] px-3"
                  v-model="room_detail.id_card"
                  :disabled="is_edit"
                />
              </div>
              <div class="col-span-2">
                <div class="mb-1">วัน/เดือน/ปีเกิด (ค.ศ.)</div>
                <input
                  type="date"
                  class="h-[36px] w-full rounded-[12px] bg-[#dadfe3] px-3"
                  v-model="room_detail.birth"
                  :disabled="is_edit"
                />
              </div>
            </div>

            <!-- Address & ID Card Section -->
            <div class="grid grid-cols-6 gap-4 mt-4">
              <div class="col-span-4">
                <div class="mb-1"><span class="text-red-500 mr-1">*</span>ที่อยู่</div>
                <input
                  type="text"
                  class="h-[36px] w-full rounded-[12px] bg-[#dadfe3] px-3"
                  v-model="room_detail.address"
                  :disabled="is_edit"
                />
              </div>
              <div class="col-span-2">
                <div class="mb-1">
                  <span class="text-red-500 mr-1">*</span>แนบรูปบัตรประชาชน/หนังสือเดินทาง
                </div>
                <div class="flex items-center" v-if="room_detail.image_card_name == ''">
                  <input
                    class="hidden"
                    id="upload"
                    @change="previewImage"
                    type="file"
                    accept="image/*"
                  />
                  <label for="upload" class="flex-shrink-0">
                    <div class="bg-[#165D98] text-white text-[14px] py-1 px-3 rounded-[12px] cursor-pointer">
                      อัพโหลดรูปภาพ
                    </div>
                  </label>
                  <div class="text-[#5C6B79] text-[12px] ml-2">
                    ยังไม่ได้เลือกไฟล์
                  </div>
                </div>
                <div v-else class="flex items-center">
                  <div
                    @click="previewImg(room_detail.image_card)"
                    class="text-[#165D98] text-[14px] cursor-pointer underline"
                  >
                    {{ room_detail.image_card_name }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Additional Information Section -->
            <div class="mt-6">
              <div class="font-bold text-custom mb-3">ข้อมูลเพิ่มเติม</div>
              
              <div class="grid grid-cols-6 gap-4 mt-2">
                <div class="col-span-2">
                  <div class="mb-1">Line ID</div>
                  <input
                    type="text"
                    class="h-[36px] w-full rounded-[12px] bg-[#dadfe3] px-3"
                    v-model="room_detail.lineID"
                    :disabled="is_edit"
                  />
                </div>
              </div>
              
              <div class="grid grid-cols-6 gap-4 mt-4">
                <div class="col-span-2">
                  <div class="mb-1">บุคคลที่สามารถติดต่อได้กรณีฉุกเฉิน</div>
                  <input
                    type="text"
                    class="h-[36px] w-full rounded-[12px] bg-[#dadfe3] px-3"
                    v-model="room_detail.emergencyPerson"
                    :disabled="is_edit"
                  />
                </div>
                <div class="col-span-2">
                  <div class="mb-1">ความสัมพันธ์</div>
                  <input
                    type="text"
                    class="h-[36px] w-full rounded-[12px] bg-[#dadfe3] px-3"
                    v-model="room_detail.relation"
                    :disabled="is_edit"
                  />
                </div>
                <div class="col-span-2">
                  <div class="mb-1">เบอร์โทรศัพท์ผู้ติดต่อฉุกเฉิน</div>
                  <input
                    type="text"
                    class="h-[36px] w-full rounded-[12px] bg-[#dadfe3] px-3"
                    v-model="room_detail.emergencyPhone"
                    :disabled="is_edit"
                  />
                </div>
              </div>
            </div>

            <!-- Vehicle Information Section -->
            <div class="mt-6">
              <div class="font-bold text-custom mb-3">ข้อมูลยานพหนะ</div>
              
              <!-- Existing Vehicles -->
              <div v-if="room_detail.vehicles.length > 0">
                <div 
                  v-for="(data, i) in room_detail.vehicles" 
                  :key="i"
                  class="grid grid-cols-6 gap-4 mb-4"
                >
                  <div class="col-span-2">
                    <div class="flex items-center mb-1">
                      <span class="mr-1">คันที่ {{ i + 1 }}</span>
                      <button 
                        class="ml-2 text-gray-500 hover:text-gray-700" 
                        @click="removeVehicles(i, data.id)"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.0005 13.0538L6.92737 18.1269C6.78892 18.2654 6.61489 18.3362 6.40527 18.3394C6.19567 18.3426 6.01844 18.2718 5.87357 18.1269C5.72869 17.982 5.65625 17.8064 5.65625 17.6C5.65625 17.3936 5.72869 17.218 5.87357 17.0731L10.9466 12L5.87357 6.92689C5.73511 6.78844 5.66427 6.6144 5.66107 6.40479C5.65786 6.19519 5.72869 6.01795 5.87357 5.87309C6.01844 5.7282 6.19407 5.65576 6.40047 5.65576C6.60687 5.65576 6.78251 5.7282 6.92737 5.87309L12.0005 10.9462L17.0736 5.87309C17.212 5.73462 17.3861 5.66379 17.5957 5.66059C17.8053 5.65737 17.9825 5.7282 18.1274 5.87309C18.2723 6.01795 18.3447 6.19359 18.3447 6.39999C18.3447 6.60639 18.2723 6.78202 18.1274 6.92689L13.0543 12L18.1274 17.0731C18.2658 17.2115 18.3367 17.3856 18.3399 17.5952C18.3431 17.8048 18.2723 17.982 18.1274 18.1269C17.9825 18.2718 17.8069 18.3442 17.6005 18.3442C17.3941 18.3442 17.2184 18.2718 17.0736 18.1269L12.0005 13.0538Z" fill="#5C6B79" />
                        </svg>
                      </button>
                    </div>
                    <select
                      class="h-[36px] w-full rounded-[12px] bg-[#dadfe3] px-3"
                      v-model="data.Type"
                    >
                      <option value="" disabled>เลือกประเภท</option>
                      <option value="Car">รถยนต์</option>
                      <option value="Motocycle">มอเตอร์ไซต์</option>
                    </select>
                  </div>
                  <div class="col-span-2">
                    <div class="mb-1 opacity-0">.</div>
                    <input
                      type="text"
                      placeholder="ทะเบียนรถ"
                      class="h-[36px] w-full rounded-[12px] bg-[#dadfe3] px-3"
                      v-model="data.licensePlate"
                    />
                  </div>
                  <div class="col-span-2">
                    <div class="mb-1 opacity-0">.</div>
                    <input
                      type="text"
                      placeholder="รายละเอียดรถ"
                      class="h-[36px] w-full rounded-[12px] bg-[#dadfe3] px-3"
                      v-model="data.remark"
                    />
                  </div>
                </div>
              </div>
              
              <!-- Add Vehicle Button -->
              <div v-if="room_detail.vehicles.length < 2" class="mt-4">
                <button
                  @click="addVehicles()"
                  class="bg-[#003765] text-white py-2 px-4 rounded-[12px] hover:bg-[#00284d] transition-colors"
                >
                  เพิ่มยานพาหนะ
                </button>
              </div>
            </div>

            <!-- Modal Footer -->
            <div class="flex justify-end mt-8 space-x-4">
              <vs-button dark shadow @click="cancleButton()">
                <span class="px-2">ยกเลิก</span>
              </vs-button>
              <vs-button color="#003765" @click="createOrEdit()">
                <span class="px-2">บันทึก</span>
              </vs-button>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
    
    <!-- Move Room Modal -->
    <b-modal
      centered
      v-model="move_room"
      size="xl"
      hide-backdrop
      hide-header-close
      hide-header
      hide-footer
      class="p-0 text-custom"
    >
      <div class="p-4">
        <div class="flex justify-between items-center mb-6">
          <div class="text-[18px] font-medium">
            <span>ย้ายผู้เช่า</span>
            <span class="font-bold ml-1">{{ name_user }}</span>
            <span class="ml-1">ห้อง</span>
            <span class="font-bold ml-1">{{ $route.query.number_room }}</span>
          </div>
          <div @click="move_room = false" class="cursor-pointer hover:bg-gray-100 p-1 rounded-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0005 13.0538L6.92737 18.1269C6.78892 18.2654 6.61489 18.3362 6.40527 18.3394C6.19567 18.3426 6.01844 18.2718 5.87357 18.1269C5.72869 17.982 5.65625 17.8064 5.65625 17.6C5.65625 17.3936 5.72869 17.218 5.87357 17.0731L10.9466 12L5.87357 6.92689C5.73511 6.78844 5.66427 6.6144 5.66107 6.40479C5.65786 6.19519 5.72869 6.01795 5.87357 5.87309C6.01844 5.7282 6.19407 5.65576 6.40047 5.65576C6.60687 5.65576 6.78251 5.7282 6.92737 5.87309L12.0005 10.9462L17.0736 5.87309C17.212 5.73462 17.3861 5.66379 17.5957 5.66059C17.8053 5.65737 17.9825 5.7282 18.1274 5.87309C18.2723 6.01795 18.3447 6.19359 18.3447 6.39999C18.3447 6.60639 18.2723 6.78202 18.1274 6.92689L13.0543 12L18.1274 17.0731C18.2658 17.2115 18.3367 17.3856 18.3399 17.5952C18.3431 17.8048 18.2723 17.982 18.1274 18.1269C17.9825 18.2718 17.8069 18.3442 17.6005 18.3442C17.3941 18.3442 17.2184 18.2718 17.0736 18.1269L12.0005 13.0538Z" fill="#5C6B79" />
            </svg>
          </div>
        </div>

        <div class="mt-4">
          <div class="text-[#5C6B79] text-[16px] mb-4">เลือกห้องที่ต้องการย้าย</div>
          
          <div v-for="data in roomFloor" class="mb-6">
            <div v-for="floor in data" class="mb-6">
              <div class="text-[#141629] font-bold mb-3">ชั้น {{ floor.floorName }}</div>
              
              <div class="grid grid-cols-8 gap-3">
                <div v-for="room in floor.attributes" class="mb-2">
                  <div
                    class="h-[32px] rounded-[12px] flex items-center justify-between px-3"
                    @click="
                      room.status ? '' : (room_move.id_room = room.id),
                      (room_move.Number = room.RoomNumber),
                      (confirm = true),
                      (tab = '')
                    "
                    :class="
                      room.status
                        ? 'bg-[#E8F0F8] text-[#B9CCDC]'
                        : 'bg-[#DEEAF5] text-[#003765] cursor-pointer hover:bg-[#C4DCF2]'
                    "
                  >
                    <div>{{ room.RoomNumber }}</div>
                    <div class="text-sm">{{ room.status ? "เต็ม" : "ว่าง" }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
    
    <!-- Confirmation Modal -->
    <b-modal
      centered
      v-model="confirm"
      size="xl"
      hide-backdrop
      hide-header-close
      hide-header
      hide-footer
      class="p-0 text-custom"
    >
      <div class="p-4">
        <div class="flex justify-between items-center mb-6">
          <div class="text-[18px] font-medium">
            <span>ยืนยันย้ายผู้เช่า</span>
            <span class="font-bold ml-1">{{ name_user }}</span>
            <span class="ml-1">จากห้อง</span>
            <span class="font-bold ml-1">{{ $route.query.number_room }}</span>
            <span class="ml-1">ไปห้อง</span>
            <span class="font-bold ml-1">{{ room_move.Number }}</span>
          </div>
          <div @click="confirm = false" class="cursor-pointer hover:bg-gray-100 p-1 rounded-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0005 13.0538L6.92737 18.1269C6.78892 18.2654 6.61489 18.3362 6.40527 18.3394C6.19567 18.3426 6.01844 18.2718 5.87357 18.1269C5.72869 17.982 5.65625 17.8064 5.65625 17.6C5.65625 17.3936 5.72869 17.218 5.87357 17.0731L10.9466 12L5.87357 6.92689C5.73511 6.78844 5.66427 6.6144 5.66107 6.40479C5.65786 6.19519 5.72869 6.01795 5.87357 5.87309C6.01844 5.7282 6.19407 5.65576 6.40047 5.65576C6.60687 5.65576 6.78251 5.7282 6.92737 5.87309L12.0005 10.9462L17.0736 5.87309C17.212 5.73462 17.3861 5.66379 17.5957 5.66059C17.8053 5.65737 17.9825 5.7282 18.1274 5.87309C18.2723 6.01795 18.3447 6.19359 18.3447 6.39999C18.3447 6.60639 18.2723 6.78202 18.1274 6.92689L13.0543 12L18.1274 17.0731C18.2658 17.2115 18.3367 17.3856 18.3399 17.5952C18.3431 17.8048 18.2723 17.982 18.1274 18.1269C17.9825 18.2718 17.8069 18.3442 17.6005 18.3442C17.3941 18.3442 17.2184 18.2718 17.0736 18.1269L12.0005 13.0538Z" fill="#5C6B79" />
            </svg>
          </div>
        </div>

        <div class="mb-4">
          <div class="flex cursor-pointer text-[#8396A6] mb-4" @click="(confirm = false), (move_room = true)">
            <svg class="mr-2" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.338101 5.99962C0.338101 5.88552 0.357334 5.77495 0.3958 5.6679C0.434267 5.56085 0.500293 5.46053 0.593876 5.36695L5.10348 0.857324C5.24834 0.712458 5.42142 0.642591 5.6227 0.647724C5.82398 0.652841 5.99706 0.727841 6.14193 0.872724C6.28679 1.01759 6.35923 1.19322 6.35923 1.39962C6.35923 1.60602 6.28679 1.78166 6.14193 1.92652L2.06883 5.99962L6.1573 10.0881C6.30217 10.233 6.37204 10.406 6.36693 10.6073C6.36179 10.8086 6.28679 10.9817 6.14193 11.1265C5.99706 11.2714 5.82142 11.3438 5.615 11.3438C5.4086 11.3438 5.23297 11.2714 5.0881 11.1265L0.593876 6.6323C0.500293 6.53872 0.434267 6.44 0.3958 6.33615C0.357334 6.23232 0.338101 6.12014 0.338101 5.99962Z" fill="#8396A6" />
            </svg>
            <span>ย้อนกลับ</span>
          </div>
          
          <div class="text-[#8396A6] text-[16px] mb-6">คุณต้องการทำสัญญาหรือไม่ ?</div>
          
          <div class="grid grid-cols-2 gap-6 mb-8">
            <!-- Option 1: New Contract -->
            <div
              @click="tab = 1"
              class="cursor-pointer"
            >
              <div
                class="w-full h-[250px] rounded-[12px] flex flex-col justify-between items-center p-[24px] transition-colors"
                :class="
                  tab == 1
                    ? 'bg-[#003765] text-white'
                    : 'bg-[#dadfe3] text-[#003765]'
                "
              >
                <div class="text-[16px] font-bold">ย้ายห้องพร้อมสร้างสัญญาใหม่</div>
                
                <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_3528_18769" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="65" height="65">
                    <rect width="65" height="65" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_3528_18769)">
                    <path d="M51.5898 51.7761L47.2617 56.0626C46.8866 56.4376 46.4222 56.6363 45.8684 56.6589C45.3146 56.6815 44.8276 56.4827 44.4075 56.0626C44.0152 55.6702 43.819 55.1945 43.819 54.6355C43.819 54.0765 44.0152 53.6008 44.4075 53.2085L48.694 48.8803L44.4075 44.5522C44.0325 44.1772 43.8337 43.7128 43.8112 43.1589C43.7886 42.6051 43.9874 42.1182 44.4075 41.6981C44.7999 41.3057 45.2756 41.1096 45.8346 41.1096C46.3936 41.1096 46.8693 41.3057 47.2617 41.6981L51.5898 45.9846L55.918 41.6981C56.2929 41.3231 56.7573 41.1243 57.3111 41.1017C57.8649 41.0791 58.3519 41.2779 58.7721 41.6981C59.1644 42.0904 59.3606 42.5661 59.3606 43.1251C59.3606 43.6841 59.1644 44.1598 58.7721 44.5522L54.4855 48.8803L58.7721 53.2085C59.147 53.5835 59.3458 54.0478 59.3684 54.6017C59.3909 55.1555 59.1922 55.6424 58.7721 56.0626C58.3797 56.4549 57.904 56.6511 57.345 56.6511C56.786 56.6511 56.3103 56.4549 55.918 56.0626L51.5898 51.7761ZM16.2512 58.2292C14.3589 58.2292 12.7574 57.5738 11.4466 56.2631C10.1358 54.9523 9.48047 53.3507 9.48047 51.4584V48.5418C9.48047 47.1911 9.95878 46.0374 10.9154 45.0808C11.872 44.1243 13.0256 43.646 14.3763 43.646H17.6055V11.6669C17.6055 10.3162 18.0838 9.16252 19.0404 8.20594C19.997 7.24931 21.1506 6.771 22.5013 6.771H50.6261C51.9768 6.771 53.1305 7.24931 54.0871 8.20594C55.0437 9.16252 55.522 10.3162 55.522 11.6669V33.4115C54.8727 33.1997 54.2095 33.0452 53.5325 32.9481C52.8554 32.8508 52.1644 32.8022 51.4596 32.8022V11.6669C51.4596 11.4238 51.3814 11.2241 51.2252 11.0678C51.0689 10.9116 50.8692 10.8334 50.6261 10.8334H22.5013C22.2582 10.8334 22.0586 10.9116 21.9023 11.0678C21.746 11.2241 21.6679 11.4238 21.6679 11.6669V43.646H36.3919C36.1627 44.2952 35.9822 44.9541 35.8502 45.6224C35.7183 46.2909 35.635 46.9862 35.6002 47.7083H14.3763C14.1332 47.7083 13.9336 47.7865 13.7773 47.9427C13.621 48.099 13.5429 48.2987 13.5429 48.5418V51.4584C13.5429 52.2258 13.8024 52.869 14.3215 53.3881C14.8406 53.9072 15.4839 54.1668 16.2512 54.1668H36.3919C36.6488 54.9445 36.9743 55.6676 37.3684 56.336C37.7625 57.0044 38.2078 57.6354 38.7043 58.2292H16.2512ZM36.3919 54.1668H13.5429H35.6002H35.5429H36.3919ZM26.9283 23.5417C26.3519 23.5417 25.8693 23.3472 25.4804 22.9584C25.0916 22.5695 24.8971 22.0869 24.8971 21.5105C24.8971 20.9341 25.0916 20.4515 25.4804 20.0626C25.8693 19.6737 26.3519 19.4793 26.9283 19.4793H46.1992C46.7756 19.4793 47.2582 19.6737 47.647 20.0626C48.0359 20.4515 48.2304 20.9341 48.2304 21.5105C48.2304 22.0869 48.0359 22.5695 47.647 22.9584C47.2582 23.3472 46.7756 23.5417 46.1992 23.5417H26.9283ZM26.9283 31.3542C26.3519 31.3542 25.8693 31.1598 25.4804 30.7709C25.0916 30.382 24.8971 29.8993 24.8971 29.323C24.8971 28.7466 25.0916 28.264 25.4804 27.8751C25.8693 27.4862 26.3519 27.2918 26.9283 27.2918H46.1992C46.7756 27.2918 47.2582 27.4862 47.647 27.8751C48.0359 28.264 48.2304 28.7466 48.2304 29.323C48.2304 29.8993 48.0359 30.382 47.647 30.7709C47.2582 31.1598 46.7756 31.3542 46.1992 31.3542H26.9283Z" :fill="tab == 1 ? 'white' : '#003765'" />
                  </g>
                </svg>
                
                <div class="text-center text-[14px]">
                  การย้ายห้องแบบย้ายสัญญาเช่า ระบบจะทำการ
                  ย้ายผู้เช่าทั้งหมดของห้อง
                  {{ $route.query.number_room }} พร้อมกับสัญญา เช่าห้อง
                  {{ $route.query.number_room }} ไปยังห้อง
                  {{ room_move.Number }} พร้อมทั้งทำการเปลี่ยน สถานะห้อง
                  {{ $route.query.number_room }} เป็นห้องว่าง
                </div>
              </div>
            </div>
            
            <!-- Option 2: Use Same Contract -->
            <div
              @click="tab = 2"
              class="cursor-pointer"
            >
              <div
                class="w-full h-[250px] rounded-[12px] flex flex-col justify-between items-center p-[24px] transition-colors"
                :class="
                  tab == 2
                    ? 'bg-[#003765] text-white'
                    : 'bg-[#dadfe3] text-[#003765]'
                "
              >
                <div class="text-[16px] font-bold">ย้ายห้องพร้อมใช้สัญญาเดิม</div>
                
                <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_3596_18066" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="65" height="65">
                    <rect width="65" height="65" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_3596_18066)">
                    <path d="M16.2512 58.2292C14.3589 58.2292 12.7574 57.5738 11.4466 56.2631C10.1358 54.9523 9.48047 53.3507 9.48047 51.4584V48.5418C9.48047 47.1954 9.95987 46.0429 10.9187 45.0841C11.8774 44.1253 13.03 43.646 14.3763 43.646H17.6055V11.6669C17.6055 10.3205 18.0849 9.16794 19.0437 8.20919C20.0024 7.2504 21.155 6.771 22.5013 6.771H50.6261C51.9725 6.771 53.1251 7.2504 54.0838 8.20919C55.0426 9.16794 55.522 10.3205 55.522 11.6669V51.4584C55.522 53.3507 54.8666 54.9523 53.5559 56.2631C52.2451 57.5738 50.6436 58.2292 48.7512 58.2292H16.2512ZM48.7512 54.1668C49.5186 54.1668 50.1618 53.9072 50.6809 53.3881C51.2 52.869 51.4596 52.2258 51.4596 51.4584V11.6669C51.4596 11.4238 51.3814 11.2241 51.2252 11.0678C51.0689 10.9116 50.8692 10.8334 50.6261 10.8334H22.5013C22.2583 10.8334 22.0586 10.9116 21.9023 11.0678C21.746 11.2241 21.6679 11.4238 21.6679 11.6669V43.646H41.1471C42.4935 43.646 43.646 44.1253 44.6048 45.0841C45.5635 46.0429 46.0429 47.1954 46.0429 48.5418V51.4584C46.0429 52.2258 46.3025 52.869 46.8215 53.3881C47.3406 53.9072 47.9839 54.1668 48.7512 54.1668ZM26.9283 23.5417C26.3528 23.5417 25.8704 23.3469 25.4811 22.9575C25.0918 22.568 24.8971 22.0854 24.8971 21.5096C24.8971 20.9338 25.0918 20.4515 25.4811 20.0626C25.8704 19.6737 26.3528 19.4793 26.9283 19.4793H46.1992C46.7747 19.4793 47.2571 19.6741 47.6464 20.0636C48.0357 20.453 48.2304 20.9357 48.2304 21.5114C48.2304 22.0872 48.0357 22.5695 47.6464 22.9584C47.2571 23.3472 46.7747 23.5417 46.1992 23.5417H26.9283ZM26.9283 31.3542C26.3528 31.3542 25.8704 31.1595 25.4811 30.7699C25.0918 30.3804 24.8971 29.8978 24.8971 29.3221C24.8971 28.7463 25.0918 28.264 25.4811 27.8751C25.8704 27.4862 26.3528 27.2918 26.9283 27.2918H46.1992C46.7747 27.2918 47.2571 27.4865 47.6464 27.876C48.0357 28.2655 48.2304 28.7481 48.2304 29.3239C48.2304 29.8996 48.0357 30.382 47.6464 30.7709C47.2571 31.1598 46.7747 31.3542 46.1992 31.3542H26.9283ZM16.2512 54.1668H41.9805V48.5418C41.9805 48.2987 41.9024 48.099 41.7461 47.9427C41.5899 47.7865 41.3902 47.7083 41.1471 47.7083H14.3763C14.1333 47.7083 13.9336 47.7865 13.7773 47.9427C13.621 48.099 13.5429 48.2987 13.5429 48.5418V51.4584C13.5429 52.2258 13.8024 52.869 14.3215 53.3881C14.8406 53.9072 15.4839 54.1668 16.2512 54.1668ZM16.2512 54.1668H13.5429H41.9805H16.2512Z" :fill="tab == 2 ? 'white' : '#003765'" />
                  </g>
                </svg>
                
                <div class="text-center text-[14px]">
                  การย้ายห้องแบบไม่ย้ายสัญญาเช่า ระบบจะทำการย้ายผู้เช่า
                  (คนที่เลือก) โดยจะไม่ย้าย สัญญาเช่าของห้อง
                  {{ $route.query.number_room }} ไปยังห้อง
                  {{ room_move.Number }}
                </div>
              </div>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="flex justify-end space-x-4">
            <vs-button dark shadow @click="confirm = false">
              <span class="px-2">ยกเลิก</span>
            </vs-button>
            <vs-button
              color="#003765"
              @click="moveRoom()"
              :disabled="tab == 0"
            >
              <span class="px-2">บันทึก</span>
            </vs-button>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UilLine",
  props: {
    id_user: { type: String },
    id_room: { type: String },
    id_contract: { type: String },
    status: { type: String },
  },
  data() {
    return {
      tab: 0,
      create: false,
      move_room: false,
      confirm: false,
      user: [],
      users: [],
      name_user: "",
      is_edit: true,
      room_move: {
        id_room: "",
        Number: "",
      },
      id_card: "",
      room_detail: {
        id: "",
        sex: true,
        check_user: true,
        email: "",
        name: "",
        last_name: "",
        nick_name: "",
        phone: "",
        image_card: "",
        image_card_name: "",
        id_card: "",
        birth: "",
        address: "",
        date_sign: "",
        exp_date: "",
        roomInsurance_deposit: "",
        contract_duration: "",
        room_deposit: "",
        type_room: "",
        emergencyPerson: "",
        relation: "",
        emergencyPhone: "",
        lineID: "",
        vehicles: [],
      },
      roomFloor: [],
      img_arr_card: [],
    };
  },
  created() {
    const loading = this.$vs.loading({});
    setTimeout(() => {
      loading.close();
    }, 1000);
  },
  mounted() {
    this.getUser();
    this.getFloorRoom();
  },
  methods: {
    cancleButton() {
      this.id_card = "";
      this.id_user = "";
      this.room_detail.id = "";
      this.room_detail.name = "";
      this.room_detail.sex = true;
      this.room_detail.last_name = "";
      this.room_detail.nick_name = "";
      this.room_detail.phone = "";
      this.room_detail.email = "";
      this.room_detail.id_card = "";
      this.room_detail.address = "";
      this.room_detail.birth = "";
      this.room_detail.date_sign = "";
      this.room_detail.emergencyPerson = "";
      this.room_detail.relation = "";
      this.room_detail.emergencyPhone = "";
      this.room_detail.lineID = "";
      this.room_detail.vehicles = [];
      this.create = false;
    },
    clearButton1() {
      this.id_card = "";
      this.id_user = "";
      this.room_detail.id = "";
      this.room_detail.name = "";
      this.room_detail.sex = true;
      this.room_detail.last_name = "";
      this.room_detail.nick_name = "";
      this.room_detail.phone = "";
      this.room_detail.email = "";
      this.room_detail.id_card = "";
      this.room_detail.address = "";
      this.room_detail.birth = "";
      this.room_detail.date_sign = "";
      this.room_detail.emergencyPerson = "";
      this.room_detail.relation = "";
      this.room_detail.emergencyPhone = "";
      this.room_detail.lineID = "";
      this.room_detail.image_card_name = "";
      this.room_detail.vehicles = [];
      this.room_detail.check_user = true;
    },
    clearButton2() {
      this.id_card = "";
      this.id_user = "";
      this.room_detail.id = "";
      this.room_detail.name = "";
      this.room_detail.sex = true;
      this.room_detail.last_name = "";
      this.room_detail.nick_name = "";
      this.room_detail.phone = "";
      this.room_detail.email = "";
      this.room_detail.id_card = "";
      this.room_detail.address = "";
      this.room_detail.birth = "";
      this.room_detail.date_sign = "";
      this.room_detail.emergencyPerson = "";
      this.room_detail.relation = "";
      this.room_detail.emergencyPhone = "";
      this.room_detail.lineID = "";
      this.room_detail.image_card_name = "";
      this.room_detail.vehicles = [];
      this.room_detail.check_user = false;
    },
    previewImage(event) {
      const file = event.target.files[0];
      this.room_detail.image_card_name = event.target.files[0].name;
      this.img_arr_card = event.target.files[0];
      if (file) {
        // Read the file as a URL
        const reader = new FileReader();
        reader.onload = (e) => {
          this.room_detail.image_card = e.target.result; // Set the image URL for preview
        };
        reader.readAsDataURL(file);
      }
    },
    previewImg(url) {
      window.open(url, "_blank");
    },
    autoGenMail() {
      const ran = Math.floor(100 + Math.random() * 900); // Generates a random 3-digit number
      const matchingBuilding = this.$store.state.buildingInfo
        .find((item) => item.id === this.$store.state.building)
        .attributes.buildingName.replace(/\s+/g, "");
      this.room_detail.email = ran + matchingBuilding + "@resguru.app";
    },
    getFloorRoom() {
      const loading = this.$vs.loading();
      fetch(
        "https://api.resguru.app/api" +
          "/rooms?filters[room_building][id][$eq]=" +
          this.$store.state.building +
          "&populate=deep,3"
      )
        .then((response) => response.json())
        .then((resp) => {
          const transformedData = resp.data.reduce((result, item) => {
            const floorName =
              item?.attributes.building_floor.data?.attributes.floorName;
            const roomId = item.id;
            // Find existing floor entry
            const floorEntry = result.find(
              (entry) => entry.floorName === floorName
            );

            if (floorEntry) {
              // Add room attributes to existing floor entry
              floorEntry.attributes.push({
                RoomNumber: item.attributes.RoomNumber,
                id: roomId,
                status: item.attributes.user_sign_contract?.data ? true : false,
              });
            } else {
              // Create a new floor entry with room attributes
              result.push({
                floorName: floorName,
                attributes: [
                  {
                    RoomNumber: item.attributes.RoomNumber,
                    id: roomId,
                    status: item.attributes.user_sign_contract?.data
                      ? true
                      : false,
                  },
                ],
              });
            }

            return result;
          }, []);
          this.roomFloor = { data: transformedData };
        })
        .finally(() => {
          loading.close();
        });
    },
    getUser() {
      const loading = this.$vs.loading();
      fetch(
        "https://api.resguru.app/api" +
          "/users?filters[id][$eq]=" +
          this.id_user +
          "&populate=*"
      )
        .then((response) => response.json())
        .then((resp) => {
          this.user = resp;
          this.name_user = resp[0]?.firstName + " " + resp[0]?.lastName;
        })
        .finally(() => {
          loading.close();
        });
    },
    getUsers() {
      fetch(
        "https://api.resguru.app/api" +
          "/users?filters[room_building][id][$eq]=" +
          this.$store.state.building
      )
        .then((response) => response.json())
        .then((resp) => {
          this.users = resp;
        });
    },
    deleteContract() {
      axios
        .delete(
          "https://api.resguru.app/api" +
            "/user-sign-contracts/" +
            this.id_contract
        )
        .finally(() => {
          this.$router.push({
            path: "/rooms",
          });
        });
    },
    getUserDetail(id_room) {
      this.img_arr_card = [];
      fetch(
        "https://api.resguru.app/api" +
          "/users/?filters[idCard][$eq]=" +
          this.id_card +
          "&populate=deep"
      )
        .then((response) => response.json())
        .then((resp) => {
          if (resp.length > 0) {
            this.id_user = resp[0].id;
            this.room_detail.id = resp[0].id;
            this.room_detail.name = resp[0].firstName;
            this.room_detail.last_name = resp[0].lastName;
            this.room_detail.nick_name = resp[0].nickName;
            this.room_detail.phone = resp[0].phone;
            this.room_detail.email = resp[0].email;
            this.room_detail.id_card = resp[0].idCard;
            this.room_detail.address = resp[0].contactAddress;
            this.room_detail.sex = resp[0].sex;
            this.room_detail.birth = resp[0].dateOfBirth;
            this.room_detail.date_sign = resp[0].checkInDate;
            this.room_detail.emergencyPerson = resp[0].emergencyPerson;
            this.room_detail.relation = resp[0].relation;
            this.room_detail.emergencyPhone = resp[0].emergencyPhone;
            this.room_detail.lineID = resp[0].lineID;
          } else {
            this.$showNotification("danger", "ไม่พบผู้ใช้");
            this.id_user = "";
            this.room_detail.id = "";
            this.room_detail.name = "";
            this.room_detail.last_name = "";
            this.room_detail.nick_name = "";
            this.room_detail.phone = "";
            this.room_detail.email = "";
            this.room_detail.id_card = "";
            this.room_detail.address = "";
            this.room_detail.sex = "";
            this.room_detail.birth = "";
            this.room_detail.date_sign = "";
            this.room_detail.emergencyPerson = "";
            this.room_detail.relation = "";
            this.room_detail.emergencyPhone = "";
            this.room_detail.lineID = "";
            this.room_detail.vehicles = [];
          }
        })
        .finally(() => {
          if (this.id_user) {
            fetch(
              "https://api.resguru.app/api" +
                "/users/" +
                this.id_user +
                "?&populate=*"
            )
              .then((response) => response.json())
              .then((resp) => {
                this.room_detail.vehicles = resp.tenant_vehicles;
              });
          }
        });
    },
    getDetailRentalContract(id) {
      const loading = this.$vs.loading();
      fetch(
        "https://api.resguru.app/api" +
          "/rooms?filters[room_building][id][$eq]=" +
          this.$store.state.building +
          "&populate=deep,3&filters[id][$eq]=" +
          this.id_room
      )
        .then((response) => response.json())
        .then((resp) => {
          this.room_detail.name =
            resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.firstName;
          this.room_detail.email =
            resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.email;
          this.room_detail.last_name =
            resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.lastName;
          this.room_detail.nick_name =
            resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.nickName;
          this.room_detail.phone =
            resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.phone;
          this.room_detail.id_card =
            resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.idCard;
          this.room_detail.address =
            resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.contactAddress;
          this.room_detail.sex =
            resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.sex;
          this.room_detail.birth =
            resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.dateOfBirth;
          this.room_detail.date_sign =
            resp.data[0]?.attributes.user_sign_contract.data?.attributes.checkInDate;
          this.room_detail.type_room =
            resp.data[0]?.attributes.room_type.data?.attributes.roomTypeName;
          this.room_detail.contract_duration =
            resp.data[0]?.attributes.user_sign_contract.data?.attributes.contractDuration;
          this.room_detail.roomInsurance_deposit =
            resp.data[0]?.attributes.user_sign_contract.data?.attributes.roomInsuranceDeposit;
          this.room_detail.room_deposit =
            resp.data[0]?.attributes.user_sign_contract.data?.attributes.roomDeposit;
          this.room_detail.emergencyPerson =
            resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.emergencyPerson;
          this.room_detail.relation =
            resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.relation;
          this.room_detail.emergencyPhone =
            resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.emergencyPhone;
          this.room_detail.lineID =
            resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.lineID;
          this.room_detail.image_card =
            "https://api.resguru.app" +
            resp.data[0]?.attributes.user_sign_contract.data?.attributes.imgCard
              .data?.attributes.formats.thumbnail.url;
          this.room_detail.image_card_name =
            resp.data[0]?.attributes.user_sign_contract.data?.attributes.imgCard.data?.attributes.name;
          
          fetch(
            "https://api.resguru.app/api" +
              "/users/" +
              resp.data[0]?.attributes.user_sign_contract.data?.attributes
                .users_permissions_user.data?.id +
              "?&populate=*"
          )
            .then((response) => response.json())
            .then((resp) => {
              this.room_detail.vehicles = resp.tenant_vehicles;
            });
        })
        .finally(() => {
          loading.close();
          this.create = true;
        });
    },
    createOrEdit() {
      const newVehicles = this.room_detail.vehicles.filter(
        (item) => !item.hasOwnProperty("id")
      );
      const id_con = "";
      if (this.is_edit == true) {
        const loading = this.$vs.loading();
        newVehicles.forEach((data) => {
          axios
            .post("https://api.resguru.app/api" + "/tenant-vehicles", {
              data: {
                Type: data.Type,
                remark: data.remark,
                licensePlate: data.licensePlate,
                users_permissions_user: this.id_user,
              },
            })
            .finally(() => {
              this.create = false;
              loading.close();
            });
        });
      } else {
        if (this.room_detail.check_user == true) {
          if (
            this.room_detail.email != "" &&
            this.room_detail.name != "" &&
            this.room_detail.last_name != "" &&
            this.room_detail.phone != "" &&
            this.room_detail.id_card != "" &&
            this.room_detail.address != "" &&
            this.img_arr_card.length != 0
          ) {
            const loading = this.$vs.loading();
            fetch(
              "https://api.resguru.app/api/user-sign-contracts?filters[users_permissions_user][id][$eq]=" +
                this.id_user +
                "&populate=*&filters[room][id][$notNull]=true"
            )
              .then((response) => response.json())
              .then((resp) => {
                if (resp.data.length == 0) {
                  axios
                    .post(
                      "https://api.resguru.app/api" + "/user-sign-contracts",
                      {
                        data: {
                          room: this.id_room,
                          contractStatus: "reserved",
                          users_permissions_user: this.room_detail.id,
                        },
                      }
                    )
                    .then((resp) => {
                      if (this.img_arr_card.length != 0) {
                        let formData = new FormData();
                        formData.append("files", this.img_arr_card);
                        formData.append("refId", String(resp.data.data.id));
                        formData.append(
                          "ref",
                          "api::user-sign-contract.user-sign-contract"
                        );
                        formData.append("field", "imgCard");
                        axios
                          .post(
                            "https://api.resguru.app/api/upload",
                            formData,
                            {
                              headers: {
                                "Content-Type": "multipart/form-data",
                              },
                            }
                          )
                          .then((result) => {
                            console.log("Upload file", result);
                          })
                          .catch((error) => {
                            console.log(error);
                          })
                          .finally(() => {});
                      }
                      axios.put(
                        "https://api.resguru.app/api" +
                          "/users/" +
                          this.room_detail.id,
                        {
                          username: this.room_detail.email,
                          email: this.room_detail.email,
                          firstName: this.room_detail.name,
                          lastName: this.room_detail.last_name,
                          nickName: this.room_detail.nick_name,
                          role: 4,
                          phone: this.room_detail.phone,
                          idCard: this.room_detail.id_card,
                          contactAddress: this.room_detail.address,
                          sex: this.room_detail.sex,
                          dateOfBirth: this.room_detail.birth,
                          emergencyPerson: this.room_detail.emergencyPerson,
                          relation: this.room_detail.relation,
                          emergencyPhone: this.room_detail.emergencyPhone,
                          lineID: this.room_detail.lineID,
                        }
                      );
                    })
                    .then(() => {
                      newVehicles.forEach((data) => {
                        axios.post(
                          "https://api.resguru.app/api" + "/tenant-vehicles",
                          {
                            data: {
                              Type: data.Type,
                              remark: data.remark,
                              licensePlate: data.licensePlate,
                              users_permissions_user: this.id_user,
                            },
                          }
                        );
                      });
                    })
                    .finally(() => {
                      axios.put(
                        "https://api.resguru.app/api" +
                          "/rooms/" +
                          this.$route.query.id_room,
                        {
                          data: {
                            roomStatus: "Reserved",
                          },
                        }
                      );
                      this.$router.push({
                        path: "/room-detail",
                        query: {
                          id_room: this.$route.query.id_room,
                          number_room: this.$route.query.number_room,
                          status: "Reserved",
                          tab: 1,
                        },
                      });
                      this.id_user = this.room_detail.id;
                      this.getUser();
                      this.create = false;
                    });
                  loading.close();
                } else {
                  loading.close();
                  this.$showNotification("danger", "ผู้เช่ามีห้องอยู่แล้ว");
                }
              });
          } else {
            this.$showNotification("danger", "กรุณากรอกข้อมูลให้ครบ");
          }
        } else {
          if (
            this.room_detail.email != "" &&
            this.room_detail.name != "" &&
            this.room_detail.last_name != "" &&
            this.room_detail.phone != "" &&
            this.room_detail.id_card &&
            this.room_detail.address != "" &&
            this.img_arr_card.length != 0
          ) {
            const date = new Date(this.room_detail.birth);
            const isoString = date.toISOString();
            const loading = this.$vs.loading();
            axios
              .post("https://api.resguru.app/api" + "/users", {
                username: this.room_detail.email,
                email: this.room_detail.email,
                firstName: this.room_detail.name,
                lastName: this.room_detail.last_name,
                nickName: this.room_detail.nick_name,
                role: 2,
                phone: this.room_detail.phone,
                email: this.room_detail.email,
                idCard: this.room_detail.id_card,
                contactAddress: this.room_detail.address,
                sex: this.room_detail.sex,
                dateOfBirth: isoString,
                password: this.room_detail.id_card,
                building: this.$store.state.building,
                emergencyPerson: this.room_detail.emergencyPerson,
                relation: this.room_detail.relation,
                emergencyPhone: this.room_detail.emergencyPhone,
                lineID: this.room_detail.lineID,
              })
              .then((resp) => {
                this.id_user = resp.data.id;
                axios
                  .post(
                    "https://api.resguru.app/api" + "/user-sign-contracts",
                    {
                      data: {
                        room: this.id_room,
                        contractStatus: "reserved",
                        users_permissions_user: resp.data.id,
                      },
                    }
                  )
                  .then((resp) => {
                    if (this.img_arr_card.length != 0) {
                      let formData = new FormData();
                      formData.append("files", this.img_arr_card);
                      formData.append("refId", String(resp.data.data.id));
                      formData.append(
                        "ref",
                        "api::user-sign-contract.user-sign-contract"
                      );
                      formData.append("field", "imgCard");
                      axios
                        .post("https://api.resguru.app/api/upload", formData, {
                          headers: {
                            "Content-Type": "multipart/form-data",
                          },
                        })
                        .then((result) => {
                          console.log("Upload file", result);
                        })
                        .catch((error) => {
                          console.log(error);
                        })
                        .finally(() => {});
                    }
                  })
                  .finally(() => {
                    axios.put(
                      "https://api.resguru.app/api" +
                        "/rooms/" +
                        this.$route.query.id_room,
                      {
                        data: {
                          roomStatus: "Reserved",
                        },
                      }
                    );
                    newVehicles.forEach((data) => {
                      axios
                        .post(
                          "https://api.resguru.app/api" + "/tenant-vehicles",
                          {
                            data: {
                              Type: data.Type,
                              remark: data.remark,
                              licensePlate: data.licensePlate,
                              users_permissions_user: this.id_user,
                            },
                          }
                        )
                        .then(() => {});
                    });
                  });
              })
              .finally(() => {
                this.$router.push({
                  path: "/room-detail",
                  query: {
                    id_room: this.$route.query.id_room,
                    number_room: this.$route.query.number_room,
                    status: "Reserved",
                    tab: 1,
                  },
                });
                this.getUser();
                this.create = false;
                loading.close();
              });
          } else {
            this.$showNotification("danger", "กรุณากรอกข้อมูลให้ครบ");
          }
        }
      }
    },
    addVehicles() {
      this.room_detail.vehicles.push({
        remark: "",
        licensePlate: "",
        Type: "",
      });
    },
    removeVehicles(i, id) {
      this.room_detail.vehicles.splice(i, 1);
    },
    moveRoom() {
      const loading = this.$vs.loading({});
      if (this.tab == 1) {
        axios
          .delete(
            "https://api.resguru.app/api" +
              "/user-sign-contracts/" +
              this.$route.query.id_contract
          )
          .then(() => {
            axios.post("https://api.resguru.app/api" + "/user-sign-contracts", {
              data: {
                room: this.room_move.id_room,
                users_permissions_user: this.$route.query.id_user,
                contractStatus: "reserved",
              },
            });
          })
          .finally(() => {
            this.confirm = false;
            loading.close();
            this.$router.push({
              path: "/rooms",
            });
          });
      } else {
        axios
          .put(
            "https://api.resguru.app/api" +
              "/user-sign-contracts/" +
              this.$route.query.id_contract,
            {
              data: {
                room: this.room_move.id_room,
              },
            }
          )
          .then(() => {})
          .finally(() => {
            this.confirm = false;
            loading.close();
            this.$router.push({
              path: "/rooms",
            });
          });
      }
    },
  },
};
</script>

<style>
.text-custom {
  color: #333333;
}

/* Improve input field appearance */
input[type="text"],
input[type="date"],
input[type="input"],
select {
  outline: none;
  border: 1px solid transparent;
  transition: all 0.2s;
}

input[type="text"]:focus,
input[type="date"]:focus,
input[type="input"]:focus,
select:focus {
  border-color: #003765;
  box-shadow: 0 0 0 2px rgba(0, 55, 101, 0.1);
}

/* Make disabled fields visually distinct */
input:disabled,
select:disabled {
  background-color: #f0f0f0;
  cursor: not-allowed;
}

/* Fix text truncation */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Better visibility for required field markers */
.text-red-500 {
  color: #f56565;
}
</style>