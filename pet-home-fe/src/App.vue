<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
html body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  position: fixed;
  width: 100vw;
  height: 100vh;
  color: #282a2c;
}
</style>
