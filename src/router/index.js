import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/ProductsView.vue"),
  },
  {
    path: "/products/:id",
    name: "SingleCardView",
    component: () => import("../views/SingleCardView.vue"),
    props: true,
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/CartView.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../views/CheckoutView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/ProfileView.vue"),
  },
  {
    path: "/productadmin",
    name: "productadmin",
    component: () => import("../views/ProductAdminView.vue"),
  },
  {
    path: "/useradmin",
    name: "useradmin",
    component: () => import("../views/UserAdminView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
