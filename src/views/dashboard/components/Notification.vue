<template>
    <div id="payment" class="p-[20px] rounded-[22px] mt-[18px]">
        <div class="flex justify-between">
            <div class="flex">
                <div class="flex items-center">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div class="text-[18px] font-bold flex items-center ml-[4px]">แจ้งเตือน</div>
            </div>
            <div class="flex justify-center items-center">
                <div class="flex justify-center items-center">ดูทั้งหมด</div>
            </div>
        </div>
        <div class="grid grid-cols-5 gap-2 w-[100%] justify-between mt-[18px]">
            <div class="flex justify-center">
                <div @click="tab = 1" class="cursor-pointer text-[#8396A6]  text-[1rem] "
                    :class="tab == 1 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[8px] text-[white]' : 'flex justify-center items-center'">
                    ทั้งหมด</div>
            </div>
            <div class="flex justify-center">
                <div @click="tab = 2" class="cursor-pointer text-[#8396A6]  text-[1rem]"
                    :class="tab == 2 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[8px] text-[white]' : 'flex justify-center items-center'">
                    ซ่อมบำรุง</div>
            </div>

            <div @click="tab = 3" class="cursor-pointer text-[#8396A6] text-[1rem] flex justify-center"
                :class="tab == 3 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[8px] text-[white]' : 'flex justify-center items-center'">
                ทำความสะอาด</div>
            <div @click="tab = 4" class="cursor-pointer text-[#8396A6]  text-[1rem] flex justify-center"
                :class="tab == 4 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[8px] text-[white]' : 'flex justify-center items-center'">
                แจ้งย้ายออก</div>
            <div class="flex justify-center">
                <div @click="tab = 5" class="cursor-pointer text-[#8396A6]  text-[1rem]"
                    :class="tab == 5 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[8px] text-[white]' : 'flex justify-center items-center'">
                    ฉุกเฉิน</div>
            </div>

        </div>
        <div class="mt-[18px]">
            <div class="test w-[100%] gap-2 ">
                <div class="h-[78px] bg-[#F3F7FA] rounded-[22px] w-[90%] p-[4px]"
                    v-for="item in tab == 1 ? data : tab == 2 ? data_maintenacec : tab == 3 ? data_clean : tab == 4 ? data_move : data_emergency">
                    <div class="flex items-center h-[100%]">

                        <div class="w-[54px]  h-[100%] flex justify-center items-center rounded-[19px]"
                            :class="item.Type == 'Move out' ? 'bg-[#2011D3]' : item.Type == 'Maintenance' ? 'bg-[#F5D65E]' : item.Type == 'Clean' ? 'bg-[#5FB3FA]' : 'bg-[#F4003B]'">
                            <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                v-if="item.Type == 'Move out'">
                                <path
                                    d="M20.1539 23.1155C19.7702 23.1155 19.4061 23.045 19.0617 22.904C18.7172 22.7629 18.3997 22.5471 18.1091 22.2566L10.9039 15.0309C10.4339 15.2343 9.95598 15.3911 9.47031 15.5014C8.98465 15.6116 8.46936 15.6668 7.92445 15.6668C5.79482 15.6668 3.98465 14.9214 2.49391 13.4307C1.00318 11.9399 0.257812 10.1298 0.257812 8.00013C0.257812 7.31124 0.345412 6.6527 0.520612 6.0245C0.695835 5.39632 0.944979 4.79846 1.26805 4.23093L6.05778 8.99503L8.91935 6.13346L4.18091 1.36936C4.74842 1.0463 5.3424 0.792885 5.96285 0.609129C6.58331 0.425374 7.23718 0.333496 7.92445 0.333496C10.0541 0.333496 11.8642 1.07886 13.355 2.5696C14.8457 4.06033 15.5911 5.87051 15.5911 8.00013C15.5911 8.56253 15.5381 9.08646 15.4321 9.57193C15.3261 10.0574 15.1672 10.5266 14.9552 10.9796L22.2014 18.1848C22.492 18.4754 22.7078 18.7934 22.8488 19.1387C22.9898 19.484 23.0603 19.8486 23.0603 20.2323C23.0603 20.616 22.9864 20.9835 22.8385 21.3348C22.6907 21.686 22.4798 21.9987 22.2058 22.2726C21.9123 22.5662 21.5928 22.7801 21.2475 22.9142C20.9021 23.0484 20.5376 23.1155 20.1539 23.1155ZM19.5552 20.872C19.7176 21.0344 19.9211 21.1121 20.1655 21.1053C20.41 21.0985 20.6134 21.0139 20.7758 20.8515C20.9382 20.6891 21.0194 20.4856 21.0194 20.2412C21.0194 19.9967 20.9382 19.7933 20.7758 19.6309L12.4963 11.3719C12.8706 10.9104 13.1467 10.3852 13.3245 9.7963C13.5023 9.20741 13.5911 8.60869 13.5911 8.00013C13.5911 6.52149 13.0629 5.21293 12.0065 4.07446C10.9501 2.936 9.61331 2.37787 7.99618 2.4001L10.8988 5.3027C11.1313 5.53519 11.2518 5.80783 11.2603 6.12063C11.2689 6.43345 11.1569 6.70611 10.9244 6.9386L6.88855 10.9745C6.65608 11.2069 6.37916 11.3232 6.05778 11.3232C5.73642 11.3232 5.4595 11.2069 5.22701 10.9745L2.32441 8.07186C2.32783 9.78302 2.90306 11.1433 4.05008 12.1527C5.19708 13.1621 6.48853 13.6668 7.92445 13.6668C8.50793 13.6668 9.09141 13.5801 9.67488 13.4066C10.2583 13.2331 10.792 12.9617 11.2757 12.5925L19.5552 20.872Z"
                                    fill="white" />
                            </svg> -->
                            <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                v-if="item.Type == 'Move out'">
                                <path
                                    d="M1.2051 23.3331C0.863656 23.3331 0.577433 23.2176 0.346433 22.9866C0.115478 22.7556 0 22.4694 0 22.128V1.87164C0 1.53019 0.115489 1.24398 0.346467 1.013C0.577445 0.782004 0.863656 0.666504 1.2051 0.666504H16.1794C16.5208 0.666504 16.8071 0.782004 17.038 1.013C17.269 1.24398 17.3845 1.53019 17.3845 1.87164V22.128C17.3845 22.4694 17.269 22.7556 17.038 22.9866C16.8071 23.2176 16.5208 23.3331 16.1794 23.3331H10.4615V18.051H6.92297V23.3331H1.2051ZM1.99993 21.3331H4.92303V16.0511H12.4615V21.3331H15.3846V2.66647H1.99993V21.3331ZM4.92303 13.128H7.2307V10.8203H4.92303V13.128ZM4.92303 7.89724H7.2307V5.58957H4.92303V7.89724ZM10.1538 13.128H12.4615V10.8203H10.1538V13.128ZM10.1538 7.89724H12.4615V5.58957H10.1538V7.89724ZM19.4871 11.9994C19.4871 11.7159 19.583 11.4785 19.7746 11.287C19.9663 11.0956 20.2038 10.9998 20.4871 10.9998H24.1949L23.0974 9.90234C22.9128 9.71774 22.8183 9.48698 22.814 9.21007C22.8098 8.93314 22.9098 8.69479 23.114 8.49504C23.3012 8.3119 23.5353 8.22034 23.8162 8.22034C24.0971 8.22034 24.3284 8.31265 24.5102 8.49727L27.1691 11.1562C27.4102 11.3973 27.5307 11.6784 27.5307 11.9998C27.5307 12.3212 27.4102 12.6023 27.1691 12.8434L24.5102 15.5023C24.3277 15.6841 24.0996 15.7791 23.8259 15.7874C23.5522 15.7956 23.3162 15.7006 23.1179 15.5023C22.9247 15.3177 22.8269 15.087 22.8243 14.8101C22.8217 14.5331 22.9128 14.2955 23.0974 14.0973L24.1949 12.9998H20.4871C20.2038 12.9998 19.9663 12.9039 19.7746 12.7122C19.583 12.5204 19.4871 12.2828 19.4871 11.9994Z"
                                    fill="white" />
                            </svg>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                                v-else-if="item.Type == 'Emergency'">
                                <mask id="mask0_1510_23461" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                    width="25" height="25">
                                    <rect width="25" height="25" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_1510_23461)">
                                    <path
                                        d="M5.56763 20.3126V18.7502H7.16419L9.17138 12.0214C9.29025 11.6101 9.51795 11.2832 9.85448 11.0408C10.191 10.7985 10.5649 10.6773 10.9763 10.6773H14.0211C14.4325 10.6773 14.8064 10.7985 15.1429 11.0408C15.4794 11.2832 15.7071 11.6101 15.826 12.0214L17.8332 18.7502H19.4298V20.3126H5.56763ZM8.81078 18.7502H16.1866L14.3216 12.4701C14.3016 12.3966 14.2632 12.3399 14.2064 12.2998C14.1497 12.2597 14.0846 12.2397 14.0111 12.2397H10.9863C10.9128 12.2397 10.8477 12.2597 10.791 12.2998C10.7342 12.3399 10.6958 12.3966 10.6758 12.4701L8.81078 18.7502ZM11.7175 8.27339V3.58594H13.2799V8.27339H11.7175ZM17.6549 10.7413L16.5412 9.62758L19.8685 6.32633L20.9562 7.41404L17.6549 10.7413ZM19.0091 15.5651V14.0026H23.6966V15.5651H19.0091ZM7.34245 10.7413L4.0412 7.41404L5.12891 6.32633L8.4562 9.62758L7.34245 10.7413ZM1.30078 15.5651V14.0026H5.98828V15.5651H1.30078Z"
                                        fill="white" />
                                </g>
                            </svg>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                                v-else-if="item.Type == 'Clean'">
                                <mask id="mask0_1510_23450" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                    width="25" height="25">
                                    <rect width="25" height="25" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_1510_23450)">
                                    <path
                                        d="M11.2976 11.7188H13.7014V4.26682C13.7014 3.93163 13.5849 3.6475 13.3519 3.41445C13.1188 3.18141 12.8347 3.06489 12.4995 3.06489C12.1643 3.06489 11.8802 3.18141 11.6471 3.41445C11.4141 3.6475 11.2976 3.93163 11.2976 4.26682V11.7188ZM5.14774 15.6851H19.8513V13.6018C19.8513 13.5083 19.8212 13.4315 19.7611 13.3714C19.701 13.3113 19.6242 13.2812 19.5307 13.2812H5.46829C5.3748 13.2812 5.298 13.3113 5.2379 13.3714C5.17779 13.4315 5.14774 13.5083 5.14774 13.6018V15.6851ZM3.9779 21.9351H6.61011V19.5913C6.61011 19.37 6.68502 19.1844 6.83482 19.0347C6.98462 18.885 7.17024 18.8101 7.3917 18.8101C7.61314 18.8101 7.79865 18.885 7.94824 19.0347C8.0978 19.1844 8.17258 19.37 8.17258 19.5913V21.9351H11.7183V19.5913C11.7183 19.37 11.7932 19.1844 11.943 19.0347C12.0928 18.885 12.2784 18.8101 12.4999 18.8101C12.7213 18.8101 12.9068 18.885 13.0564 19.0347C13.206 19.1844 13.2807 19.37 13.2807 19.5913V21.9351H16.8264V19.5913C16.8264 19.37 16.9013 19.1844 17.0512 19.0347C17.201 18.885 17.3866 18.8101 17.608 18.8101C17.8295 18.8101 18.015 18.885 18.1646 19.0347C18.3141 19.1844 18.3889 19.37 18.3889 19.5913V21.9351H21.0211C21.128 21.9351 21.2148 21.8934 21.2816 21.8099C21.3483 21.7264 21.365 21.6346 21.3316 21.5344L20.1698 17.2475H4.82925L3.66738 21.5344C3.63399 21.6346 3.65068 21.7264 3.71745 21.8099C3.78424 21.8934 3.87106 21.9351 3.9779 21.9351ZM21.1013 23.4975H3.89777C3.30749 23.4975 2.82739 23.2618 2.45748 22.7904C2.08755 22.319 1.98271 21.7935 2.14298 21.2139L3.58529 15.8554V13.5417C3.58529 13.0355 3.76257 12.6052 4.11712 12.2506C4.47168 11.8961 4.90204 11.7188 5.40818 11.7188H9.73511V4.26682C9.73511 3.49893 10.0039 2.84623 10.5414 2.30872C11.0789 1.7712 11.7316 1.50244 12.4995 1.50244C13.2674 1.50244 13.9201 1.7712 14.4576 2.30872C14.9952 2.84623 15.2639 3.49893 15.2639 4.26682V11.7188H19.5908C20.097 11.7188 20.5273 11.8961 20.8819 12.2506C21.2365 12.6052 21.4137 13.0355 21.4137 13.5417V15.8554L22.856 21.2339C23.0484 21.8069 22.9569 22.3274 22.5816 22.7954C22.2063 23.2635 21.7129 23.4975 21.1013 23.4975Z"
                                        fill="white" />
                                </g>
                            </svg>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                v-else>
                                <mask id="mask0_1510_23443" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                    width="32" height="32">
                                    <rect width="32" height="32" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_1510_23443)">
                                    <path
                                        d="M24.1539 27.1155C23.7702 27.1155 23.4061 27.045 23.0617 26.904C22.7172 26.7629 22.3997 26.5471 22.1091 26.2566L14.9039 19.0309C14.4339 19.2343 13.956 19.3911 13.4703 19.5014C12.9846 19.6116 12.4694 19.6668 11.9244 19.6668C9.79482 19.6668 7.98465 18.9214 6.49391 17.4307C5.00318 15.9399 4.25781 14.1298 4.25781 12.0001C4.25781 11.3112 4.34541 10.6527 4.52061 10.0245C4.69583 9.39632 4.94498 8.79846 5.26805 8.23093L10.0578 12.995L12.9193 10.1335L8.18091 5.36936C8.74842 5.0463 9.3424 4.79288 9.96285 4.60913C10.5833 4.42537 11.2372 4.3335 11.9244 4.3335C14.0541 4.3335 15.8642 5.07886 17.355 6.5696C18.8457 8.06033 19.5911 9.87051 19.5911 12.0001C19.5911 12.5625 19.5381 13.0865 19.4321 13.5719C19.3261 14.0574 19.1672 14.5266 18.9552 14.9796L26.2014 22.1848C26.492 22.4754 26.7078 22.7934 26.8488 23.1387C26.9898 23.484 27.0603 23.8486 27.0603 24.2323C27.0603 24.616 26.9864 24.9835 26.8385 25.3348C26.6907 25.686 26.4798 25.9987 26.2058 26.2726C25.9123 26.5662 25.5928 26.7801 25.2475 26.9142C24.9021 27.0484 24.5376 27.1155 24.1539 27.1155ZM23.5552 24.872C23.7176 25.0344 23.9211 25.1121 24.1655 25.1053C24.41 25.0985 24.6134 25.0139 24.7758 24.8515C24.9382 24.6891 25.0194 24.4856 25.0194 24.2412C25.0194 23.9967 24.9382 23.7933 24.7758 23.6309L16.4963 15.3719C16.8706 14.9104 17.1467 14.3852 17.3245 13.7963C17.5023 13.2074 17.5911 12.6087 17.5911 12.0001C17.5911 10.5215 17.0629 9.21293 16.0065 8.07446C14.9501 6.936 13.6133 6.37787 11.9962 6.4001L14.8988 9.3027C15.1313 9.53519 15.2518 9.80783 15.2603 10.1206C15.2689 10.4335 15.1569 10.7061 14.9244 10.9386L10.8885 14.9745C10.6561 15.2069 10.3792 15.3232 10.0578 15.3232C9.73642 15.3232 9.4595 15.2069 9.22701 14.9745L6.32441 12.0719C6.32783 13.783 6.90306 15.1433 8.05008 16.1527C9.19708 17.1621 10.4885 17.6668 11.9244 17.6668C12.5079 17.6668 13.0914 17.5801 13.6749 17.4066C14.2583 17.2331 14.792 16.9617 15.2757 16.5925L23.5552 24.872Z"
                                        fill="white" />
                                </g>
                            </svg>
                        </div>
                        <div class="flex justify-between max-w-[100%] p-[8px] h-[100%]">
                            <div class="flex flex-col justify-between">
                                <div>
                                    <div class="font-bold truncate w-[8rem]">ห้อง {{
                                        item.user_sign_contract?.room?.RoomNumber }} {{ item.title }}</div>
                                    <div class="text-[12px] text-[#8396A6]">รายละเอียด</div>
                                </div>
                                <div>{{ item.description }}</div>
                            </div>
                            <div class="flex flex-col justify-between items-end">
                                <div class="pl-[12px] pr-[12px] pt-[7px] pb-[7px] rounded-[8px]"
                                    :class="item.serviceStatus == 'Completed' ? 'bg-[#CFFBDA] text-[#0B9A3C]' : item.serviceStatus == 'In Progress' ? 'bg-[#FFF2BC] text-[#D48C00]' : 'bg-[#FFE1E8] text-[#EA2F5C]'">
                                    {{ item.serviceStatus == "Completed" ? 'เสร็จสิ้น' : item.serviceStatus == "In Progress"
                                        ? 'ดำเนินการ' : 'ยกเลิก' }}</div>
                                <!-- <div class="text-[12px] text-[#8396A6]"> {{ timeDiff(item.createdAt) }}</div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    // props: {
    //     data: { type: Array },
    // },
    data() {
        return {
            tab: 1,
            notiData: [],
            data_move: [],
            data_emergency: [],
            data_clean: [],
            data_maintenace: [],
            data: [],



        }
    },
    beforeCreate() {
        console.log('beforeCreate hook',);
    },
    created() {
        this.getDashboard()
        console.log('created hook', this.data);

    },
    beforeMount() {
        console.log('beforeMount hook');
    },
    destroyed() {
    },
    methods: {
        getDashboard() {
            fetch(`https://api.resguru.app/api/getdashboard?buildingid=${this.$store.state.building}&month=10&year=2023`)
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getRoom()", resp);
                    // this.db_meter = resp.room.roomData  
                    // this.db_annocment = resp.announcement.announceData
                    this.data = resp.service.notiData
                    this.notiData = this.data.reduce((acc, item) => {
                        const { Type } = item;
                        if (!acc[Type]) {
                            acc[Type] = [];
                        }
                        acc[Type].push(item);
                        return acc;
                    }, {});
                    this.data_emergency = this.notiData['Emergency'];
                    this.data_move = this.notiData['Move out']
                    this.data_clean = this.notiData['Clean']
                    this.data_maintenace = this.notiData['Maintenance']
                })
        },
        timeDiff(timeCreate) {
            var currentDate = new Date();
            // Convert the given date string to a Date object
            var givenDate = new Date(timeCreate);
            // Calculate the time difference in milliseconds
            var timeDiff = currentDate - givenDate;
            // Calculate the time difference in seconds, minutes, hours, and days
            var secondsDiff = Math.floor(timeDiff / 1000);
            var minutesDiff = Math.floor(secondsDiff / 60);
            var hoursDiff = Math.floor(minutesDiff / 60);
            var daysDiff = Math.floor(hoursDiff / 24);
            // Output the result
            if (daysDiff > 0) {
                return daysDiff + " วันที่แล้ว";
            } else if (hoursDiff > 0) {
                return hoursDiff + " ขั่วโมงที่แล้ว";
            } else if (minutesDiff > 0) {
                return minutesDiff + " เดือนที่แล้ว";
            } else {
                return secondsDiff + " วินาทีที่แล้ว";
            }

        }
    }
}
</script>
<style scoped>
#payment {
    background-color: rgb(255, 255, 255);

}

.table-container {
    height: 250px;
    /* Set a fixed height to enable scrolling */
    overflow-y: scroll;
    /* Enable vertical scrolling */
    padding: 10px;
    /* Optional: Add padding for spacing */
}

/* width */
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #ffff;
    border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #E9EEF6;
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #E9EEF6;
}

@media only screen and (min-width: 1024px) {
    .test {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 5px;
    }
}</style>