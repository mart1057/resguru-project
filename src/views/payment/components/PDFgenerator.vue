<template>
    <div>
        <!-- Your HTML content to convert to PDF -->
        <div ref="pdfContent" class="p-[8px]">
            <div class="flex justify-between">
                <div>
                    <div>
                        <img :src="Res_Guru_Logo_create12" class="w-[100px] h-[100px] ml-[-18px] mb-[-14px]"/>
                    </div>
                    <div class="text-[16px]">ทันสมัย จำกัด</div>
                    <div>241/41 หมู่ที่ 6 ถ.แจ้งวัฒนะ บางตลาด</div>
                    <div>Tel : 0888888585</div>
                </div>
                <div>
                    <div>invoice No. {{ data_bill.tenant_bills[0]?.invoiceNumber }}</div>
                </div>
            </div>
            <div class="flex justify-between mt-[18px]">
                <div>
                    <div class="text-[16px]">ชื่อผู้เช่า {{ data_bill.user_sign_contract?.users_permissions_user?.firstName }} {{ data_bill.user_sign_contract?.users_permissions_user?.lastName }} Tel. {{ data_bill.user_sign_contract?.users_permissions_user?.phone}}</div>
                    <div>ที่อยู่ : {{ data_bill.user_sign_contract?.users_permissions_user?.contactAddress}}</div>
                    <div>ห้อง : {{ data_bill.RoomNumber }}</div>
                </div>
                <div>
                    <div>วันที่ออกบิล {{ convertDateNoTime(data_bill.tenant_bills[0]?.createdAt) }} / ประจำเดือน 11/2023</div>
                    <div>กำหนดชำระ -</div>
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
                            <th>รวมเงิน</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>ค่าห้อง</td>
                            <td>1</td>
                            <td>{{ data_bill.tenant_bills[0]?.roomPrice }}</td>
                            <td>{{ data_bill.tenant_bills[0]?.roomPrice }}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>ค่าน้ำ</td>
                            <td>-</td>
                            <td>{{ data_bill.tenant_bills[0]?.waterPrice }}</td>
                            <td>{{ data_bill.tenant_bills[0]?.waterPrice }}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>ค่าไฟ</td>
                            <td>-</td>
                            <td>{{ data_bill.tenant_bills[0]?.electricPrice }}</td>
                            <td>{{ data_bill.tenant_bills[0]?.electricPrice }}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>ค่าส่วนกลาง</td>
                            <td>1</td>
                            <td>{{ data_bill.tenant_bills[0]?.communalPrice }}</td>
                            <td>{{ data_bill.tenant_bills[0]?.communalPrice }}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>ค่าอื่น ๆ</td>
                            <td>-</td>
                            <td>{{ data_bill.tenant_bills[0]?.otherPrice }}</td>
                            <td>{{ data_bill.tenant_bills[0]?.otherPrice }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3" class="total-label">
                                <div class="flex justify-center"></div>
                            </td>
                            <td class="total-amount">ภาษี</td>
                            <td class="total-amount">{{ data_bill.tenant_bills[0]?.vat }}</td>
                        </tr>
                        <tr>
                            <td colspan="3" class="total-label">
                                <div class="flex justify-center">สามพันห้าร้อยบาท</div>
                            </td>
                            <td class="total-amount">รวม</td>
                            <td class="total-amount">{{ data_bill.tenant_bills[0]?.total }}</td>
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
        </div>
        <button @click="generatePDF">Generate PDF</button>
    </div>
</template>
  
<script>
import html2pdf from 'html2pdf.js';
import Res_Guru_Logo_create12 from '@/assets/img/Res_Guru_Logo_create-12.png'
import { convertDateNoTime} from '@/components/hook/hook'
export default {
    data() {
        return {
            data_bill: [],
            convertDateNoTime,
            Res_Guru_Logo_create12
        }

    },
    // mounted() {
    //     this.sendFunction()
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
</style>