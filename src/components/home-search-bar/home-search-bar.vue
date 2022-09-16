<template>
  <div class="search">
    <div class="select-time">
      <div class="item">
        <div class="start">
          <div class="name">住</div>
          <div class="date">{{startDateStr}}</div>
        </div>
        <div class="end">
          <div class="name">离</div>
          <div class="date">{{endDateStr}}</div>
        </div>
      </div>
      <div class="content">
        <div class="keyworld">关键字/位置/民宿</div>
      </div>
      <div class="right">
        <i></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import useMainStroe from '@/stores/modules/main';
import { formatMonthDay } from '@/utils/format_date';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const mainStroe = useMainStroe()
const { startDate, endDate }  = storeToRefs(mainStroe)
const startDateStr = computed(() =>formatMonthDay(startDate.value,"MM.DD"))
const endDateStr = computed(() =>formatMonthDay(endDate.value,"MM.DD"))


</script>

<style lang="less" scoped>
.search {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  z-index: 999;
  padding: 10px;
  background-color: #fff;

  .select-time {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgb(246, 244, 244);
    border-radius: 10px;

    .item {
      display: flex;
      flex-direction: column;

      .start {
        display: flex;

        .name {
          color: #999;
          margin-right: 5px;
        }
      }

      .end {
        display: flex;

        .name {
          color: #999;
          margin-right: 5px;

        }
      }
    }

    .content {
      flex: 1;
      height: 50px;
      line-height: 50px;
      padding-left: 10px;
      font-size: 12px;
      color: #999;
    }

    .right {
      line-height: 30px;
      width: 30px;
      height: 30px;
      padding-right: 5px;
      i {
        text-align: center;
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(@/assets/img/home/home-sprite.png) -15px -358px;
        background-size: 130px 130px;
      }
    }
  }
}
</style>