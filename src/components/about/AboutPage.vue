<script setup>
import AboutNav from "@/components/about/VerticalNav.vue";
</script>

<template>
  <div class="flex flex-row">
    <AboutNav/>
    <div id="route">
      <!-- 随着路由而变化-->
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

</style>