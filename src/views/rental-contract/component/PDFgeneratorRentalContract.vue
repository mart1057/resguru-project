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
                    ระหว่าง {{ $store.state.buildingInfo[0].attributes.buildingName + ' ' + 'และ' + '
                    '+detail.user_sign_contract.users_permissions_user.firstName +'
                    '+detail.user_sign_contract.users_permissions_user.lastName }}
                    <div>อยู่บ้านเลขที่ {{ detail.user_sign_contract.users_permissions_user.contactAddress }}
                        ตำบล {{ detail.user_sign_contract.users_permissions_user.district }}
                        อำเภอ/เขต {{ detail.user_sign_contract.users_permissions_user.subDistrict }}
                        จังหวัด {{ detail.user_sign_contract.users_permissions_user.province }}
                        ซึ่งต่อไปในสัญญานี้จะเรียกว่า "ผู้เช่า"อีกฝ่ายหนึ่ง</div>
                </div>
                <div class="ml-[42px]">
                    ทั้งสองฝ่ายตกลงทำสัญญากันโดยมีข้อความดังต่อไปนี้
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๑</span> ผู้เช่าตกลงเช่าและผู้ให้เช่าตกลงให้เช่าห้องพักอาศัยห้องเลขที่ {{
                        detail.RoomNumber }} ของ {{ $store.state.buildingInfo[0].attributes.buildingName }} ซึ่งตั้งอยู่ที่ {{
        $store.state.buildingInfo[0].attributes.buildingAddress }} ตำบล {{
        $store.state.buildingInfo[0].attributes.buildingSubDistrict }} อำเภอ/เขต {{
        $store.state.buildingInfo[0].attributes.buildingDistrict }}
                    จังหวัด {{ $store.state.buildingInfo[0].attributes.buildingProvince }} เพื่อใช้เป็นที่พักอาศัย
                    ในอัตราค่าเช่าเดือนละ {{ detail.room_type.roomPrice }} บาท/เดือน
                    ค่าเช่านี้ไม่รวมถึงค่าไฟฟ้า ค่าน้ำปะปา ค่าโทรศัพท์
                    ซึ่งผู้เช่าจะต้องชำระแก่ผู้ให้เช่าตามอัตราที่กำหนดไว้ในข้อ ๔
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๒</span> ผู้เช่าตกลงเช่าห้องพักอาศัยตามสัญญาข้อ ๑ มีกำหนดเวลา {{
                        detail.user_sign_contract.contractDuration }} เดือน นับตั้งแต่วันที่ {{
        detail.user_sign_contract.checkInDate }}
                    ถึงวันที่ {{ detail.user_sign_contract.contractEndDate }}
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๓</span> การชําระค่าเช่า
                    ผู้เช่าตกลงจะชําระค่าเช่าแก่ผู้ให้เช่าเป็นการล่วงหน้า โดยชําระภายในวันที่ 5
                    ของทุกเดือนตลอดเวลาอายุการเช่า
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๔</span> ผู้ให้เช่าคิดค่าไฟฟ้า ค่าน้ําประปา ค่าโทรศัพท์ ในอัตราดังนี้
                    <div class="ml-[80px]">(๑) ค่าไฟฟ้ายูนิตละ - บาท</div>
                    <div class="ml-[80px]">(๒) ค่าน้ําประปาลูกบาศก์เมตรละ - บาท</div>
                    <div class="ml-[80px]">(๓) ค่าโทรศัพท์ (โทร. ออก) - บาท</div>
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๕</span> ผู้เช่าต้องชําระค่าไฟฟ้า ค่าน้ําประปา ค่าโทรศัพท์
                    ตามจํานวนหน่วยที่ใช้ในแต่ละเดือนและต้องชําระพร้อมกับการชําระค่าเช่าของเดือนถัดไป
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๖</span> เพื่อเป็นการปฏิบัติตามสัญญาเช่า
                    ผู้เช่าตกลงมอบเงินประกันแก่ผู้ให้เช่าไว้เป็นจำนวน {{ detail.user_sign_contract.roomInsuranceDeposit }}
                    บาท เงินประกันนี้ผู้ให้เช่าจะคืนให้แก่ผู้เช่าเมื่อผู้เช่ามิได้
                    ผิดสัญญา และมิได้ค้างชําระเงินต่างๆ ตามสัญญานี้
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๘</span>
                    ผู้เช่าต้องเป็นผู้ดูแลรักษาความสะอาดบริเวณทางเดินส่วนกลางหน้าห้องพักอาศัย ของผู้เช่า
                    และผู้เช่าจะต้องไม่นําสิ่งของใดๆ มาวางไว้ในบริเวณทางเดินดังกล่าว
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๙</span> ผู้เช่าต้องดูแลห้องพักอาศัยและทรัพย์สินต่างๆ
                    ในห้องพักดังกล่าวเสมือนเป็นทรัพย์สินของตนเอง
                    และต้องรักษาความสะอาดตลอดจนรักษาความสงบเรียบร้อย
                    ไม่ก่อให้เกิดเสียงให้เป็นที่เดือดร้อนรําคาญแก่ผู้อยู่ห้องพักอาศัยข้างเคียง
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๑๐</span> ผู้เช่าต้องเป็นผู้รับผิดชอบในบรรดาความสูญหาย เสียหาย
                    หรือบุบสลายอย่างใดๆ อันเกิดแก่ห้องพักอาศัยและทรัพย์สินต่างๆ ในห้องพักดังกล่าว
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๑๑</span> ผู้เช่าต้องยอมให้ผู้ให้เช่า
                    หรือตัวแทนของผู้ให้เช่าเข้าตรวจดูห้องพักอาศัยได้เป็นครั้งคราวในระยะเวลาอันสมควร
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๑๒</span> ผู้เช่าต้องไม่ทําการดัดแปลง ต่อเติม
                    หรือรื้อถอนห้องพักอาศัยและทรัพย์สินต่างๆ ในห้องพักดังกล่าว
                    ไม่ว่าทั้งหมดหรือบางส่วน หากฝ่าฝืนผู้ให้เช่าจะเรียกให้ผู้เช่าทําทรัพย์สิน ดังกล่าวให้กลับคืนสู่สภาพเดิม
                    และเรียกให้ผู้เช่ารับผิดชดใช้ค่าเสียหายอันเกิดความสูญหาย เสียหาย หรือบุบสลายใดๆ อันเนื่องมาจากการดัดแปลง
                    ต่อเติม หรือรื้อถอนดังกล่าว
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๑๓</span>
                    ผู้เช่าต้องไม่น่าบุคคลอื่นนอกจากบุคคลในครอบครัวของผู้เช่าเข้ามาพักอาศัยใน ห้องพักอาศัย
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๑๔</span>
                    ผู้เช่าสัญญาว่าจะปฏิบัติตามระเบียบข้อบังคับของอพาร์ตเม้นต์ท้ายสัญญานี้
                    ซึ่งคู่สัญญาทั้งสองฝ่ายให้ถือว่าระเบียบข้อบังคับดังกล่าวเป็นส่วนหนึ่งแห่งสัญญาเช่านี้ด้วย
                    หากผู้เช่าละเมิดแล้วผู้ให้เช่าย่อมให้สิทธิตามข้อ ๑๗ และข้อ ๑๘ แห่งสัญญานี้ได้
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๑๕</span> ผู้ให้เช่า ไม่ต้องรับผิดชอบในความสูญหายหรือความเสียหายอย่างใดๆ
                    อันเกิดขึ้น
                    แก่รถยนต์รวมทั้งทรัพย์สินต่างๆ ในรถยนต์ของผู้เช่า ซึ่งได้นํามาจอดไว้ในที่จอดรถยนต์ที่ผู้ให้เช่าจัดไว้ให้
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๑๖</span>
                    ผู้เช่าตกลงว่าการผิดสัญญาเช่าเครื่องเรือนซึ่งผู้เช่าได้ทําไว้กับผู้ให้เช่าต่างหากจาก สัญญานี้
                    ถือว่าเป็นการผิดสัญญานี้ด้วย
                    และโดยนัยเดียวกัน การผิดสัญญานี้ย่อมถือเป็นการผิด สัญญาเช่าเครื่องเรือนด้วย
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๑๗</span> หากผู้เช่าประพฤติผิดสัญญาข้อหนึ่งข้อใด หรือหลายข้อก็ดี
                    ผู้เช่าตกลงให้ผู้ให้เช่า
                    ใช้สิทธิดังต่อไปนี้ ข้อใดข้อหนึ่งหรือหลายข้อรวมกันก็ได้ คือ
                    <div class="ml-[80px]">(๑) บอกเลิกสัญญาเช่า</div>
                    <div class="ml-[80px]">(๒) เรียกค่าเสียหาย</div>
                    <div class="ml-[80px]">(๓) บอกกล่าวให้ผู้เช่าปฏิบัติตามข้อกําหนดในสัญญาภายในกําหนดเวลาที่ผู้ให้</div>
                    <div class="ml-[80px]">(๔) ตัดกระแสไฟฟ้า น้ําประปา และโทรศัพท์ ได้ในทันที โดยไม่จําเป็นต้องบอก
                        กล่าวแก่ผู้เช่าเป็นการล่วงหน้า</div>
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๑๘</span> ในกรณีที่สัญญาเช่าระงับสิ้นลง ไม่ว่าด้วยเหตุใดๆ ก็ตาม
                    ผู้เช่าต้องส่งมอบห้องพักอาศัยคืนแก่ผู้ให้เช่าทันที หากผู้เช่าไม่ปฏิบัติ
                    ผู้ให้เช่าสิทธิกลับเข้าครอบครองห้องพักอาศัยที่ให้เช่าและขนย้ายบุคคลรวมถึงทรัพย์สินของผู้เช่าออกจากห้องพักดังกล่าวได้
                    โดยผู้เช่าเป็นผู้รับผิดชอบ ในความสูญหายหรือความเสียหายอย่างใดๆ อันเกิดขึ้นแก่ทรัพย์สินของผู้เช่า
                    ทั้งผู้ให้เช่ามีสิทธิริบเงินประกันการเช่าตามที่ระบุไว้ในสัญญาข้อ ๖ ได้ด้วย
                </div>
                <div>
                    <span class="ml-[42px]">ข้อ ๑๙</span> ในวันทําสัญญานี้
                    ผู้เช่าได้ตรวจดูห้องพักอาศัยที่เช่าตลอดจนทรัพย์สินต่างๆ ใน ห้องพักดังกล่าวแล้วเห็นว่ามีสภาพปกติทุกประการ
                    และผู้ให้เช่าได้ส่งมอบห้องพักอาศัยและ ทรัพย์สินต่างๆ ในห้องพักแก่ผู้เช่าแล้ว
                </div>
                <div>
                    <span class="ml-[42px]">คู่สัญญาได้</span>อ่านและเข้าใจข้อความในสัญญานี้โดยตลอดแล้วเห็นว่าถูกต้อง
                    จึงได้ลงลายมือชื่อไว้เป็นสําคัญต่อหน้าพยาน
                </div>
                <div class="flex justify-end mt-[8px]">
                    <div class="flex flex-col items-start">
                        <div class="flex justify-center flex-col items-center">
                            <div>ลงชื่อ...........................ผู้เช่า</div>
                            <div class=" mt-[8px]">( {{ detail.user_sign_contract.users_permissions_user.firstName + '
                            '+detail.user_sign_contract.users_permissions_user.lastName }} )</div>
                        </div>
                        <div class="flex justify-center flex-col items-center mt-[8px]">
                            <div>ลงชื่อ...........................ผู้ให้เช่า</div>
                            <div class=" mt-[8px] ml-[-18px]">( {{ $store.state.buildingInfo[0].attributes.buildingName }} )
                            </div>
                        </div>
                        <div class="flex justify-center flex-col items-center  mt-[8px]">
                            <div>ลงชื่อ...........................พยาน</div>
                            <div class=" mt-[8px]">(...........................)</div>
                        </div>
                        <div class="flex justify-center flex-col items-center  mt-[8px]">
                            <div>ลงชื่อ...........................พยาน</div>
                            <div class=" mt-[8px]">(...........................)</div>
                        </div>
                    </div>

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
        generatePDF(data, check) {
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
            if (check) {
                html2pdf()
                    .from(content)
                    .set(opt)
                    // .save()
                    .output('dataurlnewwindow')
            }
            else {
                html2pdf()
                    .from(content)
                    .set(opt)
                    .save()
            }

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