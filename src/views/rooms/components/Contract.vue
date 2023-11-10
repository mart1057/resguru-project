<template>
    <div>
        <div class="grid grid-cols-5 w-[100%] gap-4 mt-[14px]">
            <div class="h-[125px] border rounded-[12px] flex flex-col p-[12px] cursor-pointer " @click="create = true" v-for="item in contract">
                <div class="flex justify-between w-[100%]">
                    <div class="flex">
                        <div>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_1744_19036" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                    width="20" height="21">
                                    <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_1744_19036)">
                                    <path
                                        d="M5.00128 18.4165C4.41903 18.4165 3.92625 18.2149 3.52293 17.8116C3.11962 17.4083 2.91797 16.9155 2.91797 16.3332V15.4358C2.91797 15.0215 3.06548 14.6669 3.36049 14.3719C3.65549 14.0769 4.01012 13.9294 4.42439 13.9294H5.41797V4.08967C5.41797 3.67541 5.56548 3.32077 5.86049 3.02577C6.15549 2.73076 6.51012 2.58325 6.92439 2.58325H15.5782C15.9924 2.58325 16.3471 2.73076 16.6421 3.02577C16.9371 3.32077 17.0846 3.67541 17.0846 4.08967V16.3332C17.0846 16.9155 16.8829 17.4083 16.4796 17.8116C16.0763 18.2149 15.5835 18.4165 15.0013 18.4165H5.00128ZM15.0013 17.1666C15.2374 17.1666 15.4353 17.0867 15.595 16.927C15.7548 16.7673 15.8346 16.5693 15.8346 16.3332V4.08967C15.8346 4.01488 15.8106 3.95344 15.7625 3.90536C15.7144 3.85727 15.653 3.83323 15.5782 3.83323H6.92439C6.84959 3.83323 6.78816 3.85727 6.74007 3.90536C6.69199 3.95344 6.66795 4.01488 6.66795 4.08967V13.9294H12.6616C13.0758 13.9294 13.4304 14.0769 13.7254 14.3719C14.0204 14.6669 14.1679 15.0215 14.1679 15.4358V16.3332C14.1679 16.5693 14.2478 16.7673 14.4075 16.927C14.5673 17.0867 14.7652 17.1666 15.0013 17.1666ZM8.28653 7.74346C8.10945 7.74346 7.96102 7.68354 7.84124 7.56371C7.72145 7.44386 7.66155 7.29536 7.66155 7.11821C7.66155 6.94104 7.72145 6.79263 7.84124 6.67298C7.96102 6.55333 8.10945 6.4935 8.28653 6.4935H14.216C14.3931 6.4935 14.5415 6.55343 14.6613 6.67327C14.7811 6.79311 14.841 6.94161 14.841 7.11877C14.841 7.29593 14.7811 7.44433 14.6613 7.56398C14.5415 7.68363 14.3931 7.74346 14.216 7.74346H8.28653ZM8.28653 10.1473C8.10945 10.1473 7.96102 10.0874 7.84124 9.96754C7.72145 9.8477 7.66155 9.6992 7.66155 9.52205C7.66155 9.34488 7.72145 9.19647 7.84124 9.07682C7.96102 8.95716 8.10945 8.89734 8.28653 8.89734H14.216C14.3931 8.89734 14.5415 8.95726 14.6613 9.07711C14.7811 9.19694 14.841 9.34544 14.841 9.52261C14.841 9.69976 14.7811 9.84817 14.6613 9.96784C14.5415 10.0875 14.3931 10.1473 14.216 10.1473H8.28653ZM5.00128 17.1666H12.918V15.4358C12.918 15.361 12.8939 15.2996 12.8459 15.2515C12.7978 15.2034 12.7363 15.1794 12.6616 15.1794H4.42439C4.34959 15.1794 4.28816 15.2034 4.24007 15.2515C4.19199 15.2996 4.16795 15.361 4.16795 15.4358V16.3332C4.16795 16.5693 4.24781 16.7673 4.40753 16.927C4.56725 17.0867 4.76517 17.1666 5.00128 17.1666ZM5.00128 17.1666H4.16795H12.918H5.00128Z"
                                        fill="#003765" />
                                </g>
                            </svg>
                        </div>
                        <div class="text-[18px] ml-[4px]">สัญญาเช่า 1</div>
                    </div>
                    <div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_1744_19039" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                width="20" height="20">
                                <rect width="20" height="20" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_1744_19039)">
                                <path
                                    d="M4.16795 3.33323V8.48227V8.46144V16.6666V3.33323ZM6.66795 11.4582H8.9997C9.10332 11.2189 9.22405 10.9964 9.36187 10.7908C9.49968 10.5851 9.65459 10.3909 9.82659 10.2083H6.66795C6.49086 10.2083 6.34243 10.2682 6.22266 10.388C6.10286 10.5078 6.04297 10.6564 6.04297 10.8335C6.04297 11.0107 6.10286 11.1591 6.22266 11.2787C6.34243 11.3984 6.49086 11.4582 6.66795 11.4582ZM6.66795 14.7915H8.56859C8.51918 14.5832 8.48706 14.3749 8.47224 14.1666C8.45742 13.9582 8.45856 13.7499 8.47566 13.5416H6.66795C6.49086 13.5416 6.34243 13.6015 6.22266 13.7213C6.10286 13.8412 6.04297 13.9897 6.04297 14.1668C6.04297 14.344 6.10286 14.4924 6.22266 14.6121C6.34243 14.7317 6.49086 14.7915 6.66795 14.7915ZM4.42295 17.9165C4.00296 17.9165 3.64714 17.7707 3.35547 17.479C3.0638 17.1874 2.91797 16.8311 2.91797 16.4101V3.58967C2.91797 3.16873 3.0638 2.81242 3.35547 2.52075C3.64714 2.22909 4.00344 2.08325 4.42439 2.08325H10.4196C10.6228 2.08325 10.8165 2.12225 11.0007 2.20025C11.1848 2.27824 11.3453 2.38561 11.4821 2.52236L14.9788 6.01911C15.1156 6.15587 15.2229 6.31634 15.3009 6.5005C15.3789 6.68468 15.4179 6.87838 15.4179 7.08161V8.75792C15.2181 8.67886 15.0141 8.61877 14.8058 8.57763C14.5974 8.5365 14.3848 8.50472 14.1679 8.48227V7.08321H11.1678C10.9553 7.08321 10.7772 7.01134 10.6335 6.86759C10.4898 6.72384 10.418 6.54571 10.418 6.33321V3.33323H4.42439C4.36027 3.33323 4.3015 3.35994 4.24807 3.41336C4.19466 3.46679 4.16795 3.52556 4.16795 3.58967V16.4101C4.16795 16.4742 4.19466 16.533 4.24807 16.5864C4.3015 16.6399 4.36027 16.6666 4.42439 16.6666H9.34103C9.50373 16.9131 9.68676 17.1417 9.89014 17.3523C10.0935 17.5629 10.3138 17.7509 10.5509 17.9165H4.42295ZM13.7529 15.9614C14.3725 15.9614 14.8958 15.7475 15.3226 15.3196C15.7494 14.8918 15.9628 14.368 15.9628 13.7483C15.9628 13.1286 15.7489 12.6054 15.321 12.1786C14.8932 11.7518 14.3694 11.5384 13.7497 11.5384C13.13 11.5384 12.6068 11.7523 12.18 12.1801C11.7531 12.608 11.5397 13.1318 11.5397 13.7515C11.5397 14.3712 11.7537 14.8944 12.1815 15.3212C12.6094 15.748 13.1332 15.9614 13.7529 15.9614ZM18.441 18.439C18.326 18.5544 18.1796 18.6121 18.0018 18.6121C17.8241 18.6121 17.6776 18.5544 17.5622 18.439L15.7192 16.588C15.4382 16.7931 15.1303 16.9483 14.7953 17.0536C14.4604 17.1588 14.1124 17.2114 13.7513 17.2114C12.7898 17.2114 11.9724 16.8749 11.2994 16.2018C10.6263 15.5287 10.2898 14.7114 10.2898 13.7499C10.2898 12.7884 10.6263 11.9711 11.2994 11.298C11.9724 10.6249 12.7898 10.2884 13.7513 10.2884C14.7128 10.2884 15.5301 10.6249 16.2032 11.298C16.8763 11.9711 17.2128 12.7884 17.2128 13.7499C17.2128 14.111 17.1602 14.459 17.0549 14.794C16.9497 15.1289 16.7945 15.4369 16.5894 15.7178L18.4404 17.5608C18.5558 17.6757 18.6134 17.822 18.6134 17.9995C18.6134 18.1771 18.556 18.3236 18.441 18.439Z"
                                    fill="#5C6B79" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="mt-[14px]">
                    <div class="flex">
                        <div class="text-[12px] text-[#5C6B79]">วันที่ทำสัญญา</div>
                        <div class="ml-[14px]">{{ item.attributes.user_sign_contract.data.attributes.checkInDate? item.attributes.user_sign_contract.data.attributes.checkInDate:'ไม่มีข้อมูล' }}</div>
                    </div>
                    <div class="flex">
                        <div class="text-[12px] text-[#5C6B79]">วันที่สิ้นสุดสัญญา</div>
                        <div class="ml-[14px]">{{ item.attributes.user_sign_contract.data.attributes.contractEndDate? item.attributes.user_sign_contract.data.attributes.contractEndDate:'ไม่มีข้อมูล' }}</div>
                    </div>
                </div>
            </div>
        </div>

        <b-modal centered v-model="create" size="xl" hide-backdrop hide-header-close hide-header hide-footer
            class="p-[-20px] text-custom">
            <div>
                <div class="flex justify-between pl-[20px] pr-[20px]">
                    <div class="text-custom flex justify-center items-center text-[18px] font-bold">ชัชพล บุญพันธุ์</div>
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
                <!-- <div class="w-[100%] h-[1px]  mt-[24px] mb-[14px] bg-gray-200 border-0 dark:bg-gray-700"></div> -->
                <div class="pl-[20px] pr-[20px] mt-[24px]">
                    <div class="font-bold text-custom">ข้อมูลผู้เช่า</div>
                    <div class=" mt-[24px]">
                        <div class="w-[100%] flex">
                            <div class="w-[30%] text-custom flex items-start">ข้อมูลหลัก</div>
                            <dvi class=" w-[70%] ">
                                <div class="grid grid-cols-4 gap-2  text-custom  ">
                                    <div class="col-span-2">
                                        <div>อีเมลล์</div>
                                        <input type="input" placeholder="ทะเบียนรถ"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                    <div class="col-span-1">
                                        <div>เลขมิเตอร์ค่าน้ำเริ่มต้น</div>
                                        <input type="input" placeholder="ค่าน้ำ"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                    <div class="col-span-1">
                                        <div>เลขมิเตอร์ค่าน้ำไฟเริ่มต้น</div>
                                        <input type="input" placeholder="ค่าไฟ"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                </div>
                                <div class="grid grid-cols-8  text-custom mt-[14px]  ">
                                    <div>
                                        <div>คำนำหน้า</div>
                                        <vs-select placeholder="ชื่อ" id="mr" class="mt-[6px]">
                                            <vs-option label="อาคาร A" value="1">
                                                อาคาร A
                                            </vs-option>
                                            <vs-option label="อาคาร B" value="2">
                                                อาคาร B
                                            </vs-option>
                                        </vs-select>
                                    </div>
                                    <div class="col-span-3 ml-[8px]">
                                        <div>ชื่อ</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                    <div class="col-span-3  ml-[8px]">
                                        <div>สกุล</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                    <div class="ml-[8px]">
                                        <div>ชื่อเล่น</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                </div>
                            </dvi>
                        </div>
                        <div class="w-[100%] flex mt-[14px]">
                            <div class="w-[30%] text-custom flex items-start"></div>
                            <div class="grid grid-cols-8  text-custom w-[70%] ">
                                <div class="col-span-4">
                                    <div>เบอร์โทรศัพท์ <span class="text-[#5C6B79]">(ไม่ต้องใส่ขีด ตัวอย่าง.
                                            0815578945)</span></div>
                                    <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                </div>
                                <div class="col-span-4  ml-[8px]">
                                    <div>หมายเลขบัตรประชาชน</div>
                                    <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                </div>
                            </div>
                        </div>
                        <div class="w-[100%] flex mt-[14px]">
                            <div class="w-[30%] text-custom flex items-start"></div>
                            <div class="grid grid-cols-6  text-custom w-[70%] ">
                                <div class="col-span-2">
                                    <div>วัน/เดือน/ปีเกิด (ค.ศ.)</div>
                                    <vs-select placeholder="ชื่อ" class="mt-[6px]">
                                        <vs-option label="อาคาร A" value="1">
                                            อาคาร A
                                        </vs-option>
                                        <vs-option label="อาคาร B" value="2">
                                            อาคาร B
                                        </vs-option>
                                    </vs-select>
                                </div>
                                <div class="col-span-2  ml-[8px]">
                                    <div class="text-[white]">.</div>
                                    <vs-select placeholder="ชื่อ" class="mt-[6px]">
                                        <vs-option label="อาคาร A" value="1">
                                            อาคาร A
                                        </vs-option>
                                        <vs-option label="อาคาร B" value="2">
                                            อาคาร B
                                        </vs-option>
                                    </vs-select>
                                </div>
                                <div class="col-span-2 ml-[8px]">
                                    <div class="text-[white]">.</div>
                                    <vs-select placeholder="ชื่อ" class="mt-[6px]">
                                        <vs-option label="อาคาร A" value="1">
                                            อาคาร A
                                        </vs-option>
                                        <vs-option label="อาคาร B" value="2">
                                            อาคาร B
                                        </vs-option>
                                    </vs-select>
                                </div>
                            </div>
                        </div>
                        <div class="w-[100%] flex mt-[14px]">
                            <div class="w-[30%] text-custom flex items-start"></div>
                            <div class="grid grid-cols-6  text-custom w-[70%] ">
                                <div class="col-span-6">
                                    <div>ที่อยู่</div>
                                    <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                </div>
                            </div>
                        </div>
                        <div class="w-[100%] flex mt-[14px]">
                            <div class="w-[30%] text-custom flex items-start"></div>
                            <div class="grid grid-cols-6  text-custom w-[70%] ">
                                <div class="col-span-3 mt-[6px]">
                                    <div>แนบรูปบัตรประชาชน</div>
                                    <div class="flex mt-[4px]">
                                        <div
                                            class="flex justify-center items-center bg-[#165D98] text-[14px] text-[white] pt-[8px] pb-[8px] pl-[12px] pr-[12px] rounded-[12px]">
                                            อัพโหลดรูปภาพ</div>
                                        <div class="text-[#5C6B79] flex justify-center items-center ml-[8px] text-[12px]">
                                            ยังไม่ได้เลือกไฟล์</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-[100%] flex mt-[14px]">
                            <div class="w-[30%] text-custom flex  items-start">ข้อมูลเพิ่มเติม</div>
                            <div class="w-[70%]">
                                <div class="grid grid-cols-8  text-custom w-[100%] ">
                                    <div class="col-span-4">
                                        <div>อีเมลล์</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                    <div class="col-span-4  ml-[8px]">
                                        <div>Line ID</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                </div>
                                <div class="grid grid-cols-8  text-custom w-[100%] mt-[6px] ">
                                    <div class="col-span-8 ">
                                        <div>สถาบันการศึกษา / สถานที่ทำงานปัจจุบัน</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                </div>
                                <div class="grid grid-cols-8 gap-2  text-custom w-[100%] mt-[6px] ">
                                    <div class="col-span-4 ">
                                        <div>คณะ / แผนก</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                    <div class="col-span-4 ">
                                        <div>ชั้นปี / ตำแหน่ง</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                </div>
                                <div class="grid grid-cols-8  text-custom w-[100%] ">
                                    <div class="col-span-4 mt-[6px]">
                                        <div>รหัสนักศึกษา / รหัสพนักงาน</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                </div>
                                <div class="grid grid-cols-8 gap-2  text-custom w-[100%] mt-[6px] ">
                                    <div class="col-span-4 ">
                                        <div>บุคลที่สามารถติดต่อได้กรณีฉุกเฉิน</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                    <div class="col-span-2">
                                        <div>ความสัมพันธ์</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                    <div class="col-span-2">
                                        <div>เบอร์โทรศัพท์ผู้ติดต่อฉุกเฉิน</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-[100%] flex mt-[14px]">
                            <div class="w-[30%] text-custom flex  items-start">ข้อมูลยานพหนะ</div>
                            <div class="w-[70%]">
                                <div class="grid grid-cols-8  text-custom w-[100%] ">
                                    <div class="col-span-2">
                                        <div>คันที่ 1</div>
                                        <vs-select placeholder="ชื่อ" class="mt-[6px]">
                                            <vs-option label="อาคาร A" value="1">
                                                อาคาร A
                                            </vs-option>
                                            <vs-option label="อาคาร B" value="2">
                                                อาคาร B
                                            </vs-option>
                                        </vs-select>
                                    </div>
                                    <div class="col-span-3  ml-[8px]">
                                        <div class="text-[white]">.</div>
                                        <input type="input" placeholder="ทะเบียนรถ"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                    <div class="col-span-3  ml-[8px]">
                                        <div class="text-[white]">.</div>
                                        <input type="input" placeholder="รายละเอียดรถ"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                </div>
                                <div class="grid grid-cols-8  text-custom w-[100%] ">
                                    <div class="col-span-3 mt-[6px]">
                                        <div>แนบรูปภาพยานพหนะคันที่ 1</div>
                                        <div class="flex mt-[4px]">
                                            <div
                                                class="flex justify-center items-center bg-[#165D98] text-[14px] text-[white] pt-[8px] pb-[8px] pl-[12px] pr-[12px] rounded-[12px]">
                                                อัพโหลดรูปภาพ</div>
                                            <div
                                                class="text-[#5C6B79] flex justify-center items-center ml-[8px] text-[12px]">
                                                ยังไม่ได้เลือกไฟล์</div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="flex flex-col justify-center items-start ml-[50px]">
                                    <div class="font-bold text-custom text-[12px] flex justify-start items-start">หมายเหตุ
                                    </div>
                                    <div><input class="h-[28px] w-[280px] bg-[#F3F8FD] rounded-[12px]  flex justify-start"
                                            type="input" />
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[100%] h-[1px]  mt-[24px] mb-[14px] bg-gray-200 border-0 dark:bg-gray-700"></div>
                <div class="mt-[24px]">
                    <div class="text-[18px] text-[#141629] text-custom font-bold">รายการตรวจจับ</div>
                </div>
                <div class="mt-[14px]">
                    <div class="flex">
                        <div class=""><svg width="70" height="82" viewBox="0 0 70 82" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_2182_22275)">
                                    <rect x="6" y="6" width="54" height="66" rx="12" fill="#165D98" />
                                    <mask id="mask0_2182_22275" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="11"
                                        y="17" width="44" height="44">
                                        <rect x="11" y="17" width="44" height="44" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_2182_22275)">
                                        <path
                                            d="M31.1662 56.5929C30.41 56.5929 29.7626 56.3237 29.224 55.7851C28.6855 55.2466 28.4162 54.5992 28.4162 53.843V45.2403H22.7047C21.7786 45.2403 20.9947 44.9195 20.3531 44.2778C19.7114 43.6362 19.3906 42.8523 19.3906 41.9263V29.3045C19.3906 27.6369 19.9844 26.2093 21.1719 25.0218C22.3594 23.8342 23.787 23.2405 25.4546 23.2405H46.6084V41.9263C46.6084 42.8523 46.2876 43.6362 45.6459 44.2778C45.0043 44.9195 44.2204 45.2403 43.2943 45.2403H37.5828V53.843C37.5828 54.5992 37.3135 55.2466 36.775 55.7851C36.2364 56.3237 35.5891 56.5929 34.8328 56.5929H31.1662ZM22.1405 35.7212H43.8585V25.9904H41.4963V31.7725C41.4963 32.1621 41.3644 32.4886 41.1008 32.7521C40.8371 33.0157 40.5104 33.1474 40.1207 33.1474C39.7309 33.1474 39.4044 33.0157 39.1412 32.7521C38.8779 32.4886 38.7463 32.1621 38.7463 31.7725V25.9904H36.2078V28.2821C36.2078 28.6717 36.076 28.9982 35.8123 29.2618C35.5487 29.5253 35.222 29.6571 34.8322 29.6571C34.4425 29.6571 34.116 29.5253 33.8527 29.2618C33.5895 28.9982 33.4579 28.6717 33.4579 28.2821V25.9904H25.4546C24.5286 25.9904 23.7447 26.3113 23.103 26.9529C22.4614 27.5946 22.1405 28.3784 22.1405 29.3045V35.7212ZM22.7047 42.4904H43.2943C43.4589 42.4904 43.594 42.4375 43.6998 42.3318C43.8056 42.226 43.8585 42.0908 43.8585 41.9263V38.4712H22.1405V41.9263C22.1405 42.0908 22.1934 42.226 22.2992 42.3318C22.405 42.4375 22.5402 42.4904 22.7047 42.4904Z"
                                            fill="white" />
                                    </g>
                                </g>
                                <defs>
                                    <filter id="filter0_d_2182_22275" x="0" y="0" width="70" height="82"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="2" dy="2" />
                                        <feGaussianBlur stdDeviation="4" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                            result="effect1_dropShadow_2182_22275" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2182_22275"
                                            result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div
                            class="flex justify-start items-center text-[16px] font-bold text-custom text-[#003765] w-[150px]">
                            ค่าทีสีผนัง</div>
                        <div class="flex flex-col justify-center items-center ml-[50px]">
                            <div class="font-bold text-custom text-[12px]">ค่าปรับกรณีเสียหาย (บาท)</div>
                            <div><input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start" type="input" />
                            </div>
                        </div>
                        <div class="flex flex-col justify-center items-center ml-[50px]">
                            <div class="font-bold text-custom text-[12px] flex justify-start mt-[-12px]">รูปภาพก่อนเข้าหอพัก
                            </div>
                            <div class="flex mt-[12px]">
                                <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start" id="upload"
                                    hidden type="file" />
                                <label for="upload">
                                    <div
                                        class="h-[28px] w-[120px] flex justify-center text-custom items-center bg-[#165D98] text-[14px] text-[white] rounded-[12px]">
                                        อัพโหลดรูปภาพ</div>
                                </label>

                                <!-- <div
                                    class="text-[#5C6B79] text-custom flex justify-center items-center ml-[8px] text-[12px]">
                                    ยังไม่ได้เลือกไฟล์</div> -->
                            </div>
                        </div>
                        <div class="flex flex-col justify-center items-center ml-[50px]">
                            <div class="font-bold text-custom text-[12px] flex justify-start mt-[-12px]">รูปภาพก่อนย้ายออก
                            </div>
                            <div class="flex mt-[12px]">
                                <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start" id="upload"
                                    hidden type="file" />
                                <label for="upload">
                                    <div
                                        class="h-[28px] w-[120px] flex justify-center text-custom items-center bg-[#165D98] text-[14px] text-[white] rounded-[12px]">
                                        อัพโหลดรูปภาพ</div>
                                </label>

                                <!-- <div
                                    class="text-[#5C6B79] text-custom flex justify-center items-center ml-[8px] text-[12px]">
                                    ยังไม่ได้เลือกไฟล์</div> -->
                            </div>
                        </div>
                        <div class="flex flex-col justify-center items-start ml-[50px]">
                            <div class="font-bold text-custom text-[12px] flex justify-start items-start">หมายเหตุ</div>
                            <div><input class="h-[28px] w-[280px] bg-[#F3F8FD] rounded-[12px]  flex justify-start"
                                    type="input" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-[14px]">
                    <div class="flex">
                        <div class=""><svg width="70" height="82" viewBox="0 0 70 82" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_2182_22306)">
                                    <rect x="6" y="6" width="54" height="66" rx="12" fill="#165D98" />
                                    <mask id="mask0_2182_22306" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="13"
                                        y="19" width="40" height="40">
                                        <rect x="13" y="19" width="40" height="40" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_2182_22306)">
                                        <path
                                            d="M31.0761 37.7499H34.9223V25.8268C34.9223 25.2905 34.7359 24.8359 34.363 24.463C33.9902 24.0902 33.5356 23.9037 32.9992 23.9037C32.4629 23.9037 32.0083 24.0902 31.6354 24.463C31.2626 24.8359 31.0761 25.2905 31.0761 25.8268V37.7499ZM21.2364 44.0961H44.7621V40.7627C44.7621 40.6131 44.714 40.4903 44.6178 40.3941C44.5216 40.2979 44.3988 40.2499 44.2492 40.2499H21.7493C21.5997 40.2499 21.4768 40.2979 21.3806 40.3941C21.2845 40.4903 21.2364 40.6131 21.2364 40.7627V44.0961ZM19.3646 54.0961H23.5762V50.346C23.5762 49.9919 23.696 49.695 23.9357 49.4554C24.1754 49.2159 24.4724 49.0961 24.8267 49.0961C25.181 49.0961 25.4778 49.2159 25.7172 49.4554C25.9565 49.695 26.0761 49.9919 26.0761 50.346V54.0961H31.7493V50.346C31.7493 49.9919 31.8691 49.695 32.1088 49.4554C32.3485 49.2159 32.6455 49.0961 32.9998 49.0961C33.3541 49.0961 33.6509 49.2159 33.8902 49.4554C34.1295 49.695 34.2492 49.9919 34.2492 50.346V54.0961H39.9223V50.346C39.9223 49.9919 40.0422 49.695 40.2818 49.4554C40.5215 49.2159 40.8185 49.0961 41.1728 49.0961C41.5271 49.0961 41.824 49.2159 42.0633 49.4554C42.3026 49.695 42.4223 49.9919 42.4223 50.346V54.0961H46.6338C46.8047 54.0961 46.9437 54.0293 47.0505 53.8957C47.1573 53.7622 47.1841 53.6153 47.1306 53.455L45.2716 46.596H20.7268L18.8678 53.455C18.8144 53.6153 18.8411 53.7622 18.9479 53.8957C19.0548 54.0293 19.1937 54.0961 19.3646 54.0961ZM46.762 56.596H19.2364C18.292 56.596 17.5238 56.2189 16.932 55.4646C16.3401 54.7103 16.1723 53.8695 16.4288 52.9422L18.7365 44.3685V40.6666C18.7365 39.8567 19.0201 39.1682 19.5874 38.6009C20.1547 38.0336 20.8433 37.7499 21.6531 37.7499H28.5762V25.8268C28.5762 24.5982 29.0062 23.5539 29.8662 22.6939C30.7263 21.8338 31.7706 21.4038 32.9992 21.4038C34.2278 21.4038 35.2722 21.8338 36.1322 22.6939C36.9922 23.5539 37.4223 24.5982 37.4223 25.8268V37.7499H44.3453C45.1552 37.7499 45.8437 38.0336 46.4111 38.6009C46.9783 39.1682 47.262 39.8567 47.262 40.6666V44.3685L49.5697 52.9742C49.8774 53.8909 49.731 54.7237 49.1306 55.4726C48.5302 56.2215 47.7406 56.596 46.762 56.596Z"
                                            fill="white" />
                                    </g>
                                </g>
                                <defs>
                                    <filter id="filter0_d_2182_22306" x="0" y="0" width="70" height="82"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="2" dy="2" />
                                        <feGaussianBlur stdDeviation="4" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                            result="effect1_dropShadow_2182_22306" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2182_22306"
                                            result="shape" />
                                    </filter>
                                </defs>
                            </svg>

                        </div>
                        <div
                            class="flex justify-start items-center text-[16px] font-bold text-custom text-[#003765] w-[150px]">
                            ค่าทำความสะอาด</div>
                        <div class="flex flex-col justify-center items-center ml-[50px]">
                            <div class="font-bold text-custom text-[12px]">ค่าปรับกรณีเสียหาย (บาท)</div>
                            <div><input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start" type="input" />
                            </div>
                        </div>
                        <div class="flex flex-col justify-center items-center ml-[50px]">
                            <div class="font-bold text-custom text-[12px] flex justify-start mt-[-12px]">รูปภาพก่อนเข้าหอพัก
                            </div>
                            <div class="flex mt-[12px]">
                                <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start" id="upload"
                                    hidden type="file" />
                                <label for="upload">
                                    <div
                                        class="h-[28px] w-[120px] flex justify-center text-custom items-center bg-[#165D98] text-[14px] text-[white] rounded-[12px]">
                                        อัพโหลดรูปภาพ</div>
                                </label>
                                <!-- <div
                                    class="text-[#5C6B79] text-custom flex justify-center items-center ml-[8px] text-[12px]">
                                    ยังไม่ได้เลือกไฟล์</div> -->
                            </div>
                        </div>
                        <div class="flex flex-col justify-center items-center ml-[50px]">
                            <div class="font-bold text-custom text-[12px] flex justify-start mt-[-12px]">รูปภาพก่อนย้ายออก
                            </div>
                            <div class="flex mt-[12px]">
                                <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start" id="upload"
                                    hidden type="file" />
                                <label for="upload">
                                    <div
                                        class="h-[28px] w-[120px] flex justify-center text-custom items-center bg-[#165D98] text-[14px] text-[white] rounded-[12px]">
                                        อัพโหลดรูปภาพ</div>
                                </label>

                                <!-- <div
                                    class="text-[#5C6B79] text-custom flex justify-center items-center ml-[8px] text-[12px]">
                                    ยังไม่ได้เลือกไฟล์</div> -->
                            </div>
                        </div>
                        <div class="flex flex-col justify-center items-start ml-[50px]">
                            <div class="font-bold text-custom text-[12px] flex justify-start items-start">หมายเหตุ</div>
                            <div><input class="h-[28px] w-[280px] bg-[#F3F8FD] rounded-[12px]  flex justify-start"
                                    type="input" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-[14px]">
                    <div class="flex">
                        <div class=""><svg width="70" height="82" viewBox="0 0 70 82" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_2182_22179)">
                                    <rect x="6" y="6" width="54" height="66" rx="12" fill="#165D98" />
                                    <mask id="mask0_2182_22179" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="11"
                                        y="17" width="44" height="44">
                                        <rect x="11" y="17" width="44" height="44" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_2182_22179)">
                                        <path
                                            d="M21.4028 50.9166L20.4474 53.6242C20.4 53.7572 20.317 53.868 20.1985 53.9566C20.08 54.0453 19.9412 54.0896 19.7822 54.0896H19.5777C19.396 54.0896 19.2369 54.0209 19.1006 53.8834C18.9643 53.7459 18.8961 53.5854 18.8961 53.4021V50.9166C17.9848 50.9166 17.2046 50.5921 16.5556 49.943C15.9065 49.294 15.582 48.5138 15.582 47.6025V28.5641C15.582 27.6527 15.9065 26.8725 16.5556 26.2235C17.2046 25.5745 17.9848 25.25 18.8961 25.25H47.1012C48.0125 25.25 48.7927 25.5745 49.4417 26.2235C50.0908 26.8725 50.4153 27.6527 50.4153 28.5641V47.6025C50.4153 48.5145 50.0908 49.2953 49.4417 49.9448C48.7927 50.5943 48.0125 50.919 47.1012 50.919V53.4479C47.1012 53.628 47.0393 53.78 46.9154 53.9039C46.7916 54.0277 46.6396 54.0896 46.4595 54.0896H46.2127C46.0717 54.0896 45.9425 54.0504 45.8249 53.9719C45.7074 53.8934 45.6251 53.7869 45.5781 53.6524L44.658 50.9166H21.4028ZM18.8961 48.1666H47.1012C47.2657 48.1666 47.4009 48.1137 47.5067 48.0079C47.6124 47.9022 47.6653 47.767 47.6653 47.6025V28.5641C47.6653 28.3996 47.6124 28.2644 47.5067 28.1586C47.4009 28.0528 47.2657 28 47.1012 28H18.8961C18.7316 28 18.5964 28.0528 18.4907 28.1586C18.3849 28.2644 18.332 28.3996 18.332 28.5641V47.6025C18.332 47.767 18.3849 47.9022 18.4907 48.0079C18.5964 48.1137 18.7316 48.1666 18.8961 48.1666Z"
                                            fill="white" />
                                    </g>
                                </g>
                                <defs>
                                    <filter id="filter0_d_2182_22179" x="0" y="0" width="70" height="82"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="2" dy="2" />
                                        <feGaussianBlur stdDeviation="4" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                            result="effect1_dropShadow_2182_22179" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2182_22179"
                                            result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div
                            class="flex justify-start items-center text-[16px] font-bold text-custom text-[#003765] w-[150px]">
                            โทรทัศน์</div>
                        <div class="flex flex-col justify-center items-center ml-[50px]">
                            <div class="font-bold text-custom text-[12px]">ค่าปรับกรณีเสียหาย (บาท)</div>
                            <div><input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start" type="input" />
                            </div>
                        </div>
                        <div class="flex flex-col justify-center items-center ml-[50px]">
                            <div class="font-bold text-custom text-[12px] flex justify-start mt-[-12px]">รูปภาพก่อนเข้าหอพัก
                            </div>
                            <div class="flex mt-[12px]">
                                <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start" id="upload"
                                    hidden type="file" />
                                <label for="upload">
                                    <div
                                        class="h-[28px] w-[120px] flex justify-center text-custom items-center bg-[#165D98] text-[14px] text-[white] rounded-[12px]">
                                        อัพโหลดรูปภาพ</div>
                                </label>

                                <!-- <div
                                    class="text-[#5C6B79] text-custom flex justify-center items-center ml-[8px] text-[12px]">
                                    ยังไม่ได้เลือกไฟล์</div> -->
                            </div>
                        </div>
                        <div class="flex flex-col justify-center items-center ml-[50px]">
                            <div class="font-bold text-custom text-[12px] flex justify-start mt-[-12px]">รูปภาพก่อนย้ายออก
                            </div>
                            <div class="flex mt-[12px]">
                                <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start" id="upload"
                                    hidden type="file" />
                                <label for="upload">
                                    <div
                                        class="h-[28px] w-[120px] flex justify-center text-custom items-center bg-[#165D98] text-[14px] text-[white] rounded-[12px]">
                                        อัพโหลดรูปภาพ</div>
                                </label>

                                <!-- <div
                                    class="text-[#5C6B79] text-custom flex justify-center items-center ml-[8px] text-[12px]">
                                    ยังไม่ได้เลือกไฟล์</div> -->
                            </div>
                        </div>
                        <div class="flex flex-col justify-center items-start ml-[50px]">
                            <div class="font-bold text-custom text-[12px] flex justify-start items-start">หมายเหตุ</div>
                            <div><input class="h-[28px] w-[280px] bg-[#F3F8FD] rounded-[12px]  flex justify-start"
                                    type="input" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-[14px]">
                    <div class="flex">
                        <div class=""><svg width="70" height="82" viewBox="0 0 70 82" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_2182_22211)">
                                    <rect x="6" y="6" width="54" height="66" rx="12" fill="#165D98" />
                                    <mask id="mask0_2182_22211" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="11"
                                        y="17" width="44" height="44">
                                        <rect x="11" y="17" width="44" height="44" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_2182_22211)">
                                        <path
                                            d="M16.9564 50.9167C16.5667 50.9167 16.2402 50.785 15.9769 50.5214C15.7137 50.2579 15.582 49.9313 15.582 49.5417V40.8334C15.582 40.1495 15.7442 39.4861 16.0686 38.8432C16.3929 38.2004 16.8419 37.6721 17.4154 37.2585V32.5835C17.4154 31.3025 17.859 30.2184 18.7463 29.3312C19.6336 28.4439 20.7177 28.0002 21.9987 28.0002H29.7904C30.4579 28.0002 31.0561 28.1301 31.5849 28.3898C32.1137 28.6495 32.585 29.0086 32.9987 29.4669C33.4123 29.0086 33.8836 28.6495 34.4124 28.3898C34.9413 28.1301 35.5394 28.0002 36.2069 28.0002H43.9987C45.2796 28.0002 46.3637 28.4439 47.251 29.3312C48.1383 30.2184 48.5819 31.3025 48.5819 32.5835V37.2585C49.1554 37.6721 49.6044 38.2004 49.9287 38.8432C50.2531 39.4861 50.4153 40.1495 50.4153 40.8334V49.5417C50.4153 49.9313 50.2834 50.2579 50.0198 50.5214C49.7561 50.785 49.4294 50.9167 49.0397 50.9167C48.6499 50.9167 48.3234 50.785 48.0602 50.5214C47.7969 50.2579 47.6653 49.9313 47.6653 49.5417V47.2501H18.332V49.5417C18.332 49.9313 18.2002 50.2579 17.9365 50.5214C17.6729 50.785 17.3462 50.9167 16.9564 50.9167ZM34.3736 36.2502H45.832V32.5835C45.832 32.064 45.6563 31.6286 45.3049 31.2772C44.9535 30.9258 44.5181 30.7502 43.9987 30.7502H36.2069C35.6875 30.7502 35.2521 30.9258 34.9007 31.2772C34.5493 31.6286 34.3736 32.064 34.3736 32.5835V36.2502ZM20.1653 36.2502H31.6237V32.5835C31.6237 32.064 31.448 31.6286 31.0966 31.2772C30.7452 30.9258 30.3098 30.7502 29.7904 30.7502H21.9987C21.4792 30.7502 21.0438 30.9258 20.6924 31.2772C20.341 31.6286 20.1653 32.064 20.1653 32.5835V36.2502ZM18.332 44.5001H47.6653V40.8334C47.6653 40.314 47.4896 39.8786 47.1382 39.5272C46.7869 39.1758 46.3514 39.0001 45.832 39.0001H20.1653C19.6459 39.0001 19.2105 39.1758 18.8591 39.5272C18.5077 39.8786 18.332 40.314 18.332 40.8334V44.5001Z"
                                            fill="white" />
                                    </g>
                                </g>
                                <defs>
                                    <filter id="filter0_d_2182_22211" x="0" y="0" width="70" height="82"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="2" dy="2" />
                                        <feGaussianBlur stdDeviation="4" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                            result="effect1_dropShadow_2182_22211" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2182_22211"
                                            result="shape" />
                                    </filter>
                                </defs>
                            </svg>

                        </div>
                        <div
                            class="flex justify-start items-center text-[16px] font-bold text-custom text-[#003765] w-[150px]">
                            เตียง</div>
                        <div class="flex flex-col justify-center items-center ml-[50px]">
                            <div class="font-bold text-custom text-[12px]">ค่าปรับกรณีเสียหาย (บาท)</div>
                            <div><input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start" type="input" />
                            </div>
                        </div>
                        <div class="flex flex-col justify-center items-center ml-[50px]">
                            <div class="font-bold text-custom text-[12px] flex justify-start mt-[-12px]">รูปภาพก่อนเข้าหอพัก
                            </div>
                            <div class="flex mt-[12px]">
                                <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start" id="upload"
                                    hidden type="file" />
                                <label for="upload">
                                    <div
                                        class="h-[28px] w-[120px] flex justify-center text-custom items-center bg-[#165D98] text-[14px] text-[white] rounded-[12px]">
                                        อัพโหลดรูปภาพ</div>
                                </label>

                                <!-- <div
                                    class="text-[#5C6B79] text-custom flex justify-center items-center ml-[8px] text-[12px]">
                                    ยังไม่ได้เลือกไฟล์</div> -->
                            </div>
                        </div>
                        <div class="flex flex-col justify-center items-center ml-[50px]">
                            <div class="font-bold text-custom text-[12px] flex justify-start mt-[-12px]">รูปภาพก่อนย้ายออก
                            </div>
                            <div class="flex mt-[12px]">
                                <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start" id="upload"
                                    hidden type="file" />
                                <label for="upload">
                                    <div
                                        class="h-[28px] w-[120px] flex justify-center text-custom items-center bg-[#165D98] text-[14px] text-[white] rounded-[12px]">
                                        อัพโหลดรูปภาพ</div>
                                </label>

                                <!-- <div
                                    class="text-[#5C6B79] text-custom flex justify-center items-center ml-[8px] text-[12px]">
                                    ยังไม่ได้เลือกไฟล์</div> -->
                            </div>
                        </div>
                        <div class="flex flex-col justify-center items-start ml-[50px]">
                            <div class="font-bold text-custom text-[12px] flex justify-start items-start">หมายเหตุ</div>
                            <div><input class="h-[28px] w-[280px] bg-[#F3F8FD] rounded-[12px]  flex justify-start"
                                    type="input" />
                            </div>
                        </div>
                    </div>
                    <div class="w-[100%] h-[1px]  mt-[24px] mb-[24px] bg-gray-200 border-0 dark:bg-gray-700"></div>
                    <div class=" flex w-[100%] justify-between">
                        <div class="w-[48%] flex justify-center items-start text-custom">
                            <div>
                                <div class="flex justify-start items-start">คืนเงินประกัน</div>
                                <div class="flex mt-[14px] justify-center items-center">
                                    <div>
                                        <div
                                            class="font-bold text-custom text-[#8396A6] text-[12px] flex justify-start items-start">
                                            รายการ
                                        </div>
                                        <div>
                                            <input
                                                class="h-[28px] w-[200px] bg-[#F3F8FD] rounded-[12px]  flex justify-start"
                                                type="input" />
                                        </div>
                                    </div>
                                    <div class="ml-[8px]">
                                        <div>
                                            <div
                                                class="font-bold text-custom text-[#8396A6] text-[12px] flex justify-start items-start">
                                                จำนวนเงิน(บาท)
                                            </div>
                                            <div>
                                                <input
                                                    class="h-[28px] w-[80px] bg-[#F3F8FD] rounded-[12px]  flex justify-start"
                                                    type="input" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ml-[8px] ">
                                        <div>
                                            <div
                                                class="font-bold text-custom text-[12px] flex text-[white] justify-start items-start">
                                                .
                                            </div>
                                            <div class="flex justify-center items-center mt-[4px] cursor-pointer"> <svg
                                                    width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="32" height="32" rx="8" fill="#D44769" />
                                                    <mask id="mask0_1747_22483" style="mask-type:alpha"
                                                        maskUnits="userSpaceOnUse" x="5" y="5" width="22" height="22">
                                                        <rect x="5" y="5" width="22" height="22" fill="#D9D9D9" />
                                                    </mask>
                                                    <g mask="url(#mask0_1747_22483)">
                                                        <path
                                                            d="M10.5 16.6875C10.3052 16.6875 10.1419 16.6215 10.0102 16.4897C9.87839 16.3579 9.8125 16.1945 9.8125 15.9997C9.8125 15.8048 9.87839 15.6415 10.0102 15.5099C10.1419 15.3783 10.3052 15.3125 10.5 15.3125H21.5C21.6948 15.3125 21.8581 15.3784 21.9898 15.5102C22.1216 15.6421 22.1875 15.8054 22.1875 16.0003C22.1875 16.1952 22.1216 16.3584 21.9898 16.49C21.8581 16.6216 21.6948 16.6875 21.5 16.6875H10.5Z"
                                                            fill="white" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    class="bg-[#165D98] w-[288px] rounded-[12px] flex justify-center items-center pt-[4px] pb-[4px]">
                                    <div class="flex">
                                        <div class="flex justify-center items-center "><svg width="14" height="13"
                                                viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.99968 12.6875C6.8048 12.6875 6.64155 12.6216 6.50993 12.4898C6.37831 12.3581 6.3125 12.1948 6.3125 12V7.18746H1.49998C1.30519 7.18746 1.14191 7.12155 1.01016 6.98973C0.878385 6.8579 0.8125 6.69455 0.8125 6.49968C0.8125 6.3048 0.878385 6.14155 1.01016 6.00993C1.14191 5.87831 1.30519 5.8125 1.49998 5.8125H6.3125V0.999977C6.3125 0.805185 6.37841 0.641904 6.51023 0.510133C6.64206 0.378378 6.80541 0.3125 7.00028 0.3125C7.19516 0.3125 7.35841 0.378378 7.49003 0.510133C7.62165 0.641904 7.68745 0.805185 7.68745 0.999977V5.8125H12.5C12.6948 5.8125 12.8581 5.87841 12.9898 6.01023C13.1216 6.14206 13.1875 6.30541 13.1875 6.50028C13.1875 6.69516 13.1216 6.85841 12.9898 6.99003C12.8581 7.12164 12.6948 7.18746 12.5 7.18746H7.68745V12C7.68745 12.1948 7.62155 12.3581 7.48973 12.4898C7.3579 12.6216 7.19455 12.6875 6.99968 12.6875Z"
                                                    fill="white" />
                                            </svg>
                                        </div>
                                        <div class="text-[white] ml-[4px]">เพิ่มรายการคืนเงิน</div>
                                    </div>
                                </button>
                                <div class="flex mt-[24px]">
                                    <div>
                                        <div class="font-bold text-custom text-[12px] flex justify-start items-start">
                                            รวมทั้งหมด
                                        </div>
                                    </div>
                                    <div class="ml-[168px]">
                                        <div>
                                            <div class="font-bold text-custom text-[12px] flex justify-start items-start">
                                                1,000
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-[2%] flex justify-center items-center ">
                            <div class="w-[1px] h-[100%] bg-gray-200 border-0 dark:bg-gray-700"></div>
                        </div>
                        <div class="w-[48%] flex flex-col justify-center items-center pl-[100px] pr-[100px] ">
                            <div class="text-custom text-[18px] font-bold text-[#003765]">สรุปการย้ายออก</div>
                            <div class="w-[100%] mt-[14px]">
                                <div class="flex justify-between w-[100%]">
                                    <div class="text-custom ">ค้างชำระ</div>
                                    <div class="text-custom ">4500 <span class="ml-[4px] text-custom ">บาท</span></div>
                                </div>
                                <div class="flex justify-between w-[100%] mt-[4px]">
                                    <div class="text-custom ">ค่าปรับทรัพย์สินเสียหาย(ทีวี)</div>
                                    <div class="text-custom ">4500 <span class="ml-[4px] text-custom ">บาท</span></div>
                                </div>
                                <div class="flex justify-between w-[100%] mt-[4px]">
                                    <div class="text-custom ">คืนเงินประกัน</div>
                                    <div class="text-custom ">4500 <span class="ml-[4px] text-custom ">บาท</span></div>
                                </div>
                            </div>
                            <div class="text-custom text-[12px] font-bold text-[#003765]">วันที่ย้ายออก</div>
                            <div>
                                <input class="h-[28px] w-[180px] bg-[#F3F8FD] rounded-[12px]  flex justify-start"
                                    type="input" />
                            </div>
                            <div>
                                <button
                                    class="bg-[#165D98] mb-[36px] rounded-[12px] flex justify-center items-center mt-[8px] pl-[14px] pr-[14px] pt-[4px] pb-[4px]">
                                    <div class="flex">
                                        <div class="flex justify-center items-center ">
                                            <svg width="22" height="23" viewBox="0 0 22 23" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_3285_9902" style="mask-type:alpha"
                                                    maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="23">
                                                    <rect y="0.5" width="22" height="22" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_3285_9902)">
                                                    <path
                                                        d="M14.6652 8.11546V5.36546H7.33187V8.11546H5.9569V4.81532C5.9569 4.58155 6.0363 4.38564 6.19511 4.22757C6.35391 4.06951 6.55068 3.99048 6.78543 3.99048H15.208C15.4466 3.99048 15.645 4.06954 15.8031 4.22767C15.9611 4.38579 16.0402 4.58173 16.0402 4.81548V8.11546H14.6652ZM16.3222 11.7821C16.582 11.7821 16.7997 11.6942 16.9754 11.5185C17.1511 11.3428 17.2389 11.1251 17.2389 10.8654C17.2389 10.6057 17.1511 10.388 16.9754 10.2123C16.7997 10.0366 16.582 9.94874 16.3222 9.94874C16.0625 9.94874 15.8448 10.0366 15.6691 10.2123C15.4934 10.388 15.4056 10.6057 15.4056 10.8654C15.4056 11.1251 15.4934 11.3428 15.6691 11.5185C15.8448 11.6942 16.0625 11.7821 16.3222 11.7821ZM7.61395 17.9167H14.3831C14.4654 17.9167 14.533 17.8903 14.5859 17.8374C14.6388 17.7845 14.6652 17.7169 14.6652 17.6346V14.0032H7.33187V17.6346C7.33187 17.7169 7.35832 17.7845 7.41121 17.8374C7.4641 17.8903 7.53168 17.9167 7.61395 17.9167ZM7.61395 19.2917C7.15826 19.2917 6.76817 19.1294 6.44367 18.8049C6.11915 18.4804 5.9569 18.0903 5.9569 17.6346V15.625H3.38319C3.14845 15.625 2.95168 15.5456 2.79288 15.3868C2.63409 15.228 2.55469 15.0312 2.55469 14.7965V10.4071C2.55469 9.75779 2.77651 9.21352 3.22014 8.77429C3.66378 8.33507 4.20583 8.11546 4.84631 8.11546H17.1508C17.8001 8.11546 18.3443 8.33507 18.7836 8.77429C19.2228 9.21352 19.4424 9.75779 19.4424 10.4071V14.7965C19.4424 15.0312 19.363 15.228 19.2042 15.3868C19.0454 15.5456 18.8486 15.625 18.6139 15.625H16.0402V17.6346C16.0402 18.0903 15.8779 18.4804 15.5534 18.8049C15.2289 19.1294 14.8388 19.2917 14.3831 19.2917H7.61395ZM18.0674 14.25V10.4071C18.0674 10.1474 17.9796 9.92965 17.8039 9.75395C17.6282 9.57826 17.4105 9.49041 17.1508 9.49041H4.84631C4.58659 9.49041 4.36888 9.57826 4.19318 9.75395C4.01749 9.92965 3.92964 10.1474 3.92964 10.4071V14.25H5.9569V12.6283H16.0402V14.25H18.0674Z"
                                                        fill="white" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="text-[white] ml-[4px] ">พิมพ์</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </b-modal>
    </div>
</template>
<script>
export default {
    data() {
        return {
            create: false,
            contract: [],
        }
    },
    created() {
        const loading = this.$vs.loading({})
        setTimeout(() => {
            loading.close()
        }, 1000)
    },
    mounted() {
        this.getRentalContract()
    },
    methods: {
        getRentalContract() {
            this.contract = []
            const loading = this.$vs.loading()
            fetch('https://api.resguru.app/api' + '/rooms?filters[room_building][id][$eq]=' + this.$store.state.building + '&populate=deep,3&filters[user_sign_contract][room][id][$eq]=' +  this.$route.query.id_room)
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getRentalContract()", resp.data);
                    this.contract = resp.data
                }).finally(() => {
                    loading.close()
                })
        },
    }
}

</script>