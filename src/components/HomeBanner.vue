<template>
    <v-layout tag="section" class="banner-wrapper">
        <v-img
            :src="require('@/assets/images/home_banner.png')"
            alt="Banner Image"
            title="Banner Image"
        >
            <v-flex class="banner-caption d-flex fill-height align-center">
                <v-container>
                    <v-btn href="#" tile depressed class="brand white--text">
                        START FROM
                        <span>TK 200</span>
                    </v-btn>
                    <h2>
                        BEST Deal
                        <br />CATCH IF YOU CAN
                    </h2>
                    <p>
                        Don't miss out! Amazing deals taking
                        <br />place daily at online auctions.
                    </p>
                    <v-flex class="banner-btns">
                        <v-btn href="#" tile depressed class="white vulcan--text">
                            Browse auctions
                            <v-icon class="brand--text pl-2">mdi-trending-neutral</v-icon>
                        </v-btn>

                        <v-btn href="#" tile depressed class="white brand--text">Browse auctions</v-btn>
                    </v-flex>
                </v-container>
            </v-flex>
            <v-icon class="banner-truck">mdi-truck</v-icon>
        </v-img>
    </v-layout>
</template>

<script>
export default {
    name: "HomeBanner",

    data() {
        return {};
    }
};
</script>

<style lang="scss">
@import "@/assets/sass/home_banner.scss";
</style>