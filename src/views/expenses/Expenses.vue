<template>
    <div class="p-[20px] pt-[20px]">
        <div class="h-[auto] bg-[white] rounded-[12px] pt-[8px] pb-[8px] pl-[28px] pr-[28px] flex flex-col justify-end">
            <div class="flex justify-between">
                <div class="flex">
                    <div><svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_633_15105" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                width="41" height="41">
                                <rect width="41" height="41" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_633_15105)">
                                <path
                                    d="M12.5838 28.6138H15.1463V20.4993H12.5838V28.6138ZM25.8562 28.6138H28.4187V11.9576H25.8562V28.6138ZM19.2201 28.6138H21.7825V23.916H19.2201V28.6138ZM19.2201 20.4993H21.7825V17.0826H19.2201V20.4993ZM9.06862 35.0201C8.20569 35.0201 7.47526 34.7211 6.87734 34.1232C6.27943 33.5253 5.98047 32.7949 5.98047 31.9319V9.06667C5.98047 8.20373 6.27943 7.47331 6.87734 6.87539C7.47526 6.27747 8.20569 5.97852 9.06862 5.97852H31.9339C32.7968 5.97852 33.5273 6.27747 34.1252 6.87539C34.7231 7.47331 35.0221 8.20373 35.0221 9.06667V31.9319C35.0221 32.7949 34.7231 33.5253 34.1252 34.1232C33.5273 34.7211 32.7968 35.0201 31.9339 35.0201H9.06862ZM9.06862 32.4576H31.9339C32.0653 32.4576 32.1858 32.4029 32.2953 32.2934C32.4048 32.1838 32.4596 32.0634 32.4596 31.9319V9.06667C32.4596 8.93524 32.4048 8.81476 32.2953 8.70523C32.1858 8.59573 32.0653 8.54097 31.9339 8.54097H9.06862C8.9372 8.54097 8.81671 8.59573 8.70718 8.70523C8.59768 8.81476 8.54293 8.93524 8.54293 9.06667V31.9319C8.54293 32.0634 8.59768 32.1838 8.70718 32.2934C8.81671 32.4029 8.9372 32.4576 9.06862 32.4576Z"
                                    fill="#003765" />
                            </g>
                        </svg>
                    </div>
                    <div class="text-[24px] font-bold flex items-center ml-[8px]">ภาพรวมรายรับ-รายจ่าย</div>
                </div>
                <div class="flex items-center mt-[-10px] w-[250px]">
                    <div class="relative w-full">
                    <button 
                        @click="showDatePicker = !showDatePicker" 
                        class="h-9 px-2 text-center bg-blue-900 flex cursor-pointer text-white justify-center items-center rounded-xl mt-3 w-full"
                    >
                        {{ formatMonthYear(selectedDate) }}
                    </button>
                    <div v-if="showDatePicker" class="absolute top-full left-0 z-10 mt-1 bg-white shadow-lg rounded-lg p-4">
                        <div class="flex justify-between mb-2">
                        <button @click="changeYear(-1)" class="px-2 py-1 bg-gray-200 rounded">&lt;</button>
                        <div class="font-bold">{{ currentYear }}</div>
                        <button @click="changeYear(1)" class="px-2 py-1 bg-gray-200 rounded">&gt;</button>
                        </div>
                        <div class="grid grid-cols-3 gap-2">
                        <div
                            v-for="(month, index) in monthNames" 
                            :key="index"
                            @click="selectMonth(index)"
                            class="p-2 text-center cursor-pointer rounded hover:bg-gray-100"
                            :class="{'bg-blue-500 text-white': isSelectedMonth(index)}"
                        >
                            {{ month.substring(0, 3) }}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>





<!-- Replace your existing grid with รายรับ and รายจ่าย sections with this: -->
<div class="grid grid-cols-2 w-[100%] gap-4 mt-[24px]">
    <!-- รายรับ section with conditional blur -->
    <div class="relative">
        <div class="bg-[white] h-[246px] rounded-[22px] pl-[24px] pr-[24px] pt-[18px] pb-[18px]" 
             :class="{ 'blur-sm pointer-events-none': isPackageBasic }">
            <div class="font-bold text-[18px]">รายรับ</div>
            <div class="grid grid-cols-3 w-[100%] gap-4 mt-[14px]">
                <!-- ... your existing รายรับ content ... -->
                <div class="flex mt-[4px] w-[70%]">
                    <div class="mt-[8px]">
                        <div v-for="(label, index) in incomeLabels" :key="index" class="flex items-center mt-[2px]">
                            <div class="w-[12px] h-[12px] rounded-[100px] mr-[8px]" :style="{ 'background-color': incomeColors[index] }"></div>
                            <div class="text-[12px] text-[#5C6B79]">{{ label }}</div>
                        </div>
                    </div>
                </div>
                <div class="w-[50%]">
                    <div class="w-[300px] flex justify-start items-start ml-[-90px] mt-[-40px]">
                        <apexchart :options="incomeChartOptions" :series="incomeData"></apexchart>
                    </div>
                </div>
                <div class="grid grid-cols-2 w-[100%] gap-2 content-start mt-[14px]">
                    <div v-for="(value, index) in incomeData" :key="index" class="h-[52px] border rounded-[12px] p-[4px]" v-if="value > 0">
                        <div class="flex justify-between">
                            <div class="flex items-center">
                                <div class="w-[12px] h-[12px] rounded-[100px] mr-[8px]" :style="{ 'background-color': incomeColors[index] }"></div>
                            </div>
                            <div class="flex flex-col justify-around">
                                <div class="text-[12px] text-[#B9CCDC]">{{ Math.round((value / incomeData.reduce((a, b) => a + b, 0)) * 100) }}%</div>
                                <div class="font-bold text-[16px]" :style="{ color: incomeColors[index] }">{{ $formatNumber(value) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Package upgrade overlay for รายรับ -->
        <div v-if="isPackageBasic" class="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-40 rounded-lg">
            <div class="text-center p-4 bg-white rounded-lg shadow-lg">
                <div class="text-lg font-bold text-gray-700 mb-2">
                    อัพเกรดแพ็คเกจ
                </div>
                <div class="text-sm text-gray-600 mb-4">
                    ฟีเจอร์นี้ใช้ได้กับแพ็คเกจ Professional เท่านั้น
                </div>
                <button 
                    @click="routeTo('/pricing')" 
                    class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                    อัพเกรดแพ็คเกจ
                </button>
            </div>
        </div>
    </div>

    <!-- รายจ่าย section with conditional blur -->
    <div class="relative">
        <div class="bg-[white] h-[246px] rounded-[22px] pl-[24px] pr-[24px] pt-[18px] pb-[18px]"
             :class="{ 'blur-sm pointer-events-none': isPackageBasic }">
            <div class=" font-bold text-[18px]">รายจ่าย</div>
            <div class="grid grid-cols-3 w-[100%] gap-4 mt-[14px]">
                <!-- ... your existing รายจ่าย content ... -->
                <div class="flex mt-[4px] w-[70%]">
                    <div class="mt-[8px]">
                        <div class="flex items-center">
                            <div class="w-[12px] h-[12px] bg-[#F1B826] rounded-[100px] mr-[8px]"></div>
                            <div class="text-[12px] text-[#5C6B79]">{{ label2[0] }}</div>
                        </div>
                        <div class="flex items-center mt-[2px]">
                            <div class="w-[12px] h-[12px] bg-[#008EF4] rounded-[100px] mr-[8px]"></div>
                            <div class="text-[12px] text-[#5C6B79]">{{ label2[1] }}</div>
                        </div>
                        <div class="flex items-center mt-[2px]">
                            <div class="w-[12px] h-[12px] bg-[#D44769] rounded-[100px] mr-[8px]"></div>
                            <div class="text-[12px] text-[#5C6B79]">{{ label2[2] }}</div>
                        </div>
                        <div class="flex items-center mt-[2px]">
                            <div class="w-[12px] h-[12px] bg-[#a1a1a1] rounded-[100px] mr-[8px]"></div>
                            <div class="text-[12px] text-[#5C6B79]">{{ label2[3] }}</div>
                        </div>
                    </div>
                </div>
                <div class="w-[50%]">
                    <div class="w-[300px] flex justify-start items-start ml-[-90px] mt-[-40px]">
                        <apexchart :options="options" :series="data2"></apexchart>
                    </div>
                </div>
                <!-- ... rest of your existing รายจ่าย cards ... -->
            </div>
        </div>
        <!-- Package upgrade overlay for รายจ่าย -->
        <div v-if="isPackageBasic" class="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-40 rounded-lg">
            <div class="text-center p-4 bg-white rounded-lg shadow-lg">
                <div class="text-lg font-bold text-gray-700 mb-2">
                    อัพเกรดแพ็คเกจ
                </div>
                <div class="text-sm text-gray-600 mb-4">
                    ฟีเจอร์นี้ใช้ได้กับแพ็คเกจ Professional เท่านั้น
                </div>
                <button 
                    @click="routeTo('/pricing')" 
                    class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                    อัพเกรดแพ็คเกจ
                </button>
            </div>
        </div>
    </div>
</div>





        <div
            class="h-[auto] mt-[24px] bg-[white] rounded-[12px] pt-[8px] pb-[8px] pl-[28px] pr-[28px] flex flex-col justify-end">
            <div class="">
                <div class="flex">
                    <div><svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_633_15105" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                width="41" height="41">
                                <rect width="41" height="41" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_633_15105)">
                                <path
                                    d="M12.5838 28.6138H15.1463V20.4993H12.5838V28.6138ZM25.8562 28.6138H28.4187V11.9576H25.8562V28.6138ZM19.2201 28.6138H21.7825V23.916H19.2201V28.6138ZM19.2201 20.4993H21.7825V17.0826H19.2201V20.4993ZM9.06862 35.0201C8.20569 35.0201 7.47526 34.7211 6.87734 34.1232C6.27943 33.5253 5.98047 32.7949 5.98047 31.9319V9.06667C5.98047 8.20373 6.27943 7.47331 6.87734 6.87539C7.47526 6.27747 8.20569 5.97852 9.06862 5.97852H31.9339C32.7968 5.97852 33.5273 6.27747 34.1252 6.87539C34.7231 7.47331 35.0221 8.20373 35.0221 9.06667V31.9319C35.0221 32.7949 34.7231 33.5253 34.1252 34.1232C33.5273 34.7211 32.7968 35.0201 31.9339 35.0201H9.06862ZM9.06862 32.4576H31.9339C32.0653 32.4576 32.1858 32.4029 32.2953 32.2934C32.4048 32.1838 32.4596 32.0634 32.4596 31.9319V9.06667C32.4596 8.93524 32.4048 8.81476 32.2953 8.70523C32.1858 8.59573 32.0653 8.54097 31.9339 8.54097H9.06862C8.9372 8.54097 8.81671 8.59573 8.70718 8.70523C8.59768 8.81476 8.54293 8.93524 8.54293 9.06667V31.9319C8.54293 32.0634 8.59768 32.1838 8.70718 32.2934C8.81671 32.4029 8.9372 32.4576 9.06862 32.4576Z"
                                    fill="#003765" />
                            </g>
                        </svg>
                    </div>
                    <div class="text-[18px] font-bold flex items-center ml-[8px]">รายรับ-รายจ่าย</div>
                </div>
                <div class="flex">


                    <div class="h-[36px] w-[150px] flex cursor-pointer  justify-left rounded-[12px] mt-[12px]">
                        <div @click="tab = 1" class="cursor-pointer "
                            :class="tab == 1 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[12px] text-[white]' : 'text-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] flex justify-center items-center'">
                            รายรับ</div>
                        <div @click="tab = 2" class="cursor-pointer ml-[8px]"
                            :class="tab == 2 ? 'bg-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] rounded-[12px] text-[white]' : 'text-[#003765] pl-[9px] pr-[9px] pt-[8px] pb-[8px] flex justify-center items-center'">
                            รายจ่าย
                        </div>
                    </div>
                    <div class="h-[36px] w-[132px] bg-[#003765] flex cursor-pointer  justify-center rounded-[12px] mt-[12px]"
                        @click="create = true">

                        <div class="flex justify-center items-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.99968 12.6875C6.8048 12.6875 6.64155 12.6216 6.50993 12.4898C6.37831 12.3581 6.3125 12.1948 6.3125 12V7.18746H1.49998C1.30519 7.18746 1.14191 7.12155 1.01016 6.98973C0.878385 6.8579 0.8125 6.69455 0.8125 6.49968C0.8125 6.3048 0.878385 6.14155 1.01016 6.00993C1.14191 5.87831 1.30519 5.8125 1.49998 5.8125H6.3125V0.999977C6.3125 0.805185 6.37841 0.641904 6.51023 0.510133C6.64206 0.378378 6.80541 0.3125 7.00028 0.3125C7.19516 0.3125 7.35841 0.378378 7.49003 0.510133C7.62165 0.641904 7.68745 0.805185 7.68745 0.999977V5.8125H12.5C12.6948 5.8125 12.8581 5.87841 12.9898 6.01023C13.1216 6.14206 13.1875 6.30541 13.1875 6.50028C13.1875 6.69516 13.1216 6.85841 12.9898 6.99003C12.8581 7.12164 12.6948 7.18746 12.5 7.18746H7.68745V12C7.68745 12.1948 7.62155 12.3581 7.48973 12.4898C7.3579 12.6216 7.19455 12.6875 6.99968 12.6875Z"
                                    fill="white" />
                            </svg>
                        </div>

                        <div @click="create = true"
                            class="text-white font-bold ml-[8px]   flex justify-center items-center">เพิ่มรายจ่าย</div>

                    </div>

                    <!-- <vs-tooltip bottom shadow not-hover v-model="popup_filter">
                        <div @click="popup_filter = true"
                            class="h-[36px] w-[132px]  flex  justify-center rounded-[12px] mt-[12px] ml-[14px] cursor-pointer">
                            <div class="flex justify-center items-center">
                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_3262_4178" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0"
                                        y="0" width="22" height="23">
                                        <rect y="0.5" width="22" height="22" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_3262_4178)">
                                        <path
                                            d="M10.0846 16.7707C9.88982 16.7707 9.72655 16.7048 9.59479 16.573C9.46302 16.4411 9.39714 16.2778 9.39714 16.0829C9.39714 15.888 9.46302 15.7248 9.59479 15.5932C9.72655 15.4615 9.88982 15.3957 10.0846 15.3957H11.9179C12.1127 15.3957 12.276 15.4616 12.4078 15.5935C12.5395 15.7253 12.6054 15.8886 12.6054 16.0835C12.6054 16.2784 12.5395 16.4416 12.4078 16.5733C12.276 16.7049 12.1127 16.7707 11.9179 16.7707H10.0846ZM3.66795 7.25144C3.47315 7.25144 3.30988 7.18553 3.17813 7.05369C3.04635 6.92186 2.98047 6.75851 2.98047 6.56364C2.98047 6.36876 3.04635 6.20551 3.17813 6.07389C3.30988 5.94227 3.47315 5.87646 3.66795 5.87646H18.3346C18.5294 5.87646 18.6927 5.94238 18.8245 6.07421C18.9562 6.20603 19.0221 6.36938 19.0221 6.56426C19.0221 6.75913 18.9562 6.92237 18.8245 7.05399C18.6927 7.18563 18.5294 7.25144 18.3346 7.25144H3.66795ZM6.41795 12.0111C6.22315 12.0111 6.05988 11.9451 5.92813 11.8133C5.79635 11.6815 5.73047 11.5181 5.73047 11.3233C5.73047 11.1284 5.79635 10.9651 5.92813 10.8335C6.05988 10.7019 6.22315 10.6361 6.41795 10.6361H15.5846C15.7794 10.6361 15.9427 10.702 16.0745 10.8338C16.2062 10.9657 16.2721 11.129 16.2721 11.3239C16.2721 11.5188 16.2062 11.682 16.0745 11.8136C15.9427 11.9452 15.7794 12.0111 15.5846 12.0111H6.41795Z"
                                            fill="#003765" />
                                    </g>
                                </svg>
                            </div>
                            <div class=" font-bold ml-[8px] flex justify-center items-center">ฟิลเตอร์</div>
                        </div>
                        <template #tooltip>
                            <div class="w-[100%]">
                                <div class="center">
                                    <vs-checkbox v-model="option">
                                        <div class="text-custom">ห้องค้างชำระ</div>
                                    </vs-checkbox>
                                </div>
                                <div class="center">
                                    <vs-checkbox v-model="option">
                                        <div class="text-custom">ห้องชำระเงินแล้ว</div>
                                    </vs-checkbox>
                                </div>
                                <div class="center">
                                    <vs-checkbox v-model="option">
                                        <div class="text-custom">ห้องว่าง</div>
                                    </vs-checkbox>
                                </div>
                                <div class="center">
                                    <vs-checkbox v-model="option">
                                        <div class="text-custom">ห้องติดจอง</div>
                                    </vs-checkbox>
                                </div>
                                <div class="center">
                                    <vs-checkbox v-model="option">
                                        <div class="text-custom">ห้องใกล้หมดสัญญา</div>
                                    </vs-checkbox>
                                </div>
                                <div class="center">
                                    <vs-checkbox v-model="option">
                                        <div class="text-custom">ห้องแจ้งย้ายออก</div>
                                    </vs-checkbox>
                                </div>
                            </div>
                        </template>
                    </vs-tooltip> -->
                </div>
            </div>
            <div class="mt-[14px]" v-if="tab == 2">
                <vs-table>
                    <template #thead>
                        <vs-tr>

                            <vs-th>
                                วันที่
                            </vs-th>
                            <vs-th>
                                ประเภท
                            </vs-th>
                            <!-- <vs-th>
                                หัวข้อ
                            </vs-th> -->
                            <vs-th>
                                หมายเหตุ
                            </vs-th>
                            <vs-th>
                                หลักฐานการชำระเงิน
                            </vs-th>
                            <vs-th>
                                ใบสำคัญจ่าย
                            </vs-th>
                            <vs-th>
                                จำนวนเงิน
                            </vs-th>
                        </vs-tr>
                    </template>
                    <template #tbody>
                        <vs-tr :key="i" v-for="(tr, i) in expense" :data="tr">
                            <vs-td>
                                {{ tr.attributes.date }}
                            </vs-td>
                            <vs-td>
                                {{ tr.attributes.building_expense_type.data ? tr.attributes.building_expense_type.data.attributes.expenseTypeName : "" }}
                            </vs-td>
                            <!-- <vs-td>
                                {{ tr.attributes.title }}
                            </vs-td> -->
                            <vs-td>
                                {{ tr.attributes.remark }}
                            </vs-td>
                            <vs-td class="image-cell">
                                <img 
                                    :src="tr.attributes.evidence.data ? 'https://api.resguru.app'+tr.attributes.evidence.data.attributes.url : ''" 
                                    class="cell-image"
                                    v-if="tr.attributes.evidence.data"
                                    @click="openImagePreview(tr.attributes.evidence.data.attributes.url)"
                                />
                                <span v-else>-</span>
                            </vs-td>
                            <vs-td class="image-cell">
                                <img 
                                    :src="tr.attributes.receipt.data ? 'https://api.resguru.app'+ tr.attributes.receipt.data.attributes.url : ''" 
                                    class="cell-image"
                                    v-if="tr.attributes.receipt.data"
                                    @click="openImagePreview(tr.attributes.receipt.data.attributes.url)"
                                />
                                <span v-else>-</span>
                            </vs-td>
                            <vs-td>
                                {{ $formatNumber(tr.attributes.amount) }}
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </div>

            <div class="mt-[14px]" v-if="tab == 1">
                <vs-table>
                    <template #thead>
                        <vs-tr>
                            <vs-th>
                                หมายเลขใบเสร็จรับเงิน
                            </vs-th>
                            <vs-th>
                                วันที่ออกใบเสร็จ
                            </vs-th>
                            <!-- <vs-th>
                                ห้อง
                            </vs-th> -->
                            <vs-th>
                                ค่าห้อง
                            </vs-th>
                            <vs-th>
                                ค่าน้ำ
                            </vs-th>
                            <vs-th>
                                ค่าไฟ
                            </vs-th>
                            <vs-th>
                                ค่าส่วนกลาง
                            </vs-th>
                            <vs-th>
                                อื่นๆ
                            </vs-th>
                            <vs-th>
                                ยอดรวมรายรับ
                            </vs-th>
                        </vs-tr>
                    </template>
                    <template #tbody>
                        <vs-tr :key="i" v-for="(tr, i) in income" :data="tr">
                            <vs-td>
                                {{ tr.attributes.receiptNumber }}
                            </vs-td>
                            <vs-td>
                                {{ convertDateNoTime(tr.attributes.createdAt) }}
                            </vs-td>
                            <!-- <vs-td>
                                Room Number
                            </vs-td> -->
                            <vs-td>
                                {{ $formatNumber(tr.attributes.roomPrice) }}
                            </vs-td>
                            <vs-td>
                                {{ $formatNumber(tr.attributes.waterPrice) }}
                            </vs-td>
                            <vs-td>
                                {{ $formatNumber(tr.attributes.electricPrice) }}
                            </vs-td>
                            <vs-td>
                                {{ $formatNumber(tr.attributes.communalPrice) }}
                            </vs-td>
                            <vs-td>
                                {{ $formatNumber(tr.attributes.otherPrice) }}
                            </vs-td>
                            <vs-td>
                                {{ $formatNumber(tr.attributes.total) }}
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </div>
        </div>

        <!-- //////////////////////////// pop-up /////////////////////// -->
        <b-modal  v-if="tab == 2"  centered v-model="create" size="default" hide-backdrop hide-header-close hide-header hide-footer
            class="p-[-20px] text-custom">
            <div>
                <div class="flex justify-between pl-[20px] pr-[20px]">
                    <div class="text-custom flex justify-center items-center text-[18px] font-bold">เพิ่มรายจ่าย</div>
                    <div @click="create = false" class="cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_417_4814" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                width="24" height="24">
                                <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_417_4814)">
                                <path
                                    d="M12.0005 13.0538L6.92737 18.1269C6.78892 18.2654 6.61489 18.3362 6.40527 18.3394C6.19567 18.3426 6.01844 18.2718 5.87357 18.1269C5.72869 17.982 5.65625 17.8064 5.65625 17.6C5.65625 17.3936 5.72869 17.218 5.87357 17.0731L10.9466 12L5.87357 6.92689C5.73511 6.78844 5.66427 6.6144 5.66107 6.40479C5.65786 6.19519 5.72869 6.01795 5.87357 5.87309C6.01844 5.7282 6.19407 5.65576 6.40047 5.65576C6.60687 5.65576 6.78251 5.7282 6.92737 5.87309L12.0005 10.9462L17.0736 5.87309C17.212 5.73462 17.3861 5.66379 17.5957 5.66059C17.8053 5.65737 17.9825 5.7282 18.1274 5.87309C18.2723 6.01795 18.3447 6.19359 18.3447 6.39999C18.3447 6.60639 18.2723 6.78202 18.1274 6.92689L13.0543 12L18.1274 17.0731C18.2658 17.2115 18.3367 17.3856 18.3399 17.5952C18.3431 17.8048 18.2723 17.982 18.1274 18.1269C17.9825 18.2718 17.8069 18.3442 17.6005 18.3442C17.3941 18.3442 17.2184 18.2718 17.0736 18.1269L12.0005 13.0538Z"
                                    fill="#5C6B79" />
                            </g>
                        </svg>
                    </div>
                </div>
                <!-- <div class="w-[100%] h-[1px]  mt-[24px] mb-[14px] bg-gray-200 border-0 dark:bg-gray-700"></div> -->
                <div class="pl-[20px] pr-[20px] mt-[24px]">
                    <div>
                        <div class="text-custom text-[14px] text-[#003765]">ประเภทรายจ่าย</div>
                        <div class="flex  items-center">
                            <select placeholder="Select"  class="w-[200px] h-[32px] border rounded-[12px] pl-[8px] pr-[8px]" v-model="expenseTypeValue">
                                <option v-for="expenseType in expenseType"
                                    :value="expenseType.id">
                                    {{ expenseType.attributes.expenseTypeName }} {{ expenseType.id }}
                                </option>
                            </select>
                            <div class="ml-[8px]" v-if="expenseTypeValue == 4">
                                <input class="h-[36px] w-[100%] ml-[8px] bg-[#F3F8FD] rounded-[12px]  flex justify-start"
                                    type="input" v-model="title" />
                            </div>
                        </div>
                    </div>
                    <div class="mt-[8px]">
                        <div class="text-custom text-[14px] text-[#003765]">หมายเหตุ</div>
                        <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input"
                            v-model="remark" />
                    </div>
                    <div class="mt-[14px]">
                        <div class="text-custom text-[14px] text-[#003765]">จำนวนเงิน (บาท)</div>
                        <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px]  flex justify-start" type="input"
                            v-model="amount" />
                    </div>
                    <div class="mt-[14px]">
                        <div class="text-custom text-[14px] text-[#003765]">วันที่</div>
                        <input class="h-[36px] w-[100%] bg-[#F3F8FD] rounded-[12px] pl-[14px] pr-[14px]  flex justify-start"
                            type="date" v-model="date" />
                    </div>
                    <div class="mt-[14px]">
                        <div class="text-custom text-[14px] text-[#003765]">หลักฐานการจ่ายเงิน</div>
                        <div class="flex mt-[4px]">
                            <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start " id="uploadEvidence"
                                ref="fileEvidence" hidden type="file" @change="tempUploadEvidence()" />
                            <label for="uploadEvidence">
                            <div
                                class="flex justify-center text-custom items-center bg-[#165D98] text-[14px] cursor-pointer text-[white] pt-[8px] pb-[8px] pl-[12px] pr-[12px] rounded-[12px]">
                                เลือกรูปภาพ</div>
                            </label>
                            <div v-if="this.fileEvidenceForm.name" class="text-[#5C6B79] text-custom flex justify-center items-center ml-[8px] text-[12px]">
                                {{this.fileEvidenceForm.name}}</div>
                            <div v-else class="text-[#5C6B79] text-custom flex justify-center items-center ml-[8px] text-[12px]">
                                ยังไม่ได้เลือกไฟล์</div>
                        </div>
                    </div>
                    <div class="mt-[14px]">
                        <div class="text-custom text-[14px] text-[#003765]">ใบสำคัญจ่าย</div>
                        <div class="flex mt-[4px]">
                            <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start " id="uploadReceipt"
                                ref="fileReceipt" hidden type="file" @change="tempUploadReceipt()" />
                            <label for="uploadReceipt">
                            <div
                                class="flex justify-center text-custom items-center bg-[#165D98] cursor-pointer text-[14px] text-[white] pt-[8px] pb-[8px] pl-[12px] pr-[12px] rounded-[12px]">
                                เลือกรูปภาพ</div>
                            </label>
                            <div v-if="this.fileReceiptForm.name" class="text-[#5C6B79] text-custom flex justify-center items-center ml-[8px] text-[12px]">
                                {{this.fileReceiptForm.name}}</div>
                            <div v-else class="text-[#5C6B79] text-custom flex justify-center items-center ml-[8px] text-[12px]">
                                ยังไม่ได้เลือกไฟล์</div>
                        </div>
                    </div>

                </div>
                <div class="flex justify-end mt-[30px]">
                    <div>
                        <vs-button dark shadow @click="create = false">
                            <div class="text-custom">ยกเลิก</div>
                        </vs-button>
                    </div>
                    <div>
                        <vs-button @click="createExpense()" color="#003765">
                            <div class="text-custom">เพิ่ม</div>
                        </vs-button>
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import axios from 'axios'
import { convertDateNoTime } from '@/components/hook/hook';
export default {
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            tab: 1,
            create: false,
            popup_filter: false,
            data: [],
            data2: [0, 0, 0, 0],
            label2: [],
            expense: [],
            expenseType: [],
            income: [],
            title: "",
            expenseTypeValue: 0,
            amount: 0,
            date: "",
            remark: "",
            evidence: "",
            receipt: "",
            fileEvidenceForm: [],
            fileReceiptForm: [],
            selectedDate: null,
            filter: {
                search: '',
                floor: '',
                selectedMonth: '',
                selectedYear: '',
            },
            convertDateNoTime,
            showDatePicker: false,
            currentYear: new Date().getFullYear(),
            monthNames: [
                'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
                'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
            ],
            incomeData: [],
            incomeLabels: ['ค่าห้อง', 'ค่าน้ำ', 'ค่าไฟ', 'ค่าส่วนกลาง', 'อื่นๆ'],
            incomeColors: ['#11d17e', '#3630a6', '#27d111', '#ac6eeb', '#a1a1a1'],
        }

    },
    created() {
        this.selectedDate = new Date().toISOString().substr(0, 7) // Set the default to current month
        const loading = this.$vs.loading({
            opacity: 1,
        })
        setTimeout(() => {
            loading.close()
        }, 1000)
    },
    computed: {
        options() {
            return {
                chart: {
                    type: "donut",
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    show: false,
                },
                dashboard: [],

                labels: this.label2,
                plotOptions: {
                    pie: {
                        // data:[10,20,4,6,7],
                        donut: {
                            labels: {
                                show: true,
                                total: {
                                    show: true,
                                    label: "ทั้งหมด",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    color: "#6B7490",
                                    fontFamily: "Prompt",
                                },
                            },
                        },
                    },
                },
                colors: ["#F5D65E", "#008EF4", "#D44769", "#9A77FF"]

                // noData: {
                //     text: this.loading ? "Loading..." : "No Data",
                // },
            };
        },
        // New options for the income chart
        incomeChartOptions() {
            return {
                chart: {
                    type: "donut",
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    show: false,
                },
                labels: this.incomeLabels,
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                show: true,
                                total: {
                                    show: true,
                                    label: "ทั้งหมด",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    color: "#6B7490",
                                    fontFamily: "Prompt",
                                },
                            },
                        },
                    },
                },
                colors: this.incomeColors
            };
        },
        isPackageBasic() {
        // Check if package ID is 1 (Basic package)
        const packageId = this.$store.state.buildingInfo[0]?.attributes?.package?.data?.id;
        return packageId === 1;
        },
    },
    mounted() {
        this.filterByDate()
        this.getIncome();
        this.getExpenseType();
    },
    methods: {
        filterByDate() {
            const dateStr =  this.selectedDate;
            const [a, b] = dateStr.split('-');
            this.filter.selectedMonth = b
            this.filter.selectedYear = a
            this.getDashboard(this.filter.selectedMonth, this.filter.selectedYear);
            this.getExpense(this.filter.selectedMonth, this.filter.selectedYear)
        },
        routeTo(path) {
            this.$router.push({
                path: path,
            })
        },
        getDashboard(m,y) {
            fetch(`https://api.resguru.app/api/getexpensedashboard?buildingid=${this.$store.state.building}`)
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getExpense()", resp.accounting.receive.toFixed(2));
                    const desiredOrder = ["ค่าจ้างพนักงาน", "ค่าจ้างทำของ", "ค่าซ่อมบำรุง", "ค่าอื่นๆ"];
                    const counts = desiredOrder.map(type => {
                        const item = resp.expenseCategory.counts.find(item => item.type === type);
                        return item ? item.count : 0;
                    });
                    this.label2 = desiredOrder
                    this.data2 = counts
                    this.data.push(Math.floor(resp.accounting.receive))
                    this.dashboard = resp
                })
        },
        getExpense(m,y) {
            const loading = this.$vs.loading()
            // fetch('https://api.resguru.app/api' + '/announcements?filters[building][id][$eq]=' + this.$store.state.building +'&poopulate=*')
            fetch(`https://api.resguru.app/api/building-expenses?populate=*&filters[building][id][$eq]=${this.$store.state.building}&sort[0]=id:desc`)
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getExpense()", resp.data);
                    this.expense = resp.data
                }).finally(() => {
                    loading.close()
                })
        },
        getExpenseType() {
            fetch(`https://api.resguru.app/api/building-expense-types`)
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getExpense()", resp.data);
                    this.expenseType = resp.data
                })
        },
        tempUploadEvidence() {
            this.fileEvidenceForm = this.$refs.fileEvidence.files[0]
        },
        tempUploadReceipt() {
            this.fileReceiptForm = this.$refs.fileReceipt.files[0]
        },
        createExpense() {
            axios.post(`https://api.resguru.app/api/building-expenses`, {
                data: {
                    title: this.title,
                    building_expense_type: this.expenseTypeValue,
                    amount: this.amount,
                    date: this.date,
                    remark: this.remark,
                    building: this.$store.state.building,
                    // evidence: this.evidence,
                    // receipt: this.receipt
                }
            })
            .then((resp) => {
                if (this.fileEvidenceForm.length != 0) {
                    let formData = new FormData();
                    formData.append("files", this.fileEvidenceForm);
                    formData.append("refId", String(resp.data.data.id));
                    formData.append("ref", "api::building-expense.building-expense");
                    formData.append("field", "evidence");

                    axios.post("https://api.resguru.app/api/upload", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }).then((result) => { console.log("Upload file", result) })
                    .catch((error) => {
                        console.log(error);
                    });
                }

                if (this.fileReceiptForm.length != 0) {
                    let formDataReceipt = new FormData();
                    formDataReceipt.append("files", this.fileReceiptForm);
                    formDataReceipt.append("refId", String(resp.data.data.id));
                    formDataReceipt.append("ref", "api::building-expense.building-expense");
                    formDataReceipt.append("field", "receipt");

                    // Here's the fix: using formDataReceipt instead of formData
                    axios.post("https://api.resguru.app/api/upload", formDataReceipt, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }).then((result) => { console.log("Upload file", result) })
                    .catch((error) => {
                        console.log(error);
                    });
                }
            })
            .catch(error => {
                const errorMessage = error.message ? error.message : 'Error updating information';
                this.$showNotification('danger', errorMessage); 
            })
            .finally(() => {
                this.$showNotification('#3A89CB', 'Expense is created Successfully');
                this.create = false; // Close the modal after creation
                this.getExpense(this.filter.selectedMonth, this.filter.selectedYear); // Refresh the expense list
            });
        },
        // createExpense() {
        //     axios.post(`https://api.resguru.app/api/building-expenses`, {
        //         data: {
        //             title: this.title,
        //             building_expense_type: this.expenseTypeValue,
        //             amount: this.amount,
        //             date: this.date,
        //             remark: this.remark,
        //             building: this.$store.state.building,
        //             // evidence: this.evidence,
        //             // receipt: this.receipt
        //         }
        //     })
        //         .then((resp) => {

        //             if (this.fileEvidenceForm.length != 0) {
        //                 let formData = new FormData();
        //                 formData.append("files", this.fileEvidenceForm);
        //                 formData.append("refId", String(resp.data.data.id));
        //                 formData.append("ref", "api::building-expense.building-expense");
        //                 formData.append("field", "evidence");

        //                 axios.post("https://api.resguru.app/api/upload", formData, {
        //                     headers: {
        //                         "Content-Type": "multipart/form-data",
        //                     },
        //                 }).then((result) => { console.log("Upload file", result) })
        //                     .catch((error) => {
        //                         console.log(error);
        //                     })
        //             }

        //             if (this.fileReceiptForm.length != 0) {
        //                 let formDataReceipt = new FormData();
        //                 formDataReceipt.append("files", this.fileReceiptForm);
        //                 formDataReceipt.append("refId", String(resp.data.data.id));
        //                 formDataReceipt.append("ref", "api::building-expense.building-expense");
        //                 formDataReceipt.append("field", "receipt");

        //                 axios.post("https://api.resguru.app/api/upload", formData, {
        //                     headers: {
        //                         "Content-Type": "multipart/form-data",
        //                     },
        //                 }).then((result) => { console.log("Upload file", result) })
        //                     .catch((error) => {
        //                         console.log(error);
        //                     })
        //             }
                    
        //         }
        //         )
        //         .catch(error => {
        //             const errorMessage = error.message ? error.message : 'Error updating information';
        //             this.$showNotification('danger', errorMessage); 
        //         })
        //         .finally(()=>{
        //             this.$showNotification('#3A89CB', 'Expense is created Successfully')
        //         })
        // },
        getIncome() {
            const loading = this.$vs.loading();
            fetch(`https://api.resguru.app/api/tenant-receipts?populate=*?populate=building&filters[building][id][$eq]=${this.$store.state.building}&sort[0]=id:desc`)
                .then(response => response.json())
                .then((resp) => {
                    console.log("Return from getReceipt()", resp.data);
                    this.income = resp.data;
                    this.processIncomeData(); // Process the data after fetching
                }).finally(() => {
                    loading.close();
                });
        },
        processIncomeData() {
            // Initialize values for each category
            let roomTotal = 0;
            let waterTotal = 0;
            let electricTotal = 0;
            let commonTotal = 0;
            let othersTotal = 0;
            
            // Process each income record
            this.income.forEach(item => {
                roomTotal += parseFloat(item.attributes.roomPrice || 0);
                waterTotal += parseFloat(item.attributes.waterPrice || 0);
                electricTotal += parseFloat(item.attributes.electricPrice || 0);
                commonTotal += parseFloat(item.attributes.communalPrice || 0);
                othersTotal += parseFloat(item.attributes.otherPrice || 0);
            });
            
            // Update the income data for the chart
            this.incomeData = [roomTotal, waterTotal, electricTotal, commonTotal, othersTotal];
        },
        openImagePreview(imageUrl) {
            // You could implement an image preview functionality here
            // For example, opening a modal with the full-size image
            window.open('https://api.resguru.app' + imageUrl, '_blank');
        },
        changeYear(amount) {
            this.currentYear += amount;
        },
        
        selectMonth(monthIndex) {
            const month = String(monthIndex + 1).padStart(2, '0');
            this.selectedDate = `${this.currentYear}-${month}`;
            this.getDashboard(this.selectedDate);
            this.showDatePicker = false;
        },
        
        isSelectedMonth(monthIndex) {
            if (!this.selectedDate) return false;
            const [year, month] = this.selectedDate.split('-');
            return parseInt(year) === this.currentYear && parseInt(month) === monthIndex + 1;
        },
        
        formatMonthYear(dateString) {
            if (!dateString) return '';
            
            const [year, month] = dateString.split('-');
            return `${this.monthNames[parseInt(month) - 1]} ${year}`;
        },
    }


}
</script>
<style>
    .text-custom {
        font-family: 'Prompt';
    }

    #mr {
        width: 90px;
    }

    /* Add these new styles */
    .image-cell {
        width: 120px;  /* Set a fixed width for the image cells */
        text-align: center;
    }

    .cell-image {
        max-width: 100%;
        max-height: 80px;
        object-fit: contain;
        border-radius: 4px;
        cursor: pointer;
    }

    .z-10 {
        z-index: 10;
        }

        .relative {
        position: relative;
        }

        .absolute {
        position: absolute;
        }

        .grid {
        display: grid;
        }

        .grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .gap-2 {
        gap: 0.5rem;
        }

    /* Add these new styles to your existing styles */
    .blur-sm {
    filter: blur(4px);
    }

    .pointer-events-none {
    pointer-events: none;
    }

    .relative {
    position: relative;
    }

    .absolute {
    position: absolute;
    }

    .inset-0 {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    }
/* .vs-select__input{
    height: 36px !important;
    width: 350px !important;
} */
</style>