<template>
  <div class="detail-map">
    <detail-section title="位置周边" more-text="查看更多周边信息">
      <div class="baidu" ref="mapRef"></div>
    </detail-section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import detailSection from '@/components/detail-section/detail-section.vue'
// 接收经纬度
const props = defineProps({
  position: {
    type: Object,
    default: () => ({})
  }
})

const mapRef = ref()
onMounted(() => {
  const map = new BMapGL.Map(mapRef.value);          // 创建地图实例 
  const point = new BMapGL.Point(props.position.longitude, props.position.latitude);  // 创建点坐标 108.03, 30.29
  map.centerAndZoom(point, 10);                 // 初始化地图
  const marker = new BMapGL.Marker(point);        // 创建标注   
  map.addOverlay(marker);                     // 将标注添加到地图中
  // map.setMapType(BMAP_EARTH_MAP);   
})
</script>

<style lang="less" scoped>
.baidu {
  height: 300px;
}
</style>