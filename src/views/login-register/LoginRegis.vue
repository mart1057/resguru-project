<template>
    <div id="login">
        <div class="h-[100%] flex">
            <div class="flex flex-col justify-between h-[100%] w-[30%]">
                <div>
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
                <div class="ml-[-20px] mb-[-20px]">
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
                                <input type="email" placeholder="Email" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                            </div>
                        </div>
                        <div class="mt-[10px]">
                            <div class="font-bold">Password</div>
                            <div class="">
                                <input type="password" placeholder="*********" class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="flex justify-center items-center">
                                <div>
                                    <vs-checkbox  color="#003765" v-model="option">
                                        <div class="text-[12px]">Remember me</div>
                                    </vs-checkbox>
                                </div>
                            </div>
                            <div class="text-[#D44769] text-center flex justify-center items-center">Forgot password</div>
                        </div>
                    </div>
                    <div class="mt-[18px]">
                        <button class="bg-[#003765] w-[100%] h-[38px] rounded-[12px] text-center text-[white]">เข้าสู่ระบบ</button>
                        <button class="bg-[#3A89CB] w-[100%] h-[38px] rounded-[12px] text-center text-[white] mt-[8px]">คุณยังไม่มีบัญชี ? กดสร้างบัญชีที่นี่</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import Logo01 from '@/assets/img/Logo-01.png'
export default {
    data() {
        return {
            Logo01
        }
    }
}

</script>
<style scoped>
#login {
    padding: 20px;
    background-color: #003765 !important;
    height: 100vh !important;
}
</style>
