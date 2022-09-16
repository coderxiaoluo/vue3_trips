<template>
  <div class="detail-swiper">
    <!-- 轮播图 swiper -->
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="#ff9854">
      <template v-for="(item, index) in swiperData" :key="index">
        <van-swipe-item>
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>

      <template #indicator="{ active }">
        <!-- <div class="custom-indicator">{{props.active}}</div> -->
        <div class="indicator">
          <template v-for="(value,key ,index) in swiperGroup" :key="key">
            <span class="item" :class="{ active: swiperData[active]?.enumPictureCategory== key }">
              {{ value[0].title }}
            </span>

              <span class="count" v-if="swiperData[active]?.enumPictureCategory == key">
                {{ getCategoryIndex(swiperData[active]) }}/{{ value.length }}
              </span>
          </template>
        </div>

      </template>
    </van-swipe>
  </div>
</template>

<script setup>
const props = defineProps({
  swiperData: {
    type: Array,
    default: () => []
  }
})
const swiperGroup = {}

for (const item of props.swiperData) {
  let valueArray = swiperGroup[item.enumPictureCategory]
  if (!valueArray) {
    valueArray = []
    swiperGroup[item.enumPictureCategory] = valueArray
  }
  valueArray.push(item)
}

const getCategoryIndex = (item) => {
  const valueArray = swiperGroup[item.enumPictureCategory]
  return valueArray.findIndex(data => data === item) + 1
}
</script>

<style lang="less" scoped>
.swipe-list {
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;

    img {
      width: 100%;
      height: 200px;

    }
  }

  .indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
     .item {
      &.active {
        padding: 0 3px;
        margin: 0 3px;
        background-color: #fff;
        color: rgb(0, 0, 0);
    border-radius: 15px;

      }
     }
  }


}
</style>