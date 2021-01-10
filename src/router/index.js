import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";

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
      import(/* webpackChunkName: "product" */ "../views/product.vue")
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
      import(/* webpackChunkName: "ProductDetails" */ "../views/product-details.vue")
  },
  {
    path: "/post-your-ad",
    name: "postYourAd",
    component: () =>
      import(/* webpackChunkName: "PostYourAd" */ "../views/post-your-ad.vue")
  },
  {
    path: "/select-category-for-post-ad",
    name: "postYourAdCategory",
    component: () =>
      import(/* webpackChunkName: "postYourAdCategory" */ "../views/post-your-adcategory.vue")
  },
  {
    path: "/create-a-free-ad",
    name: "createAFreeAd",
    component: () =>
      import(/* webpackChunkName: "createAFreeAd" */ "../views/create-a-free-ad.vue")
  },
  {
    path: "/total-bid",
    name: "totalBid",
    component: () =>
      import(/* webpackChunkName: "totalBid" */ "../views/total-bid.vue")
  },
  {
    path: "/wish-list",
    name: "WishList",
    component: () =>
      import(/* webpackChunkName: "watchList" */ "../views/wish-list.vue")
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
      import(/* webpackChunkName: "MyAccount" */ "../views/my-account.vue")
  },
  {
    path: "/my-order",
    name: "MyOrder",
    component: () =>
      import(/* webpackChunkName: "MyOrder" */ "../views/my-order.vue")
  },
  {
    path: "/my-auction",
    name: "MyAuction",
    component: () =>
      import(/* webpackChunkName: "MyAuction" */ "../views/my-auction.vue")
  },
  {
    path: "/buying-item",
    name: "BuyingItem",
    component: () =>
      import(/* webpackChunkName: "BuyingItem" */ "../views/buying-item.vue")
  },
  {
    path: "/selling-item",
    name: "SellingItem",
    component: () =>
      import(/* webpackChunkName: "SellingItem" */ "../views/selling-item.vue")
  },
  {
    path: "/my-cart",
    name: "Cart",
    component: () =>
      import(/* webpackChunkName: "Cart" */ "../views/cart.vue")
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () =>
      import(/* webpackChunkName: "checkout" */ "../views/checkout.vue")
  },
  {
    path: "/payment",
    name: "Payment",
    component: () =>
      import(/* webpackChunkName: "Payment" */ "../views/payment.vue")
  },
  {
    path: "/contact-us",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/contact-us.vue")
  },

  {
    path: '/*',
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/not-found.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
});

export default router;
