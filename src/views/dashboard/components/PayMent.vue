<template>
    <div id="payment" class="p-[20px] rounded-[22px] mt-[18px]">
        <div class="flex justify-between">
            <div class="flex">
                <div class="flex items-center">
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_1526_23336" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                            width="41" height="41">
                            <rect width="41" height="41" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1526_23336)">
                            <path
                                d="M36.7278 10.7757V30.2243C36.7278 31.0872 36.4288 31.8176 35.8309 32.4155C35.233 33.0135 34.5026 33.3124 33.6396 33.3124H7.35769C6.49475 33.3124 5.76432 33.0135 5.16641 32.4155C4.56849 31.8176 4.26953 31.0872 4.26953 30.2243V10.7757C4.26953 9.91272 4.56849 9.18229 5.16641 8.58438C5.76432 7.98646 6.49475 7.6875 7.35769 7.6875H33.6396C34.5026 7.6875 35.233 7.98646 35.8309 8.58438C36.4288 9.18229 36.7278 9.91272 36.7278 10.7757ZM6.83199 14.3566H34.1653V10.7757C34.1653 10.6442 34.1106 10.5237 34.0011 10.4142C33.8915 10.3047 33.7711 10.25 33.6396 10.25H7.35769C7.22626 10.25 7.10578 10.3047 6.99624 10.4142C6.88674 10.5237 6.83199 10.6442 6.83199 10.7757V14.3566ZM6.83199 19.81V30.2243C6.83199 30.3557 6.88674 30.4762 6.99624 30.5857C7.10578 30.6952 7.22626 30.75 7.35769 30.75H33.6396C33.7711 30.75 33.8915 30.6952 34.0011 30.5857C34.1106 30.4762 34.1653 30.3557 34.1653 30.2243V19.81H6.83199Z"
                                fill="#003765" />
                        </g>
                    </svg>
                </div>
                <div class="text-[18px] font-bold flex items-center ml-[4px]">การจ่ายเงิน</div>
            </div>
            <div class="flex">
                <div></div>
                <!-- <div class="icon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.9 17.3L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L17.325 15.925C17.5083 16.1083 17.6 16.3333 17.6 16.6C17.6 16.8667 17.5 17.1 17.3 17.3C17.1167 17.4833 16.8833 17.575 16.6 17.575C16.3167 17.575 16.0833 17.4833 15.9 17.3ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
                            fill="#003765" />
                    </svg>
                </div> -->
                <div class="flex justify-center items-center">
                    <input class="h-[40px] bg-[#F3F7FA] rounded-[12px]" placeholder="ค้นหา" type="input" />
                </div>

            </div>
        </div>
        <div class="mt-[14px]"  :class="data.length > 5 ? 'table-container' : ''">
            <vs-table>
                <template #thead>
                    <vs-tr>
                        <vs-th v-if="data[0].room_building">
                            ชื่อหอพัก
                        </vs-th>
                        <vs-th>
                            เลขห้อง
                        </vs-th>
                        <vs-th>
                            ลูกบ้าน
                        </vs-th>
                        <vs-th>
                            วันที่เข้าพัก
                        </vs-th>
                        <vs-th>
                            สถานะ
                        </vs-th>
                    </vs-tr>
                </template>
                <template #tbody>
                    <vs-tr :key="i" v-for="(tr, i) in data" :data="tr">
                        <vs-td v-if="tr.room_building">
                            {{ tr.room_building?.buildingName }}
                        </vs-td>
                        <vs-td>
                            {{ tr.RoomNumber }}
                        </vs-td>
                        <vs-td>
                            {{ tr.user_sign_contract?.users_permissions_user
                                ?.firstName }} {{ tr.user_sign_contract?.users_permissions_user?.lastName }}
                        </vs-td>
                        <vs-td>
                            {{ convertDateNoTime(tr.createdAt) }}
                            {{ data.room}}
                        </vs-td>
                        <vs-td>
                            <div class="flex items-center justify-start">
                                <div class=" w-[auto] pl-[12px] pr-[12px] rounded-[12px] pb-[4px] pt-[4px]"
                                    :class="tr.tenant_bills[0]?.paymentStatus == 'Paid' ? 'bg-[#CFFBDA] text-[#0B9A3C]' : tr.website == 2 ? 'bg-[#FFE1E8] text-[#EA2F5C]' : ' bg-[#FFF2BC] text-[#D48C00] '">
                                    {{ tr.tenant_bills[0]?.paymentStatus== 'Paid' ?'ชำระแล้ว' :'ยังไม่ชำระ'}} </div>
                            </div>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </div>
    </div>
</template>
<script>
import { convertDateNoTime } from '@/components/hook/hook'
export default {
    props: {
        data: { type: Object },
    },
    data() {
        return {
            convertDateNoTime
        }
    }
}
</script>
<style scoped>
#payment {
    background-color: rgb(255, 255, 255);
}

.icon {
    position: absolute;
    top: 20.2rem;
    left: 580px;
}

input[type=input] {
    padding-left: 32px;
    margin: 8px 0;
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