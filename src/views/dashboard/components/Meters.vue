<template>
    <div id="payment" class="p-[20px] rounded-[22px] mt-[18px]">
        <div class="flex justify-between">
            <div class="flex">
                <div class="flex items-center">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_1413_29967" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                            width="34" height="34">
                            <rect width="34" height="34" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1413_29967)">
                            <path
                                d="M17 30.4582C14.1888 30.4582 11.7152 29.477 9.57911 27.5147C7.44304 25.5525 6.375 22.8973 6.375 19.5493C6.375 17.4429 7.17733 15.1519 8.78199 12.6764C10.3866 10.2008 12.8122 7.50573 16.0588 4.59106C16.1922 4.47808 16.3398 4.39072 16.5014 4.32898C16.663 4.26721 16.8292 4.23633 17 4.23633C17.1707 4.23633 17.3369 4.26721 17.4985 4.32898C17.6602 4.39072 17.8077 4.47808 17.9411 4.59106C21.1877 7.50573 23.6133 10.2008 25.2179 12.6764C26.8226 15.1519 27.6249 17.4429 27.6249 19.5493C27.6249 22.8973 26.5569 25.5525 24.4208 27.5147C22.2848 29.477 19.8111 30.4582 17 30.4582ZM17 28.3332C19.3756 28.3332 21.3862 27.5164 23.0317 25.8827C24.6772 24.249 25.5 22.138 25.5 19.5499C25.5 17.8735 24.8034 15.9551 23.4104 13.7947C22.0173 11.6343 19.8805 9.23184 17 6.58739C14.1194 9.23184 11.9826 11.6343 10.5895 13.7947C9.19649 15.9551 8.49996 17.8735 8.49996 19.5499C8.49996 22.138 9.32272 24.249 10.9682 25.8827C12.6138 27.5164 14.6243 28.3332 17 28.3332ZM17.3487 26.6986C17.5957 26.675 17.7991 26.5826 17.9589 26.4214C18.1188 26.2602 18.1987 26.0658 18.1987 25.8382C18.1987 25.5727 18.1116 25.3623 17.9374 25.207C17.7632 25.0517 17.5406 24.9859 17.2697 25.0095C16.3016 25.0803 15.2473 24.7966 14.1067 24.1582C12.9661 23.5197 12.2541 22.4096 11.9708 20.8276C11.9236 20.5861 11.8223 20.3963 11.667 20.2582C11.5117 20.1202 11.3269 20.0512 11.1126 20.0512C10.8547 20.0512 10.6399 20.1479 10.4683 20.3413C10.2967 20.5348 10.2418 20.7831 10.3035 21.0864C10.6867 23.1442 11.613 24.6154 13.0823 25.4999C14.5517 26.3844 15.9738 26.784 17.3487 26.6986Z"
                                fill="#003765" />
                        </g>
                    </svg>
                </div>
                <div class="text-[20px] font-bold flex items-center ml-[4px]">มิเตอร์</div>
                <button 
                    @click="navigateToFeePage" 
                    class="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs hover:bg-blue-200 flex items-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    ดูเพิ่มเติม
                </button>
            </div>
        </div>
        <div class="mt-4">
            <div class="flex justify-center items-center">
                <div @click="tab = 1" class="cursor-pointer text-[#8396A6] flex justify-center items-center text-[1rem] w-[100%]"
                    :class="tab == 1 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[8px] text-[white]' : 'flex justify-center items-center'">
                    น้ำ</div>
                <div @click="tab = 2" class="cursor-pointer text-[#8396A6] ml-[8px] flex justify-center items-center text-[1rem] w-[100%]"
                    :class="tab == 2 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[8px] text-[white]' : 'flex justify-center items-center'">
                    ไฟฟ้า</div>
                <div @click="tab = 3" class="cursor-pointer text-[#8396A6] ml-[8px] flex justify-center items-center text-[1rem] w-[100%]"
                    :class="tab == 3 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[8px] text-[white]' : 'flex justify-center items-center'">
                    ค่าส่วนกลาง</div>
                <div @click="tab = 4" class="cursor-pointer text-[#8396A6] ml-[8px] flex justify-center items-center text-[1rem] w-[100%]"
                    :class="tab == 4 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[8px] text-[white]' : 'flex justify-center items-center'">
                    ค่าบริการเสริม</div>
            </div>
        </div>
        <div class="mt-[18px]" :class="meterRows.length > 5 ? 'table-container' : ''" v-if="tab == 1 || tab == 2 || tab == 3">
            <vs-table>
                <template #thead>
                    <vs-tr>
                        <vs-th v-if="tab == 1 || tab == 2">
                            เลขห้อง
                        </vs-th>
                        <vs-th v-if="(tab == 1 || tab == 2) && allBuilding">
                            ชื่อหอพัก
                        </vs-th>
                        <vs-th v-if="tab == 1 || tab == 2">
                            หน่วยจดเดือนก่อนหน้า
                        </vs-th>
                        <vs-th v-if="tab == 1 || tab == 2">
                            หน่วยจดเดือนปัจจุบัน
                        </vs-th>
                        <vs-th v-if="tab == 1 || tab == 2">
                            หน่วยที่ใช้
                        </vs-th>
                        <vs-th v-if="tab == 3">
                            เลขห้อง
                        </vs-th>
                        <vs-th v-if="tab == 3 && allBuilding">
                            ชื่อหอพัก
                        </vs-th>
                        <vs-th v-if="tab == 3">
                            ค่าส่วนกลาง
                        </vs-th>
                    </vs-tr>
                </template>
                <template #tbody>
                    <vs-tr :key="i" v-for="(tr, i) in meterRows" :data="tr">
                        <vs-td v-if="tab == 1 || tab == 2">
                            {{ tr.RoomNumber }}
                        </vs-td>
                        <vs-td v-if="(tab == 1 || tab == 2) && allBuilding">
                            {{ getBuildingName(tr) }}
                        </vs-td>
                        <vs-td v-if="tab == 1 || tab == 2">
                            <div v-if="tab == 1">{{ getWaterPreviousUnit(tr) }}</div>
                            <div v-else-if="tab == 2">{{ getElectricPreviousUnit(tr) }}</div>

                        </vs-td>
                        <vs-td v-if="tab == 1 || tab == 2">
                            <div v-if="tab == 1">{{ getWaterCurrentUnit(tr) }}</div>
                            <div v-else-if="tab == 2">{{ getElectricCurrentUnit(tr) }}</div>

                        </vs-td>
                        <vs-td v-if="tab == 1 || tab == 2">
                            <div v-if="tab == 1">{{ getWaterUsage(tr) }}</div>
                            <div v-else-if="tab == 2">{{ getElectricUsage(tr) }}</div>
                        </vs-td>
                        <vs-td v-if="tab == 3">
                            {{ tr.RoomNumber }}
                        </vs-td>
                        <vs-td v-if="tab == 3 && allBuilding">
                            {{ getBuildingName(tr) }}
                        </vs-td>
                        <vs-td v-if="tab == 3">
                            {{ getCommunalUnit(tr) }}
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </div>
        <div class="mt-[18px]" v-else-if="tab == 4" :class="meterRows.length > 5 ? 'table-container' : ''">
            <vs-table>
                <template #thead>
                    <vs-tr>
                        <vs-th>
                            เลขห้อง
                        </vs-th>
                        <vs-th v-if="allBuilding">
                            ชื่อหอพัก
                        </vs-th>
                        <vs-th>
                            ประเภท
                        </vs-th>
                        <vs-th>
                            จำนวน
                        </vs-th>
                        <!-- <vs-th>
                            รวม
                        </vs-th> -->
                    </vs-tr>
                </template>
                <template #tbody>
                    <vs-tr :key="i" v-for="(tr, i) in meterRows" :data="tr">
                        <vs-td>
                            {{ tr.RoomNumber }}
                        </vs-td>
                        <vs-td v-if="allBuilding">
                            {{ getBuildingName(tr) }}
                        </vs-td>
                        <vs-td>
                            <div v-for="item in getOtherServices(tr)" :key="item.id || item.title">
                                {{ item.title }}
                            </div>
                        </vs-td>
                        <vs-td>
                            <div v-for="item in getOtherServices(tr)" :key="item.id || item.title">
                                {{ item.price }}
                            </div>
                        </vs-td>
                        <!-- <vs-td>
                            {{totalSum}}
                        </vs-td> -->
                    </vs-tr>
                </template>
            </vs-table>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        data: { type: [Array, Object], default: () => [] },
        allBuilding: {
            type: Boolean,
            default: false,
        },
        routeLink: {
            type: String,
            default: '/fee'
        },
    },
    data() {
        return {
            tab: 1,
        }
    },
    methods: {
        toNumber(value) {
            const num = Number(value);
            return Number.isFinite(num) ? num : 0;
        },
        getNumericValue(source, keys = []) {
            if (!source || typeof source !== 'object') return null;

            for (const key of keys) {
                const raw = source?.[key];
                if (raw === null || raw === undefined || raw === '') continue;
                const num = Number(raw);
                if (Number.isFinite(num)) return num;
            }

            return null;
        },
        displayValue(value) {
            return value === null || value === undefined ? '-' : value;
        },
        getWaterFees(room) {
            return Array.isArray(room?.water_fees) ? room.water_fees : [];
        },
        getElectricFees(room) {
            return Array.isArray(room?.electric_fees) ? room.electric_fees : [];
        },
        getWaterFeeCurrentNumeric(room) {
            const fees = this.getWaterFees(room);
            return (
                this.getNumericValue(fees[0], ['meterUnit']) ??
                this.getNumericValue(room, ['newWater'])
            );
        },
        getWaterFeePreviousNumeric(room) {
            const fees = this.getWaterFees(room);
            const explicitPrevious =
                this.getNumericValue(fees[1], ['meterUnit']) ??
                this.getNumericValue(room, ['previousWaterValue']) ??
                this.getNumericValue(room?.user_sign_contract, ['startWater']);

            if (explicitPrevious !== null) return explicitPrevious;

            const current = this.getWaterFeeCurrentNumeric(room);
            const usage = this.getNumericValue(fees[0], ['usageMeter']);
            if (current !== null && usage !== null) {
                return Math.max(0, current - usage);
            }

            return null;
        },
        getWaterCurrentUnit(room) {
            return this.displayValue(this.getWaterFeeCurrentNumeric(room));
        },
        getWaterPreviousUnit(room) {
            return this.displayValue(this.getWaterFeePreviousNumeric(room));
        },
        getWaterUsage(room) {
            const fees = this.getWaterFees(room);
            const usageFromApi = this.getNumericValue(fees[0], ['usageMeter']);
            if (usageFromApi !== null) return usageFromApi;

            const current = this.getWaterFeeCurrentNumeric(room);
            const previous = this.getWaterFeePreviousNumeric(room);
            if (current === null || previous === null) return '-';

            return Math.max(0, current - previous);
        },
        getElectricFeeCurrentNumeric(room) {
            const fees = this.getElectricFees(room);
            return (
                this.getNumericValue(fees[0], ['electicUnit', 'electricUnit', 'meterUnit']) ??
                this.getNumericValue(room, ['newElec'])
            );
        },
        getElectricFeePreviousNumeric(room) {
            const fees = this.getElectricFees(room);
            const explicitPrevious =
                this.getNumericValue(fees[1], ['electicUnit', 'electricUnit', 'meterUnit']) ??
                this.getNumericValue(room, ['previousElectricValue']) ??
                this.getNumericValue(room?.user_sign_contract, ['startElectric']);

            if (explicitPrevious !== null) return explicitPrevious;

            const current = this.getElectricFeeCurrentNumeric(room);
            const usage = this.getNumericValue(fees[0], ['usageMeter']);
            if (current !== null && usage !== null) {
                return Math.max(0, current - usage);
            }

            return null;
        },
        getElectricCurrentUnit(room) {
            return this.displayValue(this.getElectricFeeCurrentNumeric(room));
        },
        getElectricPreviousUnit(room) {
            return this.displayValue(this.getElectricFeePreviousNumeric(room));
        },
        getElectricUsage(room) {
            const fees = this.getElectricFees(room);
            const usageFromApi = this.getNumericValue(fees[0], ['usageMeter']);
            if (usageFromApi !== null) return usageFromApi;

            const current = this.getElectricFeeCurrentNumeric(room);
            const previous = this.getElectricFeePreviousNumeric(room);
            if (current === null || previous === null) return '-';

            return Math.max(0, current - previous);
        },
        getCommunalUnit(room) {
            const communalFees = Array.isArray(room?.communal_fees) ? room.communal_fees : [];
            return communalFees[0]?.communalUnit ?? '-';
        },
        getOtherServices(room) {
            return Array.isArray(room?.other_of_buildings) ? room.other_of_buildings : [];
        },
        getBuildingName(room) {
            return (
                room?.room_building?.buildingName ||
                room?.user_sign_contract?.room?.room_building?.buildingName ||
                '-'
            );
        },
        navigateToFeePage() {
            // Use the routeLink prop if provided, otherwise use a default path
            const path = this.routeLink || '/fee';
            this.$router.push(path);
        }
    },
    computed: {
        meterRows() {
            if (Array.isArray(this.data)) {
                return this.data;
            }

            if (Array.isArray(this.data?.roomData)) {
                return this.data.roomData;
            }

            return [];
        },
        // totalSum() {
        //     return this.data.other_of_buildings.reduce((acc, val) => acc + val,price, 0);
        // }
    }
}
</script>
<style scoped>
tbody tr:nth-child(odd) {
  background-color: #c3d4f1;
  border-radius: solid !important;
}
tbody tr:nth-child(even) {
  background-color: #e3e5e9;
  border-radius: solid !important; 
}
th {
  font-size: 16px;
}
tbody td:first-child {
  font-size: 14px;
  width: 70;
}
tbody td {
  font-size: 14px;
}

#payment {
    background-color: rgb(255, 255, 255);
}

.table-container {
    height: 250px;
    /* Set a fixed height to enable scrolling */
    overflow-y: scroll;
    /* Enable vertical scrolling */
    padding: 10px;
    /* Optional: Add padding for spacing */
}

/* width */
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #ffff;
    border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #E9EEF6;
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #E9EEF6;
}
</style>