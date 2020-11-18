<template>
    <v-main>
        <!-- Banner Section -->
        <HomeBanner />

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
import HomeBanner from "@/components/HomeBanner";
import HomeProdutSections from "@/components/HomeProdutSections";
import FeaturedProducts from "@/components/FeaturedProducts";
import HomePopularCategory from "@/components/HomePopularCategory";
import HomeSellerSection from "@/components/HomeSellerSection";
import HowToBid from "@/components/HowToBid";
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
    data: () => ({
        featuredAuctions: {},
        auctionsClosing: {},
        trendingProducts: {},
    }),

    methods: {
        getFeaturedAuctions() {
            let url = "http://localhost:8080/data/featuredAuctions.json";
            this.$http
                .get(url)
                .then((res) => {
                    this.featuredAuctions = res.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        getAuctionsClosing() {
            let url = "http://localhost:8080/data/auctionsClosingProducts.json";
            this.$http
                .get(url)
                .then((res) => {
                    this.auctionsClosing = res.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        getTrendingProducts() {
            let url = "http://localhost:8080/data/trendingProducts.json";
            this.$http
                .get(url)
                .then((res) => {
                    this.trendingProducts = res.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },

    mounted() {
        this.getFeaturedAuctions();
        this.getAuctionsClosing();
        this.getTrendingProducts();
    },
};
</script>