import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "./components/MainPage.vue";
import Authority from "./components/Authority.vue";
import User from "./components/User/User.vue";
import Device from "./components/Device.vue";
import Management from "./components/User/Management.vue";
import UserCertificates from "./components/User/UserCertificates.vue";
import AcceptDevice from "./components/User/AcceptDevice.vue";
import CreateUserCertificates from "./components/User/CreateUserCertificates.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainPage,
            children: [
                {
                    path: 'authority',
                    component: Authority,
                },
                {
                    path: 'user',
                    component: User,
                    children: [
                        {
                            path: 'management',
                            component: Management,
                        },
                        {
                            path: 'add-device',
                            component: AcceptDevice,
                        },
                        {
                            path: 'certificates',
                            component: UserCertificates,
                        },
                        {
                            path: 'add-certificate',
                            component: CreateUserCertificates,
                        },
                    ]
                },
                {
                    path: 'device',
                    component: Device,
                }
            ]
        },
    ]
})