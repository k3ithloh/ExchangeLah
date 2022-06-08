import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: import("../views/HomePage.vue"),
    },
    {
      path: "/login",
      name: "LoginPage",
      component: import("../views/LoginPage.vue"),
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
