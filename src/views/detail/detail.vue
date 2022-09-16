<template>
  <div class="detail" ref="detailRef">
    <!-- tab-control -->
    <tab-control
      v-if="showTabControl"
      class="tabs"
      :titles="names"
      @tabItemClick="tabClick"
      ref="tabControlRef"
    />

    <van-nav-bar title="房屋详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- 轮播图 swiper -->
    <div class="main" v-if="mainPart" >
      <detail-swiper :swiper-data="mainPart.topModule.housePicture.housePics"></detail-swiper>
      <detail-infos name="描述" :ref="getSectionRef" :top-infos="mainPart.topModule"/>
      <detail-facility name="设施" :ref="getSectionRef" :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
      <detail-landlord name="房东" :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule"/>
      <detail-comment name="评论" :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule"/>
      <detail-notice name="须知" :ref="getSectionRef" :order-rules="mainPart.dynamicModule.rulesModule.orderRules"/>
      <detail-map name="周边" :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule"/>
      <detail-intro :price-intro="mainPart.introductionModule"/>
    </div>
    <div class="footer" >
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">我只是个送外卖的，拿什么留住你!</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useRoute, useRouter } from 'vue-router';
import { getDateilInfos } from "@/service"
import useScoll from "@/hooks/useScoll"

import TabControl from "@/components/tab-control/tab-control.vue"
import DetailSwiper from "./components/detail-swiper.vue"
import DetailInfos from "./components/detail-infos.vue"
import DetailFacility from "./components/detail-facility.vue"
import DetailLandlord from "./components/detail-landlord.vue"
import DetailComment from "./components/detail-comment.vue"
import DetailNotice from "./components/detail-notice.vue"
import DetailMap from "./components/detail-map.vue"
import DetailIntro from "./components/detail-intro.vue"

const route = useRoute()
const router = useRouter()
const houseId = route.params.id

const onClickLeft = () => router.back()

// 发送网络请求
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)
getDateilInfos(houseId).then(res => {
  detailInfos.value = res.data
})

// tabControl相关的操作
const detailRef = ref()
const { scrollTop } = useScoll(detailRef)
const showTabControl = computed(() => {
  return scrollTop.value >= 300
})

// const landlordRef = ref()
// const sectionEls = []
// const getSectionRef = (value) => {
//   sectionEls.push(value.$el)
// }
const sectionEls = ref({})
const names = computed(() => {
  return Object.keys(sectionEls.value)
})
const getSectionRef = (value) => {
  if (!value) return
  const name = value.$el.getAttribute("name")
  sectionEls.value[name] = value.$el
}

let isClick = false
let currentDistance = -1
const tabClick = (index) => {
  const key = Object.keys(sectionEls.value)[index]
  const el = sectionEls.value[key]
  let distance = el.offsetTop
  if (index !== 0) {
    distance = distance - 44
  }

  isClick = true
  currentDistance = distance

  detailRef.value.scrollTo({
    top: distance,
    behavior: "smooth"
  })
}

</script>

<style lang="less" scoped>
.detail {
  position: relative;
  height: 100vh;
  overflow-y: auto;
  background-color: #fff;
}


.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>