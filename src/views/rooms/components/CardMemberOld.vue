<template>
    <div>
        <div class="grid grid-cols-7 w-[100%] gap-4 mt-[14px]">
            <div class="h-[212px] border rounded-[12px] flex flex-col justify-between items-center p-[12px] cursor-pointer " @click="create = true">
                <div class="w-[78px] h-[78px] rounded-[22px] bg-[#8396A6]"></div>
                <div>ชัชพล บุญพันธุ์</div>
                <div class="flex">
                    <div><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_417_4380" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                width="16" height="16">
                                <rect width="16" height="16" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_417_4380)">
                                <path
                                    d="M12.9553 13.6283C11.6587 13.6283 10.3748 13.3206 9.10339 12.7052C7.83203 12.0899 6.697 11.2828 5.69829 10.2841C4.69957 9.28539 3.89145 8.15142 3.27394 6.8822C2.65642 5.61297 2.34766 4.33007 2.34766 3.0335C2.34766 2.8335 2.41432 2.66683 2.54766 2.5335C2.68099 2.40016 2.84766 2.3335 3.04766 2.3335H5.22197C5.39463 2.3335 5.54527 2.3867 5.67391 2.49311C5.80253 2.59952 5.88223 2.73692 5.91301 2.9053L6.29506 4.86681C6.32155 5.03091 6.31877 5.18006 6.28672 5.31425C6.25467 5.44844 6.18437 5.56553 6.07582 5.66553L4.54249 7.16425C5.06899 8.05827 5.69677 8.86596 6.42584 9.58733C7.1549 10.3087 7.98011 10.9378 8.90149 11.4745L10.3912 9.95913C10.4998 9.85059 10.6282 9.77345 10.7765 9.72773C10.9248 9.682 11.0767 9.67238 11.2322 9.69888L13.0835 10.0758C13.2519 10.1134 13.3893 10.1948 13.4957 10.32C13.6021 10.4452 13.6553 10.5942 13.6553 10.7668V12.9283C13.6553 13.1283 13.5886 13.295 13.4553 13.4283C13.322 13.5617 13.1553 13.6283 12.9553 13.6283ZM4.06302 6.21811L5.25277 5.07965C5.27414 5.06255 5.28803 5.03904 5.29444 5.00913C5.30085 4.97921 5.29978 4.95143 5.29122 4.9258L5.00149 3.43605C4.99293 3.40186 4.97797 3.37622 4.95661 3.35913C4.93524 3.34203 4.90746 3.33348 4.87327 3.33348H3.44764C3.422 3.33348 3.40062 3.34203 3.38352 3.35913C3.36643 3.37622 3.35789 3.39759 3.35789 3.42323C3.39207 3.87879 3.46664 4.34161 3.58161 4.8117C3.69656 5.28179 3.85703 5.75059 4.06302 6.21811ZM12.5656 12.6078C12.5912 12.6078 12.6126 12.5993 12.6297 12.5822C12.6468 12.5651 12.6553 12.5437 12.6553 12.5181V11.1155C12.6553 11.0813 12.6468 11.0536 12.6297 11.0322C12.6126 11.0108 12.5869 10.9959 12.5527 10.9873L11.1528 10.7027C11.1271 10.6942 11.1047 10.6931 11.0854 10.6995C11.0662 10.7059 11.0459 10.7198 11.0245 10.7412L9.83736 11.9412C10.2792 12.1472 10.7401 12.3046 11.2201 12.4136C11.7 12.5226 12.1485 12.5873 12.5656 12.6078Z"
                                    fill="#141629" />
                            </g>
                        </svg>
                    </div>
                    <div class="flex justify-center items-center ml-[4px] text-[12px]">0862347196</div>
                </div>
                <div class="flex justify-around w-[100%]">
                    <div
                        class=" text-[#8396A6] pl-[8px] pr-[8px] pt-[1px] pb-[1px] flex justify-center items-center text-[10px] rounded-[8px]">
                        วันที่เข้าพัก</div>
                    <div
                        class=" pl-[8px] pr-[8px] pt-[1px] pb-[1px] flex justify-center items-center text-[12px] rounded-[8px]">
                        12/03/2023</div>
                </div>
                <div class="flex justify-around w-[100%]">
                    <div
                        class=" text-[#8396A6] pl-[8px] pr-[8px] pt-[1px] pb-[1px] flex justify-center items-center text-[10px] rounded-[8px]">
                        วันที่ย้ายออก</div>
                    <div
                        class=" pl-[8px] pr-[8px] pt-[1px] pb-[1px] flex justify-center items-center text-[12px] rounded-[8px]">
                        12/03/2023</div>
                </div>
            </div>
            <div class="h-[212px] border rounded-[12px] flex flex-col justify-between items-center p-[12px] ">
                <div class="w-[78px] h-[78px] rounded-[22px] bg-[#8396A6]"></div>
                <div>ชัชพล บุญพันธุ์</div>
                <div class="flex">
                    <div><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_417_4380" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                width="16" height="16">
                                <rect width="16" height="16" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_417_4380)">
                                <path
                                    d="M12.9553 13.6283C11.6587 13.6283 10.3748 13.3206 9.10339 12.7052C7.83203 12.0899 6.697 11.2828 5.69829 10.2841C4.69957 9.28539 3.89145 8.15142 3.27394 6.8822C2.65642 5.61297 2.34766 4.33007 2.34766 3.0335C2.34766 2.8335 2.41432 2.66683 2.54766 2.5335C2.68099 2.40016 2.84766 2.3335 3.04766 2.3335H5.22197C5.39463 2.3335 5.54527 2.3867 5.67391 2.49311C5.80253 2.59952 5.88223 2.73692 5.91301 2.9053L6.29506 4.86681C6.32155 5.03091 6.31877 5.18006 6.28672 5.31425C6.25467 5.44844 6.18437 5.56553 6.07582 5.66553L4.54249 7.16425C5.06899 8.05827 5.69677 8.86596 6.42584 9.58733C7.1549 10.3087 7.98011 10.9378 8.90149 11.4745L10.3912 9.95913C10.4998 9.85059 10.6282 9.77345 10.7765 9.72773C10.9248 9.682 11.0767 9.67238 11.2322 9.69888L13.0835 10.0758C13.2519 10.1134 13.3893 10.1948 13.4957 10.32C13.6021 10.4452 13.6553 10.5942 13.6553 10.7668V12.9283C13.6553 13.1283 13.5886 13.295 13.4553 13.4283C13.322 13.5617 13.1553 13.6283 12.9553 13.6283ZM4.06302 6.21811L5.25277 5.07965C5.27414 5.06255 5.28803 5.03904 5.29444 5.00913C5.30085 4.97921 5.29978 4.95143 5.29122 4.9258L5.00149 3.43605C4.99293 3.40186 4.97797 3.37622 4.95661 3.35913C4.93524 3.34203 4.90746 3.33348 4.87327 3.33348H3.44764C3.422 3.33348 3.40062 3.34203 3.38352 3.35913C3.36643 3.37622 3.35789 3.39759 3.35789 3.42323C3.39207 3.87879 3.46664 4.34161 3.58161 4.8117C3.69656 5.28179 3.85703 5.75059 4.06302 6.21811ZM12.5656 12.6078C12.5912 12.6078 12.6126 12.5993 12.6297 12.5822C12.6468 12.5651 12.6553 12.5437 12.6553 12.5181V11.1155C12.6553 11.0813 12.6468 11.0536 12.6297 11.0322C12.6126 11.0108 12.5869 10.9959 12.5527 10.9873L11.1528 10.7027C11.1271 10.6942 11.1047 10.6931 11.0854 10.6995C11.0662 10.7059 11.0459 10.7198 11.0245 10.7412L9.83736 11.9412C10.2792 12.1472 10.7401 12.3046 11.2201 12.4136C11.7 12.5226 12.1485 12.5873 12.5656 12.6078Z"
                                    fill="#141629" />
                            </g>
                        </svg>
                    </div>
                    <div class="flex justify-center items-center ml-[4px] text-[12px]">0862347196</div>
                </div>
                <div class="flex justify-around w-[100%]">
                    <div
                        class=" text-[#8396A6] pl-[8px] pr-[8px] pt-[1px] pb-[1px] flex justify-center items-center text-[10px] rounded-[8px]">
                        วันที่เข้าพัก</div>
                    <div
                        class=" pl-[8px] pr-[8px] pt-[1px] pb-[1px] flex justify-center items-center text-[12px] rounded-[8px]">
                        12/03/2023</div>
                </div>
                <div class="flex justify-around w-[100%]">
                    <div
                        class=" text-[#8396A6] pl-[8px] pr-[8px] pt-[1px] pb-[1px] flex justify-center items-center text-[10px] rounded-[8px]">
                        วันที่ย้ายออก</div>
                    <div
                        class=" pl-[8px] pr-[8px] pt-[1px] pb-[1px] flex justify-center items-center text-[12px] rounded-[8px]">
                        12/03/2023</div>
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
                                            <svg width="22" height="23"
                                                viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            create: false
        }
    },
}

</script>