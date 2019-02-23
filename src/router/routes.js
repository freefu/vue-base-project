// 路由懒加载
const _import = file => () => import('@/views/' + file + '/index.vue')

// 路由配置表
const routes = [
  {
    path: '/',
    name: 'home',
    component: _import('Home')
  }
]

export default routes
