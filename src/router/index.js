import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/Home.vue";
import Recipe from "@/components/Recipe.vue";
import addStore from "@/components/addStore.vue";
import Plan from "@/components/Plan.vue";

import { auth } from "@/firebaseConfig.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/recipe",
    name: "Recipe",
    component: Recipe,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/store",
    name: "addStore",
    component: addStore,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/plan",
    name: "Plan",
    component: Plan,
    meta: {
      requiresAuth: true,
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// this makes the router check each change in routes -- if their "meta" says it requires auth, it will check for auth.
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !auth.currentUser) {
    next("/");
  } else if (!requiresAuth && auth.currentUser) {
    next("/store");
  } else {
    next();
  }
});

export default router;
