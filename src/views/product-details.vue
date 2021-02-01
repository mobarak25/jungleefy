<template>
    <v-flex class="site-content-wrap site_bg">
        <v-container class="py-0">
            <v-card tile>
                <v-sheet class="product-details-wrap">
                    <!-- breadcrumb sections -->
                    <site-breadcrumb :options="breadcrumb"></site-breadcrumb>

                    <v-layout wrap class="product-details-top justify-space-between">
                        <!-- product details images -->
                        <v-flex class="product-details-images">
                            <v-img
                                :src="require('@/assets/images/product-details.jpg')"
                                alt="big image"
                            ></v-img>
                        </v-flex>

                        <!-- product details summery auction-->
                        <product-details-summery-auction v-if="false"></product-details-summery-auction>

                        <!-- product details summery -->
                        <product-details-summery v-if="true"></product-details-summery>

                        <!-- product-details-info -->
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
                                    <v-card-text class="pa-0 pb-2">
                                        <span
                                            class="grey--text text--darken-3"
                                        >100% Positive feedback</span>
                                        <br />
                                        <span>Shipping & Handling (Customer Pick-up)</span>
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
import SiteBreadcrumb from "@/components/sites/common/SiteBreadcrumb";
import ProductDetailsSummeryAuction from "@/components/sites/pages/ProductDetailsSummeryAuction";
import ProductDetailsSummery from "@/components/sites/pages/ProductDetailsSummery";
import ProductInformation from "@/components/sites/pages/ProductInformation";
import RelatedProducts from "@/components/sites/common/RelatedProducts";
import ReviewsAndRatings from "@/components/sites/pages/ReviewsAndRatings";

export default {
    name: "Products",
    components: {
        SiteBreadcrumb,
        ProductDetailsSummery,
        ProductDetailsSummeryAuction,
        ProductInformation,
        RelatedProducts,
        ReviewsAndRatings,
    },

    data() {
        return {
            rating: 4,
            breadcrumb: [
                {
                    text: "Home",
                    disabled: false,
                    href: "/",
                },
                {
                    text: "Electronics",
                    disabled: false,
                    href: "/",
                },
                {
                    text:
                        "LG G Flex2 H950 4G LTE 32GB Rom 3GB Ram AT&T SmartPhone",
                    disabled: true,
                    href: "/",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/product_details.scss";
</style>