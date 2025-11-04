<template>
    <div>
        <div class="mt-[24px]">
            <div class="text-[24px] font-bold">รายละเอียดการแจ้งทั้งหมด</div>
            <div class="grid grid-cols-1 md:grid-cols-2 w-[100%] gap-2 mt-[14px] ">
                <div class="h-[auto] bg-[#ffffff] rounded-[22px] w-[100%] p-[8px]" v-for="data in service">
                    <div class="flex  h-[100%]">
                        <!-- <div class="w-[140px] bg-[#F5D65E] h-[100%] flex justify-center items-center rounded-[19px]">
                            <svg width="90" height="92" viewBox="0 0 90 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_1318_25457" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                    width="90" height="92">
                                    <rect width="90" height="92" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_1318_25457)">
                                    <path
                                        d="M67.9304 77.9572C66.8512 77.9572 65.8273 77.7545 64.8585 77.3491C63.8898 76.9436 62.9967 76.3232 62.1794 75.4878L41.9149 54.7139C40.5928 55.2988 39.2488 55.7497 37.8828 56.0667C36.5169 56.3837 35.0676 56.5421 33.5351 56.5421C27.5455 56.5421 22.4544 54.3992 18.2617 50.1133C14.069 45.8275 11.9727 40.6232 11.9727 34.5006C11.9727 32.52 12.219 30.6267 12.7118 28.8206C13.2046 27.0146 13.9053 25.2958 14.8139 23.6641L28.2851 37.3609L36.3332 29.1339L23.0064 15.4371C24.6025 14.5083 26.2731 13.7797 28.0181 13.2514C29.7631 12.7231 31.6021 12.459 33.5351 12.459C39.5246 12.459 44.6157 14.6019 48.8084 18.8878C53.0011 23.1736 55.0975 28.3779 55.0975 34.5006C55.0975 36.1175 54.9484 37.6238 54.6504 39.0195C54.3523 40.4152 53.9052 41.7642 53.309 43.0666L73.6889 63.7815C74.5063 64.6169 75.1132 65.5311 75.5098 66.5239C75.9065 67.5168 76.1048 68.5648 76.1048 69.6679C76.1048 70.7711 75.8968 71.8277 75.481 72.8376C75.0651 73.8475 74.4719 74.7463 73.7014 75.534C72.8758 76.378 71.9773 76.9928 71.0061 77.3786C70.0348 77.7644 69.0096 77.9572 67.9304 77.9572ZM66.2467 71.5071C66.7034 71.974 67.2756 72.1976 67.9631 72.1779C68.6506 72.1583 69.2227 71.915 69.6794 71.4481C70.1362 70.9812 70.3646 70.3964 70.3646 69.6936C70.3646 68.9908 70.1362 68.4059 69.6794 67.9391L46.3933 44.1945C47.4462 42.8676 48.2227 41.3576 48.7227 39.6645C49.2227 37.9715 49.4727 36.2502 49.4727 34.5006C49.4727 30.2495 47.9871 26.4874 45.0159 23.2143C42.0447 19.9412 38.285 18.3366 33.7368 18.4005L41.9004 26.7454C42.5543 27.4138 42.8932 28.1977 42.9172 29.097C42.9413 29.9964 42.6263 30.7802 41.9725 31.4486L30.6216 43.0518C29.9678 43.7201 29.1889 44.0543 28.2851 44.0543C27.3813 44.0543 26.6024 43.7201 25.9485 43.0518L17.785 34.7068C17.7946 39.6264 19.4124 43.5372 22.6384 46.4392C25.8643 49.3413 29.4966 50.7923 33.5351 50.7923C35.1761 50.7923 36.8172 50.5429 38.4582 50.0441C40.0992 49.5452 41.6 48.765 42.9606 47.7035L66.2467 71.5071Z"
                                        fill="white" />
                                </g>
                            </svg>
                        </div> -->
                        <div class="w-[140px]  h-[100%] flex justify-center items-center rounded-[19px]"
                            :class="data.attributes.Type == 'Move out' ? 'bg-[#2011D3]' : data.attributes.Type == 'Maintenance' ? 'bg-[#F5D65E]' : data.attributes.Type == 'Clean' ? 'bg-[#5FB3FA]' : 'bg-[#F4003B]'">
                            <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                v-if="item.Type == 'Move out'">
                                <path
                                    d="M20.1539 23.1155C19.7702 23.1155 19.4061 23.045 19.0617 22.904C18.7172 22.7629 18.3997 22.5471 18.1091 22.2566L10.9039 15.0309C10.4339 15.2343 9.95598 15.3911 9.47031 15.5014C8.98465 15.6116 8.46936 15.6668 7.92445 15.6668C5.79482 15.6668 3.98465 14.9214 2.49391 13.4307C1.00318 11.9399 0.257812 10.1298 0.257812 8.00013C0.257812 7.31124 0.345412 6.6527 0.520612 6.0245C0.695835 5.39632 0.944979 4.79846 1.26805 4.23093L6.05778 8.99503L8.91935 6.13346L4.18091 1.36936C4.74842 1.0463 5.3424 0.792885 5.96285 0.609129C6.58331 0.425374 7.23718 0.333496 7.92445 0.333496C10.0541 0.333496 11.8642 1.07886 13.355 2.5696C14.8457 4.06033 15.5911 5.87051 15.5911 8.00013C15.5911 8.56253 15.5381 9.08646 15.4321 9.57193C15.3261 10.0574 15.1672 10.5266 14.9552 10.9796L22.2014 18.1848C22.492 18.4754 22.7078 18.7934 22.8488 19.1387C22.9898 19.484 23.0603 19.8486 23.0603 20.2323C23.0603 20.616 22.9864 20.9835 22.8385 21.3348C22.6907 21.686 22.4798 21.9987 22.2058 22.2726C21.9123 22.5662 21.5928 22.7801 21.2475 22.9142C20.9021 23.0484 20.5376 23.1155 20.1539 23.1155ZM19.5552 20.872C19.7176 21.0344 19.9211 21.1121 20.1655 21.1053C20.41 21.0985 20.6134 21.0139 20.7758 20.8515C20.9382 20.6891 21.0194 20.4856 21.0194 20.2412C21.0194 19.9967 20.9382 19.7933 20.7758 19.6309L12.4963 11.3719C12.8706 10.9104 13.1467 10.3852 13.3245 9.7963C13.5023 9.20741 13.5911 8.60869 13.5911 8.00013C13.5911 6.52149 13.0629 5.21293 12.0065 4.07446C10.9501 2.936 9.61331 2.37787 7.99618 2.4001L10.8988 5.3027C11.1313 5.53519 11.2518 5.80783 11.2603 6.12063C11.2689 6.43345 11.1569 6.70611 10.9244 6.9386L6.88855 10.9745C6.65608 11.2069 6.37916 11.3232 6.05778 11.3232C5.73642 11.3232 5.4595 11.2069 5.22701 10.9745L2.32441 8.07186C2.32783 9.78302 2.90306 11.1433 4.05008 12.1527C5.19708 13.1621 6.48853 13.6668 7.92445 13.6668C8.50793 13.6668 9.09141 13.5801 9.67488 13.4066C10.2583 13.2331 10.792 12.9617 11.2757 12.5925L19.5552 20.872Z"
                                    fill="white" />
                            </svg> -->
                            <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                v-if="data.attributes.Type == 'Move out'">
                                <path
                                    d="M1.2051 23.3331C0.863656 23.3331 0.577433 23.2176 0.346433 22.9866C0.115478 22.7556 0 22.4694 0 22.128V1.87164C0 1.53019 0.115489 1.24398 0.346467 1.013C0.577445 0.782004 0.863656 0.666504 1.2051 0.666504H16.1794C16.5208 0.666504 16.8071 0.782004 17.038 1.013C17.269 1.24398 17.3845 1.53019 17.3845 1.87164V22.128C17.3845 22.4694 17.269 22.7556 17.038 22.9866C16.8071 23.2176 16.5208 23.3331 16.1794 23.3331H10.4615V18.051H6.92297V23.3331H1.2051ZM1.99993 21.3331H4.92303V16.0511H12.4615V21.3331H15.3846V2.66647H1.99993V21.3331ZM4.92303 13.128H7.2307V10.8203H4.92303V13.128ZM4.92303 7.89724H7.2307V5.58957H4.92303V7.89724ZM10.1538 13.128H12.4615V10.8203H10.1538V13.128ZM10.1538 7.89724H12.4615V5.58957H10.1538V7.89724ZM19.4871 11.9994C19.4871 11.7159 19.583 11.4785 19.7746 11.287C19.9663 11.0956 20.2038 10.9998 20.4871 10.9998H24.1949L23.0974 9.90234C22.9128 9.71774 22.8183 9.48698 22.814 9.21007C22.8098 8.93314 22.9098 8.69479 23.114 8.49504C23.3012 8.3119 23.5353 8.22034 23.8162 8.22034C24.0971 8.22034 24.3284 8.31265 24.5102 8.49727L27.1691 11.1562C27.4102 11.3973 27.5307 11.6784 27.5307 11.9998C27.5307 12.3212 27.4102 12.6023 27.1691 12.8434L24.5102 15.5023C24.3277 15.6841 24.0996 15.7791 23.8259 15.7874C23.5522 15.7956 23.3162 15.7006 23.1179 15.5023C22.9247 15.3177 22.8269 15.087 22.8243 14.8101C22.8217 14.5331 22.9128 14.2955 23.0974 14.0973L24.1949 12.9998H20.4871C20.2038 12.9998 19.9663 12.9039 19.7746 12.7122C19.583 12.5204 19.4871 12.2828 19.4871 11.9994Z"
                                    fill="white" />
                            </svg>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                                v-else-if="data.attributes.Type == 'Emergency'">
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
                                v-else-if="data.attributes.Type == 'Clean'">
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
                        <div class=" w-[100%] pt-[8px] p-[12px]">
                            <div class="flex justify-between items-center">
                                <div class="font-bold text-[18px] truncate w-[450px] ">ห้อง {{
                                    data.attributes.user_sign_contract.data.attributes.room.data.attributes.RoomNumber }} |
                                    {{ data.attributes.title }} <span class="text-[10px] font-normal text-[#8396A6]"> {{
                                        convertDateNoTime(data.attributes.createdAt) }}</span></div>
                                <div
                                    class="bg-[#FFF2BC] text-[#D48C00] pl-[12px] pr-[12px] pt-[7px] pb-[7px] rounded-[12px]">
                                    {{ data.attributes.serviceStatus }}</div>
                            </div>
                            <div class="flex justify-between mt-[4px]">
                                <div class="flex flex-col">
                                    <div>
                                        <div class="text-[12px] text-[#8396A6]">รายละเอียด</div>
                                    </div>
                                    <div class="truncate w-[550px]"> {{ data.attributes.description }}</div>
                                </div>
                                <div>
                                    <div class="flex flex-col justify-between items-center">
                                        <div class="text-[12px] text-[#8396A6]"> {{
                                            convertDateNoTime(data.attributes.createdAt)
                                        }}</div>
                                    </div>
                                    <div class="cursor-pointer" @click="open_note = true">
                                        <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="File / Note_Edit">
                                                <path id="Vector"
                                                    d="M10.0002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2839 19.7822 18.9076C20 18.4802 20 17.921 20 16.8031V14M16 5L10 11V14H13L19 8M16 5L19 2L22 5L19 8M16 5L19 8"
                                                    stroke="#003765" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 w-[100%] gap-2">
                                <div>
                                    <div class="text-[12px] text-[#8396A6] mt-[8px]">กำหนดพนักงานดูแล</div>
                                    <div>
                                        <div class="mt-[5px]">
                                            <!-- {{ data.attributes.building_employee }} -->
                                            <!-- <vs-select placeholder="Select" color="#003765">
                                                <vs-option v-for="data in employee" value="1">
                                                    {{ data.attributes.name }}
                                                </vs-option>
                                                
                                            </vs-select> -->
                                            <select placeholder="Select"
                                                class="w-[200px] h-[32px] border rounded-[12px] pl-[8px] pr-[8px]"
                                                :class="value == 1 ? 'bg-[#FFF2BC] text-[#EEA10B]' : ''"
                                                v-model="data.attributes.responID">
                                                <option disabled value="">
                                                    เลือก..
                                                </option>
                                                <option v-for="selectEmployee in employee" :value="selectEmployee.id">
                                                    {{ selectEmployee.attributes.name }}
                                                </option>

                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-[12px] text-[#8396A6] mt-[8px]">วันเวลา</div>
                                    <div class="w-[100%]">
                                        <div class="mt-[5px] w-[100%]  con-selects">
                                            <vs-input type="datetime-local" v-model="data.attributes.timely" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <vs-button @click="updateService(data.id, data.attributes.responID, data.attributes.timely)"
                                color="#003765"
                                class="w-[100%] h-[36px] rounded-[12px] mt-[30px]  text-[white] flex items-center justify-center">
                                กำหนดผู้ดูแล
                            </vs-button>
                            <vs-button v-if="data.attributes.responID != null" @click="closeService(data.id)"
                                color="#003765"
                                class="w-[100%] h-[36px] rounded-[12px] mt-[30px]  text-[white] flex items-center justify-center">
                                จบงาน
                            </vs-button>
                        </div>
                        <vs-dialog v-model="open_note">
                            <template #header>
                                <h4 class="not-margin">
                                    Note
                                </h4>
                            </template>
                            <div class="con-form">
                                <textarea class="w-[100%] h-[150px] border-[1px] "
                                    v-model="data.attributes.note"></textarea>
                            </div>

                            <template #footer>
                                <div class="footer-dialog">
                                    <vs-button block color="#003765" @click="updateNoteService(data.id,data.attributes.note)">
                                        บันทึก
                                    </vs-button>
                                </div>
                            </template>
                        </vs-dialog>
                    </div>
                </div>

            </div>
        </div>
        <b-modal centered v-model="create" size="xl" hide-backdrop hide-header-close hide-header hide-footer
            class="p-[-20px] text-custom">
            <div>
                <div class="flex justify-between pl-[20px] pr-[20px]">
                    <div class="text-custom flex justify-center items-center text-[18px] font-bold">เพิ่มการจอง</div>
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
                    <div class="font-bold text-custom">การจองห้อง</div>
                    <div class=" mt-[24px]">
                        <div class="w-[100%] flex">
                            <div class="w-[30%] text-custom flex items-start">ข้อมูลผู้จอง</div>
                            <dvi class=" w-[70%] ">
                                <div class="grid grid-cols-1  text-custom  ">
                                    <div>
                                        <vs-select placeholder="เลือกผู้ใช้จากระบบ">
                                            <vs-option label="อาคาร A" value="1">
                                                อาคาร A
                                            </vs-option>
                                            <vs-option label="อาคาร B" value="2">
                                                อาคาร B
                                            </vs-option>
                                        </vs-select>
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
                                    <div>เลือกห้อง</div>
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
                            <div class="w-[30%] text-custom flex items-start">รายละเอียดการจอง</div>
                            <div class="grid grid-cols-8  text-custom w-[70%] ">
                                <div class="col-span-4">
                                    <div>วันที่เข้าพัก</div>
                                    <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                </div>
                                <div class="col-span-4  ml-[8px]">
                                    <div>เลือกห้อง</div>
                                    <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                </div>
                            </div>
                        </div>
                        <div class="w-[100%] flex mt-[14px]">
                            <div class="w-[30%] text-custom flex items-start">รายละเอียดการชำระเงิน</div>
                            <div class="grid grid-cols-8  text-custom w-[70%] ">
                                <div class="col-span-4">
                                    <div>ค่ามัดจำ (บาท)</div>
                                    <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                </div>
                                <!-- <div class="col-span-4  ml-[8px]">
                                    <div>เลือกห้อง</div>
                                    <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                </div> -->
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
import { convertDateNoTime } from '@/components/hook/hook'

export default {
    data() {
        return {
            open_note: false,
            create: false,
            selectedEmployee: 0,
            service: [],
            employee: [],
            code: 0,
            text: '',
            convertDateNoTime
        }
    },
    created() {
        const loading = this.$vs.loading({})
        setTimeout(() => {
            loading.close()
        }, 1000)
    },
    mounted() {
        this.getService();
        this.getEmployeeOption();
    },
    methods: {
        filterData(text, code) {
            this.text = text
            console.log('filter', text);
            this.service = this.service.filter(item =>
                item.attributes.user_sign_contract.data.attributes.room.data.attributes.RoomNumber.toLowerCase().includes(text.toLowerCase()),
            );
            if (text == '') {
                this.getService(this.id)
            }
            if (code == 8) {
                this.code = 8
                this.getService(this.id)
            }
        },
        getService() {
            const loading = this.$vs.loading()
            // fetch('https://api.resguru.app/api' + '/announcements?filters[building][id][$eq]=' + this.$store.state.building +'&poopulate=*')
            fetch(`https://api.resguru.app/api/services?populate=deep,3&sort[0]=id:desc&filters[serviceStatus][$ne]=completed&filters[building][id][$eq]=${this.$store.state.building}`)
                .then(response => response.json())
                .then((resp) => {
                    resp.data.forEach(item => {
                        item.attributes.timely = this.convertDateFormat(item.attributes.appointmentDate);
                    });
                    console.log("Return from getService()", resp.data);
                    if (this.code == 8) {
                        this.service = resp.data.filter(item =>
                            item.attributes.user_sign_contract.data.attributes.room.data.attributes.RoomNumber.toLowerCase().includes(this.text.toLowerCase()),
                        );
                    }
                    else {

                        this.service = resp.data

                    }
                }).finally(() => {
                    loading.close()
                })
        },
        getEmployeeOption() {
            const loading = this.$vs.loading()
            // fetch('https://api.resguru.app/api' + '/announcements?filters[building][id][$eq]=' + this.$store.state.building +'&poopulate=*')
            fetch(`https://api.resguru.app/api/building-employees?populate=*&sort[0]=id:desc&filters[building][id][$eq]=${this.$store.state.building}`)
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getEmployee()", resp.data);
                    this.employee = resp.data
                }).finally(() => {
                    loading.close()
                })
        },
        updateService(serviceId, empId, date) {
            console.log();
            axios.put(`https://api.resguru.app/api/services/${serviceId}`, {
                data: {
                    responEmployee: empId,
                    serviceStatus: "In Progress",
                    appointmentDate: this.convertDateFormat2(date),
                    responID: empId
                }
            })
                .then((resp) => {
                    console.log(resp)
                })
                .catch(error => {
                    const errorMessage = error.message ? error.message : 'Error updating information';
                    this.$showNotification('danger', errorMessage);
                })
                .finally(() => {
                    this.$showNotification('#3A89CB', 'แก่ไข่ข้อมูลสำเร็จ')

                })

        },
        updateNoteService(serviceId, note) {
            console.log();
            axios.put(`https://api.resguru.app/api/services/${serviceId}`, {
                data: {
                    note: note
                }
            })
                .then((resp) => {
                    console.log(resp)
                })
                .catch(error => {
                    
                })
                .finally(() => {
                    this.open_note = false
                })

        },
        closeService(serviceId) {
            axios.put(`https://api.resguru.app/api/services/${serviceId}`, {
                data: {
                    serviceStatus: "Completed",
                }
            })
                .then((resp) => {
                    console.log(resp)
                })
                .catch(error => {
                    const errorMessage = error.message ? error.message : 'พบข้อผิดพลาดในการปิดงาน';
                    this.$showNotification('danger', errorMessage);
                })
                .finally(() => {
                    this.$showNotification('#3A89CB', 'ปิดงานสำเร็จ')
                    this.getService()
                })
        },
        convertDateFormat(inputDate) {
            const date = new Date(inputDate); // Parse the input date string
            const year = date.getFullYear(); // Get the year (e.g., 2023)
            const month = `0${date.getMonth() + 1}`.slice(-2); // Get the month (January is 0, so adding 1)
            const day = `0${date.getDate()}`.slice(-2); // Get the day
            const hours = `0${date.getHours()}`.slice(-2); // Get the hours
            const minutes = `0${date.getMinutes()}`.slice(-2); // Get the minutes
            // Concatenate the formatted date string in the desired format: YYYY-MM-DDTHH:MM
            const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;
            return formattedDate;
        },
        convertDateFormat2(inputDate) {
            // Parse the input date string
            const date = new Date(inputDate);

            // Check if the date is valid
            if (isNaN(date.getTime())) {
                return "Invalid date"; // Return an error message if the input date is invalid
            }

            // Format the date to the desired output format (YYYY-MM-DDTHH:MM:SS.SSSZ)
            const formattedDate = date.toISOString();

            return formattedDate;
        }

    }
}
</script>

