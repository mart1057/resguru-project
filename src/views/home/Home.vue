<template>
    <div class="flex w-[100%]" id="home">
        <div class="bg-[#003765] w-[40%] rounded-r-[40px]">
            <div class="flex flex-col justify-between w-[100%] h-[100vh!important] ">
                <div class="pl-[50px] pt-[30px]">
                    <!-- new logout botton-->
                    <button @click="logoutTo()" class="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold rounded-xl transition-colors duration-200 cursor-pointer shadow-lg">
                        <div class="flex justify-center items-center mr-3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44772 3 5 3H9M16 17L21 12M21 12L16 7M21 12H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <span>ออกจากระบบ</span>
                    </button>
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
                        class="text-[white] text-[2.1vw]  w-[100%] text-center mt-[60px] flex flex-col justify-center items-center">
                        สำหรับเจ้าของห้องพัก</div>
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
        <div class="flex-1 min-w-0 h-[100vh] overflow-y-auto pt-[40px] px-[44px]">
            <div class="flex justify-end mb-[28px]">
                <div class="flex items-center gap-[10px]">
                    <vs-avatar size="40" v-if="$store.state.userInfo.imageProfile?.formats?.small?.url">
                        <img :src="'https://api.resguru.app' + $store.state.userInfo.imageProfile?.formats?.small?.url" />
                    </vs-avatar>
                    <vs-avatar size="40" v-else>
                        {{ ($store.state.userInfo.firstName || '?').charAt(0).toUpperCase() }}
                    </vs-avatar>
                    <div class="text-[14px] font-semibold text-[#003765]">
                        {{ $store.state.userInfo.firstName }} {{ $store.state.userInfo.lastName }}
                    </div>
                </div>
            </div>

            <div class="text-[26px] font-bold text-[#003765] text-custom">เลือกหอพักของคุณ</div>
            <div class="text-[14px] text-[#5C6B79] text-custom mt-[6px] mb-[28px]">เลือกหอพักที่ต้องการจัดการ หรือสร้างหอพักใหม่</div>

            <div class="grid gap-[20px] pb-[48px] [grid-template-columns:repeat(auto-fill,minmax(320px,1fr))]">

                <div v-for="data in building" :key="data.id"
                    class="rounded-[18px] border border-[#E3EAF1] bg-white overflow-hidden flex flex-col transition-shadow duration-200 hover:shadow-[0_8px_28px_rgba(0,55,101,0.12)]"
                    :class="{ 'opacity-70': data.attributes.buildingPaymentStatus == 'Inactive' }">

                    <div class="h-[128px] relative flex items-center justify-center"
                        :style="{ background: data.attributes.colorCode || '#003765' }">
                        <img v-if="logoUrl(data)" :src="logoUrl(data)"
                            class="h-[78px] w-[78px] rounded-[16px] object-cover bg-white/25 shadow-sm" />
                        <img v-else :src="Logo01" class="h-[60px] w-[60px] object-contain opacity-90" />

                        <span v-if="packageTitle(data)"
                            class="absolute top-[10px] left-[12px] text-[11px] text-custom px-[8px] py-[2px] rounded-full bg-black/25 text-white">
                            {{ packageTitle(data) }}
                        </span>
                        <span v-if="data.attributes.buildingPaymentStatus == 'Inactive'"
                            class="absolute top-[10px] right-[12px] text-[11px] text-custom font-bold px-[8px] py-[3px] rounded-full bg-white text-[#D44769]">
                            ค้างชำระ
                        </span>
                        <button type="button" @click="routeToEditBuilding(data.id)" title="ตั้งค่าหอพัก"
                            class="absolute bottom-[10px] right-[12px] h-[28px] w-[28px] rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors">
                            <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="2.0013" cy="2.16667" rx="1.66667" ry="1.66667" transform="rotate(90 2.0013 2.16667)" fill="#5C6B79" />
                                <circle cx="2.0013" cy="7.99967" r="1.66667" transform="rotate(90 2.0013 7.99967)" fill="#5C6B79" />
                                <ellipse cx="2.0013" cy="13.8337" rx="1.66667" ry="1.66667" transform="rotate(90 2.0013 13.8337)" fill="#5C6B79" />
                            </svg>
                        </button>
                    </div>

                    <div class="p-[16px] flex flex-col gap-[12px] flex-1">
                        <div class="text-[16px] font-bold text-[#1A2733] text-custom truncate">{{ data.attributes.buildingName }}</div>

                        <div class="flex items-center justify-between text-[12px] text-custom text-[#5C6B79] border-t border-[#EEF2F6] pt-[10px]">
                            <span>สร้างเมื่อ</span>
                            <span class="text-[#1A2733]">{{ covertDate(data.attributes.createdAt) }}</span>
                        </div>

                        <div class="mt-auto flex items-center gap-[8px] pt-[4px]">
                            <button v-if="data.attributes.buildingPaymentStatus == 'Active'" type="button"
                                @click="routeToMain(data.id)"
                                class="flex-1 h-[40px] rounded-[12px] bg-[#003765] hover:bg-[#00294d] text-white text-[14px] font-bold text-custom transition-colors">
                                เข้าใช้งาน
                            </button>
                            <div v-else
                                class="flex-1 h-[40px] rounded-[12px] bg-[#F1F3F5] text-[#8A97A2] text-[13px] font-bold text-custom flex items-center justify-center cursor-not-allowed"
                                title="โปรดชำระค่าต่ออายุประจำเดือนของหอพัก หรือติดต่อแอดมิน">
                                ต่ออายุก่อนใช้งาน
                            </div>

                            <label title="เปลี่ยนธีมสี"
                                class="relative h-[40px] w-[40px] rounded-[12px] border border-[#E3EAF1] hover:border-[#B9CCDC] flex items-center justify-center cursor-pointer transition-colors">
                                <span class="h-[16px] w-[16px] rounded-full border border-[#D9E1E8]"
                                    :style="{ background: data.attributes.colorCode || '#003765' }"></span>
                                <input type="color" v-model="data.attributes.colorCode"
                                    @change="updateBuildingColor(data.id, data.attributes.colorCode)"
                                    class="absolute inset-0 opacity-0 cursor-pointer" />
                            </label>
                        </div>
                    </div>
                </div>

                <button type="button" @click="routeTo()"
                    class="rounded-[18px] border-2 border-dashed border-[#C9D6E2] bg-[#F7FAFD] hover:border-[#003765] hover:bg-[#F0F6FC] text-[#5C6B79] hover:text-[#003765] flex flex-col items-center justify-center gap-[10px] min-h-[260px] transition-colors cursor-pointer">
                    <span class="h-[52px] w-[52px] rounded-full bg-white border border-[#E3EAF1] flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </span>
                    <span class="text-[14px] font-bold text-custom">สร้างหอพักใหม่</span>
                </button>
            </div>

            <div v-if="building.length === 0" class="text-center text-[#8A97A2] text-custom py-[32px]">
                ยังไม่มีหอพัก กดปุ่ม “สร้างหอพักใหม่” เพื่อเริ่มต้น
            </div>
        </div>
    </div>
</template>
<script>
import Logo01 from '@/assets/img/Logo-01.png'
import axios from 'axios'
import router from '@/router'
export default {
    data() {
        return {
            Logo01,
            building: [],
            color: '',
        }
    },
    mounted() {
        this.$store.state.main = false
        this.getBuilding()
    },
    methods: {
        routeTo() {
            router.push({
                path: '/create_building',
            })
        },
        // routeToMain(buidingId) {
        //     this.$store.commit('setMain', true);
        //     this.$store.commit('setBuilding', buidingId);
        //     router.push({
        //         path: '/dashboard',
        //     })
        //     this.$store.state.main = true
        // },
        routeToMain(buildingId) {
            this.$store.commit('setMain', true);
            this.$store.commit('setBuilding', buildingId);

            // Find selected building from the list
            const selectedBuilding = this.building.find(b => b.id === buildingId);
            if (selectedBuilding) {
                this.$store.commit('setBuildingInfo', [selectedBuilding]); // Update buildingInfo in Vuex
            }

            router.push({
                path: '/dashboard',
            });
        },
        routeToEditBuilding(buidingId) {
            this.$store.commit('setMain', true);
            this.$store.commit('setBuilding', buidingId);

            const selectedBuilding = this.building.find(b => b.id === buidingId);
            if (selectedBuilding) {
                this.$store.commit('setBuildingInfo', [selectedBuilding]);
            }

            router.push({
                path: '/setting?tab=1&tabsetting=2',
            }).catch(() => {})
        },
        logoUrl(data) {
            const url = data?.attributes?.buildingLogo?.data?.attributes?.url;
            return url ? 'https://api.resguru.app' + url : '';
        },
        packageTitle(data) {
            return data?.attributes?.package?.data?.attributes?.title || '';
        },
        covertDate(createDate) {
            var date = new Date(createDate);

            // Extract the day, month, and year components
            var day = date.getUTCDate();
            var month = date.getUTCMonth() + 1; // Months are zero-based, so add 1 to get the correct month.
            var year = date.getUTCFullYear();

            // Format the components as "dd/mm/yyyy"
            var formattedDate = day + '/' + month + '/' + year;
            return formattedDate
        },
        updateBuildingColor(buildingid,color){
             // console.log("test v model", this.buildingName)
             axios.put(`https://api.resguru.app/api/buildings/${buildingid}`,{
                data : {
                    colorCode: color,
                }
            }).catch((error) => {
                const errorMessage = this.$errMsg(error, 'บันทึกข้อมูลสีธีมหอพัก');
                this.$showNotification("danger", errorMessage);
            })

        },
        getBuilding() {
            const loading = this.$vs.loading()
            fetch(`https://api.resguru.app/api/buildings?filters[$or][0][user_owner][id][$eq]=${this.$store.state.userInfo.id}&filters[$or][1][users_admin][id][$in]=${this.$store.state.userInfo.id}&publicationState=live&populate=*`)
            .then(response => response.json())
                .then((resp) => {
                    console.log(resp.data);
                    this.building = resp.data
                    this.$store.commit('setBuildingInfo',resp.data);
                }).catch((error) => {
                    const errorMessage = this.$errMsg(error, 'โหลดข้อมูลหอพัก');
                    this.$showNotification("danger", errorMessage);
                }).finally(() => {
                    loading.close()
                })
        },
        clearLocalDtorage() {
            localStorage.clear()
        },
        reload() {
            window.location.reload()
        }, async logoutTo() {
            await this.clearLocalDtorage()
            await this.reload()
        },

    },
}
</script>
<style>
#home {
    background-color: white;
}

.color {
    position: relative;
    width: 100%;
    text-align: center;
    line-height: 100px;
}

.custom-picker {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    cursor: pointer;
}
</style>