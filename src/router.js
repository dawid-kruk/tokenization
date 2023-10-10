import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "./components/MainPage.vue";
import Authority from "./components/Authority.vue";
import User from "./components/User/User.vue";
import Device from "./components/Device/Device.vue";
import Management from "./components/User/Management.vue";
import UserCertificates from "./components/User/UserCertificates.vue";
import AcceptDevice from "./components/User/AcceptDevice.vue";
import CreateUserCertificates from "./components/User/CreateUserCertificates.vue";
import Marketplace from "./components/Marketplace.vue";
import Measurements from "./components/User/Measurements.vue";
import EnergyRaport from "./components/User/EnergyRaport.vue";
import AddMeasurement from "./components/Device/AddMeasurement.vue";
import AssignDevice from "./components/Device/AssignDevice.vue";

export const router = createRouter({
    history: createWebHistory("/tokenization/"),
    routes: [
        {
            path: '',
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
                        {
                            path: 'show-measurements',
                            component: Measurements,
                        },
                        {
                            path: 'energy-raport',
                            component: EnergyRaport,
                        },
                    ]
                },
                {
                    path: 'device',
                    component: Device,
                    children: [
                        {
                            path: 'assign-device',
                            component: AssignDevice,
                        },
                        {
                            path: 'add-measurement',
                            component: AddMeasurement,
                        },
                    ]
                },
                {
                    path: 'marketplace',
                    component: Marketplace,
                }
            ]
        },
    ]
})