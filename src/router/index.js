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
    path: "/all-featured-auctions",
    name: "AllFeaturedAuctions",
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/product.vue")
  },
  {
    path: "/all-auctions-closing",
    name: "AllAuctionsClosing",
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/not-found.vue")
  },
  {
    path: "/all-trending-products",
    name: "AllTrendingProducts",
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/not-found.vue")
  },
  {
    path: "/product-details",
    name: "ProductDetails",
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/product-details.vue")
  },
  {
    path: "/post-your-ad",
    name: "postYourAd",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/post-your-ad.vue")
  },
  {
    path: "/select-category-for-post-ad",
    name: "postYourAdCategory",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/post-your-adcategory.vue")
  },
  {
    path: "/create-a-free-ad",
    name: "createAFreeAd",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/create-a-free-ad.vue")
  },
  {
    path: "/total-bid",
    name: "totalBid",
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/total-bid.vue")
  },
  {
    path: "/wish-list",
    name: "WishList",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/wish-list.vue")
  },
  {
    path: "/log-in",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/login.vue")
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/sign-up.vue")
  },
  {
    path: "/my-account",
    name: "MyAccount",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/my-account.vue")
  },
  {
    path: "/my-order",
    name: "MyOrder",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/my-order.vue")
  },
  {
    path: "/my-auction",
    name: "MyAuction",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/my-auction.vue")
  },
  {
    path: "/buying-item",
    name: "BuyingItem",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/buying-item.vue")
  },
  {
    path: "/selling-item",
    name: "SellingItem",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/selling-item.vue")
  },
  {
    path: "/my-cart",
    name: "Cart",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/cart.vue")
  },
  {
    path: "/checkout",
    name: "checkout",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/checkout.vue")
  },
  {
    path: "/payment",
    name: "Payment",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/payment.vue")
  },
  {
    path: "/contact-us",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/contact-us.vue")
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/about-us.vue")
  },
  {
    path: "/delivery-information",
    name: "DeliveryInformation",
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/delivery-information.vue")
  },
  {
    path: "/terms-and-conditions",
    name: "TermsAndConditions",
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/terms-and-conditions.vue")
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/privacy-policy.vue")
  },
  {
    path: "/faq",
    name: "Faq",
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/faq.vue")
  },
  {
    path: "/blog-posts",
    name: "Blog",
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/blog.vue")
  },
  {
    path: "/blog-post-details",
    name: "BlogPostDetails",
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/blog-post-details.vue")
  },

  {
    path: '/*',
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/not-found.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
});

export default router;
