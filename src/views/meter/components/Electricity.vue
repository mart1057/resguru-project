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
                            เลขมิเตอร์เดือน เมษายน/2023
                        </vs-th>
                        <vs-th>
                            เลขมิเตอร์เดือน พฤษภาคม/2023
                        </vs-th>
                        <vs-th>
                            หน่วยที่ใช้
                        </vs-th>
                        <vs-th>
                            Action
                        </vs-th>
                    </vs-tr>
                </template>
                <template #tbody>
                    <vs-tr :key="i" v-for="(tr, i) in ElectricityFee" :data="tr">
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
                            <div>
                                <div v-if=tr.attributes.electric_fees.data[1]>
                                <vs-input disabled v-model=tr.attributes.electric_fees.data[1].attributes.electicUnit>
                                    <template #icon>
                                        <svg width="9" height="17" viewBox="0 0 9 17" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3.66427 13.6L6.59083 8.63457C6.61809 8.58327 6.62082 8.53038 6.59901 8.4759C6.57719 8.4214 6.53902 8.39415 6.48449 8.39415H4.10106L5.58966 2.3173C5.61148 2.24038 5.60058 2.16827 5.55695 2.10095C5.51331 2.03363 5.45878 1.99997 5.39335 1.99997H1.53769C1.46134 1.99997 1.39863 2.02882 1.34957 2.08652C1.30048 2.14423 1.27594 2.21795 1.27594 2.3077V9.69225C1.27594 9.782 1.30048 9.85573 1.34957 9.91343C1.39863 9.97113 1.46134 9.99998 1.53769 9.99998H3.66427V13.6ZM7.90928 9.0134L3.44345 16.6306C3.36384 16.7678 3.26487 16.8582 3.14655 16.9018C3.02823 16.9454 2.91072 16.9454 2.79402 16.9018C2.67734 16.8582 2.58055 16.7787 2.50366 16.6633C2.42677 16.5479 2.38833 16.4082 2.38833 16.2441V11.5H1.53769C1.11347 11.5 0.751132 11.3233 0.45067 10.9701C0.150223 10.6169 0 10.191 0 9.69225V2.3077C0 1.80898 0.150223 1.38302 0.45067 1.02982C0.751132 0.676608 1.11347 0.5 1.53769 0.5H5.65507C6.07603 0.5 6.41792 0.6875 6.68074 1.0625C6.94357 1.4375 7.021 1.85257 6.91303 2.3077L5.79086 6.8942H6.95233C7.41363 6.8942 7.7547 7.13362 7.97554 7.61245C8.19637 8.0913 8.17428 8.55828 7.90928 9.0134Z"
                                                fill="#003765" />
                                        </svg>
                                    </template>
                                </vs-input>
                                </div>
                            </div>
                        </vs-td>
                        <vs-td>
                            <vs-input v-model=tr.attributes.electric_fees.data[0].attributes.electicUnit >
                                <template #icon>
                                    <svg width="9" height="17" viewBox="0 0 9 17" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3.66427 13.6L6.59083 8.63457C6.61809 8.58327 6.62082 8.53038 6.59901 8.4759C6.57719 8.4214 6.53902 8.39415 6.48449 8.39415H4.10106L5.58966 2.3173C5.61148 2.24038 5.60058 2.16827 5.55695 2.10095C5.51331 2.03363 5.45878 1.99997 5.39335 1.99997H1.53769C1.46134 1.99997 1.39863 2.02882 1.34957 2.08652C1.30048 2.14423 1.27594 2.21795 1.27594 2.3077V9.69225C1.27594 9.782 1.30048 9.85573 1.34957 9.91343C1.39863 9.97113 1.46134 9.99998 1.53769 9.99998H3.66427V13.6ZM7.90928 9.0134L3.44345 16.6306C3.36384 16.7678 3.26487 16.8582 3.14655 16.9018C3.02823 16.9454 2.91072 16.9454 2.79402 16.9018C2.67734 16.8582 2.58055 16.7787 2.50366 16.6633C2.42677 16.5479 2.38833 16.4082 2.38833 16.2441V11.5H1.53769C1.11347 11.5 0.751132 11.3233 0.45067 10.9701C0.150223 10.6169 0 10.191 0 9.69225V2.3077C0 1.80898 0.150223 1.38302 0.45067 1.02982C0.751132 0.676608 1.11347 0.5 1.53769 0.5H5.65507C6.07603 0.5 6.41792 0.6875 6.68074 1.0625C6.94357 1.4375 7.021 1.85257 6.91303 2.3077L5.79086 6.8942H6.95233C7.41363 6.8942 7.7547 7.13362 7.97554 7.61245C8.19637 8.0913 8.17428 8.55828 7.90928 9.0134Z"
                                            fill="#003765" />
                                    </svg>
                                </template>
                            </vs-input>
                        </vs-td>
                
                        <vs-td>
                            {{ tr.attributes.electric_fees.data[0] ? tr.attributes.electric_fees.data[0].attributes.electicUnit : "ยังไม่ได้ระบุ" }} 
                        </vs-td>
                        <vs-td>
                            <div>
                                <vs-button @click="updateElectfee(tr.attributes.electric_fees.data[0].id,tr.attributes.electric_fees.data[0].attributes.electicUnit )" >บันทึก</vs-button>
                            </div>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            users: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "status": "มีผู้เช่า",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "33"
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "status": "มีผู้เช่า",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "33"
                }
            ],
            ElectricityFee:[],
            electicUnit:0,
        }
    },
    created() {
        const loading = this.$vs.loading({})
        setTimeout(() => {
            loading.close()
        }, 1000)
    },
    mounted() {
        this.getElectricityFee();
    },
    methods: {
        getElectricityFee() {
            const loading = this.$vs.loading()
            fetch(`http://203.170.190.170:1337/api/rooms?filters[room_building][id][$eq]=${this.$store.state.building}&populate=deep,3`)
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getCommonFeeRoom()",resp.data);
                    this.ElectricityFee = resp.data
                }).finally(() => {
                    loading.close()
                })
        },
        updateElectfee(electFeeId,electFeeUnit){
            axios.put(`http://203.170.190.170:1337/api/electric-fees/${electFeeId}`,{
                data : {
                    electicUnit: electFeeUnit
                }
            }).then( 
                    this.openNotificationUpdateWater('top-right', '#3A89CB', 6000)
                )
                .then(
                    // setTimeout(() => location.reload(), 1500)
                    this.getElectricityFee()
                )
        }, 
        openNotificationUpdateWater(position = null, color) {
            const noti = this.$vs.notification({
                sticky: true,
                color,
                position,
                title: 'Update Meter Success, <br> Please wait while the system is loading',
            })
        },
        
    },
}
</script>