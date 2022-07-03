import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: '主页',
        meta: { title: '主页', icon: 'dashboard', affix: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/material',
    component: Layout,
    redirect: '/material/page',
    alwaysShow: true, 
    name: 'material',
    meta: {
        title: '素材管理',
        roles: ['user'] // 普通的用户角色
    },
    children: [
        {
            path: 'materialManage',
            component: () => import('@/views/material/materialManage.vue'),
            name: 'materialManage',
            meta: {
                title: '查看素材',
                roles: ['user']   
            }
        },
        {
          path: 'materialAdd',
          component: () => import('@/views/material/materialAdd.vue'),
          name: 'materialAdd',
          meta: {
              title: '添加素材',
              roles: ['user']    
          }
      }
    ]
},{
  path: '/program',
  component: Layout,
  redirect: '/program/page',
  alwaysShow: true, 
  name: 'program',
  meta: {
      title: '节目管理',
      roles: ['user'] // 普通的用户角色
  },
  children: [
      {
          path: 'programManage',
          component: () => import('@/views/program/programManage.vue'),
          name: 'programManage',
          meta: {
              title: '查看节目',
              roles: ['user']    //  admin角色的用户才能访问该页面
          }
      },
      {
        path: 'programAdd',
        component: () => import('@/views/program/programAdd.vue'),
        name: 'programAdd',
        meta: {
            title: '添加节目',
            roles: ['user']    
        }
    },
    ]
},
{
  path: '/plan',
  component: Layout,
  redirect: '/plan/page',
  alwaysShow: true, 
  name: 'plan',
  meta: {
      title: '计划管理',
      roles: ['user'] 
  },
  children: [
      {
          path: 'planManage',
          component: () => import('@/views/plan/planManage.vue'),
          name: 'planManage',
          meta: {
              title: '查看计划',
              roles: ['user']   
          }
      },
      {
        path: 'planAdd',
        component: () => import('@/views/plan/planAdd.vue'),
        name: 'planAdd',
        meta: {
            title: '添加计划',
            roles: ['user']    //  teacher角色的用户才能访问该页面
        }
    }, 
    ]
},
{
  path: '/equipment',
  component: Layout,
  redirect: '/equipment/page',
  alwaysShow: true, 
  name: 'equipment',
  meta: {
      title: '设备管理',
      roles: ['user'] 
  },
  children: [
      {
          path: 'equipmentManage',
          component: () => import('@/views/equipment/equipmentManage.vue'),
          name: 'equipmentManage',
          meta: {
              title: '查看设备',
              roles: ['user']    //  admin角色的用户才能访问该页面
          }
      },
      {
        path: 'equipmentAdd',
        component: () => import('@/views/equipment/equipmentAdd.vue'),
        name: 'equipmentAdd',
        meta: {
            title: '添加设备',
            roles: ['user']    //  admin角色的用户才能访问该页面
        }
    },
    ]
},

{
  path: '/user',
  component: Layout,
  redirect: '/user/page',
  alwaysShow: true, 
  name: 'user',
  meta: {
      title: '用户管理',
      roles: ['admin','user'] 
  },
  children: [
    {
      path: 'userManage',
      component: () => import('@/views/user/userManage.vue'),
      name: 'userManage',
      meta: {
          title: '查看用户',
          roles: ['admin','user']    //  admin角色的用户才能访问该页面
      }
  },
  ]

},
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
