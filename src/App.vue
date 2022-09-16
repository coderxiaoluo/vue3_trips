<template>
  <div class="app">
    <router-view></router-view>
    <tabbar v-if="!route.meta.hideTabBar"></tabbar>

    <!-- 加载 -->
    <loading></loading>
  </div>
</template>

<script setup>
import tabbar from './components/tabbar/tabbar.vue';
import loading from './components/loading/loading.vue';

import { useRoute } from 'vue-router';
const route = useRoute()




</script>

<style scoped>

</style>
