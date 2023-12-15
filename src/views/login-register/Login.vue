<template>
    <div id="login">
        <div class="h-[100%] flex" v-if="tab == 1">
            <div class="flex flex-col justify-between w-[30%] h-[100vh!important] ">
                <div>
                    <img :src="Logo01" />
                    <!-- <div class="text-[white] flex mt-[16px] cursor-pointer">
                        <div class="flex justify-center items-center mr-[8px]"><svg width="7" height="12" viewBox="0 0 7 12"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.338101 5.99962C0.338101 5.88552 0.357334 5.77495 0.3958 5.6679C0.434267 5.56085 0.500293 5.46053 0.593876 5.36695L5.10348 0.857324C5.24834 0.712458 5.42142 0.642591 5.6227 0.647724C5.82398 0.652841 5.99706 0.727841 6.14193 0.872724C6.28679 1.01759 6.35923 1.19322 6.35923 1.39962C6.35923 1.60602 6.28679 1.78166 6.14193 1.92652L2.06883 5.99962L6.1573 10.0881C6.30217 10.233 6.37204 10.406 6.36693 10.6073C6.36179 10.8086 6.28679 10.9817 6.14193 11.1265C5.99706 11.2714 5.82142 11.3438 5.615 11.3438C5.4086 11.3438 5.23297 11.2714 5.0881 11.1265L0.593876 6.6323C0.500293 6.53872 0.434267 6.44 0.3958 6.33615C0.357334 6.23232 0.338101 6.12014 0.338101 5.99962Z"
                                    fill="white" />
                            </svg></div>
                        <div class="flex justify-center items-center">ย้อนกลับ</div>
                    </div> -->
                </div>
                <div class="ml-[-20px]">
                    <svg width="307" height="323" viewBox="0 0 307 323" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.1">
                            <path
                                d="M293.028 461.511L202.349 322C254.923 297.766 285.545 250.035 285.545 184.899C285.545 87.4955 217.941 27.3799 109.862 27.3799H55.1055C67.9527 46.325 75.5612 69.6215 75.5612 94.7924C75.5612 99.6793 75.2494 104.499 74.6881 109.252H104.686C161.875 109.252 190.812 137.168 190.812 184.899C190.812 232.63 161.875 260.545 104.686 260.545H66.3312V340.61H114.539L192.496 461.511L206.341 483H306.998L293.028 461.511Z"
                                fill="white" />
                            <path
                                d="M50.618 94.7925C50.618 42.4424 11.0785 0 -37.691 0C-86.4605 0 -126 42.4424 -126 94.7925C-126 135.36 -102.239 169.837 -68.8736 183.426V483H41.3879V403.002H-6.50848V340.61H41.3879V260.612H-6.50848V183.493C26.8569 169.97 50.618 135.427 50.618 94.8595V94.7925ZM-37.691 87.6295C-50.7253 87.6295 -61.265 76.316 -61.265 62.3247C-61.265 48.3335 -50.7253 37.02 -37.691 37.02C-24.6567 37.02 -14.117 48.3335 -14.117 62.3247C-14.117 76.316 -24.6567 87.6295 -37.691 87.6295Z"
                                fill="white" />
                        </g>
                    </svg>
                </div>
            </div>
            <div class="w-[40%]  flex flex-col justify-center items-center">
                <div class="text-[white] text-[28px]">ลงชื่อเข้าสู่ระบบ</div>
                <div
                    class=" mt-[120px] h-[363px] text-[12px] w-[423px] rounded-[20px] bg-[white] pt-[40px] pl-[30px] pr-[30px] pb-[10px]">
                    <div>
                        <div>
                            <div class="font-bold">Email</div>
                            <div class="">
                                <input type="email" placeholder="Email" v-model="dataLogin.user"
                                    class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                            </div>
                        </div>
                        <div class="mt-[10px]">
                            <div class="font-bold">Password</div>
                            <div class="">
                                <input type="password" placeholder="*********" v-model="dataLogin.pass"
                                    class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="flex justify-center items-center">
                                <div>
                                    <vs-checkbox color="#003765" v-model="option">
                                        <div class="text-[12px]">Remember me</div>
                                    </vs-checkbox>
                                </div>
                            </div>
                            <div class="text-[#D44769] text-center flex justify-center items-center cursor-pointer"
                                @click="tab = 3">Forgot
                                password</div>
                        </div>
                    </div>
                    <div v-if="$store.state.err" class="flex justify-center text-[red]">
                        <div>{{ dataRegister.err }}</div>
                    </div>
                    <div class="mt-[18px]">
                        <button @click="loginSubmit()"
                            class="bg-[#003765] w-[100%] h-[38px] rounded-[12px] text-center text-[white]">เข้าสู่ระบบ</button>
                        <button @click="tab = 2"
                            class="bg-[#3A89CB] w-[100%] h-[38px] rounded-[12px] text-center text-[white] mt-[8px]">คุณยังไม่มีบัญชี
                            ? กดสร้างบัญชีที่นี่</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[100%] flex" v-if="tab == 2">
            <div class="flex flex-col justify-between h-[100vh!important] w-[30%]">
                <div>
                    <img :src="Logo01" />
                    <!-- <div class="text-[white] flex mt-[16px] cursor-pointer">
                        <div class="flex justify-center items-center mr-[8px]"><svg width="7" height="12" viewBox="0 0 7 12"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.338101 5.99962C0.338101 5.88552 0.357334 5.77495 0.3958 5.6679C0.434267 5.56085 0.500293 5.46053 0.593876 5.36695L5.10348 0.857324C5.24834 0.712458 5.42142 0.642591 5.6227 0.647724C5.82398 0.652841 5.99706 0.727841 6.14193 0.872724C6.28679 1.01759 6.35923 1.19322 6.35923 1.39962C6.35923 1.60602 6.28679 1.78166 6.14193 1.92652L2.06883 5.99962L6.1573 10.0881C6.30217 10.233 6.37204 10.406 6.36693 10.6073C6.36179 10.8086 6.28679 10.9817 6.14193 11.1265C5.99706 11.2714 5.82142 11.3438 5.615 11.3438C5.4086 11.3438 5.23297 11.2714 5.0881 11.1265L0.593876 6.6323C0.500293 6.53872 0.434267 6.44 0.3958 6.33615C0.357334 6.23232 0.338101 6.12014 0.338101 5.99962Z"
                                    fill="white" />
                            </svg></div>
                        <div class="flex justify-center items-center">ย้อนกลับ</div>
                    </div> -->
                </div>
                <div class="ml-[-20px] ">
                    <svg width="307" height="323" viewBox="0 0 307 323" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.1">
                            <path
                                d="M293.028 461.511L202.349 322C254.923 297.766 285.545 250.035 285.545 184.899C285.545 87.4955 217.941 27.3799 109.862 27.3799H55.1055C67.9527 46.325 75.5612 69.6215 75.5612 94.7924C75.5612 99.6793 75.2494 104.499 74.6881 109.252H104.686C161.875 109.252 190.812 137.168 190.812 184.899C190.812 232.63 161.875 260.545 104.686 260.545H66.3312V340.61H114.539L192.496 461.511L206.341 483H306.998L293.028 461.511Z"
                                fill="white" />
                            <path
                                d="M50.618 94.7925C50.618 42.4424 11.0785 0 -37.691 0C-86.4605 0 -126 42.4424 -126 94.7925C-126 135.36 -102.239 169.837 -68.8736 183.426V483H41.3879V403.002H-6.50848V340.61H41.3879V260.612H-6.50848V183.493C26.8569 169.97 50.618 135.427 50.618 94.8595V94.7925ZM-37.691 87.6295C-50.7253 87.6295 -61.265 76.316 -61.265 62.3247C-61.265 48.3335 -50.7253 37.02 -37.691 37.02C-24.6567 37.02 -14.117 48.3335 -14.117 62.3247C-14.117 76.316 -24.6567 87.6295 -37.691 87.6295Z"
                                fill="white" />
                        </g>
                    </svg>
                </div>
            </div>
            <div class="w-[40%]  flex flex-col justify-center items-center mt-[-40px]">
                <div class="text-[white] text-[28px] mt-[20px]">สร้างบัญชี</div>
                <div
                    class=" mt-[20px]  text-[12px] w-[549px] rounded-[20px] bg-[white] pt-[14px] pl-[30px] pr-[30px] pb-[14px]">
                    <div>
                        <div class="grid grid-cols-2 w-[100%] gap-4 mt-[10px] ">
                            <div>
                                <div class="font-bold">ชื่อ</div>
                                <div class="">
                                    <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                        v-model="dataRegister.name" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">นามสกุล</div>
                                <div class="">
                                    <input type="input" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                        v-model="dataRegister.last" />
                                </div>
                            </div>

                        </div>
                        <div class="font-bold mt-[10px]">วัน/เดือน/ปีเกิด (ค.ศ)</div>
                        <input type="date" placeholder="CID"
                            class="h-[36px] w-[100%] pl-[18px] pr-[18px] rounded-[12px] bg-[#F3F7FA]"
                            v-model="dataRegister.birth" />
                        <div class="mt-[10px]">
                            <div class="font-bold">Citicen ID</div>
                            <div class="">
                                <input type="input" placeholder="CID" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]"
                                    v-model="dataRegister.CID" />
                            </div>
                        </div>
                        <div class="mt-[10px]">
                            <div class="font-bold">Email</div>
                            <div class="">
                                <input type="email" placeholder="Email"
                                    class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" v-model="dataRegister.email" />
                            </div>
                        </div>
                        <div class="mt-[10px]">
                            <div class="font-bold">เบอร์โทรศัพท์</div>
                            <div class="">
                                <input type="input" placeholder="08x-xxx-xxxx" @input="onPhoneNumberInput"
                                    class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" v-model="dataRegister.phone" />
                            </div>
                        </div>
                        <div class="mt-[10px]">
                            <div class="font-bold">รหัสผ่าน</div>
                            <div class="">
                                <input type="password" placeholder="*********"
                                    class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" v-model="dataRegister.pass" />
                            </div>
                        </div>
                        <div class="mt-[10px]">
                            <div class="font-bold">ยืนยันรหัสผ่าน</div>
                            <div class="">
                                <input type="password" placeholder="*********"
                                    class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" v-model="dataRegister.pass_con" />
                            </div>
                        </div>
                        <div class="mt-[10px]">
                            <div class="font-bold">เพศ</div>
                            <div class="flex">
                                <div @click="dataRegister.sex = true"
                                    class="h-[41px] w-[78px] rounded-[12px]  border items-center flex justify-around cursor-pointer"
                                    :class="dataRegister.sex ? 'bg-[#008EF4] text-[white]' : '#fffff'">
                                    <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_902_17193" style="mask-type:alpha" maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_902_17193)">
                                                <path
                                                    d="M9.50085 19.75C8.03745 19.75 6.79646 19.241 5.77788 18.223C4.75929 17.2049 4.25 15.9642 4.25 14.5009C4.25 13.0375 4.75908 11.7965 5.77725 10.7779C6.79543 9.75929 8.03634 9.25 9.49998 9.25C10.0628 9.25 10.6093 9.34198 11.1394 9.52595C11.6695 9.70993 12.166 9.96859 12.6288 10.3019L17.1808 5.74995H15C14.7875 5.74995 14.6094 5.67805 14.4656 5.53425C14.3219 5.39043 14.25 5.21223 14.25 4.99965C14.25 4.78705 14.3219 4.60896 14.4656 4.46538C14.6094 4.32179 14.7875 4.25 15 4.25H18.8461C19.1022 4.25 19.3169 4.33662 19.4901 4.50985C19.6633 4.68308 19.75 4.89774 19.75 5.15383V8.99998C19.75 9.21248 19.6781 9.3906 19.5343 9.53435C19.3904 9.67808 19.2122 9.74995 18.9997 9.74995C18.7871 9.74995 18.609 9.67808 18.4654 9.53435C18.3218 9.3906 18.25 9.21248 18.25 8.99998V6.82878L13.698 11.3461C14.0211 11.8192 14.2772 12.3203 14.4663 12.8495C14.6554 13.3787 14.75 13.9288 14.75 14.5C14.75 15.9636 14.241 17.2045 13.223 18.2227C12.2049 19.2409 10.9642 19.75 9.50085 19.75ZM9.49843 10.75C8.46228 10.75 7.57849 11.1162 6.84708 11.8486C6.11566 12.5811 5.74995 13.4654 5.74995 14.5015C5.74995 15.5377 6.11618 16.4215 6.84863 17.1529C7.58108 17.8843 8.46538 18.25 9.50153 18.25C10.5377 18.25 11.4215 17.8838 12.1529 17.1513C12.8843 16.4189 13.25 15.5346 13.25 14.4984C13.25 13.4623 12.8838 12.5785 12.1513 11.8471C11.4189 11.1157 10.5346 10.75 9.49843 10.75Z"
                                                    :fill="dataRegister.sex ? 'white' : '#008EF4'" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div>ชาย</div>
                                </div>
                                <div @click="dataRegister.sex = false"
                                    class="h-[41px] ml-[14px] w-[78px] rounded-[12px]  border items-center flex justify-around cursor-pointer"
                                    :class="dataRegister.sex == false ? 'bg-[#CC00FF] text-[white]' : '#fffff'">
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_902_17246" style="mask-type:alpha" maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_902_17246)">
                                                <path
                                                    d="M11.25 14.6884C9.95257 14.5 8.87821 13.9125 8.02692 12.9259C7.17564 11.9394 6.75 10.7872 6.75 9.4692C6.75 8.01677 7.26186 6.78379 8.28558 5.77028C9.30928 4.75676 10.5474 4.25 12 4.25C13.4525 4.25 14.6907 4.75676 15.7144 5.77028C16.7381 6.78379 17.25 8.01677 17.25 9.4692C17.25 10.7872 16.8243 11.9394 15.973 12.9259C15.1217 13.9125 14.0474 14.5 12.7499 14.6884V17.25H14C14.2125 17.25 14.3906 17.3219 14.5343 17.4657C14.6781 17.6095 14.75 17.7877 14.75 18.0003C14.75 18.2129 14.6781 18.391 14.5343 18.5346C14.3906 18.6782 14.2125 18.75 14 18.75H12.7499V20C12.7499 20.2125 12.678 20.3906 12.5342 20.5343C12.3904 20.6781 12.2122 20.75 11.9997 20.75C11.7871 20.75 11.609 20.6781 11.4654 20.5343C11.3218 20.3906 11.25 20.2125 11.25 20V18.75H9.99997C9.78747 18.75 9.60936 18.6781 9.46563 18.5343C9.32188 18.3904 9.25 18.2122 9.25 17.9997C9.25 17.7871 9.32188 17.609 9.46563 17.4654C9.60936 17.3218 9.78747 17.25 9.99997 17.25H11.25V14.6884ZM12.0015 13.25C13.0377 13.25 13.9215 12.8838 14.6529 12.1513C15.3843 11.4189 15.75 10.5346 15.75 9.49843C15.75 8.46228 15.3838 7.57849 14.6513 6.84708C13.9189 6.11566 13.0346 5.74995 11.9984 5.74995C10.9623 5.74995 10.0785 6.11618 9.34707 6.84863C8.61566 7.58108 8.24995 8.46538 8.24995 9.50153C8.24995 10.5377 8.61618 11.4215 9.34863 12.1529C10.0811 12.8843 10.9654 13.25 12.0015 13.25Z"
                                                    :fill="dataRegister.sex == false ? 'white' : '#CC00FF'" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div>หญิง</div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-[10px]">
                            <vs-checkbox color="#003765" v-model="dataRegister.check">
                                <div class="text-[12px]">คุณได้อ่านและยอมรับ
                                    นโยบายคุ้มครองความเป็นส่วนตัวและเงื่อนไขการใช้บริการ</div>
                            </vs-checkbox>
                        </div>
                    </div>
                    <div v-if="dataRegister.err" class="flex justify-center text-[red]">
                        <div>{{ dataRegister.err }}</div>
                    </div>
                    <div class="mt-[18px]">
                        <button @click="registerSubmit()"
                            class="bg-[#003765] w-[100%] h-[38px] rounded-[12px] text-center text-[white]">สร้างบัญชี</button>
                        <button @click="tab = 1"
                            class="bg-[#3A89CB] w-[100%] h-[38px] rounded-[12px] text-center text-[white] mt-[8px]">คุณมีบัญชีอยู่แล้ว
                            ? เข้าสู่ระบบที่นี่</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[100%] flex" v-if="tab == 3">
            <div class="flex flex-col justify-between w-[30%] h-[100vh!important] ">
                <div @click="tab = 1">
                    <img :src="Logo01" />
                    <div class="text-[white] flex mt-[16px] cursor-pointer">
                        <div class="flex justify-center items-center mr-[8px]"><svg width="7" height="12" viewBox="0 0 7 12"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.338101 5.99962C0.338101 5.88552 0.357334 5.77495 0.3958 5.6679C0.434267 5.56085 0.500293 5.46053 0.593876 5.36695L5.10348 0.857324C5.24834 0.712458 5.42142 0.642591 5.6227 0.647724C5.82398 0.652841 5.99706 0.727841 6.14193 0.872724C6.28679 1.01759 6.35923 1.19322 6.35923 1.39962C6.35923 1.60602 6.28679 1.78166 6.14193 1.92652L2.06883 5.99962L6.1573 10.0881C6.30217 10.233 6.37204 10.406 6.36693 10.6073C6.36179 10.8086 6.28679 10.9817 6.14193 11.1265C5.99706 11.2714 5.82142 11.3438 5.615 11.3438C5.4086 11.3438 5.23297 11.2714 5.0881 11.1265L0.593876 6.6323C0.500293 6.53872 0.434267 6.44 0.3958 6.33615C0.357334 6.23232 0.338101 6.12014 0.338101 5.99962Z"
                                    fill="white" />
                            </svg></div>
                        <div class="flex justify-center items-center">ย้อนกลับ</div>
                    </div>
                </div>
                <div class="ml-[-20px]">
                    <svg width="307" height="323" viewBox="0 0 307 323" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.1">
                            <path
                                d="M293.028 461.511L202.349 322C254.923 297.766 285.545 250.035 285.545 184.899C285.545 87.4955 217.941 27.3799 109.862 27.3799H55.1055C67.9527 46.325 75.5612 69.6215 75.5612 94.7924C75.5612 99.6793 75.2494 104.499 74.6881 109.252H104.686C161.875 109.252 190.812 137.168 190.812 184.899C190.812 232.63 161.875 260.545 104.686 260.545H66.3312V340.61H114.539L192.496 461.511L206.341 483H306.998L293.028 461.511Z"
                                fill="white" />
                            <path
                                d="M50.618 94.7925C50.618 42.4424 11.0785 0 -37.691 0C-86.4605 0 -126 42.4424 -126 94.7925C-126 135.36 -102.239 169.837 -68.8736 183.426V483H41.3879V403.002H-6.50848V340.61H41.3879V260.612H-6.50848V183.493C26.8569 169.97 50.618 135.427 50.618 94.8595V94.7925ZM-37.691 87.6295C-50.7253 87.6295 -61.265 76.316 -61.265 62.3247C-61.265 48.3335 -50.7253 37.02 -37.691 37.02C-24.6567 37.02 -14.117 48.3335 -14.117 62.3247C-14.117 76.316 -24.6567 87.6295 -37.691 87.6295Z"
                                fill="white" />
                        </g>
                    </svg>
                </div>
            </div>
            <div class="w-[40%]  flex flex-col justify-center items-center">
                <div class="text-[white] text-[28px]">Forgot password</div>
                <div
                    class=" flex flex-col justify-center  mt-[60px]  text-[12px] w-[423px] rounded-[20px] bg-[white] pt-[40px] pl-[30px] pr-[30px] pb-[10px]">
                    <div>
                        <div>
                            <div class="font-bold">Email</div>
                            <div class="">
                                <input type="email" placeholder="Email" v-model="email_forgot"
                                    class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                            </div>
                        </div>
                        <!-- <div class="mt-[10px]">
                            <div class="font-bold">Password</div>
                            <div class="">
                                <input type="password" placeholder="*********" v-model="dataLogin.pass"
                                    class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                            </div>
                        </div> -->
                        <!-- <div class="flex justify-between">
                            <div class="flex justify-center items-center">
                                <div>
                                    <vs-checkbox color="#003765" v-model="option">
                                        <div class="text-[12px]">Remember me</div>
                                    </vs-checkbox>
                                </div>
                            </div>
                            <div class="text-[#D44769] text-center flex justify-center items-center">Forgot password</div>
                        </div> -->
                    </div>
                    <div v-if="errorsForgotPass" class="flex justify-center text-[red]">
                        <div>{{ errorsForgotPass }}</div>
                    </div>
                    <div class="mt-[18px]">
                        <button @click="forgotPass()"
                            class="bg-[#003765] w-[100%] h-[38px] rounded-[12px] mb-[18px] text-center text-[white]">ยืนยัน</button>
                        <!-- <button @click="tab = 2"
                            class="bg-[#3A89CB] w-[100%] h-[38px] rounded-[12px] text-center text-[white] mt-[8px]">คุณยังไม่มีบัญชี
                            ? กดสร้างบัญชีที่นี่</button> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[100%] flex" v-if="tab == 4">
            <div class="flex flex-col justify-between w-[30%] h-[100vh!important] ">
                <div @click="tab = 3">
                    <img :src="Logo01" />
                    <div class="text-[white] flex mt-[16px] cursor-pointer">
                        <div class="flex justify-center items-center mr-[8px]"><svg width="7" height="12" viewBox="0 0 7 12"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.338101 5.99962C0.338101 5.88552 0.357334 5.77495 0.3958 5.6679C0.434267 5.56085 0.500293 5.46053 0.593876 5.36695L5.10348 0.857324C5.24834 0.712458 5.42142 0.642591 5.6227 0.647724C5.82398 0.652841 5.99706 0.727841 6.14193 0.872724C6.28679 1.01759 6.35923 1.19322 6.35923 1.39962C6.35923 1.60602 6.28679 1.78166 6.14193 1.92652L2.06883 5.99962L6.1573 10.0881C6.30217 10.233 6.37204 10.406 6.36693 10.6073C6.36179 10.8086 6.28679 10.9817 6.14193 11.1265C5.99706 11.2714 5.82142 11.3438 5.615 11.3438C5.4086 11.3438 5.23297 11.2714 5.0881 11.1265L0.593876 6.6323C0.500293 6.53872 0.434267 6.44 0.3958 6.33615C0.357334 6.23232 0.338101 6.12014 0.338101 5.99962Z"
                                    fill="white" />
                            </svg></div>
                        <div class="flex justify-center items-center">ย้อนกลับ</div>
                    </div>
                </div>
                <div class="ml-[-20px]">
                    <svg width="307" height="323" viewBox="0 0 307 323" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.1">
                            <path
                                d="M293.028 461.511L202.349 322C254.923 297.766 285.545 250.035 285.545 184.899C285.545 87.4955 217.941 27.3799 109.862 27.3799H55.1055C67.9527 46.325 75.5612 69.6215 75.5612 94.7924C75.5612 99.6793 75.2494 104.499 74.6881 109.252H104.686C161.875 109.252 190.812 137.168 190.812 184.899C190.812 232.63 161.875 260.545 104.686 260.545H66.3312V340.61H114.539L192.496 461.511L206.341 483H306.998L293.028 461.511Z"
                                fill="white" />
                            <path
                                d="M50.618 94.7925C50.618 42.4424 11.0785 0 -37.691 0C-86.4605 0 -126 42.4424 -126 94.7925C-126 135.36 -102.239 169.837 -68.8736 183.426V483H41.3879V403.002H-6.50848V340.61H41.3879V260.612H-6.50848V183.493C26.8569 169.97 50.618 135.427 50.618 94.8595V94.7925ZM-37.691 87.6295C-50.7253 87.6295 -61.265 76.316 -61.265 62.3247C-61.265 48.3335 -50.7253 37.02 -37.691 37.02C-24.6567 37.02 -14.117 48.3335 -14.117 62.3247C-14.117 76.316 -24.6567 87.6295 -37.691 87.6295Z"
                                fill="white" />
                        </g>
                    </svg>
                </div>
            </div>
            <div class="w-[40%]  flex flex-col justify-center items-center">
                <div class="text-[white] text-[28px]">Reset password</div>
                <div
                    class=" mt-[60px] h-[363px] text-[12px] w-[423px] rounded-[20px] bg-[white] pt-[40px] pl-[30px] pr-[30px] pb-[10px]">
                    <div>
                        <div class="">
                            <div class="font-bold">Password</div>
                            <div class="">
                                <input type="password" placeholder="*********" v-model="reset_pass"
                                    class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                            </div>
                        </div>
                        <div class="mt-[10px]">
                            <div class="font-bold">Comfirm password</div>
                            <div class="">
                                <input type="password" placeholder="*********" v-model="reset_pass_con"
                                    class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                            </div>
                        </div>
                        <div class="mt-[10px]">
                            <div class="font-bold">Code</div>
                            <div class="">
                                <input type="password" placeholder="*********" v-model="code_reset"
                                    class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                            </div>
                        </div>
                    </div>
                    <div v-if="errorsResrtPass" class="flex justify-center text-[red]">
                        <div>{{ errorsResrtPass }}</div>
                    </div>
                    <div class="mt-[18px]">
                        <button @click="resetPass()"
                            class="bg-[#003765] w-[100%] h-[38px] rounded-[12px] text-center text-[white]">Reset</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import Logo01 from '@/assets/img/Logo-01.png'
import axios from 'axios'
export default {
    data() {
        return {
            Logo01,
            tab: 4,
            value: '',
            days: [...Array(31).keys()].map((day) => day + 1),
            mouths: [...Array(12).keys()].map((day) => day + 1),
            years: [],
            email_forgot: '',
            errorsForgotPass: '',
            reset_pass: '',
            reset_pass_con: '',
            code_reset: '',
            errorsResrtPass: '',
            dataLogin: {
                user: '',
                pass: '',
            },
            dataRegister: {
                name: '',
                last: '',
                CID: '',
                phone: '',
                birth: '',
                email: '',
                pass: '',
                pass_con: '',
                sex: null,
                check: false,
                err: ''
            }
        }

    },
    created() {
        this.runYears()
        this.$router.push('/')
    },
    methods: {
        runYears() {
            for (var year = 1923; year <= 2023; year++) {
                this.years.push(year);
            }
        },
        openNotificationRegister(position = null, color) {
            const noti = this.$vs.notification({
                sticky: true,
                color,
                position,
                title: 'Register success',
                // text: 'Please login to access.'
            })
        },
        openNotification2(position = null, color) {
            const noti = this.$vs.notification({
                sticky: true,
                color,
                position,
                title: 'Send code to your email',
                text: 'Please check email.'
            })
        },
        openNotification3(position = null, color) {
            const noti = this.$vs.notification({
                sticky: true,
                color,
                position,
                title: 'Reset password success',
                text: 'Go to login.'
            })
        },
        openNotification5(position = null, color) {
            const noti = this.$vs.notification({
                sticky: true,
                color,
                position,
                title: 'Email address not found',
                text: 'Please again.'
            })
        },
        loginSubmit() {
            const loading = this.$vs.loading()
            this.$store.dispatch('loginUser', this.dataLogin)
            loading.close()
        },
        registerSubmit() {
            if (this.dataRegister.email != '' & this.dataRegister.name != '' & this.dataRegister.last != '' & this.dataRegister.phone != '' & this.dataRegister.pass != '' & this.dataRegister.pass_con != '' & this.dataRegister.sex != '' & this.dataRegister.birth!= '' & this.dataRegister.sex !=null) {
                if (this.dataRegister.pass == this.dataRegister.pass_con) {
                    if (this.dataRegister.check) {
                        const loading = this.$vs.loading()
                        this.dataRegister.err = ''
                        console.log(this.dataRegister);
                        axios.post('https://api.resguru.app/api' + '/auth/local/register', {
                            "username": this.dataRegister.email,
                            "email": this.dataRegister.email,
                            "password": this.dataRegister.pass,
                            "lastName": this.dataRegister.last,
                            "firstName": this.dataRegister.name,
                            "sex": this.dataRegister.sex,
                            "idCard": this.dataRegister.CID,
                            "dateOfBirth" : this.dataRegister.birth
                            // "filePath": this.dataRegister.filePath,
                            // "googleToken": this.dataRegister.google,
                            // "lineToken": this.dataRegister.facebook
                        }).then((resp) => {
                                this.$showNotification('#3A89CB', "Register Successfully");
                                this.dataLogin.user = resp.data.user.email,
                                this.dataRegister.email = '',
                                this.dataRegister.pass = '',
                                this.dataRegister.last = '',
                                this.dataRegister.name = '',
                                this.dataRegister.sex = null,
                                this.dataRegister.check = null,
                                this.dataRegister.CID = ''
                                this.dataRegister.birth = ''
                        })
                            .finally(() => {
                                this.tab = 1
                                loading.close()
                        })
                        .catch(error => {
                            console.log(error)
                            const errorMessage = error.response ? error.response.data.error.message : 'Error updating information';
                            this.$showNotification('danger', errorMessage);
                            loading.close()
                        })
                    }
                    else {
                        this.dataRegister.err = 'โปรดยอมรับเงื่อนไข';
                    }

                }
                else {
                    this.dataRegister.err = 'รหัสผ่านไม่ตรงกัน';
                }
            }
            else {
                this.dataRegister.err = 'กรุณากรอกข้อมูลให้ครบถ้วน';

            }

        },
        onPhoneNumberInput(event) {
            const inputValue = event.target.value;
            // Remove non-numeric characters
            const numericValue = inputValue.replace(/\D/g, "");
            // Limit to a maximum of 10 digits
            this.dataRegister.phone = numericValue.slice(0, 10);
        },
        forgotPass() {
            let checkEmail = false
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (emailPattern.test(this.email_forgot)) {
                this.errorsForgotPass = ''
                const loading = this.$vs.loading()
                fetch('https://api.resguru.app/api' + '/users')
                    .then(response => response.json())
                    .then((resp) => {
                        resp.forEach(element => {
                            if (element.username == this.email_forgot) {
                                return checkEmail = true
                            }
                        });
                        if (checkEmail) {
                            console.log('sfd')
                            axios.post('https://api.resguru.app/api' + '/auth/forgot-password', {
                                "email": this.email_forgot
                            })
                                .then((resp) => {
                                    loading.close()
                                    this.openNotification2('top-right', 'success', 6000,)
                                    this.email_forgot = ''
                                    this.tab = 4
                                    console.log(resp);
                                })
                                .catch((error) => {
                                    loading.close()
                                    console.log(error);
                                })
                        }
                        else {
                            loading.close();
                            this.errorsForgotPass = 'Email address not found'
                            this.openNotification5('top-right', 'danger', 6000)
                        }
                    })

            } else {
                this.errorsForgotPass = 'The email format is invalid.';
            }
        },
        resetPass() {
            console.log('te');
            if (this.reset_pass != '' & this.reset_pass_con != '' & this.code_reset != '') {
                if (this.reset_pass == this.reset_pass_con) {
                    const loading = this.$vs.loading()
                    axios.post('https://api.resguru.app/api' + '/auth/reset-password', {
                        "password": this.reset_pass,
                        "passwordConfirmation": this.reset_pass_con,
                        "code": this.code_reset
                    })
                        .then((resp) => {
                            this.openNotification3('top-right', 'success', 6000)
                            this.reset_pass = '',
                                this.reset_pass_con = '',
                                this.code_reset = ''
                            this.errorsResrtPass = ''
                            loading.close()
                            setTimeout(() => {
                                this.tab = 1
                            }, 300)
                        })
                        .catch(() => {
                            loading.close()
                            this.$showNotification('danger', 'Incorrect code provided');
                        })
                }
                else {
                    this.$showNotification('danger',  'Passwords do not match');
                }
            }
            else {
                this.$showNotification('danger', 'Please fill out the information completely.');
            }
        }
    },
}

</script>
<style scoped>
#login {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    background-color: #003765 !important;
    min-height: 100vh !important;
}
</style>
