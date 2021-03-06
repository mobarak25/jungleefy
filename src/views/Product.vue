<template>
    <v-flex class="site-content-wrap site_bg" v-resize="onResize">
        <v-btn
            tile
            dark
            color="brand"
            class="filter-btn d-lg-none"
            @click.stop="drawer = !drawer"
        >Filter</v-btn>
        <v-container class="py-0">
            <v-flex wrap class="d-flex justify-space-between">
                <!-- sidebar sections -->
                <product-sidebar v-if="windowSize >= 1264"></product-sidebar>

                <v-flex v-else>
                    <v-scroll-x-reverse-transition>
                        <v-btn
                            tile
                            depressed
                            width="40"
                            min-width="20"
                            class="drawer-toggle d-lg-none"
                            v-if="drawer"
                            @click.stop="drawer = !drawer"
                        >
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                    </v-scroll-x-reverse-transition>
                    <v-navigation-drawer v-model="drawer" temporary app>
                        <product-sidebar></product-sidebar>
                    </v-navigation-drawer>
                </v-flex>

                <v-card tile class="portlet">
                    <!-- breadcrumb sections -->
                    <site-breadcrumb :options="breadcrumbItems"></site-breadcrumb>

                    <!-- Sort by sections -->
                    <v-layout
                        class="product-top-filter d-flex flex-grow-0 flex-wrap justify-space-between"
                    >
                        <v-sheet>
                            <span class="filter-info">
                                <b>Drop shipping</b> (Showing 1 – 24 products
                                <span>ads</span> of 11,075 products
                                <span>ads</span>)
                            </span>
                        </v-sheet>

                        <v-sheet class="product-short">
                            <v-flex class="d-flex flex-wrap justify-space-between align-center">
                                <!-- sort by -->
                                <sort-by
                                    :options="items"
                                    title="Sort By"
                                    select-option="Last 2 Order"
                                ></sort-by>

                                <v-flex class="view-indicator flex-grow-0">
                                    <a
                                        :class="{active:listView}"
                                        @click="listView = true"
                                        href="javascript:;"
                                    >
                                        <v-icon>mdi-format-list-bulleted</v-icon>
                                    </a>
                                    <a
                                        :class="{ active: !listView }"
                                        @click="listView = false"
                                        href="javascript:;"
                                    >
                                        <v-icon>mdi-view-grid-outline</v-icon>
                                    </a>
                                </v-flex>
                            </v-flex>
                        </v-sheet>
                    </v-layout>

                    <!-- Products sections -->
                    <v-flex class="products-wraper">
                        <v-row>
                            <v-col
                                class="product-items"
                                :class="{product_list_items:listView}"
                                lg="3"
                                sm="4"
                                v-for="product in getAllProduct.products"
                                :key="product.id"
                            >
                                <product-grid-card v-if="!listView" :product="product"></product-grid-card>

                                <product-list-card v-if="listView" :product="product"></product-list-card>
                            </v-col>

                            <!-- Post your add section -->
                            <v-col
                                v-if="getAllProduct.postAd && !listView"
                                class="product-items"
                                lg="3"
                                sm="4"
                            >
                                <v-sheet height="100%" class="product-box">
                                    <v-card height="100%" elevation="5" :to="{name:'AboutUs'}">
                                        <v-sheet
                                            height="100%"
                                            class="d-flex align-end"
                                            :style="{'background-image': 'url(' + require('@/assets/images/sell-banner.png') + ')','background-size':'100% 100%'}"
                                        >
                                            <v-flex class="sell-btn-wrap">
                                                <v-btn
                                                    dark
                                                    color="brand"
                                                    depressed
                                                    tile
                                                    class="sell-btn text-none"
                                                >
                                                    <v-icon>mdi-plus-thick</v-icon>Post your Ad
                                                </v-btn>
                                            </v-flex>
                                        </v-sheet>
                                    </v-card>
                                </v-sheet>
                            </v-col>
                        </v-row>
                    </v-flex>

                    <!-- Products Pagination sections -->
                    <v-flex class="product-pagination d-flex justify-end">
                        <pagination></pagination>
                    </v-flex>
                </v-card>
            </v-flex>

            <v-flex wrap class="d-flex justify-end">
                <v-card tile elevation="0" class="mt-4 portlet py-4">
                    <v-card-text class="pa-0 black--text text-center please-contact">
                        If you want to Buy or Sell then create you post? please
                        <router-link :to="{name:'Contact'}">Contact</router-link>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-container>
    </v-flex>
</template>

<script>
import ProductSidebar from "@/components/sites/pages/ProductSidebar";
import SiteBreadcrumb from "@/components/sites/common/SiteBreadcrumb";
import SortBy from "@/components/sites/pages/SortBy";
import ProductGridCard from "@/components/sites/common/ProductGridCard";
import ProductListCard from "@/components/sites/common/ProductListCard";
import Pagination from "@/components/services/Pagination";

export default {
    name: "Products",
    components: {
        ProductSidebar,
        SiteBreadcrumb,
        SortBy,
        ProductGridCard,
        ProductListCard,
        Pagination,
    },

    data() {
        return {
            drawer: false,
            windowSize: "",

            listView: false,
            items: ["Last 2 Order", "Low to high price", "high to Low price"],
            breadcrumbItems: [
                {
                    text: "Home",
                    disabled: false,
                    href: "/",
                },
                {
                    text: "Prosucts",
                    disabled: true,
                    href: "/",
                },
            ],
        };
    },

    methods: {
        onResize() {
            this.windowSize = window.innerWidth;
        },
    },

    computed: {
        getAllProduct() {
            return this.$store.state.allProduct;
        },
    },

    watch: {
        windowSize: function (newVal) {
            if (newVal < 700) {
                this.listView = false;
            }
        },
    },

    mounted() {
        this.$store.dispatch("getProducts");
        this.onResize();
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/product.scss";
</style>