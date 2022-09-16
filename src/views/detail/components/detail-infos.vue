<template>
  <div class="detail-infos">
      <div class="name">{{topInfos.houseName}}</div>
      <div class="tags">
        <template v-for="(item, index) in topInfos.houseTags" :key="index">
          <span class="item" v-if="item.tagText" :style="{color:item.tagText.color,background:item.tagText.background.color}">
          {{item.tagText.text}}
        </span>
        </template>
      </div>
      <div class="comment">
        <div class="left">
          <span class="score">{{topInfos.commentBrief.overall}}</span>
          <span class="title">{{topInfos.commentBrief.scoreTitle}}</span>
          <span class="brief">{{topInfos.commentBrief.commentBrief}}</span>
        </div>
        <div class="right">
          <span class="count">
            {{topInfos.commentBrief.totalCount}}条评论
            <van-icon name="arrow" />
          </span>
        </div>
      </div>
      <div class="location">
          <div class="left">
            {{topInfos.nearByPosition.address}}
          </div>
          <div class="right">
            地图.周边
            <van-icon name="arrow" />
          </div>
        </div>
  </div>
</template>

<script setup>
  defineProps({
    topInfos:{
      type:Object,
      default:() =>({})
    }
  })
</script>

<style lang="less" scoped>
  .detail-infos {
    padding: 16px;
    background-color: #fff;
    .name {
      font-size: 20px;
      font-weight: 700;
      color: #333;
      text-align: justify;
      line-height: 24px;
      overflow: hidden;
      margin-bottom: 6px;
     
    }
    .tags {
        display: flex;
        justify-content: space-around;
        font-size: 12px;
        .item {
          padding: 0 5px;

        }
      }
      .comment {
        display: flex;
        align-items: center;
        padding: 10px 0;
        background-color: rgb(252, 252, 252);
        .left {
          .score {
            font-size: 18px;
            font-weight: 500;
          }
          .title {
            font-size: 14px;
          }
          .brief {
            font-size: 10px;
            color: #999;
          }
        }
        .right {
          flex: 1;
          text-align: right;
          font-size: 12px;
          color: rgb(255, 150, 69);
        }
      }
      .location {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0;
        .left {
          font-weight: 600;
        }
        .right  {
          font-size: 12px;
          color: rgb(255, 150, 69);
        }
      }
  }
</style>