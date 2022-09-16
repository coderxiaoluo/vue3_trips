<template>
  <div class="city top-page">
    <div class="top">
      <van-search 
      v-model="value" 
      shape="round" 
      placeholder="城市/区域/位置" 
      show-action 
      autofocus 
      @cancel="cancelClick" 
      />

    <van-tabs v-model:active="tabActive" line-width="50px">
      <template v-for="(value,key,index) in allCitys" :key="index">
        <van-tab :title="value.title" :name="key">
        </van-tab>
      </template>
    </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allCitys">
        <city-group-item v-show="tabActive === key" :current-grop="value"></city-group-item>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref,computed } from 'vue'
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia'; 

import cityGroupItem from './components/city-group-item.vue';

const value = ref('')
const router = useRouter()

// 取消按钮
const cancelClick = () => {
  // router.replace('/home')
  router.back()
}

const tabActive = ref()

//网络请求尽量在stores里面管理
// const allCity = ref({})
// getCityAll().then(res =>{
//   allCity.value = res.data
//   console.log(allCity)
// })

// 调用这个函数
const cityStore = useCityStore()
// 调用action里面的方法发送网络请求
cityStore.fetchAllCitysData()
// 并赋值
const { allCitys } = storeToRefs(cityStore)

const currentGrop  = computed(() =>allCitys.value[tabActive.value])

</script>

<style lang="less" scoped>
:deep(.van-field__left-icon) {
  color: var(--primary-color);
}

:deep(.van-tabs__line) {
  background: var(--primary-color);


}

.city {
  --van-tabs-line-height: 30px;

  // .top {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  // }
  // .content {
  //   margin-top: 98px;
  // }

  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>