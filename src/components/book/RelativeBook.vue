<script setup>
import {ref} from 'vue';

const imageUrl = ref('/src/assets/cover1.jpg');
</script>

<template>
  <div class="w-1/2 flex flex-col">
    <h2 class="text-lg font-bold text-green-500">相关书籍&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·</h2>
    <div class="mt-3 grid grid-cols-4 gap-4">
      <div v-for="index in 8" :key="index" class="flex flex-col items-center">
        <img :src="imageUrl" alt="Cover" class="max-w-[120px] max-h-[180px] object-cover"/>
        <a class=" text-blue-800 text-center py-1 w-full" href="###">
          背影
        </a>
      </div>
    </div>
  </div>

</template>


<style scoped>
/* 你可以在这里添加一些样式 */
</style>