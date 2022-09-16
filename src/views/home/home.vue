<template>
  <div class="home">
    <!-- 头部 -->
    <home-nav-bar />
    <!-- 图片 -->
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <!-- 选择城市 -->
    <home-search-box />
    <!-- 列表 -->
    <home-categories />
    <!-- 内容 -->
    <!-- <div class="search-bar" v-if="isShowSearchBar">1223412321</div> -->
    <home-search-bar  v-if="isShowSearchBar" class="search-bar"></home-search-bar>
    <home-content />
  </div>

</template>

<script setup>
import { ref } from 'vue';
import { watch } from 'vue';
import { computed } from 'vue';
import HomeNavBar from './components/home-nav-bar.vue';
import HomeSearchBox from "./components/home-search-box.vue"
import HomeCategories from "./components/home-categories.vue"
import HomeContent from './components/home-content.vue';
import HomeSearchBar from "@/components/home-search-bar/home-search-bar.vue"
import useHomeStore from "@/stores/modules/home"
import useScoll from "@/hooks/useScoll"

 

// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesDate()
homeStore.fetchHouselistData()

// useScoll(() =>{
//   homeStore.fetchHouselistData()
// })

const { isReachBottom , scrollTop} = useScoll()

watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouselistData().then(() =>{
      isReachBottom.value = false
    })
  }
})
// const scrollListenerHandler = () => {
//   const clientHeight = document.documentElement.clientHeight
//   const scrollTop = document.documentElement.scrollTop
//   const scrollHeight = document.documentElement.scrollHeight
//   if ((clientHeight + scrollTop + 1) >= scrollHeight) {
//     homeStore.fetchHouselistData()
//   }
// }
// onMounted(() => {
//   window.addEventListener('scroll', scrollListenerHandler)
// })

// onUnmounted(() => {
//   window.removeEventListener('scroll', scrollListenerHandler)
// })

// import { getHot } from "@/service/modules/home"

// const hotSuggests = ref([])
// getHot().then(res =>{
//   hotSuggests.value = res.data
// })

// 搜索框显示
// const isShowSearchBar  = ref(false)
// watch(scrollTop,(newValue) =>{
//   isShowSearchBar.value = newValue > 100
// })

const isShowSearchBar = computed(() =>{
  return scrollTop.value >= 350
})

</script>

<style lang="less" scoped>
.home {

  .banner {
    img {
      width: 100%;
    }
  }


}
</style>