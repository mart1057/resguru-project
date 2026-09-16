<template>
    <div hidden>
        <!-- Your HTML content to convert to PDF -->
        <div v-if="data_bill && data_bill.attributes" ref="pdfContent" class="p-[8px]">
            <img class="watermarked" :src="Res_Guru_Logo_create06" />
            <div class="flex justify-between">
                <div class="flex">
                    <div><img :src="'http://203.170.190.170:1337'+($store.state.buildingInfo[0]?.attributes?.buildingLogo?.data?.attributes?.formats?.large?.url || '')" class="w-[70px] h-[70px]" /></div>
                    <div class="ml-[8px]">
                        <div class="font-bold">{{ $store.state.buildingInfo[0]?.attributes?.buildingName }}</div>
                        <div>{{ $store.state.buildingInfo[0]?.attributes?.buildingAddress }}</div>
                        <div>โทร. {{ $store.state.buildingInfo[0]?.attributes?.buildingPhone }}</div>
                    </div>
                </div>
                <div class="flex flex-col justify-between items-end">
                    <div class="bg-[#16803C] text-[white] font-bold rounded-[6px] pl-[10px] pr-[10px] pt-[4px] pb-[4px]">ชำระแล้ว</div>
                    <div>
                        <div class="text-right">เลขที่ใบเสร็จ {{ data_bill.attributes.receiptNumber }}</div>
                        <div class="text-right">วันที่ชำระ {{ convertDateNoTime(data_bill.attributes.paidDate) }}</div>
                    </div>
                </div>
            </div>
            <hr class="mt-[32px] mb-[32] h-[10px]">

            <div>
                <div class="text-[24px] font-bold">{{ $store.state.buildingInfo[0]?.attributes?.buildingName }}</div>
                <div class="mt-[4px] mb-[15px]">ใบเสร็จรับเงิน</div>
            </div>

            <div class="grid grid-cols-3">
                <div class=" pr-[14px]">
                    <hr class="h-[10px]">
                    <div class="font-bold mb-[8px]">ผู้เช่า</div>
                    <div>
                        {{ tenantAttributes.firstName }} {{ tenantAttributes.lastName }}
                    </div>
                    <div>
                        {{ tenantAttributes.contactAddress }}
                    </div>
                    <div>
                        โทร. {{ tenantAttributes.phone }}
                    </div>
                </div>
                <div class="pr-[14px]">
                    <hr class="h-[10px]">
                    <div class="font-bold mb-[8px]">ห้อง</div>
                    <div>{{ data_bill.attributes.room?.data?.attributes?.RoomNumber || '-' }}</div>
                </div>
                <div class=" pr-[14px]">
                    <hr class="h-[10px]">
                    <div class="font-bold mb-[8px]">ชำระโดย</div>
                    <div>{{ paymentMethodLabel }}</div>
                </div>
            </div>
            <div class="mt-[24px]">
                <table>
                    <tr class="border-b-[1px] flex justify-between ">
                        <td class="w-[150px]">รายการ</td>
                        <td class="w-[150px] flex justify-end">จำนวน</td>
                        <td class="w-[150px] flex justify-end">ราคา</td>
                        <td class="w-[150px] flex justify-end">จำนวนเงิน</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between">
                        <td class="w-[150px]">ค่าห้อง</td>
                        <td class="w-[150px] flex justify-end">1</td>
                        <td class="w-[150px] flex justify-end">{{ formatNumber(data_bill.attributes.roomPrice) }}</td>
                        <td class="w-[150px] flex justify-end">{{ formatNumber(data_bill.attributes.roomPrice) }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between">
                        <td class="w-[150px]">ค่าน้ำ</td>
                        <td class="w-[150px] flex justify-end">1</td>
                        <td class="w-[150px] flex justify-end">{{ formatNumber(data_bill.attributes.waterPrice) }}</td>
                        <td class="w-[150px] flex justify-end">{{ formatNumber(data_bill.attributes.waterPrice) }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between">
                        <td class="w-[150px]">ค่าไฟ</td>
                        <td class="w-[150px] flex justify-end">1</td>
                        <td class="w-[150px] flex justify-end">{{ formatNumber(data_bill.attributes.electricPrice) }}</td>
                        <td class="w-[150px] flex justify-end">{{ formatNumber(data_bill.attributes.electricPrice) }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between">
                        <td class="w-[150px]">ค่าส่วนกลาง</td>
                        <td class="w-[150px] flex justify-end">1</td>
                        <td class="w-[150px] flex justify-end">{{ formatNumber(data_bill.attributes.communalPrice) }}</td>
                        <td class="w-[150px] flex justify-end">{{ formatNumber(data_bill.attributes.communalPrice) }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between">
                        <td class="w-[150px]">ค่าอื่น ๆ</td>
                        <td class="w-[150px] flex justify-end">1</td>
                        <td class="w-[150px] flex justify-end">{{ formatNumber(data_bill.attributes.otherPrice) }}</td>
                        <td class="w-[150px] flex justify-end">{{ formatNumber(data_bill.attributes.otherPrice) }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between">
                        <td colspan="8">ยอดก่อนภาษี</td>
                        <td>{{ formatNumber(data_bill.attributes.subTotal) }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between">
                        <td colspan="8">ภาษีมูลค่าเพิ่ม ({{ vatRatePercent }}%)</td>
                        <td>{{ formatNumber(data_bill.attributes.vat) }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between">
                        <td colspan="8" class="font-bold">ยอดรวม</td>
                        <td class="font-bold">{{ formatNumber(data_bill.attributes.total) }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between">
                        <td colspan="8" class="font-bold">ชำระแล้ว</td>
                        <td class="font-bold">{{ formatNumber(data_bill.attributes.paidAmount) }}</td>
                    </tr>
                </table>
            </div>

            <div class="flex justify-end mt-[32px]">
                <div class="flex flex-col items-center">
                    <div>ลงชื่อ...........................ผู้รับเงิน</div>
                    <div class="mt-[8px]">( {{ $store.state.buildingInfo[0]?.attributes?.buildingName }} )</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import html2pdf from 'html2pdf.js';
import axios from 'axios';
import Res_Guru_Logo_create06 from '@/assets/img/Res_Guru_Logo_create-06.png'
import Res_Guru_Logo_create12 from '@/assets/img/Res_Guru_Logo_create-12.png'
import { convertDateNoTime } from '@/components/hook/hook'
import THBText from 'thai-baht-text'
export default {
    data() {
        return {
            data_bill: null,
            convertDateNoTime,
            Res_Guru_Logo_create12,
            Res_Guru_Logo_create06,
            THBText
        }
    },
    computed: {
        tenantAttributes() {
            return this.data_bill?.attributes?.user_sign_contract?.data?.attributes
                ?.users_permissions_user?.data?.attributes || {};
        },
        paymentMethodLabel() {
            const evidence = this.data_bill?.attributes?.tenant_evidence_payment_receipt?.data?.attributes;
            if (!evidence) return '-';
            if (evidence.paymentType === 'Bank') return `โอนเงิน${evidence.bankName ? ' (' + evidence.bankName + ')' : ''}`;
            if (evidence.paymentType === 'Cash') return 'เงินสด';
            if (evidence.paymentType === 'Other') return 'อื่น ๆ';
            return '-';
        },
        vatRatePercent() {
            const vatRate = this.$store.state.buildingInfo?.[0]?.attributes?.vat_rate;
            return vatRate !== undefined && vatRate !== null ? Number(vatRate) : 7;
        },
    },
    methods: {
        formatNumber(value) {
            if (value === null || value === undefined) return '0.00';
            const num = parseFloat(value).toFixed(2);
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        // check=true (called right after payment approval): render, upload
        // the PDF to this receipt's receiptPdf field, no download - this is
        // what the tenant app fetches. Plain call (owner's manual print
        // button): render and download, same as before.
        generatePDF(data, check, id) {
            this.data_bill = data
            this.$nextTick(() => {
                const content = this.$refs.pdfContent;
                const parentElement = content.closest('[hidden]');
                if (parentElement) parentElement.removeAttribute('hidden');

                const opt = {
                    margin: 10,
                    filename: `receipt_${data.attributes?.receiptNumber || 'generated'}.pdf`,
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2, useCORS: true },
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                };

                if (check) {
                    html2pdf()
                        .from(content)
                        .set(opt)
                        .output('blob')
                        .then((dataPDF) => {
                            const formData = new FormData();
                            formData.append("files", dataPDF, `receipt_${id}.pdf`);
                            formData.append("refId", String(id));
                            formData.append("ref", "api::tenant-receipt.tenant-receipt");
                            formData.append("field", "receiptPdf");
                            return axios.post("https://api.resguru.app/api/upload", formData, {
                                headers: { "Content-Type": "multipart/form-data" },
                            });
                        })
                        .catch((error) => {
                            console.error('Receipt PDF generation/upload failed:', error);
                        })
                        .finally(() => {
                            if (parentElement) parentElement.setAttribute('hidden', '');
                        });
                } else {
                    html2pdf()
                        .from(content)
                        .set(opt)
                        .save()
                        .finally(() => {
                            if (parentElement) parentElement.setAttribute('hidden', '');
                        });
                }
            });
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
}</style>
