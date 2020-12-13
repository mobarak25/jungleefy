<template>
    <v-flex class="site-content-wrap site_bg">
        <v-container class="py-0">
            <v-card tile>
                <v-sheet class="product-details-wrap">
                    <!-- breadcrumb sections -->
                    <site-breadcrumb></site-breadcrumb>

                    <v-layout wrap class="product-details-top">
                        <v-flex class="product-details-images">
                            <v-img
                                :src="require('@/assets/images/product-details.jpg')"
                                alt="big image"
                            ></v-img>
                        </v-flex>
                        <v-flex class="product-details-summery">
                            <small class="category">Electronics</small>
                            <h1
                                class="product-title"
                            >LG G Flex2 H950 4G LTE 32GB Rom 3GB Ram AT&T SmartPhone</h1>

                            <ul>
                                <li>
                                    Condition:
                                    <span>Used</span>
                                </li>
                                <li>
                                    Brand:
                                    <span>LG</span>
                                </li>
                            </ul>

                            <v-sheet class="d-flex align-center rating">
                                <v-rating
                                    dense
                                    readonly
                                    v-model="rating"
                                    color="yellow darken-3"
                                    background-color="grey"
                                    empty-icon="$ratingFull"
                                    size="15"
                                ></v-rating>
                                <span class="d-block ml-1">38 customer reviews</span>
                            </v-sheet>
                            <span class="availablity">
                                Availablity:
                                <span class="pieces">10 Pcs</span>
                                <b>In Stock</b>
                            </span>

                            <v-sheet class="price">
                                <span class="price-payable">TK 4000</span>
                                <span class="price-orginal">TK4500</span>
                                <span class="price-offer">-20%</span>
                            </v-sheet>

                            <v-sheet class="quantity d-flex align-center">
                                <span class="quantity-title">Quantity</span>

                                <!-- Quantity-Holder -->
                                <quantity-holder></quantity-holder>
                            </v-sheet>

                            <v-layout wrap class="btn-holder justify-space-between">
                                <v-flex class="btn-box">
                                    <v-btn
                                        href="#"
                                        block
                                        tile
                                        depressed
                                        class="primary white--text text-none"
                                    >Buy Now</v-btn>
                                </v-flex>
                                <v-flex class="btn-box">
                                    <v-btn
                                        href="#"
                                        block
                                        tile
                                        depressed
                                        class="brand white--text text-none"
                                    >Add to Cart</v-btn>
                                </v-flex>
                            </v-layout>

                            <v-layout class="share-product align-center">
                                <span>Share:</span>
                                <!-- Product-Social -->
                                <product-social></product-social>
                            </v-layout>
                        </v-flex>
                        <v-flex class="product-details-info">
                            <v-card outlined>
                                <v-flex class="delivery-option">
                                    <v-card-title class="pa-0 pb-3 d-flex justify-space-between">
                                        Delivery Options
                                        <v-tooltip right>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-icon
                                                    v-bind="attrs"
                                                    v-on="on"
                                                >mdi-information-outline</v-icon>
                                            </template>
                                            <span class="tooltip-info">
                                                Lorem ipsum, dolor sit
                                                <br />amet consectetur
                                                <br />adipisicing elit.
                                                <br />Dolorem facilis unde
                                                <br />fugiat eum iure sequi
                                            </span>
                                        </v-tooltip>
                                    </v-card-title>

                                    <v-card-text class="pa-0 pb-3 d-flex justify-space-between">
                                        <span>
                                            4/6, block c
                                            <br />Mohammadpur, Dhaka
                                        </span>
                                        <span class="grey--text text--darken-2">Change</span>
                                    </v-card-text>

                                    <v-card-text
                                        class="pa-0 pb-2 d-flex justify-space-between align-center"
                                    >
                                        <span>
                                            Home Delivery
                                            <br />
                                            <span
                                                class="grey--text text--darken-3 font-weight-medium"
                                            >4 - 7</span>
                                        </span>
                                        <span
                                            class="grey--text text--darken-3 font-weight-medium"
                                        >TK 50</span>
                                    </v-card-text>

                                    <v-card-text class="pa-0 pb-2">Cash on Delivery Available</v-card-text>
                                </v-flex>

                                <v-divider></v-divider>
                                <v-flex class="delivery-option">
                                    <v-card-title
                                        class="pa-0 pb-3 text-decoration-underline"
                                    >Seller information</v-card-title>

                                    <v-card-text class="pa-0 pb-2">
                                        <a href="#" class="brand--text pr-6">owen2015</a>
                                        <span class="grey--text text--darken-3">Review</span>

                                        <span class="brand--text">
                                            (538
                                            <v-icon class="brand--text star">mdi-star</v-icon>)
                                        </span>
                                    </v-card-text>
                                </v-flex>

                                <v-divider></v-divider>
                                <v-flex class="delivery-option">
                                    <v-card-title class="pa-0 pb-3 d-flex justify-space-between">
                                        Return & Warranty
                                        <v-tooltip right>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-icon
                                                    v-bind="attrs"
                                                    v-on="on"
                                                >mdi-information-outline</v-icon>
                                            </template>
                                            <span class="tooltip-info">
                                                Lorem ipsum, dolor sit
                                                <br />amet consectetur
                                                <br />adipisicing elit.
                                                <br />Dolorem facilis unde
                                                <br />fugiat eum iure sequi
                                            </span>
                                        </v-tooltip>
                                    </v-card-title>

                                    <v-card-text class="pa-0 pb-2">
                                        <span class="grey--text text--darken-3">7 Days Returns</span>
                                        <br />
                                        <span>Change of mind is not applicable</span>
                                        <br />
                                        <span>Warranty not available</span>
                                    </v-card-text>
                                </v-flex>

                                <v-divider></v-divider>
                                <v-flex class="delivery-option">
                                    <v-card-title class="pa-0 pb-3">Payments Method</v-card-title>

                                    <v-card-text class="pa-0 pb-2">
                                        <v-img
                                            :src="require('@/assets/images/payment-methods.png')"
                                            alt="Pyment Method"
                                            max-width="260"
                                        ></v-img>
                                    </v-card-text>
                                </v-flex>
                            </v-card>
                        </v-flex>
                    </v-layout>

                    <!-- Product Information sections -->
                    <product-information></product-information>

                    <!-- Related Products sections -->
                    <related-products></related-products>

                    <!-- Reviews And Rattings sections -->
                    <reviews-and-ratings></reviews-and-ratings>
                </v-sheet>
            </v-card>

            <v-card tile elevation="2" class="mt-4 py-4">
                <v-card-text class="pa-0 black--text text-center please-contact">
                    If you want to Buy or Sell then create you post? please
                    <router-link :to="{name:'Contact'}">Contact</router-link>
                </v-card-text>
            </v-card>
        </v-container>
    </v-flex>
</template>

<script>
import SiteBreadcrumb from "@/components/SiteBreadcrumb";
import QuantityHolder from "@/components/QuantityHolder";
import ProductSocial from "@/components/ProductSocial";
import ProductInformation from "@/components/ProductInformation";
import RelatedProducts from "@/components/RelatedProducts";
import ReviewsAndRatings from "@/components/ReviewsAndRatings";

export default {
    name: "Products",
    components: {
        SiteBreadcrumb,
        QuantityHolder,
        ProductSocial,
        ProductInformation,
        RelatedProducts,
        ReviewsAndRatings,
    },

    data() {
        return {
            rating: 4,
        };
    },
};
</script>

<style lang="scss">
@import "@/assets/sass/product_details.scss";
</style>