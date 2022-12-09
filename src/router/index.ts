import { createRouter, createWebHistory } from "vue-router";
import CatalogueView from "../views/CatalogueView.vue";
import WatchListView from "../views/WatchListView.vue";
import MyFavouritesView from "../views/MyFavouritesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "catalogue",
      component: CatalogueView,
    },
    {
      path: "/watchlist",
      name: "watchlist",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/WatchListView.vue"),
    },
    {
      path: "/my-favourites",
      name: "my-favourites",
      component: MyFavouritesView,
    },
  ],
});

export default router;
