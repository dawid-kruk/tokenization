import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "./components/MainPage.vue";
import Authority from "./components/Authority.vue";
import User from "./components/User/User.vue";
import Device from "./components/Device.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainPage,
            children: [
                {
                    path: '/authority',
                    component: Authority,
                },
                {
                    path: '/user',
                    component: User,
                },
                {
                    path: '/device',
                    component: Device,
                }
            ]
        },
    ]
})