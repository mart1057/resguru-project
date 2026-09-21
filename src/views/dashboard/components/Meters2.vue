<template>
    <div>
        <div class="grid grid-cols-2 w-[100%] gap-2 mt-[10px]">
            <div class="h-[110px] p-[18px] flex flex-col justify-between bg-[#3ba7c4] rounded-[22px] text-[white]">
                <div class="flex justify-between">
                    <div v-if="hasWaterValue" class="text-[24px] flex justify-center items-center" id="waterbox">{{
                        waterValue }}</div>
                    <div v-else class="text-[24px] flex justify-center items-center" id="waterbox">ยังไม่จดมิเตอร์</div>
                    <div>


                        <template>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                <g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5">
                                    <path
                                        d="M20 13.277c0-4.525-4.59-8.481-6.81-10.136a2.004 2.004 0 0 0-2.38 0C8.59 4.796 4 8.752 4 13.277c0 5.98 5 7.973 8 7.973s8-1.993 8-7.973" />
                                    <path d="M7 13.277c0 1.322.527 2.59 1.464 3.524A5.009 5.009 0 0 0 12 18.26" />
                                </g>
                            </svg>
                        </template>


                    </div>
                </div>
                <div class="flex justify-between items-center">
                    <div class="text-[20px] flex justify-start items-center">Unit น้ำที่ใช้</div>
                    <div :title="waterTooltipText" class="cursor-help opacity-80 hover:opacity-100">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="white" stroke-width="1.5" />
                            <path d="M12 11v5.5" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            <circle cx="12" cy="7.75" r="1" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="h-[110px] p-[18px] flex flex-col justify-between bg-[#F5D65E] rounded-[22px] text-[#003765]  ">
                <div class="flex justify-between">
                    <div v-if="hasElectricValue" class="text-[24px] flex justify-center items-center">{{ electricValue }}</div>
                    <div v-else class="text-[24px] flex justify-center items-center" id="waterbox">ยังไม่จดมิเตอร์</div>
                    <div>


                        <template>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                <path fill="white" d="M7 2v11h3v9l7-12h-4l4-8z" />
                            </svg>
                        </template>


                    </div>
                </div>
                <div class="flex justify-between items-center">
                    <div class="text-[20px] flex justify-start items-center">Unit ไฟที่ใช้</div>
                    <div :title="electricTooltipText" class="cursor-help opacity-80 hover:opacity-100">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="#003765" stroke-width="1.5" />
                            <path d="M12 11v5.5" stroke="#003765" stroke-width="1.5" stroke-linecap="round" />
                            <circle cx="12" cy="7.75" r="1" fill="#003765" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        childFunction: {
            type: Function,
        },
        data: { type: Object },

    },
    data() {
        return {
            check: false
        }
    },
    methods: {
        callParentFunction(check) {
            // Call the function passed from the parent component
            this.childFunction(check);
        },
        checkNull(num) {
            if (num > 0) {
                return num
            } else {
                return "ยังไม่มีการจดมิเตอร์"
            }
        },
        showcode() {
            if ($('#sampleeditor').text() != '') {//check if the div is not empty => not working
                var orgcontent = document.getElementById('sampleeditor').outerHTML;//get the content of the div
                var copiedcontent = document.getElementById('contentcode').innerHTML = orgcontent;//place the content in the target div || the issue here is that the content is shown as it is|| I want it to be a text of the code
                document.getElementById('formatted-contentcode').innerHTML = escapeHtml(orgcontent);
                // The above formatted-contentcode will have the escaped characters
            } else {
                document.getElementById('contentcode').innerHTML = "Nothing to show";//if the original div is empty show this text
            }
        },
    },
    computed: {
        waterValue() {
            const candidates = [
                this.data?.sumWater,
                this.data?.water,
                this.data?.totalWater,
                this.data?.sum_water,
            ];
            return candidates.find((value) => value !== undefined && value !== null);
        },
        electricValue() {
            const candidates = [
                this.data?.sumElectric,
                this.data?.electric,
                this.data?.totalElectric,
                this.data?.sum_electric,
            ];
            return candidates.find((value) => value !== undefined && value !== null);
        },
        hasWaterValue() {
            return this.waterValue !== undefined;
        },
        hasElectricValue() {
            return this.electricValue !== undefined;
        },
        waterTooltipText() {
            return "คำนวณจากผลรวมหน่วยน้ำที่ใช้ของทุกห้อง โดยแต่ละห้องคิดจาก (เลขมิเตอร์ครั้งล่าสุด - เลขมิเตอร์ครั้งก่อนหน้า) แล้วนำมารวมกันทั้งตึก";
        },
        electricTooltipText() {
            return "คำนวณจากผลรวมหน่วยไฟที่ใช้ของทุกห้อง โดยแต่ละห้องคิดจาก (เลขมิเตอร์ครั้งล่าสุด - เลขมิเตอร์ครั้งก่อนหน้า) แล้วนำมารวมกันทั้งตึก";
        },
    },
    name: 'PhBuildingsLight',
    name: 'PhHouseSimpleBold',
    name: 'PhHouseSimpleFill',
    name: 'MaterialSymbolsPaymentsOutlineSharp',
}
</script>
<style scoped>
.bg-card {
    background: linear-gradient(180deg, #D1C0FF 100%, #9747FF 100%, #9747FF 100%);
}
</style>