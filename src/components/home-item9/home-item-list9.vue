<template>
  <div class="home-item-list9">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="infos">
        <div class="summary">{{itemData.summaryText}}</div>
        <div class="name">{{itemData.houseName}}</div>
        <div class="price">
          <van-rate :model-value="Number(itemData.commentScore)" color="#ff9854" size="15px" readonly allow-half />
          <div class="new">￥{{itemData.finalPrice}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  itemData: {
    type:Object,
    default:() =>{}
  }
})

const itemClick = () =>{
  console.log(props.itemData.houseId)
}
</script>

<style lang="less" scoped>
.home-item-list9 {
  width: 50%;
  .item-inner{
    position: relative;
    margin: 5px;
    overflow: hidden;
    border-radius: 6px;
    color: #fff;
    .cover {
      img {
        width: 100%;
        // height: 100%;
      }
    }
    .infos {
      position: absolute;
      bottom: 0;
      margin: 0 5px;
      .name {
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

      }
      .price {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        font-size: 12px;
        padding: 0 5px;

    }
    }
  }
}
</style>