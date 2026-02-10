<template>
    <div id="login">
        <div class="h-[100%] flex" v-if="tab == 1">
            <div class="flex flex-col justify-between w-[30%] h-[100vh!important] ">
                <div>
                    <img :src="Logo01" />
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
                            <div class="font-bold">
                                Email <span class="text-red-500">*</span>
                            </div>
                            <div class="">
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    v-model="dataLogin.user"
                                    required
                                    class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA] px-3 border border-gray-200 focus:border-blue-500 focus:outline-none" />
                            </div>
                        </div>
                        <div class="mt-[10px]">
                            <div class="font-bold">
                                Password <span class="text-red-500">*</span>
                            </div>
                            <div class="">
                                <input 
                                    type="password" 
                                    placeholder="*********" 
                                    v-model="dataLogin.pass"
                                    required
                                    class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA] px-3 border border-gray-200 focus:border-blue-500 focus:outline-none" />
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
        
        <!-- REGISTRATION FORM - IMPROVED -->
        <div class="h-[100%] flex" v-if="tab == 2">
            <div class="flex flex-col justify-between h-[100vh!important] w-[30%]">
                <div>
                    <img :src="Logo01" />
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
                    <form @submit.prevent="registerSubmit()">
                        <div>
                            <!-- Name Fields -->
                            <div class="grid grid-cols-2 w-[100%] gap-4 mt-[10px] ">
                                <div>
                                    <div class="font-bold">
                                        ชื่อ <span class="text-red-500">*</span>
                                    </div>
                                    <div class="">
                                        <input 
                                            type="text" 
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA] px-3 border border-gray-200 focus:border-blue-500 focus:outline-none"
                                            v-model="dataRegister.name" 
                                            required
                                            :class="{'border-red-500': validationErrors.name}" />
                                        <div v-if="validationErrors.name" class="text-red-500 text-xs mt-1">
                                            {{ validationErrors.name }}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">
                                        นามสกุล <span class="text-red-500">*</span>
                                    </div>
                                    <div class="">
                                        <input 
                                            type="text" 
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA] px-3 border border-gray-200 focus:border-blue-500 focus:outline-none"
                                            v-model="dataRegister.last" 
                                            required
                                            :class="{'border-red-500': validationErrors.last}" />
                                        <div v-if="validationErrors.last" class="text-red-500 text-xs mt-1">
                                            {{ validationErrors.last }}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Birth Date - DD/MM/YYYY format -->
                            <div class="mt-[10px]">
                                <div class="font-bold">
                                    วันเกิด (วัน/เดือน/ปี) <span class="text-red-500">*</span>
                                </div>
                                <div class="grid grid-cols-3 gap-2">
                                    <div>
                                        <select 
                                            v-model="dataRegister.birthDay" 
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA] px-3 border border-gray-200 focus:border-blue-500 focus:outline-none"
                                            required
                                            :class="{'border-red-500': validationErrors.birth}">
                                            <option value="">วัน</option>
                                            <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select 
                                            v-model="dataRegister.birthMonth" 
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA] px-3 border border-gray-200 focus:border-blue-500 focus:outline-none"
                                            required
                                            :class="{'border-red-500': validationErrors.birth}">
                                            <option value="">เดือน</option>
                                            <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select 
                                            v-model="dataRegister.birthYear" 
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA] px-3 border border-gray-200 focus:border-blue-500 focus:outline-none"
                                            required
                                            :class="{'border-red-500': validationErrors.birth}">
                                            <option value="">ปี</option>
                                            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div v-if="validationErrors.birth" class="text-red-500 text-xs mt-1">
                                    {{ validationErrors.birth }}
                                </div>
                            </div>

                            <!-- ID Card -->
                            <div class="mt-[10px]">
                                <div class="font-bold">
                                    หมายเลขบัตรประชาชน หรือ พาสปอร์ต <span class="text-red-500">*</span>
                                </div>
                                <div class="">
                                    <input 
                                        type="text" 
                                        placeholder="เลขบัตรประชาชน 13 หลัก หรือ หมายเลขพาสปอร์ต" 
                                        class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA] px-3 border border-gray-200 focus:border-blue-500 focus:outline-none"
                                        v-model="dataRegister.CID" 
                                        required
                                        @input="onCIDInput"
                                        :class="{'border-red-500': validationErrors.CID}" />
                                    <div v-if="validationErrors.CID" class="text-red-500 text-xs mt-1">
                                        {{ validationErrors.CID }}
                                    </div>
                                </div>
                            </div>

                            <!-- Email -->
                            <div class="mt-[10px]">
                                <div class="font-bold">
                                    Email <span class="text-red-500">*</span>
                                </div>
                                <div class="">
                                    <input 
                                        type="email" 
                                        placeholder="example@email.com"
                                        class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA] px-3 border border-gray-200 focus:border-blue-500 focus:outline-none" 
                                        v-model="dataRegister.email" 
                                        required
                                        @blur="validateEmail"
                                        :class="{'border-red-500': validationErrors.email}" />
                                    <div v-if="validationErrors.email" class="text-red-500 text-xs mt-1">
                                        {{ validationErrors.email }}
                                    </div>
                                </div>
                            </div>

                            <!-- Phone -->
                            <div class="mt-[10px]">
                                <div class="font-bold">
                                    เบอร์โทรศัพท์ <span class="text-red-500">*</span>
                                </div>
                                <div class="">
                                    <input 
                                        type="tel" 
                                        placeholder="08x-xxx-xxxx" 
                                        @input="onPhoneNumberInput"
                                        class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA] px-3 border border-gray-200 focus:border-blue-500 focus:outline-none" 
                                        v-model="dataRegister.phone" 
                                        required
                                        maxlength="10"
                                        :class="{'border-red-500': validationErrors.phone}" />
                                    <div v-if="validationErrors.phone" class="text-red-500 text-xs mt-1">
                                        {{ validationErrors.phone }}
                                    </div>
                                </div>
                            </div>

                            <!-- Password -->
                            <div class="mt-[10px]">
                                <div class="font-bold">
                                    รหัสผ่าน <span class="text-red-500">*</span>
                                </div>
                                <div class="">
                                    <input 
                                        type="password" 
                                        placeholder="อย่างน้อย 8 ตัวอักษร"
                                        class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA] px-3 border border-gray-200 focus:border-blue-500 focus:outline-none" 
                                        v-model="dataRegister.pass" 
                                        required
                                        minlength="8"
                                        @input="validatePassword"
                                        :class="{'border-red-500': validationErrors.pass}" />
                                    <div v-if="validationErrors.pass" class="text-red-500 text-xs mt-1">
                                        {{ validationErrors.pass }}
                                    </div>
                                </div>
                            </div>

                            <!-- Confirm Password -->
                            <div class="mt-[10px]">
                                <div class="font-bold">
                                    ยืนยันรหัสผ่าน <span class="text-red-500">*</span>
                                </div>
                                <div class="">
                                    <input 
                                        type="password" 
                                        placeholder="ยืนยันรหัสผ่าน"
                                        class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA] px-3 border border-gray-200 focus:border-blue-500 focus:outline-none" 
                                        v-model="dataRegister.pass_con" 
                                        required
                                        @input="validatePasswordConfirm"
                                        :class="{'border-red-500': validationErrors.pass_con}" />
                                    <div v-if="validationErrors.pass_con" class="text-red-500 text-xs mt-1">
                                        {{ validationErrors.pass_con }}
                                    </div>
                                </div>
                            </div>

                            <!-- Gender -->
                            <div class="mt-[10px]">
                                <div class="font-bold">
                                    เพศ <span class="text-red-500">*</span>
                                </div>
                                <div class="flex">
                                    <div @click="dataRegister.sex = true"
                                        class="h-[41px] w-[78px] rounded-[12px]  border items-center flex justify-around cursor-pointer"
                                        :class="dataRegister.sex === true? 'bg-[#008EF4] text-[white] border-[#008EF4]' : 'border-gray-200 hover:border-[#008EF4]'">
                                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_902_17193" style="mask-type:alpha" maskUnits="userSpaceOnUse"
                                                    x="0" y="0" width="24" height="24">
                                                    <rect width="24" height="24" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_902_17193)">
                                                    <path
                                                        d="M9.50085 19.75C8.03745 19.75 6.79646 19.241 5.77788 18.223C4.75929 17.2049 4.25 15.9642 4.25 14.5009C4.25 13.0375 4.75908 11.7965 5.77725 10.7779C6.79543 9.75929 8.03634 9.25 9.49998 9.25C10.0628 9.25 10.6093 9.34198 11.1394 9.52595C11.6695 9.70993 12.166 9.96859 12.6288 10.3019L17.1808 5.74995H15C14.7875 5.74995 14.6094 5.67805 14.4656 5.53425C14.3219 5.39043 14.25 5.21223 14.25 4.99965C14.25 4.78705 14.3219 4.60896 14.4656 4.46538C14.6094 4.32179 14.7875 4.25 15 4.25H18.8461C19.1022 4.25 19.3169 4.33662 19.4901 4.50985C19.6633 4.68308 19.75 4.89774 19.75 5.15383V8.99998C19.75 9.21248 19.6781 9.3906 19.5343 9.53435C19.3904 9.67808 19.2122 9.74995 18.9997 9.74995C18.7871 9.74995 18.609 9.67808 18.4654 9.53435C18.3218 9.3906 18.25 9.21248 18.25 8.99998V6.82878L13.698 11.3461C14.0211 11.8192 14.2772 12.3203 14.4663 12.8495C14.6554 13.3787 14.75 13.9288 14.75 14.5C14.75 15.9636 14.241 17.2045 13.223 18.2227C12.2049 19.2409 10.9642 19.75 9.50085 19.75ZM9.49843 10.75C8.46228 10.75 7.57849 11.1162 6.84708 11.8486C6.11566 12.5811 5.74995 13.4654 5.74995 14.5015C5.74995 15.5377 6.11618 16.4215 6.84863 17.1529C7.58108 17.8843 8.46538 18.25 9.50153 18.25C10.5377 18.25 11.4215 17.8838 12.1529 17.1513C12.8843 16.4189 13.25 15.5346 13.25 14.4984C13.25 13.4623 12.8838 12.5785 12.1513 11.8471C11.4189 11.1157 10.5346 10.75 9.49843 10.75Z"
                                                        :fill="dataRegister.sex === true ? 'white' : '#008EF4'" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div>ชาย</div>
                                    </div>
                                    <div @click="dataRegister.sex = false"
                                        class="h-[41px] ml-[14px] w-[78px] rounded-[12px]  border items-center flex justify-around cursor-pointer"
                                        :class="dataRegister.sex === false ? 'bg-[#CC00FF] text-[white] border-[#CC00FF]' : 'border-gray-200 hover:border-[#CC00FF]'">
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
                                                        :fill="dataRegister.sex === false ? 'white' : '#CC00FF'" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div>หญิง</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Terms and Conditions -->
                            <div class="mt-[10px]">
                                <vs-checkbox color="#003765" v-model="dataRegister.check" required>
                                    <div class="text-[12px]">
                                        <span class="text-red-500">*</span> คุณได้อ่านและยอมรับ
                                        <a href="#" class="text-blue-600 underline">นโยบายคุ้มครองความเป็นส่วนตัว</a>
                                        และ
                                        <a href="#" class="text-blue-600 underline">เงื่อนไขการใช้บริการ</a>
                                    </div>
                                </vs-checkbox>
                                <div v-if="validationErrors.check" class="text-red-500 text-xs mt-1">
                                    {{ validationErrors.check }}
                                </div>
                            </div>
                        </div>

                        <!-- Error Messages -->
                        <div v-if="dataRegister.err" class="flex justify-center text-[red] mt-2">
                            <div>{{ dataRegister.err }}</div>
                        </div>

                        <!-- Submit Buttons -->
                        <div class="mt-[18px]">
                            <button 
                                type="submit"
                                class="bg-[#003765] w-[100%] h-[38px] rounded-[12px] text-center text-[white] hover:bg-[#004080] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                                :disabled="!isFormValid">สร้างบัญชี</button>
                            <button @click="tab = 1" type="button"
                                class="bg-[#3A89CB] w-[100%] h-[38px] rounded-[12px] text-center text-[white] mt-[8px] hover:bg-[#2980B9] transition-colors">คุณมีบัญชีอยู่แล้ว
                                ? เข้าสู่ระบบที่นี่</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        <!-- FORGOT PASSWORD FORM -->
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
                            <div class="font-bold">Email <span class="text-red-500">*</span></div>
                            <div class="">
                                <input type="email" placeholder="Email" v-model="email_forgot"
                                    class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA] px-3 border border-gray-200 focus:border-blue-500 focus:outline-none" required />
                            </div>
                        </div>
                    </div>
                    <div v-if="errorsForgotPass" class="flex justify-center text-[red]">
                        <div>{{ errorsForgotPass }}</div>
                    </div>
                    <div class="mt-[18px]">
                        <button @click="forgotPass()"
                            class="bg-[#003765] w-[100%] h-[38px] rounded-[12px] mb-[18px] text-center text-[white] hover:bg-[#004080] transition-colors">ยืนยัน</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- RESET PASSWORD FORM -->
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
                            <div class="font-bold">Code <span class="text-red-500">*</span></div>
                            <div class="">
                                <input type="text" placeholder="รหัสยืนยัน" v-model="code_reset"
                                    class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA] px-3 border border-gray-200 focus:border-blue-500 focus:outline-none" required />
                            </div>
                        </div>
                        <div class="mt-[10px]">
                            <div class="font-bold">Password <span class="text-red-500">*</span></div>
                            <div class="">
                                <input type="password" placeholder="รหัสผ่านใหม่" v-model="reset_pass"
                                    class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA] px-3 border border-gray-200 focus:border-blue-500 focus:outline-none" required />
                            </div>
                        </div>
                        <div class="mt-[10px]">
                            <div class="font-bold">Confirm password <span class="text-red-500">*</span></div>
                            <div class="">
                                <input type="password" placeholder="ยืนยันรหัสผ่านใหม่" v-model="reset_pass_con"
                                    class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA] px-3 border border-gray-200 focus:border-blue-500 focus:outline-none" required />
                            </div>
                        </div>
                    </div>
                    <div v-if="errorsResrtPass" class="flex justify-center text-[red]">
                        <div>{{ errorsResrtPass }}</div>
                    </div>
                    <div class="mt-[18px]">
                        <button @click="resetPass()"
                            class="bg-[#003765] w-[100%] h-[38px] rounded-[12px] text-center text-[white] hover:bg-[#004080] transition-colors">Reset</button>
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
            tab: 1,
            value: '',
            days: [...Array(31).keys()].map((day) => day + 1),
            months: [
                'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
                'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
            ],
            years: [],
            email_forgot: '',
            errorsForgotPass: '',
            reset_pass: '',
            reset_pass_con: '',
            code_reset: '',
            errorsResrtPass: '',
            option: false,
            dataLogin: {
                user: '',
                pass: '',
            },
            dataRegister: {
                name: '',
                last: '',
                CID: '',
                phone: '',
                birthDay: '',
                birthMonth: '',
                birthYear: '',
                email: '',
                pass: '',
                pass_con: '',
                sex: null,
                check: false,
                err: ''
            },
            validationErrors: {
                name: '',
                last: '',
                CID: '',
                phone: '',
                birth: '',
                email: '',
                pass: '',
                pass_con: '',
                check: ''
            }
        }
    },
    computed: {
        formattedBirthDate() {
            if (this.dataRegister.birthDay && this.dataRegister.birthMonth && this.dataRegister.birthYear) {
                const day = String(this.dataRegister.birthDay).padStart(2, '0');
                const month = String(this.dataRegister.birthMonth).padStart(2, '0');
                return `${this.dataRegister.birthYear}-${month}-${day}`;
            }
            return '';
        },
        isFormValid() {
            return this.dataRegister.name && 
                   this.dataRegister.last && 
                   this.dataRegister.birthDay && 
                   this.dataRegister.birthMonth && 
                   this.dataRegister.birthYear &&
                   this.dataRegister.CID && 
                   this.dataRegister.email && 
                   this.dataRegister.phone && 
                   this.dataRegister.pass && 
                   this.dataRegister.pass_con && 
                   this.dataRegister.sex !== null && 
                   this.dataRegister.check &&
                   Object.values(this.validationErrors).every(error => !error);
        }
    },
    created() {
        this.runYears()
        this.$router.push('/')
    },
    methods: {
        runYears() {
            const currentYear = new Date().getFullYear();
            for (var year = currentYear; year >= 1923; year--) {
                this.years.push(year);
            }
        },
        clearValidationError(field) {
            this.validationErrors[field] = '';
        },
        validateEmail() {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!this.dataRegister.email) {
                this.validationErrors.email = 'กรุณากรอก Email';
            } else if (!emailPattern.test(this.dataRegister.email)) {
                this.validationErrors.email = 'รูปแบบ Email ไม่ถูกต้อง';
            } else {
                this.validationErrors.email = '';
            }
        },
        validatePassword() {
            if (!this.dataRegister.pass) {
                this.validationErrors.pass = 'กรุณากรอกรหัสผ่าน';
            } else if (this.dataRegister.pass.length < 8) {
                this.validationErrors.pass = 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร';
            } else {
                this.validationErrors.pass = '';
            }
            this.validatePasswordConfirm();
        },
        validatePasswordConfirm() {
            if (!this.dataRegister.pass_con) {
                this.validationErrors.pass_con = 'กรุณายืนยันรหัสผ่าน';
            } else if (this.dataRegister.pass !== this.dataRegister.pass_con) {
                this.validationErrors.pass_con = 'รหัสผ่านไม่ตรงกัน';
            } else {
                this.validationErrors.pass_con = '';
            }
        },
        validatePhone() {
            const phonePattern = /^0[0-9]{9}$/;
            if (!this.dataRegister.phone) {
                this.validationErrors.phone = 'กรุณากรอกเบอร์โทรศัพท์';
            } else if (!phonePattern.test(this.dataRegister.phone)) {
                this.validationErrors.phone = 'เบอร์โทรศัพท์ไม่ถูกต้อง (ต้องขึ้นต้นด้วย 0 และมี 10 หลัก)';
            } else {
                this.validationErrors.phone = '';
            }
        },
        validateCID() {
            if (!this.dataRegister.CID) {
                this.validationErrors.CID = 'กรุณากรอกหมายเลขบัตรประชาชนหรือพาสปอร์ต';
            } else if (this.dataRegister.CID.length < 8) {
                this.validationErrors.CID = 'หมายเลขไม่ถูกต้อง';
            } else {
                this.validationErrors.CID = '';
            }
        },
        validateBirthDate() {
            if (!this.dataRegister.birthDay || !this.dataRegister.birthMonth || !this.dataRegister.birthYear) {
                this.validationErrors.birth = 'กรุณาเลือกวันเกิด';
            } else {
                const currentYear = new Date().getFullYear();
                const age = currentYear - this.dataRegister.birthYear;
                if (age < 13) {
                    this.validationErrors.birth = 'อายุต้องมากกว่า 13 ปี';
                } else {
                    this.validationErrors.birth = '';
                }
            }
        },
        onPhoneNumberInput(event) {
            const inputValue = event.target.value;
            const numericValue = inputValue.replace(/\D/g, "");
            this.dataRegister.phone = numericValue.slice(0, 10);
            this.validatePhone();
        },
        onCIDInput(event) {
            const inputValue = event.target.value;
            // Allow only alphanumeric characters for passport or numbers for ID card
            this.dataRegister.CID = inputValue.replace(/[^a-zA-Z0-9]/g, "");
            this.validateCID();
        },
        openNotificationRegister(position = null, color) {
            const noti = this.$vs.notification({
                sticky: true,
                color,
                position,
                title: 'สมัครสมาชิกสำเร็จ',
            })
        },
        openNotification2(position = null, color) {
            const noti = this.$vs.notification({
                sticky: true,
                color,
                position,
                title: 'ส่งโคดรีเซ็ตรหัสผ่านสำเร็จ',
                text: 'กรุณาตรวจสอบอีเมลของคุณ'
            })
        },
        openNotification3(position = null, color) {
            const noti = this.$vs.notification({
                sticky: true,
                color,
                position,
                title: 'รีเซ็ตรหัสผ่านสำเร็จ',
                text: 'ไปที่หน้าเข้าสู่ระบบ'
            })
        },
        openNotification5(position = null, color) {
            const noti = this.$vs.notification({
                sticky: true,
                color,
                position,
                title: 'ไม่พบอีเมลนี้',
                text: 'กรุณาลองใหม่อีกครั้ง'
            })
        },
        loginSubmit() {
            const loading = this.$vs.loading()
            this.$store.dispatch('loginUser', this.dataLogin)
            loading.close()
        },
        registerSubmit() {
            // Clear previous errors
            this.dataRegister.err = '';
            
            // Validate all fields
            this.validateEmail();
            this.validatePassword();
            this.validatePasswordConfirm();
            this.validatePhone();
            this.validateCID();
            this.validateBirthDate();
            
            // Validate required fields
            if (!this.dataRegister.name) {
                this.validationErrors.name = 'กรุณากรอกชื่อ';
            }
            if (!this.dataRegister.last) {
                this.validationErrors.last = 'กรุณากรอกนามสกุล';
            }
            if (!this.dataRegister.check) {
                this.validationErrors.check = 'กรุณายอมรับเงื่อนไขการใช้บริการ';
            }
            if (this.dataRegister.sex === null) {
                this.dataRegister.err = 'กรุณาเลือกเพศ';
                return;
            }

            // Check if there are any validation errors
            if (Object.values(this.validationErrors).some(error => error)) {
                this.dataRegister.err = 'กรุณาแก้ไขข้อมูลที่ไม่ถูกต้อง';
                return;
            }

            const loading = this.$vs.loading()
            
            axios.post('https://api.resguru.app/api' + '/auth/local/register', {
                "username": this.dataRegister.email,
                "email": this.dataRegister.email,
                "password": this.dataRegister.pass,
                "lastName": this.dataRegister.last,
                "firstName": this.dataRegister.name,
                "role": 6,
                "sex": this.dataRegister.sex === true,
                "idCard": this.dataRegister.CID,
                "dateOfBirth": this.formattedBirthDate
            }).then((resp) => {
                this.$showNotification('#3A89CB', "สมัครสมาชิกสำเร็จ");
                this.dataLogin.user = resp.data.user.email;
                this.resetForm();
                this.tab = 1;
            }).catch(error => {
                console.log(error);
                
                // Handle specific error cases
                if (error.response && error.response.data && error.response.data.error) {
                    const serverError = error.response.data.error.message;
                    
                    if (serverError === 'Email or Username are already taken') {
                        // Handle duplicate email specifically
                        this.validationErrors.email = 'อีเมลนี้ถูกใช้งานแล้ว กรุณาใช้อีเมลอื่น';
                        this.dataRegister.err = 'อีเมลนี้ถูกใช้งานแล้ว กรุณาใช้อีเมลอื่น';
                        this.$showNotification('danger', 'อีเมลนี้ถูกใช้งานแล้ว กรุณาใช้อีเมลอื่น');
                    } else {
                        // Handle other server errors
                        this.dataRegister.err = serverError;
                        this.$showNotification('danger', serverError);
                    }
                } else {
                    // Handle network or other errors
                    const errorMessage = 'เกิดข้อผิดพลาดในการสร้างบัญชี กรุณาลองอีกครั้ง';
                    this.dataRegister.err = errorMessage;
                    this.$showNotification('danger', errorMessage);
                }
            }).finally(() => {
                loading.close();
            })
        },
        resetForm() {
            this.dataRegister = {
                name: '',
                last: '',
                CID: '',
                phone: '',
                birthDay: '',
                birthMonth: '',
                birthYear: '',
                email: '',
                pass: '',
                pass_con: '',
                sex: null,
                check: false,
                err: ''
            };
            this.validationErrors = {
                name: '',
                last: '',
                CID: '',
                phone: '',
                birth: '',
                email: '',
                pass: '',
                pass_con: '',
                check: ''
            };
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
                            axios.post('https://api.resguru.app/api' + '/auth/forgot-password-mobile', {
                                "email": this.email_forgot
                            })
                                .then((resp) => {
                                    loading.close()
                                    this.openNotification2('top-right', 'success', 6000,)
                                    this.email_forgot = ''
                                    this.tab = 4
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
                            this.reset_pass = '';
                            this.reset_pass_con = '';
                            this.code_reset = '';
                            this.errorsResrtPass = '';
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
                    this.$showNotification('danger', 'Passwords do not match');
                }
            }
            else {
                this.$showNotification('danger', 'Please fill out the information completely.');
            }
        }
    },
    watch: {
        'dataRegister.birthDay'() { this.validateBirthDate(); },
        'dataRegister.birthMonth'() { this.validateBirthDate(); },
        'dataRegister.birthYear'() { this.validateBirthDate(); },
        'dataRegister.name'() { this.clearValidationError('name'); },
        'dataRegister.last'() { this.clearValidationError('last'); },
        'dataRegister.check'() { this.clearValidationError('check'); }
    }
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

/* Custom styles for better form appearance */
input:focus {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.border-red-500 {
    border-color: #ef4444 !important;
}

.text-red-500 {
    color: #ef4444;
}

.text-blue-600 {
    color: #2563eb;
}

button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

button:hover:not(:disabled) {
    transform: translateY(-1px);
}

.transition-colors {
    transition: background-color 0.2s ease, transform 0.1s ease;
}

/* Gender selection hover effects */
.gender-option:hover {
    transform: scale(1.02);
    transition: transform 0.1s ease;
}

/* Form validation styling */
.form-field {
    margin-bottom: 0.5rem;
}

.error-message {
    font-size: 0.75rem;
    margin-top: 0.25rem;
    color: #ef4444;
}

/* Select dropdown styling */
select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
    #login {
        padding: 10px;
    }
    
    /* Target elements with specific Tailwind classes using CSS attribute selectors */
    .h-full.flex {
        flex-direction: column !important;
    }
    
    /* Custom responsive classes */
    .mobile-full-width {
        width: 100% !important;
        max-width: 400px;
    }
    
    .mobile-single-col {
        grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
    }
    
    /* Override specific widths on mobile */
    [class*="w-[30%]"] {
        width: 100% !important;
        height: auto !important;
        margin-bottom: 20px;
    }
    
    [class*="w-[40%]"] {
        width: 100% !important;
    }
    
    [class*="w-[423px]"], 
    [class*="w-[549px]"] {
        width: 100% !important;
        max-width: 400px;
    }
    
    .grid-cols-2 {
        grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
    }
    
    .grid-cols-3 {
        grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
    }
}

/* Additional responsive utilities */
.responsive-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.responsive-form-container {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
}

/* Fix for form inputs on mobile */
@media (max-width: 640px) {
    input, select {
        font-size: 16px; /* Prevents zoom on iOS */
    }
    
    .form-grid {
        display: block;
    }
    
    .form-grid > div {
        margin-bottom: 1rem;
    }
}
</style>