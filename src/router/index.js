import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/Sidebar/HomeView.vue";
import LandingPage from "../pages/Landing/index";
import Personalisation from "../pages/Personalisation/index";

const routes = [
  {
    path: "/",
    name: "personalisation",
    component: LandingPage,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/welcome",
    name: "welcome",
    component: () => import("../pages/Login/WelcomeView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/Login/LoginView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../pages/Login/ShortProfileView.vue"),
  },
  {
    path: "/categories",
    name: "categories",
    component: () => import("../pages/Login/CategoriesView.vue"),
  },
  {
    path: "/congrats",
    name: "congrats",
    component: () => import("../pages/Login/CongratView.vue"),
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../pages/Sidebar/SettingsView.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../pages/Sidebar/DashboardView.vue"),
  },
  {
    path: "/account",
    name: "account",
    component: () => import("../pages/Sidebar/AccountView.vue"),
  },
  {
    path: "/commerce",
    name: "commerce",
    component: () => import("../pages/Sidebar/CommerceView.vue"),
  },
  {
    path: "/faq",
    name: "faq",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../pages/Sidebar/Feedback/FaqView.vue"
      ),
  },
  {
    path: "/report",
    name: "report",
    component: () => import("../pages/Sidebar/Feedback/ReportView.vue"),
  },
  {
    path: "/suggest",
    name: "suggest",
    component: () => import("../pages/Sidebar/Feedback/SuggestView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../pages/Sidebar/Feedback/ContactView.vue"),
  },
  {
    path: "/personalisation",
    name: "personalisation",
    component: Personalisation,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
