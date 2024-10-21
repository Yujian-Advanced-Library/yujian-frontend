<script setup>
import PageIndex from "@/components/common/PageIndex.vue";
import RatingStar from "@/components/common/RatingStar.vue";
import SubmitButton from "@/components/common/SubmitButton.vue";

// const stars = document.querySelectorAll('#rating button');
//
// stars.forEach((star, index) => {
//   star.addEventListener('mouseover', () => {
//     stars.forEach((s, i) => {
//       if (i <= index) {
//         s.classList.add('text-yellow-500');
//       } else {
//         s.classList.remove('text-yellow-500');
//       }
//     });
//   });
//
//   star.addEventListener('mouseout', () => {
//     stars.forEach((s, i) => {
//       s.classList.remove('text-yellow-500');
//     });
//   });
//
//   star.addEventListener('click', () => {
//     stars.forEach((s, i) => {
//       if (i <= index) {
//         s.classList.add('text-yellow-500');
//       } else {
//         s.classList.remove('text-yellow-500');
//       }
//     });
//   });
// });
</script>

<template>

  <div class="mt-10 w-1/2 flex flex-col">

    <!-- 标题    -->
    <div class="flex flex-row">
      <span class="font-bold text-green-500 text-lg basis-3/4">短评 &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·</span>
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

    <div class="border-t w-1/2 pt-2 flex flex-col">
      <textarea
          class=" mt-1 px-3 py-2 text-base text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
          placeholder="请输入您的书评..."
          rows="3"
      ></textarea>
      <div class="grid grid-cols-8">
        <div class="col-span-6 flex flex-row">
          <span class="text-lg">您的评价是:</span>
          <RatingStar/>
        </div>
        <div class="col-span-2 flex flex-row-reverse">
          <SubmitButton/>
        </div>
      </div>

    </div>


  </div>


</template>

<style scoped>

</style>