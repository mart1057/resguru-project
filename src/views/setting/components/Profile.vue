<template>
    <div class="bg-[white] pt-[14px] pb-[24px] pl-[24px] pr-[24px]">
        <div class="flex justify-start items-center rounded-[12px]">
            <div class="bg-[#F3F7FA] rounded-[12px]">
                <div class="flex justify-start items-center">
                    <div @click="tabSetting = 1" class="cursor-pointer "
                        :class="tabSetting == 1 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[12px] text-[white]' : 'text-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] flex justify-center items-center'">
                        ข้อมูลโปรไฟล์</div>
                    <div @click="tabSetting = 2" class="cursor-pointer ml-[8px]"
                        :class="tabSetting == 2 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[12px] text-[white]' : 'text-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] flex justify-center items-center'">
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
                    <div class="bg-[white] rounded-[22px] w-[246px] border p-[14px] flex flex-col items-center">
                        <img class="bg-[#f7f3f3] rounded-[22px] w-[150px] h-[150px] border"
                            src="https://media.wired.com/photos/63b89b5b995aa119ba7ba7be/1:1/w_1800,h_1800,c_limit/Profile-Photos-Gear-1411545652.jpg" />
                        <div class="text-[18px] font-bold mt-[8px]">{{ userData.firstName }} {{userData.lastName}}</div>
                        <div class="w-[100%]" v-if="tabSetting == 2">
                            <div class="w-[100%] mt-[8px]">
                                <div class="pt-[4px] w-[100%] rounded-[12px] flex justify-center bg-[#003765]">
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_1154_17403" style="mask-type:alpha" maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_1154_17403)">
                                                <path
                                                    d="M4.99997 11C4.59101 11 4.23877 10.8522 3.94327 10.5567C3.64776 10.2612 3.5 9.90897 3.5 9.5V4.99998C3.5 4.59101 3.64776 4.23878 3.94327 3.94328C4.23877 3.64776 4.59101 3.5 4.99997 3.5H9.5C9.90897 3.5 10.2612 3.64776 10.5567 3.94328C10.8522 4.23878 11 4.59101 11 4.99998V9.5C11 9.90897 10.8522 10.2612 10.5567 10.5567C10.2612 10.8522 9.90897 11 9.5 11H4.99997ZM4.99997 9.5H9.5V4.99998H4.99997V9.5ZM4.99997 20.5C4.59101 20.5 4.23877 20.3522 3.94327 20.0567C3.64776 19.7612 3.5 19.4089 3.5 19V14.5C3.5 14.091 3.64776 13.7387 3.94327 13.4432C4.23877 13.1477 4.59101 13 4.99997 13H9.5C9.90897 13 10.2612 13.1477 10.5567 13.4432C10.8522 13.7387 11 14.091 11 14.5V19C11 19.4089 10.8522 19.7612 10.5567 20.0567C10.2612 20.3522 9.90897 20.5 9.5 20.5H4.99997ZM4.99997 19H9.5V14.5H4.99997V19ZM14.5 11C14.091 11 13.7387 10.8522 13.4432 10.5567C13.1477 10.2612 13 9.90897 13 9.5V4.99998C13 4.59101 13.1477 4.23878 13.4432 3.94328C13.7387 3.64776 14.091 3.5 14.5 3.5H19C19.4089 3.5 19.7612 3.64776 20.0567 3.94328C20.3522 4.23878 20.5 4.59101 20.5 4.99998V9.5C20.5 9.90897 20.3522 10.2612 20.0567 10.5567C19.7612 10.8522 19.4089 11 19 11H14.5ZM14.5 9.5H19V4.99998H14.5V9.5ZM19.0865 20.5C18.9596 20.5 18.8509 20.4548 18.7605 20.3644C18.6701 20.274 18.625 20.1653 18.625 20.0384V19.0865C18.625 18.9596 18.6701 18.8509 18.7605 18.7605C18.8509 18.6701 18.9596 18.625 19.0865 18.625H20.0384C20.1653 18.625 20.274 18.6701 20.3644 18.7605C20.4548 18.8509 20.5 18.9596 20.5 19.0865V20.0384C20.5 20.1653 20.4548 20.274 20.3644 20.3644C20.274 20.4548 20.1653 20.5 20.0384 20.5H19.0865ZM13.4615 14.875C13.3346 14.875 13.2259 14.8298 13.1356 14.7394C13.0452 14.649 13 14.5404 13 14.4134V13.4615C13 13.3346 13.0452 13.2259 13.1356 13.1356C13.2259 13.0452 13.3346 13 13.4615 13H14.4134C14.5404 13 14.649 13.0452 14.7394 13.1356C14.8298 13.2259 14.875 13.3346 14.875 13.4615V14.4134C14.875 14.5404 14.8298 14.649 14.7394 14.7394C14.649 14.8298 14.5404 14.875 14.4134 14.875H13.4615ZM15.3365 16.75C15.2096 16.75 15.1009 16.7048 15.0106 16.6144C14.9202 16.524 14.875 16.4153 14.875 16.2884V15.3365C14.875 15.2096 14.9202 15.1009 15.0106 15.0106C15.1009 14.9202 15.2096 14.875 15.3365 14.875H16.2884C16.4153 14.875 16.524 14.9202 16.6144 15.0106C16.7048 15.1009 16.75 15.2096 16.75 15.3365V16.2884C16.75 16.4153 16.7048 16.524 16.6144 16.6144C16.524 16.7048 16.4153 16.75 16.2884 16.75H15.3365ZM13.4615 18.625C13.3346 18.625 13.2259 18.5798 13.1356 18.4894C13.0452 18.399 13 18.2903 13 18.1634V17.2115C13 17.0846 13.0452 16.9759 13.1356 16.8855C13.2259 16.7951 13.3346 16.75 13.4615 16.75H14.4134C14.5404 16.75 14.649 16.7951 14.7394 16.8855C14.8298 16.9759 14.875 17.0846 14.875 17.2115V18.1634C14.875 18.2903 14.8298 18.399 14.7394 18.4894C14.649 18.5798 14.5404 18.625 14.4134 18.625H13.4615ZM15.3365 20.5C15.2096 20.5 15.1009 20.4548 15.0106 20.3644C14.9202 20.274 14.875 20.1653 14.875 20.0384V19.0865C14.875 18.9596 14.9202 18.8509 15.0106 18.7605C15.1009 18.6701 15.2096 18.625 15.3365 18.625H16.2884C16.4153 18.625 16.524 18.6701 16.6144 18.7605C16.7048 18.8509 16.75 18.9596 16.75 19.0865V20.0384C16.75 20.1653 16.7048 20.274 16.6144 20.3644C16.524 20.4548 16.4153 20.5 16.2884 20.5H15.3365ZM17.2115 18.625C17.0846 18.625 16.9759 18.5798 16.8855 18.4894C16.7951 18.399 16.75 18.2903 16.75 18.1634V17.2115C16.75 17.0846 16.7951 16.9759 16.8855 16.8855C16.9759 16.7951 17.0846 16.75 17.2115 16.75H18.1634C18.2903 16.75 18.399 16.7951 18.4894 16.8855C18.5798 16.9759 18.625 17.0846 18.625 17.2115V18.1634C18.625 18.2903 18.5798 18.399 18.4894 18.4894C18.399 18.5798 18.2903 18.625 18.1634 18.625H17.2115ZM17.2115 14.875C17.0846 14.875 16.9759 14.8298 16.8855 14.7394C16.7951 14.649 16.75 14.5404 16.75 14.4134V13.4615C16.75 13.3346 16.7951 13.2259 16.8855 13.1356C16.9759 13.0452 17.0846 13 17.2115 13H18.1634C18.2903 13 18.399 13.0452 18.4894 13.1356C18.5798 13.2259 18.625 13.3346 18.625 13.4615V14.4134C18.625 14.5404 18.5798 14.649 18.4894 14.7394C18.399 14.8298 18.2903 14.875 18.1634 14.875H17.2115ZM19.0865 16.75C18.9596 16.75 18.8509 16.7048 18.7605 16.6144C18.6701 16.524 18.625 16.4153 18.625 16.2884V15.3365C18.625 15.2096 18.6701 15.1009 18.7605 15.0106C18.8509 14.9202 18.9596 14.875 19.0865 14.875H20.0384C20.1653 14.875 20.274 14.9202 20.3644 15.0106C20.4548 15.1009 20.5 15.2096 20.5 15.3365V16.2884C20.5 16.4153 20.4548 16.524 20.3644 16.6144C20.274 16.7048 20.1653 16.75 20.0384 16.75H19.0865Z"
                                                    fill="white" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="text-white ml-[4px] cursor-pointer">ดูคิวอาร์โค้ด</div>
                                </div>
                            </div>
                            <div class="w-[100%] mt-[8px]">
                                <div
                                    class="border pt-[4px] w-[100%] rounded-[12px] pb-[4px] pl-[8px] pr-[8px] flex justify-between">
                                    <div class="text-[12px]">ชั้น/ห้อง</div>
                                    <div class="text-[12px]">{{buildingStat.buildingStat.allFloor}}/{{buildingStat.buildingStat.allRoom}}</div>
                                </div>
                            </div>
                            <div class="w-[100%] mt-[8px]">
                                <div
                                    class="border pt-[4px] w-[100%] rounded-[12px] pb-[4px] pl-[8px] pr-[8px] flex justify-between">
                                    <div class="text-[12px]">ห้องว่าง</div>
                                    <div class="text-[12px]">{{buildingStat.buildingStat.availableRoom}}</div>
                                </div>
                            </div>
                            <div class="w-[100%] mt-[8px]">
                                <div
                                    class="border pt-[4px] w-[100%] rounded-[12px] pb-[4px] pl-[8px] pr-[8px] flex justify-between">
                                    <div class="text-[12px]">ห้องที่มีผู้เช่า</div>
                                    <div class="text-[12px]">{{buildingStat.buildingStat.rentRoom}}</div>
                                </div>
                            </div>
                            <div class="w-[100%] mt-[8px]">
                                <div
                                    class="border pt-[4px] w-[100%] rounded-[12px] pb-[4px] pl-[8px] pr-[8px] flex justify-between">
                                    <div class="text-[12px]">ห้องจอง</div>
                                    <div class="text-[12px]">{{buildingStat.buildingStat.reservedRoom}}</div>
                                </div>
                            </div>
                            <div class="w-[100%] mt-[8px]">
                                <div
                                    class="border pt-[4px] w-[100%] rounded-[12px] pb-[4px] pl-[8px] pr-[8px] flex justify-between">
                                    <div class="text-[12px]">ยังไม่พร้อมปล่อยเช่า</div>
                                    <div class="text-[12px]">{{buildingStat.buildingStat.maintenanceRoom}}</div>
                                </div>
                            </div>
                            <div class="w-[100%] mt-[8px]">
                                <div
                                    class="border pt-[4px] w-[100%] rounded-[12px] pb-[4px] pl-[8px] pr-[8px] flex justify-between">
                                    <div class="text-[12px]">จำนวนผู้พักอาศัยทั้งหมด</div>
                                    <div class="text-[12px]">{{buildingStat.buildingStat.allTenant}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="h-[107px] bg-[#9A77FF] rounded-[22px] mt-[14px] p-[14px]" @click="routerTo('/plan')" v-if="tabSetting == 1">

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
                <div class="w-[100%] ml-[24px] mt-[8px]" v-if="tabSetting == 1">
                    <div class="grid grid-cols-4 w-[100%] gap-2 ">
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">ชื่อ</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input" v-model="userData.firstName" />
                        </div>
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">นามสกุล</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input" v-model="userData.lastName"/>
                        </div>
                        <div class="mt-[8px] col-span-4">
                            <div class="text-custom text-[14px] text-[#003765]">ที่อยู่</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input" v-model="userData.contactAddress" />
                        </div>
                        <!-- <div class="">
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
                            <div class="text-custom text-[14px] text-[#003765] mb-[6px]">รหัสไปรษณีย์</div>
                            <vs-select state="primary">
                                <vs-option label="อาคาร A" value="1">
                                    อาคาร A
                                </vs-option>
                                <vs-option label="อาคาร B" value="2">
                                    อาคาร B
                                </vs-option>
                            </vs-select>
                        </div> -->
                        
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">เบอร์ติดต่อ</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input" v-model="userData.phone"/>
                        </div>
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">Email</div>
                            <input disabled class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input" v-model="userData.email" />
                        </div>
                    </div>
                    <div class="mt-[44px] mb-[50px]">
                        <vs-button @click="updateUserDetail()" >
                            <div class="font-bold">บันทึก</div>
                        </vs-button>
                    </div>
                </div>
                <div class="w-[100%] ml-[24px] mt-[8px]" v-if="tabSetting == 2">
                    <div class="grid grid-cols-4 w-[100%] gap-2 ">
                        <div class="mt-[8px] col-span-4">
                            <div class="text-custom text-[14px] text-[#003765]">ชื่ออพาร์ทเม้นท์</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input" v-model="buildingData.attributes.buildingName" />
                        </div>
                        <div class="mt-[8px] col-span-4">
                            <div class="text-custom text-[14px] text-[#003765]">ที่อยู่</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input" v-model="buildingData.attributes.buildingAddress" />
                        </div>
                        <!-- <div class="">
                            <div class="text-custom text-[14px] text-[#003765] mb-[6px]">เขต</div>
                            <vs-select state="primary">
                                <vs-option label="อาคาร A" value="1">
                                    อาคาร A
                                </vs-option>
                                <vs-option label="อาคาร B" value="2">
                                    อาคาร B
                                </vs-option>
                            </vs-select>
                        </div> -->
                        <!-- <div class="">
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
                        </div> -->

                        <ThailandAutoComplete v-model="buildingData.attributes.buildingDistrict" type="district" @select="selectBuild" label="ตำบล" size="small" placeholder="ตำบล..."/>
                        <ThailandAutoComplete v-model="buildingData.attributes.buildingSubDistrict" type="amphoe" @select="selectBuild" label="อำเภอ" size="small" placeholder="อำเภอ..."/>
                        <ThailandAutoComplete v-model="buildingData.attributes.buildingProvince" type="province" @select="selectBuild" label="จังหวัด" size="small" placeholder="จังหวัด..."/>
                        <ThailandAutoComplete v-model="buildingData.attributes.buildingPostcode" type="zipcode" @select="selectBuild" label="รหัสไปรษณีย์" size="small" placeholder="รหัสไปรษณีย์..."/>
                      
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">เบอร์ติดต่อ</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input" v-model="buildingData.attributes.buildingPhone"/>
                        </div>
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">Email</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input" v-model="buildingData.attributes.buildingEmail" />
                        </div>
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">ไลน์ติดต่อ</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input" v-model="buildingData.attributes.buildingLine"/>
                        </div>
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">เฟสบุ๊ค</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input" v-model="buildingData.attributes.buildingFacebook"/>
                        </div>
                        <div class="">
                            <div class="text-custom text-[14px] text-[#003765]  mb-[6px]">อัตราภาษี</div>
                            <input type="input" class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start"  v-model="buildingData.attributes.vat_rate">
                        </div>
                    </div>
                    <div class="mt-[44px] mb-[50px]">
                        <vs-button  @click="updateBuildingData()">
                            <div class="font-bold">บันทึก</div>
                        </vs-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ThailandAutoComplete from 'vue-thailand-address-autocomplete'
import axios from 'axios'

export default {
    data() {
        return {
            tabSetting: 1,
            userData: [] ,
            buildingData: [],
            buildingStat: [],
            district: '',
            amphoe: '',
            province: '',
            zipcode: '',
        }
    },
    components: {
        ThailandAutoComplete
    },
    created() {
        const loading = this.$vs.loading({})
        setTimeout(() => {
            loading.close()
        }, 1000)
    },
    mounted() {
        this.getUserDetail();
        this.getBuildingData();
        this.queryTabSetting();
        this.getBuildingStat();
    },
    methods: {
        getUserDetail() {
            const loading = this.$vs.loading()
            console.log("ID :",this.$store.state.userInfo.user.id)
            fetch(`https://api.resguru.app/api/users/${this.$store.state.userInfo.user.id}`)
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getUser()",resp);
                    this.userData = resp
                }).finally(() => {
                    loading.close()
                })
        },
        updateUserDetail(){
            axios.put(`https://api.resguru.app/api/users/${this.$store.state.userInfo.user.id}`,{
                
                    firstName: this.userData.firstName,
                    lastName: this.userData.lastName,
                    contactAddress: this.userData.contactAddress,
                    phone: this.userData.phone,
                    currentAddress: this.buildingData.attributes.currentAddress,
                
            })
            .then( (resp) => {
                console.log("Update User",resp)
            })
            .then( 
                    this.openNotificationUser('top-right', '#3A89CB', 6000)
                )
              
        }, 
        getBuildingData() {
            const loading = this.$vs.loading()
            fetch(`https://api.resguru.app/api/buildings/${this.$store.state.building}`)
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getBuilding()",resp);
                    this.buildingData = resp.data
                }).finally(() => {
                    loading.close()
                })
        },
        getBuildingStat() {
            const loading = this.$vs.loading()
            fetch(`https://api.resguru.app/api/getbuildingstat?buildingid=${this.$store.state.building}`)
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getBuildingStat()",resp);
                    this.buildingStat = resp
                }).finally(() => {
                    loading.close()
                })
        },
        updateBuildingData(){
            axios.put(`https://api.resguru.app/api/buildings/${this.$store.state.building}`,{
                data : {
                    buildingName: this.buildingData.attributes.buildingName,
                    buildingAddress: this.buildingData.attributes.buildingAddress,
                    buildingProvince: this.buildingData.attributes.buildingProvince,
                    buildingDistrict: this.buildingData.attributes.buildingDistrict,
                    buildingSubDistrict: this.buildingData.attributes.buildingSubDistrict,
                    buildingPostcode: this.buildingData.attributes.buildingPostcode,
                    buildingPhone: this.buildingData.attributes.buildingPhone,
                    buildingEmail: this.buildingData.attributes.buildingEmail,
                    buildingLine: this.buildingData.attributes.buildingLine,
                    buildingFacebook: this.buildingData.attributes.buildingFacebook,
                    vat_rate: this.buildingData.attributes.vat_rate
                }
            })
            .then( 
                    this.openNotificationBuilding('top-right', '#3A89CB', 6000)
                )
               
        }, 
        openNotificationUser(position = null, color) {
            const noti = this.$vs.notification({
                sticky: true,
                color,
                position,
                title: 'Update Profile Success',
            })
        },
        openNotificationBuilding(position = null, color) {
            const noti = this.$vs.notification({
                sticky: true,
                color,
                position,
                title: 'Update Building Information Success',
            })
        },
        select (address) {
          this.district = address.district
          this.amphoe = address.amphoe
          this.province = address.province
          this.zipcode = address.zipcode
        },
        selectBuild (address) {
          this.buildingData.attributes.buildingDistrict = address.district
          this.buildingData.attributes.buildingSubDistrict = address.amphoe
          this.buildingData.attributes.buildingProvince = address.province
          this.buildingData.attributes.buildingPostcode = address.zipcode
        },
        routerTo(path) {
            this.$router.push({
                path: path,
            })
            setTimeout(() => {
                this.sidebar = false
            }, 200);

        },
        queryTabSetting(){
            this.tabSetting = 1
            if(this.$route.query.tab !== undefined){
                this.tabSetting = this.$route.query.tabsetting
            }
        }
        
    },
}

</script>