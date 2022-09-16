<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList" >
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(item2,index) in currentGrop.hotCities" :key="index">
          <div class="city-item" @click="cityClick(item2)">{{item2.cityName}}</div>
        </template>
      </div>


      <template v-for="(item,index) in currentGrop.cities" :key="index">
        <van-index-anchor :index="item.group" />
        <template v-for="(t,i) in item.cities" :key="i">
          <van-cell :title="t.cityName" @click="cityClick(t)"/>
        </template>
      </template>
    </van-index-bar>


    <!-- <template v-for="(item,index) in currentGrop.cities" :key="index">
      <div class="grop-item">
        <h3> {{item.group}}</h3>

        <div class="list">
          <template v-for="(t,i) in item.cities" :key="i">
            <div>{{t.cityName}}</div>
          </template>
        </div>
      </div>
    </template> -->
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRouter } from 'vue-router';
  import  useCityStore from "@/stores/modules/city.js"
const props = defineProps({
  currentGrop: {
    type: Object,
    default: () => ({})
  }
})
const indexList = computed(() =>{
 const list =  props.currentGrop.cities.map(item => item.group)
 list.unshift("#")
 return list
})

// 点击城市
const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) =>{
  cityStore.currentCity = city
  router.back()
}
</script>

<style lang="less" scoped>
:deep(.van-index-anchor--sticky) {
  margin-top: -1px;
}

.list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;

  .city-item {
    width: 70px;
    height: 28px;
    line-height: 28px;
    border-radius: 14px;
    background-color: #fff4ec;
    margin: 6px;
    font-size: 12px;
  }
}

</style>