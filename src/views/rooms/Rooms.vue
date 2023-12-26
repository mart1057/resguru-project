<template>
    <div class="p-[20px] pt-[20px]">
        <div class="h-[auto] bg-[white] rounded-[12px] pt-[28px] pl-[28px] pr-[28px] flex flex-col justify-end">
            <div>
                <div class="flex justify-between">
                    <div class="flex">
                        <div><svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_721_15844" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                    width="41" height="41">
                                    <rect width="41" height="41" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_721_15844)">
                                    <path
                                        d="M6.60148 35.1521C5.90283 35.1521 5.30109 34.8997 4.79628 34.3949C4.29147 33.8901 4.03906 33.2883 4.03906 32.5897V7.8188C4.03906 7.12015 4.29147 6.51841 4.79628 6.01357C5.30109 5.50875 5.90283 5.25635 6.60148 5.25635H17.7057C18.4043 5.25635 19.0061 5.50875 19.5109 6.01357C20.0157 6.51841 20.2681 7.12015 20.2681 7.8188V12.0897H34.3948C35.0934 12.0897 35.6952 12.3421 36.2 12.8469C36.7048 13.3517 36.9572 13.9535 36.9572 14.6521V32.5897C36.9572 33.2883 36.7048 33.8901 36.2 34.3949C35.6952 34.8997 35.0934 35.1521 34.3948 35.1521H6.60148ZM6.60148 32.5897H10.8724V28.3188H6.60148V32.5897ZM6.60148 25.7563H10.8724V21.4855H6.60148V25.7563ZM6.60148 18.923H10.8724V14.6521H6.60148V18.923ZM6.60148 12.0897H10.8724V7.8188H6.60148V12.0897ZM13.4348 32.5897H17.7057V28.3188H13.4348V32.5897ZM13.4348 25.7563H17.7057V21.4855H13.4348V25.7563ZM13.4348 18.923H17.7057V14.6521H13.4348V18.923ZM13.4348 12.0897H17.7057V7.8188H13.4348V12.0897ZM20.2681 32.5897H34.3948V14.6521H20.2681V18.923H24.0134V21.4855H20.2681V25.7563H24.0134V28.3188H20.2681V32.5897ZM27.7586 21.4855V18.923H30.321V21.4855H27.7586ZM27.7586 28.3188V25.7563H30.321V28.3188H27.7586Z"
                                        fill="#003765" />
                                </g>
                            </svg>
                        </div>
                        <div class="text-[24px] font-bold ml-[8px] flex justify-center items-center">ผังห้องพัก</div>
                    </div>
                    <div class="flex border pl-[14px] pr-[14px]  rounded-[12px] cursor-pointer "
                        @click="routeTo('/setting')">
                        <div class="flex justify-center items-center"><svg width="18" height="19" viewBox="0 0 18 19"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.3845 18.2081H7.60814C7.40247 18.2081 7.22442 18.1391 7.074 18.001C6.92357 17.8629 6.83308 17.691 6.80253 17.4854L6.53635 15.4158C6.29073 15.3336 6.03894 15.2184 5.78097 15.0703C5.52301 14.9222 5.29236 14.7636 5.08905 14.5943L3.17464 15.4017C2.97838 15.4781 2.78359 15.4857 2.59026 15.4246C2.39693 15.3635 2.24504 15.2425 2.13456 15.0615L0.756079 12.6606C0.645605 12.4796 0.611818 12.2863 0.654718 12.0806C0.697603 11.8749 0.801897 11.7092 0.967599 11.5835L2.62466 10.3301C2.6035 10.1938 2.58851 10.0569 2.5797 9.91937C2.57088 9.78187 2.56647 9.64496 2.56647 9.50864C2.56647 9.37818 2.57088 9.24567 2.5797 9.1111C2.58851 8.97654 2.6035 8.82934 2.62466 8.66952L0.967599 7.41614C0.801897 7.2904 0.697603 7.1247 0.654718 6.91903C0.611818 6.71338 0.645605 6.52006 0.756079 6.33908L2.13456 3.95579C2.23564 3.7654 2.38372 3.642 2.5788 3.5856C2.77388 3.52919 2.96955 3.53918 3.16581 3.61557L5.08022 4.41413C5.30117 4.23901 5.5371 4.07889 5.78801 3.93375C6.03893 3.78859 6.28544 3.67195 6.52753 3.58381L6.80253 1.51427C6.83308 1.3086 6.92357 1.13673 7.074 0.998647C7.22442 0.860552 7.40247 0.791504 7.60814 0.791504H10.3845C10.5902 0.791504 10.7697 0.860552 10.9231 0.998647C11.0764 1.13673 11.1684 1.3086 11.199 1.51427L11.4651 3.59263C11.7401 3.69252 11.989 3.80916 12.2117 3.94255C12.4344 4.07594 12.6592 4.23313 12.886 4.41413L14.8357 3.61557C15.0319 3.53918 15.2252 3.53007 15.4156 3.58823C15.606 3.64641 15.7564 3.76599 15.8669 3.94697L17.2454 6.33908C17.3559 6.52006 17.3897 6.71338 17.3468 6.91903C17.3039 7.1247 17.1996 7.2904 17.0339 7.41614L15.3416 8.69594C15.3745 8.84403 15.3924 8.98242 15.3953 9.1111C15.3983 9.23979 15.3997 9.36936 15.3997 9.49981C15.3997 9.62439 15.3968 9.75102 15.3909 9.87971C15.3851 10.0084 15.3639 10.1556 15.3275 10.3213L17.0021 11.5835C17.1737 11.7034 17.2795 11.8676 17.3194 12.0762C17.3594 12.2848 17.3242 12.4796 17.2137 12.6606L15.8352 15.0474C15.7247 15.2283 15.5705 15.3503 15.3724 15.4132C15.1744 15.476 14.9773 15.4693 14.781 15.3929L12.886 14.5855C12.6592 14.7665 12.4277 14.9266 12.1914 15.0659C11.9552 15.2052 11.7131 15.3189 11.4651 15.407L11.199 17.4854C11.1684 17.691 11.0764 17.8629 10.9231 18.001C10.7697 18.1391 10.5902 18.2081 10.3845 18.2081ZM9.0113 12.2498C9.77402 12.2498 10.423 11.9821 10.9583 11.4468C11.4936 10.9115 11.7613 10.2625 11.7613 9.49981C11.7613 8.73712 11.4936 8.08811 10.9583 7.55279C10.423 7.01749 9.77402 6.74984 9.0113 6.74984C8.23921 6.74984 7.58786 7.01749 7.05725 7.55279C6.52665 8.08811 6.26135 8.73712 6.26135 9.49981C6.26135 10.2625 6.52665 10.9115 7.05725 11.4468C7.58786 11.9821 8.23921 12.2498 9.0113 12.2498ZM9.0113 10.8748C8.62936 10.8748 8.30471 10.7411 8.03735 10.4738C7.76999 10.2064 7.6363 9.88176 7.6363 9.49981C7.6363 9.11787 7.76999 8.79322 8.03735 8.52586C8.30471 8.2585 8.62936 8.12482 9.0113 8.12482C9.39325 8.12482 9.7179 8.2585 9.98526 8.52586C10.2526 8.79322 10.3863 9.11787 10.3863 9.49981C10.3863 9.88176 10.2526 10.2064 9.98526 10.4738C9.7179 10.7411 9.39325 10.8748 9.0113 10.8748ZM8.08407 16.8332H9.88567L10.2153 14.3775C10.6831 14.2553 11.1105 14.0817 11.4978 13.8566C11.885 13.6316 12.2584 13.3422 12.618 12.9884L14.8956 13.9457L15.7982 12.3873L13.8097 10.8889C13.8861 10.6515 13.9381 10.4188 13.9657 10.1908C13.9933 9.96285 14.0071 9.73251 14.0071 9.49981C14.0071 9.26125 13.9933 9.03091 13.9657 8.80879C13.9381 8.58668 13.8861 8.35986 13.8097 8.12834L15.8158 6.61232L14.9132 5.05398L12.6092 6.0253C12.3025 5.69741 11.935 5.40772 11.5066 5.15624C11.0782 4.90473 10.6449 4.72669 10.2065 4.62209L9.91741 2.16648H8.09817L7.79498 4.61327C7.32723 4.72374 6.89534 4.89298 6.49929 5.12097C6.10325 5.34896 5.72542 5.64276 5.36581 6.00239L3.08824 5.05398L2.18567 6.61232L4.16532 8.08781C4.08893 8.30521 4.03546 8.53143 4.00491 8.76648C3.97435 9.00153 3.95907 9.24892 3.95907 9.50864C3.95907 9.7472 3.97435 9.98107 4.00491 10.2102C4.03546 10.4394 4.08599 10.6656 4.1565 10.8889L2.18567 12.3873L3.08824 13.9457L5.35699 12.9831C5.70485 13.3404 6.0768 13.6331 6.47285 13.861C6.86889 14.089 7.30666 14.2641 7.78616 14.3864L8.08407 16.8332Z"
                                    fill="#003765" />
                            </svg>
                        </div>
                        <div class="text-[14px] font-bold ml-[8px] flex justify-center items-center">ตั้งค่าผังห้อง</div>
                    </div>
                </div>
                <div class="flex">
                    <!-- <div class="h-[36px] w-[132px] bg-[#003765] flex cursor-pointer  justify-center rounded-[12px] mt-[12px]"
                        @click="create = true">
                        <div class="flex justify-center items-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.99968 12.6875C6.8048 12.6875 6.64155 12.6216 6.50993 12.4898C6.37831 12.3581 6.3125 12.1948 6.3125 12V7.18746H1.49998C1.30519 7.18746 1.14191 7.12155 1.01016 6.98973C0.878385 6.8579 0.8125 6.69455 0.8125 6.49968C0.8125 6.3048 0.878385 6.14155 1.01016 6.00993C1.14191 5.87831 1.30519 5.8125 1.49998 5.8125H6.3125V0.999977C6.3125 0.805185 6.37841 0.641904 6.51023 0.510133C6.64206 0.378378 6.80541 0.3125 7.00028 0.3125C7.19516 0.3125 7.35841 0.378378 7.49003 0.510133C7.62165 0.641904 7.68745 0.805185 7.68745 0.999977V5.8125H12.5C12.6948 5.8125 12.8581 5.87841 12.9898 6.01023C13.1216 6.14206 13.1875 6.30541 13.1875 6.50028C13.1875 6.69516 13.1216 6.85841 12.9898 6.99003C12.8581 7.12164 12.6948 7.18746 12.5 7.18746H7.68745V12C7.68745 12.1948 7.62155 12.3581 7.48973 12.4898C7.3579 12.6216 7.19455 12.6875 6.99968 12.6875Z"
                                    fill="white" />
                            </svg>
                        </div>
                        <div @click="create = true"
                            class="text-white font-bold ml-[8px]   flex justify-center items-center">เพิ่มการจอง</div>
                    </div> -->
                    <div class="flex justify-start items-center   mt-[5px]">
                        <input class="h-[36px] w-[250px] bg-[#F3F7FA] rounded-[12px]" placeholder="ค้นหาตามหมายเลขห้อง"
                            v-model="filter.search" @input="filterData" type="input" @keydown="handleKeyDown" />
                    </div>
                    <vs-tooltip bottom shadow not-hover v-model="popup_filter">
                        <div @click="popup_filter = true"
                            class="h-[36px] w-[132px]  flex  justify-center rounded-[12px] mt-[12px] ml-[14px] cursor-pointer">
                            <div class="flex justify-center items-center">
                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_3262_4178" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0"
                                        y="0" width="22" height="23">
                                        <rect y="0.5" width="22" height="22" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_3262_4178)">
                                        <path
                                            d="M10.0846 16.7707C9.88982 16.7707 9.72655 16.7048 9.59479 16.573C9.46302 16.4411 9.39714 16.2778 9.39714 16.0829C9.39714 15.888 9.46302 15.7248 9.59479 15.5932C9.72655 15.4615 9.88982 15.3957 10.0846 15.3957H11.9179C12.1127 15.3957 12.276 15.4616 12.4078 15.5935C12.5395 15.7253 12.6054 15.8886 12.6054 16.0835C12.6054 16.2784 12.5395 16.4416 12.4078 16.5733C12.276 16.7049 12.1127 16.7707 11.9179 16.7707H10.0846ZM3.66795 7.25144C3.47315 7.25144 3.30988 7.18553 3.17813 7.05369C3.04635 6.92186 2.98047 6.75851 2.98047 6.56364C2.98047 6.36876 3.04635 6.20551 3.17813 6.07389C3.30988 5.94227 3.47315 5.87646 3.66795 5.87646H18.3346C18.5294 5.87646 18.6927 5.94238 18.8245 6.07421C18.9562 6.20603 19.0221 6.36938 19.0221 6.56426C19.0221 6.75913 18.9562 6.92237 18.8245 7.05399C18.6927 7.18563 18.5294 7.25144 18.3346 7.25144H3.66795ZM6.41795 12.0111C6.22315 12.0111 6.05988 11.9451 5.92813 11.8133C5.79635 11.6815 5.73047 11.5181 5.73047 11.3233C5.73047 11.1284 5.79635 10.9651 5.92813 10.8335C6.05988 10.7019 6.22315 10.6361 6.41795 10.6361H15.5846C15.7794 10.6361 15.9427 10.702 16.0745 10.8338C16.2062 10.9657 16.2721 11.129 16.2721 11.3239C16.2721 11.5188 16.2062 11.682 16.0745 11.8136C15.9427 11.9452 15.7794 12.0111 15.5846 12.0111H6.41795Z"
                                            fill="#003765" />
                                    </g>
                                </svg>
                            </div>
                            <div class=" font-bold ml-[8px] flex justify-center items-center">ฟิลเตอร์</div>
                        </div>
                        <template #tooltip>
                            <div class="w-[100%]">
                                <div class="center">
                                    <vs-checkbox v-model="filter.select" val="Reserved" @input="getRoom()">
                                        <div class="text-custom">ห้องจอง</div>
                                    </vs-checkbox>
                                </div>
                                <div class="center">
                                    <vs-checkbox v-model="filter.select" val="Checked In" @input="getRoom()">
                                        <div class="text-custom">ห้องมีผู้เข้าพัก</div>
                                    </vs-checkbox>
                                </div>
                                <div class="center">
                                    <vs-checkbox v-model="filter.select" val="Available" @input="getRoom()">
                                        <div class="text-custom">ห้องว่าง</div>
                                    </vs-checkbox>
                                </div>
                                <div class="center">
                                    <vs-checkbox v-model="filter.select" val="Maintenance" @input="getRoom()">
                                        <div class="text-custom">ห้องรอซ่อม</div>
                                    </vs-checkbox>
                                </div>
                            </div>
                        </template>
                    </vs-tooltip>
                </div>
            </div>
            <div class="flex items-center mb-[8px] mt-[14px]">
                <div v-for="(data, i) in roomFloor">
                    <div class=" cursor-pointer mr-[8px]"
                        :class="tab_floor == i ? 'font-bold text-[16px]' : 'text-[#8396A6]'"
                        @click="tab_floor = i, filter.floor = data.id, getRoom(), name_floor = data.attributes.floorName">
                        ชั้น {{ data.attributes.floorName }}
                    </div>
                </div>
            </div>
        </div>

        <!-- //////////////////////////// card /////////////////////// -->
        <div class="mt-[24px]">
            <div class="text-[24px] font-bold">ชั้น {{ name_floor }} ({{ room.length }})</div>
            <div class="grid grid-cols-3 w-[100%] gap-4 mt-[14px] ">
                <div class="bg-[white] rounded-[16px] flex justify-between p-[14px] h-[160px] cursor-pointer"
                    @click="routeTo2('/room-detail', data.user_sign_contract?.users_permissions_user?.id, data.id, data.RoomNumber, data.roomStatus, data.user_sign_contract?.id),$route.meta.desc = 'ห้องพัก - ห้อง '+ $route.query.number_room ,$route.meta.title = 'ห้อง '+ $route.query.number_room "
                    v-for="data in room">
                    <div class="flex">

                        <div
                            v-if="data.user_sign_contract && data.user_sign_contract.users_permissions_user && data.user_sign_contract.users_permissions_user.imageProfile">
                            <img class="w-[136px] max-h-[100%] rounded-[22px]"
                                :src="'https://api.resguru.app'+data.user_sign_contract.users_permissions_user.imageProfile.url" />
                        </div>
                        <div class="w-[136px] h-[100%] rounded-[22px]" v-else>
                            <svg width="137" height="136" viewBox="0 0 137 136" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_721_16400)">
                                    <rect x="0.332031" width="136" height="136" rx="16" fill="#003765" />
                                    <path
                                        d="M31.4771 106.798L29.2152 103.539H26.7175V106.798H24V95.1099H29.0769C32.2093 95.1099 34.1701 96.7309 34.1701 99.3489C34.1701 101.1 33.2833 102.388 31.7537 103.037L34.3817 106.798H31.4689H31.4771ZM28.9305 97.3145H26.7175V101.391H28.9305C30.5902 101.391 31.4283 100.621 31.4283 99.357C31.4283 98.0926 30.5902 97.3226 28.9305 97.3226V97.3145Z"
                                        fill="white" />
                                    <path
                                        d="M45.4044 104.625V106.798H36.3164V95.1099H45.1847V97.2821H39.0176V99.819H44.4688V101.926H39.0176V104.634H45.4044V104.625Z"
                                        fill="white" />
                                    <path
                                        d="M46.6527 105.647L47.572 103.612C48.5646 104.334 50.0373 104.828 51.4448 104.828C53.0558 104.828 53.7067 104.293 53.7067 103.572C53.7067 101.383 46.8805 102.891 46.8805 98.5465C46.8805 96.5607 48.4914 94.9072 51.8272 94.9072C53.2999 94.9072 54.8132 95.2558 55.9034 95.9447L55.0654 97.9953C53.9752 97.3793 52.8524 97.0794 51.811 97.0794C50.2 97.0794 49.5817 97.6792 49.5817 98.4168C49.5817 100.573 56.3997 99.0814 56.3997 103.377C56.3997 105.331 54.7725 107 51.4204 107C49.5573 107 47.686 106.449 46.6445 105.647H46.6527Z"
                                        fill="white" />
                                    <path
                                        d="M70.9462 100.767H73.4277V105.509C72.1341 106.481 70.3604 106.992 68.6844 106.992C64.9987 106.992 62.2812 104.471 62.2812 100.945C62.2812 97.4197 64.9987 94.8989 68.7332 94.8989C70.7916 94.8989 72.5083 95.6041 73.6474 96.9171L71.9062 98.522C71.052 97.6223 70.0594 97.2008 68.8715 97.2008C66.5934 97.2008 65.0312 98.7165 65.0312 100.937C65.0312 103.158 66.5934 104.674 68.8389 104.674C69.5793 104.674 70.2628 104.544 70.9543 104.171V100.751L70.9462 100.767Z"
                                        fill="white" />
                                    <path
                                        d="M75.8438 101.659V95.1099H78.5612V101.554C78.5612 103.774 79.5294 104.69 81.1729 104.69C82.8164 104.69 83.7846 103.774 83.7846 101.554V95.1099H86.4695V101.659C86.4695 105.096 84.4924 107 81.1566 107C77.8208 107 75.8438 105.096 75.8438 101.659Z"
                                        fill="white" />
                                    <path
                                        d="M96.6294 106.798L94.3676 103.539H91.8698V106.798H89.1523V95.1099H94.2293C97.3617 95.1099 99.3225 96.7309 99.3225 99.3489C99.3225 101.1 98.4356 102.388 96.906 103.037L99.534 106.798H96.6213H96.6294ZM94.0828 97.3145H91.8698V101.391H94.0828C95.7426 101.391 96.5806 100.621 96.5806 99.357C96.5806 98.0926 95.7426 97.3226 94.0828 97.3226V97.3145Z"
                                        fill="white" />
                                    <path
                                        d="M101.375 101.659V95.1099H104.092V101.554C104.092 103.774 105.061 104.69 106.704 104.69C108.348 104.69 109.316 103.774 109.316 101.554V95.1099H112.001V101.659C112.001 105.096 110.024 107 106.688 107C103.352 107 101.375 105.096 101.375 101.659Z"
                                        fill="white" />
                                    <path
                                        d="M91.6191 79.9444L81.0503 64.8443C87.1768 62.2182 90.7485 57.0551 90.7485 50.0117C90.7485 39.4748 82.8647 32.9663 70.2618 32.9663H63.875C65.372 35.0169 66.2589 37.5377 66.2589 40.261C66.2589 40.7879 66.2263 41.3147 66.1531 41.8254H69.6516C76.3232 41.8254 79.6916 44.8486 79.6916 50.0117C79.6916 55.1747 76.3151 58.198 69.6516 58.198H65.1768V66.8625H70.7988L79.8868 79.9444L81.4978 82.2706H93.23L91.6028 79.9444H91.6191Z"
                                        fill="white" />
                                    <path
                                        d="M63.3545 40.2613C63.3545 34.5957 58.7413 30 53.0542 30C47.3671 30 42.7539 34.5957 42.7539 40.2613C42.7539 44.6462 45.5283 48.3827 49.4174 49.8498V82.2627H62.2724V73.6063H56.6829V66.8546H62.2724V58.1982H56.6829V49.8498C60.572 48.3827 63.3464 44.6543 63.3464 40.2613H63.3545ZM53.0542 39.4832C51.5328 39.4832 50.3042 38.2593 50.3042 36.7436C50.3042 35.2279 51.5328 34.004 53.0542 34.004C54.5757 34.004 55.8042 35.2279 55.8042 36.7436C55.8042 38.2593 54.5757 39.4832 53.0542 39.4832Z"
                                        fill="#F4D55E" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_721_16400">
                                        <rect width="136" height="136" fill="white" transform="translate(0.332031)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div class="ml-[14px]">

                            <div class="text-[18px] font-bold text-[#141629]">ห้อง {{ data.RoomNumber }}</div>

                            <div class="text-[14px] mt-[12px] font-bold text-[#003765]">{{
                                data.user_sign_contract && data.user_sign_contract.users_permissions_user ?
                                data.user_sign_contract.users_permissions_user.firstName
                                : "" }} {{ data.user_sign_contract && data.user_sign_contract.users_permissions_user ?
        data.user_sign_contract.users_permissions_user.lastName
        : "" }}</div>
                        </div>
                    </div>
                    <div :class="data.roomStatus == 'Checked In' ? 'text-[#0B9A3C] bg-[#CFFBDA]' : 'text-[#003765] bg-[#F0F8FF]'"
                        class="h-[36px] ml-[8px] w-[auto] flex items-center justify-center pl-[12px] pr-[12px] rounded-[12px] pb-[4px] pt-[4px] ">
                        <!-- {{ data.user_sign_contract ? "มีผู้เข้าพัก" : "ห้องว่าง" }} -->
                        {{ data.roomStatus == 'Reserved' ? 'ห้องจอง' :
                            data.roomStatus == 'Checked In' ? "มีผู้เข้าพัก" :
                                data.roomStatus == 'Maintenance' ? "รอซ่อม" : "ห้องว่าง" }}
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
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                            v-model="firstName" required />
                                    </div>
                                    <div class="col-span-3  ml-[8px]">
                                        <div>สกุล</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                            v-model="lastName" required />
                                    </div>
                                    <div class="ml-[8px]">
                                        <div>ชื่อเล่น</div>
                                        <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                            v-model="nickName" required />
                                    </div>
                                </div>
                            </dvi>
                        </div>
                        <div class="w-[100%] flex mt-[14px]">
                            <div class="w-[30%] text-custom flex items-start"></div>
                            <div class="grid grid-cols-8  text-custom w-[70%] ">
                                <div class="col-span-4">
                                    <div>Email <span class="text-[#5C6B79]">สำหรับล็อกอินเข้าใช้แอปพลิเคชัน</span></div>
                                    <input type="email" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                        v-model="email" required />
                                </div>
                                <div class="col-span-4">
                                    <div>รหัสบัตรประชาชน <span class="text-[#5C6B79]"></span></div>
                                    <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                        v-model="idCard" required />
                                </div>
                                <div class="col-span-4">
                                    <div>เบอร์โทรศัพท์ <span class="text-[#5C6B79]">(ไม่ต้องใส่ขีด ตัวอย่าง.
                                            0815578945)</span></div>
                                    <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                        v-model="phoneNumber" required />
                                </div>
                                <div class="col-span-4  ml-[8px]">
                                    <div>เลือกห้อง</div>
                                    <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                        v-model="roomNumber" required />
                                </div>
                            </div>
                        </div>
                        <div class="w-[100%] flex mt-[14px]">
                            <div class="w-[30%] text-custom flex items-start"></div>
                            <div class="grid grid-cols-6  text-custom w-[70%] ">
                                <div class="col-span-2">
                                    <div>วัน/เดือน/ปีเกิด (ค.ศ.)</div>
                                    <input type="date"
                                        class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA] mt-[6px] pl-[12px] pr-[12px]"
                                        v-model="birthDate" required>
                                </div>

                            </div>
                        </div>
                        <div class="w-[100%] flex mt-[16px]">
                            <div class="w-[30%] text-custom flex items-start">รายละเอียดการจอง</div>
                            <div class="grid grid-cols-8  text-custom w-[70%] ">
                                <div class="col-span-4">
                                    <div>วันที่เข้าพัก</div>
                                    <input type="date"
                                        class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA] mt-[6px] pl-[12px] pr-[12px]"
                                        v-model="checkInDate" required />
                                </div>
                                <div class="col-span-4  ml-[8px]">
                                    <div>เลือกห้อง</div>
                                    <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                        v-model="bookRoom" required />
                                </div>
                            </div>
                        </div>
                        <div class="w-[100%] flex mt-[14px]">
                            <div class="w-[30%] text-custom flex items-start">รายละเอียดการชำระเงิน</div>
                            <div class="grid grid-cols-8  text-custom w-[70%] ">
                                <div class="col-span-4">
                                    <div>ค่ามัดจำ (บาท)</div>
                                    <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                        v-model="earnest" required />
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
                        <vs-button @click="bookRoomContract()" color="#003765">
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

export default {
    data() {
        return {
            create: false,
            popup_filter: false,
            room: [],
            firstName: "",
            lastName: "",
            nickName: "",
            email: "",
            idCard: "",
            tab_floor: '0',
            name_floor: '',
            phoneNumber: "",
            roomNumber: "",
            birthDate: "",
            checkInDate: "",
            bookRoom: "",
            earnest: 0,
            floorRoom: [],
            filter: {
                select: [],
                checkSelect: [],
                floor: '',
                search: '',
            },
        }

    },
    mounted() {
        this.filter.checkSelect = ['Checked In', 'Available', 'Reserved', 'Maintenance']
        console.log("State.Building", this.$store.state.building)
        // 
        this.getFloorRoom();
    },
    created() {
        const loading = this.$vs.loading({
            opacity: 1,
        })
        setTimeout(() => {
            loading.close()
        }, 1000)
    },
    methods: {
        routeTo(path) {
            this.$router.push({
                path: path + '?tab=2'
            })
        },
        routeTo2(path, id, id_room, number_room, status, id_contract) {
            this.$router.push({
                path: path,
                query: { id_user: id, id_room: id_room, number_room: number_room, status: status, id_contract: id_contract, tab: 1 },
            })
        },
        getRoom(code) {
            this.room = []
            const output = this.filter.select.length > 0 ? this.filter.select.join(',') : this.filter.checkSelect.join(',');
            const loading = this.$vs.loading()
            fetch('https://api.resguru.app/api/getRoom?buildingid=' + this.$store.state.building + '&buildingFloor=' + this.filter.floor  + '&roomStatus=' + output)
                .then(response => response.json())
                .then((resp) => {
                    if (code == 8) {
                        this.room = resp.data.filter(item =>
                            item.RoomNumber.toLowerCase().includes(this.filter.search.toLowerCase()),
                        );
                    }
                    else {
                        this.room = resp.data
                    }
                }).finally(() => {
                    loading.close()
                })
        },
        getFloorRoom(code) {
            // const loading = this.$vs.loading()
            fetch('https://api.resguru.app/api' + '/building-floors?filters[building][id][$eq]=' + this.$store.state.building + '&populate=deep,2')
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getRoomFloor()", resp.data);
                    this.roomFloor = resp.data
                    if (resp.data[0]) {
                        this.filter.floor = resp.data[0].id
                        this.name_floor = resp.data[0].attributes.floorName
                    }
                }).finally(() => {
                    this.getRoom()
                    // loading.close()
                })
        },
        bookRoomContract() {
            axios.post('https://api.resguru.app/api/auth/local/register', {
                firstName: this.firstName,
                lastName: this.lastName,
                nickName: this.nickName,
                email: this.email,
                idCard: this.idCard,
                phone: this.phoneNumber,
                dateOfBirth: this.birthDate,
                username: this.email,
                password: this.idCard,
                role: 2,
            }).then((res) => {
                console.log("Result from create user", res)
                axios.post('https://api.resguru.app/api/user-sign-contracts', {
                    data: {
                        room: this.roomNumber,
                        checkInDate: this.checkInDate,
                        bookRoom: this.bookRoom,
                        earnest: this.earnest,
                        users_permissions_user: res.data.user.id
                    }
                }).then(this.openNotificationBookRoom('top-right', '#3A89CB', 6000))
                    .catch(function (err) {
                        console.log(err)
                    })
            }).catch(function (err) {
                console.log(err)
            })

        }, openNotificationBookRoom(position = null, color) {
            const noti = this.$vs.notification({
                sticky: true,
                color,
                position,
                title: 'Book Room Success',
            }).then(
                setTimeout(() => location.reload(), 1500)
            )
        },
        filterData() {
            this.room = this.room.filter(item =>
                item.RoomNumber.toLowerCase().includes(this.filter.search.toLowerCase()),
            );
            if (this.filter.search == '') {
                this.getRoom()
            }
        },
        handleKeyDown(event) {
            // Check if the pressed key is the backspace key
            if (event.keyCode === 8) {
                this.getRoom(8)
                // Perform your desired action here when backspace is pressed
            }
        },
    }


}
</script>
<style>
.text-custom {
    font-family: 'Prompt';
}

#mr {
    width: 90px;
}

/* .vs-select__input{
    height: 36px !important;
    width: 350px !important;
} */
</style>