<template>
    <div class="row">
        <!-- Product section -->
        <v-col lg="3" md="4" v-for="product in products" :key="product.id">
            <v-flex class="product-box">
                <v-card elevation="3">
                    <v-img
                        :title="product.title"
                        max-height="285px"
                        :src="require('@/assets/images/products/'+ product.image)"
                        alt="Products"
                    >
                        <router-link to="/" class="white--text fill-height d-flex align-end">
                            <v-card-text class="product-top-labels text-right pr-2 pt-2">
                                <v-btn fab width="35" height="35" elevation="2">
                                    <v-icon class="grey--text">mdi-heart mdi-18px</v-icon>
                                </v-btn>

                                <v-btn color="brand" fab width="35" height="35" elevation="2">
                                    <v-icon class="white--text">mdi-cart mdi-18px</v-icon>
                                </v-btn>
                            </v-card-text>

                            <v-card-text class="pb-3">
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
                        </router-link>
                    </v-img>

                    <v-card-subtitle class="pb-2 font-weight-light" v-text="product.category"></v-card-subtitle>

                    <v-card-text class="text--primary pb-0">
                        <v-flex class="product-information">
                            <div class="product-title">
                                <a href="#" v-text="product.title"></a>
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

        <!-- Post your add section -->
        <v-col v-if="productData.postAd" lg="3">
            <v-flex class="product-box">
                <v-card elevation="5" :to="{name:'About'}">
                    <v-img
                        contain
                        class="white--text align-end"
                        :src="require('@/assets/images/sell-banner.png')"
                        alt="Sell button image"
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
    </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: {
        productData: {},
    },
    data() {
        return {
            getProps: {},
        };
    },
    computed: {
        products() {
            if (this.productData.products) {
                if (this.productData.url == "AllFeaturedAuctions") {
                    return this.productData.products.slice(0, 7);
                }
                return this.productData.products.slice(0, 4);
            }
            return [];
        },
    },
};
</script>