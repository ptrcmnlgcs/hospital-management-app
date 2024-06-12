import { createRouter, createWebHashHistory } from 'vue-router';
import ManageRegister from '@/components/ManageRegister.vue'
import ManageLogin from '@/components/ManageLogin.vue'

const routes = [{
        path: '/',
        name: 'landing',
        component: ManageLogin,
    },
    {
        path: '/login',
        name: 'login',
        component: ManageLogin,
    },
    {
        path: '/register',
        name: 'register',
        component: ManageRegister,
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>
            import ('../views/DashboardView.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/logout',
        name: 'logout',
        component: () =>
            import ('../views/LogoutView.vue'),
        meta: { requiresAuth: true }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// Navigation Guard
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    if (to.matched.some(record => record.meta.requiresAuth) && !token) {
        next({ name: 'login' }) // Redirect to login if no token is found
    } else {
        next() // Proceed to route
    }
})

export default router