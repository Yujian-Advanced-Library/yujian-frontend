<script setup>
import PageHeader from "./components/common/PageHeader.vue";
import PageFooter from "./components/common/PageFooter.vue";
</script>

<template>
  <div class="flex flex-col w-screen h-screen bg-white">
    <PageHeader class="w-full border-b border-gray-300"/>
    <RouterView class="flex-grow"/>
    <PageFooter class="w-full border-t border-gray-300"/>
  </div>
</template>
