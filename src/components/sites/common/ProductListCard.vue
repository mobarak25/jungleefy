<template>
    <!-- Product section -->
    <v-flex class="product-box">
        <v-card elevation="3" class="product-card">
            <v-img
                :title="product.title"
                :src="require('@/assets/images/products/'+ product.image)"
                alt="Products"
                class="product-image"
            >
                <router-link to="/" class="fill-height d-block"></router-link>
                <v-card-text class="product-top-labels py-2 px-4 d-flex justify-space-between">
                    <v-flex class="flex-grow-0">
                        <v-sheet
                            v-if="product.type=='Auction'"
                            tag="span"
                            dark
                            color="brand"
                            class="py-1 px-3 font-weight-light text-center d-inline-block align-center"
                        >Auction</v-sheet>
                    </v-flex>
                </v-card-text>

                <v-card-text class="pb-3 product-btm-labels">
                    <v-sheet
                        v-if="product.status=='Used'"
                        tag="span"
                        dark
                        color="primary"
                        class="py-1 px-3 font-weight-light text-center d-inline-block align-center"
                    >Used</v-sheet>
                    <v-sheet
                        v-else-if="product.status=='New'"
                        tag="span"
                        dark
                        color="brand"
                        class="py-1 px-3 font-weight-light text-center d-inline-block align-center"
                    >New</v-sheet>
                    <v-sheet
                        v-else-if="product.status=='Lot'"
                        tag="span"
                        dark
                        color="primary"
                        class="py-1 px-3 font-weight-light text-center d-inline-block align-center"
                    >Lot</v-sheet>
                    <v-sheet
                        v-else-if="product.status=='Shop Woner'"
                        tag="span"
                        dark
                        color="primary"
                        class="py-1 px-3 font-weight-light text-center d-inline-block align-center"
                    >Shop Woner</v-sheet>
                </v-card-text>
            </v-img>

            <v-sheet class="product-list-mid">
                <v-card-subtitle
                    class="product-sub-title font-weight-light"
                    v-text="product.category"
                ></v-card-subtitle>

                <div class="product-title">
                    <a href="#" v-text="product.title"></a>
                </div>

                <v-layout class="justify-space-between flex-wrap time-and-bid-wrap">
                    <v-sheet class="auction-time-holder">
                        <span class="time-title">Time Left:</span>
                        <span class="time-value">1 Dey, 6 Hours</span>
                    </v-sheet>

                    <v-sheet class="auction-bid-holder">
                        <span class="bid-title">Bid:</span>
                        <span class="bid-value">16</span>
                    </v-sheet>
                </v-layout>

                <div class="product-location">
                    <v-icon>mdi-map-marker</v-icon>Sekertack | Mohammadpur, Dhaka
                </div>
            </v-sheet>

            <v-card-text class="product-bottom">
                <v-card-text class="product-top-labels">
                    <v-btn fab elevation="2">
                        <v-icon class="grey--text">mdi-heart</v-icon>
                    </v-btn>

                    <v-btn color="brand" fab elevation="2">
                        <v-icon class="white--text">mdi-cart</v-icon>
                    </v-btn>
                    <v-btn fab class="share-product-wrap">
                        <v-icon class="grey--text">mdi-share</v-icon>

                        <!-- Product-Social -->
                        <v-flex class="share-productIn">
                            <v-card class="share-product">
                                <product-social></product-social>
                            </v-card>
                        </v-flex>
                    </v-btn>
                </v-card-text>
                <div class="product-price-box pb-2">
                    <v-sheet class="product-price" v-text="product.price"></v-sheet>

                    <v-sheet
                        v-if="product.oldPrice"
                        class="bidding-status text-decoration-line-through"
                        v-text="product.oldPrice"
                    ></v-sheet>
                    <v-sheet v-else class="bidding-status">Bid Start</v-sheet>
                </div>
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
import ProductSocial from "@/components/sites/pages/ProductSocial";
export default {
    name: "ProductCard",
    components: {
        ProductSocial,
    },
    props: {
        product: {},
    },
    data() {
        return {};
    },
    mounted() {},
};
</script>

<style lang="scss">
@import "@/assets/sass/product_list_cart.scss";
</style>