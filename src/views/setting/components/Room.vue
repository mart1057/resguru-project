<template>
  <div>
    <div
      class="bg-[white] pt-[14px] pl-[24px] pr-[24px]"
      :class="tab == 1 ? 'rounded-b-lg' : 'rounded-t-lg'"
    >
      <div class="bg-[white]">
        <div class="flex justify-start items-center rounded-[12px]">
          <div class="bg-[#F3F7FA] rounded-[12px]">
            <div class="flex justify-start items-center">
              <div
                @click="tab = 1"
                class="cursor-pointer"
                :class="
                  tab == 1
                    ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[12px] text-[white]'
                    : 'text-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] flex justify-center items-center'
                "
              >
                รายการห้องพัก
              </div>
              <div
                @click="tab = 2"
                class="cursor-pointer ml-[8px]"
                :class="
                  tab == 2
                    ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[12px] text-[white]'
                    : 'text-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] flex justify-center items-center'
                "
              >
                ประเภทห้องพัก
              </div>
              <div
                @click="(tab = 3), getFloorRoom()"
                class="cursor-pointer ml-[8px]"
                :class="
                  tab == 3
                    ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[12px] text-[white]'
                    : 'text-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] flex justify-center items-center'
                "
              >
                ชั้นของหอพัก
              </div>
            </div>
          </div>
        </div>
        <div
          class="h-[auto] bg-[white] rounded-[12px] flex flex-col justify-end mt-[14px]"
          v-if="tab == 1"
        >
          <div>
            <div class="flex">
              <!-- <div class="h-[36px] pl-[8px] pr-[8px] bg-[#003765] flex cursor-pointer  justify-center rounded-[12px] mt-[12px]"
                                @click="create = true">
                                <div class="flex justify-start items-center">
                                    <svg width="20" height="20" viewBox="0 0 26 26" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_3458_20475" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0"
                                            y="0" width="26" height="26">
                                            <rect x="0.625" y="0.880859" width="24.75" height="24.75" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_3458_20475)">
                                            <path
                                                d="M8.95859 21.1275L10.0245 20.8419L15.8657 10.7136L14.514 9.93227L8.67271 20.0606L8.95859 21.1275ZM18.38 9.03688L14.6976 6.93096L15.5262 5.49429C15.7073 5.18019 15.9791 4.97457 16.3416 4.87744C16.7041 4.78032 17.0423 4.82248 17.3562 5.00392L18.708 5.78522C19.022 5.96667 19.2308 6.23319 19.3345 6.5848C19.4382 6.93641 19.3994 7.26927 19.2183 7.58337L18.38 9.03688ZM8.7915 22.5594C8.56937 22.6189 8.36405 22.5942 8.17554 22.4852C7.98703 22.3763 7.86299 22.2106 7.80342 21.9883L7.31926 20.1814C7.29139 20.0774 7.28365 19.9734 7.29603 19.8693C7.3084 19.7652 7.34411 19.6619 7.40316 19.5596L14.0098 8.10401L17.6994 10.2365L11.0927 21.692C11.0337 21.7944 10.9622 21.877 10.8784 21.9397C10.7945 22.0025 10.7006 22.0479 10.5967 22.0757L8.7915 22.5594Z"
                                                fill="white" />
                                        </g>
                                    </svg>
                                </div>
                                <div @click="create = true"
                                    class="text-white font-bold ml-[4px]   flex justify-center items-center">แก้ไขผังห้องพัก
                                </div>
                            </div> -->
              <!-- <div @click="type = true"
                                class="h-[36px]  bg-[#003765] pl-[8px] pr-[8px] flex text-white cursor-pointer  justify-center rounded-[12px] flex  justify-center rounded-[12px] mt-[8px] cursor-pointer">
                                <div class="flex justify-center items-center">
                                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_3458_11720" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0"
                                            y="0" width="22" height="23">
                                            <rect y="0.5" width="22" height="22" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_3458_11720)">
                                            <path
                                                d="M5.95961 14.4256H16.0429V15.2894C16.0429 15.4469 16.0947 15.5773 16.1981 15.6807C16.3015 15.7841 16.4319 15.8358 16.5894 15.8358C16.7469 15.8358 16.8773 15.7841 16.9807 15.6807C17.0842 15.5773 17.1359 15.4469 17.1359 15.2894V12.5006C17.1359 12.2209 17.0748 11.9456 16.9525 11.6747C16.8303 11.4038 16.6623 11.1761 16.4484 10.9916V9.13717C16.4484 8.67415 16.288 8.28222 15.9671 7.96138C15.6463 7.64055 15.2544 7.48013 14.7913 7.48013H11.9708C11.7675 7.48013 11.5851 7.51333 11.4235 7.57973C11.2619 7.64614 11.1212 7.73987 11.0013 7.86092C10.8814 7.73987 10.7407 7.64614 10.5791 7.57973C10.4175 7.51333 10.235 7.48013 10.0317 7.48013H7.21123C6.74819 7.48013 6.35626 7.64055 6.03542 7.96138C5.7146 8.28222 5.55419 8.67415 5.55419 9.13717V10.9916C5.34031 11.1761 5.17225 11.4038 5.05003 11.6747C4.92781 11.9456 4.86669 12.2209 4.86669 12.5006V15.2894C4.86669 15.4469 4.9184 15.5773 5.02182 15.6807C5.12523 15.7841 5.25567 15.8358 5.41314 15.8358C5.57063 15.8358 5.70108 15.7841 5.80449 15.6807C5.90791 15.5773 5.95961 15.4469 5.95961 15.2894V14.4256ZM5.95961 13.3327V12.416C5.95961 12.1563 6.04746 11.9386 6.22315 11.7629C6.39885 11.5872 6.61656 11.4993 6.87628 11.4993H15.1263C15.386 11.4993 15.6037 11.5872 15.7794 11.7629C15.9551 11.9386 16.0429 12.1563 16.0429 12.416V13.3327H5.95961ZM6.64711 10.4064V8.85513C6.64711 8.77286 6.67356 8.70528 6.72645 8.65239C6.77934 8.59951 6.84692 8.57308 6.92919 8.57308H10.1728C10.255 8.57308 10.3226 8.59951 10.3755 8.65239C10.4284 8.70528 10.4548 8.77286 10.4548 8.85513V10.4064H6.64711ZM11.5478 10.4064V8.85513C11.5478 8.77286 11.5742 8.70528 11.6271 8.65239C11.68 8.59951 11.7475 8.57308 11.8298 8.57308H15.0734C15.1556 8.57308 15.2232 8.59951 15.2761 8.65239C15.329 8.70528 15.3554 8.77286 15.3554 8.85513V10.4064H11.5478ZM3.95003 20.2076C3.48699 20.2076 3.09505 20.0472 2.77422 19.7264C2.45339 19.4056 2.29297 19.0136 2.29297 18.5506V4.44808C2.29297 3.98504 2.45339 3.5931 2.77422 3.27227C3.09505 2.95143 3.48699 2.79102 3.95003 2.79102H18.0525C18.5156 2.79102 18.9075 2.95143 19.2283 3.27227C19.5492 3.5931 19.7096 3.98504 19.7096 4.44808V18.5506C19.7096 19.0136 19.5492 19.4056 19.2283 19.7264C18.9075 20.0472 18.5156 20.2076 18.0525 20.2076H3.95003ZM3.95003 18.8327H18.0525C18.1231 18.8327 18.1877 18.8033 18.2465 18.7445C18.3052 18.6858 18.3346 18.6211 18.3346 18.5506V4.44808C18.3346 4.37755 18.3052 4.3129 18.2465 4.25413C18.1877 4.19537 18.1231 4.16599 18.0525 4.16599H3.95003C3.87951 4.16599 3.81486 4.19537 3.75608 4.25413C3.69733 4.3129 3.66795 4.37755 3.66795 4.44808V18.5506C3.66795 18.6211 3.69733 18.6858 3.75608 18.7445C3.81486 18.8033 3.87951 18.8327 3.95003 18.8327Z"
                                                fill="#ffffff" />
                                        </g>
                                    </svg>
                                </div>
                                <div class=" font-bold ml-[8px] flex justify-center items-center">กำหนดประเภทห้องและค่าเช่า
                                </div>
                            </div> -->
              <!-- <vs-tooltip bottom shadow not-hover v-model="popup_filter">
                                <div @click="popup_filter = true"
                                    class="h-[36px] w-[132px]  flex  justify-center rounded-[12px] mt-[12px] ml-[14px] cursor-pointer">
                                    <div class="flex justify-center items-center">
                                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_3262_4178" style="mask-type:alpha" maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="22" height="23">
                                                <rect y="0.5" width="22" height="22" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_3262_4178)">
                                                <path
                                                    d="M10.0846 16.7707C9.88982 16.7707 9.72655 16.7048 9.59479 16.573C9.46302 16.4411 9.39714 16.2778 9.39714 16.0829C9.39714 15.888 9.46302 15.7248 9.59479 15.5932C9.72655 15.4615 9.88982 15.3957 10.0846 15.3957H11.9179C12.1127 15.3957 12.276 15.4616 12.4078 15.5935C12.5395 15.7253 12.6054 15.8886 12.6054 16.0835C12.6054 16.2784 12.5395 16.4416 12.4078 16.5733C12.276 16.7049 12.1127 16.7707 11.9179 16.7707H10.0846ZM3.66795 7.25144C3.47315 7.25144 3.30988 7.18553 3.17813 7.05369C3.04635 6.92186 2.98047 6.75851 2.98047 6.56364C2.98047 6.36876 3.04635 6.20551 3.17813 6.07389C3.30988 5.94227 3.47315 5.87646 3.66795 5.87646H18.3346C18.5294 5.87646 18.6927 5.94238 18.8245 6.07421C18.9562 6.20603 19.0221 6.36938 19.0221 6.56426C19.0221 6.75913 18.9562 6.92237 18.8245 7.05399C18.6927 7.18563 18.5294 7.25144 18.3346 7.25144H3.66795ZM6.41795 12.0111C6.22315 12.0111 6.05988 11.9451 5.92813 11.8133C5.79635 11.6815 5.73047 11.5181 5.73047 11.3233C5.73047 11.1284 5.79635 10.9651 5.92813 10.8335C6.05988 10.7019 6.22315 10.6361 6.41795 10.6361H15.5846C15.7794 10.6361 15.9427 10.702 16.0745 10.8338C16.2062 10.9657 16.2721 11.129 16.2721 11.3239C16.2721 11.5188 16.2062 11.682 16.0745 11.8136C15.9427 11.9452 15.7794 12.0111 15.5846 12.0111H6.41795Z"
                                                    fill="#003765" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div class=" font-bold ml-[8px] flex justify-center items-center">ฟิลเตอร์</div>
                                </div>
                                <template #tooltip>
                                    <div class="w-[100%]">
                                        <div class="center">
                                            <vs-checkbox v-model="option">
                                                <div class="text-custom">ห้องค้างชำระ</div>
                                            </vs-checkbox>
                                        </div>
                                        <div class="center">
                                            <vs-checkbox v-model="option">
                                                <div class="text-custom">ห้องชำระเงินแล้ว</div>
                                            </vs-checkbox>
                                        </div>
                                        <div class="center">
                                            <vs-checkbox v-model="option">
                                                <div class="text-custom">ห้องว่าง</div>
                                            </vs-checkbox>
                                        </div>
                                        <div class="center">
                                            <vs-checkbox v-model="option">
                                                <div class="text-custom">ห้องติดจอง</div>
                                            </vs-checkbox>
                                        </div>
                                        <div class="center">
                                            <vs-checkbox v-model="option">
                                                <div class="text-custom">ห้องใกล้หมดสัญญา</div>
                                            </vs-checkbox>
                                        </div>
                                        <div class="center">
                                            <vs-checkbox v-model="option">
                                                <div class="text-custom">ห้องแจ้งย้ายออก</div>
                                            </vs-checkbox>
                                        </div>
                                    </div>
                                </template>
                            </vs-tooltip> -->
            </div>
          </div>
          <div class="flex items-center mb-[8px] mt-[14px] table-container">
            <!-- <div class="mr-[14px]">
                            <vs-select placeholder="เลือกอาคาร">
                                <vs-option label="อาคาร A">
                                    อาคาร A
                                </vs-option>
                                <vs-option label="อาคาร B" >
                                    อาคาร B
                                </vs-option>
                            </vs-select>
                        </div> -->

            <div
              v-for="(data, i) in roomFloor"
              class="flex-initial flex-nowrap w-32 p-2 border-1"
              :class="
                tab_floor == i
                  ? 'font-bold text-[16px] text-[white] bg-[#003765]'
                  : 'text-[#8396A6]'
              "
            >
              <div
                class="cursor-pointer whitespace-nowrap"
                :class="
                  tab_floor == i ? 'font-bold text-[16px]' : 'text-[#8396A6]'
                "
                @click="
                  (tab_floor = i),
                    (filter.floor = data.id),
                    (name_floor = data.attributes.floorName),
                    getUserRoom()
                "
              >
                ชั้น {{ data.attributes.floorName }}
              </div>
            </div>
            <!-- <div class="text-[#8396A6] cursor-pointer">อาคาร A ชั้น 2</div> -->
          </div>
        </div>
      </div>
    </div>
    <div
      class="mt-[24px] bg-[white] pt-[14px] pb-[24px] pl-[24px] pr-[24px] rounded-[12px]"
      v-if="tab == 1"
    >
      <div class="text-[24px] font-bold mt-[14px]">ชั้น {{ name_floor }}</div>
      <div class="grid grid-cols-4 w-[100%] gap-4 mt-[14px]">
        <div
          @click="
            (create_room = true),
              (is_edit = false),
              (roomName = ''),
              (room_type_id = ''),
              (roomFloor_id = '')
          "
          class="rounded-[16px] p-[14px] h-[100%] border cursor-pointer flex flex-col items-center justify-center"
        >
          <div>
            <svg
              width="68"
              height="69"
              viewBox="0 0 68 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="34" cy="34.457" r="34" fill="#F3F7FA" />
              <mask
                id="mask0_1373_22044"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="6"
                y="7"
                width="56"
                height="55"
              >
                <rect
                  @click="selectFloor(data, i)"
              </mask>
              <g mask="url(#mask0_1373_22044)">
                <path
                  d="M33.9984 49.7561C33.5165 49.7561 33.1129 49.5932 32.7874 49.2674C32.4619 48.9416 32.2992 48.5379 32.2992 48.0562V36.1561H20.3992C19.9175 36.1561 19.5138 35.9932 19.188 35.6672C18.8621 35.3412 18.6992 34.9373 18.6992 34.4555C18.6992 33.9736 18.8621 33.5699 19.188 33.2444C19.5138 32.919 19.9175 32.7562 20.3992 32.7562H32.2992V20.8562C32.2992 20.3745 32.4622 19.9708 32.7881 19.6449C33.1141 19.3191 33.518 19.1562 33.9999 19.1562C34.4818 19.1562 34.8855 19.3191 35.2109 19.6449C35.5364 19.9708 35.6991 20.3745 35.6991 20.8562V32.7562H47.5992C48.0808 32.7562 48.4846 32.9192 48.8104 33.2452C49.1362 33.5712 49.2991 33.9751 49.2991 34.4569C49.2991 34.9388 49.1362 35.3425 48.8104 35.668C48.4846 35.9934 48.0808 36.1561 47.5992 36.1561H35.6991V48.0562C35.6991 48.5379 35.5361 48.9416 35.2102 49.2674C34.8842 49.5932 34.4803 49.7561 33.9984 49.7561Z"
                  fill="#B9CCDC"
                />
              </g>
            </svg>
          </div>
          <div class="text-[#5C6B79] text-[20px] mt-[8px]">เพิ่มห้อง</div>
        </div>
        <div
          class="rounded-[16px] p-[14px] h-[240px] border cursor-pointer"
          v-for="data in room"
          @click="getUserRoomDetail(data.id), (is_edit = true)"
        >
          <div class="flex justify-between">
            <div class="text-[18px] font-bold text-[#003765]">
              ห้อง {{ data.attributes.RoomNumber }}
            </div>
            <!-- <div class="flex">
                            <vs-checkbox v-model="option" color="#003765"> </vs-checkbox>
                        </div> -->
          </div>
          <div class="mt-[24px]">
            <div class="flex justify-between h-[100%]">
              <div class="text-[12px] text-[#5C6B79] flex items-center">
                ประเภทห้อง
              </div>
              <div class="mt-[]">
                {{ data.attributes.room_type.data.attributes.roomTypeName }}
                <!-- <select placeholder="Select" v-model="data.attributes.room_type.data.id" disabled
                                    class="w-[200px] h-[32px] border rounded-[12px] pl-[8px] pr-[8px]"
                                    :class="value == 1 ? 'bg-[#FFF2BC] text-[#EEA10B]' : ''"
                                    @change="updateRoomType(data.id, data.attributes.room_type.data.id)">
                                    <option v-for="TypeData in roomType" :value=TypeData.id>
                                        {{ TypeData.attributes.roomTypeName }}
                                    </option>
                                </select> -->
              </div>
            </div>
            <div class="grid w-[100%] gap-4 mt-[14px]">
              มิเตอร์น้ำ-ไฟฟ้า เดือนล่าสุด
            </div>
            <div class="grid grid-cols-2 w-[100%] gap-4 mt-[14px]">
              <div class="w-[100%]">
                <div v-if="data.attributes.water_fees.data[0]">
                  <vs-input
                    v-model="
                      data.attributes.water_fees.data[0].attributes.meterUnit
                    "
                    disabled
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
                          id="mask0_3458_19558"
                          style="mask-type: alpha"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="25"
                        >
                          <rect
                            y="0.457031"
                            width="24"
                            height="24"
                            fill="#D9D9D9"
                          />
                        </mask>
                        <g mask="url(#mask0_3458_19558)">
                          <path
                            d="M12 21.9568C10.0156 21.9568 8.26953 21.2642 6.76172 19.8791C5.25391 18.494 4.5 16.6197 4.5 14.2564C4.5 12.7695 5.06635 11.1524 6.19905 9.40494C7.33173 7.65751 9.04392 5.75508 11.3356 3.69767C11.4298 3.61792 11.5339 3.55625 11.648 3.51267C11.7621 3.46907 11.8795 3.44727 12 3.44727C12.1205 3.44727 12.2378 3.46907 12.3519 3.51267C12.466 3.55625 12.5701 3.61792 12.6643 3.69767C14.956 5.75508 16.6682 7.65751 17.8009 9.40494C18.9336 11.1524 19.5 12.7695 19.5 14.2564C19.5 16.6197 18.746 18.494 17.2382 19.8791C15.7304 21.2642 13.9843 21.9568 12 21.9568ZM12 20.4568C13.6769 20.4568 15.0961 19.8802 16.2577 18.727C17.4192 17.5738 18 16.0838 18 14.2568C18 13.0735 17.5083 11.7193 16.525 10.1943C15.5416 8.66934 14.0333 6.97351 12 5.10684C9.96664 6.97351 8.45831 8.66934 7.47497 10.1943C6.49164 11.7193 5.99997 13.0735 5.99997 14.2568C5.99997 16.0838 6.58074 17.5738 7.74227 18.727C8.90382 19.8802 10.3231 20.4568 12 20.4568ZM12.2461 19.303C12.4205 19.2863 12.5641 19.2211 12.6769 19.1073C12.7897 18.9935 12.8461 18.8563 12.8461 18.6957C12.8461 18.5082 12.7846 18.3597 12.6617 18.2501C12.5387 18.1405 12.3816 18.094 12.1903 18.1107C11.507 18.1607 10.7628 17.9604 9.95765 17.5097C9.15253 17.0591 8.64997 16.2754 8.44997 15.1588C8.41664 14.9882 8.34517 14.8543 8.23555 14.7568C8.12593 14.6594 7.99548 14.6107 7.8442 14.6107C7.66215 14.6107 7.51055 14.679 7.3894 14.8155C7.26825 14.952 7.22948 15.1274 7.27308 15.3415C7.54358 16.794 8.19742 17.8325 9.2346 18.4568C10.2718 19.0812 11.2756 19.3632 12.2461 19.303Z"
                            fill="#003765"
                          />
                        </g>
                      </svg>
                    </template>
                  </vs-input>
                </div>
                <div v-else>
                  <vs-input disabled>
                    <template #icon>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_3458_19558"
                          style="mask-type: alpha"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="25"
                        >
                          <rect
                            y="0.457031"
                            width="24"
                            height="24"
                            fill="#D9D9D9"
                          />
                        </mask>
                        <g mask="url(#mask0_3458_19558)">
                          <path
                            d="M12 21.9568C10.0156 21.9568 8.26953 21.2642 6.76172 19.8791C5.25391 18.494 4.5 16.6197 4.5 14.2564C4.5 12.7695 5.06635 11.1524 6.19905 9.40494C7.33173 7.65751 9.04392 5.75508 11.3356 3.69767C11.4298 3.61792 11.5339 3.55625 11.648 3.51267C11.7621 3.46907 11.8795 3.44727 12 3.44727C12.1205 3.44727 12.2378 3.46907 12.3519 3.51267C12.466 3.55625 12.5701 3.61792 12.6643 3.69767C14.956 5.75508 16.6682 7.65751 17.8009 9.40494C18.9336 11.1524 19.5 12.7695 19.5 14.2564C19.5 16.6197 18.746 18.494 17.2382 19.8791C15.7304 21.2642 13.9843 21.9568 12 21.9568ZM12 20.4568C13.6769 20.4568 15.0961 19.8802 16.2577 18.727C17.4192 17.5738 18 16.0838 18 14.2568C18 13.0735 17.5083 11.7193 16.525 10.1943C15.5416 8.66934 14.0333 6.97351 12 5.10684C9.96664 6.97351 8.45831 8.66934 7.47497 10.1943C6.49164 11.7193 5.99997 13.0735 5.99997 14.2568C5.99997 16.0838 6.58074 17.5738 7.74227 18.727C8.90382 19.8802 10.3231 20.4568 12 20.4568ZM12.2461 19.303C12.4205 19.2863 12.5641 19.2211 12.6769 19.1073C12.7897 18.9935 12.8461 18.8563 12.8461 18.6957C12.8461 18.5082 12.7846 18.3597 12.6617 18.2501C12.5387 18.1405 12.3816 18.094 12.1903 18.1107C11.507 18.1607 10.7628 17.9604 9.95765 17.5097C9.15253 17.0591 8.64997 16.2754 8.44997 15.1588C8.41664 14.9882 8.34517 14.8543 8.23555 14.7568C8.12593 14.6594 7.99548 14.6107 7.8442 14.6107C7.66215 14.6107 7.51055 14.679 7.3894 14.8155C7.26825 14.952 7.22948 15.1274 7.27308 15.3415C7.54358 16.794 8.19742 17.8325 9.2346 18.4568C10.2718 19.0812 11.2756 19.3632 12.2461 19.303Z"
                            fill="#003765"
                          />
                        </g>
                      </svg>
                    </template>
                  </vs-input>
                </div>
              </div>
              <div class="w-[100%]">
                <div v-if="data.attributes.electric_fees.data[0]">
                  <vs-input
                    v-model="
                      data.attributes.electric_fees.data[0].attributes
                        .electicUnit
                    "
                    disabled
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
                          id="mask0_3458_17710"
                          style="mask-type: alpha"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="25"
                        >
                          <rect
                            y="0.457031"
                            width="24"
                            height="24"
                            fill="#D9D9D9"
                          />
                        </mask>
                        <g mask="url(#mask0_3458_17710)">
                          <path
                            d="M11.6643 17.557L14.5908 12.5916C14.6181 12.5403 14.6208 12.4874 14.599 12.4329C14.5772 12.3784 14.539 12.3512 14.4845 12.3512H12.1011L13.5897 6.27433C13.6115 6.19741 13.6006 6.1253 13.557 6.05798C13.5133 5.99066 13.4588 5.95701 13.3934 5.95701H9.53769C9.46134 5.95701 9.39863 5.98586 9.34957 6.04356C9.30048 6.10126 9.27594 6.17498 9.27594 6.26473V13.6493C9.27594 13.739 9.30048 13.8128 9.34957 13.8705C9.39863 13.9282 9.46134 13.957 9.53769 13.957H11.6643V17.557ZM15.9093 12.9704L11.4434 20.5877C11.3638 20.7248 11.2649 20.8152 11.1465 20.8588C11.0282 20.9024 10.9107 20.9024 10.794 20.8588C10.6773 20.8152 10.5806 20.7357 10.5037 20.6204C10.4268 20.505 10.3883 20.3652 10.3883 20.2011V15.457H9.53769C9.11347 15.457 8.75113 15.2804 8.45067 14.9272C8.15022 14.574 8 14.148 8 13.6493V6.26473C8 5.76601 8.15022 5.34006 8.45067 4.98686C8.75113 4.63364 9.11347 4.45703 9.53769 4.45703H13.6551C14.076 4.45703 14.4179 4.64453 14.6807 5.01953C14.9436 5.39453 15.021 5.8096 14.913 6.26473L13.7909 10.8512H14.9523C15.4136 10.8512 15.7547 11.0906 15.9755 11.5695C16.1964 12.0483 16.1743 12.5153 15.9093 12.9704Z"
                            fill="#003765"
                          />
                        </g>
                      </svg>
                    </template>
                  </vs-input>
                </div>
                <div v-else>
                  <vs-input disabled>
                    <template #icon>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_3458_17710"
                          style="mask-type: alpha"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="25"
                        >
                          <rect
                            y="0.457031"
                            width="24"
                            height="24"
                            fill="#D9D9D9"
                          />
                        </mask>
                        <g mask="url(#mask0_3458_17710)">
                          <path
                            d="M11.6643 17.557L14.5908 12.5916C14.6181 12.5403 14.6208 12.4874 14.599 12.4329C14.5772 12.3784 14.539 12.3512 14.4845 12.3512H12.1011L13.5897 6.27433C13.6115 6.19741 13.6006 6.1253 13.557 6.05798C13.5133 5.99066 13.4588 5.95701 13.3934 5.95701H9.53769C9.46134 5.95701 9.39863 5.98586 9.34957 6.04356C9.30048 6.10126 9.27594 6.17498 9.27594 6.26473V13.6493C9.27594 13.739 9.30048 13.8128 9.34957 13.8705C9.39863 13.9282 9.46134 13.957 9.53769 13.957H11.6643V17.557ZM15.9093 12.9704L11.4434 20.5877C11.3638 20.7248 11.2649 20.8152 11.1465 20.8588C11.0282 20.9024 10.9107 20.9024 10.794 20.8588C10.6773 20.8152 10.5806 20.7357 10.5037 20.6204C10.4268 20.505 10.3883 20.3652 10.3883 20.2011V15.457H9.53769C9.11347 15.457 8.75113 15.2804 8.45067 14.9272C8.15022 14.574 8 14.148 8 13.6493V6.26473C8 5.76601 8.15022 5.34006 8.45067 4.98686C8.75113 4.63364 9.11347 4.45703 9.53769 4.45703H13.6551C14.076 4.45703 14.4179 4.64453 14.6807 5.01953C14.9436 5.39453 15.021 5.8096 14.913 6.26473L13.7909 10.8512H14.9523C15.4136 10.8512 15.7547 11.0906 15.9755 11.5695C16.1964 12.0483 16.1743 12.5153 15.9093 12.9704Z"
                            fill="#003765"
                          />
                        </g>
                      </svg>
                    </template>
                  </vs-input>
                </div>
              </div>
            </div>
            <div
              class="flex pl-[8px] pr-[8px] pt-[4px] pb-[4px] rounded-[12px] border justify-between items-center mt-[14px] text-[#0B9A3C]"
            >
              <div>ราคา</div>
              <div>
                {{ data.attributes.room_type.data.attributes.roomPrice }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-[white] pt-[14px] pb-[24px] pl-[24px] pr-[24px] rounded-b-lg"
      v-if="tab == 2"
    >
      <div class="text-[1.1vw] font-bold mt-[24px]">รายการประเภทห้องพัก</div>
      <div
        class="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-[14px] w-[100%]"
      >
        <div
          class="border h-[100%] rounded-[12px] pl-[8px] pr-[8px] pt-[12px] pb-[12px] flex flex-col justify-center items-center cursor-pointer"
          @click="
            (create_type = true),
              (roomTypePrice = ''),
              (roomTypeName = ''),
              (is_edit_type = false)
          "
        >
          <div>
            <svg
              width="60"
              height="60"
              viewBox="0 0 68 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="34" cy="34.457" r="34" fill="#F3F7FA" />
              <mask
                id="mask0_1373_22044"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="6"
                y="7"
                width="56"
                height="55"
              >
                <rect
                  x="6.80078"
                  y="7.25586"
                  width="54.4"
                  height="54.4"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_1373_22044)">
                <path
                  d="M33.9984 49.7561C33.5165 49.7561 33.1129 49.5932 32.7874 49.2674C32.4619 48.9416 32.2992 48.5379 32.2992 48.0562V36.1561H20.3992C19.9175 36.1561 19.5138 35.9932 19.188 35.6672C18.8621 35.3412 18.6992 34.9373 18.6992 34.4555C18.6992 33.9736 18.8621 33.5699 19.188 33.2444C19.5138 32.919 19.9175 32.7562 20.3992 32.7562H32.2992V20.8562C32.2992 20.3745 32.4622 19.9708 32.7881 19.6449C33.1141 19.3191 33.518 19.1562 33.9999 19.1562C34.4818 19.1562 34.8855 19.3191 35.2109 19.6449C35.5364 19.9708 35.6991 20.3745 35.6991 20.8562V32.7562H47.5992C48.0808 32.7562 48.4846 32.9192 48.8104 33.2452C49.1362 33.5712 49.2991 33.9751 49.2991 34.4569C49.2991 34.9388 49.1362 35.3425 48.8104 35.668C48.4846 35.9934 48.0808 36.1561 47.5992 36.1561H35.6991V48.0562C35.6991 48.5379 35.5361 48.9416 35.2102 49.2674C34.8842 49.5932 34.4803 49.7561 33.9984 49.7561Z"
                  fill="#B9CCDC"
                />
              </g>
            </svg>
          </div>
          <div class="text-[#5C6B79] font-bold text-[1.1vw] mt-[4px]">
            สร้างประเภทห้องพักใหม่
          </div>
        </div>
        <div
          class="border h-[130px] rounded-[12px] pl-[8px] pr-[8px] pt-[12px] pb-[12px] cursor-pointer"
          v-for="data in roomType"
          @click="
            (create_type = true),
              (is_edit_type = true),
              getTypeRoomDetail(data.id)
          "
        >
          <div class="flex flex-col justify-between h-[100%]">
            <div class="flex justify-between">
              <div class="text-[16px] truncate">
                {{ data.attributes.roomTypeName }}
              </div>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="10.0013"
                    cy="4.16667"
                    rx="1.66667"
                    ry="1.66667"
                    transform="rotate(90 10.0013 4.16667)"
                    fill="#5C6B79"
                  />
                  <circle
                    cx="10.0013"
                    cy="10.0007"
                    r="1.66667"
                    transform="rotate(90 10.0013 10.0007)"
                    fill="#5C6B79"
                  />
                  <ellipse
                    cx="10.0013"
                    cy="15.8327"
                    rx="1.66667"
                    ry="1.66667"
                    transform="rotate(90 10.0013 15.8327)"
                    fill="#5C6B79"
                  />
                </svg>
              </div>
            </div>
            <div
              class="flex justify-between border rounded-[12px] items-center pl-[14px] pr-[14px] pt-[4px] pb-[4px] text-[#0B9A3C] mt-[8px]"
            >
              <div class="w-[50%]">ราคา</div>
              <div>
                <input
                  type="number"
                  v-model="data.attributes.roomPrice"
                  disabled
                  class="flex justify-center h-[24px] w-[100%] bg-[#F3F8FD] rounded-[12px]"
                />
              </div>
            </div>
            <!-- <vs-button @click="updateRoomPrice(data.id, data.attributes.roomPrice)"
                            color="#003765">แก้ไขราคาห้อง</vs-button> -->
          </div>
        </div>
      </div>
    </div>

    <div
      class="bg-[white] pt-[14px] pb-[24px] pl-[24px] pr-[24px] rounded-b-lg"
      v-if="tab == 3"
    >
      <div class="text-[16px] font-bold mt-[24px]">รายการจำนวนชั้นของหอพัก</div>
      <div
        class="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-[14px] w-[100%]"
      >
        <div
          class="border h-[100%] rounded-[12px] pl-[8px] pr-[8px] pt-[12px] pb-[12px] flex flex-col justify-center items-center cursor-pointer"
          @click="(createFloor = true), (floorNamesToCreate = [''])"
        >
          <div>
            <svg
              width="60"
              height="60"
              viewBox="0 0 68 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="34" cy="34.457" r="34" fill="#F3F7FA" />
              <mask
                id="mask0_1373_22044"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="6"
                y="7"
                width="56"
                height="55"
              >
                <rect
                  x="6.80078"
                  y="7.25586"
                  width="54.4"
                  height="54.4"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_1373_22044)">
                <path
                  d="M33.9984 49.7561C33.5165 49.7561 33.1129 49.5932 32.7874 49.2674C32.4619 48.9416 32.2992 48.5379 32.2992 48.0562V36.1561H20.3992C19.9175 36.1561 19.5138 35.9932 19.188 35.6672C18.8621 35.3412 18.6992 34.9373 18.6992 34.4555C18.6992 33.9736 18.8621 33.5699 19.188 33.2444C19.5138 32.919 19.9175 32.7562 20.3992 32.7562H32.2992V20.8562C32.2992 20.3745 32.4622 19.9708 32.7881 19.6449C33.1141 19.3191 33.518 19.1562 33.9999 19.1562C34.4818 19.1562 34.8855 19.3191 35.2109 19.6449C35.5364 19.9708 35.6991 20.3745 35.6991 20.8562V32.7562H47.5992C48.0808 32.7562 48.4846 32.9192 48.8104 33.2452C49.1362 33.5712 49.2991 33.9751 49.2991 34.4569C49.2991 34.9388 49.1362 35.3425 48.8104 35.668C48.4846 35.9934 48.0808 36.1561 47.5992 36.1561H35.6991V48.0562C35.6991 48.5379 35.5361 48.9416 35.2102 49.2674C34.8842 49.5932 34.4803 49.7561 33.9984 49.7561Z"
                  fill="#B9CCDC"
                />
              </g>
            </svg>
          </div>
          <div class="text-[#5C6B79] font-bold mt-[4px]">สร้างชั้นใหม่</div>
        </div>
        <div
          class="border h-[130px] rounded-[12px] pl-[8px] pr-[8px] pt-[12px] pb-[12px]"
          v-for="data in roomFloor"
        >
          <div class="flex flex-col justify-between h-[100%]">
            <div class="flex justify-between">
              <!-- <div class="text-[16px]">ชื่อชั้น : {{ data.attributes.floorName }}</div> -->
              <div class="text-[16px]">ชื่อชั้น :</div>
              <div class="cursor-pointer">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="removeFloor(data.id)"
                >
                  <mask
                    id="mask0_967_25233"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>

                  <g mask="url(#mask0_967_25233)">
                    <path
                      d="M6.08975 17.0822C5.66881 17.0822 5.3125 16.9363 5.02083 16.6447C4.72917 16.353 4.58333 15.9967 4.58333 15.5758V4.99886H4.375C4.19765 4.99886 4.04915 4.93904 3.9295 4.81939C3.80983 4.69973 3.75 4.55123 3.75 4.37389C3.75 4.19654 3.80983 4.04804 3.9295 3.92839C4.04915 3.80872 4.19765 3.74889 4.375 3.74889H7.49998C7.49998 3.5395 7.57316 3.36429 7.71952 3.22326C7.8659 3.08223 8.04378 3.01172 8.25319 3.01172H11.7468C11.9562 3.01172 12.1341 3.08223 12.2804 3.22326C12.4268 3.36429 12.5 3.5395 12.5 3.74889H15.625C15.8023 3.74889 15.9508 3.80872 16.0705 3.92839C16.1901 4.04804 16.25 4.19654 16.25 4.37389C16.25 4.55123 16.1901 4.69973 16.0705 4.81939C15.9508 4.93904 15.8023 4.99886 15.625 4.99886H15.4166V15.5758C15.4166 15.9967 15.2708 16.353 14.9791 16.6447C14.6875 16.9363 14.3312 17.0822 13.9102 17.0822H6.08975ZM5.83331 4.99886V15.5758C5.83331 15.6506 5.85735 15.712 5.90544 15.7601C5.95352 15.8082 6.01496 15.8322 6.08975 15.8322H13.9102C13.985 15.8322 14.0464 15.8082 14.0945 15.7601C14.1426 15.712 14.1666 15.6506 14.1666 15.5758V4.99886H5.83331ZM7.83654 13.5406C7.83654 13.7179 7.89637 13.8664 8.01602 13.9861C8.13567 14.1057 8.28417 14.1655 8.46152 14.1655C8.63887 14.1655 8.78737 14.1057 8.90702 13.9861C9.02669 13.8664 9.08652 13.7179 9.08652 13.5406V7.29051C9.08652 7.11316 9.02669 6.96466 8.90702 6.84501C8.78737 6.72536 8.63887 6.66553 8.46152 6.66553C8.28417 6.66553 8.13567 6.72536 8.01602 6.84501C7.89637 6.96466 7.83654 7.11316 7.83654 7.29051V13.5406ZM10.9134 13.5406C10.9134 13.7179 10.9733 13.8664 11.0929 13.9861C11.2126 14.1057 11.3611 14.1655 11.5384 14.1655C11.7158 14.1655 11.8643 14.1057 11.9839 13.9861C12.1036 13.8664 12.1634 13.7179 12.1634 13.5406V7.29051C12.1634 7.11316 12.1036 6.96466 11.9839 6.84501C11.8643 6.72536 11.7158 6.66553 11.5384 6.66553C11.3611 6.66553 11.2126 6.72536 11.0929 6.84501C10.9733 6.96466 10.9134 7.11316 10.9134 7.29051V13.5406ZM5.83331 4.99886V15.5758C5.83331 15.6506 5.85735 15.712 5.90544 15.7601C5.95352 15.8082 6.01496 15.8322 6.08975 15.8322H5.83331V4.99886Z"
                      fill="#5C6B79"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <input
              type="input"
              placeholder="แก้ไขชื่อชั้น"
              class="text-[18px] flex justify-center h-[24px] w-[100%] bg-[#F3F8FD] rounded-[12px]"
              v-model="data.attributes.floorName"
            />
            <vs-button
              @click="updateFloor(data.id, data.attributes.floorName)"
              color="#003765"
              >แก้ไขชื่อชั้น</vs-button
            >
          </div>
        </div>
      </div>
    </div>

    <b-modal
      centered
      v-model="create_type"
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
            {{
              is_edit_type == true
                ? "แก้ไขประเภทห้องและค่าเช่า"
                : "สร้างประเภทห้องและค่าเช่า"
            }}
          </div>
          <div @click="create_type = false" class="cursor-pointer">
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
        <div class="mt-[14px]">
          <div class="text-custom">ประเภทห้องพัก</div>
          <div>
            <input
              class="w-[100%] h-[36px] rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
              v-model="roomTypeName"
            />
          </div>
        </div>
        <div class="mt-[14px]">
          <div class="text-custom">ค่าเช่าห้อง/เดือน</div>
          <div>
            <input
              class="w-[100%] h-[36px] rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
              v-model="roomTypePrice"
            />
          </div>
        </div>
        <div class="flex justify-end mt-[30px]">
          <div>
            <vs-button dark shadow @click="create_type = false">
              <div class="text-custom">ยกเลิก</div>
            </vs-button>
          </div>
          <div>
            <vs-button @click="addNewRoomType()" color="#003765">
              <div class="text-custom">บันทึก</div>
            </vs-button>
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal
      centered
      v-model="create_room"
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
            {{ is_edit == true ? "แก้ไขห้อง" : "เพิ่มห้อง" }}
          </div>
          <div @click="create_room = false" class="cursor-pointer">
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
        <div class="mt-[14px]">
          <div class="grid grid-cols-2 gap-2 w-[100%]">
            <div>
              <div class="text-custom">เลขห้อง</div>
              <div>
                <input
                  class="w-[100%] h-[36px] rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                  v-model="roomName"
                />
              </div>
            </div>
            <div>
              <div class="text-custom">ชั้น</div>
              <div>
                <select
                  placeholder="Select"
                  v-model="roomFloor_id"
                  class="w-[100%] h-[36px] rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
                >
                  <option v-for="data in roomFloor" :value="data.id">
                    {{ data.attributes.floorName }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="text-custom mt-[14px]">ประเภทห้องพัก</div>
          <div>
            <select
              placeholder="Select"
              v-model="room_type_id"
              class="w-[100%] h-[36px] rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
            >
              <option v-for="data in roomType" :value="data.id">
                {{ data.attributes.roomTypeName }}
              </option>
            </select>
          </div>
        </div>
        <!-- <div class="mt-[14px]">
                    <div class="text-custom">ค่าเช่าห้อง/เดือน</div>
                    <div>
                        <input
                            class="w-[100%] h-[36px]  rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]" />
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-2 w-[100%] mt-[14px]">
                    <div>
                        <div class="text-custom">มิเตอร์ค่าน้ำ</div>
                        <div class="mt-[8px]">
                            <vs-input>
                                <template #icon>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_3354_881" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0"
                                            y="0" width="24" height="25">
                                            <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_3354_881)">
                                            <path
                                                d="M12 21.9998C10.0156 21.9998 8.26953 21.3072 6.76172 19.9221C5.25391 18.5369 4.5 16.6627 4.5 14.2994C4.5 12.8125 5.06635 11.1953 6.19905 9.44791C7.33173 7.70048 9.04392 5.79805 11.3356 3.74063C11.4298 3.66088 11.5339 3.59922 11.648 3.55563C11.7621 3.51203 11.8795 3.49023 12 3.49023C12.1205 3.49023 12.2378 3.51203 12.3519 3.55563C12.466 3.59922 12.5701 3.66088 12.6643 3.74063C14.956 5.79805 16.6682 7.70048 17.8009 9.44791C18.9336 11.1953 19.5 12.8125 19.5 14.2994C19.5 16.6627 18.746 18.5369 17.2382 19.9221C15.7304 21.3072 13.9843 21.9998 12 21.9998ZM12 20.4998C13.6769 20.4998 15.0961 19.9232 16.2577 18.77C17.4192 17.6168 18 16.1267 18 14.2998C18 13.1165 17.5083 11.7623 16.525 10.2373C15.5416 8.71231 14.0333 7.01648 12 5.14981C9.96664 7.01648 8.45831 8.71231 7.47497 10.2373C6.49164 11.7623 5.99997 13.1165 5.99997 14.2998C5.99997 16.1267 6.58074 17.6168 7.74227 18.77C8.90382 19.9232 10.3231 20.4998 12 20.4998ZM12.2461 19.346C12.4205 19.3293 12.5641 19.2641 12.6769 19.1503C12.7897 19.0365 12.8461 18.8993 12.8461 18.7386C12.8461 18.5512 12.7846 18.4027 12.6617 18.2931C12.5387 18.1835 12.3816 18.137 12.1903 18.1537C11.507 18.2037 10.7628 18.0033 9.95765 17.5527C9.15253 17.1021 8.64997 16.3184 8.44997 15.2017C8.41664 15.0312 8.34517 14.8972 8.23555 14.7998C8.12593 14.7024 7.99548 14.6537 7.8442 14.6537C7.66215 14.6537 7.51055 14.7219 7.3894 14.8585C7.26825 14.995 7.22948 15.1703 7.27308 15.3844C7.54358 16.837 8.19742 17.8754 9.2346 18.4998C10.2718 19.1242 11.2756 19.4062 12.2461 19.346Z"
                                                fill="#003765" />
                                        </g>
                                    </svg>
                                </template>
                            </vs-input>
                        </div>
                    </div>
                    <div>
                        <div class="text-custom">มิเตอร์ค่าไฟ</div>
                        <div class="mt-[8px]">
                            <vs-input>
                                <template #icon>
                                    <svg width="9" height="17" viewBox="0 0 9 17" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3.66427 13.6L6.59083 8.63457C6.61809 8.58327 6.62082 8.53038 6.59901 8.4759C6.57719 8.4214 6.53902 8.39415 6.48449 8.39415H4.10106L5.58966 2.3173C5.61148 2.24038 5.60058 2.16827 5.55695 2.10095C5.51331 2.03363 5.45878 1.99997 5.39335 1.99997H1.53769C1.46134 1.99997 1.39863 2.02882 1.34957 2.08652C1.30048 2.14423 1.27594 2.21795 1.27594 2.3077V9.69225C1.27594 9.782 1.30048 9.85573 1.34957 9.91343C1.39863 9.97113 1.46134 9.99998 1.53769 9.99998H3.66427V13.6ZM7.90928 9.0134L3.44345 16.6306C3.36384 16.7678 3.26487 16.8582 3.14655 16.9018C3.02823 16.9454 2.91072 16.9454 2.79402 16.9018C2.67734 16.8582 2.58055 16.7787 2.50366 16.6633C2.42677 16.5479 2.38833 16.4082 2.38833 16.2441V11.5H1.53769C1.11347 11.5 0.751132 11.3233 0.45067 10.9701C0.150223 10.6169 0 10.191 0 9.69225V2.3077C0 1.80898 0.150223 1.38302 0.45067 1.02982C0.751132 0.676608 1.11347 0.5 1.53769 0.5H5.65507C6.07603 0.5 6.41792 0.6875 6.68074 1.0625C6.94357 1.4375 7.021 1.85257 6.91303 2.3077L5.79086 6.8942H6.95233C7.41363 6.8942 7.7547 7.13362 7.97554 7.61245C8.19637 8.0913 8.17428 8.55828 7.90928 9.0134Z"
                                            fill="#003765" />
                                    </svg>
                                </template>
                            </vs-input>
                        </div>
                    </div>
                </div> -->
        <div class="flex justify-end mt-[30px]">
          <div>
            <vs-button dark shadow @click="create_room = false">
              <div class="text-custom">ยกเลิก</div>
            </vs-button>
          </div>
          <div>
            <vs-button @click="addNewRoom()" color="#003765">
              <div class="text-custom">บันทึก</div>
            </vs-button>
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal
      centered
      v-model="createFloor"
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
            เพิ่มชั้น
          </div>
          <div @click="createFloor = false" class="cursor-pointer">
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
        <div class="mt-[14px]">
          <div class="text-custom">ชื่อชั้น</div>
          <div
            v-for="(name, index) in floorNamesToCreate"
            :key="index"
            class="flex items-center mt-[8px] gap-[8px]"
          >
            <input
              class="w-[100%] h-[36px] rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA]"
              v-model="floorNamesToCreate[index]"
              :placeholder="'เช่น ชั้น ' + (index + 1)"
            />
            <div
              v-if="floorNamesToCreate.length > 1"
              @click="removeFloorNameRow(index)"
              class="h-[36px] w-[36px] flex-shrink-0 flex items-center justify-center rounded-[12px] bg-[#FFE1E8] text-[#EA2F5C] cursor-pointer text-[18px] font-bold select-none"
              title="ลบแถวนี้"
            >
              −
            </div>
          </div>
          <div
            @click="addFloorNameRow()"
            class="mt-[10px] h-[36px] w-[36px] flex items-center justify-center rounded-[12px] bg-[#E5F0FA] text-[#003765] cursor-pointer text-[18px] font-bold select-none"
            title="เพิ่มแถว"
          >
            +
          </div>
        </div>
        <div class="flex justify-end mt-[30px]">
          <div>
            <vs-button dark shadow @click="createFloor = false">
              <div class="text-custom">ยกเลิก</div>
            </vs-button>
          </div>
          <div>
            <vs-button @click="create_floors()" color="#003765">
              <div class="text-custom">บันทึก</div>
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
  data() {
    return {
      tab: 1,
      tab_floor: "0",
      name_floor: "",
      value: 0,
      create_type: false,
      create_room: false,
      createFloor: false,
      room: [],
      roomType: [],
      room_type_id: "",
      floorRoom: [],
      roomFloor: [],
      roomName: "",
      roomTypeName: "",
      roomTypePrice: 0,
      floorNamesToCreate: [""],
      roomFloor_id: "",
      room_id: "",
      filter: {
        floor: 0,
      },
      is_edit: false,
      is_edit_type: false,
      roomTypeId: "",
    };
  },
  created() {
    const loading = this.$vs.loading({});
    setTimeout(() => {
      loading.close();
    }, 1000);
  },
  mounted() {
    this.getFloorRoom();
    this.getTypeRoom();
    setTimeout(() => {
      this.getUserRoom();
    }, 1000);
  },
  methods: {
    getFloorStorageKey() {
      return `settingRoomSelectedFloor_${this.$store.state.building}`;
    },
    toArabicDigits(value) {
      const thaiDigits = "๐๑๒๓๔๕๖๗๘๙";
      return String(value || "").replace(/[๐-๙]/g, (digit) =>
        thaiDigits.indexOf(digit)
      );
    },
    extractFloorNumber(floorName) {
      const normalized = this.toArabicDigits(floorName);
      const match = normalized.match(/-?\d+(\.\d+)?/);
      return match ? Number(match[0]) : Number.POSITIVE_INFINITY;
    },
    sortFloorsByName(floors) {
      return [...(floors || [])].sort((a, b) => {
        const aName = a?.attributes?.floorName || "";
        const bName = b?.attributes?.floorName || "";
        const numDiff =
          this.extractFloorNumber(aName) - this.extractFloorNumber(bName);
        if (numDiff !== 0) {
          return numDiff;
        }
        return aName.localeCompare(bName, "th", {
          numeric: true,
          sensitivity: "base",
        });
      });
    },
    selectFloor(floorData, index) {
      this.tab_floor = index;
      this.filter.floor = floorData.id;
      this.name_floor = floorData.attributes.floorName;
      localStorage.setItem(this.getFloorStorageKey(), String(floorData.id));
      this.getUserRoom();
    },
    getUserRoom() {
      const loading = this.$vs.loading();
      this.room = [];
      fetch(
        "https://api.resguru.app/api" +
          "/rooms?filters[room_building][id][$eq]=" +
          this.$store.state.building +
          "&filters[building_floor][id][$eq]=" +
          this.filter.floor +
          "&sort[0]=RoomNumber&populate=deep,3"
      )
        .then((response) => response.json())
        .then((resp) => {
          console.log("Return from getRoom()", resp.data);
          this.room = resp.data;
        })
        .finally(() => {
          loading.close();
        });
    },
    getUserRoomDetail(id) {
      const loading = this.$vs.loading();
      fetch("https://api.resguru.app/api" + "/rooms/" + id + "?populate=deep,3")
        .then((response) => response.json())
        .then((resp) => {
          console.log(resp);
          this.room_id = resp.data.id;
          this.roomName = resp.data.attributes.RoomNumber;
          this.room_type_id = resp.data.attributes.room_type.data.id;
          this.roomFloor_id = resp.data.attributes.building_floor.data.id;
        })
        .finally(() => {
          this.create_room = true;
          console.log(this.room_type);
          loading.close();
        });
    },
    getTypeRoom() {
      const loading = this.$vs.loading();
      fetch(
        "https://api.resguru.app/api" +
          "/room-types?filters[roomType_building][id][$eq]=" +
          this.$store.state.building +
          "&populate=*"
      )
        .then((response) => response.json())
        .then((resp) => {
          console.log("Return from getRoomType()", resp.data);
          this.roomType = resp.data;
        })
        .finally(() => {
          loading.close();
        });
    },
    getTypeRoomDetail(id) {
      const loading = this.$vs.loading();
      fetch("https://api.resguru.app/api" + "/room-types/" + id)
        .then((response) => response.json())
        .then((resp) => {
          this.roomTypeId = resp.data.id;
          this.roomTypeName = resp.data.attributes.roomTypeName;
          this.roomTypePrice = resp.data.attributes.roomPrice;
        })
        .finally(() => {
          loading.close();
        });
    },
    getFloorRoom() {
      this.roomFloor = [];
      const loading = this.$vs.loading();
      fetch(
        "https://api.resguru.app/api" +
          "/building-floors?filters[building][id][$eq]=" +
          this.$store.state.building +
          "&populate=deep,2"
      )
        .then((response) => response.json())
        .then((resp) => {
          console.log("Return from getRoomFloor()", resp.data);
          this.roomFloor = this.sortFloorsByName(resp.data);
          const savedFloorId = localStorage.getItem(this.getFloorStorageKey());
          const preferredFloorId = this.filter.floor || savedFloorId;
          const selectedFloor =
            this.roomFloor.find(
              (item) => String(item.id) === String(preferredFloorId)
            ) || this.roomFloor[0];
          if (selectedFloor) {
            this.filter.floor = selectedFloor.id;
            this.name_floor = selectedFloor.attributes.floorName;
            this.tab_floor = this.roomFloor.findIndex(
              (item) => String(item.id) === String(selectedFloor.id)
            );
            localStorage.setItem(
              this.getFloorStorageKey(),
              String(selectedFloor.id)
            );
          }
        })
        .finally(() => {
          console.log(this.filter.floor);
          loading.close();
        });
    },
    addNewRoom() {
      if (
        this.roomName != "" &&
        this.room_type_id != "" &&
        this.roomFloor_id != ""
      ) {
        const loading = this.$vs.loading();
        fetch(
          "https://api.resguru.app/api" +
            "/rooms?filters[room_building][id][$eq]=" +
            this.$store.state.building +
            "&pagination[pageSize]=100"
        )
          .then((response) => response.json())
          .then((resp) => {
            console.log("numberRoom", resp.data);
            
            // Filter out the current room when editing
            let roomsToCheck = resp.data;
            if (this.is_edit && this.room_id) {
              roomsToCheck = resp.data.filter(item => item.id != this.room_id);
            }
            
            const found = roomsToCheck.some(
              (item) => item.attributes.RoomNumber === this.roomName
            );
            
            console.log(found);
            if (found == false) {
              if (this.is_edit == true) {
                axios
                  .put(`https://api.resguru.app/api/rooms/` + this.room_id, {
                    data: {
                      RoomNumber: this.roomName,
                      room_type: this.room_type_id,
                      building_floor: this.roomFloor_id,
                    },
                  })
                  .then((resp) => {
                    this.$showNotification("#3A89CB", "แก้ไขห้องสำเร็จ");
                  })
                  .catch((error) => {
                    const errorMessage = error.message
                      ? error.message
                      : "Error updating information";
                    this.$showNotification("danger", errorMessage);
                  })
                  .finally(() => {
                    this.getUserRoom();
                    this.create_room = false;
                  });
              } else {
                axios
                  .post(`https://api.resguru.app/api/rooms/`, {
                    data: {
                      RoomNumber: this.roomName,
                      room_building: this.$store.state.building,
                      room_type: this.room_type_id,
                      building_floor: this.roomFloor_id,
                    },
                  })
                  .then((resp) => {
                    this.$showNotification("#3A89CB", "สร้างห้องสำเร็จ");
                  })
                  .catch((error) => {
                    const errorMessage = error.message
                      ? error.message
                      : "Error updating information";
                    this.$showNotification("danger", errorMessage);
                  })
                  .finally(() => {
                    this.getUserRoom();
                    this.create_room = false;
                  });
              }
            } else {
              this.$showNotification("danger", "หมายเลขห้องซ้ำ");
            }
          })
          .finally(() => {
            loading.close();
          });
      } else {
        this.$showNotification("danger", "กรุณากรอกข้อมูลให้ครบ");
      }
    },
    updateRoomType(id, eachRoomType) {
      console.log("ID:", id);
      console.log("RoomType", eachRoomType);
      axios
        .put(`https://api.resguru.app/api/rooms/${id}`, {
          data: {
            room_type: eachRoomType,
          },
        })
        .then((resp) => {
          this.$showNotification("#3A89CB", "แก้ไขห้องสำเร็จ");
        })
        .catch((error) => {
          const errorMessage = error.message
            ? error.message
            : "Error updating information";
          this.$showNotification("danger", errorMessage);
        })
        .finally(() => {
          this.getTypeRoom();
        });
    },
    addNewRoomType() {
      if (this.is_edit_type == true) {
        axios
          .put(`https://api.resguru.app/api/room-types/` + this.roomTypeId, {
            data: {
              roomTypeName: this.roomTypeName,
              roomPrice: this.roomTypePrice,
              roomType_building: this.$store.state.building,
            },
          })
          .then((resp) => {
            this.$showNotification("#3A89CB", "สร้างประเภทห้องสำเร็จ");
          })
          .catch((error) => {
            const errorMessage = error.message
              ? error.message
              : "Error updating information";
            this.$showNotification("danger", errorMessage);
          })
          .finally(() => {
            this.create_type = false;
            this.getTypeRoom();
          });
      } else {
        axios
          .post(`https://api.resguru.app/api/room-types/`, {
            data: {
              roomTypeName: this.roomTypeName,
              roomPrice: this.roomTypePrice,
              roomType_building: this.$store.state.building,
            },
          })
          .then((resp) => {
            this.$showNotification("#3A89CB", "สร้างประเภทห้องสำเร็จ");
          })
          .catch((error) => {
            const errorMessage = error.message
              ? error.message
              : "Error updating information";
            this.$showNotification("danger", errorMessage);
          })
          .finally(() => {
            this.create_type = false;
            this.getTypeRoom();
          });
      }
    },
    updateRoomPrice(id, roomPrice) {
      axios
        .put(`https://api.resguru.app/api/room-types/${id}`, {
          data: {
            roomPrice: roomPrice,
          },
        })
        .then((resp) => {
          this.$showNotification("#3A89CB", "แก้ไขประเภทห้องสำเร็จ");
        })
        .catch((error) => {
          const errorMessage = error.message
            ? error.message
            : "Error updating information";
          this.$showNotification("danger", errorMessage);
        })
        .finally(() => {
          this.getTypeRoom();
        });
    },
    addFloorNameRow() {
      this.floorNamesToCreate.push("");
    },
    removeFloorNameRow(index) {
      this.floorNamesToCreate.splice(index, 1);
    },
    create_floors() {
      // Ignore blank rows (e.g. an empty trailing row left over after
      // typing) rather than forcing the user to remove them manually.
      const trimmedNames = this.floorNamesToCreate
        .map((name) => (name || "").trim())
        .filter((name) => name !== "");

      if (trimmedNames.length === 0) {
        this.$showNotification("danger", "กรุณากรอกชื่อชั้นอย่างน้อย 1 ชั้น");
        return;
      }

      // Duplicate check within the batch itself (case-insensitive).
      const lowerNames = trimmedNames.map((name) => name.toLowerCase());
      const hasDuplicateInBatch = lowerNames.some(
        (name, index) => lowerNames.indexOf(name) !== index
      );
      if (hasDuplicateInBatch) {
        this.$showNotification("danger", "มีชื่อชั้นซ้ำกันในรายการที่กรอก");
        return;
      }

      // Duplicate check against floors that already exist.
      const existingLowerNames = this.roomFloor.map((item) =>
        (item.attributes.floorName || "").trim().toLowerCase()
      );
      const alreadyExists = trimmedNames.find((name) =>
        existingLowerNames.includes(name.toLowerCase())
      );
      if (alreadyExists) {
        this.$showNotification("danger", `มีชื่อชั้น "${alreadyExists}" อยู่แล้ว`);
        return;
      }

      const loading = this.$vs.loading();
      Promise.allSettled(
        trimmedNames.map((floorName) =>
          axios.post(`https://api.resguru.app/api/building-floors/`, {
            data: {
              floorName,
              building: this.$store.state.building,
            },
          })
        )
      )
        .then((results) => {
          const failedCount = results.filter(
            (result) => result.status === "rejected"
          ).length;
          const successCount = results.length - failedCount;

          if (failedCount === 0) {
            this.$showNotification(
              "#3A89CB",
              `สร้างชั้นสำเร็จ ${successCount} ชั้น`
            );
          } else if (successCount === 0) {
            this.$showNotification("danger", "สร้างชั้นไม่สำเร็จ");
          } else {
            this.$showNotification(
              "danger",
              `สร้างสำเร็จ ${successCount} ชั้น, ไม่สำเร็จ ${failedCount} ชั้น`
            );
          }
        })
        .finally(() => {
          loading.close();
          this.createFloor = false;
          this.getFloorRoom();
        });
    },
    updateFloor(floorID, buildFloorName) {
      const trimmedName = (buildFloorName || "").trim();
      if (trimmedName === "") {
        this.$showNotification("danger", "กรุณากรอกชื่อชั้น");
        return;
      }
      const isDuplicate = this.roomFloor.some(
        (item) =>
          String(item.id) !== String(floorID) &&
          (item.attributes.floorName || "").trim().toLowerCase() ===
            trimmedName.toLowerCase()
      );
      if (isDuplicate) {
        this.$showNotification("danger", "มีชื่อชั้นนี้อยู่แล้ว");
        return;
      }

      axios
        .put(`https://api.resguru.app/api/building-floors/${floorID}`, {
          data: {
            floorName: trimmedName,
          },
        })
        .then((resp) => {
          this.$showNotification("#3A89CB", "แก้ไขชั้นสำเร็จ");
        })
        .catch((error) => {
          const errorMessage = error.message
            ? error.message
            : "Error updating information";
          this.$showNotification("danger", errorMessage);
        })
        .finally(() => {
          this.getFloorRoom();
        });
    },
    removeFloor(floorID) {
      fetch(
        "https://api.resguru.app/api" +
          "/rooms?filters[building_floor][id][$eq]=" +
          floorID +
          "&pagination[pageSize]=1"
      )
        .then((response) => response.json())
        .then((resp) => {
          if (resp.data && resp.data.length > 0) {
            this.$showNotification(
              "danger",
              "ไม่สามารถลบชั้นนี้ได้ เนื่องจากยังมีห้องอยู่ในชั้นนี้"
            );
            return;
          }

          if (confirm("คุณต้องการลบชั้นนี้ใช่หรือไม่?")) {
            axios
              .delete(`https://api.resguru.app/api/building-floors/${floorID}`)
              .then((resp) => {
                this.$showNotification("#3A89CB", "ลบชั้นสำเร็จ");
              })
              .catch((error) => {
                const errorMessage = error.message
                  ? error.message
                  : "Error updating information";
                this.$showNotification("danger", errorMessage);
              })
              .finally(() => {
                this.getFloorRoom();
              });
          }
        })
        .catch((error) => {
          const errorMessage = error.message
            ? error.message
            : "Error checking rooms on this floor";
          this.$showNotification("danger", errorMessage);
        });
    },
  },
};
</script>
<style>
.vs-input {
  width: 100% !important;
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
