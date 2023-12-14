<template>
    <div class="flex w-[100%]" id="create">
        <div class="bg-[#003765] w-[40%] rounded-r-[40px]">
            <div class="flex flex-col justify-between w-[100%] h-[100vh!important] ">
                <div class="pl-[50px] pt-[30px]">
                    <div class="text-[white] flex mt-[16px] cursor-pointer">
                        <div class="flex justify-center items-center mr-[8px]"><svg width="7" height="12" viewBox="0 0 7 12"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.338101 5.99962C0.338101 5.88552 0.357334 5.77495 0.3958 5.6679C0.434267 5.56085 0.500293 5.46053 0.593876 5.36695L5.10348 0.857324C5.24834 0.712458 5.42142 0.642591 5.6227 0.647724C5.82398 0.652841 5.99706 0.727841 6.14193 0.872724C6.28679 1.01759 6.35923 1.19322 6.35923 1.39962C6.35923 1.60602 6.28679 1.78166 6.14193 1.92652L2.06883 5.99962L6.1573 10.0881C6.30217 10.233 6.37204 10.406 6.36693 10.6073C6.36179 10.8086 6.28679 10.9817 6.14193 11.1265C5.99706 11.2714 5.82142 11.3438 5.615 11.3438C5.4086 11.3438 5.23297 11.2714 5.0881 11.1265L0.593876 6.6323C0.500293 6.53872 0.434267 6.44 0.3958 6.33615C0.357334 6.23232 0.338101 6.12014 0.338101 5.99962Z"
                                    fill="white" />
                            </svg></div>
                        <div class="flex justify-center items-center" @click="routeTo()">ย้อนกลับ</div>
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <div>
                        <svg width="185" height="162" viewBox="0 0 185 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.7188 161.574L10.9638 154.719H5.71283V161.574H0V136.984H10.6731C17.2582 136.984 21.3804 140.394 21.3804 145.902C21.3804 149.586 19.516 152.297 16.3004 153.661L21.8251 161.574H15.7017H15.7188ZM10.3652 141.622H5.71283V150.2H10.3652C13.8545 150.2 15.6162 148.58 15.6162 145.919C15.6162 143.259 13.8545 141.639 10.3652 141.639V141.622Z"
                                fill="white" />
                            <path
                                d="M45 157.004V161.574H25.8945V136.984H44.5382V141.554H31.5732V146.891H43.033V151.325H31.5732V157.021H45V157.004Z"
                                fill="white" />
                            <path
                                d="M47.6187 159.152L49.5515 154.872C51.6382 156.39 54.7341 157.43 57.6931 157.43C61.0797 157.43 62.4481 156.305 62.4481 154.787C62.4481 150.183 48.0976 153.354 48.0976 144.214C48.0976 140.036 51.4842 136.558 58.497 136.558C61.5929 136.558 64.7743 137.291 67.0662 138.74L65.3045 143.055C63.0125 141.759 60.6521 141.128 58.4628 141.128C55.0761 141.128 53.7762 142.39 53.7762 143.941C53.7762 148.477 68.1096 145.34 68.1096 154.378C68.1096 158.487 64.6887 162 57.6418 162C53.7249 162 49.7909 160.841 47.6016 159.152H47.6187Z"
                                fill="white" />
                            <path
                                d="M98.6926 148.887H103.909V158.862C101.19 160.909 97.4611 161.983 93.9376 161.983C86.1894 161.983 80.4766 156.68 80.4766 149.262C80.4766 141.844 86.1894 136.541 94.0403 136.541C98.3676 136.541 101.977 138.024 104.371 140.787L100.711 144.163C98.915 142.27 96.8283 141.383 94.331 141.383C89.5418 141.383 86.2578 144.572 86.2578 149.245C86.2578 153.917 89.5418 157.106 94.2626 157.106C95.8191 157.106 97.2559 156.833 98.7097 156.049V148.853L98.6926 148.887Z"
                                fill="white" />
                            <path
                                d="M108.988 150.762V136.984H114.701V150.541C114.701 155.213 116.737 157.14 120.192 157.14C123.647 157.14 125.682 155.213 125.682 150.541V136.984H131.326V150.762C131.326 157.993 127.17 162 120.157 162C113.145 162 108.988 157.993 108.988 150.762Z"
                                fill="white" />
                            <path
                                d="M152.691 161.574L147.936 154.719H142.685V161.574H136.973V136.984H147.646C154.231 136.984 158.353 140.394 158.353 145.902C158.353 149.586 156.489 152.297 153.273 153.661L158.798 161.574H152.674H152.691ZM147.338 141.622H142.685V150.2H147.338C150.827 150.2 152.589 148.58 152.589 145.919C152.589 143.259 150.827 141.639 147.338 141.639V141.622Z"
                                fill="white" />
                            <path
                                d="M162.66 150.762V136.984H168.373V150.541C168.373 155.213 170.408 157.14 173.863 157.14C177.319 157.14 179.354 155.213 179.354 150.541V136.984H184.998V150.762C184.998 157.993 180.842 162 173.829 162C166.816 162 162.66 157.993 162.66 150.762Z"
                                fill="white" />
                            <path
                                d="M142.154 105.078L119.935 73.3092C132.815 67.7842 140.324 56.9216 140.324 42.1029C140.324 19.9345 123.75 6.24121 97.255 6.24121H83.8281C86.9753 10.5555 88.8397 15.8589 88.8397 21.5886C88.8397 22.697 88.7713 23.8054 88.6173 24.8797H95.9722C109.998 24.8797 117.079 31.2404 117.079 42.1029C117.079 52.9654 109.981 59.3261 95.9722 59.3261H86.5648V77.5553H98.3839L117.489 105.078L120.876 109.972H145.54L142.12 105.078H142.154Z"
                                fill="white" />
                            <path
                                d="M82.7338 21.5886C82.7338 9.66884 73.0357 0 61.0798 0C49.1239 0 39.4258 9.66884 39.4258 21.5886C39.4258 30.8141 45.2583 38.6754 53.4342 41.7619V109.955H80.459V91.7431H68.7083V77.5383H80.459V59.3261H68.7083V41.7619C76.8842 38.6754 82.7167 30.8312 82.7167 21.5886H82.7338ZM61.0798 19.9516C57.8813 19.9516 55.2986 17.3766 55.2986 14.1878C55.2986 10.9989 57.8813 8.424 61.0798 8.424C64.2783 8.424 66.8611 10.9989 66.8611 14.1878C66.8611 17.3766 64.2783 19.9516 61.0798 19.9516Z"
                                fill="#F4D55E" />
                        </svg>
                    </div>
                    <div
                        class="text-[white] text-[32px]  w-[100%] text-center mt-[60px] flex flex-col justify-center items-center">
                        สร้างห้องพัก</div>
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
        </div>
        <div class="w-[60%] pt-[10px]">
            <div class="flex flex-col justify-around w-[100%] h-[100%]">
                <div>
                    <div class="w-[100%] flex justify-center items-center">
                        <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start" id="upload"
                            ref="buildingProfile" hidden @change="previewImage" type="file" accept="image/*" />
                        <label for="upload">
                            <div v-if="imageUrl">
                                <img :src="imageUrl" alt="Preview"
                                    class="text-[white] text-[32px]  w-[150px] h-[150px] rounded-[22px] bg-[#F3F7FA] text-center flex flex-col justify-end  cursor-pointer" />
                            </div>
                            <div v-else
                                class="text-[white] text-[32px]  w-[150px] h-[150px] rounded-[22px] bg-[#F3F7FA] text-center flex flex-col justify-end  cursor-pointer">

                                <svg width="43" height="40" viewBox="0 0 43 40" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_902_20136)">
                                        <circle cx="20" cy="20" r="12" fill="#5C6B79" fill-opacity="0.5" />
                                        <mask id="mask0_902_20136" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="13"
                                            y="12" width="15" height="15">
                                            <rect x="13" y="12" width="14.4" height="14.4" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_902_20136)">
                                            <path
                                                d="M19.5242 22.8692C20.2127 22.8692 20.7963 22.6298 21.2752 22.1509C21.754 21.6721 21.9934 21.0884 21.9934 20.4C21.9934 19.7115 21.754 19.1279 21.2752 18.649C20.7963 18.1702 20.2127 17.9308 19.5242 17.9308C18.8357 17.9308 18.2521 18.1702 17.7733 18.649C17.2944 19.1279 17.055 19.7115 17.055 20.4C17.055 21.0884 17.2944 21.6721 17.7733 22.1509C18.2521 22.6298 18.8357 22.8692 19.5242 22.8692ZM14.9088 24.9C14.6058 24.9 14.3492 24.795 14.1392 24.585C13.9292 24.375 13.8242 24.1184 13.8242 23.8154V16.9846C13.8242 16.6815 13.9292 16.425 14.1392 16.215C14.3492 16.005 14.6058 15.9 14.9088 15.9H16.7411L17.5258 15.0496C17.625 14.9421 17.7445 14.8569 17.8844 14.7941C18.0242 14.7314 18.1708 14.7 18.3242 14.7H20.9319C21.0856 14.7 21.2144 14.752 21.3183 14.8559C21.4222 14.9599 21.4742 15.0887 21.4742 15.2423V16.8L14.9088 16.9846H14.7242V23.8154C14.7242 23.8692 14.7415 23.9134 14.7761 23.9481C14.8107 23.9827 14.855 24 14.9088 24H24.1396C24.1934 24 24.2377 23.9827 24.2723 23.9481C24.3069 23.9134 24.3242 23.8692 24.3242 23.8154V18.45H24.6819C24.6542 18.45 24.6682 18.465 24.724 18.495C24.7797 18.525 24.8447 18.5656 24.919 18.6167C24.9932 18.6679 25.0626 18.7271 25.1272 18.7944C25.1919 18.8617 25.2242 18.9277 25.2242 18.9923V23.8154C25.2242 24.1184 25.1192 24.375 24.9092 24.585C24.6992 24.795 24.4426 24.9 24.1396 24.9H14.9088ZM24.33 15.6H23.58C23.4525 15.6 23.3456 15.5568 23.2593 15.4706C23.1731 15.3843 23.13 15.2774 23.13 15.1498C23.13 15.0222 23.1731 14.9154 23.2593 14.8292C23.3456 14.7431 23.4525 14.7 23.58 14.7H24.33V13.95C24.33 13.8225 24.3731 13.7156 24.4594 13.6294C24.5457 13.5431 24.6526 13.5 24.7802 13.5C24.9077 13.5 25.0146 13.5431 25.1007 13.6294C25.1869 13.7156 25.2299 13.8225 25.2299 13.95V14.7H25.98C26.1075 14.7 26.2143 14.7431 26.3006 14.8294C26.3868 14.9157 26.4299 15.0226 26.4299 15.1502C26.4299 15.2778 26.3868 15.3846 26.3006 15.4708C26.2143 15.5569 26.1075 15.6 25.98 15.6H25.2299V16.35C25.2299 16.4775 25.1868 16.5844 25.1005 16.6706C25.0142 16.7569 24.9073 16.8 24.7798 16.8C24.6522 16.8 24.5454 16.7569 24.4592 16.6706C24.373 16.5844 24.33 16.4775 24.33 16.35V15.6Z"
                                                fill="#E8EFF4" />
                                        </g>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_902_20136" x="-3" y="0" width="46" height="46"
                                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="3" />
                                            <feGaussianBlur stdDeviation="5.5" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix"
                                                result="effect1_dropShadow_902_20136" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_902_20136"
                                                result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </label>
                    </div>
                    <div class="flex justify-center items-center w-[100%] pl-[50px] pr-[50px]">
                        <div class="flex flex-col justify-center items-center w-[100%]">
                            <div class="grid grid-cols-1 w-[100%]  gap-4 mt-[10px] ">
                                <div>
                                    <div class="font-bold">ชื่ออพาร์ทเม้นท์</div>
                                    <div class="">
                                        <input type="input" v-model="buildingName"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                        <div v-if="errorFieldMessage !== ''" class="text-danger">
                                            {{ errorFieldMessage }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 w-[100%]  gap-4 mt-[10px] ">
                                <div>
                                    <div class="font-bold">ที่อยู่</div>
                                    <div class="">
                                        <input type="input" v-model="buildingAddress"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                </div>
                                <div v-if="errorFieldMessage !== ''" class="text-danger">
                                            {{ errorFieldMessage }}
                                </div>
                            </div>
                            <div class="grid grid-cols-4 w-[100%]  gap-4 mt-[10px] ">
                                <div>
                                    <div class="font-bold">เขต</div>
                                    <div class="mt-[5px]">
                                        <vs-select color="#003765">
                                            <vs-option>
                                                555
                                            </vs-option>
                                        </vs-select>
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">แขวง</div>
                                    <div class="mt-[5px]">
                                        <vs-select color="#003765">
                                            <vs-option>
                                                555
                                            </vs-option>
                                        </vs-select>
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">จังหวัด</div>
                                    <div class="mt-[5px]">
                                        <vs-select color="#003765">
                                            <vs-option>
                                                555
                                            </vs-option>
                                        </vs-select>
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">รหัสไปรษณี</div>
                                    <div class="mt-[5px]">
                                        <vs-select color="#003765">
                                            <vs-option>
                                                555
                                            </vs-option>
                                        </vs-select>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 w-[100%]  gap-4 mt-[10px] ">
                                <div>
                                    <div class="font-bold">เบอร์โทรติดต่อ</div>
                                    <div class="">
                                        <input type="input" v-model="buildingPhone"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                    <div v-if="errorFieldMessage !== ''" class="text-danger">
                                            {{ errorFieldMessage }}
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">อีเมล</div>
                                    <div class="">
                                        <input type="input" v-model="buildingEmail"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                        <div v-if="errorFieldMessage !== ''" class="text-danger">
                                            {{ errorFieldMessage }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 w-[100%]  gap-4 mt-[10px] ">
                                <div>
                                    <div class="font-bold">ไลน์ติดต่อ</div>
                                    <div class="">
                                        <input type="input" v-model="buildingLine"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                    <div v-if="errorFieldMessage !== ''" class="text-danger">
                                            {{ errorFieldMessage }}
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">เฟสบุ๊ค</div>
                                    <div class="">
                                        <input type="input" v-model="buildingFacebook"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>

                                </div>
                            </div>
                            <div class="grid grid-cols-2 w-[100%]  gap-4 mt-[10px] ">
                                <div>
                                    <div class="font-bold">อัตราภาษีหอพัก</div>
                                    <div class="mt-[5px]">
                                        <vs-input v-model="buildingTax"/>
                                    </div>
                                    <div v-if="errorFieldMessage !== ''" class="text-danger">
                                            {{ errorFieldMessage }}
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">DueDate</div>
                                    <div class="mt-[5px]">
                                        <vs-input v-model="buildingDueDate"/>
                                    </div>
                                    <div v-if="errorFieldMessage !== ''" class="text-danger">
                                            {{ errorFieldMessage }}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="pl-[50px] pr-[50px] flex justify-end"><button @click="createBuilding()"
                        class="h-[36px] bg-[#003765] text-white pl-[24px]  pr-[24px] text-center rounded-[12px]">สร้าง</button>
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
            buildingName: "",
            buildingAddress: "",
            buildingProvince: "",
            buildingDistrict: "",
            buildingSubDistrict: "",
            buildingPostcode: "",
            buildingPhone: "",
            buildingEmail: "",
            buildingLine: "",
            buildingFacebook: "",
            buildingTax: "",
            buildingDueDate: "",
            tempBuilding: [],
            imageUrl: '',
            errorFieldMessage: ''
        }
    },
    mounted() {
        this.$store.state.main = false
    },
    methods: {
        //    getBuilding(){
        //     fetch('/buildings')
        //    }
        previewImage(event) {
            const file = event.target.files[0];
            this.tempBuilding = event.target.files[0];
            if (file) {
                // Read the file as a URL
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.imageUrl = e.target.result; // Set the image URL for preview
                };
                reader.readAsDataURL(file);
            }
        },
        validateField(){
            if( this.buildingName == '' || this.buildingAddress == '' ||  this.buildingPhone =='' || this.buildingEmail =='' ||  this.buildingLine =='' ||  this.buildingTax == '' || this.buildingDueDate ==''){
                this.errorFieldMessage = "Please fill this form"
            } else {
                this.errorFieldMessage = ''
            }
        },
        createBuilding() {
            this.validateField()
            console.log("errorFieldMessage",this.errorFieldMessage)
            if(this.errorFieldMessage == ''){
                    // console.log("test v model", this.buildingName)
                    axios.post('https://api.resguru.app/api' + '/buildings', {
                                data: {
                                    buildingName: this.buildingName,
                                    buildingAddress: this.buildingAddress,
                                    user_owner: this.$store.state.userInfo.user.id,
                                    buildingProvince: "",
                                    buildingDistrict: "",
                                    buildingSubDistrict: "",
                                    buildingPostcode: "",
                                    buildingPhone: this.buildingPhone,
                                    buildingEmail: this.buildingEmail,
                                    buildingLine: this.buildingLine,
                                    buildingFacebook: this.buildingFacebook,
                                    vat_rate: this.buildingTax,
                                    BuildingDueDate: this.buildingDueDate,
                                    publishedAt: null
                                }
                            })
                                .then(
                                    (resp) => {
                                        if (this.tempBuilding.length != 0) {
                                            let formData = new FormData();
                                            formData.append("files", this.tempBuilding);
                                            formData.append("refId", String(resp.data.data.id));
                                            formData.append("ref", "api::building.building");
                                            formData.append("field", "buildingLogo");

                                            axios.post("https://api.resguru.app/api/upload", formData, {
                                                headers: {
                                                    "Content-Type": "multipart/form-data",
                                                },
                                            })
                                            .then((result) => { console.log("Upload file", result) })

                                        }

                                        this.routeToPlan(resp.data.data.id)

                                    }
                                )
                                .catch(error => {
                                    const errorMessage = error.message ? error.message : 'Error updating information';
                                    this.$showNotification('danger', errorMessage);
                                })
                                .finally(() => {
                                    this.$showNotification('#3A89CB', 'Created Building Success')
                                   
                                })
            }
      

        },
        setTempUploadbuildingProfile() {
            this.tempBuilding = this.$refs.buildingProfile.files[0]
        },
        routeTo() {
            this.$router.push({
                path: '/',
            })
        },
        routeToPlan(buildingid) {
            this.$router.push({
                path: '/plan?building=' + buildingid ,
            })
        }
    },
}
</script>
<style>
#create {
    background-color: white;
}
</style>