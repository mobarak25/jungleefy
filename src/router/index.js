import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/AllFeaturedAuctions",
    name: "AllFeaturedAuctions",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/Product.vue")
  },
  {
    path: "/AllAuctionsClosing",
    name: "AllAuctionsClosing",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/AllTrendingProducts",
    name: "AllTrendingProducts",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/ProductDetails",
    name: "ProductDetails",
    component: () =>
      import(/* webpackChunkName: "ProductDetails" */ "../views/ProductDetails.vue")
  },
  {
    path: "/post-your-ad",
    name: "postYourAd",
    component: () =>
      import(/* webpackChunkName: "PostYourAd" */ "../views/PostYourAd.vue")
  },
  {
    path: "/select-category-for-post-ad",
    name: "postYourAdCategory",
    component: () =>
      import(/* webpackChunkName: "postYourAdCategory" */ "../views/postYourAdCategory.vue")
  },

  {
    path: '/*',
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
});

export default router;
