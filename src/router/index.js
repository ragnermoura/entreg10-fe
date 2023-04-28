import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegisterView.vue'
import ClientView from '../views/client/DashboardView.vue'

import AdminView from '../views/admin/DashboardView.vue'
import EntregadorView from '../views/entregador/DashboardView.vue'
import ClientPerfilView from '../views/client/PerfilView.vue'
import EntregadorPerfilView from '../views/entregador/PerfilView.vue'
import SuccessView from '../views/client/SuccessView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: RegisterView
    },
    {
      path: '/dashboard-admin',
      name: 'dashboard-admin',
      component: AdminView
    },
    {
      path: '/dashboard-client',
      name: 'dashboard-client',
      component: ClientView
    },
    {
      path: '/dashboard-entregador',
      name: 'dashboard-entregador',
      component: EntregadorView
    },
    {
      path: '/dashboard-client-perfil',
      name: 'dashboard-client-perfil',
      component: ClientPerfilView
    },
    {
      path: '/dashboard-entregador-perfil',
      name: 'dashboard-entregador-perfil',
      component: EntregadorPerfilView
    },
    {
      path: '/success-count',
      name: 'success',
      component: SuccessView
    },
   
  ]
})

export default router
