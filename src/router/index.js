import {createRouter, createWebHistory} from 'vue-router'
import LoginBody from '@/components/login/LoginBody.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: LoginBody,
            meta: {
                title: '首页'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: LoginBody,
            meta: {
                title: '登录'
            }
        },
        {
            path: '/about/',
            name: 'about',
            component: () => import('@/components/about/AboutPage.vue'), // 懒加载
            meta: {
                title: '关于我们'
            },
            children: [
                {path: 'intro', component: () => import('@/components/about/TeamIntro.vue')},
                {path: 'contact', component: () => import('@/components/about/Contact.vue')},
                {path: 'announcement', component: () => import('@/components/about/Announcement.vue')},
                {path: 'feedback', component: () => import('@/components/about/Feedback.vue')},
                {path: 'help-center', component: () => import('@/components/about/Faq.vue')},
                {path: 'faq', component: () => import('@/components/about/Faq.vue')},
                {path: 'service-agreement', component: () => import('@/components/about/ServiceAgreement.vue')},
                {path: 'privacy', component: () => import('@/components/about/PrivacyPolicy.vue')},
            ],
        },
        {
            path: '/book/:id',
            name: 'book',
            component: () => import('@/components/book/BookDetail.vue'),
        },
        {
            path: '/forum',
            name: 'forum',
            component: () => import('@/components/forum/Forum.vue'),
            meta: {
                title: '论坛'
            }
        },
        {
            path: '/book/:id',
            name: 'book',
            component: () => import('@/components/book/BookDetail.vue'),
        }
    ]
})


/**
 * 在路由跳转之前执行的钩子函数
 * 该函数用于在页面切换前设置文档标题
 *
 * @param {Object} to 路由将要跳转到的目标路由对象
 * @param {Object} from 路由当前所在的路由对象
 * @param {Function} next 路由跳转的下一个函数，必须调用此函数以解析路由跳转
 */
router.beforeEach((to, from, next) => {
    // 检查目标路由的meta属性中是否设置了title，如果设置了，则更新文档的title
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    // 调用next函数以继续路由跳转
    next();
});


export default router
