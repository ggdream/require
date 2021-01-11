import { RouteConfig } from 'vue-router'



const routes: Array<RouteConfig> = [
    {
        path: '/',
        component: () => import('@/views/home/index.vue'),
        redirect: '/rem',
        children: [
            {
                path: 'rem',
                component: () => import('@/views/rem/index.vue'),
                meta: {
                    title: '教程推荐'
                }
            }
        ]
    }
]

export default routes
