<template>
    <div hidden>
        <!-- Your HTML content to convert to PDF -->
        <div ref="pdfContent" class="pt-[20px] p-[15px]">
            <img class="watermarked" :src="Res_Guru_Logo_create06" />
            <div class="flex justify-between">
                <div class="flex">
                    <!-- <div><img :src="'http://api.resguru.app/api/'+$store.state.buildingInfo[0].attributes.buildingLogo.data.attributes.formats.large.url" class="w-[70px] h-[70px]" /></div> -->
                    <div class="ml-[8px]">
                        <div class="text-[18px] font-bold">{{ $store.state.buildingInfo[0].attributes.buildingName }}</div>
                        <div>{{ $store.state.buildingInfo[0].attributes.buildingAddress }}</div>
                        <div>โทร: {{ $store.state.buildingInfo[0].attributes.buildingPhone }}</div>
                    </div>
                </div>
                <div class="flex flex-col justify-between">
                    <div class="text-[24px] font-bold"> ใบวางบิล/ใบแจ้งหนี้ </div>
                    <div> หมายเลขใบแจ้งหนี้ (invoice) {{ data_bill.tenant_bills[0]?.invoiceNumber }}</div>
                    <div>
                        <div>วันที่ออก {{ formatDate(data_bill.tenant_bills[0]?.createdAt) }}</div>
                    </div>
                </div>
            </div>
            <!-- <hr class="mt-[32px] mb-[32] h-[10px]"> -->
<!-- 
            <div>
                <div class="text-[24px] font-bold">ประจำหอพัก {{ $store.state.buildingInfo[0].attributes.buildingName }}</div>
                <div class="mt-[4px] mb-[15px]">#ใบแจ้งชำระประจำเดือน</div>
            </div> -->

            <div class="grid grid-cols-3">
                <div class=" pr-[14px]">
                    <hr class="h-[2px]">
                    <div class="font-bold mb-[8px]">ผู้เช่า</div>
                    <div>ห้องเช่าหมายเลข {{ data_bill.RoomNumber }}</div>
                    <div>ชื่อผู้เช่า {{ data_bill.user_sign_contract?.users_permissions_user?.firstName
                    }} {{ data_bill.user_sign_contract?.users_permissions_user?.lastName }}</div>
                    <div>ที่อยู่ {{ data_bill.user_sign_contract?.users_permissions_user?.contactAddress }}</div>
                    <div>โทร: {{
                        data_bill.user_sign_contract?.users_permissions_user?.phone }}</div>
                </div>
                <div class=" pr-[14px]"></div>
                <div class=" pr-[14px]">
                    <hr class="h-[10px]">
                    <div class="font-bold mb-[8px]">กำหนดชำระ</div>
                    <div>วันที่ {{ formatDueDate(data_bill.tenant_bills[0]?.createdAt, $store.state.buildingInfo[0].attributes.BuildingDueDate) }}</div>
                </div>
            </div>
            <div class="mt-[24px]">
                <table>
                    <tr class="border-b-[1px] flex justify-between  border-r border-l border-t">
                        <td class="w-[150px] font-bold ">รายการ</td>
                        <td class="w-[150px] font-bold flex justify-end border-r border-l">จำนวน</td>
                        <td class="w-[150px] font-bold flex justify-end border-r ">ราคาต่อหน่วย</td>
                        <td class="w-[150px] font-bold flex justify-end ">ราคารวม</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between">
                        <td class="w-[150px] border-l">ค่าห้อง</td>
                        <td class="w-[150px] flex justify-end border-r border-l">1</td>
                        <td class="w-[150px] flex justify-end border-r">{{ formatNumber(data_bill.tenant_bills[0]?.roomPrice) }}</td>
                        <td class="w-[150px] flex justify-end border-r ">{{ formatNumber(data_bill.tenant_bills[0]?.roomPrice) }}</td>
                    </tr>
                    <tr  class="border-b-[1px] flex justify-between">
                        <td class="w-[150px] border-l">ค่าน้ำ (0-0)</td>
                        <td  class="w-[150px] flex justify-end border-r border-l">{{ data_bill.tenant_bills[0]?.usageWater }}</td>
                        <td  class="w-[150px] flex justify-end border-r ">{{ formatNumber(data_bill.tenant_bills[0]?.waterPrice) }}</td>
                        <td  class="w-[150px] flex justify-end border-r ">{{ formatNumber(data_bill.tenant_bills[0]?.waterPrice * data_bill.tenant_bills[0]?.usageWater) }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between">
                        <td class="w-[150px] border-l">ค่าไฟ (0-0)</td>
                        <td  class="w-[150px] flex justify-end border-r border-l">{{ data_bill.tenant_bills[0]?.usageElectric }} </td>
                        <td  class="w-[150px] flex justify-end border-r "> {{ formatNumber(data_bill.tenant_bills[0]?.electricPrice) }}</td>
                        <td  class="w-[150px] flex justify-end border-r ">{{ formatNumber(data_bill.tenant_bills[0]?.electricPrice * data_bill.tenant_bills[0]?.usageElectric) }}
                        </td>
                    </tr>
                    <tr  class="border-b-[1px] flex justify-between">
                        <td class="w-[150px] border-l">ค่าส่วนกลาง</td>
                        <td  class="w-[150px] flex justify-end border-r border-l">1</td>
                        <td  class="w-[150px] flex justify-end border-r ">{{ formatNumber(data_bill.tenant_bills[0]?.communalPrice) }}</td>
                        <td  class="w-[150px] flex justify-end border-r ">{{ formatNumber(data_bill.tenant_bills[0]?.communalPrice) }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between">
                        <td class="w-[150px] border-l">ค่าปรับ</td>
                        <td  class="w-[150px] flex justify-end border-r border-l">1</td>
                        <td  class="w-[150px] flex justify-end border-r ">{{ formatNumber(data_bill.tenant_bills[0]?.otherPrice) }}</td>
                        <td  class="w-[150px] flex justify-end border-r ">{{ formatNumber(data_bill.tenant_bills[0]?.otherPrice) }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between">
                        <td class="w-full text-right pr-4 border-l border-r">รวมค่าใช้จ่าย</td>
                        <td class="w-[245px] text-right  border-r">{{ formatNumber(data_bill.tenant_bills[0]?.total - data_bill.tenant_bills[0]?.vat) }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between">
                        <td class="w-full text-right pr-4 border-l border-r">ภาษี</td>
                        <td class="w-[240px] text-right  border-r">{{ formatNumber(data_bill.tenant_bills[0]?.vat) }}</td>
                    </tr>
                    <tr class="border-b-[1px] flex justify-between">                        
                        <td class="w-[66%] text-center border-l">( {{ numberToThaiText(data_bill.tenant_bills[0]?.total) }} )</td>
                        <td class="w-[5%] text-right pr-4 font-bold  border-r">รวม</td>
                        <td class="w-[23%] text-right font-bold text-green-600 text-[20px] border-r">{{ formatNumber(data_bill.tenant_bills[0]?.total) }}</td>
                    </tr>
                </table>
            </div>
            <div>
                <p class="flex flex-col items-left">
                    <span>กรุณาชำระและแจ้งภายในวันที่กำหนด ล่าช้ารับวันละ 100 บาท</span>
                    <span style="height: 0px; display: block;"></span>
                </p>
            </div>
            <div class="flex justify-end mt-12">
                <p class="flex flex-col items-center">
                    <span>ลงชื่อ</span>
                    <span style="height: 60px; display: block;"></span>
                    <span class="signature-line"></span>
                    <span>ผู้จัดทำ</span>
                </p>
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
.qr-code-container img {
  width: 500px !important;
  height: 500px !important;
  min-width: 500px !important;
  min-height: 500px !important;
  max-width: 500px !important;
  max-height: 500px !important;
  object-fit: none !important; /* Prevents aspect ratio preservation */
}
/* Styling for the bill table */
.bill-table {
    width: 100%;
    overflow-x: auto;
}

.custom-table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #a3a3a3;
}

.custom-table th,
.custom-table td {
    padding: 10px;
    text-align: left;
    border: 1px solid #a3a3a3;
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

.signature-line {
    display: inline-block;
    width: 250px; /* Adjust width as needed */
    border-bottom: 1px solid black; /* Creates the line */
    margin: 0 8px; /* Adds spacing */
    vertical-align: bottom; /* Aligns it properly */
}
</style> 