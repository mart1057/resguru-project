<template>
    <div>
        <div>
            <div class="w-[100%] h-[56px] rounded-[22px] bg-card flex justify-between items-center pl-[10px] pr-[10px]">
                <div class="flex justify-center items-center">
                    <div>
                        <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_1413_29806" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                width="27" height="28">
                                <rect width="27" height="28" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_1413_29806)">
                                <path
                                    d="M12.6563 22.8306V14.5024L5.62497 10.28V18.4062C5.62497 18.4661 5.6394 18.5222 5.66826 18.5745C5.69709 18.6269 5.74036 18.6718 5.79805 18.7092L12.6563 22.8306ZM14.3437 22.8306L21.2019 18.7092C21.2596 18.6718 21.3029 18.6269 21.3317 18.5745C21.3605 18.5222 21.375 18.4661 21.375 18.4062V10.28L14.3437 14.5024V22.8306ZM13.5 12.9947L20.4469 8.83064L13.6731 4.76749C13.6154 4.73009 13.5577 4.7114 13.5 4.7114C13.4423 4.7114 13.3846 4.73009 13.3269 4.76749L6.55307 8.83064L13.5 12.9947ZM4.95433 20.246C4.63414 20.0545 4.38462 19.7987 4.20578 19.4787C4.02693 19.1586 3.9375 18.8071 3.9375 18.4242V9.57549C3.9375 9.19259 4.02693 8.84111 4.20578 8.52103C4.38462 8.20094 4.63414 7.94516 4.95433 7.75371L12.4831 3.25983C12.8033 3.06838 13.1423 2.97266 13.5 2.97266C13.8577 2.97266 14.1966 3.06838 14.5168 3.25983L22.0456 7.75371C22.3658 7.94516 22.6153 8.20094 22.7942 8.52103C22.973 8.84111 23.0624 9.19259 23.0624 9.57549V18.4242C23.0624 18.8071 22.973 19.1586 22.7942 19.4787C22.6153 19.7987 22.3658 20.0545 22.0456 20.246L14.5168 24.7399C14.1966 24.9313 13.8577 25.027 13.5 25.027C13.1423 25.027 12.8033 24.9313 12.4831 24.7399L4.95433 20.246Z"
                                    fill="white" />
                            </g>
                        </svg>
                    </div>
                    <div class="text-[1.44vw] text-white ml-[10px]">{{
                        $store.state.buildingInfo[0].attributes.package.data?.attributes.title }} Plan</div>
                </div>
                <!-- Toggle switch component - will be disabled if package ID is 1 -->
                <div
                    class="flex justify-center items-center border pl-[8px] pr-[8px] pb-[4px] pt-[4px] rounded-[22px]"
                    :class="[isPackageBasic ? 'border-gray-400 opacity-50 cursor-not-allowed' : 'border-[#F5D65E]']">
                    <div class="text-[12px]" :class="[isPackageBasic ? 'text-gray-400' : 'text-white']">เรียกดูข้อมูลของทุกหอพัก</div>
                    <div class="ml-[10px]">
                        <vs-switch 
                            success 
                            v-model="check" 
                            @input="handleToggleClick" 
                            :disabled="isPackageBasic">
                            <template #off>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3244_13203)">
                                        <mask id="mask0_3244_13203" style="mask-type:alpha" maskUnits="userSpaceOnUse"
                                            x="0" y="0" width="16" height="16">
                                            <rect x="0.726562" y="0.636719" width="14.7273" height="14.7273"
                                                fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_3244_13203)">
                                            <path
                                                d="M8.08836 8.64713L4.97532 11.7602C4.89036 11.8451 4.78357 11.8886 4.65494 11.8906C4.52632 11.8925 4.41757 11.8491 4.32867 11.7602C4.23977 11.6713 4.19531 11.5635 4.19531 11.4368C4.19531 11.3102 4.23977 11.2024 4.32867 11.1135L7.44169 8.00047L4.32867 4.88743C4.2437 4.80247 4.20024 4.69568 4.19827 4.56705C4.1963 4.43843 4.23977 4.32968 4.32867 4.24078C4.41757 4.15188 4.52534 4.10742 4.652 4.10742C4.77865 4.10742 4.88643 4.15188 4.97532 4.24078L8.08836 7.3538L11.2014 4.24078C11.2864 4.15581 11.3931 4.11235 11.5218 4.11038C11.6504 4.10841 11.7592 4.15188 11.848 4.24078C11.937 4.32968 11.9814 4.43745 11.9814 4.56411C11.9814 4.69076 11.937 4.79853 11.848 4.88743L8.73502 8.00047L11.848 11.1135C11.933 11.1985 11.9765 11.3053 11.9784 11.4339C11.9804 11.5625 11.937 11.6713 11.848 11.7602C11.7592 11.8491 11.6514 11.8935 11.5247 11.8935C11.3981 11.8935 11.2903 11.8491 11.2014 11.7602L8.08836 8.64713Z"
                                                fill="#8396A6" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3244_13203">
                                            <rect width="14.7273" height="14.7273" fill="white"
                                                transform="translate(0.726562 0.636719)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </template>
                            <template #on>
                            </template>
                        </vs-switch>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 w-[100%] gap-2 mt-[10px]">
                <a href="/rooms" class="block">
                    <div class="h-[110px] p-[18px] flex flex-col justify-between bg-[#003765] rounded-[22px] text-[white]">
                        <div class="flex justify-between">
                            <div class="text-[24px] flex justify-center items-center">{{ data.countRoom }}</div>
                            <div>
                                <template>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                                        <path fill="white"
                                            d="M240 210h-18V96a14 14 0 0 0-14-14h-66V32a14 14 0 0 0-21.77-11.64l-80 53.33A14 14 0 0 0 34 85.34V210H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M208 94a2 2 0 0 1 2 2v114h-68V94ZM46 85.34a2 2 0 0 1 .89-1.66l80-53.34A2 2 0 0 1 130 32v178H46ZM110 112v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0m-32 0v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0m0 56v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0m32 0v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0" />
                                    </svg>
                                </template>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="text-[20px] flex justify-start items-center">ห้องทั้งหมด</div>
                        </div>
                    </div>   
                </a>
            </div>

            <div class="grid grid-cols-3 w-[100%] gap-2 mt-[10px]">
                <a href="/rooms" class="block">
                    <div class="h-[110px] p-[18px] flex flex-col justify-between bg-[#F5D65E] rounded-[22px] text-[#003765]">
                        <div class="flex justify-between">
                            <div class="text-[24px] flex justify-center items-center">{{ data.occuRoom-data.reservedRoom }} ({{
                            Math.round(data.occuRoomPer-data.reservedRoom) }}%)
                            </div>
                            <div>
                                <svg width="34" height="30" viewBox="0 0 34 30" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.269531 29.021V9.80233L13.082 0.160156L21.0815 6.19181C20.5668 6.28816 20.0839 6.43271 19.6328 6.62547C19.1816 6.8182 18.7479 7.06459 18.3318 7.36463L13.082 3.3632L2.83199 11.0835V26.4585H9.7639V29.021H0.269531ZM13.5091 29.021V26.2643C13.5091 25.7564 13.6422 25.2829 13.9083 24.8438C14.1744 24.4047 14.5253 24.0504 14.9612 23.7811C16.238 23.0233 17.579 22.4533 18.984 22.0711C20.389 21.6889 21.8383 21.4978 23.332 21.4978C24.8257 21.4978 26.275 21.6889 27.68 22.0711C29.085 22.4533 30.426 23.0233 31.7028 23.7811C32.1387 24.0504 32.4896 24.4047 32.7557 24.8438C33.0218 25.2829 33.1549 25.7564 33.1549 26.2643V29.021H13.5091ZM16.2292 26.4585H30.4348V25.9986C29.3506 25.3744 28.2123 24.8953 27.0197 24.5613C25.8272 24.2273 24.5979 24.0602 23.332 24.0602C22.0661 24.0602 20.8368 24.2273 19.6443 24.5613C18.4517 24.8953 17.3134 25.3744 16.2292 25.9986V26.4585ZM23.3339 18.8531C22.0295 18.8531 20.9201 18.3966 20.0057 17.4835C19.0913 16.5704 18.6341 15.4616 18.6341 14.1572C18.6341 12.8527 19.0907 11.7433 20.0038 10.8289C20.9169 9.91453 22.0256 9.45733 23.3301 9.45733C24.6345 9.45733 25.7439 9.91389 26.6583 10.827C27.5727 11.7401 28.0299 12.8489 28.0299 14.1533C28.0299 15.4577 27.5733 16.5671 26.6602 17.4815C25.7471 18.3959 24.6383 18.8531 23.3339 18.8531ZM23.332 16.2907C23.9255 16.2907 24.4298 16.0831 24.8449 15.6681C25.2599 15.2531 25.4675 14.7488 25.4675 14.1552C25.4675 13.5617 25.2599 13.0574 24.8449 12.6424C24.4298 12.2273 23.9255 12.0198 23.332 12.0198C22.7385 12.0198 22.2342 12.2273 21.8191 12.6424C21.4041 13.0574 21.1965 13.5617 21.1965 14.1552C21.1965 14.7488 21.4041 15.2531 21.8191 15.6681C22.2342 16.0831 22.7385 16.2907 23.332 16.2907Z"
                                        fill="white" />
                                </svg>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="text-[20px] flex justify-start items-center">ห้องมีผู้เช่า</div>
                        </div>
                    </div>
                </a>
                <a href="/rooms" class="block">
                    <div class="h-[110px] p-[18px] flex flex-col justify-between bg-[#F5D65E] rounded-[22px] text-[#003765] hover:bg-[#F2D24A] transition-colors cursor-pointer">
                        <div class="flex justify-between">
                            <div class="text-[24px] flex justify-center items-center">{{ data.reservedRoom }} ({{ Math.round(data.reservedRoom) }}%)</div>
                            <div>
                                <template>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                                        <path fill="white" d="M224 115.55V208a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-92.45a16 16 0 0 1 5.17-11.78l80-75.48l.11-.11a16 16 0 0 1 21.53 0a1.14 1.14 0 0 0 .11.11l80 75.48a16 16 0 0 1 5.08 11.78" />
                                    </svg>
                                </template>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="text-[20px] flex justify-start items-center">ห้องจอง</div>
                        </div>
                    </div>
                </a>
                <a href="/rooms" class="block">
                    <div
                        class="h-[110px] p-[18px] flex flex-col justify-between bg-[#F5D65E] rounded-[22px] text-[#003765]  ">
                        <div class="flex justify-between">
                            <div class="text-[24px] flex justify-center items-center">{{ data.availableRoom }} ({{
                            Math.round(data.availableRoomPer)
                        }}%)</div>
                            <div>
                                <template>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                                        <path fill="white"
                                            d="m221.56 100.85l-79.95-75.47l-.16-.15a19.93 19.93 0 0 0-26.91 0l-.17.15l-79.93 75.47a20.07 20.07 0 0 0-6.44 14.7V208a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-92.45a20.07 20.07 0 0 0-6.44-14.7M204 204H52v-86.72l76-71.75l76 71.75Z" />
                                    </svg>
                                </template>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="text-[20px] flex justify-start items-center">ห้องว่าง</div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="grid grid-cols-2 w-[100%] gap-2 mt-[10px]">
                <a href="/payment" class="block">
                    <div class="h-[110px] p-[18px] flex flex-col justify-between bg-[#47d45e] rounded-[22px] text-[white]">
                        <div class="flex justify-between">
                            <div class="text-[24px] flex justify-center items-center">{{ data.makePayment }} ({{
                                Math.round(data.makePaymentPer)
                                }}%)</div>
                            <div>
                                <template>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M14 13q-1.25 0-2.125-.875T11 10q0-1.25.875-2.125T14 7q1.25 0 2.125.875T17 10q0 1.25-.875 2.125T14 13m-9 3V4h18v12zm4-2h10q0-.825.588-1.412T21 12V8q-.825 0-1.412-.587T19 6H9q0 .825-.587 1.413T7 8v4q.825 0 1.413.588T9 14m-8 6V7h2v11h17v2zm6-6V6z" />
                                    </svg>
                                </template>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="text-[20px] flex justify-start items-center">ชำระแล้ว</div>
                        </div>
                    </div>
                </a>
                <a href="/payment" class="block">
                    <div class="h-[110px] p-[18px] flex flex-col justify-between bg-[#D44769] rounded-[22px] text-[white]">
                        <div class="flex justify-between">
                            <div class="text-[24px] flex justify-center items-center">{{ data.latePayment }} ({{
                                Math.round(data.latePaymentPer)
                                }}%)</div>
                            <div>
                                <template>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M14 13q-1.25 0-2.125-.875T11 10q0-1.25.875-2.125T14 7q1.25 0 2.125.875T17 10q0 1.25-.875 2.125T14 13m-9 3V4h18v12zm4-2h10q0-.825.588-1.412T21 12V8q-.825 0-1.412-.587T19 6H9q0 .825-.587 1.413T7 8v4q.825 0 1.413.588T9 14m-8 6V7h2v11h17v2zm6-6V6z" />
                                    </svg>
                                </template>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="text-[20px] flex justify-start items-center">ค้างชำระ</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: {
        childFunction: {
            type: Function,
        },
        data: { type: Object },
    },
    data() {
        return {
            check: false
        }
    },
    computed: {
        isPackageBasic() {
            const packageId = this.$store.state.buildingInfo[0].attributes.package.data?.id;
            return packageId === 1; // Business package (ID = 1)
        }
    },
    methods: {
        // Modified function to handle toggle click with package check
        handleToggleClick(value) {
            if (!this.isPackageBasic) {
                this.callParentFunction(value);
            }
        },
        callParentFunction(check) {
            // Call the function passed from the parent component
            this.childFunction(check);
        },
        getPercent() {
            return 5
        }
    },
    name: 'PhBuildingsLight',
    name: 'PhHouseSimpleBold',
    name: 'PhHouseSimpleFill',
    name: 'MaterialSymbolsPaymentsOutlineSharp',
}
</script>
<style scoped>
.bg-card {
    background: linear-gradient(180deg, #D1C0FF 100%, #9747FF 100%, #9747FF 100%);
}
</style>