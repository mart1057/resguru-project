<template>
    <div hidden>
        <!-- Your HTML content to convert to PDF -->
        <div ref="pdfContent" class="pt-3 p-2">
            <img class="watermarked" :src="Res_Guru_Logo_create06" />
            <div class="flex justify-between">
                <div class="flex">
                    <div class="ml-1">
                        <div class="text-sm font-bold">{{ $store.state.buildingInfo[0].attributes.buildingName }}</div>
                        <div class="text-xs">{{ $store.state.buildingInfo[0].attributes.buildingAddress }}</div>
                        <div class="text-xs">โทร: {{ $store.state.buildingInfo[0].attributes.buildingPhone }}</div>
                    </div>
                </div>
                <div class="flex flex-col justify-between">
                    <div class="text-lg font-bold"> ใบวางบิล/ใบแจ้งหนี้ </div>
                    <div class="text-xs"> หมายเลขใบแจ้งหนี้ (invoice) {{ data_bill.tenant_bills[0]?.invoiceNumber }}</div>
                    <div class="text-xs">
                        <div>วันที่ออก {{ formatDate(data_bill.tenant_bills[0]?.createdAt) }}</div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-3 text-xs mt-2">
                <div class="pr-2">
                    <hr class="h-px">
                    <div class="font-bold mb-1">ผู้เช่า</div>
                    <div>ห้องเช่าหมายเลข {{ data_bill.RoomNumber }}</div>
                    <div>ชื่อผู้เช่า {{ data_bill.user_sign_contract?.users_permissions_user?.firstName
                    }} {{ data_bill.user_sign_contract?.users_permissions_user?.lastName }}</div>
                    <div>ที่อยู่ {{ data_bill.user_sign_contract?.users_permissions_user?.contactAddress }}</div>
                    <div>โทร: {{
                        data_bill.user_sign_contract?.users_permissions_user?.phone }}</div>
                </div>
                <div class="pr-2"></div>
                <div class="pr-2">
                    <hr class="h-px">
                    <div class="font-bold mb-1">กำหนดชำระ</div>
                    <div>วันที่ {{ formatDueDate(data_bill.tenant_bills[0]?.createdAt, $store.state.buildingInfo[0].attributes.BuildingDueDate) }}</div>
                </div>
            </div>
            
            <!-- This is the table section with improved styling -->
            <div class="mt-3">
                <table class="text-xs w-full border-collapse invoice-table">
                    <thead>
                        <tr>
                            <th class="py-2 px-3 text-left border" style="width: 40%;">รายการ</th>
                            <th class="py-2 px-3 text-right border" style="width: 20%;">จำนวน</th>
                            <th class="py-2 px-3 text-right border" style="width: 20%;">ราคาต่อหน่วย</th>
                            <th class="py-2 px-3 text-right border" style="width: 20%;">ราคารวม</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="row-even">
                            <td class="py-2 px-3 border">ค่าห้อง</td>
                            <td class="py-2 px-3 text-right border">1</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(data_bill.tenant_bills[0]?.roomPrice) }}</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(data_bill.tenant_bills[0]?.roomPrice) }}</td>
                        </tr>
                        <tr class="row-odd">
                            <td class="py-2 px-3 border">ค่าน้ำ (0-0)</td>
                            <td class="py-2 px-3 text-right border">{{ data_bill.tenant_bills[0]?.usageWater }}</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(data_bill.tenant_bills[0]?.waterPrice) }}</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(data_bill.tenant_bills[0]?.waterPrice * data_bill.tenant_bills[0]?.usageWater) }}</td>
                        </tr>
                        <tr class="row-even">
                            <td class="py-2 px-3 border">ค่าไฟ (0-0)</td>
                            <td class="py-2 px-3 text-right border">{{ data_bill.tenant_bills[0]?.usageElectric }}</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(data_bill.tenant_bills[0]?.electricPrice) }}</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(data_bill.tenant_bills[0]?.electricPrice * data_bill.tenant_bills[0]?.usageElectric) }}</td>
                        </tr>
                        <tr class="row-odd">
                            <td class="py-2 px-3 border">ค่าส่วนกลาง</td>
                            <td class="py-2 px-3 text-right border">1</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(data_bill.tenant_bills[0]?.communalPrice) }}</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(data_bill.tenant_bills[0]?.communalPrice) }}</td>
                        </tr>
                        <tr class="row-even">
                            <td class="py-2 px-3 border">ค่าปรับ</td>
                            <td class="py-2 px-3 text-right border">1</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(data_bill.tenant_bills[0]?.otherPrice) }}</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(data_bill.tenant_bills[0]?.otherPrice) }}</td>
                        </tr>
                        
                        <!-- Conditional rows for past month charges -->
                        <!-- Modified rows for past month charges with Thai month name -->
                        <tr class="row-odd" v-if="data_bill.tenant_bills[0]?.pastRoomPrice > 0">
                            <td class="py-2 px-3 border">ค่าห้อง (ยอดจากเดือน{{ getPreviousMonthThai(data_bill.tenant_bills[0]?.createdAt) }})</td>
                            <td class="py-2 px-3 text-right border">1</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(data_bill.tenant_bills[0]?.pastRoomPrice) }}</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(data_bill.tenant_bills[0]?.pastRoomPrice) }}</td>
                        </tr>
                        <tr class="row-even" v-if="data_bill.tenant_bills[0]?.pastWaterPrice > 0">
                            <td class="py-2 px-3 border">ค่าน้ำ (ยอดจากเดือน{{ getPreviousMonthThai(data_bill.tenant_bills[0]?.createdAt) }})</td>
                            <td class="py-2 px-3 text-right border">1</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(data_bill.tenant_bills[0]?.pastWaterPrice) }}</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(data_bill.tenant_bills[0]?.pastWaterPrice) }}</td>
                        </tr>
                        <tr class="row-odd" v-if="data_bill.tenant_bills[0]?.pastElectricPrice > 0">
                            <td class="py-2 px-3 border">ค่าไฟ (ยอดจากเดือน{{ getPreviousMonthThai(data_bill.tenant_bills[0]?.createdAt) }})</td>
                            <td class="py-2 px-3 text-right border">1</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(data_bill.tenant_bills[0]?.pastElectricPrice) }}</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(data_bill.tenant_bills[0]?.pastElectricPrice) }}</td>
                        </tr>
                        <tr class="row-even" v-if="data_bill.tenant_bills[0]?.pastCommunalPrice > 0">
                            <td class="py-2 px-3 border">ค่าส่วนกลาง (ยอดจากเดือน{{ getPreviousMonthThai(data_bill.tenant_bills[0]?.createdAt) }})</td>
                            <td class="py-2 px-3 text-right border">1</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(data_bill.tenant_bills[0]?.pastCommunalPrice) }}</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(data_bill.tenant_bills[0]?.pastCommunalPrice) }}</td>
                        </tr>
                        <tr class="row-odd" v-if="data_bill.tenant_bills[0]?.pastOtherPrice > 0">
                            <td class="py-2 px-3 border">ค่าปรับ (ยอดจากเดือน{{ getPreviousMonthThai(data_bill.tenant_bills[0]?.createdAt) }})</td>
                            <td class="py-2 px-3 text-right border">1</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(data_bill.tenant_bills[0]?.pastOtherPrice) }}</td>
                            <td class="py-2 px-3 text-right border">{{ formatNumber(data_bill.tenant_bills[0]?.pastOtherPrice) }}</td>
                        </tr>
                           
                    </tbody>
                    <tfoot>
                        <!-- Bottom rows with progressively larger text -->
                    <tr>
                        <td colspan="3" class="py-2 px-3 text-right border text-xs">รวมค่าใช้จ่าย</td>
                        <td class="py-2 px-3 text-right border text-xs">{{ formatNumber(data_bill.tenant_bills[0]?.subtotal + 
                            (data_bill.tenant_bills[0]?.pastRoomPrice || 0) + 
                            (data_bill.tenant_bills[0]?.pastWaterPrice || 0) + 
                            (data_bill.tenant_bills[0]?.pastElectricPrice || 0) + 
                            (data_bill.tenant_bills[0]?.pastCommunalPrice || 0) + 
                            (data_bill.tenant_bills[0]?.pastOtherPrice || 0)) }}</td>
                    </tr>
                    <tr>                      
                        <td colspan="3" class="py-2 px-3 text-right border text-xs">ภาษี</td>
                        <td class="py-2 px-3 text-right border text-xs">{{ formatNumber(data_bill.tenant_bills[0]?.vat) }}</td>
                    </tr>
                    <tr>                        
                        <td colspan="2" class="py-2 px-3 text-center border text-xs">( {{ numberToThaiText(data_bill.tenant_bills[0]?.subtotal + 
                            (data_bill.tenant_bills[0]?.pastRoomPrice || 0) + 
                            (data_bill.tenant_bills[0]?.pastWaterPrice || 0) + 
                            (data_bill.tenant_bills[0]?.pastElectricPrice || 0) + 
                            (data_bill.tenant_bills[0]?.pastCommunalPrice || 0) + 
                            (data_bill.tenant_bills[0]?.pastOtherPrice || 0) +
                            (data_bill.tenant_bills[0]?.vat || 0)) }} )</td>
                        <td class="py-2 px-3 text-right font-bold border text-sm">รวม</td>
                        <td class="py-2 px-3 text-right font-bold text-green-600 border text-sm">{{ formatNumber(data_bill.tenant_bills[0]?.subtotal + 
                            (data_bill.tenant_bills[0]?.pastRoomPrice || 0) + 
                            (data_bill.tenant_bills[0]?.pastWaterPrice || 0) + 
                            (data_bill.tenant_bills[0]?.pastElectricPrice || 0) + 
                            (data_bill.tenant_bills[0]?.pastCommunalPrice || 0) + 
                            (data_bill.tenant_bills[0]?.pastOtherPrice || 0) +
                            (data_bill.tenant_bills[0]?.vat || 0)) }}</td>
                    </tr>
                    </tfoot>
                </table>
            </div>
            
            <div class="text-xs mt-2">
                <p>กรุณาชำระและแจ้งภายในวันที่กำหนด ล่าช้ารับวันละ 100 บาท</p>
            </div>
            
            <div class="flex justify-end mt-4">
                <p class="flex flex-col items-center text-xs">
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
import Res_Guru_Logo_create12 from '@/assets/img/Res_Guru_Logo_create-12.png'
import { convertDateNoTime } from '@/components/hook/hook'
import THBText from 'thai-baht-text'
import download from 'downloadjs';
import axios from 'axios';
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
        numberToThaiText(number) {
            if (!number) return '';
            
            const digits = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];
            const positions = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน'];
            
            // Split number into baht and satang
            const [baht, satang = '0'] = number.toFixed(2).split('.');
            
            const convertGroup = (num) => {
                const str = num.toString();
                let result = '';
                
                for (let i = 0; i < str.length; i++) {
                    const digit = parseInt(str[i]);
                    if (digit === 0) continue;
                    
                    // Special cases for ones
                    if (i === str.length - 1) {
                        if (digit === 1 && str.length > 1) {
                            result += 'เอ็ด';
                        } else {
                            result += digits[digit];
                        }
                    }
                    // Special cases for tens
                    else if (i === str.length - 2) {
                        if (digit === 2) {
                            result += 'ยี่';
                        } else if (digit === 1) {
                            result += '';
                        } else {
                            result += digits[digit];
                        }
                        result += positions[1];
                    }
                    // Other positions
                    else {
                        result += digits[digit] + positions[str.length - 1 - i];
                    }
                }
                return result;
            };
            
            // Convert baht part
            let result = '';
            const bahtNum = parseInt(baht);
            if (bahtNum === 0) {
                result = 'ศูนย์บาท';
            } else {
                result = convertGroup(bahtNum) + 'บาท';
            }
            
            // Convert satang part
            const satangNum = parseInt(satang);
            if (satangNum > 0) {
                result += satangNum === 1 ? 'หนึ่งสตางค์' : convertGroup(satangNum) + 'สตางค์';
            }
            
            return result;
        },
        formatDueDate(createdAtDate, dueDay) {
            if (!createdAtDate || !dueDay) return '-';
            
            const date = new Date(createdAtDate);
            let month = date.getMonth(); // Get current month (0-11)
            let year = date.getFullYear();
            
            // If we're past the due day, move to next month
            const currentDay = date.getDate();
            if (currentDay > dueDay) {
                // If current month is December (11), move to January of next year
                if (month === 11) {
                    month = 0;
                    year++;
                } else {
                    month++;
                }
            }
            
            const dueDate = new Date(year, month, dueDay);
            
            // Format the date
            const thaiYear = dueDate.getFullYear() + 543;
            const formattedMonth = String(dueDate.getMonth() + 1).padStart(2, '0');
            const formattedDay = String(dueDate.getDate()).padStart(2, '0');
            
            return `${formattedDay}/${formattedMonth}/${thaiYear}`;
        },
        formatDate(dateString) {
            const date = new Date(dateString);
            // Thai Buddhist year is 543 years ahead of Gregorian calendar
            const thaiYear = date.getFullYear() + 543;
            // Pad month and day with leading zeros if needed
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${day}/${month}/${thaiYear}`;
        },
        getPreviousMonthThai(dateString) {
            if (!dateString) return '';
            
            const date = new Date(dateString);
            // Go back one month
            date.setMonth(date.getMonth() - 1);
            
            // Thai month names
            const thaiMonths = [
                'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 
                'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 
                'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
            ];
            
            return thaiMonths[date.getMonth()];
        },
        formatNumber(value) {
            if (value === null || value === undefined) return '0.00';
                let num = parseFloat(value).toFixed(2); // Ensure two decimal places
                return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        async generatePDF(data) {
            console.log("PDFdata", data);
            this.data_bill = data;
            
            try {
                // Get building ID from store
                const buildingId = this.$store.state.building;
                let qrCodeUrl = null;
                
                // Fetch QR code from building-pay-methods endpoint
                try {
                const response = await axios.get(
                    `https://api.resguru.app/api/building-pay-methods?filters[building][id][$eq]=${buildingId}&populate=QRCode`
                );
                
                console.log("Building pay methods response:", response.data);
                
                if (response.data && 
                    response.data.data && 
                    response.data.data.length > 0 && 
                    response.data.data[0].attributes && 
                    response.data.data[0].attributes.QRCode && 
                    response.data.data[0].attributes.QRCode.data && 
                    response.data.data[0].attributes.QRCode.data.attributes) {
                    qrCodeUrl = `https://api.resguru.app${response.data.data[0].attributes.QRCode.data.attributes.url}`;
                }
                console.log("QR Code URL:", qrCodeUrl);
                } catch (error) {
                console.error("Error fetching QR code:", error);
                // Continue without QR code if there's an error
                }

                this.$nextTick(() => {
                const content = this.$refs.pdfContent;
                if (!content) {
                    console.error("PDF content not found");
                    return; // Exit if content is not found
                }

                // Add QR code to the content if we have it
                if (qrCodeUrl) {
                    // First check if we already have a QR code container
                    let qrContainer = content.querySelector('.qr-code-container');
                    if (!qrContainer) {
                    qrContainer = document.createElement('div');
                    qrContainer.className = 'qr-code-container';
                    qrContainer.style.width = '100%';
                    qrContainer.style.textAlign = 'center';
                    qrContainer.style.marginTop = '30px';
                    qrContainer.style.marginBottom = '20px';
                    
                    const qrImage = document.createElement('img');
                    qrImage.src = qrCodeUrl;
                    qrImage.style.width = '500px';
                    qrImage.style.height = '500px';
                    qrImage.style.objectFit = 'contain';
                    qrImage.style.maxWidth = '100%';
                    qrImage.alt = 'Payment QR Code';
                    qrImage.crossOrigin = 'anonymous'; // Handle cross-origin images
                    
                    const qrLabel = document.createElement('div');
                    qrLabel.textContent = 'สแกนเพื่อชำระเงิน';
                    qrLabel.style.marginTop = '10px';
                    qrLabel.style.fontSize = '18px';
                    qrLabel.style.fontWeight = 'bold';
                    
                    qrContainer.appendChild(qrImage);
                    qrContainer.appendChild(qrLabel);
                    content.appendChild(qrContainer);
                    }
                }

                const opt = {
                    margin: 10,
                    filename: `Invoice-${data.RoomNumber}.pdf`,
                    image: { 
                    type: "jpeg", 
                    quality: 0.98 
                    },
                    html2canvas: { 
                    scale: 2,
                    useCORS: true, // Enable CORS for images
                    logging: false, // Disable logging for better performance
                    allowTaint: true // Allow cross-origin images
                    },
                    jsPDF: { 
                    unit: "mm", 
                    format: "a4", 
                    orientation: "portrait" 
                    }
                };

                // Generate the PDF and open in a new tab using the direct approach
                html2pdf()
                    .from(content)
                    .set(opt)
                    .toPdf()
                    .get("pdf")
                    .then(function (pdf) {
                    console.log("PDF generated successfully");
                    // This works in most browsers to open in a new tab
                    window.open(pdf.output("bloburl"), "_blank");
                    
                    // Clean up - remove QR code container if we added it
                    if (qrCodeUrl) {
                        const qrContainer = content.querySelector('.qr-code-container');
                        if (qrContainer) {
                        content.removeChild(qrContainer);
                        }
                    }
                    })
                    .catch(function (error) {
                    console.error("Error generating PDF:", error);
                    
                    // Clean up - remove QR code container if we added it
                    if (qrCodeUrl) {
                        const qrContainer = content.querySelector('.qr-code-container');
                        if (qrContainer) {
                        content.removeChild(qrContainer);
                        }
                    }
                    });
                });
            } catch (error) {
                console.error("Error in PDF generation process:", error);
            }
        }
    },
};
</script>
<style>
/* Custom styling for the invoice table */
.invoice-table {
  border: 2px solid #333; /* Darker border for the whole table */
}

.invoice-table th,
.invoice-table td {
  border: 1px solid #333; /* Darker border for cells */
}

.invoice-table thead tr {
  background-color: #f0f0f0; /* Light gray header */
}

/* Alternating row colors: transparent and light gray */
.invoice-table .row-odd {
  background-color: #f5f5f5; /* Very light gray */
}

.invoice-table .row-even {
  background-color: transparent; /* See-through */
}

.invoice-table tfoot tr {
  background-color: #f0f0f0; /* Light gray footer */
}

.qr-code-container img {
  width: 150px !important;
  height: 150px !important;
  min-width: 150px !important;
  min-height: 150px !important;
  max-width: 150px !important;
  max-height: 150px !important;
  object-fit: none !important; /* Prevents aspect ratio preservation */
}

.watermarked {
  position: absolute;
  opacity: 0.05;
  width: 100%;
  height: auto;
}

.signature-line {
  display: inline-block;
  width: 150px; /* Reduced width */
  border-bottom: 1px solid black; /* Creates the line */
  margin: 0 4px; /* Reduced spacing */
  vertical-align: bottom; /* Aligns it properly */
}
</style>