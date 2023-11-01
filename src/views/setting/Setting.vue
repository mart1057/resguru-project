<template>
    <div class="pl-[20px] pr-[20px] pt-[10px]">
        <div class="h-[100%] bg-[white] rounded-t-lg  pt-[28px] pl-[28px] pr-[28px] flex flex-col justify-end mt-[14px]">
            <div class="flex justify-center">
                <div class="flex justify-center items-center cursor-pointer"
                    :class="tab == 1 ? 'font-bold text-[16px]' : ''" @click="tab = 1">โปรไฟล์</div>
                <div class="flex justify-center items-center ml-[24px] cursor-pointer"
                    :class="tab == 2 ? 'font-bold text-[16px]' : ''" @click="tab = 2">การจัดการห้องพัก</div>
                <div class="flex justify-center items-center ml-[24px] cursor-pointer"
                    :class="tab == 3 ? 'font-bold text-[16px]' : ''" @click="tab = 3">ค่าน้ำไฟและบริการ</div>
                <div class="flex justify-center items-center ml-[24px] cursor-pointer"
                    :class="tab == 4 ? 'font-bold text-[16px]' : ''" @click="tab = 4">การจ่ายเงิน</div>
                <div class="flex justify-center items-center ml-[24px] cursor-pointer"
                    :class="tab == 5 ? 'font-bold text-[16px]' : ''" @click="tab = 5">การจัดการสัญญา</div>
                <div class="flex justify-center items-center ml-[24px] cursor-pointer"
                    :class="tab == 6 ? 'font-bold text-[16px]' : ''" @click="tab = 6">บุคลากร</div>
            </div>
            <div class="w-[100%] h-[1px] mb-[14px] bg-gray-200 border-0 dark:bg-gray-700"></div>

        </div>
        <Profire v-if="tab == 1" />
        <Room v-else-if="tab == 2" />
        <Meter v-else-if="tab == 3" />
    </div>
</template>
<script>
import Profire from '@/views/setting/components/Profire'
import Room from './components/Room.vue';
import Meter from './components/Meter.vue'
export default {
    components: { Profire, Room, Meter, },
    data() {
        return {
            tab: 1

        }
    }
}

</script>
