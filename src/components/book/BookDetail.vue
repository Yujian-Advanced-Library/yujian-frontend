<script setup>
import BookInfo from "@/components/book/BookInfo.vue";
import BookComment from "@/components/book/BookComment.vue";
</script>

<template>
  <div class="ml-10 mt-5">
    <!--书名-->
    <h1 class="font-bold text-3xl">以爱为名的支配</h1>
    <!-- 详细信息   -->
    <BookInfo/>
    <!-- 评论   -->
    <BookComment/>
  </div>

</template>

<style scoped>

</style>