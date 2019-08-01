const AppLayout = () => import(/* webpackChunkName: "main" */ '../components/layouts/AppLayout')
const Home = () => import(/* webpackChunkName: "home" */ '../components/home/Home')
const About = () => import(/* webpackChunkName: "about" */ '../components/about/About')
const Login = () => import(/* webpackChunkName: "login" */ '../components/login/Login')

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/', 
    component: AppLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      { path: '/home', component: Home },
      { path: '/about', component: About }
    ]
  },
  {
    path: '/login',
    component: Login,
    meta: {
      guest: true
    }
  },
  { path: '*', redirect: '/home' }
];

export default routes