import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

var _ = require('lodash');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    featuredAuctions: {},
    trendingProducts: {},
    auctionsClosing: {},
    productCategories: {},
    allProduct: {},
    wishListedIdsArr:[],
    wishList:[],
    cards:{
      cardItems:[]
    },    
  },
  mutations: {
    SET_AUCTION_PRODUCTS(state, products) {
      state.featuredAuctions = products
    },
    SET_TRENDING_PRODUCTS(state, products) {
      state.trendingProducts = products
    },
    SET_AUCTION_CLOSING_PRODUCTS(state, products) {
      state.auctionsClosing = products;
    },
    SET_PRODUCT_CATAGORIES(state, categories) {
      state.productCategories = categories;
    },
    SET_PRODUCTS(state, allProducts) {
      state.allProduct = allProducts;
    },
    SET_WISHLIST(state, allIdArr){
      state.wishList = state.allProduct.products.filter((el) => { 
        return allIdArr.includes(el.id) 
      });
    },
    TOGGLE_TO_WISHLIST(state,productId) {
        //TODO:database query
        var index = state.wishListedIdsArr.indexOf(productId);
        if (index !== -1) {
            state.wishListedIdsArr.splice(index, 1);
        } else {
            state.wishListedIdsArr.push(productId);
        }
    },
    UPDATE_CARDS(state,productObj){
      var index=_.findIndex(state.cards.cardItems,{id:productObj.id});
      state.cards.cardItems[index].qty=productObj.qty;
       localStorage.setItem(
            "jungleefy-card-items",
            JSON.stringify(state.cards)
        );
    },
    DELETE_FROM_CARDS(state,productId){
       var index=_.findIndex(state.cards.cardItems,{id:productId});
        if (index !== -1) {
            state.cards.cardItems.splice(index, 1);
        }
        localStorage.setItem(
            "jungleefy-card-items",
            JSON.stringify(state.cards)
        ); 
    }
  },
  actions: {
    getFeaturedAuctions({ commit }) {
      let url = "http://localhost:8080/data/featuredAuctions.json";
      axios.get(url)
        .then(result => {
          commit('SET_AUCTION_PRODUCTS', result.data)
        }).catch(error => {
          console.log(error);
        })

    },
    getTrendingProducts({ commit }) {
      let url = "http://localhost:8080/data/trendingProducts.json";
      axios.get(url)
        .then(result => {
          commit('SET_TRENDING_PRODUCTS', result.data)
        }).catch(error => {
          console.log(error);
        })

    },
    getAuctionsClosingProdducts({ commit }) {
      let url = "http://localhost:8080/data/auctionsClosingProducts.json";
      axios.get(url)
        .then(result => {
          commit('SET_AUCTION_CLOSING_PRODUCTS', result.data)
        }).catch(error => {
          console.log(error);
        })

    },
    getProductCategories({ commit }) {
      let url = "http://localhost:8080/data/productCategory.json";
      axios.get(url)
        .then(result => {
          commit('SET_PRODUCT_CATAGORIES', result.data)
        }).catch(error => {
          console.log(error);
        })

    },
    getProducts({ commit }) {
      let url = "http://localhost:8080/data/products.json";
      axios.get(url)
        .then(result => {
          commit('SET_PRODUCTS', result.data)
        }).catch(error => {
          console.log(error);
        })

    },
    toggleToWishList(vuexContext, productId) {
      vuexContext.commit('TOGGLE_TO_WISHLIST', productId);
    },
    updateCards(vuexContext, productObj){
      vuexContext.commit('UPDATE_CARDS', productObj);  
    },
    deleteFromCards(vuexContext, productId){
      vuexContext.commit('DELETE_FROM_CARDS', productId);  
    }
  },
  modules: {}
});
