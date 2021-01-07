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
    path: "/all-featured-auctions",
    name: "AllFeaturedAuctions",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/Product.vue")
  },
  {
    path: "/all-auctions-closing",
    name: "AllAuctionsClosing",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/all-trending-products",
    name: "AllTrendingProducts",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/product-details",
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
    path: "/create-a-free-ad",
    name: "createAFreeAd",
    component: () =>
      import(/* webpackChunkName: "createAFreeAd" */ "../views/createAFreeAd.vue")
  },
  {
    path: "/total-bid",
    name: "totalBid",
    component: () =>
      import(/* webpackChunkName: "totalBid" */ "../views/TotalBid.vue")
  },
  {
    path: "/wish-list",
    name: "WishList",
    component: () =>
      import(/* webpackChunkName: "watchList" */ "../views/WishList.vue")
  },
  {
    path: "/log-in",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "SignIn" */ "../views/login.vue")
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "SignUp" */ "../views/sign-up.vue")
  },
  {
    path: "/my-account",
    name: "MyAccount",
    component: () =>
      import(/* webpackChunkName: "MyAccount" */ "../views/MyAccount.vue")
  },
  {
    path: "/my-order",
    name: "MyOrder",
    component: () =>
      import(/* webpackChunkName: "MyOrder" */ "../views/MyOrder.vue")
  },
  {
    path: "/my-auction",
    name: "MyAuction",
    component: () =>
      import(/* webpackChunkName: "MyAuction" */ "../views/MyAuction.vue")
  },
  {
    path: "/buying-item",
    name: "BuyingItem",
    component: () =>
      import(/* webpackChunkName: "BuyingItem" */ "../views/BuyingItem.vue")
  },
  {
    path: "/selling-item",
    name: "SellingItem",
    component: () =>
      import(/* webpackChunkName: "SellingItem" */ "../views/SellingItem.vue")
  },
  {
    path: "/my-cart",
    name: "Cart",
    component: () =>
      import(/* webpackChunkName: "Cart" */ "../views/Cart.vue")
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () =>
      import(/* webpackChunkName: "checkout" */ "../views/checkout.vue")
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
