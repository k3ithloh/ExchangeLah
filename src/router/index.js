import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: import("@/views/HomePage.vue"),
    },
    {
      path: "/universities",
      name: "UniversitiesPage",
      component: import("@/views/UniversitiesPage.vue"),
    },
    {
      path: "/modulemapping",
      name: "ModuleMapping",
      component: import("@/views/ModuleMapping.vue"),
    },
    {
      path: "/login",
      name: "LoginPage",
      component: import("@/views/LoginPage.vue"),
    },
    {
      path: "/signup",
      name: "SignUp",
      component: import("@/views/SignUp.vue"),
    },
    {
      path: "/forgotpassword",
      name: "ForgotPassword",
      component: import("@/views/ForgotPassword.vue"),
    },
  ],
});
