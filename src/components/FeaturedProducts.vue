<template>
    <v-flex class="home-featured-wrap">
        <v-container>
            <v-img
                class="align-top"
                :src="require('@/assets'+'/images/big-featured-image.jpg')"
                alt="Featured image"
            >
                <v-layout wrap>
                    <v-flex class="home-featured-left flex-grow-0">
                        <h3>Featured products</h3>
                        <span class="sub-title d-block">
                            Ready in one day with
                            <br />Curbside Pickup.
                        </span>
                        <v-btn depressed dark tile color="brand">Shop Now</v-btn>
                    </v-flex>
                    <v-flex class="home-featured-right flex-grow-0">
                        <v-slide-group show-arrows class="slide-item-wrap">
                            <v-slide-item
                                v-for="product in featuredProducts.products"
                                :key="product.id"
                            >
                                <v-card class="slide-item py-2" width="173">
                                    <router-link :to="{name:'Home'}">
                                        <v-img
                                            contain
                                            max-height="130"
                                            :src="require('@/assets/images/products/'+ product.image)"
                                            alt="Products"
                                        ></v-img>
                                    </router-link>
                                    <v-card-text class="price" v-text="product.price"></v-card-text>
                                    <v-card-subtitle
                                        class="discount-price"
                                        v-text="product.discount_price"
                                    ></v-card-subtitle>
                                    <v-card-title class="featured-product-title">
                                        <a href v-text="product.title"></a>
                                    </v-card-title>
                                    <v-card-text class="d-flex align-center rating">
                                        <v-rating
                                            dense
                                            readonly
                                            v-model="rating"
                                            color="yellow darken-3"
                                            background-color="grey"
                                            empty-icon="$ratingFull"
                                            size="15"
                                        ></v-rating>
                                        <span class="d-block ml-1">{{ rating }} (653)</span>
                                    </v-card-text>
                                </v-card>
                            </v-slide-item>
                        </v-slide-group>
                    </v-flex>
                </v-layout>
            </v-img>
        </v-container>
    </v-flex>
</template>

<script>
export default {
    name: "FeaturedProducts",
    data() {
        return {
            rating: 4.2,
            featuredProducts: "",
        };
    },

    methods: {
        getProduct() {
            let url = "http://localhost:8080/data/featuredProducts.json";
            this.$http
                .get(url)
                .then((res) => {
                    this.featuredProducts = res.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },

    mounted() {
        this.getProduct();
    },
};
</script>

<style lang="scss">
@import "@/assets/sass/home_feature_product.scss";
</style>