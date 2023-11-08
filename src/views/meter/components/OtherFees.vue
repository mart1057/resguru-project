<template>
    <div class="mt-[14px] bg-[white] rounded-[12px] p-[24px]">
        <div class="font-bold text-[18px]">อาคาร A ชั้น 1</div>
        <div class="mt-[14px]">
            <vs-table>
                <template #thead>
                    <vs-tr>
                        <vs-th>
                            เลขห้อง
                        </vs-th>
                        <vs-th>
                            สถานะห้อง
                        </vs-th>
                        <vs-th>
                            ชื่อผู้เช่า
                        </vs-th>
                        <vs-th>
                            รายการค่าบริการ
                        </vs-th>
                    </vs-tr>
                </template>
                <template #tbody>
                    <vs-tr :key="i" v-for="(tr, i) in OtherFee" :data="tr">
                        <vs-td>
                            {{ tr.attributes.RoomNumber  }}
                        </vs-td>
                        <vs-td>
                            <div class="flex justify-start items-center">
                                <div class="pl-[12px] pr-[12px] pb-[4px] pt-[4px] rounded-[12px] text-center"
                                    :class="tr.status == 'มีผู้เช่า' ? 'text-[#1DC56A] bg-[#D8FAD5]' : 'text-[#8396A6] bg-[#DEEAF5]'">
                                    {{ tr.attributes.user_sign_contract.data ? "มีผู้เข้าพัก" : "ห้องว่าง" }}  
                                </div>
                            </div>

                        </vs-td>
                        <vs-td>
                            <!-- {{ tr.attributes.user_sign_contract.data ? tr.attributes.user_sign_contract.data.attributes.users_permissions_user.data.attributes.firstName : "" }}  -->
                       </vs-td>
                        <vs-td>
                            <div class="flex">
                                <div v-for="data in tr.other">
                                    <div
                                        class="bg-[#3A89CB] pl-[10px] cursor-pointer pr-[10px] pb-[10px] pt-[10px] ml-[8px] rounded-[12px] text-[white]">

                                        <div class="flex">
                                            <div>{{ data }}</div>
                                            <div class="flex items-center ml-[8px]"><svg width="12" height="12"
                                                    viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M5.99974 6.87842L1.77216 11.106C1.65679 11.2214 1.51176 11.2804 1.33708 11.2831C1.16241 11.2857 1.01472 11.2267 0.893995 11.106C0.773259 10.9853 0.712891 10.8389 0.712891 10.6669C0.712891 10.4949 0.773259 10.3485 0.893995 10.2278L5.12156 6.00023L0.893995 1.77265C0.778606 1.65727 0.719578 1.51225 0.716911 1.33757C0.714231 1.1629 0.773259 1.01521 0.893995 0.894484C1.01472 0.773747 1.16108 0.713379 1.33308 0.713379C1.50508 0.713379 1.65144 0.773747 1.77216 0.894484L5.99974 5.12205L10.2273 0.894484C10.3427 0.779095 10.4877 0.720067 10.6624 0.7174C10.8371 0.71472 10.9848 0.773747 11.1055 0.894484C11.2262 1.01521 11.2866 1.16157 11.2866 1.33357C11.2866 1.50557 11.2262 1.65193 11.1055 1.77265L6.87793 6.00023L11.1055 10.2278C11.2209 10.3432 11.2799 10.4882 11.2826 10.6629C11.2853 10.8376 11.2262 10.9853 11.1055 11.106C10.9848 11.2267 10.8384 11.2871 10.6664 11.2871C10.4944 11.2871 10.3481 11.2267 10.2273 11.106L5.99974 6.87842Z"
                                                        fill="white" />
                                                </svg>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <vs-tooltip bottom shadow not-hover v-model="tr.add_item">
                                    <div @click="tr.add_item = true"
                                        class="bg-[#003765]  pl-[10px] cursor-pointer pr-[10px] pb-[10px] pt-[10px] ml-[8px] rounded-[12px] flex text-[white]">
                                        <div class="flex justify-center items-center"><svg width="16" height="15"
                                                viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.99968 12.6875C6.8048 12.6875 6.64155 12.6216 6.50993 12.4898C6.37831 12.3581 6.3125 12.1948 6.3125 12V7.18746H1.49998C1.30519 7.18746 1.14191 7.12155 1.01016 6.98973C0.878385 6.8579 0.8125 6.69455 0.8125 6.49968C0.8125 6.3048 0.878385 6.14155 1.01016 6.00993C1.14191 5.87831 1.30519 5.8125 1.49998 5.8125H6.3125V0.999977C6.3125 0.805185 6.37841 0.641904 6.51023 0.510133C6.64206 0.378378 6.80541 0.3125 7.00028 0.3125C7.19516 0.3125 7.35841 0.378378 7.49003 0.510133C7.62165 0.641904 7.68745 0.805185 7.68745 0.999977V5.8125H12.5C12.6948 5.8125 12.8581 5.87841 12.9898 6.01023C13.1216 6.14206 13.1875 6.30541 13.1875 6.50028C13.1875 6.69516 13.1216 6.85841 12.9898 6.99003C12.8581 7.12164 12.6948 7.18746 12.5 7.18746H7.68745V12C7.68745 12.1948 7.62155 12.3581 7.48973 12.4898C7.3579 12.6216 7.19455 12.6875 6.99968 12.6875Z"
                                                    fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                    <template #tooltip>
                                        <div class="w-[100%]">
                                            <div class="center">
                                                <vs-checkbox v-model="option">
                                                    <div class="text-custom">ที่จอดรถจักรยานยนต์</div>
                                                </vs-checkbox>
                                            </div>
                                            <div class="center">
                                                <vs-checkbox v-model="option">
                                                    <div class="text-custom">ที่จอดรถยนต์</div>
                                                </vs-checkbox>
                                            </div>
                                            <div class="center">
                                                <vs-checkbox v-model="option">
                                                    <div class="text-custom">อินเทอร์เน็ต</div>
                                                </vs-checkbox>
                                            </div>
                                            <div class="center">
                                                <vs-checkbox v-model="option">
                                                    <div class="text-custom">บริการอื่น ๆ</div>
                                                </vs-checkbox>
                                            </div>
                                        </div>
                                    </template>
                                </vs-tooltip>
                            </div>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            add_item: false,
            users: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "status": "มีผู้เช่า",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "4,000",
                    "other": ['ที่จอดรถจักรยานยนต์', 'ที่จอดรถยนต์', 'ที่จอดรถยนต์'],
                    "add_item": false,
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "status": "มีผู้เช่า",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "4,000",
                    "other": ['ที่จอดรถจักรยานยนต์', 'ที่จอดรถยนต์'],
                    "add_item": false,
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "status": "มีผู้เช่า",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "4,000",
                    "other": ['ที่จอดรถจักรยานยนต์', 'ที่จอดรถยนต์', 'ที่จอดรถยนต์'],
                    "add_item": false,
                },
                {
                    "id": 4,
                    "name": "Patricia Lebsack",
                    "status": "มีผู้เช่า",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "4,000",
                    "add_item": false,
                },
                {
                    "id": 5,
                    "name": "Chelsey Dietrich",
                    "status": "มีผู้เช่า",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "4,000",
                    "other": ['ที่จอดรถจักรยานยนต์', 'ที่จอดรถยนต์', 'ที่จอดรถยนต์'],
                    "add_item": false,
                },
                {
                    "id": 6,
                    "name": "Mrs. Dennis Schulist",
                    "status": "มีผู้เช่า",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "4,000",
                    "other": ['ที่จอดรถจักรยานยนต์', 'ที่จอดรถยนต์', 'ที่จอดรถยนต์'],
                    "add_item": false,
                },
                {
                    "id": 7,
                    "name": "Kurtis Weissnat",
                    "status": "มีผู้เช่า",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "4,000",
                    "other": ['ที่จอดรถจักรยานยนต์', 'ที่จอดรถยนต์'],
                    "add_item": false,
                },
                {
                    "id": 8,
                    "name": "",
                    "status": "ห้องว่าง",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "",
                    "add_item": false,
                },
                {
                    "id": 9,
                    "name": "Glenna Reichert",
                    "status": "มีผู้เช่า",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "4,000",
                    "other": ['ที่จอดรถจักรยานยนต์'],
                    "add_item": false,
                },
                {
                    "id": 10,
                    "name": "Clementina DuBuque",
                    "status": "มีผู้เช่า",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "4,000",
                    "other": ['ที่จอดรถยนต์'],
                    "add_item": false,
                }
            ],
            OtherFee:[],
        }
    },
    created() {
        const loading = this.$vs.loading({})
        setTimeout(() => {
            loading.close()
        }, 1000)
    },
    mounted() {
        this.getOtherFee();
    },
    methods: {
        getOtherFee() {
            const loading = this.$vs.loading()
            fetch(`http://203.170.190.170:1337/api/rooms?filters[room_building][id][$eq]=${this.$store.state.building}&populate=deep,3`)
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getCommonFeeRoom()",resp.data);
                    this.OtherFee = resp.data
                }).finally(() => {
                    loading.close()
                })
        }
        
    },
}
</script>