<template>
    <!-- Product section -->
    <v-flex class="product-box">
        <v-card class="product-card" elevation="3">
            <v-img
                :title="product.title"
                :src="require('@/assets/images/products/'+ product.image)"
                alt="Products"
            >
                <router-link :to="{name:'ProductDetails'}" class="fill-height d-block"></router-link>
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

                    <v-flex class="flex-grow-0">
                        <v-btn fab elevation="2">
                            <v-icon class="grey--text">mdi-heart</v-icon>
                        </v-btn>

                        <v-btn color="brand" fab elevation="2">
                            <v-icon class="white--text">mdi-cart</v-icon>
                        </v-btn>
                    </v-flex>
                </v-card-text>

                <v-card-text class="pb-3 px-4 product-btm-labels">
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

            <v-card-subtitle
                class="product-sub-title d-flex justify-space-between font-weight-light"
            >
                <span v-text="product.category"></span>

                <v-sheet class="share-product-wrap share-product-grid">
                    <v-icon class="grey--text">mdi-share</v-icon>

                    <product-social></product-social>
                </v-sheet>
            </v-card-subtitle>

            <v-card-text class="text--primary pb-0">
                <v-flex class="product-information">
                    <div class="product-title">
                        <router-link :to="{name:'ProductDetails'}" v-text="product.title"></router-link>
                    </div>

                    <div class="product-price-box pb-2">
                        <v-sheet tag="span" class="product-price" v-text="product.price"></v-sheet>

                        <v-sheet
                            v-if="product.oldPrice"
                            tag="span"
                            class="bidding-status text-decoration-line-through"
                            v-text="product.oldPrice"
                        ></v-sheet>
                        <v-sheet v-else tag="span" class="bidding-status">Bid Start</v-sheet>
                    </div>

                    <div class="product-location">
                        <v-icon>mdi-map-marker</v-icon>Sekertack | Mohammadpur, Dhaka
                    </div>
                </v-flex>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="product-bottom">
                <v-layout class="justify-space-between flex-wrap">
                    <v-sheet class="auction-time-holder">
                        <span class="time-title">Time Left:</span>
                        <span class="time-value">1 Dey, 6 Hours</span>
                    </v-sheet>

                    <v-sheet class="auction-bid-holder">
                        <span class="bid-title">Bid:</span>
                        <span class="bid-value">16</span>
                    </v-sheet>
                </v-layout>
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
import ProductSocial from "@/components/ProductSocial";
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
@import "@/assets/sass/product_grid_cart.scss";
</style>