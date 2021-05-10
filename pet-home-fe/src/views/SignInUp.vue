<template>
  <div class="sign-view">
    <Logo class="logo" />
    <SignInForm v-if="$route.path === '/sign-in'" />
    <SignUpForm v-if="$route.path === '/sign-up'" />
  </div>
</template>

<script>
import Logo from '@/components/Header/Logo'
import SignInForm from '@/components/Sign/SignInForm'
import SignUpForm from '@/components/Sign/SignUpForm'

export default {
  name: 'Home',
  components: {
    Logo,
    SignInForm,
    SignUpForm
  },
  methods: {
    exitLogin() {
      this.$store.commit('handleSignInFormDisplay')
    }
  }
}
</script>

<style lang="scss" scoped>
.sign-view {
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  right: 0;
  /* background-size: cover; */
  background-color: #444444;
  background: url('~@/assets/image/sign-bg.webp') no-repeat,
    url('~@/assets/image/bg-main.png') no-repeat, #444;
  background-size: auto 100%, cover;
  .logo {
    height: 120px;
    position: absolute;
    top: 10px;
    left: 60px;
    /deep/ {
      img {
        width: 60px;
        height: 60px;
      }
      h1 {
        font-size: 2rem;
      }
    }
  }
}
</style>
