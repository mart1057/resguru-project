<template>
    <div class="bg-[white] pt-[14px] pl-[24px] pr-[24px] pb-[24px]">
        <div class="flex mt-[14px]">
            <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_1413_28150" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                        height="24">
                        <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1413_28150)">
                        <path
                            d="M12.0003 16.75C12.2129 16.75 12.391 16.6781 12.5346 16.5343C12.6782 16.3906 12.75 16.2125 12.75 16V11.75C12.75 11.5375 12.6781 11.3594 12.5343 11.2156C12.3904 11.0719 12.2122 11 11.9997 11C11.7871 11 11.609 11.0719 11.4654 11.2156C11.3218 11.3594 11.25 11.5375 11.25 11.75V16C11.25 16.2125 11.3219 16.3906 11.4657 16.5343C11.6095 16.6781 11.7877 16.75 12.0003 16.75ZM12 9.28845C12.2288 9.28845 12.4207 9.21105 12.5755 9.05625C12.7303 8.90145 12.8077 8.70963 12.8077 8.48078C12.8077 8.25194 12.7303 8.06012 12.5755 7.9053C12.4207 7.7505 12.2288 7.6731 12 7.6731C11.7711 7.6731 11.5793 7.7505 11.4245 7.9053C11.2697 8.06012 11.1923 8.25194 11.1923 8.48078C11.1923 8.70963 11.2697 8.90145 11.4245 9.05625C11.5793 9.21105 11.7711 9.28845 12 9.28845ZM12.0016 21.5C10.6877 21.5 9.45268 21.2506 8.29655 20.752C7.1404 20.2533 6.13472 19.5765 5.2795 18.7217C4.42427 17.8669 3.74721 16.8616 3.24833 15.706C2.74944 14.5504 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45268 3.248 8.29655C3.74667 7.1404 4.42342 6.13472 5.27825 5.2795C6.1331 4.42427 7.13834 3.74721 8.29398 3.24833C9.44959 2.74944 10.6844 2.5 11.9983 2.5C13.3122 2.5 14.5473 2.74933 15.7034 3.248C16.8596 3.74667 17.8652 4.42342 18.7205 5.27825C19.5757 6.1331 20.2527 7.13834 20.7516 8.29398C21.2505 9.44959 21.5 10.6844 21.5 11.9983C21.5 13.3122 21.2506 14.5473 20.752 15.7034C20.2533 16.8596 19.5765 17.8652 18.7217 18.7205C17.8669 19.5757 16.8616 20.2527 15.706 20.7516C14.5504 21.2505 13.3156 21.5 12.0016 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76664 19.225 7.87498 17.675 6.32498C16.125 4.77498 14.2333 3.99998 12 3.99998C9.76664 3.99998 7.87498 4.77498 6.32498 6.32498C4.77498 7.87498 3.99998 9.76664 3.99998 12C3.99998 14.2333 4.77498 16.125 6.32498 17.675C7.87498 19.225 9.76664 20 12 20Z"
                            fill="#141629" />
                    </g>
                </svg>
            </div>
            <div class="ml-[8px]">กรุณาอัพโหลดสัญญา เพื่อใช้เป็นเทมเพลตพื้นฐานสำหรับการจัดการสัญญาเช่าระหว่างผู้เช่าและหอพัก</div>
        </div>
        <div class="grid grid-cols-5 w-[100%] gap-4 mt-[14px]">
            <div class="h-[125px] border rounded-[12px] flex flex-col p-[12px] cursor-pointer " v-for="contract in contract">
                <div class="flex flex-col justify-between h-[100%]">
                    <div class="flex justify-between w-[100%]">
                        <div class="flex">
                            <div>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_1744_19036" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0"
                                        y="0" width="20" height="21">
                                        <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_1744_19036)">
                                        <path
                                            d="M5.00128 18.4165C4.41903 18.4165 3.92625 18.2149 3.52293 17.8116C3.11962 17.4083 2.91797 16.9155 2.91797 16.3332V15.4358C2.91797 15.0215 3.06548 14.6669 3.36049 14.3719C3.65549 14.0769 4.01012 13.9294 4.42439 13.9294H5.41797V4.08967C5.41797 3.67541 5.56548 3.32077 5.86049 3.02577C6.15549 2.73076 6.51012 2.58325 6.92439 2.58325H15.5782C15.9924 2.58325 16.3471 2.73076 16.6421 3.02577C16.9371 3.32077 17.0846 3.67541 17.0846 4.08967V16.3332C17.0846 16.9155 16.8829 17.4083 16.4796 17.8116C16.0763 18.2149 15.5835 18.4165 15.0013 18.4165H5.00128ZM15.0013 17.1666C15.2374 17.1666 15.4353 17.0867 15.595 16.927C15.7548 16.7673 15.8346 16.5693 15.8346 16.3332V4.08967C15.8346 4.01488 15.8106 3.95344 15.7625 3.90536C15.7144 3.85727 15.653 3.83323 15.5782 3.83323H6.92439C6.84959 3.83323 6.78816 3.85727 6.74007 3.90536C6.69199 3.95344 6.66795 4.01488 6.66795 4.08967V13.9294H12.6616C13.0758 13.9294 13.4304 14.0769 13.7254 14.3719C14.0204 14.6669 14.1679 15.0215 14.1679 15.4358V16.3332C14.1679 16.5693 14.2478 16.7673 14.4075 16.927C14.5673 17.0867 14.7652 17.1666 15.0013 17.1666ZM8.28653 7.74346C8.10945 7.74346 7.96102 7.68354 7.84124 7.56371C7.72145 7.44386 7.66155 7.29536 7.66155 7.11821C7.66155 6.94104 7.72145 6.79263 7.84124 6.67298C7.96102 6.55333 8.10945 6.4935 8.28653 6.4935H14.216C14.3931 6.4935 14.5415 6.55343 14.6613 6.67327C14.7811 6.79311 14.841 6.94161 14.841 7.11877C14.841 7.29593 14.7811 7.44433 14.6613 7.56398C14.5415 7.68363 14.3931 7.74346 14.216 7.74346H8.28653ZM8.28653 10.1473C8.10945 10.1473 7.96102 10.0874 7.84124 9.96754C7.72145 9.8477 7.66155 9.6992 7.66155 9.52205C7.66155 9.34488 7.72145 9.19647 7.84124 9.07682C7.96102 8.95716 8.10945 8.89734 8.28653 8.89734H14.216C14.3931 8.89734 14.5415 8.95726 14.6613 9.07711C14.7811 9.19694 14.841 9.34544 14.841 9.52261C14.841 9.69976 14.7811 9.84817 14.6613 9.96784C14.5415 10.0875 14.3931 10.1473 14.216 10.1473H8.28653ZM5.00128 17.1666H12.918V15.4358C12.918 15.361 12.8939 15.2996 12.8459 15.2515C12.7978 15.2034 12.7363 15.1794 12.6616 15.1794H4.42439C4.34959 15.1794 4.28816 15.2034 4.24007 15.2515C4.19199 15.2996 4.16795 15.361 4.16795 15.4358V16.3332C4.16795 16.5693 4.24781 16.7673 4.40753 16.927C4.56725 17.0867 4.76517 17.1666 5.00128 17.1666ZM5.00128 17.1666H4.16795H12.918H5.00128Z"
                                            fill="#003765" />
                                    </g>
                                </svg>
                            </div>
                            <div class="text-[18px] ml-[4px]">{{ contract.attributes.title }}</div>
                        </div>
                        <div class="flex">
                            <svg @click="viewUploadFile(contract.attributes.templatePDF.data.attributes.url)" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_1744_19039" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                    width="20" height="20">
                                    <rect width="20" height="20" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_1744_19039)">
                                    <path
                                        d="M4.16795 3.33323V8.48227V8.46144V16.6666V3.33323ZM6.66795 11.4582H8.9997C9.10332 11.2189 9.22405 10.9964 9.36187 10.7908C9.49968 10.5851 9.65459 10.3909 9.82659 10.2083H6.66795C6.49086 10.2083 6.34243 10.2682 6.22266 10.388C6.10286 10.5078 6.04297 10.6564 6.04297 10.8335C6.04297 11.0107 6.10286 11.1591 6.22266 11.2787C6.34243 11.3984 6.49086 11.4582 6.66795 11.4582ZM6.66795 14.7915H8.56859C8.51918 14.5832 8.48706 14.3749 8.47224 14.1666C8.45742 13.9582 8.45856 13.7499 8.47566 13.5416H6.66795C6.49086 13.5416 6.34243 13.6015 6.22266 13.7213C6.10286 13.8412 6.04297 13.9897 6.04297 14.1668C6.04297 14.344 6.10286 14.4924 6.22266 14.6121C6.34243 14.7317 6.49086 14.7915 6.66795 14.7915ZM4.42295 17.9165C4.00296 17.9165 3.64714 17.7707 3.35547 17.479C3.0638 17.1874 2.91797 16.8311 2.91797 16.4101V3.58967C2.91797 3.16873 3.0638 2.81242 3.35547 2.52075C3.64714 2.22909 4.00344 2.08325 4.42439 2.08325H10.4196C10.6228 2.08325 10.8165 2.12225 11.0007 2.20025C11.1848 2.27824 11.3453 2.38561 11.4821 2.52236L14.9788 6.01911C15.1156 6.15587 15.2229 6.31634 15.3009 6.5005C15.3789 6.68468 15.4179 6.87838 15.4179 7.08161V8.75792C15.2181 8.67886 15.0141 8.61877 14.8058 8.57763C14.5974 8.5365 14.3848 8.50472 14.1679 8.48227V7.08321H11.1678C10.9553 7.08321 10.7772 7.01134 10.6335 6.86759C10.4898 6.72384 10.418 6.54571 10.418 6.33321V3.33323H4.42439C4.36027 3.33323 4.3015 3.35994 4.24807 3.41336C4.19466 3.46679 4.16795 3.52556 4.16795 3.58967V16.4101C4.16795 16.4742 4.19466 16.533 4.24807 16.5864C4.3015 16.6399 4.36027 16.6666 4.42439 16.6666H9.34103C9.50373 16.9131 9.68676 17.1417 9.89014 17.3523C10.0935 17.5629 10.3138 17.7509 10.5509 17.9165H4.42295ZM13.7529 15.9614C14.3725 15.9614 14.8958 15.7475 15.3226 15.3196C15.7494 14.8918 15.9628 14.368 15.9628 13.7483C15.9628 13.1286 15.7489 12.6054 15.321 12.1786C14.8932 11.7518 14.3694 11.5384 13.7497 11.5384C13.13 11.5384 12.6068 11.7523 12.18 12.1801C11.7531 12.608 11.5397 13.1318 11.5397 13.7515C11.5397 14.3712 11.7537 14.8944 12.1815 15.3212C12.6094 15.748 13.1332 15.9614 13.7529 15.9614ZM18.441 18.439C18.326 18.5544 18.1796 18.6121 18.0018 18.6121C17.8241 18.6121 17.6776 18.5544 17.5622 18.439L15.7192 16.588C15.4382 16.7931 15.1303 16.9483 14.7953 17.0536C14.4604 17.1588 14.1124 17.2114 13.7513 17.2114C12.7898 17.2114 11.9724 16.8749 11.2994 16.2018C10.6263 15.5287 10.2898 14.7114 10.2898 13.7499C10.2898 12.7884 10.6263 11.9711 11.2994 11.298C11.9724 10.6249 12.7898 10.2884 13.7513 10.2884C14.7128 10.2884 15.5301 10.6249 16.2032 11.298C16.8763 11.9711 17.2128 12.7884 17.2128 13.7499C17.2128 14.111 17.1602 14.459 17.0549 14.794C16.9497 15.1289 16.7945 15.4369 16.5894 15.7178L18.4404 17.5608C18.5558 17.6757 18.6134 17.822 18.6134 17.9995C18.6134 18.1771 18.556 18.3236 18.441 18.439Z"
                                        fill="#5C6B79" />
                                </g>
                            </svg>

                            <div @click="deleteContract(contract.id)" class="">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_967_25233" style="mask-type:alpha"
                                                    maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                                                    <rect width="20" height="20" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_967_25233)">
                                                    <path
                                                        d="M6.08975 17.0822C5.66881 17.0822 5.3125 16.9363 5.02083 16.6447C4.72917 16.353 4.58333 15.9967 4.58333 15.5758V4.99886H4.375C4.19765 4.99886 4.04915 4.93904 3.9295 4.81939C3.80983 4.69973 3.75 4.55123 3.75 4.37389C3.75 4.19654 3.80983 4.04804 3.9295 3.92839C4.04915 3.80872 4.19765 3.74889 4.375 3.74889H7.49998C7.49998 3.5395 7.57316 3.36429 7.71952 3.22326C7.8659 3.08223 8.04378 3.01172 8.25319 3.01172H11.7468C11.9562 3.01172 12.1341 3.08223 12.2804 3.22326C12.4268 3.36429 12.5 3.5395 12.5 3.74889H15.625C15.8023 3.74889 15.9508 3.80872 16.0705 3.92839C16.1901 4.04804 16.25 4.19654 16.25 4.37389C16.25 4.55123 16.1901 4.69973 16.0705 4.81939C15.9508 4.93904 15.8023 4.99886 15.625 4.99886H15.4166V15.5758C15.4166 15.9967 15.2708 16.353 14.9791 16.6447C14.6875 16.9363 14.3312 17.0822 13.9102 17.0822H6.08975ZM5.83331 4.99886V15.5758C5.83331 15.6506 5.85735 15.712 5.90544 15.7601C5.95352 15.8082 6.01496 15.8322 6.08975 15.8322H13.9102C13.985 15.8322 14.0464 15.8082 14.0945 15.7601C14.1426 15.712 14.1666 15.6506 14.1666 15.5758V4.99886H5.83331ZM7.83654 13.5406C7.83654 13.7179 7.89637 13.8664 8.01602 13.9861C8.13567 14.1057 8.28417 14.1655 8.46152 14.1655C8.63887 14.1655 8.78737 14.1057 8.90702 13.9861C9.02669 13.8664 9.08652 13.7179 9.08652 13.5406V7.29051C9.08652 7.11316 9.02669 6.96466 8.90702 6.84501C8.78737 6.72536 8.63887 6.66553 8.46152 6.66553C8.28417 6.66553 8.13567 6.72536 8.01602 6.84501C7.89637 6.96466 7.83654 7.11316 7.83654 7.29051V13.5406ZM10.9134 13.5406C10.9134 13.7179 10.9733 13.8664 11.0929 13.9861C11.2126 14.1057 11.3611 14.1655 11.5384 14.1655C11.7158 14.1655 11.8643 14.1057 11.9839 13.9861C12.1036 13.8664 12.1634 13.7179 12.1634 13.5406V7.29051C12.1634 7.11316 12.1036 6.96466 11.9839 6.84501C11.8643 6.72536 11.7158 6.66553 11.5384 6.66553C11.3611 6.66553 11.2126 6.72536 11.0929 6.84501C10.9733 6.96466 10.9134 7.11316 10.9134 7.29051V13.5406ZM5.83331 4.99886V15.5758C5.83331 15.6506 5.85735 15.712 5.90544 15.7601C5.95352 15.8082 6.01496 15.8322 6.08975 15.8322H5.83331V4.99886Z"
                                                        fill="#5C6B79" />
                                                </g>
                                            </svg>
                            </div>
                            <!-- <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                                class="ml-[4px]">
                                <ellipse cx="10.0013" cy="4.16667" rx="1.66667" ry="1.66667"
                                    transform="rotate(90 10.0013 4.16667)" fill="#5C6B79" />
                                <circle cx="10.0013" cy="9.9987" r="1.66667" transform="rotate(90 10.0013 9.9987)"
                                    fill="#5C6B79" />
                                <ellipse cx="10.0013" cy="15.8346" rx="1.66667" ry="1.66667"
                                    transform="rotate(90 10.0013 15.8346)" fill="#5C6B79" />
                            </svg> -->

                        </div>
                    </div>
                    <div class="flex justify-between">
                        <div class="text-[#5C6B79] flex justify-center items-center">ตั้งเป็นค่าเริ่มต้น</div>
                        <div> <vs-switch success v-model="contract.attributes.default" @click="setDefault(contract.id,contract.attributes.default)"/></div>
                    </div>
                </div>
            </div>
            <div class="h-[125px] border rounded-[12px] flex flex-col p-[12px] cursor-pointer ">
                <div class="flex flex-col justify-center items-center h-[100%]" @click="create = true">
                    <div>
                        <svg width="60" height="60" viewBox="0 0 68 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="34" cy="34.457" r="34" fill="#F3F7FA" />
                            <mask id="mask0_1373_22044" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="6" y="7"
                                width="56" height="55">
                                <rect x="6.80078" y="7.25586" width="54.4" height="54.4" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_1373_22044)">
                                <path
                                    d="M33.9984 49.7561C33.5165 49.7561 33.1129 49.5932 32.7874 49.2674C32.4619 48.9416 32.2992 48.5379 32.2992 48.0562V36.1561H20.3992C19.9175 36.1561 19.5138 35.9932 19.188 35.6672C18.8621 35.3412 18.6992 34.9373 18.6992 34.4555C18.6992 33.9736 18.8621 33.5699 19.188 33.2444C19.5138 32.919 19.9175 32.7562 20.3992 32.7562H32.2992V20.8562C32.2992 20.3745 32.4622 19.9708 32.7881 19.6449C33.1141 19.3191 33.518 19.1562 33.9999 19.1562C34.4818 19.1562 34.8855 19.3191 35.2109 19.6449C35.5364 19.9708 35.6991 20.3745 35.6991 20.8562V32.7562H47.5992C48.0808 32.7562 48.4846 32.9192 48.8104 33.2452C49.1362 33.5712 49.2991 33.9751 49.2991 34.4569C49.2991 34.9388 49.1362 35.3425 48.8104 35.668C48.4846 35.9934 48.0808 36.1561 47.5992 36.1561H35.6991V48.0562C35.6991 48.5379 35.5361 48.9416 35.2102 49.2674C34.8842 49.5932 34.4803 49.7561 33.9984 49.7561Z"
                                    fill="#B9CCDC" />
                            </g>
                        </svg>
                    </div>
                    <div class="text-[#5C6B79] mt-[8px]">สร้างสัญญาเช่า</div>
                </div>
            </div>
            <b-modal centered v-model="create" size="l" hide-backdrop hide-header-close hide-header hide-footer
            class="p-[-20px] text-custom">
            <div>
                <div class="flex justify-between">
                    <div class="text-custom flex justify-center items-center text-[16px] font-bold">
                        สร้างสัญญาเช่า</div>
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
                <div class="w-[100%] h-[1px]  mt-[24px] mb-[14px] bg-gray-200 border-0 dark:bg-gray-700"></div>
                <div class="mt-[14px]">
                    <div class="text-custom">ชื่อสัญญาเช่า</div>
                    <div>
                        <input
                            class="w-[100%] h-[36px]  rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]" v-model="contractTitle" type="input"/>
                            
                    </div>
                </div>
                <div class="mt-[14px]">
                    <div class="text-custom">Template สัญญาเช่า</div>
                    <div class="mt-[8px] flex">
                        <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start" id="upload" ref="contractTemplate" hidden
                            type="file" accept="application/pdf" @change="setUploadFile()"/>
                        <label for="upload" class="cursor-pointer">
                            <div
                                class="h-[28px] w-[120px] flex justify-center text-custom items-center bg-[#165D98] text-[14px] text-[white] rounded-[12px]">
                                อัพโหลดรูปภาพ</div>
                        </label>
                        <div class="text-[#5C6B79] text-custom flex justify-center items-center ml-[8px] text-[12px]">
                            ยังไม่ได้เลือกไฟล์</div>
                    </div>
                </div>
                <div class="flex justify-end mt-[30px]">
                    <div>
                        <vs-button dark shadow @click="create = false">
                            <div class="text-custom">ยกเลิก</div>
                        </vs-button>
                    </div>
                    <div>
                        <vs-button @click="createContractTemplate()" color="#003765">
                            <div class="text-custom">บันทึก</div>
                        </vs-button>
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</div>
</template>
<script>

import axios from 'axios'


export default {
    data() {
        return {
           contract: [],
           contractTitle: '',
           create:false,
           file: [],
        }
    },
    created() {
        const loading = this.$vs.loading({})
        setTimeout(() => {
            loading.close()
        }, 1000)
    },
    mounted() {
        this.getContract();
    },
    methods: {
        getContract() {
            const loading = this.$vs.loading()
            fetch('https://api.resguru.app/api' + '/contract-templates?populate=*&filters[building][id][$eq]='+this.$store.state.building)
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getcontract()",resp.data);
                    this.contract = resp.data
                }).finally(() => {
                    loading.close()
                })
        },
        setDefault(contractID,status){
            axios.put(`https://api.resguru.app/api/contract-templates/${contractID}`,{
                data : {
                    default: status
                }
            })
            .then( (resp) =>{
                   console.log(resp)
                })
            .catch(error => {
            const errorMessage = error.message ? error.message : 'Error updating information';
            this.$showNotification('danger', errorMessage); 
            })
            .finally(()=>{
                this.getContract()
                this.$showNotification('#3A89CB', 'Set Default Success')
            })
               
        }, 
        openNotificationUpdatContract(position = null, color) {
            const noti = this.$vs.notification({
                sticky: true,
                color,
                position,
                title: 'Update Contract Success',
            })
        },
        viewUploadFile(url){
            window.open('https://api.resguru.app'+url, '_blank', 'noreferrer');
        },
        // addContract(){
        //     axios.post(`https://api.resguru.app/api/rooms/`,{
        //         data : {
        //             RoomNumber: "RandomRoom 301",
        //             room_building: this.$store.state.building,
        //             room_type: this.roomType,
        //             building_floor: this.roomFloor,
        //         }
        //     }).then( 
        //             this.openNotificationAddContract('top-right', '#3A89CB', 6000)
        //         )
                
        // },
        // openNotificationAddContract(position = null, color) {
        //     const noti = this.$vs.notification({
        //         sticky: true,
        //         color,
        //         position,
        //         title: 'Add Room Success',
        //     })
        // },
        deleteContract(contractID){
                if(confirm("Do you really want to delete this contract template?")){
                    axios.delete(`https://api.resguru.app/api/contract-templates/${contractID}`)
                    .then( (resp) =>{
                            console.log(resp)
                        })
                    .catch(error => {
                    const errorMessage = error.message ? error.message : 'Error updating information';
                    this.$showNotification('danger', errorMessage); 
                    })
                    .finally(()=>{
                        this.getContract()
                        this.$showNotification('#3A89CB', 'Delete Contract Success')
                    })
                }
        },
        setUploadFile(){
            this.file = this.$refs.contractTemplate.files[0]
        },
        createContractTemplate(){
            axios.post("https://api.resguru.app/api/contract-templates",{
                data:{
                    building: this.$store.state.building,
                    title: this.contractTitle,
                }
            }).then(
                    (resp) => {
                        if(this.file.length != 0){
                            let formData = new FormData();
                            formData.append("files", this.file);
                            formData.append("refId", String(resp.data.data.id));
                            formData.append("ref", "api::contract-template.contract-template");
                            formData.append("field", "templatePDF");

                            axios.post("https://api.resguru.app/api/upload", formData, {
                                headers: {
                                "Content-Type": "multipart/form-data",
                                },
                            }).then( (result) => { console.log("Upload file",result)}) 
                            .catch((error) => {
                                        console.log(error);
                            })
                        }
                       
                    }
                )
                .catch(error => {
                const errorMessage = error.message ? error.message : 'Error updating information';
                this.$showNotification('danger', errorMessage); 
                })
                .finally(()=>{
                    this.getContract()
                    this.$showNotification('#3A89CB', 'Create Contract Template Success')
                })
            this.create = false
        },
        
    },
}
</script>
