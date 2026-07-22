<template>
    <div class="flex w-[100%]" id="create">
        <div class="bg-resguru-navy w-[35%] rounded-r-[40px] relative overflow-hidden">
            <div class="flex flex-col justify-between w-[100%] h-[100vh!important] relative z-10">
                <div class="pl-[40px] pt-[30px]">
                    <div class="text-[white] flex mt-[16px] cursor-pointer items-center" @click="routeTo()">
                        <div class="flex justify-center items-center mr-[8px]"><svg width="7" height="12" viewBox="0 0 7 12"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.338101 5.99962C0.338101 5.88552 0.357334 5.77495 0.3958 5.6679C0.434267 5.56085 0.500293 5.46053 0.593876 5.36695L5.10348 0.857324C5.24834 0.712458 5.42142 0.642591 5.6227 0.647724C5.82398 0.652841 5.99706 0.727841 6.14193 0.872724C6.28679 1.01759 6.35923 1.19322 6.35923 1.39962C6.35923 1.60602 6.28679 1.78166 6.14193 1.92652L2.06883 5.99962L6.1573 10.0881C6.30217 10.233 6.37204 10.406 6.36693 10.6073C6.36179 10.8086 6.28679 10.9817 6.14193 11.1265C5.99706 11.2714 5.82142 11.3438 5.615 11.3438C5.4086 11.3438 5.23297 11.2714 5.0881 11.1265L0.593876 6.6323C0.500293 6.53872 0.434267 6.44 0.3958 6.33615C0.357334 6.23232 0.338101 6.12014 0.338101 5.99962Z"
                                    fill="white" />
                            </svg></div>
                        <div class="flex justify-center items-center">ย้อนกลับ</div>
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="24" y="40" width="48" height="64" rx="4" stroke="#F5D65E" stroke-width="3" />
                        <rect x="34" y="52" width="10" height="10" rx="1" fill="#F5D65E" />
                        <rect x="52" y="52" width="10" height="10" rx="1" fill="#F5D65E" />
                        <rect x="34" y="70" width="10" height="10" rx="1" fill="#F5D65E" />
                        <rect x="52" y="70" width="10" height="10" rx="1" fill="#F5D65E" />
                        <rect x="43" y="88" width="14" height="16" fill="#F5D65E" />
                        <path d="M76 60L96 44V84L76 68" stroke="white" stroke-width="3" stroke-linejoin="round" />
                        <circle cx="60" cy="18" r="10" stroke="#F5D65E" stroke-width="3" />
                        <path d="M60 24V32M56 28H64" stroke="#F5D65E" stroke-width="3" stroke-linecap="round" />
                    </svg>
                    <div
                        class="text-[white] text-[28px] font-bold w-[100%] text-center mt-[32px] px-[24px] flex flex-col justify-center items-center">
                        สร้างหอพัก</div>
                    <div class="text-white/70 text-sm mt-[8px] text-center px-[40px]">กรอกข้อมูลหอพักของคุณเพื่อเริ่มต้นใช้งาน</div>
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
            <div class="absolute -right-12 -top-12 w-[160px] h-[160px] rounded-full bg-resguru-yellow opacity-[0.12]"></div>
            <div class="absolute -left-16 bottom-[140px] w-[100px] h-[100px] rounded-full bg-resguru-yellow opacity-[0.08]"></div>
        </div>
        <div class="w-[65%] pt-[10px]">
            <div class="flex flex-col justify-around w-[100%] h-[100%]">
                <div>
                    <div class="w-[100%] flex justify-center items-center">
                        <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start" id="upload"
                            ref="buildingProfile" hidden @change="previewImage" type="file" accept="image/*" />
                        <label for="upload" class="cursor-pointer group">
                            <div v-if="imageUrl">
                                <img :src="imageUrl" alt="Preview"
                                    class="w-[150px] h-[150px] rounded-[22px] bg-resguru-light object-cover border border-gray-200 group-hover:border-resguru-blue transition-colors" />
                            </div>
                            <div v-else
                                class="w-[150px] h-[150px] rounded-[22px] bg-resguru-light border border-dashed border-gray-300 text-center flex flex-col justify-center items-center gap-2 group-hover:border-resguru-blue group-hover:bg-blue-50 transition-colors">
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 16V8M12 8L9 11M12 8L15 11" stroke="#8396A6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4 16.5V17.5C4 18.6046 4.89543 19.5 6 19.5H18C19.1046 19.5 20 18.6046 20 17.5V16.5" stroke="#8396A6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div class="text-gray-500 text-xs px-2">อัพโหลดโลโก้หอพัก</div>
                            </div>
                        </label>
                    </div>
                    <div class="flex justify-center items-center w-[100%] pl-[50px] pr-[50px]">
                        <div class="flex flex-col justify-center w-[100%] max-w-[560px]">
                            <div class="text-resguru-navy font-bold text-base mt-[20px] mb-[4px] pb-[8px] border-b border-gray-100">
                                ข้อมูลหอพัก
                            </div>
                            <div class="grid grid-cols-1 w-[100%] gap-4 mt-[10px]">
                                <div>
                                    <div class="font-semibold text-gray-700">ชื่อหอพัก <span class="text-red-500">*</span></div>
                                    <div class="mt-[6px]">
                                        <input type="input" v-model="buildingName"
                                            :class="['h-[40px] w-[100%] rounded-[12px] bg-resguru-light px-3 border focus:border-resguru-blue focus:outline-none', errors.buildingName ? 'border-red-500' : 'border-gray-200']" />
                                        <div v-if="errors.buildingName" class="text-red-500 text-sm mt-1">
                                            {{ errors.buildingName }}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="text-resguru-navy font-bold text-base mt-[24px] mb-[4px] pb-[8px] border-b border-gray-100">
                                ที่อยู่
                            </div>
                            <div class="grid grid-cols-1 w-[100%] gap-4 mt-[10px]">
                                <div>
                                    <div class="font-semibold text-gray-700">ที่อยู่</div>
                                    <div class="mt-[6px]">
                                        <input type="input" v-model="buildingAddress"
                                            class="h-[40px] w-[100%] rounded-[12px] bg-resguru-light px-3 border border-gray-200 focus:border-resguru-blue focus:outline-none" />
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 w-[100%] gap-4 mt-[10px]">
                                <div>
                                    <div class="font-semibold text-gray-700">เขต</div>
                                    <div class="mt-[6px]">
                                        <input type="input" v-model="buildingSubDistrict"
                                            class="h-[40px] w-[100%] rounded-[12px] bg-resguru-light px-3 border border-gray-200 focus:border-resguru-blue focus:outline-none" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-semibold text-gray-700">แขวง/อำเภอ</div>
                                    <div class="mt-[6px]">
                                        <input type="input" v-model="buildingDistrict"
                                            class="h-[40px] w-[100%] rounded-[12px] bg-resguru-light px-3 border border-gray-200 focus:border-resguru-blue focus:outline-none" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-semibold text-gray-700">จังหวัด</div>
                                    <div class="mt-[6px]">
                                        <input type="input" v-model="buildingProvince"
                                            class="h-[40px] w-[100%] rounded-[12px] bg-resguru-light px-3 border border-gray-200 focus:border-resguru-blue focus:outline-none" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-semibold text-gray-700">รหัสไปรษณี</div>
                                    <div class="mt-[6px]">
                                        <input type="input" v-model="buildingPostcode"
                                            class="h-[40px] w-[100%] rounded-[12px] bg-resguru-light px-3 border border-gray-200 focus:border-resguru-blue focus:outline-none" />
                                    </div>
                                </div>
                            </div>

                            <div class="text-resguru-navy font-bold text-base mt-[24px] mb-[4px] pb-[8px] border-b border-gray-100">
                                ช่องทางติดต่อ
                            </div>
                            <div class="grid grid-cols-2 w-[100%] gap-4 mt-[10px]">
                                <div>
                                    <div class="font-semibold text-gray-700">เบอร์โทรติดต่อ</div>
                                    <div class="mt-[6px]">
                                        <input type="input" v-model="buildingPhone"
                                            class="h-[40px] w-[100%] rounded-[12px] bg-resguru-light px-3 border border-gray-200 focus:border-resguru-blue focus:outline-none" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-semibold text-gray-700">อีเมล</div>
                                    <div class="mt-[6px]">
                                        <input type="input" v-model="buildingEmail"
                                            class="h-[40px] w-[100%] rounded-[12px] bg-resguru-light px-3 border border-gray-200 focus:border-resguru-blue focus:outline-none" />
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 w-[100%] gap-4 mt-[10px]">
                                <div>
                                    <div class="font-semibold text-gray-700">ไลน์ติดต่อ</div>
                                    <div class="mt-[6px]">
                                        <input type="input" v-model="buildingLine"
                                            class="h-[40px] w-[100%] rounded-[12px] bg-resguru-light px-3 border border-gray-200 focus:border-resguru-blue focus:outline-none" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-semibold text-gray-700">เฟสบุ๊ค</div>
                                    <div class="mt-[6px]">
                                        <input type="input" v-model="buildingFacebook"
                                            class="h-[40px] w-[100%] rounded-[12px] bg-resguru-light px-3 border border-gray-200 focus:border-resguru-blue focus:outline-none" />
                                    </div>
                                </div>
                            </div>

                            <div class="text-resguru-navy font-bold text-base mt-[24px] mb-[4px] pb-[8px] border-b border-gray-100">
                                การเงิน
                            </div>
                            <div class="grid grid-cols-2 w-[100%] gap-4 mt-[10px]">
                                <div>
                                    <div class="font-semibold text-gray-700">หอพักเก็บภาษีหรือไม่ <span class="text-red-500">*</span></div>
                                    <div class="mt-[6px]">
                                        <vs-select v-model="buildingTax"
                                            :class="{'border border-red-500 rounded-[12px]': errors.buildingTax}">
                                            <vs-option label="0%" value="0">0%</vs-option>
                                            <vs-option label="7%" value="7">7%</vs-option>
                                        </vs-select>
                                        <div v-if="errors.buildingTax" class="text-red-500 text-sm mt-1">
                                            {{ errors.buildingTax }}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="font-semibold text-gray-700">วันครบรอบชำระเงิน <span class="text-red-500">*</span></div>
                                    <div class="mt-[6px]">
                                        <vs-select v-model="buildingDueDate"
                                            :class="{'border border-red-500 rounded-[12px]': errors.buildingDueDate}">
                                            <vs-option v-for="day in 29" :key="day-1" :label="`${day-1}`" :value="day-1">
                                                {{ day-1 }}
                                            </vs-option>
                                        </vs-select>
                                        <div v-if="errors.buildingDueDate" class="text-red-500 text-sm mt-1">
                                            {{ errors.buildingDueDate }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pl-[50px] pr-[50px] flex justify-end mt-[20px]">
                    <button @click="createBuilding()"
                        class="h-[40px] bg-resguru-navy text-white pl-[28px] pr-[28px] text-center rounded-[12px] font-semibold hover:bg-[#004080] transition-colors">สร้าง</button>
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
            errors: {
                buildingName: '',
                buildingTax: '',
                buildingDueDate: ''
            },
            submitted: false
        }
    },
    mounted() {
        this.$store.state.main = false
    },
    methods: {
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
        validateForm() {
            // Reset all errors
            this.errors = {
                buildingName: '',
                buildingTax: '',
                buildingDueDate: ''
            };
            
            let isValid = true;
            
            // Validate buildingName
            if (!this.buildingName.trim()) {
                this.errors.buildingName = 'กรุณากรอกชื่อหอพัก';
                isValid = false;
            }
            
            // Validate buildingTax
            if (this.buildingTax === '') {
                this.errors.buildingTax = 'กรุณาเลือกภาษี';
                isValid = false;
            }
            
            // Validate buildingDueDate
            if (this.buildingDueDate === '') {
                this.errors.buildingDueDate = 'กรุณาเลือกวันครบรอบชำระเงิน';
                isValid = false;
            }
            
            return isValid;
        },
        createBuilding() {
            if (!this.validateForm()) {
                this.$showNotification('danger', "กรุณากรอกข้อมูลที่จำเป็น");
                return;
            }
            
            // Proceed with form submission
            axios.post('https://api.resguru.app/api' + '/buildings', {
                data: {
                    buildingName: this.buildingName,
                    buildingAddress: this.buildingAddress,
                    user_owner: this.$store.state.userInfo.id,
                    buildingProvince: this.buildingProvince,
                    buildingDistrict: this.buildingDistrict,
                    buildingSubDistrict: this.buildingSubDistrict,
                    buildingPostcode: this.buildingPostcode,
                    waterUnitPrice: 0,
                    electricUnitPrice: 0,
                    communalUnitPrice: 0,
                    buildingPhone: this.buildingPhone,
                    buildingEmail: this.buildingEmail,
                    buildingLine: this.buildingLine,
                    buildingFacebook: this.buildingFacebook,
                    vat_rate: this.buildingTax,
                    BuildingDueDate: this.buildingDueDate,
                    publishedAt: null,
                    colorCode: '#E0ECE4'
                }
            })
            .then((resp) => {
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
                    .catch((error) => {
                        console.error("Error uploading building logo:", error);
                    })
                }
                this.routeToPlan(resp.data.data.id)
            })
            .catch(error => {
                const errorMessage = error.message ? error.message : 'Error updating information';
                this.$showNotification('danger', errorMessage);
            })
            .finally(() => {
                this.$showNotification('#3A89CB', 'สร้างหอพักใหม่สำเร็จ');
            })
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
                path: '/plan?building=' + buildingid,
            })
        }
    },
}
</script>

<style>
#create {
    background-color: white;
}

/* Add styles for validation */
.text-red-500 {
    color: #f56565;
}

.border-red-500 {
    border-color: #f56565;
}
</style>