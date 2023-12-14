<template>
    <div class="h-[100%] bg-[white] rounded-[12px] pt-[28px] pl-[28px] pr-[28px] pb-[28px] mt-[14px]  mr-[24px] ml-[24px]"
        id="room-detail">
        <div class="">
            <div class="flex cursor-pointer">
                <div class="flex justify-center items-center mr-[8px]"><svg width="7" height="12" viewBox="0 0 7 12"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.338101 5.99962C0.338101 5.88552 0.357334 5.77495 0.3958 5.6679C0.434267 5.56085 0.500293 5.46053 0.593876 5.36695L5.10348 0.857324C5.24834 0.712458 5.42142 0.642591 5.6227 0.647724C5.82398 0.652841 5.99706 0.727841 6.14193 0.872724C6.28679 1.01759 6.35923 1.19322 6.35923 1.39962C6.35923 1.60602 6.28679 1.78166 6.14193 1.92652L2.06883 5.99962L6.1573 10.0881C6.30217 10.233 6.37204 10.406 6.36693 10.6073C6.36179 10.8086 6.28679 10.9817 6.14193 11.1265C5.99706 11.2714 5.82142 11.3438 5.615 11.3438C5.4086 11.3438 5.23297 11.2714 5.0881 11.1265L0.593876 6.6323C0.500293 6.53872 0.434267 6.44 0.3958 6.33615C0.357334 6.23232 0.338101 6.12014 0.338101 5.99962Z"
                            fill="#8396A6" />
                    </svg></div>
                <div class="flex justify-center items-center text-[#8396A6] cursor-pointer" @click="routeTo('/rooms')">
                    ย้อนกลับ</div>
            </div>
        </div>
        <div class="flex mt-[14px]">
            <div class="text-[18px] font-bold text-[#141629] flex items-center justify-center">ห้อง {{
                $route.query.number_room }}</div>
            <div :class="$route.query.status == 'rent' ? 'bg-[#D7F1E3] text-[#39B974]' : 'bg-[#F0F8FF] text-[#003765]'"
                class="ml-[14px] h-[36px] w-[auto] text-[12px] flex items-center justify-center p-[8px] rounded-[12px]">
                {{ $route.query.status == "rent" ? 'ทำสัญญาแล้ว' : $route.query.status == "reserved" ? 'ยังไม่ทำสัญญา'
                    : 'ห้องว่าง' }} </div>
        </div>
        <div class="flex justify-start items-center rounded-[12px] mt-[14px]">
            <div class="bg-[#F3F7FA] rounded-[12px]">
                <div class="flex justify-start items-center">
                    <div @click=" routTab(1)" class="cursor-pointer "
                        :class="tab == 1 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[12px] text-[white]' : 'text-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] flex justify-center items-center'">
                        ผู้เช่า</div>
                    <div @click=" routTab(2)" class="cursor-pointer ml-[8px]" v-if="$route.query.id_user"
                        :class="tab == 2 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[12px] text-[white]' : 'text-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] flex justify-center items-center'">
                        สัญญาเช่า
                    </div>
                    <div @click=" routTab(3)" class="cursor-pointer  ml-[8px]"
                        :class="tab == 3 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[12px] text-[white]' : 'text-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] flex justify-center items-center'">
                        บริการอื่น ๆ
                    </div>
                    <div @click=" routTab(4)" class="cursor-pointer  ml-[8px]" v-if="$route.query.id_user"
                        :class="tab == 4 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[12px] text-[white]' : ' text-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] flex justify-center items-center'">
                        ย้ายออก
                    </div>
                    <div @click="routTab(5)" class="cursor-pointer  ml-[8px]"
                        :class="tab == 5 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[12px] text-[white]' : ' text-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] flex justify-center items-center'">
                        ผู้เช่ารายเก่า
                    </div>
                </div>
            </div>
        </div>
        <div v-if="tab == 1">
            <CardMember :id_user="$route.query.id_user" :id_room="$route.query.id_room" :status="$route.query.status"
                :id_contract="$route.query.id_contract" />
        </div>
        <div v-else-if="tab == 2">
            <Contract />
        </div>
        <div v-else-if="tab == 3">
            <Facilites />
        </div>
        <div v-else-if="tab == 4">
            <MoveOut />
        </div>
        <div v-else-if="tab == 5">
            <CardMemberOld />
        </div>
    </div>
</template>
<script>
import CardMember from './components/CardMember.vue'
import CardMemberOld from './components/CardMemberOld.vue'
import Contract from '@/views/rooms/components/Contract.vue'
import Facilites from '@/views/rooms/components/Facilities.vue'
import MoveOut from './components/MoveOut.vue'
export default {
    components: { CardMember, CardMemberOld, Contract, Facilites, MoveOut },
    data() {
        return {
            tab: 1
        }
    },
    created() {
        this.tab = this.$route.query.tab
        const loading = this.$vs.loading({
            opacity: 1,
        })
        setTimeout(() => {
            loading.close()
        }, 1000)
    },
    methods: {
        routeTo(path) {
            this.$router.push({
                path: path,
            })
        },
        routTab(tab) {
            this.tab = tab
            this.$router.push({
                path: '/room-detail',
                query: {
                    id_user: this.$route.query.id_user,
                    id_room: this.$route.query.id_room,
                    number_room: this.$route.query.number_room,
                    status: this.$route.query.status,
                    id_contract: this.$route.query.id_contract,
                    tab: tab
                },
            })
        }
    }
}
</script>
<style></style>