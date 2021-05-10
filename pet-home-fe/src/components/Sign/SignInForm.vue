<template>
  <el-form ref="form" :model="form" :rules="rules" class="sign-form">
    <div class="form-items">
      <el-form-item prop="username">
        <el-input
          v-model="form.username"
          placeholder="用户名"
          class="input-item"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          placeholder="密码"
          type="password"
          class="input-item"
          @keyup.enter="onSubmit"
        />
      </el-form-item>
      <el-form-item>
        <el-button class="submit" @click="onSubmit">登陆</el-button>
      </el-form-item>
      <div class="note">
        <el-link href="/sign-up">还没有账号？创建一个。</el-link>
      </div>
    </div>
  </el-form>
</template>

<script>
import { mapActions } from 'vuex'
import { ElMessage } from 'element-plus'

export default {
  name: 'SignUpForm',
  data() {
    return {
      form: {
        username: null,
        password: null
      },
      rules: {
        username: [
          { required: true, message: '⚠ 请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '⚠ 请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    onSubmit() {
      if (this.form.username === null || this.form.password === null) {
        ElMessage.error('⚠ 表单不能为空!')
      }
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$axios
            .post('/user/sign-in', {
              username: this.form.username,
              password: this.form.password
            })
            .then((res) => {
              switch (res.data.code) {
                case 200:
                  this.$store.dispatch('signIn', res.data.data)
                  this.$router.push('/')
                  break
                // case 401:
                //   this.errorMsg = '⚠ ' + res.data.message
                //   break
                // case 400:
                //   this.errorMsg = '⚠ ' + res.data.message
                //   break
                default:
                  ElMessage.error('⚠ ' + res.data.message)
                  break
              }
            })
            .catch(() => {
              ElMessage.error('⚠ 系统出错!')
            })
        }
      })
    },
    ...mapActions(['signIn'])
  }
}
</script>

<style lang="scss" scoped>
@import './form-basic.scss';

.sign-form {
  .form-items {
    width: 100%;
    .input-item:nth-child(1) {
      margin-top: 1.5rem;
    }
  }
}
</style>
