<template>
  <aside
    v-if="$store.state.selectedPet !== null && !$store.state.isLeftAsideShow"
  >
    <div class="info-head">
      <img :src="$store.state.selectedPet.pic_url" alt="" />
      <h1 class="name">{{ $store.state.selectedPet.name }}</h1>
    </div>
    <div class="info">
      <div class="subinfo">
        <el-row>
          <el-col>
            <h3>上传人: {{ $store.state.selectedPet.uploader }}</h3>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <h3>年龄: {{ $store.state.selectedPet.age }}</h3>
          </el-col>
          <el-col :span="8">
            <h3>
              性别: {{ $store.state.selectedPet.gender === 0 ? '♂' : '♀' }}
            </h3>
          </el-col>
          <el-col :span="8">
            <h3>种类: {{ $store.state.selectedPet.category }}</h3>
          </el-col>
        </el-row>
      </div>
      <div class="desc">
        <h3>描述</h3>
        <p>{{ $store.state.selectedPet.description }}</p>
      </div>
      <div class="comments">
        <h3>评论</h3>
      </div>
    </div>
    <el-row type="flex" justify="space-around" class="feats">
      <el-col :span="8" class="feat-btn">
        <el-button type="success" round>领养</el-button>
      </el-col>
      <el-col :span="8" class="feat-btn">
        <el-button type="primary" round>评论</el-button>
      </el-col>
    </el-row>
  </aside>
</template>

<script>
export default {
  name: 'RightAside',
  data() {
    return { comments: [] }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  float: right;
  min-width: 400px;
  width: 530px;
  height: 100%;
  background-color: #2c2828;
  background-image: url('~@/assets/image/info-bg.png');
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 40%;
  z-index: 2;
  box-sizing: border-box;
  color: #e7dada;
  .info-head {
    position: relative;
    width: 100%;
    height: 35vh;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
      border-bottom-left-radius: 80%;
      box-shadow: -5px 10px 20px 10px #191818;
    }
    .name {
      position: absolute;
      bottom: 20px;
      left: 35px;
      display: block;
      margin: 1rem 0;
      font-size: 4rem;
      font-family: 'Marker Felt', 'Yuanti SC', sans-serif;
      font-weight: bolder;
    }
  }
  .info {
    position: relative;
    top: -30px;
    font-family: 'Yuanti SC', sans-serif;
    padding: 1.5rem 2rem;
    height: 45vh;
    overflow: scroll;
    .subinfo {
      padding: 0 2rem;
    }
  }
  .feats {
    height: 10vh;
    /* margin: 0 auto; */
    .feat-btn {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
