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
                            ค่าส่วนกลาง
                        </vs-th>
                        <vs-th>
                            Action
                        </vs-th>
                    </vs-tr>
                </template>
                <template #tbody>
                    <vs-tr :key="i" v-for="(tr, i) in commonRoom" :data="tr">
                        <vs-td>
                            {{ tr.RoomNumber  }}
                        </vs-td>
                        <vs-td>
                            <div class="flex justify-start items-center">
                                <div class="pl-[12px] pr-[12px] pb-[4px] pt-[4px] rounded-[12px] text-center"
                                    :class="tr.status == 'มีผู้เช่า' ? 'text-[#1DC56A] bg-[#D8FAD5]' : 'text-[#8396A6] bg-[#DEEAF5]'">
                                    {{ tr.user_sign_contract ? "มีผู้เข้าพัก" : "ห้องว่าง" }}  
                                </div>
                            </div>

                        </vs-td>
                        <vs-td>
                            {{ tr.user_sign_contract && tr.user_sign_contract.users_permissions_user && tr.user_sign_contract.users_permissions_user.firstName  ? tr.user_sign_contract.users_permissions_user.firstName : "" }} 
                             
                            {{ tr.user_sign_contract && tr.user_sign_contract.users_permissions_user && tr.user_sign_contract.users_permissions_user.lastName  ? tr.user_sign_contract.users_permissions_user.lastName : "" }} 
                        </vs-td>
                        <vs-td>
                            <div v-if=tr.communal_fees>
                                <vs-input v-model="tr.communal_fees[0].communalUnit">
                                </vs-input>
                            </div>
                            <div v-else>
                                
                            </div>
                        </vs-td>
                        <vs-td>
                            <vs-button  @click="updateCommunalfee(tr.communal_fees[0].id,tr.communal_fees[0].communalUnit)" >บันทึก</vs-button>
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
                    "unit": "4,000"
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "status": "มีผู้เช่า",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "4,000"
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "status": "มีผู้เช่า",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                    "unit": "4,000"
                }
            ],
            commonRoom: [],
            communalUnit:0,
        }
    },
    created() {
        const loading = this.$vs.loading({})
        setTimeout(() => {
            loading.close()
        }, 1000)
    },
    mounted() {
        this.getCommonFeeRoom();
    },
    methods: {
        getCommonFeeRoom() {
            const loading = this.$vs.loading()
            fetch(`https://api.resguru.app/api/getcommunallist?buildingid=${this.$store.state.building}&buildingFloor=2&month=10&year=2023`)
            // fetch(`https://api.resguru.app/api/rooms?filters[room_building][id][$eq]=${this.$store.state.building}&populate=deep,3`)
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getCommonFeeRoom()",resp.data);
                    this.commonRoom = resp.data
                }).finally(() => {
                    loading.close()
                })
        },
        updateCommunalfee(comFeeId,communalUnit){
            axios.put(`https://api.resguru.app/api/communal-fees/${comFeeId}`,{
                data : {
                    communalUnit: communalUnit
                }
            }).then( 
                    this.openNotificationUpdateWater('top-right', '#3A89CB', 6000)
                )
                .then(
                    $router.replace()
                )
        }, 
        openNotificationUpdateWater(position = null, color) {
            const noti = this.$vs.notification({
                sticky: true,
                color,
                position,
                title: 'Update Communual Success',
            })
        },
        
    },
}
</script>