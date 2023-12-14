<template>
    <div hidden>
        <!-- Your HTML content to convert to PDF -->
        <div ref="pdfContent" class="p-[8px]">
            <div class="flex flex-col items-center">
                <div class="text-[18px] font-bold">สัญญาเช่าห้องพักอาศัย</div>
            </div>
            <div class="text-[16px] mt-[16px] pl-[14px] pr-[14px]">
                <div><span class="ml-[42px]">สัญญานี้ทำที่ {{ $store.state.buildingInfo[0].attributes.buildingName }}</span>
                    เมื่อวันที่ {{ convertDateNoTime(detail.createdAt) }}
                    ระหว่าง {{ $store.state.buildingInfo[0].attributes.buildingName + ' ' + 'และ' + ' '+detail.user_sign_contract.users_permissions_user.firstName +' '+detail.user_sign_contract.users_permissions_user.lastName }}
                    <div>อยู่บ้านเลขที่ {{ detail.user_sign_contract.users_permissions_user.contactAddress }}
                        ตำบล {{ detail.user_sign_contract.users_permissions_user.district }}
                        อำเภอ/เขต {{ detail.user_sign_contract.users_permissions_user.subDistrict }}
                        จังหวัด {{ detail.user_sign_contract.users_permissions_user.province }}
                    ซึ่งต่อไปในสัญญานี้จะเรียกว่า "ผู้เช่า"อีกฝ่ายหนึ่ง</div>
                </div>
                <div  class="ml-[42px]">
                    ทั้งสองฝ่ายตกลงทำสัญญากันโดยมีข้อความดังต่อไปนี้
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๑</span> ผู้เช่าตกลงเช่าและผู้ให้เช่าตกลงให้เช่าห้องพักอาศัยห้องเลขที่ {{ detail.RoomNumber }} ของ {{ $store.state.buildingInfo[0].attributes.buildingName }} ซึ่งตั้งอยู่ที่ {{ $store.state.buildingInfo[0].attributes.buildingAddress }} ตำบล {{ $store.state.buildingInfo[0].attributes.buildingSubDistrict }} อำเภอ/เขต {{ $store.state.buildingInfo[0].attributes.buildingDistrict }}
                    จังหวัด {{ $store.state.buildingInfo[0].attributes.buildingProvince }} เพื่อใช้เป็นที่พักอาศัย ในอัตราค่าเช่าเดือนละ {{ detail.room_type.roomPrice}} บาท/เดือน 
                    ค่าเช่านี้ไม่รวมถึงค่าไฟฟ้า ค่าน้ำปะปา ค่าโทรศัพท์ ซึ่งผู้เช่าจะต้องชำระแก่ผู้ให้เช่าตามอัตราที่กำหนดไว้ในข้อ ๔
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๒</span> ผู้เช่าตกลงเช่าห้องพักอาศัยตามสัญญาข้อ ๑ มีกำหนดเวลา {{  detail.user_sign_contract.contractDuration }} เดือน นับตั้งแต่วันที่ {{ detail.user_sign_contract.checkInDate}}
                    ถึงวันที่ {{ detail.user_sign_contract.contractEndDate }}
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๓</span> การชําระค่าเช่า ผู้เช่าตกลงจะชําระค่าเช่าแก่ผู้ให้เช่าเป็นการล่วงหน้า โดยชําระภายในวันที่ 5 ของทุกเดือนตลอดเวลาอายุการเช่า
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๔</span> ผู้ให้เช่าคิดค่าไฟฟ้า ค่าน้ําประปา ค่าโทรศัพท์ ในอัตราดังนี้
                    <div class="ml-[80px]">(๑) ค่าไฟฟ้ายูนิตละ - บาท</div>
                    <div class="ml-[80px]">(๒) ค่าน้ําประปาลูกบาศก์เมตรละ - บาท</div>
                    <div class="ml-[80px]">(๓) ค่าโทรศัพท์ (โทร. ออก) - บาท</div>
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๕</span> ผู้เช่าต้องชําระค่าไฟฟ้า ค่าน้ําประปา ค่าโทรศัพท์ ตามจํานวนหน่วยที่ใช้ในแต่ละเดือนและต้องชําระพร้อมกับการชําระค่าเช่าของเดือนถัดไป
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๖</span> เพื่อเป็นการปฏิบัติตามสัญญาเช่า ผู้เช่าตกลงมอบเงินประกันแก่ผู้ให้เช่าไว้เป็นจำนวน {{ detail.user_sign_contract.roomInsuranceDeposit }} บาท เงินประกันนี้ผู้ให้เช่าจะคืนให้แก่ผู้เช่าเมื่อผู้เช่ามิได้
                    ผิดสัญญา และมิได้ค้างชําระเงินต่างๆ ตามสัญญานี้
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๘</span> ผู้เช่าต้องเป็นผู้ดูแลรักษาความสะอาดบริเวณทางเดินส่วนกลางหน้าห้องพักอาศัย ของผู้เช่า และผู้เช่าจะต้องไม่นําสิ่งของใดๆ มาวางไว้ในบริเวณทางเดินดังกล่าว 
                </div>
            </div>

        </div>
        <!-- <button @click="generatePDF()">xcvxcv</button> -->
    </div>
</template>
  
<script>
import html2pdf from 'html2pdf.js';
import { convertDateNoTime } from '@/components/hook/hook'
export default {
    data() {
        return {
            convertDateNoTime,
            detail: {}
        }

    },
    // mounted() {
    //     this.generatePDF()
    // },
    methods: {
        generatePDF(data) {
            console.log(data);
            this.detail = data
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
                // .save()
                .output('dataurlnewwindow')
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