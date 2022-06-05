import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: import("../views/Home.vue"),
    },
    {
      name: "login",
      path: "/login",
      component: import("../views/Login.vue"),
    },
    {
      name: "signup",
      path: "/signup",
      component: import("../views/SignUp.vue"),
    },
  ],
});
