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

                                <v-flex class="quantity-holder d-flex flex-grow-0">
                                    <v-icon @click="decrease()">mdi-minus</v-icon>
                                    <v-text-field
                                        v-model.number="quantity"
                                        step="1"
                                        @keyup="checkingZero()"
                                        solo
                                        flat
                                        hide-details
                                        type="number"
                                    ></v-text-field>
                                    <v-icon @click="increase()">mdi-plus</v-icon>
                                </v-flex>
                            </v-sheet>
                        </v-flex>
                        <v-flex class="product-details-info">fsd</v-flex>
                    </v-layout>
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

export default {
    name: "Products",
    components: {
        SiteBreadcrumb,
    },

    data() {
        return {
            rating: 4,
            quantity: 1,
        };
    },

    methods: {
        increase() {
            this.quantity++;
        },
        decrease() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        },

        checkingZero() {
            if (
                Number(this.quantity) === this.quantity &&
                this.quantity % 1 !== 0
            ) {
                this.quantity = Math.floor(this.quantity);
            }

            if (this.quantity <= 1) {
                parseInt((this.quantity = 1));
            }
        },
    },
};
</script>

<style lang="scss">
@import "@/assets/sass/product_details.scss";
</style>