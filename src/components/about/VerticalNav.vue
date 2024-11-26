<template>
  <nav class="flex flex-col w-1/5 h-screen bg-white text-gray-800 p-4">
    <div class="mb-4">
      <router-link class="text-xl font-bold" to="/">关于我们</router-link>
    </div>
    <ul class="space-y-2">
      <li>
        <router-link class="block py-2 px-4 hover:bg-gray-200 rounded" to="/about/intro">团队简介</router-link>
      </li>
      <li>
        <router-link class="block py-2 px-4 hover:bg-gray-200 rounded" to="/about/contact">联系我们</router-link>
      </li>
      <li>
        <router-link class="block py-2 px-4 hover:bg-gray-200 rounded" to="/about/announcement">平台公告</router-link>
      </li>
      <li>
        <router-link class="block py-2 px-4 hover:bg-gray-200 rounded" to="/about/feedback">意见反馈</router-link>
      </li>
    </ul>
    <div class="border-t border-gray-300 my-2"></div> <!-- 添加横线 -->
    <div class="mb-4">
      <router-link class="text-xl font-bold" to="/about/help-center">帮助中心</router-link>
    </div>
    <ul class="space-y-2">
      <li>
        <router-link class="block py-2 px-4 hover:bg-gray-200 rounded" to="/about/faq">常见问题</router-link>
      </li>
      <li>
        <router-link class="block py-2 px-4 hover:bg-gray-200 rounded" to="/about/service-agreement">用户服务协议
        </router-link>
      </li>
      <li>
        <router-link class="block py-2 px-4 hover:bg-gray-200 rounded" to="/about/privacy">隐私政策</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>

</script>