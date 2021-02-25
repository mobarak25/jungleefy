<template>
    <v-main>
        <!-- Banner Section -->
        <home-banner></home-banner>

        <!-- Featured Auctions  Section-->
        <home-produt-sections :options="featuredAuctions"></home-produt-sections>

        <featured-products></featured-products>

        <!-- Auctions Closing  Section-->
        <home-produt-sections :options="auctionsClosing"></home-produt-sections>

        <!-- Home Popular Category-->
        <home-popular-category></home-popular-category>

        <!-- Home Seller Section-->
        <home-seller-section></home-seller-section>

        <!-- Featured Auctions  Section-->
        <home-produt-sections :options="trendingProducts"></home-produt-sections>

        <!-- How To Bid Section-->
        <HowToBid />
    </v-main>
</template>

<script>
import HomeBanner from "@/components/sites/pages/HomeBanner";
import HomeProdutSections from "@/components/sites/pages/HomeProdutSections";
import FeaturedProducts from "@/components/sites/pages/FeaturedProducts";
import HomePopularCategory from "@/components/sites/pages/HomePopularCategory";
import HomeSellerSection from "@/components/sites/pages/HomeSellerSection";
import HowToBid from "@/components/sites/common/HowToBid";
export default {
    name: "Home",

    components: {
        HomeBanner,
        HomeProdutSections,
        FeaturedProducts,
        HowToBid,
        HomePopularCategory,
        HomeSellerSection,
    },

    computed: {
        featuredAuctions() {
            return this.$store.state.featuredAuctions;
        },
        trendingProducts() {
            return this.$store.state.trendingProducts;
        },
        auctionsClosing() {
            return this.$store.state.auctionsClosing;
        },
    },

    mounted() {
        this.$store.dispatch("getFeaturedAuctions");
        this.$store.dispatch("getAuctionsClosingProdducts");
        this.$store.dispatch("getTrendingProducts");
    },
};
</script>