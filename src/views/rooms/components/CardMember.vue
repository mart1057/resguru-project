<template>
    <div>
        <div class="grid grid-cols-7 w-[100%] gap-4 mt-[14px]">
            <div class="h-[212px] border rounded-[12px] flex flex-col justify-between items-center p-[14px] cursor-pointer "
                v-for="data in user" @click="getDetailRentalContract()">
                <div :class="status == 'rent' ? 'bg-[#D7F1E3] text-[#39B974]' : 'bg-[#F0F8FF] text-[#003765]'"
                    class="h-[24px] w-[auto] mt-[-22px] text-[12px] flex items-center justify-center p-[8px] rounded-[8px]">
                    {{ status == "rent" ? 'ทำสัญญาแล้ว' : 'ยังไม่ทำสัญญา' }}
                </div>
                <img class="w-[78px] h-[78px] rounded-[22px]" :src="data.filePath" />
                <div>{{ data.firstName }} {{ data.lastName }}</div>
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
                    <div class="flex justify-center items-center ml-[4px] text-[12px]">{{ data.phone }}</div>
                </div>
                <div class="flex justify-around w-[100%]">
                    <div
                        class="bg-[#003765] text-[white] pl-[8px] pr-[8px] pt-[1px] pb-[1px] flex justify-center items-center text-[12px] rounded-[8px]">
                        ย้ายห้อง</div>
                    <div @click="deleteContract()"
                        class="bg-[#D44769] text-[white] pl-[8px] pr-[8px] pt-[1px] pb-[1px] flex justify-center items-center text-[12px] rounded-[8px]">
                        ลบผู้เช่า</div>
                </div>
            </div>
            <div class="h-[212px] border rounded-[12px] flex flex-col justify-center items-center p-[14px] cursor-pointer"
                v-if="user.length == 0" @click="is_edit = false, create = true, getUsers()">
                <div class="flex flex-col">
                    <div>
                        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="38" cy="38" r="38" fill="#F3F7FA" />
                            <mask id="mask0_2514_22683" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="7" y="7"
                                width="62" height="62">
                                <rect x="7.60156" y="7.6001" width="60.8" height="60.8" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_2514_22683)">
                                <path
                                    d="M38.0015 55.1003C37.4629 55.1003 37.0117 54.9182 36.648 54.5541C36.2842 54.1899 36.1023 53.7387 36.1023 53.2003V39.9003H22.8023C22.2639 39.9003 21.8127 39.7181 21.4486 39.3538C21.0844 38.9895 20.9023 38.538 20.9023 37.9995C20.9023 37.4609 21.0844 37.0098 21.4486 36.646C21.8127 36.2823 22.2639 36.1004 22.8023 36.1004H36.1023V22.8003C36.1023 22.262 36.2845 21.8107 36.6488 21.4466C37.0131 21.0825 37.4646 20.9004 38.0031 20.9004C38.5417 20.9004 38.9929 21.0825 39.3566 21.4466C39.7203 21.8107 39.9022 22.262 39.9022 22.8003V36.1004H53.2023C53.7406 36.1004 54.1919 36.2825 54.556 36.6468C54.9202 37.0112 55.1022 37.4626 55.1022 38.0012C55.1022 38.5397 54.9202 38.9909 54.556 39.3546C54.1919 39.7184 53.7406 39.9003 53.2023 39.9003H39.9022V53.2003C39.9022 53.7387 39.7201 54.1899 39.3558 54.5541C38.9914 54.9182 38.54 55.1003 38.0015 55.1003Z"
                                    fill="#B9CCDC" />
                            </g>
                        </svg>
                    </div>
                    <div class="flex justify-center mt-[4px]">เพิ่มผู้เช่า</div>
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
                                <div class="grid grid-cols-2  text-custom " v-if="is_edit == false">
                                    <div class="flex">
                                        <vs-radio v-model="room_detail.check_user" color="#003765" :val="true">
                                            ผู้เช่าในระบบ
                                        </vs-radio>
                                        <vs-radio v-model="room_detail.check_user" color="#003765" :val="false">
                                            ผู้เช่าใหม่
                                        </vs-radio>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2  text-custom mt-[14px]  "
                                    v-if="room_detail.check_user == true && is_edit == false">
                                    <div>
                                        <div class="">เลือกข้อมูลผู้เช่า</div>
                                        <select placeholder="Select" v-model="id_user" @change="getUserDetail()"
                                            class="h-[36px] w-[100%] mt-[6px] rounded-[12px] pl-[8px] pr-[8px] bg-[#F3F7FA]">
                                            <option v-for="user in users" :value="user.id">
                                                {{ user.firstName }} {{ user.lastName }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="grid grid-cols-4 gap-2  text-custom mt-[14px] ">
                                    <div class="col-span-2">
                                        <div>อีเมลล์</div>
                                        <input type="input" placeholder="ทะเบียนรถ" v-model="room_detail.email"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                            :disabled="is_edit == true" />
                                    </div>
                                    <div class="col-span-1">
                                        <div>เลขมิเตอร์ค่าน้ำเริ่มต้น</div>
                                        <input type="input" placeholder="ค่าน้ำ"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                            :disabled="is_edit == true" />
                                    </div>
                                    <div class="col-span-1">
                                        <div>เลขมิเตอร์ค่าน้ำไฟเริ่มต้น</div>
                                        <input type="input" placeholder="ค่าไฟ"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                            :disabled="is_edit == true" />
                                    </div>
                                </div>
                                <div class="grid grid-cols-8  text-custom mt-[14px]  ">
                                    <div>
                                        <div>คำนำหน้า</div>
                                        <select placeholder="ชื่อ" id="mr"
                                            class="mt-[6px] pl-[4px] pr-[4px] h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                            v-model="room_detail.sex" :disabled="is_edit == true">
                                            <option label="นาย" :value="true">
                                                นาย
                                            </option>
                                            <option label="นางสาว" :value="false">
                                                นางสาว
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-span-3 ml-[8px]">
                                        <div>ชื่อ</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                            v-model="room_detail.name" :disabled="is_edit == true" />
                                    </div>
                                    <div class="col-span-3  ml-[8px]">
                                        <div>สกุล</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                            v-model="room_detail.last_name" :disabled="is_edit == true" />
                                    </div>
                                    <div class="ml-[8px]">
                                        <div>ชื่อเล่น</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                            v-model="room_detail.nick_name" :disabled="is_edit == true" />
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
                                    <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                        v-model="room_detail.phone" :disabled="is_edit == true" />
                                </div>
                                <div class="col-span-4  ml-[8px]">
                                    <div>หมายเลขบัตรประชาชน</div>
                                    <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                        v-model="room_detail.id_card" :disabled="is_edit == true" />
                                </div>
                            </div>
                        </div>
                        <div class="w-[100%] flex mt-[14px]">
                            <div class="w-[30%] text-custom flex items-start"></div>
                            <div class="grid grid-cols-6  text-custom w-[70%] ">
                                <div class="col-span-2">
                                    <div>วัน/เดือน/ปีเกิด (ค.ศ.)</div>
                                    <input type="date"
                                        class="h-[36px] mt-[6px] pl-[8px] pr-[8px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                        v-model="room_detail.birth" :disabled="is_edit == true" />
                                </div>
                            </div>
                        </div>
                        <div class="w-[100%] flex mt-[14px]">
                            <div class="w-[30%] text-custom flex items-start"></div>
                            <div class="grid grid-cols-6  text-custom w-[70%] ">
                                <div class="col-span-6">
                                    <div>ที่อยู่</div>
                                    <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                        v-model="room_detail.address" :disabled="is_edit == true" />
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
                                        <div>Line ID</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                            v-model="room_detail.lineID" :disabled="is_edit == true" />
                                    </div>
                                </div>
                                <div class="grid grid-cols-8  text-custom w-[100%] mt-[6px] ">
                                    <div class="col-span-8 ">
                                        <div>สถาบันการศึกษา / สถานที่ทำงานปัจจุบัน</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                            v-model="room_detail.workplace" :disabled="is_edit == true" />
                                    </div>
                                </div>
                                <div class="grid grid-cols-8 gap-2  text-custom w-[100%] mt-[6px] ">
                                    <div class="col-span-4 ">
                                        <div>คณะ / แผนก</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                            v-model="room_detail.faculty" :disabled="is_edit == true" />
                                    </div>
                                    <div class="col-span-4 ">
                                        <div>ชั้นปี / ตำแหน่ง</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                            v-model="room_detail.rank" :disabled="is_edit == true" />
                                    </div>
                                </div>
                                <div class="grid grid-cols-8  text-custom w-[100%] ">
                                    <div class="col-span-4 mt-[6px]">
                                        <div>รหัสนักศึกษา / รหัสพนักงาน</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                            v-model="room_detail.idEmployee" :disabled="is_edit == true" />
                                    </div>
                                </div>
                                <div class="grid grid-cols-8 gap-2  text-custom w-[100%] mt-[6px] ">
                                    <div class="col-span-4 ">
                                        <div>บุคลที่สามารถติดต่อได้กรณีฉุกเฉิน</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                            v-model="room_detail.emergencyPerson" :disabled="is_edit == true" />
                                    </div>
                                    <div class="col-span-2">
                                        <div>ความสัมพันธ์</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                            v-model="room_detail.relation" :disabled="is_edit == true" />
                                    </div>
                                    <div class="col-span-2">
                                        <div>เบอร์โทรศัพท์ผู้ติดต่อฉุกเฉิน</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                            v-model="room_detail.emergencyPhone" :disabled="is_edit == true" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-[100%] flex mt-[14px]">
                            <div class="w-[30%] text-custom flex  items-start">ข้อมูลยานพหนะ</div>
                            <div class="w-[70%]">
                                <div class="grid grid-cols-8  text-custom w-[100%] " v-for="data in  room_detail.vehicles">
                                    <div class="col-span-2">
                                        <div>คันที่ 1</div>
                                        <select placeholder="ชื่อ" class="h-[36px] w-[100%] mt-[6px] rounded-[12px] pl-[8px] pr-[8px] bg-[#F3F7FA]" v-model="data.attributes.Type">
                                            <option label="รถยนต์" value="Car">
                                                รถยนต์
                                            </option>
                                            <option label="มอเตอร์ไซต์" value="Motocycle">
                                                มอเตอร์ไซต์
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-span-3  ml-[8px]">
                                        <div class="text-[white]">.</div>
                                        <input type="input" placeholder="ทะเบียนรถ"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" v-model="data.attributes.licensePlate"/>
                                    </div>
                                    <div class="col-span-3  ml-[8px]">
                                        <div class="text-[white]">.</div>
                                        <input type="input" placeholder="รายละเอียดรถ"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"  v-model="data.attributes.remark"/>
                                    </div>
                                </div>
                                <div class="grid grid-cols-8  text-custom w-[100%] ">
                                    <div class="col-span-3 mt-[6px]" >
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
                        <vs-button @click="create = false" color="#003765">
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
    props: {
        id_user: { type: String },
        id_room: { type: String },
        id_contract: { type: String },
        status: { type: String }
    },
    data() {
        return {
            create: false,
            user: [],
            users: [],
            is_edit: true,
            room_detail: {
                sex: null,
                check_user: true,
                email: '',
                name: '',
                last_name: '',
                nick_name: '',
                phone: '',
                id_card: '',
                birth: '',
                address: '',
                date_sign: '',
                exp_date: '',
                roomInsurance_deposit: '',
                contract_duration: '',
                room_deposit: '',
                type_room: '',
                workplace: '',
                faculty: '',
                rank: '',
                idEmployee: '',
                emergencyPerson: '',
                relation: '',
                emergencyPhone: '',
                lineID: '',
                vehicles: []
            },
        }
    },
    created() {
        const loading = this.$vs.loading({})
        setTimeout(() => {
            loading.close()
        }, 1000)
    },
    mounted() {
        this.getUser()
    },
    methods: {
        getUser() {
            const loading = this.$vs.loading()
            fetch('http://203.170.190.170:1337/api' + '/users?filters[id][$eq]=' + this.id_user)
                .then(response => response.json())
                .then((resp) => {
                    this.user = resp
                }).finally(() => {
                    loading.close()
                })
        },
        getUsers() {
            fetch('http://203.170.190.170:1337/api' + '/users?filters[room_building][id][$eq]=' + this.$store.state.building + '&populate=deep')
                .then(response => response.json())
                .then((resp) => {
                    // console.log(resp);
                    this.users = resp
                })
        },
        deleteContract() {
            axios.delete('http://203.170.190.170:1337/api' + '/user-sign-contracts/' + this.id_contract)
                .finally(() => {
                    this.$router.push({
                        path: '/rooms',
                    })
                })
        },
        getDetailRentalContract(id) {
            const loading = this.$vs.loading()
            fetch('http://203.170.190.170:1337/api' + '/rooms?filters[room_building][id][$eq]=' + this.$store.state.building + '&populate=deep&filters[id][$eq]=' + this.id_room)
                .then(response => response.json())
                .then((resp) => {
                    console.log('ddd', resp.data[0]?.attributes.user_sign_contract.data);
                    this.room_detail.name = resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.firstName
                    this.room_detail.email = resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.email
                    this.room_detail.last_name = resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.lastName
                    this.room_detail.nick_name = resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.nickName
                    this.room_detail.phone = resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.phone
                    this.room_detail.id_card = resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.idCard
                    this.room_detail.address = resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.contactAddress
                    this.room_detail.sex = resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.sex
                    this.room_detail.birth = resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.dateOfBirth
                    this.room_detail.date_sign = resp.data[0]?.attributes.user_sign_contract.data?.attributes.checkInDate
                    this.room_detail.type_room = resp.data[0]?.attributes.user_sign_contract.data?.attributes.room.data?.attributes.room_type.data?.attributes.roomTypeName
                    this.room_detail.contract_duration = resp.data[0]?.attributes.user_sign_contract.data?.attributes.contractDuration
                    this.room_detail.roomInsurance_deposit = resp.data[0]?.attributes.user_sign_contract.data?.attributes.roomInsuranceDeposit
                    this.room_detail.room_deposit = resp.data[0]?.attributes.user_sign_contract.data?.attributes.roomDeposit
                    this.room_detail.workplace = resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.workplace,
                        this.room_detail.faculty = resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.faculty,
                        this.room_detail.rank = resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.rank,
                        this.room_detail.idEmployee = resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.idEmployee,
                        this.room_detail.emergencyPerson = resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.emergencyPerson,
                        this.room_detail.relation = resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.relation,
                        this.room_detail.emergencyPhone = resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.emergencyPhone,
                        this.room_detail.lineID = resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data?.attributes.lineID
                    fetch('http://203.170.190.170:1337/api' + '/tenant-vehicles?&populate=*&filters[users_permissions_user][id][$eq]=' + resp.data[0]?.attributes.user_sign_contract.data?.attributes.users_permissions_user.data.id)
                        .then(response => response.json())
                        .then((resp) => {
                            this.room_detail.vehicles = resp.data;
                        })
                }).finally(() => {
                    loading.close()
                    this.create = true
                })
        },
        addUser() {
            axios.post('http://203.170.190.170:1337/api' + '/users', {
                data: {

                }
            })
        }
    }
}

</script>