import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ProjectDetailView from "../views/ProjectDetailView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

import { getUserState } from '../firebase'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
    meta: { requiresAuth: true }
  },
  {
    path: "/detail",
    name: "projectdetail",
    component: ProjectDetailView,
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: { requiresUnauth: true }
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    meta: { requiresUnauth: true }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const isAuth = await getUserState()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresUnauth = to.matched.some(record => record.meta.requiresUnauth)

  if (requiresAuth && !isAuth) next('/login')
  else if (requiresUnauth && isAuth) next('/')
  else next()
})

export default router;
