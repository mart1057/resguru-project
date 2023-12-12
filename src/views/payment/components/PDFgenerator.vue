<template>
    <div hidden>
        <!-- Your HTML content to convert to PDF -->
        <div ref="pdfContent" class="p-[8px]">
            <img class="watermarked" :src="Res_Guru_Logo_create06" />
            <div class="flex justify-between">
                <div class="flex">
                    <div><img  :src="Res_Guru_Logo_create12" class="w-[70px] h-[70px]" /></div>
                    <div class="ml-[8px]">
                        <div class="font-bold">Tansamai</div>
                        <div>บางนา ประเวศ กทม 1026</div>
                        <div>Tel. 08889899988</div>
                    </div>
                </div>
                <div class="flex flex-col justify-between">
                    <div>invoice# {{ data_bill.tenant_bills[0]?.invoiceNumber }}</div>
                    <div>
                        <div>Issue date</div>
                        <div>10/10/2023</div>
                    </div>
                </div>
            </div>
            <hr class="mt-[32px] mb-[32] h-[10px]">

            <div>
                <div class="text-[24px] font-bold">Tansamai</div>
                <div class="mt-[4px] mb-[15px]">Add a message here for your customer</div>
            </div>

            <div class="grid grid-cols-3">
                <div class=" pr-[14px]">
                    <hr class="h-[10px]">
                    <div class="font-bold mb-[8px]">BILL To</div>
                    <div>{{ data_bill.user_sign_contract?.users_permissions_user?.firstName
                    }} {{ data_bill.user_sign_contract?.users_permissions_user?.lastName }}</div>
                    <div>{{ data_bill.user_sign_contract?.users_permissions_user?.contactAddress }}</div>
                    <div>Tel. {{
                        data_bill.user_sign_contract?.users_permissions_user?.phone }}</div>
                </div>
                <div class="pr-[14px]">
                    <hr class="h-[10px]">
                    <div class="font-bold mb-[8px]">DETAILS</div>
                    <div>ลูกบ้านอยู่เดือนสุดท้าย</div>
                </div>
                <div class=" pr-[14px]">
                    <hr class="h-[10px]">
                    <div class="font-bold mb-[8px]">PAYMENT</div>
                    <div>Due date 10/10/2023</div>
                    <div>{{ data_bill.tenant_bills[0]?.total }} บาท</div>
                </div>
            </div>
            <div class="mt-[24px]">
                <table>
                    <tr class="border-b-[1px] flex justify-between ">
                        <td class="w-[150px]">ITEM</td>
                        <td class="w-[150px] flex justify-end">QTY</td>
                        <td class="w-[150px] flex justify-end">PRICE</td>
                        <td  class="w-[150px] flex justify-end">AMOUNT</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between">
                        <td class="w-[150px]">ค่าห้อง</td>
                        <td class="w-[150px] flex justify-end">1</td>
                        <td class="w-[150px] flex justify-end">{{ data_bill.tenant_bills[0]?.roomPrice }}</td>
                        <td class="w-[150px] flex justify-end">{{ data_bill.tenant_bills[0]?.roomPrice }}</td>
                    </tr>
                    <tr  class="border-b-[1px] flex justify-between">
                        <td class="w-[150px]">ค่าน้ำ</td>
                        <td  class="w-[150px] flex justify-end">{{ data_bill.tenant_bills[0]?.usageWater }}</td>
                        <td  class="w-[150px] flex justify-end">{{ data_bill.tenant_bills[0]?.waterPrice }}</td>
                        <td  class="w-[150px] flex justify-end">{{ data_bill.tenant_bills[0]?.waterPrice * data_bill.tenant_bills[0]?.usageWater }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between">
                        <td class="w-[150px]">ค่าไฟ</td>
                        <td  class="w-[150px] flex justify-end">{{ data_bill.tenant_bills[0]?.usageElectric }} </td>
                        <td  class="w-[150px] flex justify-end"> {{ data_bill.tenant_bills[0]?.electricPrice }}</td>
                        <td  class="w-[150px] flex justify-end">{{ data_bill.tenant_bills[0]?.electricPrice * data_bill.tenant_bills[0]?.usageElectric }}
                        </td>
                    </tr>
                    <tr  class="border-b-[1px] flex justify-between">
                        <td class="w-[150px]">ค่าส่วนกลาง</td>
                        <td  class="w-[150px] flex justify-end">1</td>
                        <td  class="w-[150px] flex justify-end">{{ data_bill.tenant_bills[0]?.communalPrice }}</td>
                        <td  class="w-[150px] flex justify-end">{{ data_bill.tenant_bills[0]?.communalPrice }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between">
                        <td class="w-[150px]">ค่าอื่น ๆ</td>
                        <td  class="w-[150px] flex justify-end">1</td>
                        <td  class="w-[150px] flex justify-end">{{ data_bill.tenant_bills[0]?.otherPrice }}</td>
                        <td  class="w-[150px] flex justify-end">{{ data_bill.tenant_bills[0]?.otherPrice }}</td>
                    </tr>
                    <tr  class="border-b-[1px] flex justify-between">
                        <td colspan="8">SubTotal</td>
                        <td>{{ data_bill.tenant_bills[0]?.total - data_bill.tenant_bills[0]?.vat }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between">
                        <td colspan="8">Tax</td>
                        <td>{{ data_bill.tenant_bills[0]?.vat }}</td>
                    </tr>
                    <tr  class="border-b-[1px] flex justify-between">
                        <td colspan="8" class="font-bold">Total Due</td>
                        <td class="font-bold">{{ data_bill.tenant_bills[0]?.total }}</td>
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
            THBText
        }

    },
    // mounted() {
    //     this.generatePDF()
    // },
    methods: {
        generatePDF(data) {
            console.log(data);
            this.data_bill = data
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
    text-align: left;
}

.custom-table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ccc;
}
</style>