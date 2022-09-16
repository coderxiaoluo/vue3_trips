<template>
  <div class="search-box">
    <!-- 位置 -->
    <div class="location bottom-gray-line">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 日期 -->
    <div class="date-range  bottom-gray-line" @click="showCalendar = true">
      <div class="start">
        <span class="txt">入住</span>
        <span>{{startDateStr}}</span>
      </div>
      <div class="stay"><span class="txt">共 {{stayCount}} 晚</span></div>
      <div class="end">
        <span class="txt">离店</span>
        <span>{{endDateStr}}</span>
      </div>
    </div>
    <!-- 日期选择 -->
    <van-calendar v-model:show="showCalendar" :round="false" type="range" color="#ff9854" @confirm="onConfirm" />

    <!-- 价格/人数 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

    <!-- 热门推荐 -->
    <div class="hot-suggest">
      <template v-for="(item,index) in hotSuggests " :key="index">
        <div class="item" :style="{color:item.tagText.color,background:item.tagText.background.color}">
          {{item.tagText.text}}</div>
      </template>
    </div>
    <!-- btn -->
    <div class="search-btn">
      <div class="btn" @click="searchBtnClick">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useCityStore from "@/stores/modules/city"
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import useHomeStore from "@/stores/modules/home"
import { formatMonthDay, getDiffDays } from "@/utils/format_date"
import useMainStroe from '@/stores/modules/main';
import { computed } from 'vue';

const router = useRouter()

// props
// defineProps({
//   hotSuggests: {
//     type: Array,
//     defalut: () => []
//   }
// })

// 城市点击
const cityClick = () => {
  router.push('/city')
}

const positionClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log(res)
  }, err => {
  })
}

// 当前城市
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

// 日期
// const nowDate = new Date()
// const newDate = new Date()
// newDate.setDate(nowDate.getDate() + 1)
const mainStroe = useMainStroe()

const { startDate, endDate} = storeToRefs(mainStroe)
 
const startDateStr = computed(() =>formatMonthDay(startDate.value))
const endDateStr = computed(() =>formatMonthDay(endDate.value))
const stayCount = ref(getDiffDays(startDate.value, endDate.value))

// 日历选择
const showCalendar = ref(false)

const onConfirm = (value) => {
  const selectStartDate = value[0]
  const selectEndDate = value[1]
  mainStroe.startDate = selectStartDate
  mainStroe.endDate = selectEndDate
  stayCount.value = getDiffDays(selectStartDate, selectEndDate)
  showCalendar.value = false
}

// 获取数据
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)

// btn
const searchBtnClick = () =>{
  router.push({
    path:'/search',
    query:{
      startDate:startDate.value,
      endDate:endDate.value,
      currentCity:currentCity.value.cityName
    }
  })

}
</script>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;

  // 选择城市 
  .location {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 30px;

    .city {
      flex: 1;
    }

    .position {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #999;

      img {
        margin-left: 5px;
        width: 18px;
        height: 18px;
      }
    }
  }

  // 日期
  .date-range {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    margin: 5px 0;

    .start {
      display: flex;
      flex-direction: column;

      .txt {
        font-size: 12px;
        color: #999;
      }
    }

    .stay {
      .txt {
        font-size: 12px;
        color: rgb(97, 95, 95);
      }
    }

    .end {
      display: flex;
      flex-direction: column;
      padding-right: 10px;

      .txt {
        font-size: 12px;
        color: #999;
      }
    }
  }

  .section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25px;
    padding: 5px 20px;
    font-size: 12px;
    color: #999;

    .end {
      padding-right: 10px;
    }
  }

  .hot-suggest {
    height: 100px;
    padding: 0 20px;

    .item {
      float: left;
      padding: 5px 5px;
      border-radius: 14px;
      margin: 1px;
    }
  }

  // btn
  .search-btn {
    margin: 5px 20px;
    .btn {
      width:100%;
      height: 38px;
      border-radius: 20px;
      font-weight: 500;
      text-align: center;
      line-height: 38px;
      color: #fff;
      background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
    }
  }

}
</style>