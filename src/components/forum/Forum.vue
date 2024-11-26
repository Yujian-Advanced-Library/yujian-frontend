<script setup>
import PageIndex from "@/components/common/PageIndex.vue";
</script>

<template>

  <div class="flex flex-row bg-gray-50">

    <!-- 左侧导航栏   -->
    <div class="fixed left-0 p-8">
      <div class="border p-8 h-full inline-flex flex-col gap-y-6">
        <div class="text-2xl font-bold">分类</div>
        <a href="#section1">人文社科</a>
        <a href="#section2">经济管理</a>
        <a href="#section3">科技科普</a>
        <a href="#section4">计算机与互联网</a>
        <a href="#section5">成功励志</a>
        <a href="#section6">生活</a>
        <a href="#section7">少儿</a>
        <a href="#section8">艺术设计</a>
        <a href="#section9">漫画绘本</a>
        <a href="#section10">教育考试</a>
        <a href="#section11">杂志</a>
        <a href="#section12">文学</a>
      </div>
    </div>


    <div class="mx-auto h-screen w-1/2 flex flex-col">
      <ul class="bg-white">
        <li class="flex flex-row gap-x-4">
          <img class="max-w-[100px] max-h-[150px]  aspect-[2/3] object-cover" src="/src/assets/cover1.jpg">
          <div class="flex-grow flex flex-col gap-y-2">
            <div class="text-lg font-bold">标题</div>
            <textarea class="truncate">简介</textarea>
            <div class="flex flex-row text-gray-500 ">
              <div class="w-1/12 bg-green-400">楼主</div>
              <div class="w-1/12 bg-yellow-300">时间</div>
              <div class="w-10/12 bg-blue-600">阅读</div>
            </div>
          </div>
        </li>
      </ul>

      <div class="pagination">
        <PageIndex/>
      </div>
    </div>


    <!-- 右侧导航栏   -->
    <div class="fixed right-0 inline-flex flex-col p-8">
      <!-- 发表 -->
      <a class="flex flex-row gap-x-2" href="#publish">
        <svg height="30" viewBox="0 0 100 100" width="30" xmlns="http://www.w3.org/2000/svg">
          <!-- 创建圆形，填充为黑色 -->
          <circle cx="50" cy="50" fill="black" r="45"/>

          <!-- 创建十字加号的垂直线，颜色为白色，宽度为8 -->
          <line stroke="white" stroke-width="8" x1="50" x2="50" y1="15" y2="85"/>

          <!-- 创建十字加号的水平线，颜色为白色，宽度为8 -->
          <line stroke="white" stroke-width="8" x1="15" x2="85" y1="50" y2="50"/>
        </svg>
        <span class="text-2xl text-amber-400 ">发表</span>
      </a>

      <div class="h-full mt-2">
        <div class="border p-8 flex flex-col gap-y-6">
          <div class="font-bold text-2xl">热门阅读</div>
          <div class="flex flex-row gap-1">
            <b class="text-yellow-400">1</b>
            <span class="text-gray-500">标题一标题一标题一</span>
          </div>
          <div class="flex flex-row gap-1">
            <b class="text-yellow-400">2</b>
            <p class="text-gray-500">标题一</p>
          </div>
          <div class="flex flex-row gap-1">
            <b class="text-yellow-400">3</b>
            <p class="text-gray-500">标题一</p>
          </div>
          <div class="flex flex-row gap-1">
            <b class="text-yellow-400">4</b>
            <p class="text-gray-500">标题一</p>
          </div>
          <div class="flex flex-row gap-1">
            <b class="text-yellow-400">5</b>
            <p class="text-gray-500">标题一</p>
          </div>
        </div>
      </div>
    </div>


  </div>

</template>


<style scoped>
/* 你可以在这里添加组件的样式 */

</style>