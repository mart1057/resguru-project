<template>
  <div id="app">
    <div v-if="$store.state.login">
      <Toolbar v-if="$store.state.main == true" />
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

  }
}
</script>

<style>
body {
  height: 100vh;
  /* overflow: hidden !important; Hide scrollbars */
}

#app {

  font-family: 'Prompt';
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
[type=password] {
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

/* input[type="month"]::-webkit-inner-spin-button,
input[type="month"]::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
} */
input[type='month']::-webkit-calendar-picker-indicator {
     color: rgba(0, 0, 0, 0);
    opacity: 1;
    display: block;
    background: url(https://img.icons8.com/ios-filled/15/FFFFFF/calendar--v1.png) no-repeat;
    width: 20px;
    margin-top: 6px;
    cursor: pointer;
    height: 20px;
    border-width: thin;
 
}
</style>
