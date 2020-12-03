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

            <v-row>
                <v-col
                    class="product-items"
                    lg="3"
                    sm="4"
                    v-for="product in options.products"
                    :key="product.id"
                >
                    <product-card :product="product"></product-card>
                </v-col>

                <!-- Post your add section -->
                <v-col v-if="options.postAd" class="product-items" lg="3" sm="4">
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
};
</script>

<style lang="scss">
@import "@/assets/sass/product_cart.scss";

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

@include media(479px) {
    .home-sections-title {
        h2 {
            font-size: 18px !important;
        }
    }
}
</style>


