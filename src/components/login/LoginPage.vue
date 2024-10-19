<script setup>
import LoginBody from './LoginBody.vue'
import LoginHeader from './LoginHeader.vue'
import LoginFooter  from './LoginFooter.vue'
</script>

<template>

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>遇"荐"</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>



  <div class="w-screen h-screen bg-white">
    <LoginHeader class="fixed w-full top-0" />
    <LoginBody class="h-full" />
    <LoginFooter class="flex-shrink-0 fixed w-full bottom-0 " />
  </div>


</template>