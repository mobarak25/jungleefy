<template>
    <v-flex class="site-content-wrap site_bg">
        <v-container class="py-0">
            <v-flex wrap class="d-flex justify-space-between">
                <!-- sidebar sections -->
                <product-sidebar></product-sidebar>

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

                        <v-sheet>
                            <v-flex class="d-flex align-center">
                                <!-- sort by -->
                                <sort-by :options="items" title="Sort By"></sort-by>

                                <v-flex class="view-indicator">
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
                                    <v-card height="100%" elevation="5" :to="{name:'About'}">
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
import ProductSidebar from "@/components/ProductSidebar";
import SiteBreadcrumb from "@/components/SiteBreadcrumb";
import SortBy from "@/components/sites/pages/SortBy";
import ProductGridCard from "@/components/ProductGridCard";
import ProductListCard from "@/components/ProductListCard";
import Pagination from "@/components/Pagination";

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
            listView: false,
            items: ["Date:Newest on top", "Foo", "Bar", "Fizz", "Buzz"],
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

    computed: {
        getAllProduct() {
            return this.$store.state.allProduct;
        },
    },

    mounted() {
        this.$store.dispatch("getProducts");
    },
};
</script>

<style lang="scss">
.portlet {
    width: calc(100% - 288px);
    padding: rem-calc(20px 30px);
}
.product-top-filter {
    padding-top: rem-calc(13px);
    margin: 0;

    .filter-info {
        @include font(grey, 15px, 25px, medium);

        b {
            color: map-get($colors, primary);
        }
        span {
            color: darken(map-get($colors, grey), 25);
        }
    }

    .view-indicator {
        padding-left: rem-calc(46px);

        .active {
            .v-icon {
                color: map-get($colors, brand);
            }
        }
        .v-icon {
            margin-left: rem-calc(7px);
        }
    }
}
.products-wraper {
    padding-top: rem-calc(15px);
}
.please-contact {
    @include font(false, 16px, 22px, false);
    a {
        color: map-get($colors, brand);
        font-weight: map-get($font-weight, bold);

        &:hover {
            text-decoration: underline;
        }
    }
}
.product-pagination {
    padding: rem-calc(40px 0 37px);
}
</style>