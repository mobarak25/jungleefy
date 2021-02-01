<template>
    <v-sheet wrap class="related-products-slider" tag="section">
        <h2>Similar Listings</h2>
        <v-slide-group center-active max="2" show-arrows class="slide-item-wrap">
            <v-slide-item v-for="product in getRelatedProducts.products" :key="product.id">
                <v-sheet class="slide-item py-2" width="295">
                    <product-grid-card :product="product"></product-grid-card>
                </v-sheet>
            </v-slide-item>
        </v-slide-group>
    </v-sheet>
</template>

<script>
import ProductGridCard from "@/components/sites/common/ProductGridCard";

export default {
    name: "RelatedProduct",
    components: {
        ProductGridCard,
    },
    data() {
        return {};
    },
    computed: {
        getRelatedProducts() {
            return this.$store.state.allProduct;
        },
    },

    mounted() {
        this.$store.dispatch("getProducts");
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/related_products.scss";
</style>