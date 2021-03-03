<template>
    <v-carousel cycle max-height="653">
        <v-carousel-item v-for="slide in slides" :key="slide.id">
            <v-layout tag="section" class="banner-wrapper">
                <v-img
                    :src="require('@/assets/images/'+ slide.image)"
                    alt="Banner Image"
                    title="Banner Image"
                >
                    <v-flex class="banner-caption d-flex fill-height align-center">
                        <v-container class="py-0">
                            <v-btn href="#" tile depressed class="brand white--text">
                                START FROM
                                <span v-text="slide.start_form" class="d-none d-sm-block"></span>
                            </v-btn>
                            <h2 v-html="slide.title"></h2>
                            <p v-html="slide.caption"></p>
                            <v-flex class="banner-btns">
                                <v-btn href="#" tile depressed class="white brand--text">
                                    Browse auctions
                                    <v-icon class="brand--text pl-2">mdi-trending-neutral</v-icon>
                                </v-btn>

                                <v-btn
                                    href="#"
                                    tile
                                    depressed
                                    class="white brand--text"
                                >Delivery Available</v-btn>
                            </v-flex>
                        </v-container>
                    </v-flex>
                    <v-icon class="banner-truck">mdi-truck</v-icon>
                </v-img>
            </v-layout>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    name: "HomeBanner",

    data() {
        return {
            slides: [
                {
                    id: 1,
                    start_form: "TK 200",
                    title: "BEST Deal <br />CATCH IF YOU CAN",
                    caption:
                        "Don't miss out! Amazing deals taking <br />place daily at online auctions.",
                    image: "home_banner.png",
                },
                {
                    id: 2,
                    start_form: "TK 200",
                    title: "BEST Deal <br />CATCH IF YOU CAN",
                    caption:
                        "Don't miss out! Amazing deals taking <br />place daily at online auctions.",
                    image: "home_banner.png",
                },
                {
                    id: 3,
                    start_form: "TK 200",
                    title: "BEST Deal <br />CATCH IF YOU CAN",
                    caption:
                        "Don't miss out! Amazing deals taking <br />place daily at online auctions.",
                    image: "home_banner.png",
                },
                {
                    id: 4,
                    start_form: "TK 200",
                    title: "BEST Deal <br />CATCH IF YOU CAN",
                    caption:
                        "Don't miss out! Amazing deals taking <br />place daily at online auctions.",
                    image: "home_banner.png",
                },
                {
                    id: 5,
                    start_form: "TK 200",
                    title: "BEST Deal <br />CATCH IF YOU CAN",
                    caption:
                        "Don't miss out! Amazing deals taking <br />place daily at online auctions.",
                    image: "home_banner.png",
                },
            ],
        };
    },
};
</script>

<style lang="scss">
@import "@/assets/sass/home_banner.scss";
</style>