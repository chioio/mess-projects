<template>
  <div class="home">
    <Header />
    <LeftAside />
    <RightAside />
    <Main />
  </div>
</template>

<script>
import Header from '@/components/Header'
import LeftAside from '@/components/LeftAside'
import Main from '@/components/Main'
import RightAside from '@/components/RightAside'

export default {
  name: 'Home',
  components: {
    Header,
    LeftAside,
    Main,
    RightAside
  }
}
</script>

<style lang="scss" scoped></style>
