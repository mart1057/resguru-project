<template>
    <div class="mt-[14px]">
        <div class="font-bold">รายการทรัพย์สินทั้งหมด</div>
        <div class="flex mt-[14px]">
            <div class="w-[118px] h-[137px] rounded-[12px] flex items-center justify-center cursor-pointer"
                @click="tab = false" :class="tab == false ? 'bg-[#FFF2C0] text-[#D48C00] ' : 'bg-[#F3F7FA]'">
                <div class="flex flex-col justify-between items-center">
                    <div>ผู้เช่าย้ายออก</div>
                    <div>
                        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_430_4811" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                width="65" height="65">
                                <rect width="65" height="65" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_430_4811)">
                                <path
                                    d="M6.51036 55.5208C5.8168 55.5208 5.23541 55.2862 4.76619 54.8169C4.29706 54.3478 4.0625 53.7664 4.0625 53.0728V11.9272C4.0625 11.2336 4.29709 10.6522 4.76626 10.1831C5.23543 9.71384 5.8168 9.47923 6.51036 9.47923H36.9269C37.6205 9.47923 38.2018 9.71384 38.671 10.1831C39.1402 10.6522 39.3748 11.2336 39.3748 11.9272V53.0728C39.3748 53.7664 39.1402 54.3478 38.671 54.8169C38.2018 55.2862 37.6205 55.5208 36.9269 55.5208H25.3124V44.7916H18.1248V55.5208H6.51036ZM8.12487 51.4583H14.0624V40.7292H29.3749V51.4583H35.3124V13.5417H8.12487V51.4583ZM14.0624 34.7917H18.7499V30.1042H14.0624V34.7917ZM14.0624 24.1667H18.7499V19.4792H14.0624V24.1667ZM24.6874 34.7917H29.3749V30.1042H24.6874V34.7917ZM24.6874 24.1667H29.3749V19.4792H24.6874V24.1667ZM43.6457 32.4991C43.6457 31.9233 43.8404 31.441 44.2297 31.0521C44.619 30.6633 45.1014 30.4688 45.6769 30.4688H53.2083L50.979 28.2395C50.6041 27.8646 50.4122 27.3958 50.4035 26.8334C50.3948 26.2708 50.5979 25.7867 51.0128 25.3809C51.3931 25.009 51.8685 24.823 52.4391 24.823C53.0097 24.823 53.4796 25.0105 53.8488 25.3855L59.2498 30.7865C59.7394 31.2761 59.9842 31.8472 59.9842 32.5C59.9842 33.1528 59.7394 33.7239 59.2498 34.2135L53.8488 39.6145C53.4781 39.9838 53.0148 40.1768 52.4588 40.1936C51.9028 40.2103 51.4235 40.0173 51.0207 39.6145C50.6283 39.2396 50.4296 38.7708 50.4244 38.2084C50.4192 37.6458 50.6041 37.1632 50.979 36.7605L53.2083 34.5312H45.6769C45.1014 34.5312 44.619 34.3365 44.2297 33.947C43.8404 33.5575 43.6457 33.0749 43.6457 32.4991Z"
                                    :fill="tab == false ? '#D48C00' : '#003765'" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="w-[118px] h-[137px] rounded-[12px] flex items-center justify-center bg-[#F3F7FA] ml-[14px] cursor-pointer"
                @click="tab = true" :class="tab == true ? 'bg-[#FFE2E9] text-[#D44769]' : 'bg-[#F3F7FA]'">
                <div class="flex flex-col justify-between items-center">
                    <div>ติดต่อผู้เช่าไม่ได้</div>
                    <div>
                        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_430_4829" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                width="65" height="65">
                                <rect width="65" height="65" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_430_4829)">
                                <path
                                    d="M32.6093 35.2864L16.1457 51.776C15.7256 52.1961 15.2387 52.4062 14.6849 52.4062C14.131 52.4062 13.6441 52.1961 13.2239 51.776C12.8038 51.3559 12.5938 50.8689 12.5938 50.3151C12.5938 49.7613 12.8038 49.2743 13.2239 48.8542L38.448 23.6979H29.1144V27.0833C29.1144 27.6589 28.9197 28.1413 28.5303 28.5306C28.1408 28.9199 27.6581 29.1145 27.0824 29.1145C26.5066 29.1145 26.0243 28.9199 25.6354 28.5306C25.2465 28.1413 25.0521 27.6589 25.0521 27.0833V22.0963C25.0521 21.3898 25.2867 20.803 25.7558 20.336C26.225 19.869 26.8064 19.6355 27.4999 19.6355H40.6875C41.3418 19.6355 41.9654 19.7622 42.5584 20.0157C43.1514 20.2691 43.6701 20.6181 44.1146 21.0626L51.927 28.8073C52.934 29.8143 54.0702 30.6441 55.3359 31.2969C56.6015 31.9497 57.9687 32.3942 59.4374 32.6303C60.0291 32.7303 60.5425 32.9889 60.9775 33.4058C61.4126 33.8228 61.6301 34.3238 61.6301 34.9089C61.6301 35.4939 61.3879 35.9739 60.9036 36.3489C60.4192 36.7239 59.8888 36.8749 59.3124 36.802C57.3507 36.5659 55.5338 36.0329 53.862 35.2031C52.1901 34.3732 50.6493 33.2673 49.2395 31.8853L46.1666 28.7291L38.9842 35.8854L42.677 39.6042C43.2568 40.184 43.4947 40.8663 43.3905 41.6511C43.2863 42.4357 42.8853 43.0364 42.1874 43.4531L30.3333 50.276C29.8575 50.5503 29.3379 50.6194 28.7744 50.4832C28.2109 50.347 27.7925 50.0406 27.5192 49.5639C27.246 49.0873 27.1871 48.5674 27.3427 48.0043C27.4983 47.4412 27.818 47.0231 28.302 46.75L38.3073 40.9844L32.6093 35.2864ZM11.5104 34.5312C10.9349 34.5312 10.4525 34.3365 10.0632 33.947C9.67383 33.5575 9.47917 33.0749 9.47917 32.4991C9.47917 31.9233 9.67383 31.441 10.0632 31.0521C10.4525 30.6633 10.9349 30.4688 11.5104 30.4688H19.6354C20.2109 30.4688 20.6933 30.6635 21.0826 31.053C21.4719 31.4425 21.6666 31.9251 21.6666 32.5009C21.6666 33.0767 21.4719 33.559 21.0826 33.9479C20.6933 34.3367 20.2109 34.5312 19.6354 34.5312H11.5104ZM6.09375 26.4062C5.51823 26.4062 5.03581 26.2115 4.64648 25.822C4.25716 25.4325 4.0625 24.9499 4.0625 24.3741C4.0625 23.7983 4.25716 23.316 4.64648 22.9271C5.03581 22.5383 5.51823 22.3438 6.09375 22.3438H14.2188C14.7942 22.3438 15.2766 22.5386 15.6659 22.928C16.0553 23.3175 16.2499 23.8001 16.2499 24.3759C16.2499 24.9517 16.0553 25.434 15.6659 25.8229C15.2766 26.2117 14.7942 26.4062 14.2188 26.4062H6.09375ZM52.7447 20.9895C51.4287 20.9895 50.2986 20.5223 49.3542 19.588C48.4097 18.6536 47.9375 17.5303 47.9375 16.2182C47.9375 14.9061 48.4097 13.7848 49.3542 12.8542C50.2986 11.9236 51.4287 11.4584 52.7447 11.4584C54.0607 11.4584 55.1909 11.9256 56.1353 12.86C57.0797 13.7944 57.552 14.9176 57.552 16.2297C57.552 17.5418 57.0797 18.6632 56.1353 19.5937C55.1909 20.5242 54.0607 20.9895 52.7447 20.9895ZM11.5104 18.2812C10.9349 18.2812 10.4525 18.0865 10.0632 17.697C9.67383 17.3075 9.47917 16.8249 9.47917 16.2491C9.47917 15.6733 9.67383 15.191 10.0632 14.8021C10.4525 14.4133 10.9349 14.2188 11.5104 14.2188H19.6354C20.2109 14.2188 20.6933 14.4135 21.0826 14.803C21.4719 15.1925 21.6666 15.6751 21.6666 16.2509C21.6666 16.8267 21.4719 17.309 21.0826 17.6979C20.6933 18.0867 20.2109 18.2812 19.6354 18.2812H11.5104Z"
                                    :fill="tab == true ? '#D44769' : '#003765'" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-[100%] h-[1px]  mt-[34px] mb-[34px] bg-gray-200 border-0 dark:bg-gray-700"></div>
        <div class="">
            <div class="font-bold text-[16px]">ยอดค้างชำระ</div>
            <div class="grid grid-cols-4">
                <div class="flex flex-col justify-between w-[339px] h-[126px] rounded-[22px] border p-[16px] mt-[14px]">
                    <div>คงเหลือ</div>
                    <div class="text-[#D44769] font-bold text-[16px]">{{ list_debt.total }}</div>
                </div>
                <div class="flex flex-col justify-between w-[339px] h-[126px] rounded-[22px] border p-[16px] mt-[14px]">
                    <div>เงินมัดจำ</div>
                    <div class="text-[#D44769] font-bold text-[16px]">{{ list_debt.deposit }}</div>
                </div>
                <div class="flex flex-col justify-between w-[339px] h-[126px] rounded-[22px] border p-[16px] mt-[14px]">
                    <div>เงินประกัน</div>
                    <div class="text-[#D44769] font-bold text-[16px]">{{ list_debt.deposit2 }}</div>
                </div>
            </div>

        </div>
        <div class="w-[100%] h-[1px]  mt-[34px] mb-[34px] bg-gray-200 border-0 dark:bg-gray-700"></div>
        <div class="mt-[24px]">
            <div class="text-[18px] text-[#141629] text-custom font-bold">รายการตรวจจับ</div>
        </div>
        <div class="mt-[14px]">
            <!-- /////////////////////////////////// items ///////////////////////////////// -->
            <div class="flex" v-for="item in items_other">
                <div class="">
                    <svg width="70" height="82" viewBox="0 0 70 82" fill="none" xmlns="http://www.w3.org/2000/svg"
                        v-if="item.name == 'ค่าทาสีผนัง'">
                        <g filter="url(#filter0_d_2182_22275)">
                            <rect x="6" y="6" width="54" height="66" rx="12" fill="#165D98" />
                            <mask id="mask0_2182_22275" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="11" y="17"
                                width="44" height="44">
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
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2182_22275" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2182_22275"
                                    result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    <svg width="70" height="82" viewBox="0 0 70 82" fill="none" xmlns="http://www.w3.org/2000/svg"
                        v-else-if="item.name == 'โทรทัศน์' || item.name == 'ทีวี'">
                        <g filter="url(#filter0_d_3063_30664)">
                            <rect x="6" y="6" width="54" height="66" rx="12" fill="#165D98" />
                            <mask id="mask0_3063_30664" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="11" y="17"
                                width="44" height="44">
                                <rect x="11" y="17" width="44" height="44" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_3063_30664)">
                                <path
                                    d="M21.4048 50.9166L20.4493 53.6242C20.4019 53.7572 20.319 53.868 20.2005 53.9566C20.082 54.0453 19.9432 54.0896 19.7842 54.0896H19.5797C19.3979 54.0896 19.2389 54.0209 19.1026 53.8834C18.9663 53.7459 18.8981 53.5854 18.8981 53.4021V50.9166C17.9867 50.9166 17.2065 50.5921 16.5575 49.943C15.9085 49.294 15.584 48.5138 15.584 47.6025V28.5641C15.584 27.6527 15.9085 26.8725 16.5575 26.2235C17.2065 25.5745 17.9867 25.25 18.8981 25.25H47.1031C48.0145 25.25 48.7947 25.5745 49.4437 26.2235C50.0927 26.8725 50.4172 27.6527 50.4172 28.5641V47.6025C50.4172 48.5145 50.0927 49.2953 49.4437 49.9448C48.7947 50.5943 48.0145 50.919 47.1031 50.919V53.4479C47.1031 53.628 47.0412 53.78 46.9174 53.9039C46.7936 54.0277 46.6416 54.0896 46.4615 54.0896H46.2147C46.0737 54.0896 45.9444 54.0504 45.8269 53.9719C45.7094 53.8934 45.6271 53.7869 45.5801 53.6524L44.6599 50.9166H21.4048ZM18.8981 48.1666H47.1031C47.2677 48.1666 47.4028 48.1137 47.5086 48.0079C47.6144 47.9022 47.6673 47.767 47.6673 47.6025V28.5641C47.6673 28.3996 47.6144 28.2644 47.5086 28.1586C47.4028 28.0528 47.2677 28 47.1031 28H18.8981C18.7336 28 18.5984 28.0528 18.4926 28.1586C18.3868 28.2644 18.3339 28.3996 18.3339 28.5641V47.6025C18.3339 47.767 18.3868 47.9022 18.4926 48.0079C18.5984 48.1137 18.7336 48.1666 18.8981 48.1666Z"
                                    fill="white" />
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_d_3063_30664" x="0" y="0" width="70" height="82"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="2" dy="2" />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3063_30664" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3063_30664"
                                    result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    <svg width="70" height="82" viewBox="0 0 70 82" fill="none" xmlns="http://www.w3.org/2000/svg"
                        v-else-if="item.name == 'เตียง'">
                        <g filter="url(#filter0_d_3063_30696)">
                            <rect x="6" y="6" width="54" height="66" rx="12" fill="#165D98" />
                            <mask id="mask0_3063_30696" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="11" y="17"
                                width="44" height="44">
                                <rect x="11" y="17" width="44" height="44" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_3063_30696)">
                                <path
                                    d="M16.9583 50.9167C16.5686 50.9167 16.2421 50.785 15.9789 50.5214C15.7156 50.2579 15.584 49.9313 15.584 49.5417V40.8334C15.584 40.1495 15.7462 39.4861 16.0706 38.8432C16.3949 38.2004 16.8438 37.6721 17.4173 37.2585V32.5835C17.4173 31.3025 17.861 30.2184 18.7482 29.3312C19.6355 28.4439 20.7197 28.0002 22.0006 28.0002H29.7923C30.4598 28.0002 31.058 28.1301 31.5868 28.3898C32.1157 28.6495 32.5869 29.0086 33.0006 29.4669C33.4143 29.0086 33.8855 28.6495 34.4144 28.3898C34.9432 28.1301 35.5414 28.0002 36.2089 28.0002H44.0006C45.2816 28.0002 46.3657 28.4439 47.253 29.3312C48.1403 30.2184 48.5839 31.3025 48.5839 32.5835V37.2585C49.1574 37.6721 49.6063 38.2004 49.9307 38.8432C50.255 39.4861 50.4172 40.1495 50.4172 40.8334V49.5417C50.4172 49.9313 50.2854 50.2579 50.0217 50.5214C49.7581 50.785 49.4314 50.9167 49.0416 50.9167C48.6519 50.9167 48.3254 50.785 48.0621 50.5214C47.7989 50.2579 47.6673 49.9313 47.6673 49.5417V47.2501H18.3339V49.5417C18.3339 49.9313 18.2021 50.2579 17.9384 50.5214C17.6748 50.785 17.3481 50.9167 16.9583 50.9167ZM34.3756 36.2502H45.8339V32.5835C45.8339 32.064 45.6583 31.6286 45.3069 31.2772C44.9555 30.9258 44.5201 30.7502 44.0006 30.7502H36.2089C35.6895 30.7502 35.254 30.9258 34.9026 31.2772C34.5513 31.6286 34.3756 32.064 34.3756 32.5835V36.2502ZM20.1673 36.2502H31.6257V32.5835C31.6257 32.064 31.45 31.6286 31.0986 31.2772C30.7472 30.9258 30.3118 30.7502 29.7923 30.7502H22.0006C21.4812 30.7502 21.0457 30.9258 20.6944 31.2772C20.343 31.6286 20.1673 32.064 20.1673 32.5835V36.2502ZM18.3339 44.5001H47.6673V40.8334C47.6673 40.314 47.4916 39.8786 47.1402 39.5272C46.7888 39.1758 46.3534 39.0001 45.8339 39.0001H20.1673C19.6478 39.0001 19.2124 39.1758 18.861 39.5272C18.5096 39.8786 18.3339 40.314 18.3339 40.8334V44.5001Z"
                                    fill="white" />
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_d_3063_30696" x="0" y="0" width="70" height="82"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="2" dy="2" />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3063_30696" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3063_30696"
                                    result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    <svg width="70" height="82" viewBox="0 0 70 82" fill="none" xmlns="http://www.w3.org/2000/svg"
                        v-else-if="item.name == 'ค่าทำความสะอาด'">
                        <g filter="url(#filter0_d_3063_30791)">
                            <rect x="6" y="6" width="54" height="66" rx="12" fill="#165D98" />
                            <mask id="mask0_3063_30791" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="13" y="19"
                                width="40" height="40">
                                <rect x="13" y="19" width="40" height="40" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_3063_30791)">
                                <path
                                    d="M31.0761 37.7499H34.9223V25.8268C34.9223 25.2905 34.7359 24.8359 34.363 24.463C33.9902 24.0902 33.5356 23.9037 32.9992 23.9037C32.4629 23.9037 32.0083 24.0902 31.6354 24.463C31.2626 24.8359 31.0761 25.2905 31.0761 25.8268V37.7499ZM21.2364 44.0961H44.7621V40.7627C44.7621 40.6131 44.714 40.4903 44.6178 40.3941C44.5216 40.2979 44.3988 40.2499 44.2492 40.2499H21.7493C21.5997 40.2499 21.4768 40.2979 21.3806 40.3941C21.2845 40.4903 21.2364 40.6131 21.2364 40.7627V44.0961ZM19.3646 54.0961H23.5762V50.346C23.5762 49.9919 23.696 49.695 23.9357 49.4554C24.1754 49.2159 24.4724 49.0961 24.8267 49.0961C25.181 49.0961 25.4778 49.2159 25.7172 49.4554C25.9565 49.695 26.0761 49.9919 26.0761 50.346V54.0961H31.7493V50.346C31.7493 49.9919 31.8691 49.695 32.1088 49.4554C32.3485 49.2159 32.6455 49.0961 32.9998 49.0961C33.3541 49.0961 33.6509 49.2159 33.8902 49.4554C34.1295 49.695 34.2492 49.9919 34.2492 50.346V54.0961H39.9223V50.346C39.9223 49.9919 40.0422 49.695 40.2818 49.4554C40.5215 49.2159 40.8185 49.0961 41.1728 49.0961C41.5271 49.0961 41.824 49.2159 42.0633 49.4554C42.3026 49.695 42.4223 49.9919 42.4223 50.346V54.0961H46.6338C46.8047 54.0961 46.9437 54.0293 47.0505 53.8957C47.1573 53.7622 47.1841 53.6153 47.1306 53.455L45.2716 46.596H20.7268L18.8678 53.455C18.8144 53.6153 18.8411 53.7622 18.9479 53.8957C19.0548 54.0293 19.1937 54.0961 19.3646 54.0961ZM46.762 56.596H19.2364C18.292 56.596 17.5238 56.2189 16.932 55.4646C16.3401 54.7103 16.1723 53.8695 16.4288 52.9422L18.7365 44.3685V40.6666C18.7365 39.8567 19.0201 39.1682 19.5874 38.6009C20.1547 38.0336 20.8433 37.7499 21.6531 37.7499H28.5762V25.8268C28.5762 24.5982 29.0062 23.5539 29.8662 22.6939C30.7263 21.8338 31.7706 21.4038 32.9992 21.4038C34.2278 21.4038 35.2722 21.8338 36.1322 22.6939C36.9922 23.5539 37.4223 24.5982 37.4223 25.8268V37.7499H44.3453C45.1552 37.7499 45.8437 38.0336 46.4111 38.6009C46.9783 39.1682 47.262 39.8567 47.262 40.6666V44.3685L49.5697 52.9742C49.8774 53.8909 49.731 54.7237 49.1306 55.4726C48.5302 56.2215 47.7406 56.596 46.762 56.596Z"
                                    fill="white" />
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_d_3063_30791" x="0" y="0" width="70" height="82"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="2" dy="2" />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3063_30791" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3063_30791"
                                    result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    <svg width="70" height="82" viewBox="0 0 70 82" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
                        <g filter="url(#filter0_d_3063_30728)">
                            <rect x="6" y="6" width="54" height="66" rx="12" fill="#165D98" />
                            <ellipse cx="20.1667" cy="38.9999" rx="3.66667" ry="3.66667" fill="white" />
                            <circle cx="33.0006" cy="38.9999" r="3.66667" fill="white" />
                            <ellipse cx="45.8327" cy="38.9999" rx="3.66667" ry="3.66667" fill="white" />
                        </g>
                        <defs>
                            <filter id="filter0_d_3063_30728" x="0" y="0" width="70" height="82"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="2" dy="2" />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3063_30728" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3063_30728"
                                    result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div class="flex justify-start items-center text-[16px] font-bold text-custom text-[#003765] w-[150px]">
                    {{ item.name }}</div>
                <div class="flex flex-col justify-center items-center ml-[50px]">
                    <div class="flex flex-col justify-between h-[50%]">
                        <div class="font-bold text-custom text-[12px] flex justify-start mt-[-12px]">ค่าปรับกรณีเสียหาย
                            (บาท)
                        </div>
                        <div class="flex mt-[4px]">
                            <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start" v-model="item.price"
                                type="input" />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center ml-[50px]">
                    <div class="flex flex-col justify-between h-[50%]">
                        <div class="font-bold text-custom text-[12px] flex justify-start mt-[-12px]">รูปภาพก่อนเข้าหอพัก
                        </div>
                        <div class="flex mt-[12px]">
                            <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start" id="upload" hidden
                                type="file" />
                            <label for="upload">
                                <div
                                    class="h-[28px] w-[120px] flex justify-center text-custom items-center bg-[#165D98] text-[14px] text-[white] rounded-[12px]">
                                    อัพโหลดรูปภาพ</div>
                            </label>

                            <!-- <div class="text-[#5C6B79] text-custom flex justify-center items-center ml-[8px] text-[12px]">
                            ยังไม่ได้เลือกไฟล์</div> -->
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center ml-[50px]">
                    <div class="flex flex-col justify-between h-[50%]">
                        <div class="font-bold text-custom text-[12px] flex justify-start mt-[-12px]">รูปภาพก่อนย้ายออก
                        </div>
                        <div class="flex mt-[12px]">
                            <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start" id="upload" hidden
                                type="file" />
                            <label for="upload">
                                <div
                                    class="h-[28px] w-[120px] flex justify-center text-custom items-center bg-[#165D98] text-[14px] text-[white] rounded-[12px]">
                                    อัพโหลดรูปภาพ</div>
                            </label>

                            <!-- <div class="text-[#5C6B79] text-custom flex justify-center items-center ml-[8px] text-[12px]">
                            ยังไม่ได้เลือกไฟล์</div> -->
                        </div>
                    </div>

                </div>
                <div class="flex flex-col justify-center items-start ml-[50px]">
                    <div class="flex flex-col justify-between h-[50%]">
                        <div class="font-bold text-custom text-[12px] flex justify-start mt-[-12px]">หมายเหตุ
                        </div>
                        <div class="mt-[12px]">
                            <select class="h-[28px] w-[280px] bg-[#F3F8FD] rounded-[12px]  flex justify-start select-opt"
                                type="input" v-model="item.remark"
                                @change="item.remark == 'ไม่เสียหาย' ? item.price = 0 : item.price = item.price">
                                <option value="รอซ่อม">รอซ่อม</option>
                                <option value="เสียหาย">เสียหาย</option>
                                <option value="ไม่เสียหาย">ไม่เสียหาย</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-[12px]">
                <select class="h-[40px] w-[280px] bg-[#F3F8FD] rounded-[12px]  flex justify-start select-opt" type="input"
                    v-model="value_item" @change="addItem(value_item)">
                    <option value="" disabled>เพิ่มรายการ</option>
                    <option v-for="item in list_items" :value="item.name">{{ item.name }}</option>
                </select>
            </div>
            <div class="w-[100%] h-[1px]  mt-[34px] mb-[34px] bg-gray-200 border-0 dark:bg-gray-700"></div>
            <div class="flex w-[100%]">
                <div class="w-[40%]">
                    <div class="font-bold text-[16px]">รายละเอียด</div>
                    <!-- <div class="mt-[14px]">รายละเอียด</div>
                    <div class="mt-[8px]">
                        <vs-select placeholder="เลือกผู้ใช้จากระบบ">
                            <vs-option label="อาคาร A" value="1">
                                อาคาร A
                            </vs-option>
                            <vs-option label="อาคาร B" value="2">
                                อาคาร B
                            </vs-option>
                        </vs-select>
                    </div> -->
                    <div class="mt-[14px] text-[12px] text-[#141629]">
                        <div>{{ user_detail.sex ? 'นาง' : 'นาย' }} {{ user_detail.firstName }} {{ user_detail.lastName }}
                        </div>
                        <div>{{ user_detail.contactAddress }}</div>
                        <div>เลขประจำตัวผู้เสียภาษี {{ user_detail.idCard ? user_detail.idCard : '-' }}</div>
                        <!-- <div>วันที่ 07/06/2023</div> -->
                    </div>
                </div>
                <div class="w-[50%] flex flex-col justify-end mt-[150px]">
                    รายการชำระเงิน
                    <div class="w-[50%] flex justify-between mt-[8px]">
                        <div>
                            <div class="text-[12px] text-[#8396A6]">รายการ</div>
                            <div class="mt-[8px]">
                                <div
                                    class="h-[36px] w-[215px] bg-[#F3F8FD] rounded-[12px]  flex justify-start items-center pl-[8px]">
                                    ค่าหอพัก
                                </div>
                            </div>
                            <div class="mt-[8px]">
                                <div
                                    class="h-[36px] w-[215px] bg-[#F3F8FD] rounded-[12px]  flex justify-start items-center pl-[8px]">
                                    ค่าน้ำ
                                </div>
                            </div>
                            <div class="mt-[8px]">
                                <div
                                    class="h-[36px] w-[215px] bg-[#F3F8FD] rounded-[12px]  flex justify-start items-center pl-[8px]">
                                    ค่าไฟ
                                </div>
                            </div>

                            <div class="mt-[8px]">
                                <div
                                    class="h-[36px] w-[215px] bg-[#F3F8FD] rounded-[12px]  flex justify-start items-center pl-[8px]">
                                    ค่าส่วนกลาง
                                </div>
                            </div>
                            <div class="mt-[8px]">
                                <div
                                    class="h-[36px] w-[215px] bg-[#F3F8FD] rounded-[12px]  flex justify-start items-center pl-[8px]">
                                    ค่าอื่น ๆ
                                </div>
                            </div>
                            <div class="mt-[32px]">
                                <div class="font-bold text-custom text-[14px] flex justify-start items-start ml-[16px]">
                                    รวมทั้งหมด
                                </div>
                            </div>

                        </div>
                        <div>
                            <div class="text-[12px] text-[#8396A6]">จำนวนเงินบาท</div>
                            <div class="flex">
                                <input
                                    class="h-[36px] w-[120px] bg-[#F3F8FD] rounded-[12px]  flex justify-start items-center pl-[8px]"
                                    type="input" v-model="bill_detail.room" />
                            </div>
                            <div class="flex mt-[-8px]">
                                <input class="h-[36px] w-[120px] bg-[#F3F8FD] rounded-[12px]  flex justify-start"
                                    type="input" v-model="bill_detail.water" />
                            </div>
                            <div class="flex mt-[-8px]">
                                <input class="h-[36px] w-[120px] bg-[#F3F8FD] rounded-[12px]  flex justify-start"
                                    type="input" v-model="bill_detail.ele" />
                            </div>
                            <div class="flex mt-[-8px]">
                                <input class="h-[36px] w-[120px] bg-[#F3F8FD] rounded-[12px]  flex justify-start"
                                    type="input" v-model="bill_detail.communalPrice" />
                            </div>
                            <div class="flex mt-[-8px]">
                                <input class="h-[36px] w-[120px] bg-[#F3F8FD] rounded-[12px]  flex justify-start"
                                    type="input" v-model="bill_detail.other" />
                            </div>
                            <div>
                                <div
                                    class="font-bold text-custom text-[14px] flex justify-start items-start pl-[16px] mt-[24px]">
                                    {{ parseInt(bill_detail.room + bill_detail.other + bill_detail.water +
                                        bill_detail.ele + bill_detail.communalPrice)
                                    }}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- <div class="w-[10%]">
                    <div @click="payment = true"
                        class="bg-[#CFFBDA] text-[#0B9A3C] rounded-[12px] pt-[7px] pb-[7px] pl-[12px] pr-[12px] text-center cursor-pointer">
                        บันทึกหนี้สูญแล้ว</div>
                </div> -->
            </div>
            <div class=" flex w-[100%] justify-between mt-[100px]">
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
                                    <div
                                        class="h-[36px] w-[215px] bg-[#F3F8FD] rounded-[12px]  flex justify-start items-center pl-[8px]">
                                        เงินประกัน
                                    </div>
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
                                            class="h-[36px] w-[120px] bg-[#F3F8FD] rounded-[12px]  flex justify-start items-center pl-[8px]"
                                            type="input" v-model="list_debt.deposit2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="flex mt-[24px]">
                            <div>
                                <div class="font-bold text-custom text-[12px] flex justify-start items-start">
                                    รวมทั้งหมด
                                </div>
                            </div>
                            <div class="ml-[168px]">
                                <div>
                                    <div class="font-bold text-custom text-[12px] flex justify-start items-start">
                                        {{ list_debt.deposit2 }}
                                    </div>
                                </div>
                            </div>
                        </div> -->
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
                            <div class="text-custom ">{{ bill_detail.room + bill_detail.water + bill_detail.ele + bill_detail.other+bill_detail.communalPrice }} <span class="ml-[4px] text-custom ">บาท</span>
                            </div>
                        </div>
                        <div class="flex justify-between w-[100%] mt-[4px]" v-for="item in items_other">
                            <div class="text-custom ">ค่าปรับทรัพย์สินเสียหาย ({{ item.name }})</div>
                            <div class="text-custom ">{{ item.price }} <span class="ml-[4px] text-custom ">บาท</span></div>
                        </div>
                        <div class="flex justify-between w-[100%] mt-[4px]">
                            <div class="text-custom ">คืนค่ามัดจำ</div>
                            <div class="text-custom ">-{{ list_debt.deposit }} <span
                                    class="ml-[4px] text-custom ">บาท</span></div>
                        </div>
                        <div class="flex justify-between w-[100%] mt-[4px]">
                            <div class="text-custom ">คืนเงินประกัน</div>
                            <div class="text-custom ">-{{ list_debt.deposit2 }} <span
                                    class="ml-[4px] text-custom ">บาท</span></div>
                        </div>
                        <div class="flex justify-between w-[100%] mt-[4px]">
                            <div class="text-custom text-[16px] font-bold ">รวมทั้งสิ้น</div>
                            <div class="text-custom text-[16px] font-bold">{{
                                totalBillItems() + (-list_debt.deposit2) + (-list_debt.deposit) + list_debt.total }} <span
                                    class="ml-[4px] text-custom ">บาท</span></div>
                        </div>
                        <div class="flex justify-between w-[100%] mt-[4px]" v-if="tab == true">
                            <div class="text-custom text-[#D44769] font-bold text-[16px]">หนี้สูญ {{
                                (totalBillItems() + (-list_debt.deposit2) + (-list_debt.deposit) + list_debt.total) > 0 ? 0
                                : (totalBillItems() + (-list_debt.deposit2) + (-list_debt.deposit) + list_debt.total) }}
                                บาท</div>
                        </div>
                    </div>
                    <div class="text-custom text-[12px] font-bold text-[#003765] mt-[24px]">วันที่ย้ายออก</div>
                    <div>
                        <input
                            class="h-[28px] w-[180px] bg-[#F3F8FD] rounded-[12px] mt-[4px]  flex justify-start pl-[8px] pr-[8px]"
                            type="date" v-model="date_moveout" />
                    </div>
                    <div class="flex mt-[14px]">
                        <button
                            class="bg-[#165D98] mb-[36px] rounded-[12px] flex justify-center items-center mt-[8px] pl-[14px] pr-[14px] pt-[4px] pb-[4px]">
                            <div class="flex">
                                <div class="flex justify-center items-center ">
                                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_3285_9902" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0"
                                            y="0" width="22" height="23">
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
                        <button @click="move_confirm = true"
                            class="bg-[#D44769] ml-[8px] mb-[36px] rounded-[12px] flex justify-center items-center mt-[8px] pl-[14px] pr-[14px] pt-[4px] pb-[4px]">
                            <div class="flex">
                                <div class="flex justify-center items-center ">
                                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_3339_790" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0"
                                            y="0" width="22" height="23">
                                            <rect y="0.5" width="22" height="22" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_3339_790)">
                                            <path
                                                d="M2.20351 19.2915C1.96876 19.2915 1.77199 19.2121 1.61317 19.0533C1.45439 18.8945 1.375 18.6978 1.375 18.463V4.53678C1.375 4.30204 1.4544 4.10527 1.6132 3.94647C1.77199 3.78766 1.96876 3.70825 2.20351 3.70825H12.4983C12.7331 3.70825 12.9299 3.78766 13.0886 3.94647C13.2474 4.10527 13.3268 4.30204 13.3268 4.53678V18.463C13.3268 18.6978 13.2474 18.8945 13.0886 19.0533C12.9299 19.2121 12.7331 19.2915 12.4983 19.2915H8.56728V15.6601H6.13454V19.2915H2.20351ZM2.74995 17.9166H4.75959V14.2852H9.94226V17.9166H11.9519V5.08323H2.74995V17.9166ZM4.75959 12.2755H6.34611V10.689H4.75959V12.2755ZM4.75959 8.67938H6.34611V7.09286H4.75959V8.67938ZM8.35574 12.2755H9.94226V10.689H8.35574V12.2755ZM8.35574 8.67938H9.94226V7.09286H8.35574V8.67938ZM14.7724 11.4996C14.7724 11.3047 14.8383 11.1415 14.97 11.0098C15.1018 10.8782 15.2651 10.8124 15.4599 10.8124H18.009L17.2544 10.0579C17.1275 9.93098 17.0626 9.77233 17.0596 9.58195C17.0567 9.39156 17.1255 9.2277 17.2659 9.09037C17.3946 8.96447 17.5555 8.90151 17.7486 8.90151C17.9417 8.90151 18.1008 8.96498 18.2257 9.09191L20.0538 10.9199C20.2195 11.0856 20.3023 11.279 20.3023 11.4999C20.3023 11.7208 20.2195 11.9141 20.0538 12.0798L18.2257 13.9079C18.1003 14.0329 17.9435 14.0982 17.7553 14.1039C17.5671 14.1095 17.4049 14.0442 17.2686 13.9079C17.1357 13.781 17.0685 13.6223 17.0667 13.432C17.065 13.2416 17.1275 13.0782 17.2544 12.9419L18.009 12.1874H15.4599C15.2651 12.1874 15.1018 12.1215 14.97 11.9896C14.8383 11.8578 14.7724 11.6945 14.7724 11.4996Z"
                                                fill="white" />
                                        </g>
                                    </svg>
                                </div>
                                <div class="text-[white] ml-[4px]  ">เคลียร์บิลและย้ายออก</div>
                            </div>
                        </button>
                        <button @click="darftBill()"
                            class="bg-[#003765] ml-[8px] mb-[36px] rounded-[12px] flex justify-center items-center mt-[8px] pl-[14px] pr-[14px] pt-[4px] pb-[4px]">
                            <div class="flex">
                                <div class="flex justify-center items-center ">
                                </div>
                                <div class="text-[white] ml-[4px]  ">บันทึกแบบร่าง</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <vs-dialog width="550px" not-center v-model="move_confirm" not-close>
            <template #header>
                <div class="pl-[16px]  pr-[16px] pt-[16px]">
                    <div class="font-bold">ยืนยันการย้ายออก</div>
                </div>
            </template>
            <div class="con-content pl-[16px]  pr-[16px]">
                <div class="text-[#D44769]">
                    คุณได้ตรวจสอบความถูกต้องของผู้เช่าห้อง {{ $route.query.number_room }} ก่อนจะย้ายออกแล้วหรือไม่ ?
                </div>
                <div class="center mt-[4px]">
                    <vs-checkbox v-model="check_final" color="#003765">
                        ตรวจสอบแล้ว
                    </vs-checkbox>
                </div>
            </div>
            <template #footer>
                <div class="con-footer flex justify-end">
                    <vs-button @click="move_confirm = false" transparent>
                        <div class="text-[#5C6B79] text-[14px]">ยกเลิก</div>
                    </vs-button>
                    <vs-button @click="submitBill()" color="#003765" :disabled="check_final == false">
                        <div class="text-[white] text-[14px]">ยืนยันการย้ายออก</div>
                    </vs-button>
                </div>
            </template>
        </vs-dialog>

        <vs-dialog width="300px" not-center v-model="payment" not-close>
            <template #header>
                <div class="pl-[16px]  pr-[16px] pt-[16px]">
                    <div class="font-bold">การชำระเงิน</div>
                </div>
            </template>
            <div class="con-content pl-[16px]  pr-[16px]">
                <div class="text-[#141629]">
                    ห้อง {{ $route.query.number_room }} ได้ทำการชำระเงินแล้ว ?
                </div>
                <div class="center mt-[12px] flex justify-center ">
                    <vs-select placeholder="เลือก">
                        <vs-option label="อาคาร A" value="1">
                            อาคาร A
                        </vs-option>
                        <vs-option label="อาคาร B" value="2">
                            อาคาร B
                        </vs-option>
                    </vs-select>
                </div>
            </div>
            <template #footer>
                <div class="con-footer flex justify-around  mt-[4px]">
                    <vs-button @click="payment = false" transparent>
                        <div class="text-[#5C6B79] text-[14px]">ยกเลิก</div>
                    </vs-button>
                    <vs-button @click="payment = !payment" color="#39B974">
                        <div class="text-[white] text-[14px]">ยืนยัน</div>
                    </vs-button>
                </div>
            </template>
        </vs-dialog>

        <vs-dialog width="300px" not-center v-model="move_done" not-close>
            <template #header>
                <div class="pl-[16px]  pr-[16px] pt-[16px]">
                    <div class="flex">
                        <div class="font-bold text-[#39B974]">ย้ายออกเสร็จสิ้น</div>
                        <div class="ml-[8px]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_1413_28277" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                    width="20" height="20">
                                    <rect width="20" height="20" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_1413_28277)">
                                    <path
                                        d="M10.0001 17.9166C8.90513 17.9166 7.87593 17.7089 6.91249 17.2933C5.94903 16.8777 5.11096 16.3138 4.39828 15.6014C3.68559 14.8891 3.12137 14.0514 2.70564 13.0883C2.2899 12.1253 2.08203 11.0963 2.08203 10.0014C2.08203 8.90644 2.28984 7.87725 2.70547 6.9138C3.12109 5.95034 3.68516 5.11227 4.39766 4.39959C5.11016 3.6869 5.948 3.12268 6.9112 2.70695C7.87438 2.29121 8.90354 2.08334 9.99868 2.08334C10.6921 2.08334 11.3641 2.17175 12.0147 2.34857C12.6654 2.52539 13.2877 2.781 13.8817 3.11541C14.0419 3.20516 14.1467 3.33443 14.1958 3.50322C14.2449 3.67202 14.2161 3.82961 14.1093 3.97597C14.0024 4.12233 13.8611 4.21394 13.6854 4.2508C13.5097 4.28766 13.3401 4.26122 13.1766 4.17147C12.6894 3.89904 12.1769 3.69124 11.6389 3.54807C11.101 3.40491 10.5542 3.33332 9.99868 3.33332C8.15145 3.33332 6.57854 3.98263 5.27993 5.28124C3.98132 6.57985 3.33201 8.15277 3.33201 9.99999C3.33201 11.8472 3.98132 13.4201 5.27993 14.7187C6.57854 16.0174 8.15145 16.6667 9.99868 16.6667C11.8459 16.6667 13.4188 16.0174 14.7174 14.7187C16.016 13.4201 16.6653 11.8472 16.6653 9.99999C16.6653 9.83871 16.6592 9.68247 16.6469 9.53126C16.6346 9.38007 16.6135 9.22487 16.5836 9.06568C16.5558 8.88822 16.5863 8.71859 16.6749 8.55678C16.7636 8.39499 16.8971 8.29005 17.0754 8.24197C17.2433 8.1939 17.399 8.21473 17.5427 8.30447C17.6864 8.39422 17.7722 8.52349 17.7999 8.69228C17.8384 8.90275 17.8672 9.11565 17.8865 9.33097C17.9057 9.54629 17.9153 9.76929 17.9153 9.99999C17.9153 11.0951 17.7075 12.1243 17.292 13.0875C16.8764 14.0507 16.3125 14.8885 15.6001 15.601C14.8877 16.3135 14.05 16.8776 13.087 17.2932C12.124 17.7088 11.095 17.9166 10.0001 17.9166ZM8.81599 11.7885L16.598 3.99359C16.7134 3.87822 16.8563 3.81706 17.0267 3.81011C17.1971 3.80317 17.3475 3.86491 17.478 3.99534C17.5975 4.1149 17.6573 4.26068 17.6573 4.4327C17.6573 4.6047 17.5969 4.75106 17.4762 4.87178L9.34322 13.0176C9.19258 13.1682 9.01684 13.2436 8.81599 13.2436C8.61513 13.2436 8.43938 13.1682 8.28874 13.0176L6.00189 10.7307C5.88651 10.6154 5.82748 10.4703 5.8248 10.2957C5.82214 10.121 5.88116 9.9733 6.00189 9.85257C6.12261 9.73184 6.26898 9.67147 6.44099 9.67147C6.61299 9.67147 6.75935 9.73184 6.88007 9.85257L8.81599 11.7885Z"
                                        fill="#39B974" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </template>
            <div class="con-content pl-[16px]  pr-[16px]">
                <div class="text-[#141629]">
                    กรุณากำหนดสถานะของห้อง 101
                </div>
                <div class="center mt-[12px] flex justify-center ">
                    <vs-select placeholder="เลือก">
                        <vs-option label="อาคาร A" value="1">
                            อาคาร A
                        </vs-option>
                        <vs-option label="อาคาร B" value="2">
                            อาคาร B
                        </vs-option>
                    </vs-select>
                </div>
            </div>
            <template #footer>
                <div class="con-footer flex justify-around  mt-[4px]">
                    <vs-button @click="move_done = false" transparent>
                        <div class="text-[#5C6B79] text-[14px]">ยกเลิก</div>
                    </vs-button>
                    <vs-button @click="move_done = !move_done" color="#39B974">
                        <div class="text-[white] text-[14px]">ยืนยัน</div>
                    </vs-button>
                </div>
            </template>
        </vs-dialog>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            add_item: false,
            value_item: '',
            check_final: false,
            create: false,
            tab: false,
            move_confirm: false,
            payment: false,
            move_done: false,
            date_moveout: new Date(),
            list_debt: {
                total: 0,
                deposit: 0,
                deposit2: 0
            },
            list_items: [
                { name: 'ค่าทำความสะอาด' },
                { name: 'ค่าทาสีผนัง' },
                { name: 'ลูกบิดห้องน้ำ' },
                { name: 'ประตูห้องน้ำ' },
                { name: 'ประตูหน้าห้อง' },
                { name: 'ลูกบิดหน้าห้อง' },
                { name: 'กระจกห้องน้ำ' },
                { name: 'ชั้นวางหน้ากระจกในห้องน้ำ' },
                { name: 'รางแขวนผ้าในห้องน้ำ' },
                { name: 'ก๊อกน้ำ' },
                { name: 'สายฝักบัว' },
                { name: 'ก๊อกฝักบัว' },
                { name: 'ตะแกรงน้ำห้องน้ำ' },
                { name: 'สายฉีดชำระ' },
                { name: 'เครื่องทำน้ำอึ่น' },
                { name: 'ที่เสียบทิชชู่' },
                { name: 'ผนังห้องน้ำ' },
                { name: 'ผนังห้องสีด้าน' },
                { name: 'พื้นห้อง' },
                { name: 'ตู้เสื้อผ้า' },
                { name: 'โต๊ะเครื่องแป้ง' },
                { name: 'โต๊ะวางของ' },
                { name: 'เต้าเสียบปลั๊ก' },
                { name: 'เต้าเสียบสายทีวี' },
                { name: 'เตียงนอน' },
                { name: 'ฟูกนอน' },
                { name: 'หน้าต่าง' },
                { name: 'มุ้งลวด' },
                { name: 'ผ้าม่านใหญ่' },
                { name: 'ราวม่าน' },
                { name: 'หลอดไฟหัวนอน' },
                { name: 'หลอดไฟห้องน้ำ' },
                { name: 'ระเบียง+ราวระเบียง' },
                { name: 'ตะแกรงน้ำระเบียง' },
                { name: 'ชักโครก' },
            ],
            items_other: [],
            bill_detail: {

            },
            user_detail: {
                ele: 0,
                water: 0,
                room: 0,
                other: 0
            }

        }
    },
    created() {
        const loading = this.$vs.loading({})
        // const now = new Date();
        // const month = now.getMonth() + 1;
        // const day = now.getDate();
        // const year = now.getFullYear();
        // this.date_moveout= `${month}/${day}/${year}`;
        // console.log(this.date_moveout);
        this.getDetailRoom()
        setTimeout(() => {
            loading.close()
        }, 1000)
    },
    methods: {
        getDetailRoom(id) {
            const loading = this.$vs.loading()
            // fetch('https://api.resguru.app/api/getRoom?buildingid=' + this.$store.state.building + '&buildingFloor=' + this.filter.floor)
            fetch('https://api.resguru.app/api' + '/user-sign-contracts/' + this.$route.query.id_contract + '?populate=deep,4')
                .then(response => response.json())
                .then((resp) => {
                    this.list_debt.deposit = resp.data?.attributes.roomDeposit
                    this.list_debt.deposit2 = resp.data?.attributes.roomInsuranceDeposit
                    this.list_debt.total = resp.data?.attributes.room.data?.attributes.tenant_bills.data[0]?.attributes.total
                    this.user_detail = resp.data?.attributes.users_permissions_user.data?.attributes
                    this.bill_detail.id = resp.data?.attributes.room.data?.attributes.tenant_bills.data[0]?.id
                    this.bill_detail.ele = resp.data?.attributes.room.data?.attributes.tenant_bills.data[0]?.attributes.electricPrice
                    this.bill_detail.water = resp.data?.attributes.room.data?.attributes.tenant_bills.data[0]?.attributes.waterPrice
                    this.bill_detail.communalPrice = resp.data?.attributes.room.data?.attributes.tenant_bills.data[0]?.attributes.communalPrice
                    this.bill_detail.vat = 7
                    this.bill_detail.room = resp.data?.attributes.room.data?.attributes.tenant_bills.data[0]?.attributes.roomPrice
                    this.bill_detail.other = resp.data?.attributes.room.data?.attributes.tenant_bills.data[0]?.attributes.otherPrice
                }).finally(() => {
                    fetch('https://api.resguru.app/api' + '/room-histories?populate=*&filters[building][id][$eq]=' + this.$store.state.building + '&filters[room][id][$eq]=' + this.$route.query.id_room + '&filters[user_sign_contract][id][$eq]=' + this.$route.query.id_contract + '&filters[publishedAt][$null]=true&publicationState=preview')
                        .then(response => response.json())
                        .then((resp) => {
                            console.log(resp?.data.length == 0);
                            if (resp?.data.length == 0) {
                                console.log('1');
                                fetch('https://api.resguru.app/api' + '/rooms/' + this.$route.query.id_room + '?populate=deep')
                                    .then(response => response.json())
                                    .then((resp) => {
                                        resp.data?.attributes.other_of_buildings.data?.forEach((item) => {
                                            this.items_other.push({
                                                name: item.attributes.title,
                                                price: item.attributes.price,
                                                img_bf: '',
                                                img_af: '',
                                                remark: 'เสียหาย'
                                            })
                                        })
                                    }).finally(() => {

                                    })
                            }
                            else {
                                this.tab =  resp.data[0]?.attributes.ExitType == 'Missing'?true:false,
                                resp.data[0]?.attributes.room_detect_histories.data?.forEach((item) => {
                                    this.items_other.push({
                                        id: item.id,
                                        name: item.attributes.name,
                                        price: item.attributes.charge,
                                        img_bf: '',
                                        img_af: '',
                                        remark: item.attributes.remark
                                    })
                                })
                            }

                        })
                    loading.close()
                })
        },
        addItem(data) {
            this.items_other.push({
                name: data,
                price: 0,
                img_bf: '',
                img_af: '',
                remark: 'เสียหาย'
            })
            this.value_item = ''
        },
        totalBillItems() {
            let totalPrice = 0;
            // Loop through each item and add its price to totalPrice
            this.items_other.forEach(item => {
                totalPrice += item.price;
            });
            return totalPrice;
        },
        darftBill() {
            fetch('https://api.resguru.app/api' + '/room-histories?populate=*&filters[building][id][$eq]=' + this.$store.state.building + '&filters[room][id][$eq]=' + this.$route.query.id_room + '&filters[user_sign_contract][id][$eq]=' + this.$route.query.id_contract + '&filters[publishedAt][$null]=true&publicationState=preview')
                .then(response => response.json())
                .then((resp) => {
                    console.log(resp?.data.length == 0);
                    if (resp?.data.length == 0) { //// draft ครั้งแรก
                        axios.post('https://api.resguru.app/api' + '/room-histories', {
                            data: {
                                "building": this.$store.state.building,
                                "room": this.$route.query.id_room,
                                "users_permissions_user": this.$route.query.id_user,
                                "date_moveout": this.date_moveout,
                                "user_sign_contract": this.$route.query.id_contract,
                                "ExitType":this.tab?'Missing':'Move',
                                "publishedAt": null
                            }
                        }
                        ).then((resp) => {
                            this.items_other.forEach(element => {
                                axios.post('https://api.resguru.app/api' + '/room-detect-histories', {
                                    data: {
                                        "remark": element.remark,
                                        "charge": element.price,
                                        "room_history": resp.data.data.id,
                                        "name": element.name,
                                    }
                                })
                            });
                        }).finally(() => {
                            axios.put('https://api.resguru.app/api' + '/tenant-bills/' + this.bill_detail.id, {
                                data: {
                                    "roomPrice": this.bill_detail.room,
                                    "waterPrice": this.bill_detail.water,
                                    "electricPrice": this.bill_detail.ele,
                                    "otherPrice": this.bill_detail.other,
                                    "communalPrice": this.bill_detail.communalPrice,
                                    "subtotal": this.bill_detail.room + this.bill_detail.water + this.bill_detail.ele + this.bill_detail.other,
                                    "total": this.bill_detail.room + this.bill_detail.water + this.bill_detail.ele + this.bill_detail.other + this.bill_detail.communalPrice+ ((this.bill_detail.room + this.bill_detail.water + this.bill_detail.ele + this.bill_detail.other+this.bill_detail.communalPrice) * 0.07),
                                    "publishedAt": null
                                }
                            }
                            )
                        })
                    }
                    else { ////แก้ไข draft และยังคง draft
                        axios.put('https://api.resguru.app/api' + '/room-histories/' + resp?.data[0].id, {
                            data: {
                                "date_moveout": this.date_moveout,
                                "ExitType":this.tab?'Missing':'Move',
                                "publishedAt": null
                            }
                        }
                        ).then((resp) => { //////////////// ไปแก้ไขตอนดึงมาแสดงด้วย
                            this.items_other.forEach(element => {
                                axios.put('https://api.resguru.app/api' + '/room-detect-histories/' + element.id, {
                                    data: {
                                        "remark": element.remark,
                                        "charge": element.price,
                                        "room_history": resp.data.data.id,
                                        "name": element.name,
                                    }
                                })
                            });
                        }).finally(() => {
                            axios.put('https://api.resguru.app/api' + '/tenant-bills/' + this.bill_detail.id, {
                                data: {
                                    "roomPrice": this.bill_detail.room,
                                    "waterPrice": this.bill_detail.water,
                                    "electricPrice": this.bill_detail.ele,
                                    "otherPrice": this.bill_detail.other,
                                    "communalPrice": this.bill_detail.communalPrice,
                                    "subtotal": this.bill_detail.room + this.bill_detail.water + this.bill_detail.ele + this.bill_detail.other,
                                    "total": this.bill_detail.room + this.bill_detail.water + this.bill_detail.ele + this.bill_detail.other + this.bill_detail.communalPrice+ ((this.bill_detail.room + this.bill_detail.water + this.bill_detail.ele + this.bill_detail.other+this.bill_detail.communalPrice) * 0.07),
                                    "publishedAt": null
                                }
                            }
                            )
                        })

                    }
                }).finally(()=>{
                    this.$showNotification('#3A89CB', 'บันทึกแบบร่างสำเร็จ')
                })
        },
        submitBill() {
            fetch('https://api.resguru.app/api' + '/room-histories?populate=*&filters[building][id][$eq]=' + this.$store.state.building + '&filters[room][id][$eq]=' + this.$route.query.id_room + '&filters[user_sign_contract][id][$eq]=' + this.$route.query.id_contract + '&filters[publishedAt][$null]=true&publicationState=preview')
                .then(response => response.json())
                .then((resp) => {
                    console.log(resp?.data.length == 0);
                    if (resp?.data.length == 0) { ///// ไม่มี draft สร้างแล้วจบ flow เลย
                        axios.post('https://api.resguru.app/api' + '/room-histories', {
                            data: {
                                "building": this.$store.state.building,
                                "room": this.$route.query.id_room,
                                "users_permissions_user": this.$route.query.id_user,
                                "ExitType":this.tab?'Missing':'Move',
                                "date_moveout": this.date_moveout
                            }
                        }
                        ).then((resp) => {
                            this.items_other.forEach(element => {
                                axios.post('https://api.resguru.app/api' + '/room-detect-histories', {
                                    data: {
                                        "remark": element.remark,
                                        "charge": element.price,
                                        "room_history": resp.data.data.id,
                                        "name": element.name
                                    }
                                })
                            });
                        }).finally(() => {
                            axios.put('https://api.resguru.app/api' + '/tenant-bills/' + this.bill_detail.id, {
                                data: {
                                    "roomPrice": this.bill_detail.room,
                                    "waterPrice": this.bill_detail.water,
                                    "electricPrice": this.bill_detail.ele,
                                    "otherPrice": this.bill_detail.other,
                                    "communalPrice": this.bill_detail.communalPrice,
                                    "subtotal": this.bill_detail.room + this.bill_detail.water + this.bill_detail.ele + this.bill_detail.other,
                                    "total": this.bill_detail.room + this.bill_detail.water + this.bill_detail.ele + this.bill_detail.other + this.bill_detail.communalPrice+ ((this.bill_detail.room + this.bill_detail.water + this.bill_detail.ele + this.bill_detail.other+this.bill_detail.communalPrice) * 0.07),
                                    "publishedAt": Date.now()
                                }
                            }).then(() => {
                                axios.delete('https://api.resguru.app/api' + '/user-sign-contracts/' + this.$route.query.id_contract)
                            })
                            this.move_confirm = !this.move_confirm,
                                this.move_done = true
                            this.$router.push({
                                path: '/rooms',
                            })
                        })
                    }
                    else { ////// มี draft แล้วจบ flow
                        axios.put('https://api.resguru.app/api' + '/room-histories/' + resp?.data[0].id, {
                            data: {
                                "date_moveout": this.date_moveout,
                                "ExitType":this.tab?'Missing':'Move',
                                "publishedAt": Date.now()
                            }
                        }
                        ).then((resp) => { //////////////// ไปแก้ไขตอนดึงมาแสดงด้วย
                            this.items_other.forEach(element => {
                                axios.put('https://api.resguru.app/api' + '/room-detect-histories/' + element.id, {
                                    data: {
                                        "remark": element.remark,
                                        "charge": element.price,
                                        "room_history": resp.data.data.id,
                                        "name": element.name,
                                    }
                                })
                            });
                        }).finally(() => {
                            axios.put('https://api.resguru.app/api' + '/tenant-bills/' + this.bill_detail.id, {
                                data: {
                                    "roomPrice": this.bill_detail.room,
                                    "waterPrice": this.bill_detail.water,
                                    "electricPrice": this.bill_detail.ele,
                                    "otherPrice": this.bill_detail.other,
                                    "communalPrice": this.bill_detail.communalPrice,
                                    "subtotal": this.bill_detail.room + this.bill_detail.water + this.bill_detail.ele + this.bill_detail.other,
                                    "total": this.bill_detail.room + this.bill_detail.water + this.bill_detail.ele + this.bill_detail.other + this.bill_detail.communalPrice+ ((this.bill_detail.room + this.bill_detail.water + this.bill_detail.ele + this.bill_detail.other+this.bill_detail.communalPrice) * 0.07),
                                    "publishedAt": Date.now()
                                }
                            }
                            ).then(() => {
                                axios.delete('https://api.resguru.app/api' + '/user-sign-contracts/' + this.$route.query.id_contract)
                                this.move_confirm = !this.move_confirm,
                                    this.move_done = true
                                this.$router.push({
                                    path: '/rooms',
                                })
                            })
                        })

                    }
                }).finally(()=>{
                    this.$showNotification('#3A89CB', 'สำเร็จ')
                })
        }
    }
}

</script>