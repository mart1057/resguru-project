<template>
    <div id="payment" class="p-[20px] rounded-[22px]">
        <div class="flex justify-between">
            <div class="flex">
                <div class="flex items-center">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_1413_30765" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                            width="34" height="34">
                            <rect width="34" height="34" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1413_30765)">
                            <path
                                d="M10.433 23.7293H12.5579V17.0001H10.433V23.7293ZM21.4394 23.7293H23.5643V9.91679H21.4394V23.7293ZM15.9362 23.7293H18.0611V19.8335H15.9362V23.7293ZM15.9362 17.0001H18.0611V14.1668H15.9362V17.0001ZM7.51794 29.0418C6.80233 29.0418 6.19661 28.7938 5.70078 28.298C5.20495 27.8022 4.95703 27.1965 4.95703 26.4809V7.5194C4.95703 6.8038 5.20495 6.19808 5.70078 5.70225C6.19661 5.20641 6.80233 4.9585 7.51794 4.9585H26.4794C27.195 4.9585 27.8007 5.20641 28.2965 5.70225C28.7924 6.19808 29.0403 6.8038 29.0403 7.5194V26.4809C29.0403 27.1965 28.7924 27.8022 28.2965 28.298C27.8007 28.7938 27.195 29.0418 26.4794 29.0418H7.51794ZM7.51794 26.9168H26.4794C26.5884 26.9168 26.6883 26.8714 26.7791 26.7806C26.8699 26.6898 26.9153 26.5898 26.9153 26.4809V7.5194C26.9153 7.41042 26.8699 7.31051 26.7791 7.21967C26.6883 7.12887 26.5884 7.08346 26.4794 7.08346H7.51794C7.40895 7.08346 7.30904 7.12887 7.21821 7.21967C7.1274 7.31051 7.082 7.41042 7.082 7.5194V26.4809C7.082 26.5898 7.1274 26.6898 7.21821 26.7806C7.30904 26.8714 7.40895 26.9168 7.51794 26.9168Z"
                                fill="#003765" />
                        </g>
                    </svg>
                </div>
                <div class="text-[18px] font-bold flex items-center ml-[4px]">รายรับ-รายจ่าย</div>
            </div>
            <div class="flex justify-center items-center">
                <div class="flex justify-center items-center">
                    <div @click="tab = 1" class="cursor-pointer text-[#8396A6]"
                        :class="tab == 1 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[8px] text-[white]' : 'flex justify-center items-center'">
                        รายรับ</div>
                    <div @click="tab = 2" class="cursor-pointer text-[#8396A6] ml-[8px]"
                        :class="tab == 2 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[8px] text-[white]' : 'flex justify-center items-center'">
                        รายจ่าย</div>
                </div>
            </div>
        </div>
        <div class="mt-[18px]">
            content
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tab: 1
        }
    }
}
</script>
<style scoped>#payment {
    background-color: rgb(255, 255, 255);
}</style>