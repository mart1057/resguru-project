<template>
    <div>
        <div class="grid grid-cols-2 w-[100%] gap-2 mt-[10px]">
            <div class="h-[110px] p-[18px] flex flex-col justify-between bg-[#3ba7c4] rounded-[22px] text-[white]">
                <div class="flex justify-between">
                    <div v-if="data.sumWater" class="text-[24px] flex justify-center items-center" id="waterbox">{{
                        data.sumWater }}</div>
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
                <div class="flex justify-between">
                    <div class="text-[20px] flex justify-start items-center">ค่าน้ำรวม</div>
                    <!-- <div>
                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_119_1460" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="0"
                                width="22" height="22">
                                <rect x="1.71484" y="0.856934" width="20.5714" height="20.5714" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_119_1460)">
                                <path
                                    d="M12.0001 17.6701L11.0836 16.7668L16.065 11.7855H5.47266V10.4998H16.065L11.0836 5.51851L12.0001 4.61523L18.5275 11.1427L12.0001 17.6701Z"
                                    fill="white" />
                            </g>
                        </svg>
                    </div> -->
                </div>
            </div>
            <div class="h-[110px] p-[18px] flex flex-col justify-between bg-[#F5D65E] rounded-[22px] text-[#003765]  ">
                <div class="flex justify-between">
                    <div v-if="data.sumWater" class="text-[24px] flex justify-center items-center">{{ data.sumElectric
                        }}</div>
                    <div v-else class="text-[24px] flex justify-center items-center" id="waterbox">ยังไม่จดมิเตอร์</div>
                    <div>


                        <template>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                <path fill="white" d="M7 2v11h3v9l7-12h-4l4-8z" />
                            </svg>
                        </template>


                    </div>
                </div>
                <div class="flex justify-between">
                    <div class="text-[20px] flex justify-start items-center">ค่าไฟรวม</div>
                    <!-- <div>
                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_119_1460" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="0"
                                width="22" height="22">
                                <rect x="1.71484" y="0.856934" width="20.5714" height="20.5714" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_119_1460)">
                                <path
                                    d="M12.0001 17.6701L11.0836 16.7668L16.065 11.7855H5.47266V10.4998H16.065L11.0836 5.51851L12.0001 4.61523L18.5275 11.1427L12.0001 17.6701Z"
                                    fill="#003765" />
                            </g>
                        </svg>
                    </div> -->
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