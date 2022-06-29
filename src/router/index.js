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
    path: '/user',
    component: Layout,
    redirect: '/user/page',
    alwaysShow: true, 
    name: 'user',
    meta: {
        title: '用户管理',
        roles: ['admin'] // 普通的用户角色
    },
    children: [
        {
            path: 'student',
            component: () => import('@/views/admin/studentManageView.vue'),
            name: 'studentManage',
            meta: {
                title: '学生管理',
                roles: ['admin']    //  admin角色的用户才能访问该页面
            }
        },
        {
          path: 'teacher',
          component: () => import('@/views/admin/teacherManageView.vue'),
          name: 'teacherManage',
          meta: {
              title: '老师管理',
              roles: ['admin']    //  admin角色的用户才能访问该页面
          }
      }
    ]
},
{
  path: '/class',
  component: Layout,
  redirect: '/class/page',
  alwaysShow: true, 
  name: 'class',
  meta: {
      title: '课程管理',
      roles: ['admin','teacher','student'] // 普通的用户角色
  },
  children: [
      {
          path: 'checkClass',
          component: () => import('@/views/admin/class/classManageView.vue'),
          name: 'checkClass',
          meta: {
              title: '查看课程',
              roles: ['admin']    //  admin角色的用户才能访问该页面
          }
      },
      {
        path: 'checkClass1',
        component: () => import('@/views/teacher/classManageView.vue'),
        name: 'checkClass1',
        meta: {
            title: '查看课程',
            roles: ['teacher','student']    //  admin角色的用户才能访问该页面
        }
    },
      {
        path: 'addClass',
        component: () => import('@/views/admin/class/classAddView.vue'),
        name: 'addClass',
        meta: {
            title: '新建课程',
            roles: ['admin']    //  admin角色的用户才能访问该页面
        }
    },
    ]
},
{
  path: '/test',
  component: Layout,
  redirect: '/test/page',
  alwaysShow: true, 
  name: 'test',
  meta: {
      title: '考试管理',
      roles: ['admin', 'teacher','student'] 
  },
  children: [
      {
          path: 'checkTest',
          component: () => import('@/views/teacher/testManageView.vue'),
          name: 'checkTest',
          meta: {
              title: '查看考试',
              roles: ['admin', 'teacher']    //  admin角色的用户才能访问该页面
          }
      },
      {
        path: 'addTest',
        component: () => import('@/views/teacher/testAddView.vue'),
        name: 'addClass',
        meta: {
            title: '新建考试',
            roles: ['teacher']    //  teacher角色的用户才能访问该页面
        }
    }, 
    {
      path: 'joinTest',
      component: () => import('@/views/admin/userManageView.vue'),
      name: 'joinClass',
      meta: {
          title: '参加考试',
          roles: ['student']    //  teacher角色的用户才能访问该页面
      }
  },
    ]
},
{
  path: '/quiz',
  component: Layout,
  redirect: '/quiz/page',
  alwaysShow: true, 
  name: 'quiz',
  meta: {
      title: '题库管理',
      roles: ['teacher'] 
  },
  children: [
      {
          path: 'checkQuiz',
          component: () => import('@/views/teacher/quizManageView.vue'),
          name: 'checkQuiz',
          meta: {
              title: '查看题库',
              roles: [ 'teacher']    //  admin角色的用户才能访问该页面
          }
      },
      {
        path: 'addQuiz',
        component: () => import('@/views/teacher/quizAddLabel.vue'),
        name: 'addQuiz',
        meta: {
            title: '添加问题',
            roles: ['teacher']    //  admin角色的用户才能访问该页面
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
