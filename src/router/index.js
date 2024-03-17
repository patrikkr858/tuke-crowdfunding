import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ProjectDetailView from "../views/ProjectDetailView.vue";
import LoginView from "../views/LoginView.vue";
import CreateProjectView from "../views/CreateProjectView.vue";
import RegisterView from "../views/RegisterView.vue";
import AboutUsView from "../views/AboutUsView.vue";
import DonateProjectView from "../views/DonateProjectView.vue";

import { getUserState } from '../firebase'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView
  },
  {
    path: "/detail",
    name: "projectdetail",
    component: ProjectDetailView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/create/project",
    name: "createProject",
    component: CreateProjectView
  },
  {
    path: "/about",
    name: "aboutUs",
    component: AboutUsView
  },
  {
    path: "/donate",
    name: "donate",
    component: DonateProjectView
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
