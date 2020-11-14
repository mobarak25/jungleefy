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

            <v-row>
                <v-col lg="3" v-for="product in filteredProducts" :key="product.id">
                    <v-flex class="product-box">
                        <v-card elevation="3">
                            <a href="#">
                                <v-img
                                    class="white--text align-end"
                                    max-height="285px"
                                    :src="require('@/assets/images/products/'+ product.image)"
                                >
                                    <v-card-text class="product-top-labels text-right pr-2 pt-2">
                                        <v-btn fab width="35" height="35" elevation="2">
                                            <v-icon class="grey--text">mdi-heart mdi-18px</v-icon>
                                        </v-btn>

                                        <v-btn
                                            color="brand"
                                            fab
                                            width="35"
                                            height="35"
                                            elevation="2"
                                        >
                                            <v-icon class="white--text">mdi-cart mdi-18px</v-icon>
                                        </v-btn>
                                    </v-card-text>

                                    <v-card-text class="pb-3">
                                        <v-sheet
                                            v-if="product.status=='Used'"
                                            tag="span"
                                            dark
                                            color="primary"
                                            class="py-1 px-2 font-weight-light text-center d-inline-block align-center"
                                        >Used</v-sheet>
                                        <v-sheet
                                            v-else-if="product.status=='New'"
                                            tag="span"
                                            dark
                                            color="brand"
                                            class="py-1 px-2 font-weight-light text-center d-inline-block align-center"
                                        >New</v-sheet>
                                        <v-sheet
                                            v-else-if="product.status=='Lot'"
                                            tag="span"
                                            dark
                                            color="primary"
                                            class="py-1 px-2 font-weight-light text-center d-inline-block align-center"
                                        >Lot</v-sheet>
                                        <v-sheet
                                            v-else-if="product.status=='Shop Woner'"
                                            tag="span"
                                            dark
                                            color="primary"
                                            class="py-1 px-2 font-weight-light text-center d-inline-block align-center"
                                        >Shop Woner</v-sheet>
                                    </v-card-text>
                                </v-img>
                            </a>

                            <v-card-subtitle
                                class="pb-2 font-weight-light"
                                v-text="product.category"
                            ></v-card-subtitle>

                            <v-card-text class="text--primary pb-0">
                                <v-flex class="product-information">
                                    <div class="product-title">
                                        <a href="#" v-text="product.title"></a>
                                    </div>

                                    <div class="product-price-box pb-2">
                                        <v-sheet
                                            tag="span"
                                            class="product-price"
                                            v-text="product.price"
                                        ></v-sheet>
                                        <v-sheet tag="span" class="bidding-status">Bid Start</v-sheet>
                                    </div>

                                    <div class="product-location">
                                        <v-icon>mdi-map-marker</v-icon>Sekertack | Mohammadpur, Dhaka
                                    </div>
                                </v-flex>
                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-text>
                                <v-layout class="justify-space-between">
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
                </v-col>

                <v-col lg="3">
                    <v-flex class="product-box">
                        <v-card elevation="5">
                            <v-img
                                contain
                                class="white--text align-end"
                                :src="require('@/assets/images/sell-banner.png')"
                            >
                                <v-card-text class="pb-3">
                                    <v-sheet
                                        tag="span"
                                        dark
                                        color="primary"
                                        class="py-1 px-2 font-weight-light text-center d-inline-block align-center"
                                    >Used</v-sheet>
                                </v-card-text>
                            </v-img>
                        </v-card>
                    </v-flex>
                </v-col>
            </v-row>
        </v-container>
    </v-layout>
</template>
<script>
export default {
    name: "HomeProductSections",
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


