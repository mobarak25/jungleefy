<template>
    <v-layout wrap class="home-product-sections" tag="section">
        <v-container>
            <v-flex class="home-sections-title">
                <h2>
                    {{options.title}}
                    <v-btn
                        height="30"
                        width="90"
                        outlined
                        rounded
                        text
                        color="primary"
                        class="color text-none"
                        :to="{name:options.url}"
                    >Show All</v-btn>
                </h2>
            </v-flex>

            <product-card :product-data="filteredProducts"></product-card>

            <v-col lg="3">
                <v-flex class="product-box">
                    <v-card elevation="5" :to="{name:'About'}">
                        <v-img
                            contain
                            class="white--text align-end"
                            :src="require('@/assets/images/sell-banner.png')"
                        >
                            <v-flex class="sell-btn-wrap">
                                <v-btn dark color="brand" depressed tile class="sell-btn text-none">
                                    <v-icon>mdi-plus-thick</v-icon>Post your Ad
                                </v-btn>
                            </v-flex>
                        </v-img>
                    </v-card>
                </v-flex>
            </v-col>
        </v-container>
    </v-layout>
</template>
<script>
import ProductCard from "./ProductCard";
export default {
    name: "HomeProductSections",
    components: {
        ProductCard,
    },
    props: {
        options: Object,
    },
    data: () => ({
        color: "brand",
    }),
    computed: {
        filteredProducts: function () {
            return this.options.products.slice(0, 7);
        },
    },
};
</script>

<style lang="scss">
@import "@/assets/sass/product.scss";
</style>


