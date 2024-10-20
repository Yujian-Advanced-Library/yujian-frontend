<script setup>
import LoginBody from './LoginBody.vue'
import PageHeader from '../common/PageHeader.vue'
import PageFooter from '../common/PageFooter.vue'
</script>

<template>
  <div class="w-screen h-screen bg-white">
    <PageHeader class="fixed w-full top-0"/>
    <LoginBody class="h-full" />
    <PageFooter class="flex-shrink-0 fixed w-full bottom-0 "/>
  </div>
</template>