<template>
    <v-flex class="product-details-summery">
        <v-flex class="product-details-box">
            <small class="category">
                Electronics
                <v-btn :ripple="false" fab elevation="5" width="30" height="30">
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
            </small>
            <h1>LG G Flex2 H950 4G LTE 32GB Rom 3GB Ram AT&T SmartPhone</h1>
        </v-flex>

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
            <quantity-holder :qty="2" :product-id="5"></quantity-holder>
        </v-sheet>

        <v-layout wrap class="btn-holder justify-space-between">
            <v-flex class="btn-box">
                <v-btn href="#" block tile depressed class="primary white--text text-none">Buy Now</v-btn>
            </v-flex>
            <v-flex class="btn-box">
                <v-btn href="#" block tile depressed class="brand white--text text-none">Add to Cart</v-btn>
            </v-flex>
        </v-layout>

        <v-layout class="share-product align-center">
            <span>Share:</span>
            <!-- Product-Social -->
            <product-social></product-social>
        </v-layout>
    </v-flex>
</template>

<script>
import QuantityHolder from "@/components/QuantityHolder";
import ProductSocial from "@/components/ProductSocial";
export default {
    name: "ProductDetailsSummery",
    components: {
        QuantityHolder,
        ProductSocial,
    },
    data() {
        return {
            rating: 2,
        };
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/product_details_summery.scss";
</style>