import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: import("../views/Home.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: import("../views/Login.vue"),
    },
    {
      path: "/signup",
      name: "SignUp",
      component: import("../views/SignUp.vue"),
    },
  ],
});
