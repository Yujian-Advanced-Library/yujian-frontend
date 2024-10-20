<template>
  <header class="bg-amber-100">
    <nav class="shadow-md px-4 py-2 flex justify-between items-center">
      <!-- icon -->
      <div class="flex flex-col items-left">
        <h1 class="ml-2 text-3xl text-black font-bold">遇 “荐”</h1>
        <h2 class="ml-2 text-gray-500">图 书 馆 阅 读 互 动 平 台</h2>
      </div>

      <!-- 导航链接 -->
      <div class="flex items-center gap-4">

        <router-link class="text-gray-600 hover:text-blue-700" to="/">平台首页</router-link>
        <router-link class="text-gray-600 hover:text-blue-700" to="/forum">论坛</router-link>
      </div>

      <!-- 搜索框 -->
      <div class="flex items-center">
        <input class="border border-gray-300 rounded px-2 py-1 flex-1" placeholder="输入关键词搜索" type="text">
        <button
            class="bg-blue-500 text-white font-bold py-1 px-3 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2">
          查询
        </button>
      </div>

      <!-- 登录注册按钮 -->
      <div class="flex items-center gap-2">
        <router-link class="bg-orange-500 text-white font-bold py-1 px-3 rounded hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                     to="/login">
          登录
        </router-link>
        <router-link class=" bg-rose-100 text-black font-bold py-1 px-3 rounded hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                     to="/register">
          注册
        </router-link>
      </div>

    </nav>
  </header>
</template>