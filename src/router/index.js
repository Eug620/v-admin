import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: { title: '首页', icon: 'iconhome', affix: true }
      }
    ]
  },
  {
    path: '/lock-page',
    component: () => import('@/views/lock-page/index'),
    hidden: true
  },
  {
    path: '/redirect/:pathMatch(.*)',
    component: () => import('@/views/redirect/index'),
    hidden: true
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/403',
    component: () => import('@/views/error-page/403'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/500',
    component: () => import('@/views/error-page/500'),
    hidden: true
  },
  { path: '/:pathMatch(.*)*', component: () => import('@/views/error-page/404'), hidden: true }
]

export const asyncRoutes = [
  {
    path: '/permission',
    name: 'Permission',
    component: Layout,
    redirect: 'noRedirect',
    meta: {
      title: '权限测试',
      icon: 'iconcontrol'
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'Page',
        meta: { title: '页面权限', icon: 'iconfileprotect' }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'Role',
        meta: { title: '角色权限', icon: 'iconteam' }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'Directive',
        meta: { title: '指令权限', icon: 'iconsafetycertificate', tag: { value: 'New', color: '#87d068' }}
      }
    ]
  },
  {
    path: '/error',
    name: 'Error',
    component: Layout,
    redirect: 'noRedirect',
    meta: {
      title: '错误页',
      icon: 'icondisconnect',
      roles: ['admin']
    },
    children: [
      {
        path: '403',
        component: () => import('@/views/error-page/403'),
        name: 'Page403',
        meta: { title: '403', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: '404', noCache: true }
      },
      {
        path: '500',
        component: () => import('@/views/error-page/500'),
        name: 'Page500',
        meta: { title: '500', noCache: true }
      }
    ]
  },
  {
    path: '/result',
    name: 'Result',
    component: Layout,
    redirect: '/Result/success',
    meta: { title: '结果页', icon: 'iconbulb' },
    children: [
      {
        path: 'success',
        name: 'Success',
        component: () => import('@/views/result/Success.vue'),
        meta: { title: '成功', icon: 'iconcheck', tag: { value: 'New', color: '#87d068' }}
      },
      {
        path: 'fail',
        name: 'Fail',
        component: () => import('@/views/result/Fail.vue'),
        meta: { title: '失败', icon: 'iconclose', tag: { value: 'New', color: '#87d068' }}
      }
    ]
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Layout,
    redirect: '/profile/basic',
    meta: { title: '详情页', icon: 'iconproject' },
    children: [
      {
        path: 'basic',
        name: 'Basic',
        component: () => import('@/views/profile/basic.vue'),
        meta: { title: '基础详情页', tag: { value: 'New', color: '#87d068' }}
      },
      {
        path: 'advanced',
        name: 'Advanced',
        component: () => import('@/views/profile/advanced.vue'),
        meta: { title: '高级详情页', tag: { value: 'New', color: '#87d068' }}
      }
    ]
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Layout,
    redirect: '/setting/user',
    meta: { title: '设置页', icon: 'iconwrench' },
    children: [
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/setting/User.vue'),
        meta: { title: '个人中心' }
      },
      {
        path: 'account',
        name: 'Account',
        component: () => import('@/views/setting/Account.vue'),
        meta: { title: '个人设置' }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: Layout,
    redirect: '/about/about1',
    meta: { title: '嵌套路由', icon: 'iconalert' },
    children: [
      {
        path: 'about1',
        name: 'About1',
        component: () => import('@/views/About.vue'),
        meta: { title: '嵌套路由1', icon: 'iconalert' },
        children: [
          {
            path: 'about1-1',
            name: 'About1-1',
            component: () => import('@/views/About.vue'),
            meta: { title: '嵌套路由1-1', icon: 'iconalert' },
            children: [
              {
                path: 'about1-1-1',
                name: 'About1-1-1',
                component: () => import('@/views/About.vue'),
                meta: { title: '嵌套路由1-1-1', icon: 'iconalert' }
              },
              {
                path: 'about1-1-2',
                name: 'About1-1-2',
                component: () => import('@/views/About.vue'),
                meta: { title: '嵌套路由1-1-2', icon: 'iconalert' }
              }
            ]
          },
          {
            path: 'about1-2',
            name: 'About1-2',
            component: () => import('@/views/About.vue'),
            meta: { title: '嵌套路由1-2', icon: 'iconalert' }
          }
        ]
      },
      {
        path: 'about2',
        name: 'About2',
        component: () => import('@/views/About.vue'),
        meta: { title: '嵌套路由2', icon: 'iconalert' }
      }
    ]
  },
  {
    path: '/plugin',
    name: 'Plugin',
    component: Layout,
    // redirect: '/plugin/map',
    meta: { title: '组件', icon: 'iconappstore' },
    children: [
      {
        path: 'map',
        name: 'Map',
        component: () => import('@/views/plugin/map/index.vue'),
        meta: { title: '地图', icon: 'iconblock', tag: { value: '99', color: '#108ee9' }}
      },
      {
        path: 'markdown',
        name: 'Markdown',
        component: () => import('@/views/plugin/markdown/index.vue'),
        meta: { title: 'Markdown', icon: 'iconedit' }
      },
      {
        path: 'edit',
        name: 'Edit',
        component: () => import('@/views/plugin/edit/index.vue'),
        meta: { title: '富文本编辑器', icon: 'iconfile-text', tag: { value: 'Hot', color: '#f56c6c' }}
      }
    ]
  },
  {
    path: '/table',
    name: 'Table',
    component: Layout,
    redirect: '/table/complex-table',
    meta: { title: 'Table', icon: 'icontable' },
    children: [
      {
        path: 'complex-table',
        name: 'Complex-table',
        component: () => import('@/views/table/complex-table.vue'),
        meta: { title: '综合Table' }
      },
      {
        path: 'inline-edit-table',
        name: 'Inline-edit-table',
        component: () => import('@/views/table/inline-edit-table.vue'),
        meta: { title: 'Table 内编辑' }
      }
    ]
  },
  {
    path: '/form',
    name: 'Form',
    component: Layout,
    redirect: '/form/base-form',
    meta: { title: 'Form', icon: 'iconreconciliation' },
    children: [
      {
        path: 'base-form',
        name: 'Base-form',
        component: () => import('@/views/form/baseForm/index.vue'),
        meta: { title: '基础表单', tag: { value: 'New', color: '#87d068' }}
      },
      {
        path: 'step-form',
        name: 'Step-form',
        component: () => import('@/views/form/stepForm/index.vue'),
        meta: { title: '分步表单', tag: { value: 'New', color: '#87d068' }}
      },
      {
        path: 'dynamic-form',
        name: 'Dynamic-form',
        component: () => import('@/views/form/dynamicForm/index.vue'),
        meta: { title: '动态表单', tag: { value: 'New', color: '#87d068' }}
      }
    ]
  },
  {
    path: '/error-log',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/error-log/index.vue'),
        name: 'error-log',
        meta: { title: '错误日志', icon: 'iconfile-exception' }
      }
    ]
  }
]

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

export function resetRouter() {
  const newRouter = createRouter({
    history: createWebHistory(),
    routes: []
  })
  router.matcher = newRouter.matcher // reset router
}

export default router
