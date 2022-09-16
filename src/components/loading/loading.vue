<template>
  <div class="loading" v-if="isLoading" @click="loadingClick">
   <div class="bg">
    <img src="@/assets/img/home/full-screen-loading.gif" alt="">
    <span class="load"><span style="color: #ffa500;">小螺</span>正在加载...</span>
   </div>
  </div>
</template>

<script setup>
import useMainStroe from "@/stores/modules/main"
import { storeToRefs } from "pinia";
const mainStroe = useMainStroe()
const { isLoading } = storeToRefs( mainStroe)

const loadingClick = () => {
  isLoading.value = false
}

</script>

<style lang="less" scoped>
    .loading {
    position: fixed;
    z-index: 999;
    left: 0;
    padding: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin:  auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: rgba(0, 0, 0, .2);

    .bg {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      height: 110px;
      background: url(@/assets/img/home/loading-bg.png) 0 0 / 100%  100%;
      img {
        width:70px;
        height:70px;
        margin-bottom: 10px;
      }
      .load {
        position: absolute;
        bottom: 0px;
        color: #000;
      }
    }
  }
</style>