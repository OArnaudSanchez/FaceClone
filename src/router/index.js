import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: 'Login',
    component: () => import(/* webpackChunkName: "Home" */ "@/components/shared/app/Login.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "@/views/Home.vue"),
  },
  
  {
    path: "/profile",
    name: "Profile",
    component: () => import(/* webpackChunkName: "Profile" */ "@/views/Profile.vue")
    // Esta ruta debe de recibir un parametro que indique de quien es el perfil que se va a renderizar
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import(/* webpackChunkName: "Privacy" */ "@/views/Privacy.vue")
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import(/* webpackChunkName: "Terms" */ "@/views/Terms.vue")
  }
];

const router = new VueRouter({
  routes,
});

export default router;
