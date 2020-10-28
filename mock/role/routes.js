// Just a mock data

const constantRoutes = [
  {
    path: '/',
    component: 'layout/Layout',
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: { title: '首页', icon: 'HomeOutlined' }
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

const asyncRoutes = [
  {
    path: '/permission',
    name: 'Permission',
    component: 'layout/Layout',
    redirect: 'noRedirect',
    meta: {
      title: '权限测试',
      icon: 'ControlOutlined'
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'Page',
        meta: { title: '页面权限' }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'Role',
        meta: { title: '角色权限' }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'Directive',
        meta: { title: '指令权限' }
      }
    ]
  },
  {
    path: '/error',
    name: 'Error',
    component: 'layout/Layout',
    redirect: 'noRedirect',
    meta: {
      title: '错误页面',
      icon: 'DisconnectOutlined',
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
    path: '/setting',
    name: 'Setting',
    component: 'layout/Layout',
    redirect: '/setting/user',
    meta: { title: '设置页面', icon: 'ToolOutlined' },
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
    component: 'layout/Layout',
    redirect: '/about/about1',
    meta: { title: '关于我们', icon: 'AlertOutlined' },
    children: [
      {
        path: 'about1',
        name: 'About1',
        component: () => import('@/views/About.vue'),
        meta: { title: '关于我们1', icon: 'AlertOutlined' }
      },
      {
        path: 'about2',
        name: 'About2',
        component: () => import('@/views/About.vue'),
        meta: { title: '关于我们2', icon: 'AlertOutlined' }
      }
    ]
  },
  {
    path: '/plugin',
    name: 'Plugin',
    component: 'layout/Layout',
    // redirect: '/plugin/map',
    meta: { title: '组件', icon: 'AppstoreOutlined' },
    children: [
      {
        path: 'map',
        name: 'Map',
        component: () => import('@/views/plugin/map/index.vue'),
        meta: { title: '地图', icon: 'BlockOutlined' }
      },
      {
        path: 'markdown',
        name: 'Markdown',
        component: () => import('@/views/plugin/markdown/index.vue'),
        meta: { title: 'markdown', icon: 'EditOutlined' }
      }
    ]
  },
  {
    path: '/table',
    name: 'Table',
    component: 'layout/Layout',
    redirect: '/table/complex-table',
    meta: { title: 'Table', icon: 'TableOutlined' },
    children: [
      {
        path: 'complex-table',
        name: 'Complex-table',
        component: () => import('@/views/table/complex-table.vue'),
        meta: { title: '综合Table', icon: 'InsertRowAboveOutlined' }
      },
      {
        path: 'inline-edit-table',
        name: 'Inline-edit-table',
        component: () => import('@/views/table/inline-edit-table.vue'),
        meta: { title: 'Table 内编辑', icon: 'EditOutlined' }
      }
    ]
  }
]

module.exports = {
  constantRoutes,
  asyncRoutes
}