<template>
  <el-header class="app-header"> <Logo /> <UserFeats /></el-header>
</template>

<script>
import Logo from './Logo'
import UserFeats from './UserFeats'

export default {
  data() {
    return {}
  },
  components: {
    Logo,
    UserFeats
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #303030;
  padding: 0 2rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  z-index: 9;
}
</style>
