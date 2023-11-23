<template>
    <div hidden>
        <!-- Your HTML content to convert to PDF -->
        <div ref="pdfContent" class="p-[8px]">
            <div class="flex justify-between">
                <div>
                    <div class="text-[16px]">ทันสมัย จำกัด</div>
                    <div>241/41 หมู่ที่ 6 ถ.แจ้งวัฒนะ บางตลาด</div>
                    <div>Tel : 0888888585</div>
                </div>
                <div>
                    <div>invoice No. IV254999440</div>
                </div>
            </div>
            <div class="flex justify-between mt-[18px]">
                <div>
                    <div class="text-[16px]">ชื่อผู้เช่า ชัชพล บุญพันธุ์ Tel. 0966366569</div>
                    <div>ที่อยู่ : 241/41 หมู่ที่ 6 ถ.แจ้งวัฒนะ บางตลาด</div>
                    <div>ห้อง : A103</div>
                </div>
                <div>
                    <div>วันที่ออกบิล 10/11/2023 / ประจำเดือน 09/2023</div>
                    <div>กำหนดชำระ 30/11/2023</div>
                </div>
            </div>
            <div class="bill-table mt-[24px]">
                <table class="custom-table">
                    <thead>
                        <tr>
                            <th>ลำดับ</th>
                            <th>รายการ</th>
                            <th>จำนวน</th>
                            <th>ราคา</th>
                            <th>จำนวนเงิน</th>
                            <th>ภาษี</th>
                            <th>รวมเงิน</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>ค่าห้อง666666666666666</td>
                            <td>1</td>
                            <td>3500.00</td>
                            <td>3500.00</td>
                            <td>-</td>
                            <td>3500.00</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ค่าห้อง</td>
                            <td>1</td>
                            <td>3500.00</td>
                            <td>3500.00</td>
                            <td>-</td>
                            <td>3500.00</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="5" class="total-label">
                                <div class="flex justify-center">สามพันห้าร้อยบาท</div>
                            </td>
                            <td class="total-amount">รวม</td>
                            <td class="total-amount">3500.00</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class="mt-[14px]">กรุณาชำระ ทุกวันที่ 1-5 ของเดือนถัดไป ล่าช้าปรับวันละ 100 บาท</div>
            <div class="flex justify-end mt-[24px]">
                <div class="flex justify-center flex-col">
                    <div>ลงชื่อ___________________________ผู้จัดทำ</div>
                    <div class="flex justify-center mt-[4px]">ทันสมัย จำกัด</div>
                </div>
            </div>
            {{  data_bill }}
        </div>
        <button @click="generatePDF">Generate PDF</button>
    </div>
</template>
  
<script>
import html2pdf from 'html2pdf.js';

export default {
    data() {
        return {
            data_bill: []
        }

    },
    // mounted() {
    //     this.sendFunction()
    // },
    methods: {
        generatePDF(data) {
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
</style>