<template>
  <div class="tabbar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item,index) in tabberData" :key="index">
        <van-tabbar-item :to="item.path" icon="home-o">
          <!-- 具名插槽 -->
          <!-- <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetsURL(item.image)" :alt="item.text">
            <img v-else :src="getAssetsURL(item.imageActive)" :alt="item.text">
          </template> -->
          <span class="txt">{{item.text}}</span>
        </van-tabbar-item>
      </template>
    </van-tabbar>




    <!-- <template v-for="(item,index) in tabberData" :key="index">
      <div class="tab-bar-item" @click="itemClick(item,index)" :class="{active:currentIndex === index}">
         在webpack中直接用require 但是这里是 vite环境  -->

    <!--   <img v-if="currentIndex !== index" :src="getAssetsURL(item.image)" :alt="item.text">
        <img v-else :src="getAssetsURL(item.imageActive)" :alt="item.text">
        <span>{{ item.text }}</span>
      </div>
    </template> -->


  </div>
</template>
<script setup>
import { ref } from "vue";

// 获取本地数据
import tabberData from "@/assets/data/tabbar.js"
// 动态获取图片
import { getAssetsURL } from "@/utils/get_assets.js"

// import { useRouter } from "vue-router";

const currentIndex = ref(0)

// const router = useRouter()

// const itemClick = (item, index) => {
//   currentIndex.value = index
//   router.push(item.path)
// }

</script>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  text-align: center;
  background-color: #f3f3f3;
  border-top: 1px solid #999;

  // img {
  //   height: 28px;
  // }

  // .tab-bar-item {
  //   flex: 1;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;

  //   &.active {
  //     color: var(--primary-color);
  //   }

  //   img {
  //     width: 36px;
  //   }
  // .txt {
  //   font-size: 12px;
  //   color: #999;
  // }

  // }

// 穿透让子组件生效  修改第三方库的组件
  :deep(.van-tabbar-item__icon) {
    font-size: 28px;
  }
}
</style>