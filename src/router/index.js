import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import UniversitiesPage from "@/views/UniversitiesPage.vue";
import UniversityInfo from "@/views/UniversityInfo.vue";
import ModuleMapping from "@/views/ModuleMapping.vue";
import LoginPage from "@/views/LoginPage.vue";
import SignUp from "@/views/SignUp.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/universities",
      name: "UniversitiesPage",
      component: UniversitiesPage,
    },
    {
      path: "/universityinfo",
      name: "UniversityInfo",
      component: UniversityInfo,
    },
    {
      path: "/modulemapping",
      name: "ModuleMapping",
      component: ModuleMapping,
    },
    {
      path: "/community",
      name: "Community",
      beforeEnter() {
        window.location.href = "https://www.reddit.com/";
      },
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp,
    },
    {
      path: "/forgotpassword",
      name: "ForgotPassword",
      component: ForgotPassword,
    },
    {
      path: "/universityinfo",
      name: "UniversityInfo",
      component: UniversityInfo,
    },
  ],
});
