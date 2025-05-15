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
            <div v-if="tabSetting == 2">
                <div v-if="buildingData.attributes.buildingBanner">
                    <div class="h-[238px] rounded-[22px] bg-[#5C6B79] flex justify-end items-end p-[14px]"
                        v-bind:style="{ backgroundImage: 'url(https://api.resguru.app' + buildingData.attributes.buildingBanner.data?.attributes.url + ')' }">
                        <!-- <img :src="`https://api.resguru.app${buildingData.attributes.buildingBanner.data.attributes.url}`" > -->
                        <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start " id="upload"
                            ref="buildingBanner" hidden type="file" @change=" editBannerwithUpload(2)" />
                        <label for="upload">
                            <div class="rounded-[22px] pl-[8px] pr-[8px] bg-[white] pt-[4px] pb-[4px] cursor-pointer">
                                เปลี่ยนรูปภาพปก</div>
                        </label>
                    </div>
                </div>
                <div v-else>
                    <div class="h-[238px] rounded-[22px] bg-[#5C6B79] flex justify-end items-end p-[14px]">

                        <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start " id="upload"
                            ref="buildingBanner" hidden type="file" @change="editBannerwithUpload(2)" />
                        <label for="upload">
                            <div class="rounded-[22px] pl-[8px] pr-[8px] bg-[white] pt-[4px] pb-[4px] cursor-pointer">
                                เปลี่ยนรูปภาพปก</div>
                        </label>
                    </div>
                </div>
            </div>
            <div v-else>
                <div v-if="userData.imageBanner">
                    <div class="h-[238px] rounded-[22px] bg-[#5C6B79] flex justify-end items-end p-[14px]"
                        v-bind:style="{ backgroundImage: 'url(https://api.resguru.app' + userData.imageBanner.url + ')' }">
                        <!-- <img :src="`https://api.resguru.app${buildingData.attributes.buildingBanner.data.attributes.url}`" > -->
                        <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start " id="upload"
                            ref="buildingBannerUser" hidden type="file" @change="editBannerwithUpload2()" />
                        <label for="upload">
                            <div class="rounded-[22px] pl-[8px] pr-[8px] bg-[white] pt-[4px] pb-[4px] cursor-pointer">
                                เปลี่ยนรูปภาพปก</div>
                        </label>
                    </div>
                </div>
                <div v-else>
                    <div class="h-[238px] rounded-[22px] bg-[#5C6B79] flex justify-end items-end p-[14px]">

                        <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start " id="upload"
                            ref="buildingBannerUser" hidden type="file" @change="editBannerwithUpload2()" />
                        <label for="upload">
                            <div class="rounded-[22px] pl-[8px] pr-[8px] bg-[white] pt-[4px] pb-[4px] cursor-pointer">
                                เปลี่ยนรูปภาพปก</div>
                        </label>
                    </div>
                </div>
            </div>


            <div class="flex w-[100%]">
                <div class="w-[20%] ml-[18px] mt-[-70px]">
                    <div class="bg-[white] rounded-[22px] w-[16vw] border p-[14px] flex flex-col items-center">
                        <div v-if="tabSetting == 1">
                            <img v-if="userData.imageProfile" class="bg-[#f7f3f3] rounded-[22px] w-[150px] h-[150px] border"
                                :src="`https://api.resguru.app${userData.imageProfile.url}`" />
                            <img v-else class="bg-[#f7f3f3] rounded-[22px] w-[150px] h-[150px] border"
                                src="https://i.pinimg.com/474x/44/95/12/4495124f97de536535464aa6558b4452.jpg" />
                            <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start " id="uploadProfile"
                                ref="buildingProfile" hidden type="file" @change="editProfilewithUpload()" />
                            <label for="uploadProfile">
                                <div
                                    class="rounded-[22px] pl-[8px] text-[1vw] pr-[8px] bg-[white] pt-[4px] pb-[4px] cursor-pointer mt-[4px]">
                                    เปลี่ยนรูปภาพโปรไฟล์</div>
                            </label>
                        </div>
                        <div v-else>
                            <img v-if="$store.state.buildingInfo[0].attributes.buildingLogo.data"
                                class="bg-[#f7f3f3] rounded-[22px] w-[150px] h-[150px] border"
                                :src="'https://api.resguru.app' + buildingData.attributes.buildingLogo.data?.attributes.url" />
                            <img v-else class="bg-[#f7f3f3] rounded-[22px] w-[150px] h-[150px] border"
                                src="https://i.pinimg.com/474x/44/95/12/4495124f97de536535464aa6558b4452.jpg" />
                            <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start " id="uploadProfile"
                                ref="buildingProfileCom" hidden type="file" @change=" editBannerwithUpload(1)" />
                            <label for="uploadProfile">
                                <div
                                    class="rounded-[22px] text-[1vw] pl-[8px] pr-[8px] bg-[white] pt-[4px] pb-[4px] cursor-pointer mt-[4px]">
                                    เปลี่ยนรูปภาพโปรไฟล์</div>
                            </label>
                        </div>
                        <div class="text-[1.1vw] font-bold mt-[8px]" v-if="tabSetting == 1">{{ userData.firstName }}
                            {{ userData.lastName }}</div>
                        <div class="text-[1.1vw]font-bold mt-[8px]" v-else>
                            {{ $store.state.buildingInfo[0].attributes.buildingName }}</div>
                        <div class="w-[100%]" v-if="tabSetting == 2">
                            <!-- <div class="w-[100%] mt-[8px]">
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
                            </div> -->
                            <div class="w-[100%] mt-[8px]">
                                <div
                                    class="border pt-[4px] w-[100%] rounded-[12px] pb-[4px] pl-[8px] pr-[8px] flex justify-between">
                                    <div class="text-[12px]">ชั้น/ห้อง</div>
                                    <div class="text-[12px]">
                                        {{ buildingStat.buildingStat.allFloor }}/{{ buildingStat.buildingStat.allRoom }}
                                    </div>
                                </div>
                            </div>
                            <div class="w-[100%] mt-[8px]">
                                <div
                                    class="border pt-[4px] w-[100%] rounded-[12px] pb-[4px] pl-[8px] pr-[8px] flex justify-between">
                                    <div class="text-[12px]">ห้องว่าง</div>
                                    <div class="text-[12px]">{{ buildingStat.buildingStat.availableRoom }}</div>
                                </div>
                            </div>
                            <div class="w-[100%] mt-[8px]">
                                <div
                                    class="border pt-[4px] w-[100%] rounded-[12px] pb-[4px] pl-[8px] pr-[8px] flex justify-between">
                                    <div class="text-[12px]">ห้องที่มีผู้เช่า</div>
                                    <div class="text-[12px]">{{ buildingStat.buildingStat.rentRoom }}</div>
                                </div>
                            </div>
                            <div class="w-[100%] mt-[8px]">
                                <div
                                    class="border pt-[4px] w-[100%] rounded-[12px] pb-[4px] pl-[8px] pr-[8px] flex justify-between">
                                    <div class="text-[12px]">ห้องจอง</div>
                                    <div class="text-[12px]">{{ buildingStat.buildingStat.reservedRoom }}</div>
                                </div>
                            </div>
                            <div class="w-[100%] mt-[8px]">
                                <div
                                    class="border pt-[4px] w-[100%] rounded-[12px] pb-[4px] pl-[8px] pr-[8px] flex justify-between">
                                    <div class="text-[12px]">ยังไม่พร้อมปล่อยเช่า</div>
                                    <div class="text-[12px]">{{ buildingStat.buildingStat.maintenanceRoom }}</div>
                                </div>
                            </div>
                            <div class="w-[100%] mt-[8px]">
                                <div
                                    class="border pt-[4px] w-[100%] rounded-[12px] pb-[4px] pl-[8px] pr-[8px] flex justify-between">
                                    <div class="text-[12px]">จำนวนผู้พักอาศัยทั้งหมด</div>
                                    <div class="text-[12px]">{{ buildingStat.buildingStat.allTenant }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="h-[107px]  rounded-[22px] mt-[14px] p-[14px]"
                        v-if="tabSetting == 1"
                        :class="$store.state.buildingInfo[0].attributes.package.data?.attributes.title == 'Professional' ? 'bg-[#9A77FF] ' : 'bg-[#187EE7]'">

                        <div>
                            <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.65625 20.8306V12.5024L2.62497 8.27996V16.4062C2.62497 16.4661 2.6394 16.5222 2.66826 16.5745C2.69709 16.6269 2.74036 16.6718 2.79805 16.7092L9.65625 20.8306ZM11.3437 20.8306L18.2019 16.7092C18.2596 16.6718 18.3029 16.6269 18.3317 16.5745C18.3605 16.5222 18.375 16.4661 18.375 16.4062V8.27996L11.3437 12.5024V20.8306ZM10.5 10.9947L17.4469 6.83064L10.6731 2.76749C10.6154 2.73009 10.5577 2.7114 10.5 2.7114C10.4423 2.7114 10.3846 2.73009 10.3269 2.76749L3.55307 6.83064L10.5 10.9947ZM1.95433 18.246C1.63414 18.0545 1.38462 17.7987 1.20578 17.4787C1.02693 17.1586 0.9375 16.8071 0.9375 16.4242V7.57549C0.9375 7.19259 1.02693 6.84111 1.20578 6.52103C1.38462 6.20094 1.63414 5.94516 1.95433 5.75371L9.48314 1.25983C9.80334 1.06838 10.1423 0.972656 10.5 0.972656C10.8577 0.972656 11.1966 1.06838 11.5168 1.25983L19.0456 5.75371C19.3658 5.94516 19.6153 6.20094 19.7942 6.52103C19.973 6.84111 20.0624 7.19259 20.0624 7.57549V16.4242C20.0624 16.8071 19.973 17.1586 19.7942 17.4787C19.6153 17.7987 19.3658 18.0545 19.0456 18.246L11.5168 22.7399C11.1966 22.9313 10.8577 23.027 10.5 23.027C10.1423 23.027 9.80334 22.9313 9.48314 22.7399L1.95433 18.246Z"
                                    fill="white" />
                            </svg>
                        </div>
                        <div class="text-white mt-[4px]">แพ็กเกจปัจจุบัน</div>
                        <div class="text-[18px] font-bold mt-[4px] text-white"> {{
                            $store.state.buildingInfo[0].attributes.package.data?.attributes.title }}</div>
                    </div>
                </div>
                <div class="w-[100%] ml-[1.57vw] mt-[8px]" v-if="tabSetting == 1">
                    <div class="grid grid-cols-4 w-[100%] gap-2 ">
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">ชื่อ</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input"
                                v-model="userData.firstName" />
                        </div>
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">นามสกุล</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input"
                                v-model="userData.lastName" />
                        </div>
                        <div class="mt-[8px] col-span-4">
                            <div class="text-custom text-[14px] text-[#003765]">ที่อยู่</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input"
                                v-model="userData.contactAddress" />
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
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input"
                                v-model="userData.phone" />
                        </div>
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">Email</div>
                            <input disabled class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start"
                                type="input" v-model="userData.email" />
                        </div>
                    </div>
                    <div class="mt-[44px] mb-[50px]">
                        <vs-button @click="updateUserDetail()">
                            <div class="font-bold">บันทึก</div>
                        </vs-button>
                    </div>
                </div>
                <div class="w-[100%] ml-[24px] mt-[8px]" v-if="tabSetting == 2">
                    <div class="grid grid-cols-4 w-[100%] gap-2 ">
                        <!-- Basic Building Information Section -->
                        <div class="mt-[8px] col-span-4">
                            <div class="text-custom text-[16px] font-semibold text-[#003765]">ข้อมูลหอพัก</div>
                        </div>
                        
                        <div class="mt-[8px] col-span-4">
                            <div class="text-custom text-[14px] text-[#003765]">ชื่อหอพัก</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px] flex justify-start" type="input"
                                v-model="buildingData.attributes.buildingName" />
                        </div>
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">เบอร์ติดต่อ</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px] flex justify-start" type="input"
                                v-model="buildingData.attributes.buildingPhone" />
                        </div>
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">Email</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px] flex justify-start" type="input"
                                v-model="buildingData.attributes.buildingEmail" />
                        </div>
                        <div class="mt-[8px] col-span-4">
                            <div class="text-custom text-[14px] text-[#003765]">ที่อยู่</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px] flex justify-start" type="input"
                                v-model="buildingData.attributes.buildingAddress" />
                        </div>
                        <div class="mt-[8px] col-span-1">
                            <div class="text-custom text-[14px] text-[#003765]">เขต</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px] flex justify-start" type="input"
                                v-model="buildingData.attributes.buildingSubDistrict" />
                        </div>
                        <div class="mt-[8px] col-span-1">
                            <div class="text-custom text-[14px] text-[#003765]">แขวง/อำเภอ</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px] flex justify-start" type="input"
                                v-model="buildingData.attributes.buildingDistrict" />
                        </div>
                        <div class="mt-[8px] col-span-1">
                            <div class="text-custom text-[14px] text-[#003765]">จังหวัด</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px] flex justify-start" type="input"
                                v-model="buildingData.attributes.buildingProvince" />
                        </div>
                        <div class="mt-[8px] col-span-1">
                            <div class="text-custom text-[14px] text-[#003765]">รหัสไปรษณี</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px] flex justify-start" type="input"
                                v-model="buildingData.attributes.buildingPostcode" />
                        </div>
                        
                        <div class="col-span-2">
                            <div class="text-custom text-[14px] text-[#003765] mb-[6px]">อัตราภาษี</div>
                            <select class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px] px-[10px]"
                                v-model="buildingData.attributes.vat_rate">
                                <option value="0">0%</option>
                                <option value="7">7%</option>
                            </select>
                        </div>

                        <div class="col-span-2">
                            <div class="text-custom text-[14px] text-[#003765] mb-[6px]">วันครบกำหนดชำระ (กรุณาเลือกวันที่ 1-31)</div>
                            <select class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px] px-[10px]"
                                v-model="buildingData.attributes.dueDate">
                                <option v-for="day in 31" :key="day" :value="day">{{ day }}</option>
                            </select>
                        </div>
                        
                        <!-- Separator Line -->
                        <div class="mt-[20px] mb-[10px] col-span-4">
                            <hr class="border-t border-gray-300">
                        </div>
                        
                        <!-- Map Information Section -->
                        <div class="mt-[8px] col-span-4">
                            <div class="text-custom text-[16px] font-semibold text-[#003765]">ข้อมูลแสดงในแผนที่</div>
                        </div>
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">ไลน์ติดต่อ</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px] flex justify-start" type="input"
                                v-model="buildingData.attributes.buildingLine" 
                                :disabled="$store.state.buildingInfo[0].attributes.package.data?.id === 1"
                                :class="$store.state.buildingInfo[0].attributes.package.data?.id === 1 ? 'bg-gray-200 opacity-60 cursor-not-allowed' : ''" />
                        </div>
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765]">เฟสบุ๊ค</div>
                            <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px] flex justify-start" type="input"
                                v-model="buildingData.attributes.buildingFacebook" 
                                :disabled="$store.state.buildingInfo[0].attributes.package.data?.id === 1"
                                :class="$store.state.buildingInfo[0].attributes.package.data?.id === 1 ? 'bg-gray-200 opacity-60 cursor-not-allowed' : ''" />
                        </div>
                        <div class="col-span-2">
                            <div class="text-custom text-[14px] text-[#003765] mb-[6px]">อินเตอร์เน็ต</div>
                            <select class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px] px-[10px]"
                                v-model="buildingData.attributes.internet">
                                <option value="1">มี</option>
                                <option value="0">ไม่มี</option>
                            </select>
                        </div>
                        <div class="col-span-2">
                            <div class="text-custom text-[14px] text-[#003765] mb-[6px]">ที่จอดรถ</div>
                            <select class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px] px-[10px]"
                                v-model="buildingData.attributes.parking">
                                <option value="1">มี</option>
                                <option value="0">ไม่มี</option>
                            </select>
                        </div>
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765] mb-[6px]">ช่วงราคาห้อง (ใส่ตัวเลขและ - ได้)</div>
                            <input type="input" class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px] flex justify-start"
                                v-model="buildingData.attributes.buildingPrice" placeholder="เช่น 4,000 - 8,000"
                                :disabled="$store.state.buildingInfo[0].attributes.package.data?.id === 1"
                                :class="$store.state.buildingInfo[0].attributes.package.data?.id === 1 ? 'bg-gray-200 opacity-60 cursor-not-allowed' : ''" />
                        </div>
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765] mb-[6px]">ขนาดห้อง (ใส่ตัวเลขและ - ได้)</div>
                            <input type="input" class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px] flex justify-start"
                                v-model="buildingData.attributes.buildingArea" placeholder="เช่น 23 - 40"
                                :disabled="$store.state.buildingInfo[0].attributes.package.data?.id === 1"
                                :class="$store.state.buildingInfo[0].attributes.package.data?.id === 1 ? 'bg-gray-200 opacity-60 cursor-not-allowed' : ''" />
                        </div>
                        <!-- Separator Line -->
                        <div class="mt-[20px] mb-[10px] col-span-4">
                            <hr class="border-t border-gray-300">
                        </div>

                        <!-- Building Image Upload Section -->
                        <div class="mt-[8px] col-span-4">
                            <div class="text-custom text-[16px] font-semibold text-[#003765]">รูปภาพหอพัก</div>
                            <div class="text-[13px] text-gray-500 mb-[10px]">
                                อัพโหลดรูปภาพหอพักเพื่อแสดงในแผนที่ (สามารถอัพโหลดได้หลายรูป)
                            </div>
                        </div>



                        <!-- Building Image Upload Section -->

                        <div class="mt-[8px] col-span-4" :class="$store.state.buildingInfo[0].attributes.package.data?.id === 1 ? 'opacity-60 pointer-events-none' : ''">
                            <div class="text-custom text-[14px] text-[#003765] mb-[6px]">รูปภาพหอพัก</div>


                        <!-- Updated Preview Images Area -->
                        <!-- This component shows both existing and newly uploaded images together -->
                            
                        <!-- File Upload Area -->
                        <div class="border-2 border-dashed border-gray-300 rounded-lg p-4 mb-4" 
                            :class="$store.state.buildingInfo[0].attributes.package.data?.id === 1 ? 'bg-gray-200' : 'bg-gray-50'">
                            <div class="flex flex-col items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p class="text-sm text-gray-500 mb-1">ลากไฟล์มาวางที่นี่ หรือ</p>
                                <label for="file-upload" class="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm" 
                                    :class="$store.state.buildingInfo[0].attributes.package.data?.id === 1 ? 'opacity-60 pointer-events-none' : ''">
                                    เลือกไฟล์
                                    <input id="file-upload" type="file" multiple accept="image/*" @change="handleFileUpload" class="hidden" 
                                        :disabled="$store.state.buildingInfo[0].attributes.package.data?.id === 1" />
                                </label>
                                <p class="text-xs text-gray-400 mt-2">รองรับไฟล์: JPG, PNG, GIF (ขนาดไม่เกิน 5MB)</p>
                            </div>
                        </div>
                            
                            <!-- Combined Preview - Show both existing and newly uploaded images -->
                            <div v-if="(buildingData.attributes.buildingPic && buildingData.attributes.buildingPic.data && buildingData.attributes.buildingPic.data.length > 0) || (uploadedFiles.length > 0)">
                                <!-- Helper text for deletion -->
                                <div class="text-[13px] text-gray-500 mb-[10px]">
                                    คลิกที่รูปเพื่อลบ (กดบันทึกเพื่อยืนยันการลบ)
                                </div>
                                
                                <!-- Grid layout for the images -->
                                <div class="grid grid-cols-4 gap-4">
                                    <!-- Show existing images -->
                                    <div v-for="(image, index) in buildingData.attributes.buildingPic.data" :key="'existing-'+index" class="relative group">
                                        <img :src="getImageUrl(image)" class="w-full h-24 object-cover rounded-lg" />
                                        <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                                            <button @click="removeImage(index)" class="text-white bg-red-500 hover:bg-red-600 rounded-full p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <!-- Show newly uploaded files -->
                                    <div v-for="(file, index) in uploadedFiles" :key="'new-'+index" class="relative group">
                                        <img :src="getFilePreview(file)" class="w-full h-24 object-cover rounded-lg" />
                                        <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                                            <button @click="removeUploadedFile(index)" class="text-white bg-red-500 hover:bg-red-600 rounded-full p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="absolute top-0 right-0 bg-blue-500 text-white text-xs px-1 rounded-bl">ใหม่</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Separator Line -->
                        <div class="mt-[20px] mb-[10px] col-span-4">
                            <hr class="border-t border-gray-300">
                        </div>
                        
                        <!-- Map Coordinates Section -->
                        <div class="mt-[8px] col-span-4">
                            <div class="text-custom text-[16px] font-semibold text-[#003765]">ข้อมูลหมุดแผนที่</div>
                            <div class="text-[13px] text-gray-500 mb-[10px] flex items-center">
                                <span>วิธีหาพิกัด Latitude/Longitude จาก Google Maps</span>
                                <button @click="showLatLongHelp = true" class="ml-2 text-blue-500 hover:underline flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    ดูคำแนะนำ
                                </button>
                                <a href="https://youtu.be/YOUR_VIDEO_ID" target="_blank" class="ml-4 text-blue-500 hover:underline flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    ดูวิดีโอสอน
                                </a>
                            </div>
                        </div>
                        
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765] mb-[6px]">Latitude</div>
                            <input type="input" class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px] flex justify-start"
                                v-model="buildingData.attributes.lat" placeholder="เช่น 13.7563"
                                :disabled="$store.state.buildingInfo[0].attributes.package.data?.id === 1"
                                :class="$store.state.buildingInfo[0].attributes.package.data?.id === 1 ? 'bg-gray-200 opacity-60 cursor-not-allowed' : ''" />
                        </div>
                        <div class="mt-[8px] col-span-2">
                            <div class="text-custom text-[14px] text-[#003765] mb-[6px]">Longitude</div>
                            <input type="input" class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px] flex justify-start"
                                v-model="buildingData.attributes.long" placeholder="เช่น 100.5333"
                                :disabled="$store.state.buildingInfo[0].attributes.package.data?.id === 1"
                                :class="$store.state.buildingInfo[0].attributes.package.data?.id === 1 ? 'bg-gray-200 opacity-60 cursor-not-allowed' : ''" />
                        </div>
                    </div>
                    <!-- Popup for Lat/Long Help -->
                    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" v-if="showLatLongHelp">
                        <div class="bg-white rounded-lg p-6 max-w-md w-full">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-lg font-medium">วิธีหาพิกัด Latitude/Longitude จาก Google Maps</h3>
                                <button @click="showLatLongHelp = false" class="text-gray-500 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div class="space-y-3 text-sm">
                                <p><strong>วิธีที่ 1: คลิกขวาบนแผนที่</strong></p>
                                <ol class="list-decimal list-inside pl-4 space-y-2">
                                    <li>เปิด Google Maps ในเบราว์เซอร์</li>
                                    <li>ค้นหาตำแหน่งที่ต้องการหรือซูมไปยังตำแหน่งบนแผนที่</li>
                                    <li>คลิกขวาที่ตำแหน่งที่ต้องการ</li>
                                    <li>พิกัดตัวเลขจะปรากฏในเมนูที่ปรากฏขึ้น (เช่น 13.7563, 100.5333)</li>
                                    <li>คลิกที่ตัวเลขพิกัดเพื่อคัดลอก</li>
                                </ol>
                                <p><strong>วิธีที่ 2: ใช้ URL ของ Google Maps</strong></p>
                                <ol class="list-decimal list-inside pl-4 space-y-2">
                                    <li>เปิด Google Maps และค้นหาสถานที่ที่ต้องการ</li>
                                    <li>คลิกที่หมุดหรือตำแหน่งบนแผนที่</li>
                                    <li>สังเกตที่ URL ในเบราว์เซอร์ จะมีตัวเลขในรูปแบบ "@13.7563,100.5333,15z"</li>
                                    <li>ตัวเลขแรกคือ Latitude ตัวเลขที่สองคือ Longitude</li>
                                </ol>
                                <div class="mt-6 text-center">
                                    <a href="https://youtu.be/YOUR_VIDEO_ID" target="_blank" class="text-blue-500 hover:underline flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        ดูวิดีโอสอนวิธีหาพิกัด
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-[44px] mb-[50px]">
                        <vs-button @click="updateBuildingData()">
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
            userData: [],
            buildingData: [],
            buildingStat: [],
            district: '',
            amphoe: '',
            province: '',
            zipcode: '',
            fileBanner: [],
            fileProfile: [],
            showLatLongHelp: false,
            uploadedFiles: [],
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
            console.log("ID :", this.$store.state.userInfo)
            fetch(`https://api.resguru.app/api/users/${this.$store.state.userInfo.id}?populate=*`)
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getUser()", resp);
                    this.userData = resp
                }).finally(() => {
                    loading.close()
                })
        },
        updateUserDetail() {
            axios.put(`https://api.resguru.app/api/users/${this.$store.state.userInfo.id}`, {
                firstName: this.userData.firstName,
                lastName: this.userData.lastName,
                contactAddress: this.userData.contactAddress,
                phone: this.userData.phone,
                currentAddress: this.buildingData.attributes.currentAddress,
            })
                .then((resp) => {
                    console.log(resp)
                    this.$store.commit('setUser', resp.data);
                })
                .catch(error => {
                    const errorMessage = error.message ? error.message : 'Error updating information';
                    this.$showNotification('danger', errorMessage);
                })
                .finally(() => {
                    this.getUserDetail();
                    this.$showNotification('#3A89CB', 'Update Profile Success')
                })

        },
        // getBuildingData() {
        //     const loading = this.$vs.loading()
        //     fetch(`https://api.resguru.app/api/buildings/${this.$store.state.building}?populate=*`)
        //         .then(response => response.json())
        //         .then((resp) => {
        //             console.log("Return from getBuilding()", resp);
        //             this.buildingData = resp.data;
                    
        //             // Convert string values to numbers where needed
        //             if (this.buildingData.attributes.vat_rate) {
        //                 this.buildingData.attributes.vat_rate = parseInt(this.buildingData.attributes.vat_rate);
        //             } else {
        //                 // Set default value if not set
        //                 this.buildingData.attributes.vat_rate = 7; // Default to 7%
        //             }
                    
        //             // Convert BuildingDueDate to dueDate if needed
        //             if (this.buildingData.attributes.BuildingDueDate && !this.buildingData.attributes.dueDate) {
        //                 this.buildingData.attributes.dueDate = parseInt(this.buildingData.attributes.BuildingDueDate);
        //             }
                    
        //         }).finally(() => {
        //             loading.close()
        //         })
        // },
        // Modify the updateBuildingData method to check package ID before processing map-related fields
        async updateBuildingData() {
        try {
            // Create complete building data object with ALL fields
            let buildingData = {
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
                vat_rate: this.buildingData.attributes.vat_rate,
                buildingLat: this.buildingData.attributes.lat,
                buildingLong: this.buildingData.attributes.long,
                BuildingDueDate: this.buildingData.attributes.dueDate,
                buildingPrice: this.buildingData.attributes.buildingPrice,
                buildingBed: this.buildingData.attributes.buildingBed,
                buildingBath: this.buildingData.attributes.buildingBath,
                buildingArea: this.buildingData.attributes.buildingArea,
                buildingPriceArea: this.buildingData.attributes.buildingPriceArea,
                // Convert string values to boolean for internet and parking
                internet: this.buildingData.attributes.internet === "1",
            parking: this.buildingData.attributes.parking === "1"
            };
            
            // Process images code remains the same...
            if (this.uploadedFiles.length > 0 || 
                (this.buildingData.attributes.buildingPic && 
                this.buildingData.attributes.buildingPic.data && 
                Array.isArray(this.buildingData.attributes.buildingPic.data))) {
                
                // Initialize buildingPic as an empty array (for when all images are deleted)
                buildingData.buildingPic = [];
                
                // Add IDs of existing images (if any)
                if (this.buildingData.attributes.buildingPic && 
                    this.buildingData.attributes.buildingPic.data && 
                    this.buildingData.attributes.buildingPic.data.length > 0) {
                    
                    buildingData.buildingPic = this.buildingData.attributes.buildingPic.data.map(item => item.id);
                }
                
                // Handle new uploads
                if (this.uploadedFiles && this.uploadedFiles.length > 0) {
                    const formData = new FormData();
                    this.uploadedFiles.forEach(file => {
                        formData.append('files', file);
                    });
                    
                    const uploadResponse = await axios.post(
                        'https://api.resguru.app/api/upload',
                        formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                            }
                        }
                    );
                    
                    const newMediaIds = uploadResponse.data.map(file => file.id);
                    
                    // Add new media IDs to existing IDs (if any)
                    buildingData.buildingPic = [...buildingData.buildingPic, ...newMediaIds];
                }
            }
            
            console.log("Final data to be sent:", buildingData);
            
            // Make the update request
            const updateResponse = await axios.put(
                `https://api.resguru.app/api/buildings/${this.$store.state.building}`, 
                { data: buildingData }
            );
            
            console.log("Update response:", updateResponse);
            
            // Clear uploaded files after successful update
            this.uploadedFiles = [];
            
            console.log("Building updated successfully");
            this.$showNotification('#3A89CB', 'Update Building Success');
        } catch (error) {
            console.log("Error:", error);
            if (error.response) {
                console.log("Error response data:", error.response.data);
                console.log("Error response status:", error.response.status);
            }
            const errorMessage = error.message ? error.message : 'Error updating information';
            this.$showNotification('danger', errorMessage);
        } finally {
            this.getBuildingData();
            this.queryTabSetting();
        }
    },
        getBuildingStat() {
            const loading = this.$vs.loading()
            fetch(`https://api.resguru.app/api/getbuildingstat?buildingid=${this.$store.state.building}`)
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getBuildingStat()", resp);
                    this.buildingStat = resp
                }).finally(() => {
                    loading.close()
                })
        },
        async updateBuildingData() {
            try {
                // Create complete building data object with ALL fields
                let buildingData = {
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
                    vat_rate: this.buildingData.attributes.vat_rate,
                    buildingLat: this.buildingData.attributes.lat,
                    buildingLong: this.buildingData.attributes.long,
                    BuildingDueDate: this.buildingData.attributes.dueDate,
                    buildingPrice: this.buildingData.attributes.buildingPrice,
                    buildingBed: this.buildingData.attributes.buildingBed,
                    buildingBath: this.buildingData.attributes.buildingBath,
                    buildingArea: this.buildingData.attributes.buildingArea,
                    buildingPriceArea: this.buildingData.attributes.buildingPriceArea
                };
                
                // CRITICAL CHANGE: Only process images if we're actually modifying them
                if (this.uploadedFiles.length > 0 || 
                    (this.buildingData.attributes.buildingPic && 
                    this.buildingData.attributes.buildingPic.data && 
                    Array.isArray(this.buildingData.attributes.buildingPic.data))) {
                    
                    // Initialize buildingPic as an empty array (for when all images are deleted)
                    buildingData.buildingPic = [];
                    
                    // Add IDs of existing images (if any)
                    if (this.buildingData.attributes.buildingPic && 
                        this.buildingData.attributes.buildingPic.data && 
                        this.buildingData.attributes.buildingPic.data.length > 0) {
                        
                        buildingData.buildingPic = this.buildingData.attributes.buildingPic.data.map(item => item.id);
                    }
                    
                    // Handle new uploads
                    if (this.uploadedFiles && this.uploadedFiles.length > 0) {
                        const formData = new FormData();
                        this.uploadedFiles.forEach(file => {
                            formData.append('files', file);
                        });
                        
                        const uploadResponse = await axios.post(
                            'https://api.resguru.app/api/upload',
                            formData,
                            {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                }
                            }
                        );
                        
                        const newMediaIds = uploadResponse.data.map(file => file.id);
                        
                        // Add new media IDs to existing IDs (if any)
                        buildingData.buildingPic = [...buildingData.buildingPic, ...newMediaIds];
                    }
                }
                
                console.log("Final data to be sent:", buildingData);
                
                // Make the update request
                const updateResponse = await axios.put(
                    `https://api.resguru.app/api/buildings/${this.$store.state.building}`, 
                    { data: buildingData }
                );
                
                console.log("Update response:", updateResponse);
                
                // Clear uploaded files after successful update
                this.uploadedFiles = [];
                
                console.log("Building updated successfully");
                this.$showNotification('#3A89CB', 'Update Building Success');
            } catch (error) {
                console.log("Error:", error);
                if (error.response) {
                    console.log("Error response data:", error.response.data);
                    console.log("Error response status:", error.response.status);
                }
                const errorMessage = error.message ? error.message : 'Error updating information';
                this.$showNotification('danger', errorMessage);
            } finally {
                this.getBuildingData();
                this.queryTabSetting();
            }
        },
        // Handle file upload
        handleFileUpload(event) {
            const files = event.target.files;
            if (!files.length) return;
            
            // Check file size and type
            for (let i = 0; i < files.length; i++) {
            const file = files[i];
            
            // Check file size (5MB limit)
            if (file.size > 5 * 1024 * 1024) {
                alert(`ไฟล์ ${file.name} มีขนาดใหญ่เกินไป (ขนาดสูงสุด 5MB)`);
                continue;
            }
            
            // Check file type
            if (!file.type.match('image.*')) {
                alert(`ไฟล์ ${file.name} ไม่ใช่ไฟล์รูปภาพที่รองรับ`);
                continue;
            }
            
            // Add to uploaded files
            this.uploadedFiles.push(file);
            }
            
            // Reset the input to allow selecting the same file again
            event.target.value = '';
        },
        
        // Get preview URL for uploaded file
        getFilePreview(file) {
            return URL.createObjectURL(file);
        },
        
        // Get image URL from Strapi media
        getImageUrl(image) {
            return `https://api.resguru.app${image.attributes.url}`;
        },
        
        // Remove uploaded file
        removeUploadedFile(index) {
            this.uploadedFiles.splice(index, 1);
        },
        
        // Remove existing image
        removeImage(index) {
            this.buildingData.attributes.buildingPic.data.splice(index, 1);
        },
        // updateBuildingData() {
        //     axios.put(`https://api.resguru.app/api/buildings/${this.$store.state.building}`, {
        //         data: {
        //             buildingName: this.buildingData.attributes.buildingName,
        //             buildingAddress: this.buildingData.attributes.buildingAddress,
        //             buildingProvince: this.buildingData.attributes.buildingProvince,
        //             buildingDistrict: this.buildingData.attributes.buildingDistrict,
        //             buildingSubDistrict: this.buildingData.attributes.buildingSubDistrict,
        //             buildingPostcode: this.buildingData.attributes.buildingPostcode,
        //             buildingPhone: this.buildingData.attributes.buildingPhone,
        //             buildingEmail: this.buildingData.attributes.buildingEmail,
        //             buildingLine: this.buildingData.attributes.buildingLine,
        //             buildingFacebook: this.buildingData.attributes.buildingFacebook,
        //             vat_rate: this.buildingData.attributes.vat_rate,
        //             buildingLat: this.buildingData.attributes.lat,
        //             buildingLong: this.buildingData.attributes.long,
        //             BuildingDueDate: this.buildingData.attributes.dueDate,
        //             buildingPrice: this.buildingData.attributes.buildingPrice,
        //             buildingBed: this.buildingData.attributes.buildingBed,
        //             buildingBath: this.buildingData.attributes.buildingBath,
        //             buildingArea: this.buildingData.attributes.buildingArea,
        //             buildingPriceArea: this.buildingData.attributes.buildingPriceArea   
        //         }
        //     })
        //         .then((resp) => {
        //             console.log("Result from", resp)

        //         })
        //         .catch(error => {
        //             console.log("Err", error)
        //             const errorMessage = error.message ? error.message : 'Error updating information';
        //             this.$showNotification('danger', errorMessage);
        //         })
        //         .finally(() => {
        //             this.getBuildingData();
        //             this.queryTabSetting();
        //             this.$showNotification('#3A89CB', 'Upload Building Success')
        //         })

        // },
        openNotificationBuilding(position = null, color) {
            const noti = this.$vs.notification({
                sticky: true,
                color,
                position,
                title: 'Update Building Information Success',
            })
        },
        select(address) {
            this.district = address.district
            this.amphoe = address.amphoe
            this.province = address.province
            this.zipcode = address.zipcode
        },
        selectBuild(address) {
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
        queryTabSetting() {
            this.tabSetting = 1
            if (this.$route.query.tab !== undefined) {
                this.tabSetting = this.$route.query.tabsetting
            }
        },
        editProfilewithUpload() {
            this.fileProfile = this.$refs.buildingProfile.files[0]
            if (this.fileProfile.length != 0) {
                let formData = new FormData();
                formData.append("files", this.fileProfile);
                formData.append("refId", String(this.$store.state.userInfo.id));
                formData.append("ref", "plugin::users-permissions.user");
                formData.append("field", "imageProfile");

                axios.post("https://api.resguru.app/api/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                    .then((resp) => {
                        console.log(resp)
                    })
                    .catch(error => {
                        const errorMessage = error.message ? error.message : 'Error updating information';
                        this.$showNotification('danger', errorMessage);
                    })
                    .finally(() => { 
                        this.$showNotification('#3A89CB', 'Upload Profile Success')
                        this.getBuildingData();
                        window.location.reload()
                       
                    })
            }
        },
        editProfileCompanywithUpload() {
            this.fileProfile = this.$refs.buildingProfile.files[0]
            if (this.fileProfile.length != 0) {
                let formData = new FormData();
                formData.append("files", this.fileProfile);
                formData.append("refId", String(this.$store.state.building));
                formData.append("ref", "plugin::building.building");
                formData.append("field", "buildingLogo");
                axios.post("https://api.resguru.app/api/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                    .then((resp) => {
                        console.log(resp)
                    })
                    .catch(error => {
                        const errorMessage = error.message ? error.message : 'Error updating information';
                        this.$showNotification('danger', errorMessage);
                    })
                    .finally(() => {
                        this.getBuildingData();
                        this.$showNotification('#3A89CB', 'Upload Profile Success')
                    })
            }
        },
        editBannerwithUpload(check) {
            if (check == '1') {
                this.fileBanner = this.$refs.buildingProfileCom.files[0]
            }
            else {
                this.fileBanner = this.$refs.buildingBanner.files[0]
            }

            if (this.fileBanner.length != 0) {
                let formData = new FormData();
                formData.append("files", this.fileBanner);
                formData.append("refId", String(this.$store.state.building));
                formData.append("ref", "api::building.building");
                if (check == '1') {
                    formData.append("field", "buildingLogo");
                }
                else {
                    formData.append("field", "buildingBanner");
                }


                axios.post("https://api.resguru.app/api/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                    .then((resp) => {
                        console.log(resp)
                    })
                    .catch(error => {
                        const errorMessage = error.message ? error.message : 'Error updating information';
                        this.$showNotification('danger', errorMessage);
                    })
                    .finally(() => {
                        this.getBuildingData();
                        this.$showNotification('#3A89CB', 'Upload Building Profile Success')
                    })
            }
        },
        editBannerwithUpload2(check) {
            const img = this.$refs.buildingBannerUser.files[0]
            if (img.length != 0) {
                let formData = new FormData();
                formData.append("files", img);
                formData.append("refId", String(this.$store.state.userInfo.id));
                formData.append("ref", "api::users-permissions.user");
                formData.append("field", "imageBanner");
                axios.post("https://api.resguru.app/api/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                    .then((resp) => { 
                        this.$showNotification('#3A89CB', 'Upload Banner Success')
                        console.log(resp)
                    })
                    .catch(error => {
                        const errorMessage = error.message ? error.message : 'Error updating information';
                        this.$showNotification('danger', errorMessage);
                    })
                    .finally(() => {
                        this.getBuildingData();
                       
                    })
            }
        },
        getBuildingData() {
            const loading = this.$vs.loading()
            fetch(`https://api.resguru.app/api/buildings/${this.$store.state.building}?populate=*`)
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getBuilding()", resp);
                    this.buildingData = resp.data;
                    
                    // Convert BuildingDueDate to dueDate if needed
                    if (this.buildingData.attributes.BuildingDueDate && !this.buildingData.attributes.dueDate) {
                        this.buildingData.attributes.dueDate = parseInt(this.buildingData.attributes.BuildingDueDate);
                    }
                    // Assign lat and long from buildingLat and buildingLong
                    if (this.buildingData.attributes.buildingLat && !this.buildingData.attributes.lat) {
                        this.buildingData.attributes.lat = this.buildingData.attributes.buildingLat;
                    }
                    
                    if (this.buildingData.attributes.buildingLong && !this.buildingData.attributes.long) {
                        this.buildingData.attributes.long = this.buildingData.attributes.buildingLong;
                    }

                    // Convert internet and parking to string values for the dropdowns
                    // If they're boolean, convert to string "1" or "0"
                    if (typeof this.buildingData.attributes.internet === 'boolean') {
                        this.buildingData.attributes.internet = this.buildingData.attributes.internet ? "1" : "0";
                    } else if (this.buildingData.attributes.internet === null || this.buildingData.attributes.internet === undefined) {
                        // Set default value if not defined
                        this.buildingData.attributes.internet = "1";
                    }
                    
                    if (typeof this.buildingData.attributes.parking === 'boolean') {
                        this.buildingData.attributes.parking = this.buildingData.attributes.parking ? "1" : "0";
                    } else if (this.buildingData.attributes.parking === null || this.buildingData.attributes.parking === undefined) {
                        // Set default value if not defined
                        this.buildingData.attributes.parking = "1";
                    }
                    
                }).finally(() => {
                    loading.close()
                })
        },
    },
}

</script>