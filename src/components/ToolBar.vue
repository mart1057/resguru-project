<template>
    <div class="bg-[#E0ECE4] flex items-center justify-between h-[70px] w-[100%]" :style="{ height: toolbarHeight }">
        <div class="flex justify-center items-center w-[100%]">
            <div class="flex justify-between  w-[100%] pl-[24px] pr-[24px]">
                <div class="flex">
                    <div
                        class="cursor-pointer bg-[#E8F0F8] w-[44px] h-[44px] justify-center items-center flex rounded-[9px]">
                        <div><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2H17" stroke="#003765" stroke-width="2.5" stroke-linecap="round" />
                                <path d="M2 7H17" stroke="#003765" stroke-width="2.5" stroke-linecap="round" />
                                <path d="M2 12H17" stroke="#003765" stroke-width="2.5" stroke-linecap="round" />
                            </svg>
                        </div>

                    </div>
                    <div class="ml-[8px]"><svg width="35" height="38" viewBox="0 0 35 38" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M32.9822 35.4743L26.026 24.7507C30.0591 22.8879 32.4081 19.219 32.4081 14.2123C32.4081 6.72532 27.222 2.10449 18.931 2.10449H14.7305C15.716 3.56072 16.2997 5.35142 16.2997 7.2862C16.2997 7.66183 16.2758 8.03232 16.2327 8.39767H18.5339C22.921 8.39767 25.1409 10.5434 25.1409 14.2123C25.1409 17.8812 22.921 20.0269 18.5339 20.0269H15.5916V26.1812H19.2898L25.2701 35.4743L26.3322 37.126H34.0539L32.9822 35.4743Z"
                                fill="#003765" />
                            <path
                                d="M14.3848 7.28629C14.3848 3.26237 11.3516 0 7.61037 0C3.86912 0 0.835938 3.26237 0.835938 7.28629C0.835938 10.4046 2.65872 13.0546 5.21827 14.0992V37.1261H13.6767V30.977H10.0025V26.1813H13.6767V20.0322H10.0025V14.1043C12.562 13.0649 14.3848 10.4097 14.3848 7.29144V7.28629ZM7.61037 6.7357C6.61047 6.7357 5.80194 5.86608 5.80194 4.79063C5.80194 3.71519 6.61047 2.84556 7.61037 2.84556C8.61027 2.84556 9.4188 3.71519 9.4188 4.79063C9.4188 5.86608 8.61027 6.7357 7.61037 6.7357Z"
                                fill="#003765" />
                        </svg>
                    </div>
                    <div class="ml-[16px] flex flex-col justify-between">
                        <div class="text-[22px] font-bold">แดชบอร์ด</div>
                        <div class="text-[12px] text-[#8396A6]">แดชบอร์ด</div>
                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <div class="cursor-pointer"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_1490_26602" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                width="28" height="28">
                                <rect width="28" height="28" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_1490_26602)">
                                <path
                                    d="M6.15622 22.3723C5.9083 22.3723 5.7005 22.2884 5.53281 22.1206C5.3651 21.9528 5.28125 21.7449 5.28125 21.4969C5.28125 21.2489 5.3651 21.0411 5.53281 20.8736C5.7005 20.7061 5.9083 20.6223 6.15622 20.6223H7.61458V12.164C7.61458 10.6099 8.10069 9.21702 9.07292 7.98529C10.0451 6.75356 11.309 5.96569 12.8646 5.62168V4.80501C12.8646 4.39369 13.0048 4.0478 13.2853 3.76735C13.5657 3.4869 13.9116 3.34668 14.3229 3.34668C14.7342 3.34668 15.0801 3.4869 15.3605 3.76735C15.641 4.0478 15.7812 4.39369 15.7812 4.80501V5.62168C17.3367 5.96569 18.6006 6.75356 19.5729 7.98529C20.5451 9.21702 21.0312 10.6099 21.0312 12.164V20.6223H22.4896C22.7375 20.6223 22.9453 20.7062 23.113 20.874C23.2807 21.0418 23.3645 21.2497 23.3645 21.4977C23.3645 21.7457 23.2807 21.9535 23.113 22.121C22.9453 22.2885 22.7375 22.3723 22.4896 22.3723H6.15622ZM14.3229 25.805C13.7485 25.805 13.2535 25.6008 12.8376 25.1925C12.4218 24.7841 12.2139 24.2853 12.2139 23.696H16.4318C16.4318 24.2853 16.2277 24.7841 15.8193 25.1925C15.411 25.6008 14.9122 25.805 14.3229 25.805ZM9.36452 20.6223H19.2812V12.164C19.2812 10.8004 18.7955 9.63313 17.8241 8.66213C16.8526 7.69111 15.6848 7.2056 14.3207 7.2056C12.9566 7.2056 11.7895 7.69111 10.8195 8.66213C9.84952 9.63313 9.36452 10.8004 9.36452 12.164V20.6223Z"
                                    fill="#003765" />
                            </g>
                        </svg>
                    </div>
                    <div class="ml-[10px]"><svg width="2" height="42" viewBox="0 0 2 42" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0.5V41.5" stroke="#B9CCDC" stroke-linecap="round" />
                        </svg>
                    </div>
                    <div
                        class=" ml-[10px] h-[15px] bg-[#E7E2F7] pl-[12px] pr-[12px] pt-[12px] pb-[12px] rounded-[13px] text-[#9A77FF] text-center flex items-center">
                        Professional
                    </div>
                    <div class="flex ml-[10px] items-center">
                        <div>
                            <vs-avatar size="40" primary>
                                <template #text>
                                    Lily
                                </template>
                            </vs-avatar>
                        </div>
                        <div class="ml-[8px]">
                            <vs-avatar>
                                <template #text>
                                    Lily
                                </template>
                            </vs-avatar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>

<style></style>