<template>
    <v-flex class="site-content-wrap site_bg">
        <v-container class="py-0">
            <v-card tile>
                <v-sheet class="watch-list-wrap">
                    <h1>Favorite Product</h1>
                    <span
                        class="watch-list-count"
                        v-text="`You have ${wishListProducts.length} product(s) in your wishlist`"
                    ></span>

                    <v-flex class="watch-list-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>
                                        <div style="width: 100px;">Unit Price</div>
                                    </th>
                                    <th>
                                        <div style="width: 132px;">Product Type</div>
                                    </th>
                                    <th colspan="2">Stock Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="wishListProduct in wishListProducts.slice(0, 5)"
                                    :key="wishListProduct.id"
                                >
                                    <td data-label="Product Name">
                                        <v-layout class="wishlist-products-item">
                                            <v-img
                                                contain
                                                max-width="80"
                                                :src="require('@/assets/images/products/'+ wishListProduct.image)"
                                                alt="Image"
                                            ></v-img>
                                            <v-flex class="wishlist-product-title flex-grow-0">
                                                <h4 v-text="wishListProduct.title"></h4>
                                                <a href="javascript:void(0)">
                                                    <v-icon>mdi-delete</v-icon>
                                                </a>
                                            </v-flex>
                                        </v-layout>
                                    </td>
                                    <td data-label="Unit Price">
                                        <span class="unit-price" v-text="wishListProduct.price"></span>

                                        <span class="bidding-status">Current Bid</span>
                                    </td>
                                    <td data-label="Product Type">
                                        <v-sheet
                                            v-if="wishListProduct.type=='Auction'"
                                            tag="span"
                                            dark
                                            color="brand"
                                            class="auction-label"
                                        >Auction</v-sheet>
                                        <span class="auction-label-text" v-else>Without Auction</span>
                                    </td>
                                    <td data-label="Stock Status">
                                        <span
                                            v-if="wishListProduct.qty > 0"
                                            v-text="'In Stock'"
                                            class="stock-status"
                                        ></span>
                                        <span v-else v-text="'Out of stock'" class="stock-status"></span>
                                    </td>
                                    <td data-label="Action" class="text-center">
                                        <v-btn
                                            v-if="wishListProduct.qty > 0 && wishListProduct.type !=='Auction'"
                                            href="#"
                                            tile
                                            depressed
                                            class="brand white--text text-none"
                                        >Add to Cart</v-btn>
                                        <v-flex v-else>
                                            <v-btn
                                                tile
                                                depressed
                                                class="grey white--text text-none"
                                            >Add to Cart</v-btn>
                                            <br />
                                            <span
                                                class="not-available"
                                            >This Product is not available for cart</span>
                                        </v-flex>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <v-flex class="pt-5 d-flex justify-space-between align-center">
                            <!-- pagination -->
                            <pagination class="order-2"></pagination>

                            <v-btn
                                href="#"
                                tile
                                depressed
                                class="more-product brand white--text text-none order-1"
                            >View More Product</v-btn>
                        </v-flex>
                    </v-flex>
                </v-sheet>
            </v-card>

            <v-card tile>
                <v-sheet class="watch-list-related-product">
                    <!-- Related Products sections -->
                    <related-products></related-products>
                </v-sheet>
            </v-card>
        </v-container>
    </v-flex>
</template>

<script>
import RelatedProducts from "@/components/sites/common/RelatedProducts";
import Pagination from "@/components/services/Pagination";

export default {
    name: "WatchList",
    components: {
        RelatedProducts,
        Pagination,
    },

    data() {
        return {
            wishListProducts: [],
        };
    },

    methods: {
        getWishListProducts() {
            let url = "http://localhost:8080/data/products.json";
            this.$http
                .get(url)
                .then((result) => {
                    this.wishListProducts = result.data.products;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },

    mounted() {
        this.getWishListProducts();
    },
};
</script>

<style lang="scss">
@import "@/assets/sass/watch_list.scss";
</style>