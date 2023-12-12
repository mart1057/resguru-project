<template>
    <div hidden>
        <!-- Your HTML content to convert to PDF -->
        <div ref="pdfContent" class="p-[8px]">
            <img class="watermarked" :src="Res_Guru_Logo_create06" />
            <div class="flex justify-between">
                <div class="flex">
                    <div>
                        <img :src="'http://203.170.190.170:1337' + $store.state.buildingInfo[0].attributes.buildingLogo.data.attributes.formats.large.url"
                            class="w-[70px] h-[70px]" />
                    </div>
                    <div class="ml-[8px]">
                        <div class="font-bold">{{ $store.state.buildingInfo[0].attributes.buildingName }}</div>
                        <div>{{ $store.state.buildingInfo[0].attributes.buildingAddress }}</div>
                        <div>Tel. {{ $store.state.buildingInfo[0].attributes.buildingPhone }}</div>
                    </div>
                </div>
                <div class="">
                    <div>invoice# {{ bill_detail.invoiceNumber }}</div>
                    <div class="">
                        <div>Issue date</div>
                        <div>{{ '-' }}</div>
                    </div>
                </div>
            </div>
            <hr class="mt-[32px] mb-[32] h-[10px]">
            <div>
                <div class="text-[24px] font-bold">{{ $store.state.buildingInfo[0].attributes.buildingName }}</div>
                <div class="mt-[4px] mb-[15px]">กรุณาชำระทุกวันที่ 1-5 ของเดือนถัดไป ล่าช้าปรับวันละ 100 บาท </div>
            </div>
            <div class="grid grid-cols-3">
                <div class=" pr-[14px]">
                    <hr class="h-[10px]">
                    <div class="font-bold mb-[8px]">BILL To</div>
                    <div>{{ user_detail.firstName
                    }} {{ user_detail.lastName }}</div>
                    <div>{{ user_detail.contactAddress }}</div>
                    <div>Tel. {{
                        user_detail.phone }}</div>
                </div>
                <div class="pr-[14px]">
                    <hr class="h-[10px]">
                    <div class="font-bold mb-[8px]">DETAILS</div>
                    <div>ใบชำระค่าห้องประจำเดือน</div>
                </div>
                <div class=" pr-[14px]">
                    <hr class="h-[10px]">
                    <div class="font-bold mb-[8px]">PAYMENT</div>
                    <div>Due date 10/10/2023</div>
                    <div>{{
                        (totalBillItems() - list_debt.deposit2 - list_debt.deposit +
                            parseInt(bill_detail.ele) + parseInt(bill_detail.water) + parseInt(bill_detail.other) +
                            parseInt(
                                bill_detail.communalPrice) + parseInt(bill_detail.room)) + ((totalBillItems()
                                    - list_debt.deposit2 - list_debt.deposit +
                                    parseInt(bill_detail.ele) + parseInt(bill_detail.water) + parseInt(bill_detail.other) +
                                    parseInt(
                                        bill_detail.communalPrice) + parseInt(bill_detail.room)) * 0.07)
                    }} บาท</div>
                </div>
            </div>
            <div class="mt-[24px]">
                <table class="">
                    <tr class="border-b-[1px] flex justify-between ">
                        <td class="w-[150px]">ITEM</td>
                        <td class="w-[150px] flex justify-end">QTY</td>
                        <td class="w-[150px] flex justify-end">PRICE</td>
                        <td class="w-[150px] flex justify-end">AMOUNT</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between ">
                        <td class="w-[150px]">ค่าห้อง</td>
                        <td class="w-[150px] flex justify-end">1</td>
                        <td class="w-[150px] flex justify-end">{{ bill_detail.room }}</td>
                        <td class="w-[150px] flex justify-end">{{ bill_detail.room }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between ">
                        <td class="w-[150px]">ค่าน้ำ</td>
                        <td class="w-[150px] flex justify-end">{{ '-' }}</td>
                        <td class="w-[150px] flex justify-end">{{ '-' }}</td>
                        <td class="w-[150px] flex justify-end">{{ bill_detail.water }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between ">
                        <td class="w-[150px]">ค่าไฟ</td>
                        <td class="w-[150px] flex justify-end">{{ '-' }} </td>
                        <td class="w-[150px] flex justify-end">{{ '-' }}</td>
                        <td class="w-[150px] flex justify-end">{{ bill_detail.ele }}
                        </td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between ">
                        <td class="w-[150px]">ค่าส่วนกลาง</td>
                        <td class="w-[150px] flex justify-end">-</td>
                        <td class="w-[150px] flex justify-end">
                            <div class="flex justify-start">{{ bill_detail.communalPrice }}</div>
                        </td>
                        <td class="w-[150px] flex justify-end">{{ bill_detail.communalPrice }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between ">
                        <td class="w-[150px]">ค่าอื่น ๆ</td>
                        <td class="w-[150px] flex justify-end">-</td>
                        <td class="w-[150px] flex justify-end">{{ bill_detail.other }}</td>
                        <td class="w-[150px] flex justify-end">{{ bill_detail.other }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between " v-for="item in items_other">
                        <td class="w-[150px]">ค่าปรับทรัพย์สินเสียหาย ({{ item.name }})</td>
                        <td class="w-[150px] flex justify-end">-</td>
                        <td class="w-[150px] flex justify-end">{{ item.price }}</td>
                        <td class="w-[150px] flex justify-end">{{ item.price }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between ">
                        <td class="w-[150px]">คืนค่ามัดจำ</td>
                        <td class="w-[150px] flex justify-end">-</td>
                        <td class="w-[150px] flex justify-end">-{{ list_debt.deposit }}</td>
                        <td class="w-[150px] flex justify-end">-{{ list_debt.deposit }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between ">
                        <td class="w-[150px]">คืนเงินประกันห้อง</td>
                        <td class="w-[150px] flex justify-end">-</td>
                        <td class="w-[150px] flex justify-end">-{{ list_debt.deposit2 }}</td>
                        <td class="w-[150px] flex justify-end">-{{ list_debt.deposit2 }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between  ">
                        <td colspan="8">SubTotal</td>
                        <td colspan="8" class="font-bold"></td>
                        <td colspan="8" class="font-bold"></td>
                        <td>{{ (totalBillItems() - list_debt.deposit2 - list_debt.deposit +
                                parseInt(bill_detail.ele) + parseInt(bill_detail.water) + parseInt(bill_detail.other) +
                                parseInt(
                                    bill_detail.communalPrice) + parseInt(bill_detail.room)) }}
                        </td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between  ">
                        <td colspan="8">Tax</td>
                        <td colspan="8" class="font-bold"></td>
                        <td colspan="8" class="font-bold"></td>
                        <td>{{ ((totalBillItems() - list_debt.deposit2 - list_debt.deposit +
                                parseInt(bill_detail.ele) + parseInt(bill_detail.water) + parseInt(bill_detail.other) +
                                parseInt(
                                    bill_detail.communalPrice) + parseInt(bill_detail.room)) * 0.07) }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between  ">
                        <td colspan="8" class="font-bold">Total Due</td>
                        <td colspan="8" class="font-bold"></td>
                        <td colspan="8" class="font-bold"></td>
                        <td class="font-bold"> {{
                                (totalBillItems() - list_debt.deposit2 - list_debt.deposit +
                                    parseInt(bill_detail.ele) + parseInt(bill_detail.water) + parseInt(bill_detail.other) +
                                    parseInt(
                                        bill_detail.communalPrice) + parseInt(bill_detail.room)) + ((totalBillItems()
                                            - list_debt.deposit2 - list_debt.deposit +
                                            parseInt(bill_detail.ele) + parseInt(bill_detail.water) + parseInt(bill_detail.other) +
                                            parseInt(
                                                bill_detail.communalPrice) + parseInt(bill_detail.room)) * 0.07)
                        }}</td>
                    </tr>
                </table>
            </div>

        </div>
        <!-- <button @click="generatePDF()">xcvxcv</button> -->
    </div>
</template>
  
<script>
import html2pdf from 'html2pdf.js';
import Res_Guru_Logo_create06 from '@/assets/img/Res_Guru_Logo_create-06.png'
import Res_Guru_Logo_create12 from '@/assets/img/Res_Guru_Logo_create-12.png'
import { convertDateNoTime } from '@/components/hook/hook'
import THBText from 'thai-baht-text'
export default {
    data() {
        return {
            data_bill: [],
            convertDateNoTime,
            Res_Guru_Logo_create12,
            Res_Guru_Logo_create06,
            THBText,
            items_other: [],
            bill_detail: {},
            user_detail: {},
            list_debt: {}
        }

    },
    // mounted() {
    //     this.generatePDF()
    // },
    methods: {
        generatePDF(user_detail, bill_detail, items_other, list_debt) {
            console.log(user_detail);
            this.list_debt = list_debt
            this.user_detail = user_detail
            this.bill_detail = bill_detail
            this.items_other = items_other
            const content = this.$refs.pdfContent;
            const opt = {
                margin: 10,
                filename: 'generated.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            };
            html2pdf()
                .from(content)
                .set(opt)
                .save();
        },
        totalBillItems() {
            let totalPrice = 0;
            // Loop through each item and add its price to totalPrice
            this.items_other.forEach(item => {
                totalPrice += item.price;
            });
            return totalPrice;
        },
    },
};
</script>
<style>
/* Styling for the bill table */
.bill-table {
    width: 100%;
    overflow-x: auto;
}

.custom-table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ccc;
}

.custom-table th,
.custom-table td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ccc;
}

.custom-table th {
    background-color: #f2f2f2;
    font-weight: bold;
}

.total-label {
    text-align: right;
    font-weight: bold;
}

.total-amount {
    font-weight: bold;
}

.watermarked {
    position: absolute;
    opacity: 0.05;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    padding-top: 8px;
    padding-bottom: 8px;
    /* //width:100%// */

}

td {}

.custom-table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ccc;
}
</style>