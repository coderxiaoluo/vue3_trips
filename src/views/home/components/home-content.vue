<template>
  <div class="home-content">
    <div class="content">
      <h2 class="title">热门精选</h2>
      <div class="list" >
        <template v-for="(item, index) in  houselist" :key="index">
         <home-item-list9 v-if="item.discoveryContentType == 9" :item-data="item.data" @click="itemClick(item.data)"></home-item-list9>
         <home-item-list3 v-else-if="item.discoveryContentType === 3" :item-data="item.data" @click="itemClick(item.data)"></home-item-list3>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
  import HomeItemList9 from "@/components/home-item9/home-item-list9.vue"
  import HomeItemList3 from "@/components/home-item3/home-item-list3.vue"
  import { useRouter } from "vue-router";
import  useHomeStore  from "@/stores/modules/home"
import { storeToRefs } from "pinia";
const homeStore = useHomeStore()
const { houselist } = storeToRefs(homeStore)

const router = useRouter()
// 点击跳转
const itemClick = (item) =>{
  // console.log(item.houseId)
  router.push('/detail/'+ item.houseId)
}
</script>

<style lang="less" scoped>
  .home-content {
    margin-bottom: 50px;
    .content {
    padding: 5px 10px;
    .title {
      margin: 10px 0;
    }

    .list {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      font-size: 12px;
      height: 100%;
    }
    
  }
  }

</style>