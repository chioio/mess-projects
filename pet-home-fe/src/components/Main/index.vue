<template>
  <main>
    <div class="page-title">待领养</div>
    <div class="pets">
      <div
        class="pet"
        @click="handleClick(pet.id)"
        v-for="(pet, index) in $store.state.pets"
        :key="index"
      >
        <img :src="pet.pic_url" :alt="pet.category + ' ' + pet.name" />
        <div class="pet-info" :style="randomRgb()">
          <div class="name">{{ pet.name }}</div>
          <div class="subinfo">
            <span>&emsp;{{ pet.gender === 0 ? '♂' : '♀' }}</span>
            <span>{{ pet.age }}&nbsp;岁</span>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="view" @click="$store.state.selectedPet = null"></div> -->
  </main>
</template>

<script>
import { mapActions } from 'vuex'
import { fetchPets } from '@/api/pet'
import { ElMessage } from 'element-plus'

export default {
  name: 'Main',
  data() {
    return {}
  },
  mounted() {
    this._fetchPets()
  },
  methods: {
    handleClick(id) {
      this.$store.state.isLeftAsideShow = !true
      this.$store.state.selectedPet = this.$store.state.pets.find(
        (pet) => pet.id === id
      )
      this.fetchComments()
    },
    randomRgb() {
      let R = Math.floor(Math.random() * 255)
      let G = Math.floor(Math.random() * 255)
      let B = Math.floor(Math.random() * 255)
      return {
        backgroundColor: 'rgba(' + R + ',' + G + ',' + B + ',1)'
      }
    },
    fetchComments() {
      this.$axios
        .get(`/comment/comments?petId=${this.$store.state.selectedPet.id}`)
        .then((res) => {
          if (res.data.code === 200) {
            console.log(res.data)
            this.$store.state.comments = res.data.data
          } else {
            ElMessage.error('获取数据失败!')
          }
        })
    },
    _fetchPets() {
      fetchPets().then((res) => {
        if (res.data.code === 200) {
          console.log(res.data.data)
          this.$store.dispatch('setPetsState', res.data.data)
        } else console.log('Error get pets!')
      })
    },

    ...mapActions(['setPetsState'])
  }
}
</script>

<style lang="scss" scoped>
main {
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 5rem;
  background-color: #3c3e41;
  background-image: url('~@/assets/image/bg-main.png');
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  .page-title {
    font-size: 4rem;
    font-family: 'Yuanti SC', sans-serif;
    font-weight: 900;
  }
  .view {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
}
.pets {
  height: 100%;
  margin: 2.5rem 1rem;
  overflow: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  .pet {
    position: relative;
    display: inline-block;
    width: 220px;
    height: 250px;
    border-radius: 0.8rem;
    margin: 0.5rem;
    overflow: hidden;
    z-index: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin: 0 auto;
      /* transform: translateX(-25%); */
    }
    .pet-info {
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 220px;
      height: 80px;
      color: #fff;
      padding: 0.5rem 1.4rem 0.8rem 1.4rem;
      box-sizing: border-box;
      border-top-left-radius: 100%;
      box-shadow: inset 5px 10px 35px #00000060;
      .name {
        font-size: 2rem;
        font-family: 'Marker Felt', 'Yuanti SC', sans-serif;
        font-weight: bolder;
        line-height: 2rem;
        cursor: default;
      }
      .subinfo {
        font-family: Arial, Helvetica, sans-serif;
        user-select: none;
        & > span {
          &:first-child {
            float: right;
          }
          &:last-child {
            float: right;
          }
        }
      }
    }
  }
}
</style>
