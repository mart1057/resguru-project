<template>
  <div id="app">
    <div v-if="crashed" class="app-crash">
      <div class="app-crash__box">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="#003765" stroke-width="1.6" />
          <path d="M12 7.5v5.5" stroke="#003765" stroke-width="1.8" stroke-linecap="round" />
          <circle cx="12" cy="16.4" r="1.1" fill="#003765" />
        </svg>
        <div class="app-crash__title">หน้านี้เกิดข้อผิดพลาด</div>
        <div class="app-crash__desc">ลองโหลดหน้านี้ใหม่ หรือกลับไปที่หน้าหลัก</div>
        <div class="app-crash__actions">
          <button class="app-crash__btn app-crash__btn--primary" @click="reload">โหลดหน้านี้ใหม่</button>
          <button class="app-crash__btn" @click="goHome">กลับหน้าหลัก</button>
        </div>
      </div>
    </div>
    <div v-else-if="$store.state.login">
      <Toolbar v-if="$store.state.main === true && $route.name !== 'home' && Array.isArray($store.state.buildingInfo) && $store.state.buildingInfo.length" />
      <router-view :class="$store.state.main == true ? 'pl-[20px] pr-[20px] pt-[10px]' : ''" />
    </div>
    <div v-else>
      <Login />
    </div>
  </div>
</template>

<script>
import Toolbar from './components/ToolBar.vue';
import { sidebarWidth, toolbarHeight } from '@/components/state'
import Login from './views/login-register/Login.vue';
export default {
  components: { Login, Toolbar },
  data() {
    return {
      crashed: false,
    }
  },
  watch: {
    // Navigating anywhere clears a previous crash so the user is never stuck.
    $route() {
      if (this.crashed) this.crashed = false
    }
  },
  errorCaptured(err, vm, info) {
    console.error('App errorCaptured:', err, info)
    this.crashed = true
    return false // handled here - don't also bubble to Vue.config.errorHandler
  },
  methods: {
    reload() {
      window.location.reload()
    },
    goHome() {
      this.crashed = false
      this.$router.push('/').catch(() => {})
    },
  },
}
</script>

<style>
body {
  height: 100vh;
  /* overflow: hidden !important; Hide scrollbars */
}

#app {

  font-family: 'Prompt';
  /* font-size: 1rem; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #003765;
  min-height: 100vh;
  background-color: #F2F5F7;
}


nav {
  padding: 30px;
}

input[type=input],
[type=email],
[type=password],[type=number] {
  padding: 12px 16px;
  margin: 8px 0;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.text-custom {
  font-family: 'Prompt';
}

.select-opt,
textarea {
  padding-left: 10px;
}

.app-crash {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F2F5F7;
  padding: 24px;
}
.app-crash__box {
  max-width: 380px;
  width: 100%;
  background: #fff;
  border: 1px solid #E3EAF1;
  border-radius: 18px;
  padding: 32px 28px;
  text-align: center;
  font-family: 'Prompt';
}
.app-crash__title {
  font-size: 18px;
  font-weight: 700;
  color: #003765;
  margin-top: 14px;
}
.app-crash__desc {
  font-size: 14px;
  color: #5C6B79;
  margin-top: 6px;
}
.app-crash__actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 22px;
}
.app-crash__btn {
  height: 40px;
  border-radius: 12px;
  border: 1px solid #E3EAF1;
  background: #fff;
  color: #003765;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  font-family: 'Prompt';
  transition: background-color .15s;
}
.app-crash__btn:hover {
  background: #F3F7FA;
}
.app-crash__btn--primary {
  background: #003765;
  border-color: #003765;
  color: #fff;
}
.app-crash__btn--primary:hover {
  background: #00294d;
}
</style>
