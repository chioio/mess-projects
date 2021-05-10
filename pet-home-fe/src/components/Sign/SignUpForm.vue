<template>
  <el-form ref="form" :model="form" :rules="rules" class="sign-form">
    <div class="form-items">
      <div class="basic-info">
        <el-form-item class="form-item" prop="realname">
          <el-input
            v-model="form.realname"
            placeholder="姓名"
            type="text"
            class="input-item"
          />
        </el-form-item>
        <el-form-item class="form-item" prop="nickname">
          <el-input
            v-model="form.nickname"
            placeholder="昵称"
            type="text"
            class="input-item"
          />
        </el-form-item>
        <el-form-item class="form-item" prop="age">
          <el-input
            v-model="form.age"
            placeholder="年龄"
            type="number"
            class="input-item"
          />
        </el-form-item>
        <el-form-item class="form-item" prop="gender">
          <el-select
            v-model="form.gender"
            placeholder="性别"
            class="select-item"
          >
            <el-option
              v-for="(item, index) in ['男', '女']"
              :key="index"
              :label="item"
              :value="index"
            />
          </el-select>
        </el-form-item>
        <el-form-item class="form-item" prop="phone">
          <el-input
            v-model="form.phone"
            placeholder="手机号"
            type="text"
            class="input-item"
          />
        </el-form-item>
        <el-form-item prop="email">
          <el-input
            v-model="form.email"
            placeholder="邮箱"
            type="text"
            class="input-item"
          />
        </el-form-item>
        <el-form-item prop="address">
          <el-input
            v-model="form.address"
            placeholder="地址"
            type="text"
            class="input-item"
          />
        </el-form-item>
      </div>
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
        />
      </el-form-item>
      <el-form-item prop="repassword">
        <el-input
          v-model="form.repassword"
          placeholder="确认密码"
          type="password"
          class="input-item"
        />
      </el-form-item>

      <el-form-item>
        <el-button class="submit" @click="onSubmit">注册</el-button>
      </el-form-item>
      <div class="link">
        <el-link href="/sign-in">已有账号？立即登陆。</el-link>
      </div>
    </div>
  </el-form>
</template>

<script>
import { ElMessage } from 'element-plus'
export default {
  name: 'SignUpForm',
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        username: null,
        password: null,
        repassword: null,
        realname: null,
        nickname: null,
        gender: null,
        age: null,
        phone: null,
        email: null,
        address: null
      },
      rules: {
        username: [
          { required: true, message: '⚠ 请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '⚠ 请输入密码', trigger: 'blur' }
        ],
        repassword: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        realname: [
          { required: true, message: '⚠ 请输入姓名', trigger: 'blur' }
        ],
        nickname: [
          { required: true, message: '⚠ 请输入别名', trigger: 'blur' }
        ],
        age: [{ required: true, message: '⚠ 请输入年龄', trigger: 'blur' }],
        gender: [{ required: true, message: '⚠ 请选择性别', tirgger: 'blur' }],
        email: [{ required: true, message: '⚠ 请输入邮箱', trigger: 'blue' }],
        phone: [
          { required: true, message: '⚠ 请输入手机号', trigger: 'blur' },
          { pattern: /[0-9]/, message: '⚠ 请输入正确手机号' }
        ],
        address: [
          {
            required: true,
            message: '⚠ 请输入住址',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          console.log(this.form)
          this.$axios
            .post('/user/sign-up', {
              username: this.form.username,
              password: this.form.password,
              realname: this.form.realname,
              nickname: this.form.nickname,
              gender: this.form.gender,
              age: this.form.age,
              phone: this.form.phone,
              email: this.form.email,
              address: this.form.address
            })
            .then((res) => {
              if (res.data.code === 200) {
                ElMessage.success({ message: '注册成功!', type: 'success' })
                this.$router.push('/sign-in')
              } else {
                ElMessage.error('错了哦，这是一条错误消息')
                console.log(res.data.message)
                return
              }
            })
            .catch(() => {
              ElMessage.error('服务器出错!')
            })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './form-basic.scss';

.sign-form {
  .basic-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: inherit;
    .form-item {
      width: 45%;
      .select-item {
        /deep/ .select-trigger > .el-input > .el-input__inner {
          font-size: 1.2rem;
          font-weight: 400;
          font-family: sans-serif;
          border: 2px #f3d4a9 solid;
          padding: 1.4rem 1.5rem;
          border-radius: 1rem;
          &:focus {
            color: $sign-btn-bg-color;
            border: 2px #303030 solid;
          }
        }
      }
    }
  }
}
</style>
