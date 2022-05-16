import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Sidebar/HomeView.vue";

const routes = [
    {
        path: "/home",
        name: "home",
        component: HomeView,
    },
    {
        path: "/welcome",
        name: "welcome",
        component: () =>
            import("../views/Login/WelcomeView.vue"),
    },
    {
        path: "/",
        name: "login",
        component: () =>
            import("../views/Login/LoginView.vue"),
    },
    {
        path: "/profile",
        name: "profile",
        component: () =>
            import("../views/Login/ShortProfileView.vue"),
    },
    {
        path: "/categories",
        name: "categories",
        component: () =>
            import("../views/Login/CategoriesView.vue"),
    },
    {
        path: "/congrats",
        name: "congrats",
        component: () =>
            import("../views/Login/CongratView.vue"),
    },
    {
        path: "/settings",
        name: "settings",
        component: () =>
            import("../views/Sidebar/SettingsView.vue"),
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () =>
            import("../views/Sidebar/DashboardView.vue"),
    },
    {
        path: "/account",
        name: "account",
        component: () =>
            import("../views/Sidebar/AccountView.vue"),
    },
    {
        path: "/commerce",
        name: "commerce",
        component: () =>
            import("../views/Sidebar/CommerceView.vue"),
    },
    {
        path: "/faq",
        name: "faq",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Sidebar/Feedback/FaqView.vue"),
    },
    {
        path: "/report",
        name: "report",
        component: () =>
            import("../views/Sidebar/Feedback/ReportView.vue"),
    },
    {
        path: "/suggest",
        name: "suggest",
        component: () =>
            import("../views/Sidebar/Feedback/SuggestView.vue"),
    },
    {
        path: "/contact",
        name: "contact",
        component: () =>
            import("../views/Sidebar/Feedback/ContactView.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
