<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default{
  data(){

  }
}
</script>

<style>
body{
  height: 100vh;
}
#app {
  font-family: 'Prompt';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #003765;
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
</style>
