<script setup>
import { ref } from 'vue';
// 定义响应式数据
const loginType = ref('account'); // 默认登录方式为账号登录
const account = ref('');
const password = ref('');
const phone = ref('');
const captcha = ref('');
const rememberMe = ref(false);

// 切换登录方式
const switchLoginType = (type) => {
    loginType.value = type;
};

// 处理登录
const handleLogin = () => {
    if (loginType.value === 'account') {
        // 账号登录逻辑
        console.log('账号登录:', account.value, password.value);
    } else if (loginType.value === 'captcha') {
        // 验证码登录逻辑
        console.log('验证码登录:', phone.value, captcha.value);
    }
};

// 获取验证码
const getCaptcha = () => {
    // 获取验证码逻辑
    console.log('获取验证码:', phone.value);
};
</script>

<template>
    <div class="flex justify-center items-center bg-gray-100">
        <div class="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md">
            <div class="mb-6">
                <button @click="switchLoginType('account')"
                    :class="['px-4 py-2 rounded-full mr-2', loginType === 'account' ? 'bg-orange-500 text-white' : 'bg-gray-500 text-white']">
                    账号登录
                </button>
                <button @click="switchLoginType('captcha')"
                    :class="['px-4 py-2 rounded-full', loginType === 'captcha' ? 'bg-orange-500 text-white' : 'bg-gray-500 text-white']">
                    验证码登录
                </button>
            </div>

            <!-- 账号登录 -->
            <form id="account-login" class="login-form" :class="{ active: loginType === 'account' }"
                @submit.prevent="handleLogin">
                <div class="flex items-center mb-4">
                    <label for="account" class="block text-left text-black font-bold mr-2">账号</label>
                    <input type="text" id="account" v-model="account" required
                        class="flex-grow px-4 py-2 border rounded-full" />
                </div>
                <div class="flex items-center mb-4">
                    <label for="password" class="block text-left text-black font-bold mr-2">密码</label>
                    <input type="password" id="password" v-model="password" required
                        class="flex-grow px-4 py-2 border rounded-full" />
                </div>
                <div class="mb-4">
                    <button type="submit" class="bg-orange-500 text-white px-6 py-3 rounded-full w-full">立即登录</button>
                </div>
                <div class="flex items-center mb-4">
                    <input type="checkbox" id="remember-me" v-model="rememberMe" class="mr-2" />
                    <label for="remember-me" class="text-black">记住密码</label>
                </div>
            </form>

            <!-- 验证码登录 -->
            <form id="captcha-login" class="login-form" :class="{ active: loginType === 'captcha' }"
                @submit.prevent="handleLogin">
                <div class="flex items-center mb-4">
                    <label for="phone" class="block text-left mr-2 text-black font-bold">手机号</label>
                    <input type="text" id="phone" v-model="phone" required
                        class="flex-grow px-4 py-2 border rounded-full" />
                </div>
                <div class="mb-4 flex items-center relative">
                    <label for="captcha" class="block text-left text-black font-bold mr-2">验证码</label>
                    <input type="text" id="captcha" v-model="captcha" required
                        class="flex-grow px-4 py-2 border rounded-full"/>
                    <button type="button" class="absolute right-0 top-0  text-green-500 px-4 py-2 rounded-full"
                        @click="getCaptcha">发送验证码</button>
                </div>
                <div class="mb-4">
                    <button type="submit" class="bg-orange-500 text-white px-6 py-3 rounded-full w-full">立即登录</button>
                </div>
            </form>
            <div class="text-center mt-6">
                <a href="#" class="text-blue-500 hover:text-blue-700 mr-4">没有账号？去注册</a>
                <a href="#" class="text-blue-500 hover:text-blue-700">忘记密码？</a>
            </div>
        </div>
    </div>
</template>



<style scoped>
.login-form {
    display: none;
}

.login-form.active {
    display: block;
}
</style>