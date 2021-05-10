<template>
  <div class="logo" @click="handleClick">
    <img
      src="@/assets/logo-light.png"
      width="45"
      height="45"
      alt="Pet Home Logo"
    />
    <h1>Pet Home</h1>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  methods: {
    handleClick() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  height: 100%;
  user-select: none;
  h1 {
    display: inline;
    margin: 0 0.5rem;
    font-family: 'SF Compact Rounded', 'GB18030 Bitmap';
    font-weight: 900;
    font-size: 1.2rem;
    color: #fff;
  }
}
</style>
