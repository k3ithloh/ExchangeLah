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
      path: "/universities",
      name: "Universities",
      component: import("../views/Universities.vue"),
    },
    {
      path: "/modulemapping",
      name: "ModuleMapping",
      component: import("../views/ModuleMapping.vue"),
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
    {
      path: "/forgotpassword",
      name: "ForgotPassword",
      component: import("../views/ForgotPassword.vue"),
    },
  ],
});
