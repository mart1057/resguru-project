<template>
    <div class="plan-page">
        <stripe-checkout
        ref="checkoutRef"
        mode="subscription"
        :pk="publishableKey"
        :line-items="lineItems"
        :success-url="successURL"
        :cancel-url="cancelURL"
        @loading="v => loading = v"
         />
        <div class="plan-head">
            <div class="plan-title">เลือกแพ็กเกจที่เหมาะกับธุรกิจของคุณ</div>
            <div class="plan-sub">
                ทุกแพ็กเกจมาพร้อมเว็บแอปสำหรับเจ้าของหอพัก แอปมือถือสำหรับผู้เช่า และระบบออกบิลอัตโนมัติ
            </div>
        </div>
        <div class="plan-grid">
            <div v-for="plan in plans" :key="plan.name" class="plan-card"
                :class="{ 'plan-card--featured': plan.featured }">
                <div v-if="plan.badge" class="plan-badge">{{ plan.badge }}</div>
                <div class="plan-name">{{ plan.name }}</div>
                <div class="plan-desc">{{ plan.desc }}</div>
                <div class="plan-price">
                    <span class="plan-amount">{{ plan.price }}</span>
                    <span class="plan-unit">฿ / เดือน</span>
                </div>
                <div class="plan-tagline">{{ plan.tagline }}</div>
                <div class="plan-cta" @click="plan.priceKey ? redirectToCheckout(plan.priceKey) : redirectToCheckout($event)">
                    {{ plan.cta }}
                </div>
                <div class="plan-limit">{{ plan.limit }}</div>
                <ul class="plan-features">
                    <li v-for="f in plan.features" :key="f.text" :class="{ 'plan-off': !f.on }">
                        <span class="plan-ico">
                            <svg v-if="f.on" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="9" cy="9" r="9" fill="#1CCD4E" fill-opacity="0.15" />
                                <path d="M5 9.3L7.7 12L13 6.4" stroke="#12A63B" stroke-width="1.8"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg v-else width="18" height="18" viewBox="0 0 18 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="9" cy="9" r="9" fill="#5C6B79" fill-opacity="0.1" />
                                <path d="M6 9H12" stroke="#9AA7B3" stroke-width="1.8" stroke-linecap="round" />
                            </svg>
                        </span>
                        <span>{{ f.text }}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="plan-note">
            ราคาต่อหอพัก ต่อเดือน ยกเลิกได้ทุกเมื่อ · มีคำถาม ติดต่อ info@resguru.app
        </div>
    </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
import axios from 'axios'
import { authHeaders } from '@/utils/authHeaders'

export default {
  components: {
    StripeCheckout,

  },
  data () {
    this.publishableKey = 'pk_test_51OIS4JD24IeZxpSXYIzqDBBk9tYUPq8Q13LmjKWZsKqDdrtDpDsPxZgMWF812PxwGpGmQH372uiicnb4PJmdEPhx00tpDU28Q1';
    return {
      loading: false,
      // Display only: what each card shows. Checkout wiring is in the template
      // (priceKey is the Stripe price used before; the trial passes no key).
      plans: [
        {
          name: 'Free Trial',
          desc: 'ลองใช้งานจริงกับหอพักของคุณ',
          price: '0',
          tagline: 'ทดลองใช้งานฟรี 30 วัน',
          cta: 'ทดลองใช้งานฟรี 30 วัน',
          limit: '1 หอพัก / 5 ห้อง',
          priceKey: null,
          featured: false,
          features: [
            { on: true, text: 'แดชบอร์ดภาพรวมห้องพัก รายรับ และยอดค้างชำระ' },
            { on: true, text: 'ออกใบแจ้งหนี้ค่าเช่า ค่าน้ำ ค่าไฟ ค่าส่วนกลาง' },
            { on: true, text: 'ยกยอดค้างชำระไปรอบบิลถัดไปอัตโนมัติ' },
            { on: true, text: 'ตรวจสลิปและอนุมัติการชำระเงิน รองรับชำระบางส่วน' },
            { on: true, text: 'ออกใบเสร็จรับเงินและดาวน์โหลด PDF' },
            { on: true, text: 'จัดการผู้เช่าและสัญญาเช่า' },
            { on: false, text: 'นำเข้ามิเตอร์น้ำ-ไฟด้วย Excel' },
            { on: false, text: 'ระบบแจ้งซ่อมและบริการ มอบหมายพนักงาน' },
            { on: false, text: 'ประกาศข่าวสารถึงผู้เช่า' },
            { on: false, text: 'แจ้งเตือนทันทีบนแอปเจ้าของและแอปผู้เช่า' },
            { on: false, text: 'รายงานรายรับ-รายจ่ายของหอพัก' },
            { on: false, text: 'จัดการย้ายออกและเคลียร์ยอดคงเหลือ' },
            { on: false, text: 'แสดงหอพักบนแผนที่ค้นหาหอพัก' },
          ],
        },
        {
          name: 'Business',
          desc: 'สำหรับหอพักที่เติบโตและต้องการระบบครบ',
          price: '500',
          tagline: 'เหมาะกับหอพักขนาดเล็กถึงกลาง',
          cta: 'เลือกแพ็กเกจ Business',
          limit: '1 หอพัก / ไม่จำกัดห้อง',
          // Prod price (kept for reference): price_1OMRpVD24IeZxpSXWG79ni05
          priceKey: 'price_1OMS8qD24IeZxpSX4afYIXOQ',
          featured: false,
          features: [
            { on: true, text: 'แดชบอร์ดภาพรวมห้องพัก รายรับ และยอดค้างชำระ' },
            { on: true, text: 'ออกใบแจ้งหนี้ค่าเช่า ค่าน้ำ ค่าไฟ ค่าส่วนกลาง' },
            { on: true, text: 'ยกยอดค้างชำระไปรอบบิลถัดไปอัตโนมัติ' },
            { on: true, text: 'ตรวจสลิปและอนุมัติการชำระเงิน รองรับชำระบางส่วน' },
            { on: true, text: 'ออกใบเสร็จรับเงินและดาวน์โหลด PDF' },
            { on: true, text: 'จัดการผู้เช่าและสัญญาเช่า' },
            { on: true, text: 'นำเข้ามิเตอร์น้ำ-ไฟด้วย Excel' },
            { on: true, text: 'ระบบแจ้งซ่อมและบริการ มอบหมายพนักงาน' },
            { on: true, text: 'ประกาศข่าวสารถึงผู้เช่า' },
            { on: true, text: 'แจ้งเตือนทันทีบนแอปเจ้าของและแอปผู้เช่า' },
            { on: false, text: 'รายงานรายรับ-รายจ่ายของหอพัก' },
            { on: false, text: 'จัดการย้ายออกและเคลียร์ยอดคงเหลือ' },
            { on: false, text: 'แสดงหอพักบนแผนที่ค้นหาหอพัก' },
          ],
        },
        {
          name: 'Professional',
          desc: 'ครบทุกฟีเจอร์ สำหรับมืออาชีพ',
          price: '890',
          tagline: 'คุ้มที่สุด ครบทุกฟังก์ชัน',
          cta: 'เลือกแพ็กเกจ Professional',
          limit: '1 หอพัก / ไม่จำกัดห้อง',
          // Prod price (kept for reference): price_1OMRpnD24IeZxpSXbaeOjlPO
          priceKey: 'price_1OMS8qD24IeZxpSX4afYIXOQ',
          featured: true,
          badge: 'แนะนำ',
          features: [
            { on: true, text: 'แดชบอร์ดภาพรวมห้องพัก รายรับ และยอดค้างชำระ' },
            { on: true, text: 'ออกใบแจ้งหนี้ค่าเช่า ค่าน้ำ ค่าไฟ ค่าส่วนกลาง' },
            { on: true, text: 'ยกยอดค้างชำระไปรอบบิลถัดไปอัตโนมัติ' },
            { on: true, text: 'ตรวจสลิปและอนุมัติการชำระเงิน รองรับชำระบางส่วน' },
            { on: true, text: 'ออกใบเสร็จรับเงินและดาวน์โหลด PDF' },
            { on: true, text: 'จัดการผู้เช่าและสัญญาเช่า' },
            { on: true, text: 'นำเข้ามิเตอร์น้ำ-ไฟด้วย Excel' },
            { on: true, text: 'ระบบแจ้งซ่อมและบริการ มอบหมายพนักงาน' },
            { on: true, text: 'ประกาศข่าวสารถึงผู้เช่า' },
            { on: true, text: 'แจ้งเตือนทันทีบนแอปเจ้าของและแอปผู้เช่า' },
            { on: true, text: 'รายงานรายรับ-รายจ่ายของหอพัก' },
            { on: true, text: 'จัดการย้ายออกและเคลียร์ยอดคงเหลือ' },
            { on: true, text: 'แสดงหอพักบนแผนที่ค้นหาหอพัก' },
          ],
        },
      ],
      products: [
      { id: 1, title: 'Building A', price: 1000, bullets: ['Feature 1', 'Feature 2', 'Feature 3'] },
      { id: 2, title: 'Building B', price: 2000, bullets: ['Feature 1', 'Feature 2', 'Feature 3'] },
      { id: 3, title: 'Building C', price: 3000, bullets: ['Feature 1', 'Feature 2', 'Feature 3'] },
      ],
      customerEmail: 'nuttapol.kpn@gmail.com',
      lineItems: [
        {
          price: 'price_1NcBa3JUFs9Ue9lHk4Y9PNBl', // The id of the recurring price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: 'https://tansamai.tech',
      cancelURL: 'https://tansamai.tech/contact-us',
    };
  },
  methods: {
    async redirectToCheckout(productKey) {
            const userEmail = this.$store.state.userInfo.email; // Assume this is the logged-in user's email
            const buildingId = this.$route.query.building ;
            const stripeProductId = productKey ;
            if(userEmail){
                try {
                    const resp = await axios.post('https://api.resguru.app/api/create-checkout-session', {
                        productId: stripeProductId,
                        email: userEmail,
                        buildingId: buildingId
                    }, authHeaders());

                    if (resp.data && resp.data.error) {
                        console.error("create-checkout-session error:", resp.data.error);
                        this.$showNotification('danger', 'ไม่สามารถสร้างรายการชำระเงินได้ กรุณาลองใหม่อีกครั้ง');
                        return;
                    }

                    this.$showNotification('#3A89CB', 'กำลังไปยังหน้าชำระเงิน');
                    window.location.href = resp.data.session.url;
                } catch (error) {
                    console.error("create-checkout-session request failed:", error);
                    this.$showNotification('danger', 'ไม่สามารถสร้างรายการชำระเงินได้ กรุณาลองใหม่อีกครั้ง');
                }
            }
    },
  }
};

// Step of payment [case logged in user]
// 1. Send email to backend with POST method
// 2. Backend create session with email then return as URL
// 3. Frontend Receive URL then redirect to URL [In case fail will no return URL and show fail case]
// 4. URL will provide checkout form with autofill Email 
// 5. Pay with that URL
// 6. when pass then Stripe will send data in webhook
// 7. Receive data via webhook then update information duedate or expire Date
</script>

<style scoped>
.plan-page {
  max-width: 1120px;
  margin: 0 auto;
  padding: 32px 20px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.plan-head { text-align: center; margin-bottom: 32px; }
.plan-title { font-size: 26px; font-weight: 700; color: #003765; }
.plan-sub { margin-top: 8px; font-size: 15px; color: #5c6b79; }
.plan-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  width: 100%;
  align-items: stretch;
}
.plan-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #e3e9ef;
  border-radius: 22px;
  padding: 28px 24px 24px;
  box-shadow: 0 6px 18px rgba(0, 55, 101, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.plan-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 30px rgba(0, 55, 101, 0.12);
}
.plan-card--featured {
  background: linear-gradient(160deg, #003765 0%, #0a5a9c 100%);
  border-color: #003765;
  color: #ffffff;
  box-shadow: 0 14px 34px rgba(0, 55, 101, 0.28);
}
.plan-badge {
  position: absolute;
  top: -13px;
  right: 22px;
  background: #f5d65e;
  color: #003765;
  font-size: 13px;
  font-weight: 700;
  padding: 5px 14px;
  border-radius: 999px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}
.plan-name { font-size: 20px; font-weight: 700; }
.plan-desc { margin-top: 4px; font-size: 14px; color: #5c6b79; min-height: 40px; }
.plan-card--featured .plan-desc,
.plan-card--featured .plan-tagline,
.plan-card--featured .plan-unit { color: rgba(255, 255, 255, 0.78); }
.plan-price { margin-top: 14px; display: flex; align-items: baseline; gap: 6px; }
.plan-amount { font-size: 44px; font-weight: 800; line-height: 1; color: #003765; }
.plan-card--featured .plan-amount { color: #ffffff; }
.plan-unit { font-size: 15px; color: #8396a6; }
.plan-tagline { margin-top: 6px; font-size: 13px; color: #8396a6; min-height: 20px; }
.plan-cta {
  margin-top: 18px;
  text-align: center;
  padding: 12px 10px;
  border-radius: 14px;
  background: #003765;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
}
.plan-cta:hover { background: #0a4f8a; }
.plan-cta:active { transform: scale(0.98); }
.plan-card--featured .plan-cta { background: #f5d65e; color: #003765; }
.plan-card--featured .plan-cta:hover { background: #ffe27a; }
.plan-limit {
  margin-top: 16px;
  padding: 8px 12px;
  border-radius: 10px;
  background: #f2f6fa;
  color: #003765;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}
.plan-card--featured .plan-limit { background: rgba(255, 255, 255, 0.14); color: #ffffff; }
.plan-features { list-style: none; margin: 18px 0 0; padding: 0; }
.plan-features li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 7px 0;
  font-size: 14px;
  line-height: 1.45;
}
.plan-ico { flex: none; margin-top: 1px; }
.plan-off { color: #9aa7b3; text-decoration: none; }
.plan-card--featured .plan-features li { color: #ffffff; }
.plan-note { margin-top: 28px; font-size: 13px; color: #8396a6; text-align: center; }

@media (max-width: 960px) {
  .plan-grid { grid-template-columns: 1fr; max-width: 460px; }
  .plan-card--featured { order: -1; }
}
</style>
