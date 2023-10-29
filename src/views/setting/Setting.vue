<template>
    <div class="pl-[20px] pr-[20px] pt-[10px]">
        <div class="h-[100%] bg-[white] rounded-[12px] pt-[28px] pl-[28px] pr-[28px] flex flex-col justify-end mt-[14px]">
            <div class="flex justify-center">
                <div class="flex justify-center items-center">โปรไฟล์</div>
                <div class="flex justify-center items-center ml-[24px]">การจัดการห้องพัก</div>
                <div class="flex justify-center items-center ml-[24px]">ค่าน้ำไฟและบริการ</div>
                <div class="flex justify-center items-center ml-[24px]">การจ่ายเงิน</div>
                <div class="flex justify-center items-center ml-[24px]">การจัดการสัญญา</div>
                <div class="flex justify-center items-center ml-[24px]">บุคลากร</div>
            </div>
            <div class="w-[100%] h-[1px] mb-[14px] bg-gray-200 border-0 dark:bg-gray-700"></div>
           <Profire/>
        </div>
    </div>
</template>
<script>
import Profire from '@/views/setting/components/Profire'
export default {
    components:{Profire},
    data() {
        return {
            tab: 1

        }
    }
}

</script>
