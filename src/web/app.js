import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import qManager from './components/q-manager.vue'
import qAnswer from './components/q-answer.vue'

Vue.use(VueRouter)

//定义路由组件
//const managePage = { template:  qManager};
//const answerPage = { template: qAnswer }
// 定义路由
const routes = [
    { path: "/manage", component: qManager },
    { path: "/answer", component: qAnswer }
]

// //创建路由实例
const router = new VueRouter({
    routes
})
//实例化APP
new Vue({
    router,
    render: h => h(App)
}).$mount("#appRoot")