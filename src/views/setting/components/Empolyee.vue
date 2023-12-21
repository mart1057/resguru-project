<template>
    <div>
        <div class="bg-[white] pt-[14px] pl-[24px] pr-[24px] " :class="tab == 1 ? 'rounded-b-lg' : 'rounded-t-lg'">
            <div class="bg-[white] ">
                <div class="flex justify-start items-center rounded-[12px] ">
                    <div class="bg-[#F3F7FA] rounded-[12px]">
                        <div class="flex justify-start items-center">
                            <div @click="tab = 1" class="cursor-pointer "
                                :class="tab == 1 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[12px] text-[white]' : 'text-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] flex justify-center items-center'">
                                แอดมิน</div>
                            <div @click="tab = 2" class="cursor-pointer ml-[8px]"
                                :class="tab == 2 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[12px] text-[white]' : 'text-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] flex justify-center items-center'">
                                พนักงาน
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" bg-[white] pt-[14px] pb-[24px] pl-[24px] pr-[24px]  rounded-b-lg" v-if="tab == 1">
            <div class="grid grid-cols-4 w-[100%] gap-4 mt-[14px]">
                <div class="bg-white rounded-[12px] h-[150px] border flex flex-col p-[12px] cursor-pointer "
                    v-for="data in UserBuilding">
                    <div class="flex justify-between">
                        <div class="flex">
                            <div class="flex">
                                <div v-if=data.imageProfile>
                                    <img class="w-[125px] h-[125px] rounded-[12px]"
                                        :src="'https://api.resguru.app' + data.imageProfile.url" />
                                </div>
                                <div v-else>
                                    <img class="w-[125px] h-[125px] rounded-[12px]"
                                        src="https://i.pinimg.com/474x/44/95/12/4495124f97de536535464aa6558b4452.jpg" />
                                </div>
                                <!-- <img class="w-[125px] h-[125px] rounded-[12px] bg-[red]"
                                    src="https://media.wired.com/photos/63b89b5b995aa119ba7ba7be/1:1/w_1800,h_1800,c_limit/Profile-Photos-Gear-1411545652.jpg" /> -->
                                <div class="ml-[12px]">
                                    <div class="flex flex-col justify-between h-[100%]">
                                        <div class="">
                                            <div
                                                class="h-[24px] rounded-[12px] font-bold text-[#003765] pl-[12px] pr-[12px] flex items-center bg-[#F0F8FF]">
                                                {{ data.role.name }}
                                            </div>
                                            <div class="mt-[14px] text-[18px] font-bold">{{ data.firstName }} {{
                                                data.lastName }}</div>
                                        </div>
                                        <!-- <div  class="ml-[-130px] mb-[-40px]">
                                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect width="35" height="35" rx="12" fill="#003765" />
                                                <mask id="mask0_633_13834" style="mask-type:alpha"
                                                    maskUnits="userSpaceOnUse" x="4" y="4" width="27" height="27">
                                                    <rect x="4" y="4" width="27" height="27" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_633_13834)">
                                                    <path
                                                        d="M15.25 17.1542C14.1672 17.1542 13.2402 16.7687 12.4691 15.9976C11.698 15.2265 11.3125 14.2996 11.3125 13.2168C11.3125 12.134 11.698 11.207 12.4691 10.4359C13.2402 9.66484 14.1672 9.2793 15.25 9.2793C16.3328 9.2793 17.2597 9.66484 18.0308 10.4359C18.8019 11.207 19.1874 12.134 19.1874 13.2168C19.1874 14.2996 18.8019 15.2265 18.0308 15.9976C17.2597 16.7687 16.3328 17.1542 15.25 17.1542ZM7.83338 25.7215C7.54079 25.7215 7.2975 25.6241 7.10351 25.4292C6.9095 25.2343 6.8125 24.9928 6.8125 24.7047V23.2206C6.8125 22.6523 6.95746 22.1378 7.24737 21.677C7.53726 21.2162 7.94182 20.8596 8.46105 20.6071C9.39568 20.1413 10.4053 19.7522 11.4899 19.44C12.5745 19.1277 13.8279 18.9716 15.25 18.9716H15.5788C15.6697 18.9716 15.7678 18.9831 15.8731 19.0062C15.7591 19.2716 15.665 19.542 15.5907 19.8175C15.5164 20.093 15.4548 20.3735 15.4058 20.659H15.25C13.9548 20.659 12.8081 20.808 11.8101 21.1058C10.812 21.4036 9.95383 21.7393 9.23555 22.1129C8.98027 22.2499 8.79385 22.41 8.67629 22.5932C8.55874 22.7764 8.49997 22.9855 8.49997 23.2206V24.034H15.5875C15.6711 24.3196 15.7796 24.6095 15.9131 24.9037C16.0465 25.1979 16.1932 25.4705 16.3533 25.7215H7.83338ZM15.25 15.4668C15.8687 15.4668 16.3984 15.2465 16.839 14.8058C17.2797 14.3652 17.5 13.8355 17.5 13.2168C17.5 12.598 17.2797 12.0683 16.839 11.6277C16.3984 11.1871 15.8687 10.9668 15.25 10.9668C14.6312 10.9668 14.1015 11.1871 13.6609 11.6277C13.2203 12.0683 13 12.598 13 13.2168C13 13.8355 13.2203 14.3652 13.6609 14.8058C14.1015 15.2465 14.6312 15.4668 15.25 15.4668ZM22.9096 23.7311C23.4988 23.7311 24.003 23.5213 24.422 23.1017C24.8409 22.6821 25.0504 22.1776 25.0504 21.5883C25.0504 20.9991 24.8406 20.495 24.421 20.076C24.0014 19.657 23.4969 19.4475 22.9076 19.4475C22.3184 19.4475 21.8143 19.6573 21.3953 20.0769C20.9763 20.4966 20.7668 21.001 20.7668 21.5903C20.7668 22.1795 20.9766 22.6837 21.3962 23.1026C21.8159 23.5216 22.3203 23.7311 22.9096 23.7311ZM21.868 25.0616C21.5997 24.9823 21.3473 24.8785 21.1108 24.7501C20.8742 24.6217 20.6492 24.4609 20.4358 24.2676L19.3562 24.6441C19.2469 24.6816 19.1454 24.6787 19.0517 24.6354C18.9581 24.5922 18.88 24.5215 18.8175 24.4234L18.4022 23.7311C18.3416 23.6403 18.3218 23.54 18.3427 23.4304C18.3636 23.3208 18.4195 23.2299 18.5103 23.1578L19.3735 22.4504C19.2928 22.159 19.2524 21.872 19.2524 21.5893C19.2524 21.3066 19.2928 21.0196 19.3735 20.7283L18.5212 19.9992C18.4303 19.9271 18.3744 19.8362 18.3535 19.7266C18.3326 19.617 18.3524 19.5131 18.413 19.415L18.8283 18.7228C18.8908 18.6343 18.9689 18.5696 19.0626 18.5288C19.1563 18.4879 19.2578 18.4862 19.367 18.5237L20.4358 18.9002C20.642 18.7069 20.8652 18.5479 21.1054 18.4231C21.3455 18.2984 21.5997 18.1963 21.868 18.117L22.0562 16.9985C22.0876 16.8893 22.1426 16.7997 22.2212 16.7295C22.2998 16.6593 22.3941 16.6242 22.5041 16.6242H23.3348C23.4482 16.6242 23.5454 16.6592 23.6265 16.7292C23.7075 16.7991 23.7595 16.8889 23.7826 16.9985L23.96 18.117C24.2283 18.1963 24.4825 18.3013 24.7226 18.4318C24.9628 18.5623 25.186 18.73 25.3922 18.9348L26.4437 18.5237C26.5533 18.4747 26.6594 18.4747 26.762 18.5237C26.8645 18.5728 26.9474 18.6463 27.0105 18.7444L27.4259 19.4713C27.4864 19.5622 27.5073 19.6606 27.4886 19.7666C27.4698 19.8726 27.415 19.9617 27.3242 20.0338L26.4545 20.7629C26.5352 21.0334 26.5756 21.3152 26.5756 21.6083C26.5756 21.9014 26.5352 22.1821 26.4545 22.4504L27.3177 23.1578C27.4158 23.2299 27.4717 23.3226 27.4854 23.4358C27.4991 23.5491 27.4756 23.6547 27.415 23.7528L26.9997 24.4451C26.9385 24.5335 26.862 24.5982 26.7702 24.639C26.6784 24.6799 26.5789 24.6816 26.4718 24.6441L25.3922 24.2676C25.1788 24.4609 24.9538 24.6217 24.7172 24.7501C24.4807 24.8785 24.2283 24.9823 23.96 25.0616L23.7826 26.1801C23.7595 26.2898 23.7075 26.3795 23.6265 26.4495C23.5454 26.5194 23.4482 26.5544 23.3348 26.5544H22.5041C22.3941 26.5544 22.2998 26.5193 22.2212 26.4492C22.1426 26.379 22.0876 26.2893 22.0562 26.1801L21.868 25.0616Z"
                                                        fill="white" />
                                                </g>
                                            </svg>
                                        </div> -->
                                        <div class="">

                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg" @click="removeAdmin(data.id)">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="2.5" r="1" transform="rotate(90 6 2.5)" fill="#8396A6" />
                                <circle cx="6" cy="6" r="1" transform="rotate(90 6 6)" fill="#8396A6" />
                                <circle cx="6" cy="9.5" r="1" transform="rotate(90 6 9.5)" fill="#8396A6" />
                            </svg>
                        </div>

                    </div>
                </div>
                <div class="bg-white rounded-[12px] h-[150px] border flex flex-col p-[12px] cursor-pointer items-center justify-center "
                    @click="profile_admin = true">
                    <div class="flex flex-col items-center justify-center">
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
                        <div class="text-[#5C6B79] font-bold mt-[4px]">เพิ่มแอดมิน</div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" bg-[white] pt-[14px] pb-[24px] pl-[24px] pr-[24px]  rounded-b-lg" v-if="tab == 2">
            <div class="grid grid-cols-4 w-[100%] gap-4 mt-[14px]">
                <div class="bg-white rounded-[12px] h-[150px] border flex flex-col p-[12px] cursor-pointer "
                    v-for="data in employee">

                    <div class="flex justify-between">
                        <div class="flex">
                            <div class="flex">
                                <div v-if=data.attributes.employeeImage.data>
                                    <img class="w-[125px] h-[125px] rounded-[12px]"
                                        :src="'https://api.resguru.app' + data.attributes.employeeImage?.data?.attributes.url" />
                                </div>
                                <div v-else>
                                    <img class="w-[125px] h-[125px] rounded-[12px]"
                                        src="https://media.wired.com/photos/63b89b5b995aa119ba7ba7be/1:1/w_1800,h_1800,c_limit/Profile-Photos-Gear-1411545652.jpg" />
                                </div>

                                <div class="ml-[12px]">
                                    <div class="flex flex-col justify-between h-[100%]">
                                        <div class="">
                                            <div
                                                class="h-[24px] rounded-[12px] font-bold text-[#D48C00] pl-[12px] pr-[12px] flex items-center bg-[#FFF2BC]">
                                                {{ data.attributes.position }}
                                            </div>

                                            <div class="mt-[14px] text-[18px] font-bold">{{ data.attributes.name }} {{
                                                data.attributes.lastname }}</div>
                                        </div>
                                        <!-- <div  class="ml-[-130px] mb-[-40px]">
                                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect width="35" height="35" rx="12" fill="#003765" />
                                                <mask id="mask0_633_13834" style="mask-type:alpha"
                                                    maskUnits="userSpaceOnUse" x="4" y="4" width="27" height="27">
                                                    <rect x="4" y="4" width="27" height="27" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_633_13834)">
                                                    <path
                                                        d="M15.25 17.1542C14.1672 17.1542 13.2402 16.7687 12.4691 15.9976C11.698 15.2265 11.3125 14.2996 11.3125 13.2168C11.3125 12.134 11.698 11.207 12.4691 10.4359C13.2402 9.66484 14.1672 9.2793 15.25 9.2793C16.3328 9.2793 17.2597 9.66484 18.0308 10.4359C18.8019 11.207 19.1874 12.134 19.1874 13.2168C19.1874 14.2996 18.8019 15.2265 18.0308 15.9976C17.2597 16.7687 16.3328 17.1542 15.25 17.1542ZM7.83338 25.7215C7.54079 25.7215 7.2975 25.6241 7.10351 25.4292C6.9095 25.2343 6.8125 24.9928 6.8125 24.7047V23.2206C6.8125 22.6523 6.95746 22.1378 7.24737 21.677C7.53726 21.2162 7.94182 20.8596 8.46105 20.6071C9.39568 20.1413 10.4053 19.7522 11.4899 19.44C12.5745 19.1277 13.8279 18.9716 15.25 18.9716H15.5788C15.6697 18.9716 15.7678 18.9831 15.8731 19.0062C15.7591 19.2716 15.665 19.542 15.5907 19.8175C15.5164 20.093 15.4548 20.3735 15.4058 20.659H15.25C13.9548 20.659 12.8081 20.808 11.8101 21.1058C10.812 21.4036 9.95383 21.7393 9.23555 22.1129C8.98027 22.2499 8.79385 22.41 8.67629 22.5932C8.55874 22.7764 8.49997 22.9855 8.49997 23.2206V24.034H15.5875C15.6711 24.3196 15.7796 24.6095 15.9131 24.9037C16.0465 25.1979 16.1932 25.4705 16.3533 25.7215H7.83338ZM15.25 15.4668C15.8687 15.4668 16.3984 15.2465 16.839 14.8058C17.2797 14.3652 17.5 13.8355 17.5 13.2168C17.5 12.598 17.2797 12.0683 16.839 11.6277C16.3984 11.1871 15.8687 10.9668 15.25 10.9668C14.6312 10.9668 14.1015 11.1871 13.6609 11.6277C13.2203 12.0683 13 12.598 13 13.2168C13 13.8355 13.2203 14.3652 13.6609 14.8058C14.1015 15.2465 14.6312 15.4668 15.25 15.4668ZM22.9096 23.7311C23.4988 23.7311 24.003 23.5213 24.422 23.1017C24.8409 22.6821 25.0504 22.1776 25.0504 21.5883C25.0504 20.9991 24.8406 20.495 24.421 20.076C24.0014 19.657 23.4969 19.4475 22.9076 19.4475C22.3184 19.4475 21.8143 19.6573 21.3953 20.0769C20.9763 20.4966 20.7668 21.001 20.7668 21.5903C20.7668 22.1795 20.9766 22.6837 21.3962 23.1026C21.8159 23.5216 22.3203 23.7311 22.9096 23.7311ZM21.868 25.0616C21.5997 24.9823 21.3473 24.8785 21.1108 24.7501C20.8742 24.6217 20.6492 24.4609 20.4358 24.2676L19.3562 24.6441C19.2469 24.6816 19.1454 24.6787 19.0517 24.6354C18.9581 24.5922 18.88 24.5215 18.8175 24.4234L18.4022 23.7311C18.3416 23.6403 18.3218 23.54 18.3427 23.4304C18.3636 23.3208 18.4195 23.2299 18.5103 23.1578L19.3735 22.4504C19.2928 22.159 19.2524 21.872 19.2524 21.5893C19.2524 21.3066 19.2928 21.0196 19.3735 20.7283L18.5212 19.9992C18.4303 19.9271 18.3744 19.8362 18.3535 19.7266C18.3326 19.617 18.3524 19.5131 18.413 19.415L18.8283 18.7228C18.8908 18.6343 18.9689 18.5696 19.0626 18.5288C19.1563 18.4879 19.2578 18.4862 19.367 18.5237L20.4358 18.9002C20.642 18.7069 20.8652 18.5479 21.1054 18.4231C21.3455 18.2984 21.5997 18.1963 21.868 18.117L22.0562 16.9985C22.0876 16.8893 22.1426 16.7997 22.2212 16.7295C22.2998 16.6593 22.3941 16.6242 22.5041 16.6242H23.3348C23.4482 16.6242 23.5454 16.6592 23.6265 16.7292C23.7075 16.7991 23.7595 16.8889 23.7826 16.9985L23.96 18.117C24.2283 18.1963 24.4825 18.3013 24.7226 18.4318C24.9628 18.5623 25.186 18.73 25.3922 18.9348L26.4437 18.5237C26.5533 18.4747 26.6594 18.4747 26.762 18.5237C26.8645 18.5728 26.9474 18.6463 27.0105 18.7444L27.4259 19.4713C27.4864 19.5622 27.5073 19.6606 27.4886 19.7666C27.4698 19.8726 27.415 19.9617 27.3242 20.0338L26.4545 20.7629C26.5352 21.0334 26.5756 21.3152 26.5756 21.6083C26.5756 21.9014 26.5352 22.1821 26.4545 22.4504L27.3177 23.1578C27.4158 23.2299 27.4717 23.3226 27.4854 23.4358C27.4991 23.5491 27.4756 23.6547 27.415 23.7528L26.9997 24.4451C26.9385 24.5335 26.862 24.5982 26.7702 24.639C26.6784 24.6799 26.5789 24.6816 26.4718 24.6441L25.3922 24.2676C25.1788 24.4609 24.9538 24.6217 24.7172 24.7501C24.4807 24.8785 24.2283 24.9823 23.96 25.0616L23.7826 26.1801C23.7595 26.2898 23.7075 26.3795 23.6265 26.4495C23.5454 26.5194 23.4482 26.5544 23.3348 26.5544H22.5041C22.3941 26.5544 22.2998 26.5193 22.2212 26.4492C22.1426 26.379 22.0876 26.2893 22.0562 26.1801L21.868 25.0616Z"
                                                        fill="white" />
                                                </g>
                                            </svg>
                                        </div> -->
                                        <div @click="deleteEmployee(data.id)" class="">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="2.5" r="1" transform="rotate(90 6 2.5)" fill="#8396A6" />
                                <circle cx="6" cy="6" r="1" transform="rotate(90 6 6)" fill="#8396A6" />
                                <circle cx="6" cy="9.5" r="1" transform="rotate(90 6 9.5)" fill="#8396A6" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-[12px] h-[150px] border flex flex-col p-[12px] cursor-pointer items-center justify-center "
                    @click="profile_admin = true">
                    <div class="flex flex-col items-center justify-center">
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
                        <div class="text-[#5C6B79] font-bold mt-[4px]">เพิ่มพนักงาน</div>
                    </div>
                </div>
            </div>
        </div>

        <b-modal centered v-model="profile_admin" size="xl" hide-backdrop hide-header-close hide-header hide-footer
            class="p-[-20px] text-custom">
            <div class="flex justify-end cursor-pointer" @click="profile_admin = false">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_902_19192" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                        height="24">
                        <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_902_19192)">
                        <path
                            d="M12.0005 13.0543L6.92737 18.1274C6.78892 18.2658 6.61489 18.3367 6.40527 18.3399C6.19567 18.3431 6.01844 18.2723 5.87357 18.1274C5.72869 17.9825 5.65625 17.8069 5.65625 17.6005C5.65625 17.3941 5.72869 17.2184 5.87357 17.0736L10.9466 12.0005L5.87357 6.92738C5.73511 6.78893 5.66427 6.61489 5.66107 6.40527C5.65786 6.19568 5.72869 6.01844 5.87357 5.87358C6.01844 5.72869 6.19407 5.65625 6.40047 5.65625C6.60687 5.65625 6.78251 5.72869 6.92737 5.87358L12.0005 10.9467L17.0736 5.87358C17.212 5.73511 17.3861 5.66428 17.5957 5.66108C17.8053 5.65786 17.9825 5.72869 18.1274 5.87358C18.2723 6.01844 18.3447 6.19408 18.3447 6.40048C18.3447 6.60688 18.2723 6.78251 18.1274 6.92738L13.0543 12.0005L18.1274 17.0736C18.2658 17.212 18.3367 17.3861 18.3399 17.5957C18.3431 17.8053 18.2723 17.9825 18.1274 18.1274C17.9825 18.2723 17.8069 18.3447 17.6005 18.3447C17.3941 18.3447 17.2184 18.2723 17.0736 18.1274L12.0005 13.0543Z"
                            fill="#003765" />
                    </g>
                </svg>
            </div>
            <div class="mt-[14px]">
                <div class="h-[238px] rounded-[22px] bg-[#5C6B79] flex justify-end items-end p-[14px]">
                    <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start " id="upload" hidden
                        type="file" />
                    <label for="upload">
                        <div
                            class="rounded-[22px] pl-[8px] pr-[8px] bg-[white] pt-[4px] pb-[4px]  text-custom cursor-pointer">
                            เปลี่ยนรูปภาพปก
                        </div>
                    </label>
                </div>
                <div class="flex w-[100%]">
                    <div class="w-[20%] ml-[18px] mt-[-70px]">
                        <div class="bg-[white] rounded-[22px] w-[246px] border p-[14px] flex flex-col items-center">
                            <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start " id="uploadProfile"
                                ref="fileUploadAdminProfileForm" hidden type="file" @change="tempImageUploadAdmin()" />
                            <label for="uploadProfile">
                                <img class="bg-[#f7f3f3] rounded-[22px] w-[150px] h-[150px] border"
                                    src="https://i.pinimg.com/474x/44/95/12/4495124f97de536535464aa6558b4452.jpg" />
                                <div
                                    class="rounded-[22px] pl-[8px] pr-[8px] bg-[white] pt-[4px] pb-[4px] mt-[4px]  text-custom cursor-pointer">
                                    เปลี่ยนรูปภาพโปรไฟล์</div>
                            </label>
                            <div class="text-[18px] font-bold mt-[8px] text-custom">{{ NewProfileAdmin.name }}
                                {{ NewProfileAdmin.lastname }}</div>
                            <div
                                class="h-[24px] mt-[8px] text-custom rounded-[12px] font-bold text-[#003765] pl-[12px] pr-[12px] flex items-center bg-[#F0F8FF]">
                                {{ NewProfileAdmin.postion }}
                            </div>
                        </div>
                    </div>
                    <div class="w-[100%] ml-[24px] mt-[8px] pl-[18px] pr-[18px]">
                        <div class="grid grid-cols-4 w-[100%] gap-2 ">
                            <div class="mt-[8px] col-span-2" v-if="tab == 1">
                                <div class="text-custom text-[14px] text-[#003765]">อีเมลล์</div>
                                <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start"
                                    v-model="NewProfileAdmin.email" type="input" />
                            </div>
                            <div class="mt-[8px] col-span-2" v-if="tab == 1">
                                <div class="text-custom text-[14px] text-[#003765]">รหัสผ่าน</div>
                                <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start"
                                    v-model="NewProfileAdmin.password" type="password" />
                            </div>
                            <div class="mt-[8px] col-span-2">
                                <div class="text-custom text-[14px] text-[#003765]">ชื่อ</div>
                                <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start"
                                    v-model="NewProfileAdmin.firstName" type="input" />
                            </div>
                            <div class="mt-[8px] col-span-2">
                                <div class="text-custom text-[14px] text-[#003765]">นามสกุล</div>
                                <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start"
                                    v-model="NewProfileAdmin.lastName" type="input" />
                            </div>
                            <div class="mt-[8px] col-span-4">
                                <div class="text-custom text-[14px] text-[#003765]">ที่อยู่</div>
                                <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start"
                                    v-model="NewProfileAdmin.contactAddress" type="input" />
                            </div>
                            <!-- <div class="">
                                <ThailandAutoCompleteAdmin v-model="NewProfileAdmin.district" type="district"
                                    @select="selectAddressAdmin" label="ตำบล" size="small" placeholder="ตำบล..." />
                            </div>
                            <div class="">
                                <ThailandAutoCompleteAdmin v-model="NewProfileAdmin.amphoe" type="amphoe"
                                    @select="selectAddressAdmin" label="อำเภอ" size="small" placeholder="อำเภอ..." />
                            </div>
                            <div class="">
                                <ThailandAutoCompleteAdmin v-model="NewProfileAdmin.province" type="province"
                                    @select="selectAddressAdmin" label="จังหวัด" size="small" placeholder="จังหวัด..." />
                            </div>
                            <div class="">
                                <ThailandAutoCompleteAdmin v-model="NewProfileAdmin.zipcode" type="zipcode"
                                    @select="selectAddressAdmin" label="รหัสไปรษณีย์" size="small"
                                    placeholder="รหัสไปรษณีย์..." />
                            </div> -->
                            <div class="mt-[8px] col-span-2">
                                <div class="text-custom text-[14px] text-[#003765]">เบอร์ติดต่อ</div>
                                <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start"
                                    v-model="NewProfileAdmin.phone" type="input" />
                            </div>
                            <div class="mt-[8px] col-span-2">
                                <div class="text-custom text-[14px] text-[#003765]">ไลน์ติดต่อ</div>
                                <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start"
                                    v-model="NewProfileAdmin.lineID" type="input" />
                            </div>
                        </div>
                        <div class="mt-[44px] mb-[50px]">
                            <vs-button dark shadow @click="addAdmin()">
                                <div class="font-bold  text-custom">บันทึก</div>
                            </vs-button>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>
<script>
import axios from 'axios'
import ThailandAutoComplete from 'vue-thailand-address-autocomplete'
import ThailandAutoCompleteAdmin from 'vue-thailand-address-autocomplete'
export default {
    data() {
        return {
            tab: 1,
            profile_em: false,
            profile_admin: true,
            employee: [],
            UserBuilding: [],
            fileProfileForm: [],
            fileAdminProfileForm: [],
            NewProfileEm: {
                name: '',
                lastname: '',
                address: '',
                province: '',
                district: '',
                amphoe: '',
                zipcode: '',
                phone: '',
                email: '',
                line: '',
                position: '',
                building: '',
                facebook: ''
            },
            NewProfileAdmin: {
                firstName: '',
                lastName: '',
                contactAddress: '',
                province: '',
                district: '',
                amphoe: '',
                zipcode: '',
                phone: '',
                email: '',
                line: '',
                position: '',
                building: '',
                password: ''

            },
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
        this.getEmployer();
        this.getUser();
    },
    methods: {
        getEmployer() {
            const loading = this.$vs.loading()
            // fetch('https://api.resguru.app/api' + '/announcements?filters[building][id][$eq]=' + this.$store.state.building +'&poopulate=*')
            fetch(`https://api.resguru.app/api/building-employees?populate=*&filters[building][id][$eq]=${this.$store.state.building}`)
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getEmployer()", resp.data);
                    this.employee = resp.data
                }).finally(() => {
                    loading.close()
                })
        },
        getUser() {
            const loading = this.$vs.loading()
            // fetch('https://api.resguru.app/api' + '/announcements?filters[building][id][$eq]=' + this.$store.state.building +'&poopulate=*')
            fetch(`https://api.resguru.app/api/users?populate=*&filters[building][id][$eq]=${this.$store.state.building}`)
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getUser()", resp);
                    this.UserBuilding = resp
                }).finally(() => {
                    loading.close()
                })
        },
        removeAdmin(adminID) {
            if (confirm("Do you really want to delete this Admin?")) {
                axios.put(`https://api.resguru.app/api/buildings/${this.$store.state.building}`, {
                    data: {
                        users: { disconnect: [adminID] }
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
                        this.getUser();
                        this.$showNotification('#3A89CB', 'Update Success')
                    })
            }

        },
        deleteEmployee(employeeID) {
            if (confirm("Do you really want to delete this employee?")) {
                axios.delete(`https://api.resguru.app/api/building-employees/${employeeID}`)
                    .then((resp) => {
                        console.log(resp)
                    })
                    .catch(error => {
                        const errorMessage = error.message ? error.message : 'Error updating information';
                        this.$showNotification('danger', errorMessage);
                    })
                    .finally(() => {
                        this.getEmployer();
                        this.$showNotification('warn', 'Delete Employee Success')
                    })
            }
        },
        selectAddressEmployee(address) {
            this.NewProfileEm.district = address.district
            this.NewProfileEm.amphoe = address.amphoe
            this.NewProfileEm.province = address.province
            this.NewProfileEm.zipcode = address.zipcode
        },
        tempImageUploadEmployee() {
            this.fileProfileForm = this.$refs.fileUploadProfileForm.files[0]
        },
        addEmployee() {
            axios.post(`https://api.resguru.app/api/building-employees/`, {
                data: {
                    name: this.NewProfileEm.name,
                    lastname: this.NewProfileEm.lastname,
                    address: this.NewProfileEm.address,
                    province: this.NewProfileEm.province,
                    district: this.NewProfileEm.district,
                    subdistrict: this.NewProfileEm.amphoe,
                    postcode: this.NewProfileEm.zipcode,
                    phone: this.NewProfileEm.phone,
                    email: this.NewProfileEm.email,
                    line: this.NewProfileEm.line,
                    position: this.NewProfileEm.position,
                    building: this.$store.state.building,
                    facebook: this.NewProfileEm.facebook
                }
            }).then((resp) => {
                if (this.fileProfileForm.length != 0) {
                    let formData = new FormData();
                    formData.append("files", this.fileProfileForm);
                    formData.append("refId", String(resp.data.data.id));
                    formData.append("ref", "api::building-employee.building-employee");
                    formData.append("field", "employeeImage");

                    axios.post("https://api.resguru.app/api/upload", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }).then((result) => { console.log("Upload file", result) })
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
                .finally(() => {
                    this.$showNotification('#3A89CB', 'Create Employee Success')
                    this.profile_em = false
                    this.getEmployer();
                })
        },
        selectAddressAdmin(address) {
            this.NewProfileAdmin.district = address.district
            this.NewProfileAdmin.amphoe = address.amphoe
            this.NewProfileAdmin.province = address.province
            this.NewProfileAdmin.zipcode = address.zipcode
        },
        tempImageUploadAdmin() {
           
            this.fileAdminProfileForm = this.$refs.fileUploadAdminProfileForm.files[0] 
            console.log(this.fileAdminProfileForm);
        },
        addAdmin() {
            axios.post(`https://api.resguru.app/api/users/`, {
                role: 1,
                firstName: this.NewProfileAdmin.firstName,
                lastName: this.NewProfileAdmin.lastName,
                contactAddress: this.NewProfileAdmin.contactAddress,
                // province: this.NewProfileAdmin.province,
                // district: this.NewProfileAdmin.district,
                // amphoe: this.NewProfileAdmin.amphoe,
                // zipcode: this.NewProfileAdmin.zipcode,
                phone: this.NewProfileAdmin.phone,
                email: this.NewProfileAdmin.email,
                line: this.NewProfileAdmin.line,
                // position: 6,
                building: this.$store.state.building,
                username: this.NewProfileAdmin.email,
                password: this.NewProfileAdmin.password

            }).then((resp) => {
                console.log(resp);
                if (this.fileAdminProfileForm) {
                    console.log('object');
                    let formData = new FormData();
                    formData.append("files", this.fileAdminProfileForm);
                    formData.append("refId", String(resp.data.id));
                    formData.append("ref", "plugin::users-permissions.user");
                    formData.append("field", "imageProfile");

                    axios.post("https://api.resguru.app/api/upload", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }).then((result) => { console.log("Upload file", result) })
                        .catch((error) => {
                            console.log(error);
                        })
                }
                this.$showNotification('#3A89CB', 'Create Admin Success')
            }
            )
                .catch(error => {
                    const errorMessage = error.message ? error.message : 'Error updating information';
                    this.$showNotification('danger', errorMessage);
                })
                .finally(() => {
                    this.getUser();

                    this.profile_em = false
                })
        },
    }
}
</script>