<template>
  <div class="home-bar">
    <div class="nav-bar">
      <img src="https://pinia.web3doc.top/logo.svg" alt="">
      <div class="title">菠萝旅途</div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.home-bar {
  .nav-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
    border-bottom: 1px solid rgb(178, 178, 178);
    cursor: pointer;

    img {
      float: left;
      width: 25px;
      height: 25px;
    }

    .title {
      font-size: 18px;
      font-weight: 500;
      color: var(--primary-color);
    }
  }
}
</style>