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
                        class="text-none bg-white"
                        :to="{name:options.url}"
                    >Show All</v-btn>
                </h2>
            </v-flex>

            <product-card :product-data="filteredProducts" :sell-btn="options.postAd"></product-card>
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
            if (this.options.url == "AllFeaturedAuctions") {
                return this.options.products.slice(0, 7);
            } else {
                return this.options.products.slice(0, 4);
            }
        },
    },
};
</script>

<style lang="scss">
@import "@/assets/sass/product.scss";

.home-product-sections {
    padding-top: rem-calc(25px);
}
.home-sections-title {
    h2 {
        position: relative;
        padding-bottom: rem-calc(8px);
        margin-bottom: rem-calc(16px);
        @include font(primary, 22px, 33px, medium);

        &:before {
            @include sudo(50px, 2px, left, 0, bottom, 0, brand);
        }

        .v-btn.v-btn--outlined.v-btn--text {
            background-color: map-get($colors, light);
            border-color: map-get($colors, brand);
        }
    }
}
</style>


