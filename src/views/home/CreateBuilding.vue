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
                            <!-- SVG paths from original code -->
                            <!-- For brevity I'm not including all the SVG path data -->
                        </svg>
                    </div>
                    <div
                        class="text-[white] text-[32px]  w-[100%] text-center mt-[60px] flex flex-col justify-center items-center">
                        สร้างหอพักหอพัก</div>
                </div>
                <div class="ml-[-20px]">
                    <svg width="307" height="323" viewBox="0 0 307 323" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <!-- SVG content from original code -->
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
                                    class="text-[white] text-[32px] w-[150px] h-[150px] rounded-[22px] bg-[#F3F7FA] text-center flex flex-col justify-end cursor-pointer" />
                            </div>
                            <div v-else
                                class="text-[white] text-[32px] w-[150px] h-[150px] rounded-[22px] bg-[#F3F7FA] text-center flex flex-col justify-end cursor-pointer">
                                <!-- Upload icon SVG unchanged -->
                            </div>
                        </label>
                    </div>
                    <div class="flex justify-center items-center w-[100%] pl-[50px] pr-[50px]">
                        <div class="flex flex-col justify-center items-center w-[100%]">
                            <div class="grid grid-cols-1 w-[100%] gap-4 mt-[10px]">
                                <div>
                                    <div class="font-bold text-[1vw]">ชื่อหอพัก <span class="text-red-500">*</span></div>
                                    <div class="">
                                        <input type="input" v-model="buildingName"
                                            :class="['h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]', {'border border-red-500': errors.buildingName}]" />
                                        <div v-if="errors.buildingName" class="text-red-500 text-sm mt-1">
                                            {{ errors.buildingName }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 w-[100%] gap-4 mt-[10px]">
                                <div>
                                    <div class="font-bold text-[1vw]">ที่อยู่</div>
                                    <div class="">
                                        <input type="input" v-model="buildingAddress"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-4 w-[100%] gap-4 mt-[10px]">
                                <div>
                                    <div class="font-bold text-[1vw]">เขต</div>
                                    <div class="mt-[5px]">
                                        <input type="input" v-model="buildingSubDistrict"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold text-[1vw]">แขวง/อำเภอ</div>
                                    <div class="mt-[5px]">
                                        <input type="input" v-model="buildingDistrict"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold text-[1vw]">จังหวัด</div>
                                    <div class="mt-[5px]">
                                        <input type="input" v-model="buildingProvince"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold text-[1vw]">รหัสไปรษณี</div>
                                    <div class="mt-[5px]">
                                        <input type="input" v-model="buildingPostcode"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 w-[100%] gap-4 mt-[10px]">
                                <div>
                                    <div class="font-bold text-[1vw]">เบอร์โทรติดต่อ</div>
                                    <div class="">
                                        <input type="input" v-model="buildingPhone"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold text-[1vw]">อีเมล</div>
                                    <div class="">
                                        <input type="input" v-model="buildingEmail"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 w-[100%] gap-4 mt-[10px]">
                                <div>
                                    <div class="font-bold text-[1vw]">ไลน์ติดต่อ</div>
                                    <div class="">
                                        <input type="input" v-model="buildingLine"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold text-[1vw]">เฟสบุ๊ค</div>
                                    <div class="">
                                        <input type="input" v-model="buildingFacebook"
                                            class="h-[36px] w-[100%] rounded-[12px] bg-[#F3F7FA]" />
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 w-[100%] gap-4 mt-[10px]">
                                <div>
                                    <div class="font-bold text-[1vw]">หอพักเก็บภาษีหรือไม่ <span class="text-red-500">*</span></div>
                                    <div class="mt-[5px]">
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
                                    <div class="font-bold text-[1vw]">วันครบรอบชำระเงิน <span class="text-red-500">*</span></div>
                                    <div class="mt-[5px]">
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
                <div class="pl-[50px] pr-[50px] flex justify-end">
                    <button @click="createBuilding()"
                        class="h-[36px] bg-[#003765] text-white pl-[24px] pr-[24px] text-center rounded-[12px]">สร้าง</button>
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