<template>
    <div>
        <div class="flex justify-start items-center rounded-[12px] mt-[14px]">
            <div class="bg-[#F3F7FA] rounded-[12px]">
                <div class="flex justify-start items-center">
                    <div @click="tab = 1" class="cursor-pointer "
                        :class="tab == 1 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[12px] text-[white]' : 'text-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] flex justify-center items-center'">
                        ข้อมูลโปรไฟล์</div>
                    <div @click="tab = 2" class="cursor-pointer ml-[8px]"
                        :class="tab == 2 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[12px] text-[white]' : 'text-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] flex justify-center items-center'">
                        ข้อมูลที่พัก
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-[14px]">
            <div class="h-[238px] rounded-[22px] bg-[#5C6B79] flex justify-end items-end p-[14px]">
                <div class="rounded-[22px] pl-[8px] pr-[8px] bg-[white] pt-[4px] pb-[4px]">เปลี่ยนรูปภาพปก</div>
            </div>
            <div class="flex w-[100%]">
                <div class="w-[20%] ml-[18px] mt-[-70px]">
                    <div class="bg-[white] rounded-[22px] w-[246px] h-[242px] border p-[14px] flex flex-col items-center">
                        <div class="bg-[#f7f3f3] rounded-[22px] w-[150px] h-[150px] border"></div>
                        <div class="text-[18px] font-bold mt-[8px]">วรันธร สยนานนท์</div>
                    </div>
                    <div class="h-[107px] bg-[#9A77FF] rounded-[22px] mt-[14px] p-[14px]" v-if="tab == 1">
                        <div>
                            <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.65625 20.8306V12.5024L2.62497 8.27996V16.4062C2.62497 16.4661 2.6394 16.5222 2.66826 16.5745C2.69709 16.6269 2.74036 16.6718 2.79805 16.7092L9.65625 20.8306ZM11.3437 20.8306L18.2019 16.7092C18.2596 16.6718 18.3029 16.6269 18.3317 16.5745C18.3605 16.5222 18.375 16.4661 18.375 16.4062V8.27996L11.3437 12.5024V20.8306ZM10.5 10.9947L17.4469 6.83064L10.6731 2.76749C10.6154 2.73009 10.5577 2.7114 10.5 2.7114C10.4423 2.7114 10.3846 2.73009 10.3269 2.76749L3.55307 6.83064L10.5 10.9947ZM1.95433 18.246C1.63414 18.0545 1.38462 17.7987 1.20578 17.4787C1.02693 17.1586 0.9375 16.8071 0.9375 16.4242V7.57549C0.9375 7.19259 1.02693 6.84111 1.20578 6.52103C1.38462 6.20094 1.63414 5.94516 1.95433 5.75371L9.48314 1.25983C9.80334 1.06838 10.1423 0.972656 10.5 0.972656C10.8577 0.972656 11.1966 1.06838 11.5168 1.25983L19.0456 5.75371C19.3658 5.94516 19.6153 6.20094 19.7942 6.52103C19.973 6.84111 20.0624 7.19259 20.0624 7.57549V16.4242C20.0624 16.8071 19.973 17.1586 19.7942 17.4787C19.6153 17.7987 19.3658 18.0545 19.0456 18.246L11.5168 22.7399C11.1966 22.9313 10.8577 23.027 10.5 23.027C10.1423 23.027 9.80334 22.9313 9.48314 22.7399L1.95433 18.246Z"
                                    fill="white" />
                            </svg>
                        </div>
                        <div class="text-white mt-[4px]">แพ็กเกจปัจจุบัน</div>
                        <div class="text-[18px] font-bold mt-[4px] text-white">Professional</div>

                    </div>
                </div>
                <div class="w-[100%] ml-[24px] mt-[8px]" v-if="tab == 1">
                    <div class="grid grid-cols-4 w-[100%] gap-2 ">
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">ชื่อ</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input" />
                        </div>
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">นามสกุล</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input" />
                        </div>
                        <div class="mt-[8px] col-span-4">
                            <div class="text-custom text-[14px] text-[#003765]">ที่อยู่</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input" />
                        </div>
                        <div class="">
                            <div class="text-custom text-[14px] text-[#003765] mb-[6px]">เขต</div>
                            <vs-select state="primary">
                                <vs-option label="อาคาร A" value="1">
                                    อาคาร A
                                </vs-option>
                                <vs-option label="อาคาร B" value="2">
                                    อาคาร B
                                </vs-option>
                            </vs-select>
                        </div>
                        <div class="">
                            <div class="text-custom text-[14px] text-[#003765]  mb-[6px]">แขวง</div>
                            <vs-select state="primary">
                                <vs-option label="อาคาร A" value="1">
                                    อาคาร A
                                </vs-option>
                                <vs-option label="อาคาร B" value="2">
                                    อาคาร B
                                </vs-option>
                            </vs-select>
                        </div>
                        <div class="">
                            <div class="text-custom text-[14px] text-[#003765]  mb-[6px]">จังหวัด</div>
                            <vs-select state="primary">
                                <vs-option label="อาคาร A" value="1">
                                    อาคาร A
                                </vs-option>
                                <vs-option label="อาคาร B" value="2">
                                    อาคาร B
                                </vs-option>
                            </vs-select>
                        </div>
                        <div class="">
                            <div class="text-custom text-[14px] text-[#003765]  mb-[6px]">รหัสไปรษณีย์</div>
                            <vs-select state="primary">
                                <vs-option label="อาคาร A" value="1">
                                    อาคาร A
                                </vs-option>
                                <vs-option label="อาคาร B" value="2">
                                    อาคาร B
                                </vs-option>
                            </vs-select>
                        </div>
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">เบอร์ติดต่อ</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input" />
                        </div>
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">Email</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input" />
                        </div>
                    </div>
                    <div class="mt-[44px] mb-[50px]">
                        <vs-button dark shadow>
                            <div class="font-bold">บันทึก</div>
                        </vs-button>
                    </div>
                </div>
                <div class="w-[100%] ml-[24px] mt-[8px]" v-if="tab == 2">
                    <div class="grid grid-cols-4 w-[100%] gap-2 ">
                        <div class="mt-[8px] col-span-4">
                            <div class="text-custom text-[14px] text-[#003765]">ชื่ออพาร์ทเม้นท์</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input" />
                        </div>
                        <div class="mt-[8px] col-span-4">
                            <div class="text-custom text-[14px] text-[#003765]">ที่อยู่</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input" />
                        </div>
                        <div class="">
                            <div class="text-custom text-[14px] text-[#003765] mb-[6px]">เขต</div>
                            <vs-select state="primary">
                                <vs-option label="อาคาร A" value="1">
                                    อาคาร A
                                </vs-option>
                                <vs-option label="อาคาร B" value="2">
                                    อาคาร B
                                </vs-option>
                            </vs-select>
                        </div>
                        <div class="">
                            <div class="text-custom text-[14px] text-[#003765]  mb-[6px]">แขวง</div>
                            <vs-select state="primary">
                                <vs-option label="อาคาร A" value="1">
                                    อาคาร A
                                </vs-option>
                                <vs-option label="อาคาร B" value="2">
                                    อาคาร B
                                </vs-option>
                            </vs-select>
                        </div>
                        <div class="">
                            <div class="text-custom text-[14px] text-[#003765]  mb-[6px]">จังหวัด</div>
                            <vs-select state="primary">
                                <vs-option label="อาคาร A" value="1">
                                    อาคาร A
                                </vs-option>
                                <vs-option label="อาคาร B" value="2">
                                    อาคาร B
                                </vs-option>
                            </vs-select>
                        </div>
                        <div class="">
                            <div class="text-custom text-[14px] text-[#003765]  mb-[6px]">รหัสไปรษณีย์</div>
                            <vs-select state="primary">
                                <vs-option label="อาคาร A" value="1">
                                    อาคาร A
                                </vs-option>
                                <vs-option label="อาคาร B" value="2">
                                    อาคาร B
                                </vs-option>
                            </vs-select>
                        </div>
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">เบอร์ติดต่อ</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input" />
                        </div>
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">Email</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input" />
                        </div>
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">ไลน์ติดต่อ</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input" />
                        </div>
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">เฟสบุ๊ค</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input" />
                        </div>
                        <div class="">
                            <div class="text-custom text-[14px] text-[#003765]  mb-[6px]">วันตัดรอบบิล</div>
                            <vs-select state="primary"   >
                                <vs-option label="อาคาร A" value="1">
                                    อาคาร A
                                </vs-option>
                                <vs-option label="อาคาร B" value="2">
                                    อาคาร B
                                </vs-option>
                            </vs-select>
                        </div>
                    </div>
                    <div class="mt-[44px] mb-[50px]">
                        <vs-button dark shadow>
                            <div class="font-bold">บันทึก</div>
                        </vs-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tab: 1

        }
    }
}

</script>