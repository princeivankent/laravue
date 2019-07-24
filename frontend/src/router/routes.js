const AppLayout = () => import(/* webpackChunkName: "main" */ '../layouts/AppLayout')
const Login = () => import(/* webpackChunkName: "login" */ '../pages/Login')
const Home = () => import(/* webpackChunkName: "home" */ '../pages/Home')

const routes = [
  { path: '/', redirect: '/home' },
  { path: '*', redirect: '/home' },
  {
    path: '/', 
    component: AppLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      { path: '/home', component: Home },
    ]
  },
  {
    path: '/login',
    component: Login,
    meta: {
      guest: true
    }
  }
];

export default routes