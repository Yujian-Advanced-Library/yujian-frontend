<script setup>
import PageIndex from "@/components/common/PageIndex.vue";
import RatingStar from "@/components/common/RatingStar.vue";
import SubmitButton from "@/components/common/SubmitButton.vue";
import {ref} from "vue";

// 评论内容控制
const reviewText = ref('');


// todo 添加提交书评的逻辑，例如发送到服务器
const submitReview = (reviewText) => {
  alert('提交: ' + reviewText);
};


</script>

<template>

  <div class="w-1/2 flex flex-col">
    <!-- 标题    -->
    <div class="flex flex-row">
      <div class="text-lg basis-3/4 flex flex-row">
        <h2 class="font-bold text-green-500 ">
          短评 &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
        </h2>
        <div class="ml-2.5 italic text-blue-400">(65条短评)</div>
      </div>
      <!--分页-->
      <PageIndex/>
    </div>

    <!--短评-->
    <ul class="mt-2">
      <li class="flex flex-col border-t p-1">
        <div class="flex flex-row">
          <div class="basis-3/4 flex flex-row">
            <a class="text-blue-500 italic" href="用户空间">用户名1</a>
            <span class="ml-2 text-yellow-400 font-bold">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span class="ml-1.5 p-0.5 text-gray-500 text-sm">2024-01-01 12:00:00</span>
          </div>
          <div class="basis-1/4 flex flex-row-reverse">
            <button class="text-green-700">点赞 (10)</button>
          </div>
        </div>
        <div>
          短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短
        </div>
      </li>
      <br>

      <li class="flex flex-col border-t p-1">
        <div class="flex flex-row">
          <div class="basis-3/4 flex flex-row">
            <a class="text-blue-500 italic" href="用户空间">用户名2</a>
            <span class="ml-2 text-yellow-400 font-bold">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span class="ml-1.5 p-0.5 text-gray-500 text-sm">2024-01-01 12:00:00</span>
          </div>
          <div class="basis-1/4 flex flex-row-reverse">
            <button class="text-green-700">点赞 (10)</button>
          </div>
        </div>
        <p>
          短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短评内容短
        </p>
      </li>
      <br>
    </ul>

    <div class="w-1/2 pt-2 flex flex-col">
      <textarea
          v-model="reviewText"
          class=" mt-1 px-3 py-2 text-base text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
          placeholder="请输入您的书评..."
          rows="3"
      ></textarea>
      <div class="grid grid-cols-8">
        <div class="col-span-6 flex flex-row">
          <span class="text-lg mr-1">您的评价是:</span>
          <RatingStar/>
        </div>
        <div class="col-span-2 mt-1 flex flex-row-reverse">
          <SubmitButton :review-text="reviewText" @submit="submitReview"/>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>