<template>
  <div class="nf">
    <div class="nf__box">
      <div class="nf__code">404</div>
      <div class="nf__title">ไม่พบหน้าที่คุณต้องการ</div>
      <div class="nf__desc">หน้านี้อาจถูกย้ายหรือลบไปแล้ว</div>
      <button class="nf__btn" @click="goHome">กลับหน้าหลัก</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  mounted() {
    this.$store.commit('setMain', false)
  },
  methods: {
    goHome() {
      this.$router.push('/').catch(() => {})
    },
  },
}
</script>

<style scoped>
.nf {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  font-family: 'Prompt';
}
.nf__box {
  max-width: 360px;
  width: 100%;
  background: #fff;
  border: 1px solid #E3EAF1;
  border-radius: 18px;
  padding: 36px 28px;
  text-align: center;
}
.nf__code {
  font-size: 44px;
  font-weight: 700;
  color: #003765;
  letter-spacing: 2px;
}
.nf__title {
  font-size: 18px;
  font-weight: 700;
  color: #003765;
  margin-top: 8px;
}
.nf__desc {
  font-size: 14px;
  color: #5C6B79;
  margin-top: 6px;
}
.nf__btn {
  margin-top: 22px;
  width: 100%;
  height: 40px;
  border: 0;
  border-radius: 12px;
  background: #003765;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  font-family: 'Prompt';
  transition: background-color .15s;
}
.nf__btn:hover {
  background: #00294d;
}
</style>
