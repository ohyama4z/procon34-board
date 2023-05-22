import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("../pages/Setting.vue"),
  },
  {
    path: "/game",
    name: "game",
    component: () => import("../pages/Game.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
