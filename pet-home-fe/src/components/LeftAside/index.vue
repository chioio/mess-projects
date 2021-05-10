<template>
  <!--   -->
  <aside v-if="$store.state.isLeftAsideShow">
    <div class="title">上传动物</div>
    <el-form ref="form" :model="pet" :rules="rules" class="sign-form">
      <div class="form-items">
        <div class="basic-info">
          <div class="name-age">
            <el-form-item prop="name">
              <el-input
                v-model="pet.name"
                placeholder="宠物名"
                class="input-item"
              />
            </el-form-item>
            <el-form-item prop="age">
              <el-input
                v-model="pet.age"
                placeholder="宠物年龄"
                type="number"
                class="input-item"
              />
            </el-form-item>
            <el-form-item>
              <el-radio-group v-model="pet.gender" size="medium">
                <el-radio-button label="0">♂</el-radio-button>
                <el-radio-button label="1">♀</el-radio-button>
              </el-radio-group>
            </el-form-item>
          </div>
          <!-- 图片上传 -->
          <el-form-item porp="file">
            <el-upload
              ref="upload"
              action=""
              name="picture"
              class="file-upload"
              v-model="pet.picture"
              list-type="picture-card"
              :auto-upload="false"
              :show-file-list="false"
              :on-change="handlePicChange"
            >
              <img v-if="pet.picture" :src="pic_url" class="pet-pic" />
              <i v-else class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
        </div>
        <el-form-item prop="category">
          <el-select v-model="pet.category" placeholder="请选择分类">
            <el-option
              v-for="item in categories"
              :key="item.id"
              :label="item.label"
              :value="item.label"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="description">
          <el-input
            v-model="pet.description"
            placeholder="宠物描述"
            type="textarea"
            :rows="3"
            class="input-item"
          />
        </el-form-item>
        <el-form-item>
          <el-button class="submit" @click="onSubmit">上传</el-button>
        </el-form-item>
        <!-- <div class="note">
          <span class="msg" :stlye="(color = success ? '#27b3ff' : '#ff4f4f')">
            {{ msg }}
          </span>
        </div> -->
      </div>
    </el-form>
  </aside>
</template>

<script>
import { ElMessage } from 'element-plus'
export default {
  name: 'LeftAside',
  data() {
    return {
      pet: {
        name: null,
        age: null,
        gender: 0,
        category: null,
        picture: null,
        description: null
      },
      pic_rul: '',
      categories: [
        {
          id: 1,
          label: '狗'
        },
        {
          id: 2,
          label: '猫'
        },
        {
          id: 3,
          label: '鼠'
        },
        {
          id: 4,
          label: '鸟'
        },
        {
          id: 5,
          label: '其他'
        }
      ],
      ssg: '',
      // success: false,
      rules: {
        name: [{ required: true, message: '请输入动物名字', trigger: 'blur' }],
        age: [{ required: true, message: '请输入动物年龄', trigger: 'blur' }],
        file: [{ required: true, message: '请添加照片', trigger: 'blur' }],
        description: [
          { required: true, message: '请输入描述信息', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    isShow() {
      return this.$store.state.isSigned && this.$store.state.isLeftAsideShow
    }
  },
  methods: {
    onSubmit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.pet.picture === null) {
            ElMessage.error('请添加图片')
          } else {
            console.log(this.pet)
            let formData = new FormData()
            formData.append('name', this.pet.name)
            formData.append('age', this.pet.age)
            formData.append('gender', this.pet.gender)
            formData.append('category', this.pet.category)
            formData.append('picture', this.pet.picture)
            formData.append('description', this.pet.description)
            formData.append('uploader', this.$store.state.user.username)
            console.log(formData)
            this.$axios
              .post('/pet/add', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
              })
              .then((res) => {
                if (res.data.code === 200) {
                  ElMessage.success({
                    message: '添加成功!',
                    type: 'success'
                  })
                  // this.success = true
                  // this.msg = '添加成功!'
                } else {
                  ElMessage.error(res.data.message)
                }
                console.log(res.data)
              })
          }
        }
      })
    },
    handlePicChange(file) {
      const isJPG = file.raw.type === 'image/jpeg'
      const isPNG = file.raw.type === 'image/png'
      if (!isPNG && !isJPG) {
        ElMessage.error('图片格式有误（png/jpg[jpeg])')
        return false
      } else {
        this.pic_url = URL.createObjectURL(file.raw)
        this.pet.picture = file.raw
      }
    }
  }
}
</script>

<style lang="scss" scoped>
aside {
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100vh;
  padding: 2rem;
  overflow: scroll;
  background-color: #2b2a2c;
  z-index: 99;
  .title {
    font-size: 2rem;
    font-family: 'Yuanti SC', sans-serif;
    font-weight: bolder;
    color: #fff;
    margin: 2rem 0;
  }
  .form-items {
    :deep .el-input__inner {
      color: #efefef;
      background: #403f3f;
      border-width: 2px;
      border-color: #050505;
    }
    :deep .el-textarea__inner {
      color: #efefef;
      background: #403f3f;
      border-width: 2px;
      border-color: #050505;
    }
    :deep .el-radio-button__orig-radio:checked + .el-radio-button__inner {
      background-color: #409eff;
      border-width: 2px;
      border-color: #050505;
    }
    :deep .el-radio-button__inner {
      color: #efefef;
      background: #403f3f;
      border-width: 2px;
      border-color: #050505;
    }
    :deep .el-upload--picture-card {
      color: #efefef;
      background: #403f3f;
      border-width: 2px;
      border-color: #050505;
    }
    .basic-info {
      display: flex;
      justify-content: space-between;
      margin: 1.2rem 0;
      .name-age {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 48%;
      }
    }
    .file-upload {
      overflow: hidden;
      .pet-pic {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .submit {
      width: 100%;
      font-size: 1.5rem;
      font-family: 'Yuanti SC', Arial, Helvetica, sans-serif;
      background-color: #458cf8;
      box-shadow: 0 2px 10px #6c6c6c;
      color: #fff;
      margin-top: 1rem;
      border: 3px solid transparent;
      border-radius: 1rem;
      box-sizing: border-box;
      &:active {
        color: #303030;
        background-color: #ffffff;
        transition: 0.5s ease;
        border-color: #2c2c2c;
      }
    }
    .msg {
      color: #ff4f4f;
      font-family: 'Yuanti SC';
    }
  }
}
</style>
