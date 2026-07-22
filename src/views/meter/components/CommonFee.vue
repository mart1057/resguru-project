<template>
    <div class="mt-[14px] bg-[white] rounded-[12px] p-[24px]">
        <div class="flex justify-between">
            <div class="font-bold text-[18px]">ชั้น {{ tab }}</div>
            <div @click="updateMeterAll()" :disabled="commonRoom.length < 1">
                <vs-button>บันทึกทั้งหมด</vs-button>
            </div>
        </div>
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
                                    :class="tr.user_sign_contract? 'text-[#1DC56A] bg-[#D8FAD5]' : 'text-[#8396A6] bg-[#DEEAF5]'">
                                    {{ tr.user_sign_contract ? "มีผู้เข้าพัก" : "ห้องว่าง" }}
                                </div>
                            </div>

                        </vs-td>
                        <vs-td>
                            {{ tr.user_sign_contract && tr.user_sign_contract.users_permissions_user && tr.user_sign_contract.users_permissions_user.firstName  ? tr.user_sign_contract.users_permissions_user.firstName : "" }} 
                             
                            {{ tr.user_sign_contract && tr.user_sign_contract.users_permissions_user && tr.user_sign_contract.users_permissions_user.lastName  ? tr.user_sign_contract.users_permissions_user.lastName : "" }} 
                        </vs-td>
                        <vs-td>
                            <div v-if="tr.communal_fees[0]">
                                <vs-input v-model="tr.communal_fees[0].communalUnit">
                                </vs-input>
                            </div>
                            <div v-else>
                                
                            </div>
                        </vs-td>
                        <vs-td>
                            <vs-button v-if="tr.communal_fees[0]" @click="updateCommunalfee(tr.communal_fees[0].id,tr.communal_fees[0].communalUnit)" >บันทึก</vs-button>
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
    props: {
        tab: { type: { String } },
        id: { type: { String } },
    },
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
            code: 0,
            text: '',
        }
    },
    created() {
        const loading = this.$vs.loading({})
        setTimeout(() => {
            loading.close()
        }, 1000)
    },
    mounted() {
        this.getCommonFeeRoom(this.id);
    },
    methods: {
        getCommonFeeRoom(id) {
            const loading = this.$vs.loading()
            fetch(`https://api.resguru.app/api/getcommunallist?buildingid=${this.$store.state.building}&buildingFloor=${id}`)

                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getCommonFeeRoom()",resp.data);
                    if (this.code == 8) {

                        this.commonRoom = resp.data .filter(item =>
                            item.RoomNumber.toLowerCase().includes(this.text.toLowerCase()),
                        );

                    }
                    else{
                        this.commonRoom = resp.data
                    }
                }).catch((error) => {
                    const errorMessage = error.message ? error.message : "Error loading common fees";
                    this.$showNotification("danger", errorMessage);
                }).finally(() => {
                    loading.close()
                })
        },
        updateCommunalfee(comFeeId,communalUnit){
            axios.put(`https://api.resguru.app/api/communal-fees/${comFeeId}`,{
                data : {
                    communalUnit: communalUnit
                }
            })
            .then( (resp) =>{
                    setTimeout(() => {
                        this.getCommonFeeRoom(this.id)
                    }, 1000)
                })
            .catch(error => {
            const errorMessage = error.message ? error.message : 'Error updating information';
            this.$showNotification('danger', errorMessage); 
            })
            .finally(()=>{
                    this.$showNotification('#3A89CB', 'แก้ไขค่าส่วนกลางสำเร็จ')
            })
        },
        updateMeterAll() {
            if (this.commonRoom.length > 0) {
                console.log(this.commonRoom.length);
                const loading = this.$vs.loading()
                this.commonRoom.forEach((data, i) => {
                    if (data.communal_fees[0]) {
                        axios.put(`https://api.resguru.app/api/communal-fees/${data.communal_fees[0].id}`, {
                            data: {
                                communalUnit: parseInt(data.communal_fees[0].communalUnit),
                            }
                        }).then(() => {
                            if (this.commonRoom.length == (i + 1)) {
                                loading.close()
                                this.$showNotification('#3A89CB', 'แก้ไขค่าส่วนกลางสำเร็จทั้งหมด')
                            }
                        }).catch((error) => {
                            loading.close()
                            const errorMessage = error.message ? error.message : "Error updating common fees";
                            this.$showNotification("danger", errorMessage);
                        })
                    }

                })
            }


        },
        filterData(text,code) {
            this.text = text
            console.log('filter',text);
            this.commonRoom = this.commonRoom.filter(item =>
                item.RoomNumber.toLowerCase().includes(text.toLowerCase()),
            );
            if (text == '') {
                this.getCommonFeeRoom(this.id)
            }
            if (code == 8) {
                this.code = 8
                this.getCommonFeeRoom(this.id)
            }
        }
        
    },
}
</script>