<template>
    <div hidden>
        <div v-if="doc" ref="pdfContent" class="pt-3 p-2 pdf-document">
            <img class="watermarked" :src="Res_Guru_Logo_create06" />
            <div class="flex justify-between">
                <div class="ml-1">
                    <div class="text-sm font-bold">{{ $store.state.buildingInfo[0]?.attributes?.buildingName }}</div>
                    <div class="text-sm">{{ $store.state.buildingInfo[0]?.attributes?.buildingAddress }}</div>
                    <div class="text-sm">โทร: {{ $store.state.buildingInfo[0]?.attributes?.buildingPhone }}</div>
                </div>
                <div class="flex flex-col justify-between">
                    <div class="text-lg font-bold">ใบสรุปการย้ายออก</div>
                    <div class="text-sm">วันที่ย้ายออก {{ formatDate(doc.dateMoveout) }}</div>
                </div>
            </div>

            <div class="grid grid-cols-2 text-sm mt-2">
                <div class="pr-2">
                    <hr class="h-px">
                    <div class="font-bold mb-1">ผู้เช่า</div>
                    <div>ห้องเช่าหมายเลข {{ doc.roomNumber }}</div>
                    <div>ชื่อผู้เช่า {{ doc.tenantName }}</div>
                </div>
                <div class="pr-2">
                    <hr class="h-px">
                    <div class="font-bold mb-1">เลขมิเตอร์ตอนย้ายออก</div>
                    <div>เลขมิเตอร์น้ำ {{ doc.endMeterWater ?? '-' }}</div>
                    <div>เลขมิเตอร์ไฟ {{ doc.endMeterElectric ?? '-' }}</div>
                </div>
            </div>

            <!-- Damage checklist - only items marked เสียหาย show up here,
                 the ไม่เสียหาย ones aren't in doc.damageItems at all. -->
            <div class="mt-3" v-if="doc.damageItems.length">
                <div class="font-bold text-sm mb-1">รายการตรวจจับความเสียหาย</div>
                <table class="text-sm w-full border-collapse invoice-table">
                    <thead>
                        <tr>
                            <th class="py-2 px-3 text-left border">รายการ</th>
                            <th class="py-2 px-3 text-right border" style="width: 30%;">ค่าปรับ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, i) in doc.damageItems" :key="item.name" :class="i % 2 ? 'row-odd' : 'row-even'">
                            <td class="py-2 px-3 border">{{ item.name }}</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(item.price) }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td class="py-2 px-3 text-right border text-sm font-bold">รวมค่าเสียหาย</td>
                            <td class="py-2 px-3 text-right border text-sm font-bold">{{ formatNumber(doc.damageTotal) }}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div class="mt-3">
                <div class="font-bold text-sm mb-1">ยอดบิลเดือนล่าสุด</div>
                <table class="text-sm w-full border-collapse invoice-table">
                    <tbody>
                        <tr class="row-even">
                            <td class="py-2 px-3 border">ค่าห้อง</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(doc.billDetail.room) }}</td>
                        </tr>
                        <tr class="row-odd">
                            <td class="py-2 px-3 border">ค่าน้ำ</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(doc.billDetail.water) }}</td>
                        </tr>
                        <tr class="row-even">
                            <td class="py-2 px-3 border">ค่าไฟ</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(doc.billDetail.ele) }}</td>
                        </tr>
                        <tr class="row-odd">
                            <td class="py-2 px-3 border">ค่าส่วนกลาง</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(doc.billDetail.communalPrice) }}</td>
                        </tr>
                        <tr class="row-even">
                            <td class="py-2 px-3 border">ค่าอื่น ๆ</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(doc.billDetail.other) }}</td>
                        </tr>
                        <tr class="row-odd" v-if="doc.otherOutstanding > 0">
                            <td class="py-2 px-3 border">ยอดค้างชำระสะสม (เดือนอื่นๆ)</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(doc.otherOutstanding) }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td class="py-2 px-3 text-right border text-sm">ภาษี ({{ doc.vatRate }}%)</td>
                            <td class="py-2 px-3 text-right border text-sm">{{ formatNumber(doc.vatAmount) }}</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-3 text-right border text-sm font-bold">รวมค่าใช้จ่าย (ไม่รวมค่าเสียหาย)</td>
                            <td class="py-2 px-3 text-right border text-sm font-bold">{{ formatNumber(doc.currentBillTotal + doc.otherOutstanding) }}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div class="mt-3">
                <div class="font-bold text-sm mb-1">เงินที่ชำระไว้แล้ว</div>
                <table class="text-sm w-full border-collapse invoice-table">
                    <tbody>
                        <tr class="row-even">
                            <td class="py-2 px-3 border">ค่าเช่าล่วงหน้า</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(doc.deposit) }}</td>
                        </tr>
                        <tr class="row-odd">
                            <td class="py-2 px-3 border">เงินประกัน</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(doc.deposit2) }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td class="py-2 px-3 text-right border text-sm font-bold">รวมเงินที่ชำระไว้แล้ว</td>
                            <td class="py-2 px-3 text-right border text-sm font-bold">{{ formatNumber(doc.paidTotal) }}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div class="mt-3 flex justify-between items-center border-2 border-[#003765] rounded p-3">
                <div class="text-base font-bold">รวมทั้งสิ้น ({{ doc.netLabel }})</div>
                <div class="text-lg font-bold">{{ formatNumber(doc.netAmount) }} บาท</div>
            </div>
            <div class="text-sm mt-1">( {{ numberToThaiText(doc.netAmount) }} )</div>

            <div class="flex justify-end mt-4">
                <p class="flex flex-col items-center text-sm">
                    <span>ลงชื่อ</span>
                    <span style="height: 40px; display: block;"></span>
                    <span class="signature-line"></span>
                    <span>ผู้จัดทำ</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import html2pdf from 'html2pdf.js';
import Res_Guru_Logo_create06 from '@/assets/img/Res_Guru_Logo_create-06.png'
import download from 'downloadjs';
import axios from 'axios';

export default {
    data() {
        return {
            doc: null,
            Res_Guru_Logo_create06,
        };
    },
    methods: {
        formatDate(dateString) {
            if (!dateString) return '-';
            const date = new Date(dateString);
            if (Number.isNaN(date.getTime())) return '-';
            const thaiYear = date.getFullYear() + 543;
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${day}/${month}/${thaiYear}`;
        },
        formatNumber(value) {
            if (value === null || value === undefined) return '0.00';
            const num = parseFloat(value).toFixed(2);
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        // Same Thai-baht-text converter as PDFgenerator.vue (kept local so
        // this component has no dependency on the invoice PDF).
        numberToThaiText(number) {
            if (!number) return 'ศูนย์บาท';
            const digits = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];
            const positions = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน'];
            const [baht] = Math.abs(number).toFixed(2).split('.');
            const convertGroup = (num) => {
                const str = num.toString();
                let result = '';
                for (let i = 0; i < str.length; i++) {
                    const digit = parseInt(str[i]);
                    if (digit === 0) continue;
                    if (i === str.length - 1) {
                        result += digit === 1 && str.length > 1 ? 'เอ็ด' : digits[digit];
                    } else if (i === str.length - 2) {
                        if (digit === 2) result += 'ยี่';
                        else if (digit !== 1) result += digits[digit];
                        result += positions[1];
                    } else {
                        result += digits[digit] + positions[str.length - 1 - i];
                    }
                }
                return result;
            };
            const bahtNum = parseInt(baht);
            return (bahtNum === 0 ? 'ศูนย์' : convertGroup(bahtNum)) + 'บาท';
        },
        // mode: 'download' triggers a named file download, 'preview' opens
        // the PDF in a new tab instead. `payload` is the exact shape the
        // on-screen settlement panel already computed - see MoveOut.vue's
        // PDFPrint().
        async generatePDF(payload, mode = 'download') {
            this.doc = payload;
            try {
                const buildingId = this.$store.state.building;
                let qrCodeUrl = null;
                let bankName = '', accountName = '', accountNumber = '';

                // Only worth showing a payment QR when the tenant still owes
                // money - nothing to pay if the building owes a refund.
                if (payload.direction === 'tenant_pays') {
                    try {
                        const response = await axios.get(
                            `https://api.resguru.app/api/building-pay-methods?filters[building][id][$eq]=${buildingId}&populate=QRCode`
                        );
                        const payMethod = response.data?.data?.[0]?.attributes;
                        if (payMethod) {
                            bankName = payMethod.bankName || '';
                            accountName = payMethod.accountName || '';
                            accountNumber = payMethod.accountNumber || '';
                            if (payMethod.QRCode?.data?.attributes) {
                                qrCodeUrl = `https://api.resguru.app${payMethod.QRCode.data.attributes.url}`;
                            }
                        }
                    } catch (error) {
                        console.error('Error fetching QR code:', error);
                    }
                }

                if (document.fonts && document.fonts.ready) {
                    await document.fonts.ready;
                }

                this.$nextTick(() => {
                    const content = this.$refs.pdfContent;
                    if (!content) {
                        console.error('PDF content not found');
                        return;
                    }

                    if (qrCodeUrl) {
                        const qrContainer = document.createElement('div');
                        qrContainer.className = 'qr-code-container';
                        qrContainer.style.width = '100%';
                        qrContainer.style.display = 'flex';
                        qrContainer.style.flexDirection = 'column';
                        qrContainer.style.alignItems = 'center';
                        qrContainer.style.marginTop = '20px';

                        const qrImage = document.createElement('img');
                        qrImage.src = qrCodeUrl;
                        qrImage.alt = 'Payment QR Code';
                        qrImage.crossOrigin = 'anonymous';

                        const qrLabel = document.createElement('div');
                        qrLabel.textContent = 'สแกนเพื่อชำระเงิน';
                        qrLabel.style.marginTop = '10px';
                        qrLabel.style.fontWeight = 'bold';

                        qrContainer.appendChild(qrImage);
                        qrContainer.appendChild(qrLabel);

                        if (bankName || accountName || accountNumber) {
                            const bankDetails = document.createElement('div');
                            bankDetails.style.marginTop = '6px';
                            bankDetails.style.fontSize = '14px';
                            bankDetails.style.textAlign = 'center';
                            const lines = [];
                            if (bankName) lines.push(`ธนาคาร ${bankName}`);
                            if (accountName) lines.push(`ชื่อบัญชี ${accountName}`);
                            if (accountNumber) lines.push(`เลขที่บัญชี ${accountNumber}`);
                            bankDetails.innerHTML = lines.map((l) => `<div>${l}</div>`).join('');
                            qrContainer.appendChild(bankDetails);
                        }
                        content.appendChild(qrContainer);
                    }

                    const opt = {
                        margin: 10,
                        filename: `move-out-${payload.roomNumber}.pdf`,
                        image: { type: 'jpeg', quality: 0.98 },
                        html2canvas: { scale: 2, useCORS: true, logging: false, allowTaint: true },
                        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                    };

                    html2pdf()
                        .from(content)
                        .set(opt)
                        .toPdf()
                        .get('pdf')
                        .then((pdf) => {
                            if (mode === 'preview') {
                                window.open(pdf.output('bloburl'), '_blank');
                            } else {
                                download(pdf.output('blob'), opt.filename, 'application/pdf');
                            }
                            const qrContainer = content.querySelector('.qr-code-container');
                            if (qrContainer) content.removeChild(qrContainer);
                        })
                        .catch((error) => {
                            console.error('Error generating move-out PDF:', error);
                            const qrContainer = content.querySelector('.qr-code-container');
                            if (qrContainer) content.removeChild(qrContainer);
                        });
                });
            } catch (error) {
                console.error('Error in move-out PDF generation:', error);
            }
        },
    },
};
</script>

<style>
.pdf-document {
  font-family: 'Sarabun', 'Angsana New', Arial, sans-serif;
  line-height: 1.6;
}
.invoice-table {
  border: 2px solid #333;
}
.invoice-table th,
.invoice-table td {
  border: 1px solid #333;
}
.invoice-table thead tr {
  background-color: #f0f0f0;
}
.invoice-table .row-odd {
  background-color: #f5f5f5;
}
.invoice-table .row-even {
  background-color: transparent;
}
.invoice-table tfoot tr {
  background-color: #f0f0f0;
}
.qr-code-container img {
  width: 150px !important;
  height: 150px !important;
  object-fit: none !important;
}
.watermarked {
  position: absolute;
  opacity: 0.05;
  width: 100%;
  height: auto;
}
.signature-line {
  display: inline-block;
  width: 150px;
  border-bottom: 1px solid black;
  margin: 0 4px;
  vertical-align: bottom;
}
</style>
