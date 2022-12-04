import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'
import FAQ from '../components/FAQ/FAQ.vue'


const routes = [
    {path: '/faq', component: FAQ},
]

export default () => createRouter({
    history: createWebHistory(),
    routes: routes
})