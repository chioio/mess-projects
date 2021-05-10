<template>
  <div class="user-feats">
    <div class="signed-feat" @click="toggleUser" v-if="$store.state.isSigned">
      <span class="uname">
        {{ $store.state.user.nickname }}
      </span>
    </div>
    <div class="sign-btns" v-if="!$store.state.isSigned">
      <el-button @click.stop="signIn" class="feat-btn signin-btn" round>
        登陆
      </el-button>
      <el-button @click="signUp" class="feat-btn signup-btn" round>
        注册
      </el-button>
    </div>
    <ul class="user-selects" v-show="isToggled" @click.stop="selectsShow">
      <li @click="addPet">
        <span>上传动物</span>
      </li>
      <li>
        <span>我的发布</span>
      </li>
      <li>
        <span>我的领养</span>
      </li>
      <li>
        <span @click="signOut">登出</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'UserFeats',
  data() {
    return {
      isToggled: false
    }
  },
  mounted() {
    if (sessionStorage.getItem('token') !== null) {
      this.$store.state.isSigned = true
      console.log(this.$store.state.isSigned)
    }
  },
  methods: {
    addPet() {
      this.$store.state.isLeftAsideShow = !this.$store.state.isLeftAsideShow
      this.$store.state.isRightAsideShow = !this.$store.state.isRightAsideShow
    },
    toggleUser() {
      this.isToggled = !this.isToggled
    },
    selectsShow() {
      this.isToggled = !this.isToggled
    },
    signIn() {
      this.$router.push('/sign-in')
    },
    signUp() {
      this.$router.push('/sign-up')
    },
    signOut() {
      this.$store.dispatch('signOut')
    },
    ...mapActions(['signOut'])
  }
}
</script>

<style lang="scss" scoped>
.user-feats {
  position: relative;
  display: flex;
  align-items: center;
  float: right;
  .signed-feat {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    background: #458cf8;
    border: 2px solid #fff;
    text-align: center;
    padding: 0 0.8rem;
    border-radius: 20px;
    box-sizing: border-box;
    .uname {
      font-size: 1rem;
      font-family: 'PingFang SC';
      font-weight: 900;
      cursor: pointer;
      user-select: none;
    }
  }
  .user-selects {
    position: absolute;
    top: 30px;
    right: 0;
    width: 100px;
    list-style: none;
    padding: 0.5rem;
    background-color: #303030;
    border-radius: 15px;
    color: #bfbfbf;
    z-index: 99;
    &::before {
      position: absolute;
      display: block;
      content: '';
      width: 0;
      height: 0;
      top: -15px;
      left: 75px;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 15px solid #353535;
    }
    & > li {
      padding: 0.5rem 1rem;
      border-bottom: 1px solid #424141;
      &:hover {
        color: #fff;
        cursor: pointer;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
  .feat-btn {
    min-height: 0;
    padding: 0.5rem 1.4rem;
    font-weight: 400;
    font-size: 1rem;
    font-family: 'PingFang SC', sans-serif;
    border: none;
    &:active {
      transition: 0.5s ease;
      color: #ffa82f;
    }
  }
  .signin-btn {
    color: #fff;
    background-color: #ffa82f;
  }
  .signup-btn {
    color: #303030;
    background-color: #fff;
  }
}
</style>
