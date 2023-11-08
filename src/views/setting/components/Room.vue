<template>
    <div>
        <div class="bg-[white] pt-[14px] pl-[24px] pr-[24px] " :class="tab == 1 ? 'rounded-b-lg' : 'rounded-t-lg'">
            <div class="bg-[white] ">
                <div class="flex justify-start items-center rounded-[12px] ">
                    <div class="bg-[#F3F7FA] rounded-[12px]">
                        <div class="flex justify-start items-center">
                            <div @click="tab = 1" class="cursor-pointer "
                                :class="tab == 1 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[12px] text-[white]' : 'text-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] flex justify-center items-center'">
                                ผังห้อง</div>
                            <div @click="tab = 2" class="cursor-pointer ml-[8px]"
                                :class="tab == 2 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[12px] text-[white]' : 'text-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] flex justify-center items-center'">
                                รายการประเภทห้องพัก 
                            </div>
                            <div @click="tab = 3" class="cursor-pointer ml-[8px]"
                                :class="tab == 3 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[12px] text-[white]' : 'text-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] flex justify-center items-center'">
                                รายการจำนวนชั้นของตึก
                            </div>
                        </div>
                    </div>
                </div>
                <div class="h-[auto] bg-[white] rounded-[12px] flex flex-col justify-end mt-[14px]" v-if="tab == 1">
                    <div>
                        <div class="flex">
                            <div class="h-[36px] pl-[8px] pr-[8px] bg-[#003765] flex cursor-pointer  justify-center rounded-[12px] mt-[12px]"
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
                            </div>
                            <div @click="type = true"
                                class="h-[36px]  flex  justify-center rounded-[12px] mt-[12px] ml-[28px] cursor-pointer">
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
                                                fill="#003765" />
                                        </g>
                                    </svg>
                                </div>
                                <div class=" font-bold ml-[8px] flex justify-center items-center">กำหนดประเภทห้องและค่าเช่า
                                </div>
                            
                                
                            </div>
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
                                                <div class="text-custom">ห้องไกล้หมดสัญญา</div>
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
                    <div class="flex items-center mb-[8px] mt-[14px]">
                        <div class="mr-[14px]">
                            <vs-select placeholder="เลือกอาคาร">
                                <vs-option label="อาคาร A">
                                    อาคาร A
                                </vs-option>
                                <vs-option label="อาคาร B" >
                                    อาคาร B
                                </vs-option>
                            </vs-select>
                        </div>
                        <div v-for="data in roomFloor">
                        <div class="text-[#8396A6] cursor-pointer mr-[8px]"> อาคาร {{ data.attributes.building.data.attributes.buildingName }} - ชั้น {{ data.attributes.floorName }} </div>
                        
                        </div>
                        <!-- <div class="text-[#8396A6] cursor-pointer">อาคาร A ชั้น 2</div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-[24px] bg-[white] pt-[14px] pb-[24px] pl-[24px] pr-[24px] rounded-[12px]" v-if="tab == 1">
            <div class="text-[24px] font-bold mt-[14px]">อาคาร A ชั้น 1</div>
            <div class="grid grid-cols-4 w-[100%] gap-4 mt-[14px] ">
                <div class="rounded-[16px]  p-[14px] h-[202px] border cursor-pointer" v-for="data in room">
                    <div class="flex justify-between">
                        <div class="text-[18px] font-bold text-[#003765]">ห้อง {{ data.attributes.RoomNumber }}</div>
                        <div class="flex">
                            <vs-checkbox v-model="option" color="#003765"> </vs-checkbox>
                        </div>
                    </div>
                    <div class="mt-[24px]">
                        <div class="flex justify-between  h-[100%]">
                            <div class="text-[12px] text-[#5C6B79] flex items-center">ประเภทห้อง</div>
                            <div class="mt-[]">
                                <select placeholder="Select"
                                    class="w-[200px] h-[32px] border rounded-[12px] pl-[8px] pr-[8px]"
                                    :class="value == 1 ? 'bg-[#FFF2BC] text-[#EEA10B]' : ''">
                                    
                                    <option  v-for="data in roomType">
                                        {{data.attributes.roomTypeName}}
                                    </option>
                                    
                                    <!-- <option label="เลือก" value="0" disabled>
                                        เลือก
                                    </option>
                                    <option label="ห้องพร้อมเฟอร์นิเจอร์" value="1">
                                        ห้องพร้อมเฟอร์นิเจอร์
                                    </option>
                                    <option label="ห้อง Building Room" value="1">
                                        ห้อง Building Room
                                    </option>
                                    <option label="ห้อง Delux Room" value="1">
                                        ห้อง Delux Room
                                    </option> -->
                                </select>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 w-[100%] gap-4 mt-[14px] ">
                            <div class="w-[100%]">
                                <div v-if="data.attributes.water_fees.data[0]">
                                <vs-input v-model="data.attributes.water_fees.data[0].attributes.meterUnit" disabled>
                                    <template #icon>
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_3458_19558" style="mask-type:alpha" maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="24" height="25">
                                                <rect y="0.457031" width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_3458_19558)">
                                                <path
                                                    d="M12 21.9568C10.0156 21.9568 8.26953 21.2642 6.76172 19.8791C5.25391 18.494 4.5 16.6197 4.5 14.2564C4.5 12.7695 5.06635 11.1524 6.19905 9.40494C7.33173 7.65751 9.04392 5.75508 11.3356 3.69767C11.4298 3.61792 11.5339 3.55625 11.648 3.51267C11.7621 3.46907 11.8795 3.44727 12 3.44727C12.1205 3.44727 12.2378 3.46907 12.3519 3.51267C12.466 3.55625 12.5701 3.61792 12.6643 3.69767C14.956 5.75508 16.6682 7.65751 17.8009 9.40494C18.9336 11.1524 19.5 12.7695 19.5 14.2564C19.5 16.6197 18.746 18.494 17.2382 19.8791C15.7304 21.2642 13.9843 21.9568 12 21.9568ZM12 20.4568C13.6769 20.4568 15.0961 19.8802 16.2577 18.727C17.4192 17.5738 18 16.0838 18 14.2568C18 13.0735 17.5083 11.7193 16.525 10.1943C15.5416 8.66934 14.0333 6.97351 12 5.10684C9.96664 6.97351 8.45831 8.66934 7.47497 10.1943C6.49164 11.7193 5.99997 13.0735 5.99997 14.2568C5.99997 16.0838 6.58074 17.5738 7.74227 18.727C8.90382 19.8802 10.3231 20.4568 12 20.4568ZM12.2461 19.303C12.4205 19.2863 12.5641 19.2211 12.6769 19.1073C12.7897 18.9935 12.8461 18.8563 12.8461 18.6957C12.8461 18.5082 12.7846 18.3597 12.6617 18.2501C12.5387 18.1405 12.3816 18.094 12.1903 18.1107C11.507 18.1607 10.7628 17.9604 9.95765 17.5097C9.15253 17.0591 8.64997 16.2754 8.44997 15.1588C8.41664 14.9882 8.34517 14.8543 8.23555 14.7568C8.12593 14.6594 7.99548 14.6107 7.8442 14.6107C7.66215 14.6107 7.51055 14.679 7.3894 14.8155C7.26825 14.952 7.22948 15.1274 7.27308 15.3415C7.54358 16.794 8.19742 17.8325 9.2346 18.4568C10.2718 19.0812 11.2756 19.3632 12.2461 19.303Z"
                                                    fill="#003765" />
                                            </g>
                                        </svg>
                                    </template>
                                </vs-input>
                                </div>
                                <div v-else>
                                    <vs-input disabled>
                                    <template #icon>
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_3458_19558" style="mask-type:alpha" maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="24" height="25">
                                                <rect y="0.457031" width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_3458_19558)">
                                                <path
                                                    d="M12 21.9568C10.0156 21.9568 8.26953 21.2642 6.76172 19.8791C5.25391 18.494 4.5 16.6197 4.5 14.2564C4.5 12.7695 5.06635 11.1524 6.19905 9.40494C7.33173 7.65751 9.04392 5.75508 11.3356 3.69767C11.4298 3.61792 11.5339 3.55625 11.648 3.51267C11.7621 3.46907 11.8795 3.44727 12 3.44727C12.1205 3.44727 12.2378 3.46907 12.3519 3.51267C12.466 3.55625 12.5701 3.61792 12.6643 3.69767C14.956 5.75508 16.6682 7.65751 17.8009 9.40494C18.9336 11.1524 19.5 12.7695 19.5 14.2564C19.5 16.6197 18.746 18.494 17.2382 19.8791C15.7304 21.2642 13.9843 21.9568 12 21.9568ZM12 20.4568C13.6769 20.4568 15.0961 19.8802 16.2577 18.727C17.4192 17.5738 18 16.0838 18 14.2568C18 13.0735 17.5083 11.7193 16.525 10.1943C15.5416 8.66934 14.0333 6.97351 12 5.10684C9.96664 6.97351 8.45831 8.66934 7.47497 10.1943C6.49164 11.7193 5.99997 13.0735 5.99997 14.2568C5.99997 16.0838 6.58074 17.5738 7.74227 18.727C8.90382 19.8802 10.3231 20.4568 12 20.4568ZM12.2461 19.303C12.4205 19.2863 12.5641 19.2211 12.6769 19.1073C12.7897 18.9935 12.8461 18.8563 12.8461 18.6957C12.8461 18.5082 12.7846 18.3597 12.6617 18.2501C12.5387 18.1405 12.3816 18.094 12.1903 18.1107C11.507 18.1607 10.7628 17.9604 9.95765 17.5097C9.15253 17.0591 8.64997 16.2754 8.44997 15.1588C8.41664 14.9882 8.34517 14.8543 8.23555 14.7568C8.12593 14.6594 7.99548 14.6107 7.8442 14.6107C7.66215 14.6107 7.51055 14.679 7.3894 14.8155C7.26825 14.952 7.22948 15.1274 7.27308 15.3415C7.54358 16.794 8.19742 17.8325 9.2346 18.4568C10.2718 19.0812 11.2756 19.3632 12.2461 19.303Z"
                                                    fill="#003765" />
                                            </g>
                                        </svg>
                                    </template>
                                </vs-input>
                                </div>
                            </div>
                            <div class="w-[100%]">
                                <div v-if=data.attributes.electric_fees.data[0]>
                                <vs-input v-model=data.attributes.electric_fees.data[0].attributes.electicUnit disabled >
                                    <template #icon>
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_3458_17710" style="mask-type:alpha" maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="24" height="25">
                                                <rect y="0.457031" width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_3458_17710)">
                                                <path
                                                    d="M11.6643 17.557L14.5908 12.5916C14.6181 12.5403 14.6208 12.4874 14.599 12.4329C14.5772 12.3784 14.539 12.3512 14.4845 12.3512H12.1011L13.5897 6.27433C13.6115 6.19741 13.6006 6.1253 13.557 6.05798C13.5133 5.99066 13.4588 5.95701 13.3934 5.95701H9.53769C9.46134 5.95701 9.39863 5.98586 9.34957 6.04356C9.30048 6.10126 9.27594 6.17498 9.27594 6.26473V13.6493C9.27594 13.739 9.30048 13.8128 9.34957 13.8705C9.39863 13.9282 9.46134 13.957 9.53769 13.957H11.6643V17.557ZM15.9093 12.9704L11.4434 20.5877C11.3638 20.7248 11.2649 20.8152 11.1465 20.8588C11.0282 20.9024 10.9107 20.9024 10.794 20.8588C10.6773 20.8152 10.5806 20.7357 10.5037 20.6204C10.4268 20.505 10.3883 20.3652 10.3883 20.2011V15.457H9.53769C9.11347 15.457 8.75113 15.2804 8.45067 14.9272C8.15022 14.574 8 14.148 8 13.6493V6.26473C8 5.76601 8.15022 5.34006 8.45067 4.98686C8.75113 4.63364 9.11347 4.45703 9.53769 4.45703H13.6551C14.076 4.45703 14.4179 4.64453 14.6807 5.01953C14.9436 5.39453 15.021 5.8096 14.913 6.26473L13.7909 10.8512H14.9523C15.4136 10.8512 15.7547 11.0906 15.9755 11.5695C16.1964 12.0483 16.1743 12.5153 15.9093 12.9704Z"
                                                    fill="#003765" />
                                            </g>
                                        </svg>
                                    </template>
                                </vs-input>
                                </div>
                                <div v-else>
                                    <vs-input  disabled >
                                    <template #icon>
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_3458_17710" style="mask-type:alpha" maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="24" height="25">
                                                <rect y="0.457031" width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_3458_17710)">
                                                <path
                                                    d="M11.6643 17.557L14.5908 12.5916C14.6181 12.5403 14.6208 12.4874 14.599 12.4329C14.5772 12.3784 14.539 12.3512 14.4845 12.3512H12.1011L13.5897 6.27433C13.6115 6.19741 13.6006 6.1253 13.557 6.05798C13.5133 5.99066 13.4588 5.95701 13.3934 5.95701H9.53769C9.46134 5.95701 9.39863 5.98586 9.34957 6.04356C9.30048 6.10126 9.27594 6.17498 9.27594 6.26473V13.6493C9.27594 13.739 9.30048 13.8128 9.34957 13.8705C9.39863 13.9282 9.46134 13.957 9.53769 13.957H11.6643V17.557ZM15.9093 12.9704L11.4434 20.5877C11.3638 20.7248 11.2649 20.8152 11.1465 20.8588C11.0282 20.9024 10.9107 20.9024 10.794 20.8588C10.6773 20.8152 10.5806 20.7357 10.5037 20.6204C10.4268 20.505 10.3883 20.3652 10.3883 20.2011V15.457H9.53769C9.11347 15.457 8.75113 15.2804 8.45067 14.9272C8.15022 14.574 8 14.148 8 13.6493V6.26473C8 5.76601 8.15022 5.34006 8.45067 4.98686C8.75113 4.63364 9.11347 4.45703 9.53769 4.45703H13.6551C14.076 4.45703 14.4179 4.64453 14.6807 5.01953C14.9436 5.39453 15.021 5.8096 14.913 6.26473L13.7909 10.8512H14.9523C15.4136 10.8512 15.7547 11.0906 15.9755 11.5695C16.1964 12.0483 16.1743 12.5153 15.9093 12.9704Z"
                                                    fill="#003765" />
                                            </g>
                                        </svg>
                                    </template>
                                    </vs-input>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex pl-[8px] pr-[8px] pt-[4px] pb-[4px] rounded-[12px] border justify-between mt-[8px] text-[#0B9A3C]">
                            <div>ราคา</div>
                            <div>3500</div>
                        </div>
                    </div>
                </div>
                <div @click="create_room = true"
                    class="rounded-[16px]  p-[14px] h-[202px] border cursor-pointer flex flex-col items-center justify-center">
                    <div>
                        <svg width="68" height="69" viewBox="0 0 68 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="34" cy="34.457" r="34" fill="#F3F7FA" />
                            <mask id="mask0_1373_22044" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="6" y="7"
                                width="56" height="55">
                                <rect x="6.80078" y="7.25586" width="54.4" height="54.4" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_1373_22044)">
                                <path
                                    d="M33.9984 49.7561C33.5165 49.7561 33.1129 49.5932 32.7874 49.2674C32.4619 48.9416 32.2992 48.5379 32.2992 48.0562V36.1561H20.3992C19.9175 36.1561 19.5138 35.9932 19.188 35.6672C18.8621 35.3412 18.6992 34.9373 18.6992 34.4555C18.6992 33.9736 18.8621 33.5699 19.188 33.2444C19.5138 32.919 19.9175 32.7562 20.3992 32.7562H32.2992V20.8562C32.2992 20.3745 32.4622 19.9708 32.7881 19.6449C33.1141 19.3191 33.518 19.1562 33.9999 19.1562C34.4818 19.1562 34.8855 19.3191 35.2109 19.6449C35.5364 19.9708 35.6991 20.3745 35.6991 20.8562V32.7562H47.5992C48.0808 32.7562 48.4846 32.9192 48.8104 33.2452C49.1362 33.5712 49.2991 33.9751 49.2991 34.4569C49.2991 34.9388 49.1362 35.3425 48.8104 35.668C48.4846 35.9934 48.0808 36.1561 47.5992 36.1561H35.6991V48.0562C35.6991 48.5379 35.5361 48.9416 35.2102 49.2674C34.8842 49.5932 34.4803 49.7561 33.9984 49.7561Z"
                                    fill="#B9CCDC" />
                            </g>
                        </svg>
                    </div>
                    <div class="text-[#5C6B79] text-[20px] mt-[8px]">เพิ่มห้อง</div>
                </div>
            </div>
        </div>
        <div class=" bg-[white] pt-[14px] pb-[24px] pl-[24px] pr-[24px]  rounded-b-lg" v-if="tab == 2">
            <div class="text-[16px] font-bold mt-[24px]">รายการประเภทห้องพัก</div>
            <div class="grid grid-cols-5 gap-4 mt-[14px] w-[100%]">
                <div class="border h-[97px] rounded-[12px] pl-[8px] pr-[8px] pt-[12px] pb-[12px]" v-for="data in roomType">
                    <div class="flex flex-col justify-between h-[100%]">
                        <div class="flex justify-between">
                            <div class="text-[16px]">{{ data.attributes.roomTypeName }}</div>
                            <div>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="10.0013" cy="4.16667" rx="1.66667" ry="1.66667"
                                        transform="rotate(90 10.0013 4.16667)" fill="#5C6B79" />
                                    <circle cx="10.0013" cy="10.0007" r="1.66667" transform="rotate(90 10.0013 10.0007)"
                                        fill="#5C6B79" />
                                    <ellipse cx="10.0013" cy="15.8327" rx="1.66667" ry="1.66667"
                                        transform="rotate(90 10.0013 15.8327)" fill="#5C6B79" />
                                </svg>
                            </div>
                        </div>
                        <div
                            class="flex justify-between border rounded-[12px] pl-[14px] pr-[14px] pt-[4px] pb-[4px] text-[#0B9A3C]">
                            <div>ราคา</div>
                            <div>{{ data.attributes.roomPrice }}</div>
                        </div>
                    </div>
                </div>
                <div class="border h-[97px] rounded-[12px] pl-[8px] pr-[8px] pt-[12px] pb-[12px] flex flex-col justify-center items-center cursor-pointer"
                    @click="create_type = true">
                    <div>
                        <svg width="60" height="60" viewBox="0 0 68 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="34" cy="34.457" r="34" fill="#F3F7FA" />
                            <mask id="mask0_1373_22044" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="6" y="7"
                                width="56" height="55">
                                <rect x="6.80078" y="7.25586" width="54.4" height="54.4" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_1373_22044)">
                                <path
                                    d="M33.9984 49.7561C33.5165 49.7561 33.1129 49.5932 32.7874 49.2674C32.4619 48.9416 32.2992 48.5379 32.2992 48.0562V36.1561H20.3992C19.9175 36.1561 19.5138 35.9932 19.188 35.6672C18.8621 35.3412 18.6992 34.9373 18.6992 34.4555C18.6992 33.9736 18.8621 33.5699 19.188 33.2444C19.5138 32.919 19.9175 32.7562 20.3992 32.7562H32.2992V20.8562C32.2992 20.3745 32.4622 19.9708 32.7881 19.6449C33.1141 19.3191 33.518 19.1562 33.9999 19.1562C34.4818 19.1562 34.8855 19.3191 35.2109 19.6449C35.5364 19.9708 35.6991 20.3745 35.6991 20.8562V32.7562H47.5992C48.0808 32.7562 48.4846 32.9192 48.8104 33.2452C49.1362 33.5712 49.2991 33.9751 49.2991 34.4569C49.2991 34.9388 49.1362 35.3425 48.8104 35.668C48.4846 35.9934 48.0808 36.1561 47.5992 36.1561H35.6991V48.0562C35.6991 48.5379 35.5361 48.9416 35.2102 49.2674C34.8842 49.5932 34.4803 49.7561 33.9984 49.7561Z"
                                    fill="#B9CCDC" />
                            </g>
                        </svg>
                    </div>
                    <div class="text-[#5C6B79] font-bold mt-[4px]">สร้างประเภทห้องพักและห้องเช่า</div>
                </div>
            </div>
        </div>

        <div class=" bg-[white] pt-[14px] pb-[24px] pl-[24px] pr-[24px]  rounded-b-lg" v-if="tab == 3">
            <div class="text-[16px] font-bold mt-[24px]">รายการจำนวนชั้นของตึก</div>
            <div class="grid grid-cols-5 gap-4 mt-[14px] w-[100%]">
                <div class="border h-[97px] rounded-[12px] pl-[8px] pr-[8px] pt-[12px] pb-[12px]" v-for="data in roomFloor">
                    <div class="flex flex-col justify-between h-[100%]">
                        <div class="flex justify-between">
                            <div class="text-[16px]">{{ data.attributes.floorName }}</div>
                            <div>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="10.0013" cy="4.16667" rx="1.66667" ry="1.66667"
                                        transform="rotate(90 10.0013 4.16667)" fill="#5C6B79" />
                                    <circle cx="10.0013" cy="10.0007" r="1.66667" transform="rotate(90 10.0013 10.0007)"
                                        fill="#5C6B79" />
                                    <ellipse cx="10.0013" cy="15.8327" rx="1.66667" ry="1.66667"
                                        transform="rotate(90 10.0013 15.8327)" fill="#5C6B79" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border h-[97px] rounded-[12px] pl-[8px] pr-[8px] pt-[12px] pb-[12px] flex flex-col justify-center items-center cursor-pointer"
                    @click="create_floor()">
                    <div>
                        <svg width="60" height="60" viewBox="0 0 68 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="34" cy="34.457" r="34" fill="#F3F7FA" />
                            <mask id="mask0_1373_22044" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="6" y="7"
                                width="56" height="55">
                                <rect x="6.80078" y="7.25586" width="54.4" height="54.4" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_1373_22044)">
                                <path
                                    d="M33.9984 49.7561C33.5165 49.7561 33.1129 49.5932 32.7874 49.2674C32.4619 48.9416 32.2992 48.5379 32.2992 48.0562V36.1561H20.3992C19.9175 36.1561 19.5138 35.9932 19.188 35.6672C18.8621 35.3412 18.6992 34.9373 18.6992 34.4555C18.6992 33.9736 18.8621 33.5699 19.188 33.2444C19.5138 32.919 19.9175 32.7562 20.3992 32.7562H32.2992V20.8562C32.2992 20.3745 32.4622 19.9708 32.7881 19.6449C33.1141 19.3191 33.518 19.1562 33.9999 19.1562C34.4818 19.1562 34.8855 19.3191 35.2109 19.6449C35.5364 19.9708 35.6991 20.3745 35.6991 20.8562V32.7562H47.5992C48.0808 32.7562 48.4846 32.9192 48.8104 33.2452C49.1362 33.5712 49.2991 33.9751 49.2991 34.4569C49.2991 34.9388 49.1362 35.3425 48.8104 35.668C48.4846 35.9934 48.0808 36.1561 47.5992 36.1561H35.6991V48.0562C35.6991 48.5379 35.5361 48.9416 35.2102 49.2674C34.8842 49.5932 34.4803 49.7561 33.9984 49.7561Z"
                                    fill="#B9CCDC" />
                            </g>
                        </svg>
                    </div>
                    <div class="text-[#5C6B79] font-bold mt-[4px]">สร้างชั้น</div>
                </div>
            </div>
        </div>

        <b-modal centered v-model="create" size="xl" hide-backdrop hide-header-close hide-header hide-footer
            class="p-[-20px] text-custom">
            <div>
                <div class="flex justify-between pl-[20px] pr-[20px]">
                    <div class="text-custom flex justify-center items-center text-[16px] font-bold">แก้ไขผังหอพัก</div>
                    <div @click="create = false" class="cursor-pointer">
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
                <div class="grid grid-cols-3 gap-4">
                    <div class="flex">
                        <div class="w-[100%]">
                            <div
                                class="h-[46px] w-[100%] rounded-[12px] bg-[#003765] flex justify-between items-center pl-[14px] pr-[14px]">
                                <div class="text-white text-[16px] text-custom">รายการห้อง</div>
                                <div>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_1373_22419" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0"
                                            y="0" width="22" height="22">
                                            <rect y="22" width="22" height="22" transform="rotate(-90 0 22)"
                                                fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_1373_22419)">
                                            <path
                                                d="M17.1875 11.0003C17.1875 11.1952 17.1216 11.3585 16.9898 11.4901C16.8581 11.6217 16.6948 11.6875 16.5 11.6875H11.6875V16.5C11.6875 16.6948 11.6215 16.8581 11.4897 16.9898C11.3579 17.1216 11.1945 17.1875 10.9997 17.1875C10.8048 17.1875 10.6415 17.1216 10.5099 16.9898C10.3783 16.8581 10.3125 16.6948 10.3125 16.5V11.6875H5.49998C5.30519 11.6875 5.1419 11.6216 5.01013 11.4898C4.87838 11.3579 4.8125 11.1946 4.8125 10.9997C4.8125 10.8048 4.87838 10.6416 5.01013 10.51C5.1419 10.3784 5.30519 10.3125 5.49998 10.3125H10.3125V5.50002C10.3125 5.30523 10.3784 5.14195 10.5102 5.01018C10.6421 4.87842 10.8054 4.81254 11.0003 4.81254C11.1952 4.81254 11.3584 4.87842 11.49 5.01018C11.6216 5.14195 11.6875 5.30523 11.6875 5.50002V10.3125H16.5C16.6948 10.3125 16.8581 10.3785 16.9898 10.5103C17.1216 10.6421 17.1875 10.8055 17.1875 11.0003Z"
                                                fill="white" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div
                                class="h-[46px] w-[100%] rounded-[12px] border flex justify-between items-center pl-[14px] pr-[14px] mt-[8px] hover:bg-[#DEEAF5]">
                                <div class="text-[16px] text-custom">อาคาร A</div>
                                <div class="cursor-pointer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_1373_22414" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0"
                                            y="0" width="24" height="24">
                                            <rect width="24" height="24" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_1373_22414)">
                                            <path
                                                d="M7.3077 20.4998C6.80257 20.4998 6.375 20.3248 6.025 19.9748C5.675 19.6248 5.5 19.1972 5.5 18.6921V5.99981H5.25C5.03718 5.99981 4.85898 5.92802 4.7154 5.78443C4.5718 5.64085 4.5 5.46265 4.5 5.24983C4.5 5.03702 4.5718 4.85882 4.7154 4.71523C4.85898 4.57163 5.03718 4.49983 5.25 4.49983H8.99997C8.99997 4.24857 9.08779 4.03832 9.26342 3.86908C9.43907 3.69985 9.65254 3.61523 9.90382 3.61523H14.0961C14.3474 3.61523 14.5609 3.69985 14.7365 3.86908C14.9122 4.03832 15 4.24857 15 4.49983H18.75C18.9628 4.49983 19.141 4.57163 19.2845 4.71523C19.4281 4.85882 19.5 5.03702 19.5 5.24983C19.5 5.46265 19.4281 5.64085 19.2845 5.78443C19.141 5.92802 18.9628 5.99981 18.75 5.99981H18.5V18.6921C18.5 19.1972 18.325 19.6248 17.975 19.9748C17.625 20.3248 17.1974 20.4998 16.6922 20.4998H7.3077ZM6.99997 5.99981V18.6921C6.99997 18.7818 7.02883 18.8556 7.08652 18.9133C7.14422 18.971 7.21795 18.9998 7.3077 18.9998H16.6922C16.782 18.9998 16.8557 18.971 16.9134 18.9133C16.9711 18.8556 17 18.7818 17 18.6921V5.99981H6.99997ZM9.40385 16.2498C9.40385 16.4626 9.47564 16.6409 9.61922 16.7844C9.76281 16.928 9.94101 16.9998 10.1538 16.9998C10.3666 16.9998 10.5448 16.928 10.6884 16.7844C10.832 16.6409 10.9038 16.4626 10.9038 16.2498V8.74978C10.9038 8.53697 10.832 8.35877 10.6884 8.21518C10.5448 8.0716 10.3666 7.99981 10.1538 7.99981C9.94101 7.99981 9.76281 8.0716 9.61922 8.21518C9.47564 8.35877 9.40385 8.53697 9.40385 8.74978V16.2498ZM13.0961 16.2498C13.0961 16.4626 13.1679 16.6409 13.3115 16.7844C13.4551 16.928 13.6333 16.9998 13.8461 16.9998C14.0589 16.9998 14.2371 16.928 14.3807 16.7844C14.5243 16.6409 14.5961 16.4626 14.5961 16.2498V8.74978C14.5961 8.53697 14.5243 8.35877 14.3807 8.21518C14.2371 8.0716 14.0589 7.99981 13.8461 7.99981C13.6333 7.99981 13.4551 8.0716 13.3115 8.21518C13.1679 8.35877 13.0961 8.53697 13.0961 8.74978V16.2498ZM6.99997 5.99981V18.6921C6.99997 18.7818 7.02883 18.8556 7.08652 18.9133C7.14422 18.971 7.21795 18.9998 7.3077 18.9998H6.99997V5.99981Z"
                                                fill="#D44769" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div
                            class="w-[1px] h-[100%] ml-[18px] mb-[14px] bg-gray-200 border-0 dark:bg-gray-700 flex justify-center items-center">
                        </div>
                    </div>
                    <div class="flex">
                        <div class="w-[100%]">
                            <div
                                class="h-[46px] w-[100%] rounded-[12px] bg-[#008EF4] flex justify-between items-center pl-[14px] pr-[14px]">
                                <div class="text-white text-[16px] text-custom">เพิ่มชั้น</div>
                                <div>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_1373_22419" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0"
                                            y="0" width="22" height="22">
                                            <rect y="22" width="22" height="22" transform="rotate(-90 0 22)"
                                                fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_1373_22419)">
                                            <path
                                                d="M17.1875 11.0003C17.1875 11.1952 17.1216 11.3585 16.9898 11.4901C16.8581 11.6217 16.6948 11.6875 16.5 11.6875H11.6875V16.5C11.6875 16.6948 11.6215 16.8581 11.4897 16.9898C11.3579 17.1216 11.1945 17.1875 10.9997 17.1875C10.8048 17.1875 10.6415 17.1216 10.5099 16.9898C10.3783 16.8581 10.3125 16.6948 10.3125 16.5V11.6875H5.49998C5.30519 11.6875 5.1419 11.6216 5.01013 11.4898C4.87838 11.3579 4.8125 11.1946 4.8125 10.9997C4.8125 10.8048 4.87838 10.6416 5.01013 10.51C5.1419 10.3784 5.30519 10.3125 5.49998 10.3125H10.3125V5.50002C10.3125 5.30523 10.3784 5.14195 10.5102 5.01018C10.6421 4.87842 10.8054 4.81254 11.0003 4.81254C11.1952 4.81254 11.3584 4.87842 11.49 5.01018C11.6216 5.14195 11.6875 5.30523 11.6875 5.50002V10.3125H16.5C16.6948 10.3125 16.8581 10.3785 16.9898 10.5103C17.1216 10.6421 17.1875 10.8055 17.1875 11.0003Z"
                                                fill="white" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div
                                class="h-[46px] w-[100%] rounded-[12px] border flex justify-between items-center pl-[14px] pr-[14px] mt-[8px] hover:bg-[#DEEAF5]">
                                <div class="text-[16px] text-custom">ชั้น 1</div>
                                <div class="cursor-pointer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_1373_22414" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0"
                                            y="0" width="24" height="24">
                                            <rect width="24" height="24" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_1373_22414)">
                                            <path
                                                d="M7.3077 20.4998C6.80257 20.4998 6.375 20.3248 6.025 19.9748C5.675 19.6248 5.5 19.1972 5.5 18.6921V5.99981H5.25C5.03718 5.99981 4.85898 5.92802 4.7154 5.78443C4.5718 5.64085 4.5 5.46265 4.5 5.24983C4.5 5.03702 4.5718 4.85882 4.7154 4.71523C4.85898 4.57163 5.03718 4.49983 5.25 4.49983H8.99997C8.99997 4.24857 9.08779 4.03832 9.26342 3.86908C9.43907 3.69985 9.65254 3.61523 9.90382 3.61523H14.0961C14.3474 3.61523 14.5609 3.69985 14.7365 3.86908C14.9122 4.03832 15 4.24857 15 4.49983H18.75C18.9628 4.49983 19.141 4.57163 19.2845 4.71523C19.4281 4.85882 19.5 5.03702 19.5 5.24983C19.5 5.46265 19.4281 5.64085 19.2845 5.78443C19.141 5.92802 18.9628 5.99981 18.75 5.99981H18.5V18.6921C18.5 19.1972 18.325 19.6248 17.975 19.9748C17.625 20.3248 17.1974 20.4998 16.6922 20.4998H7.3077ZM6.99997 5.99981V18.6921C6.99997 18.7818 7.02883 18.8556 7.08652 18.9133C7.14422 18.971 7.21795 18.9998 7.3077 18.9998H16.6922C16.782 18.9998 16.8557 18.971 16.9134 18.9133C16.9711 18.8556 17 18.7818 17 18.6921V5.99981H6.99997ZM9.40385 16.2498C9.40385 16.4626 9.47564 16.6409 9.61922 16.7844C9.76281 16.928 9.94101 16.9998 10.1538 16.9998C10.3666 16.9998 10.5448 16.928 10.6884 16.7844C10.832 16.6409 10.9038 16.4626 10.9038 16.2498V8.74978C10.9038 8.53697 10.832 8.35877 10.6884 8.21518C10.5448 8.0716 10.3666 7.99981 10.1538 7.99981C9.94101 7.99981 9.76281 8.0716 9.61922 8.21518C9.47564 8.35877 9.40385 8.53697 9.40385 8.74978V16.2498ZM13.0961 16.2498C13.0961 16.4626 13.1679 16.6409 13.3115 16.7844C13.4551 16.928 13.6333 16.9998 13.8461 16.9998C14.0589 16.9998 14.2371 16.928 14.3807 16.7844C14.5243 16.6409 14.5961 16.4626 14.5961 16.2498V8.74978C14.5961 8.53697 14.5243 8.35877 14.3807 8.21518C14.2371 8.0716 14.0589 7.99981 13.8461 7.99981C13.6333 7.99981 13.4551 8.0716 13.3115 8.21518C13.1679 8.35877 13.0961 8.53697 13.0961 8.74978V16.2498ZM6.99997 5.99981V18.6921C6.99997 18.7818 7.02883 18.8556 7.08652 18.9133C7.14422 18.971 7.21795 18.9998 7.3077 18.9998H6.99997V5.99981Z"
                                                fill="#D44769" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div
                            class="w-[1px] h-[100%] ml-[18px] mb-[14px] bg-gray-200 border-0 dark:bg-gray-700 flex justify-center items-center">
                        </div>
                    </div>
                    <div class="flex">
                        <div class="w-[100%]">
                            <div
                                class="h-[46px] w-[100%] rounded-[12px] bg-[#9A77FF] flex justify-between items-center pl-[14px] pr-[14px]">
                                <div class="text-white text-[16px] text-custom">เพิ่มห้อง</div>
                                <div>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_1373_22419" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0"
                                            y="0" width="22" height="22">
                                            <rect y="22" width="22" height="22" transform="rotate(-90 0 22)"
                                                fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_1373_22419)">
                                            <path
                                                d="M17.1875 11.0003C17.1875 11.1952 17.1216 11.3585 16.9898 11.4901C16.8581 11.6217 16.6948 11.6875 16.5 11.6875H11.6875V16.5C11.6875 16.6948 11.6215 16.8581 11.4897 16.9898C11.3579 17.1216 11.1945 17.1875 10.9997 17.1875C10.8048 17.1875 10.6415 17.1216 10.5099 16.9898C10.3783 16.8581 10.3125 16.6948 10.3125 16.5V11.6875H5.49998C5.30519 11.6875 5.1419 11.6216 5.01013 11.4898C4.87838 11.3579 4.8125 11.1946 4.8125 10.9997C4.8125 10.8048 4.87838 10.6416 5.01013 10.51C5.1419 10.3784 5.30519 10.3125 5.49998 10.3125H10.3125V5.50002C10.3125 5.30523 10.3784 5.14195 10.5102 5.01018C10.6421 4.87842 10.8054 4.81254 11.0003 4.81254C11.1952 4.81254 11.3584 4.87842 11.49 5.01018C11.6216 5.14195 11.6875 5.30523 11.6875 5.50002V10.3125H16.5C16.6948 10.3125 16.8581 10.3785 16.9898 10.5103C17.1216 10.6421 17.1875 10.8055 17.1875 11.0003Z"
                                                fill="white" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div
                                class="h-[46px] w-[100%] rounded-[12px] border flex justify-between items-center pl-[14px] pr-[14px] mt-[8px] hover:bg-[#DEEAF5]">
                                <div class="text-[16px] text-custom">ห้อง 101</div>
                                <div class="cursor-pointer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_1373_22414" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0"
                                            y="0" width="24" height="24">
                                            <rect width="24" height="24" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_1373_22414)">
                                            <path
                                                d="M7.3077 20.4998C6.80257 20.4998 6.375 20.3248 6.025 19.9748C5.675 19.6248 5.5 19.1972 5.5 18.6921V5.99981H5.25C5.03718 5.99981 4.85898 5.92802 4.7154 5.78443C4.5718 5.64085 4.5 5.46265 4.5 5.24983C4.5 5.03702 4.5718 4.85882 4.7154 4.71523C4.85898 4.57163 5.03718 4.49983 5.25 4.49983H8.99997C8.99997 4.24857 9.08779 4.03832 9.26342 3.86908C9.43907 3.69985 9.65254 3.61523 9.90382 3.61523H14.0961C14.3474 3.61523 14.5609 3.69985 14.7365 3.86908C14.9122 4.03832 15 4.24857 15 4.49983H18.75C18.9628 4.49983 19.141 4.57163 19.2845 4.71523C19.4281 4.85882 19.5 5.03702 19.5 5.24983C19.5 5.46265 19.4281 5.64085 19.2845 5.78443C19.141 5.92802 18.9628 5.99981 18.75 5.99981H18.5V18.6921C18.5 19.1972 18.325 19.6248 17.975 19.9748C17.625 20.3248 17.1974 20.4998 16.6922 20.4998H7.3077ZM6.99997 5.99981V18.6921C6.99997 18.7818 7.02883 18.8556 7.08652 18.9133C7.14422 18.971 7.21795 18.9998 7.3077 18.9998H16.6922C16.782 18.9998 16.8557 18.971 16.9134 18.9133C16.9711 18.8556 17 18.7818 17 18.6921V5.99981H6.99997ZM9.40385 16.2498C9.40385 16.4626 9.47564 16.6409 9.61922 16.7844C9.76281 16.928 9.94101 16.9998 10.1538 16.9998C10.3666 16.9998 10.5448 16.928 10.6884 16.7844C10.832 16.6409 10.9038 16.4626 10.9038 16.2498V8.74978C10.9038 8.53697 10.832 8.35877 10.6884 8.21518C10.5448 8.0716 10.3666 7.99981 10.1538 7.99981C9.94101 7.99981 9.76281 8.0716 9.61922 8.21518C9.47564 8.35877 9.40385 8.53697 9.40385 8.74978V16.2498ZM13.0961 16.2498C13.0961 16.4626 13.1679 16.6409 13.3115 16.7844C13.4551 16.928 13.6333 16.9998 13.8461 16.9998C14.0589 16.9998 14.2371 16.928 14.3807 16.7844C14.5243 16.6409 14.5961 16.4626 14.5961 16.2498V8.74978C14.5961 8.53697 14.5243 8.35877 14.3807 8.21518C14.2371 8.0716 14.0589 7.99981 13.8461 7.99981C13.6333 7.99981 13.4551 8.0716 13.3115 8.21518C13.1679 8.35877 13.0961 8.53697 13.0961 8.74978V16.2498ZM6.99997 5.99981V18.6921C6.99997 18.7818 7.02883 18.8556 7.08652 18.9133C7.14422 18.971 7.21795 18.9998 7.3077 18.9998H6.99997V5.99981Z"
                                                fill="#D44769" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="flex justify-end mt-[30px]">
                    <div>
                        <vs-button dark shadow @click="create = false">
                            <div class="text-custom">ยกเลิก</div>
                        </vs-button>
                    </div>
                    <div>
                        <vs-button @click="type" color="#003765">
                            <div class="text-custom">บันทึก</div>
                        </vs-button>
                    </div>
                </div>
            </div>
        </b-modal>

        <b-modal centered v-model="type" size="l" hide-backdrop hide-header-close hide-header hide-footer
            class="p-[-20px] text-custom">
            <div>
                <div class="flex justify-between">
                    <div class="text-custom flex justify-center items-center text-[16px] font-bold">
                        กำหนดประเภทห้องและค่าเช่า</div>
                    <div @click="type = false" class="cursor-pointer">
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
                <div class="text-custom  text-[14px]">รายการห้องที่กำหนด</div>
                <div class="grid grid-cols-4 w-[100%] gap-2 mt-[14px] ">
                    <div
                        class="text-custom  h-[36px] bg-[#003765] rounded-[12px] flex justify-between items-center text-[white] pl-[8px] pr-[8px]">
                        <div>ห้อง 101</div>
                        <div class="cursor-pointer">
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" width="18" height="18" rx="9" fill="#003765" />
                                <mask id="mask0_902_18142" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                    width="19" height="18">
                                    <rect x="0.5" width="18" height="18" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_902_18142)">
                                    <path
                                        d="M9.50036 9.79073L5.69553 13.5955C5.59169 13.6994 5.46117 13.7525 5.30396 13.7549C5.14676 13.7573 5.01383 13.7042 4.90518 13.5955C4.79652 13.4869 4.74219 13.3552 4.74219 13.2004C4.74219 13.0456 4.79652 12.9138 4.90518 12.8052L8.70999 9.00036L4.90518 5.19553C4.80133 5.09169 4.74821 4.96117 4.74581 4.80396C4.74339 4.64676 4.79652 4.51383 4.90518 4.40518C5.01383 4.29652 5.14556 4.24219 5.30036 4.24219C5.45516 4.24219 5.58688 4.29652 5.69553 4.40518L9.50036 8.20999L13.3052 4.40518C13.409 4.30133 13.5395 4.24821 13.6968 4.24581C13.854 4.24339 13.9869 4.29652 14.0955 4.40518C14.2042 4.51383 14.2585 4.64556 14.2585 4.80036C14.2585 4.95516 14.2042 5.08688 14.0955 5.19553L10.2907 9.00036L14.0955 12.8052C14.1994 12.909 14.2525 13.0395 14.2549 13.1968C14.2573 13.354 14.2042 13.4869 14.0955 13.5955C13.9869 13.7042 13.8552 13.7585 13.7004 13.7585C13.5456 13.7585 13.4138 13.7042 13.3052 13.5955L9.50036 9.79073Z"
                                        fill="white" />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div
                        class="text-custom  h-[36px] bg-[#003765] rounded-[12px] flex justify-between items-center text-[white] pl-[8px] pr-[8px]">
                        <div>ห้อง 102</div>
                        <div class="cursor-pointer">
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" width="18" height="18" rx="9" fill="#003765" />
                                <mask id="mask0_902_18142" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                    width="19" height="18">
                                    <rect x="0.5" width="18" height="18" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_902_18142)">
                                    <path
                                        d="M9.50036 9.79073L5.69553 13.5955C5.59169 13.6994 5.46117 13.7525 5.30396 13.7549C5.14676 13.7573 5.01383 13.7042 4.90518 13.5955C4.79652 13.4869 4.74219 13.3552 4.74219 13.2004C4.74219 13.0456 4.79652 12.9138 4.90518 12.8052L8.70999 9.00036L4.90518 5.19553C4.80133 5.09169 4.74821 4.96117 4.74581 4.80396C4.74339 4.64676 4.79652 4.51383 4.90518 4.40518C5.01383 4.29652 5.14556 4.24219 5.30036 4.24219C5.45516 4.24219 5.58688 4.29652 5.69553 4.40518L9.50036 8.20999L13.3052 4.40518C13.409 4.30133 13.5395 4.24821 13.6968 4.24581C13.854 4.24339 13.9869 4.29652 14.0955 4.40518C14.2042 4.51383 14.2585 4.64556 14.2585 4.80036C14.2585 4.95516 14.2042 5.08688 14.0955 5.19553L10.2907 9.00036L14.0955 12.8052C14.1994 12.909 14.2525 13.0395 14.2549 13.1968C14.2573 13.354 14.2042 13.4869 14.0955 13.5955C13.9869 13.7042 13.8552 13.7585 13.7004 13.7585C13.5456 13.7585 13.4138 13.7042 13.3052 13.5955L9.50036 9.79073Z"
                                        fill="white" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="mt-[14px]">
                    <div class="text-custom">ประเภทห้องพัก</div>
                    <div>
                        <select placeholder="Select" v-model="value"
                            class="w-[100%] h-[36px]  rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]">
                            <option  v-for="data in roomType">
                                        {{data.attributes.roomTypeName}}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="mt-[14px]">
                    <div class="text-custom">ค่าเช่าห้อง/เดือน</div>
                    <div>
                        <input
                            class="w-[100%] h-[36px]  rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]" />
                    </div>
                </div>
                <div class="flex justify-end mt-[30px]">
                    <div>
                        <vs-button dark shadow @click="type = false">
                            <div class="text-custom">ยกเลิก</div>
                        </vs-button>
                    </div>
                    <div>
                        <vs-button @click="type" color="#003765">
                            <div class="text-custom">บันทึก</div>
                        </vs-button>
                    </div>
                </div>
            </div>
        </b-modal>

        <b-modal centered v-model="create_type" size="l" hide-backdrop hide-header-close hide-header hide-footer
            class="p-[-20px] text-custom">
            <div>
                <div class="flex justify-between">
                    <div class="text-custom flex justify-center items-center text-[16px] font-bold">
                        สร้างประเภทห้องและค่าเช่า</div>
                    <div @click="create_type = false" class="cursor-pointer">
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
                    <div class="text-custom">ประเภทห้องพัก</div>
                    <div>
                        <input
                            class="w-[100%] h-[36px]  rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]" v-model="roomTypeName" />
                    </div>
                </div>
                <div class="mt-[14px]">
                    <div class="text-custom">ค่าเช่าห้อง/เดือน</div>
                    <div>
                        <input
                            class="w-[100%] h-[36px]  rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]" v-model="roomTypePrice" />
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

        <b-modal centered v-model="create_room" size="l" hide-backdrop hide-header-close hide-header hide-footer
            class="p-[-20px] text-custom">
            <div>
                <div class="flex justify-between">
                    <div class="text-custom flex justify-center items-center text-[16px] font-bold">
                        เพิ่มห้อง</div>
                    <div @click="create_room = false" class="cursor-pointer">
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
                    <div class="grid grid-cols-2 gap-2 w-[100%]">
                        <div>
                            <div class="text-custom">อาคาร</div>
                            <div>
                                <input
                                    class="w-[100%] h-[36px]  rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]" />

                            </div>
                        </div>
                        <div>
                            <div class="text-custom">ชั้น</div>
                            <div>
                                        <select placeholder="Select" v-model="roomFloor"
                                            class="w-[100%] h-[36px]  rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]">
                                            <option  v-for="data in roomFloor">
                                                        {{data.attributes.floorName}}
                                            </option>
                                        </select>
                            </div>
                        </div>
                    </div>
                    <div class="text-custom mt-[14px]">ประเภทห้องพัก</div>
                    <div>
                        <select placeholder="Select" v-model="roomType"
                            class="w-[100%] h-[36px]  rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]">
                            <option  v-for="data in roomType">
                                        {{data.attributes.roomTypeName}}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="mt-[14px]">
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
                </div>
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

    </div>
</template>
<script>

import axios from 'axios'


export default {
    data() {
        return {
            tab: 1,
            value: 0,
            create: false,
            type: false,
            create_type: false,
            create_room: false,
            room: [],
            roomType: [],
            floorRoom: [],
            roomTypeName: "",
            roomTypePrice: 0,
            

        }
    },
    created() {
        const loading = this.$vs.loading({})
        setTimeout(() => {
            loading.close()
        }, 1000)
    },
    mounted() {
        this.getUserRoom();
        this.getTypeRoom();
        this.getFloorRoom();
    },
    methods: {
        getUserRoom() {
            const loading = this.$vs.loading()
            fetch('http://203.170.190.170:1337/api' + '/rooms?filters[room_building][id][$eq]='+this.$store.state.building+'&populate=deep,3')
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getRoom()",resp.data);
                    this.room = resp.data
                }).finally(() => {
                    loading.close()
                })
        },
        getTypeRoom() {
            const loading = this.$vs.loading()
            fetch('http://203.170.190.170:1337/api' + '/room-types?filters[room_building][id][$eq]='+this.$store.state.building+'&populate=deep,1')
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getRoomType()",resp.data);
                    this.roomType = resp.data
                }).finally(() => {
                    loading.close()
                })
        },
        getFloorRoom() {
            const loading = this.$vs.loading()
            fetch('http://203.170.190.170:1337/api' + '/building-floors?filters[building][id][$eq]='+this.$store.state.building+'&populate=deep,2')
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getRoomFloor()",resp.data);
                    this.roomFloor = resp.data
                }).finally(() => {
                    loading.close()
                })
        },
        updateUserRoom(roomID){
            axios.put(`http://203.170.190.170:1337/api/rooms/${roomID}`,{
                data : {
                    rate: this.rate
                }
            }).then( 
                    this.openNotificationUpdateRoom('top-right', '#3A89CB', 6000)
                )
                .then(
                    setTimeout(() => location.reload(), 1500)
                )
        }, 
        openNotificationUpdateRoom(position = null, color) {
            const noti = this.$vs.notification({
                sticky: true,
                color,
                position,
                title: 'Update Room Success',
            })
        },
        addNewRoom(){
            axios.post(`http://203.170.190.170:1337/api/rooms/`,{
                data : {
                    RoomNumber: "RandomRoom 301",
                    room_building: this.$store.state.building,
                    room_type: this.roomType,
                    building_floor: this.roomFloor,
                }
            }).then( 
                    this.openNotificationAddRoom('top-right', '#3A89CB', 6000)
                )
                .then(
                    setTimeout(() => location.reload(), 1500)
                )
        }, 

        addNewRoomType() {
            axios.post(`http://203.170.190.170:1337/api/room-types/`,{
                data : {
                    roomTypeName: this.roomTypeName,
                    roomPrice: this.roomTypePrice,
                    roomType_building: this.$store.state.building
                }
            }).then( 
                    this.openNotificationAddRoom('top-right', '#3A89CB', 6000)
                )
                .then(
                    setTimeout(() => location.reload(), 1500)
                )
        },
        create_floor() {
            if(confirm("Do you really want to Add Floor?")){

                console.log("Added Floor")
                // axios.delete('/api/artist/'+id)
                // .then(resp => {
                //     this.artists.data.splice(index, 1);
                // })
                // .catch(error => {
                //     console.log(error);
                // })
            }
        },
        openNotificationAddRoom(position = null, color) {
            const noti = this.$vs.notification({
                sticky: true,
                color,
                position,
                title: 'Add Room Success',
            })
        },
        
    },
}

</script>
<style  >
.vs-input {
    width: 100% !important;
}</style>