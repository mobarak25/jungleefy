import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "this is store",
    featuredAuctions: {},
    trendingProducts: {},
    auctionsClosing: {},
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

    }
  },
  modules: {}
});
