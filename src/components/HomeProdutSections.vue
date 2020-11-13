<template>
    <v-layout wrap class="feature-auction" tag="section">
        <v-container>
            <v-flex>
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
                <v-col lg="3">
                    <v-card elevation="2">
                        <v-img
                            class="white--text align-end"
                            height="285px"
                            :src="require('@/assets/images/products/product-1.jpg')"
                        >
                            <v-card-text class="product-top-labels text-right">
                                <v-btn fab width="35" height="35" elevation="2">
                                    <v-icon class="grey--text">mdi-heart mdi-18px</v-icon>
                                </v-btn>
                            </v-card-text>

                            <v-card-text class="pb-3">
                                <v-sheet
                                    tag="span"
                                    dark
                                    color="primary"
                                    width="66"
                                    class="pa-1 font-weight-light text-center d-inline-block align-center"
                                >Used</v-sheet>
                            </v-card-text>
                        </v-img>

                        <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

                        <v-card-text class="text--primary">
                            <div>Whitehaven Beach</div>

                            <div>Whitsunday Island, Whitsunday Islands</div>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-btn color="orange" text>Share</v-btn>

                            <v-btn color="orange" text>Explore</v-btn>
                        </v-card-actions>
                    </v-card>
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
    data: () => ({}),
};
</script>

<style lang="scss">
.product-top-labels {
    position: absolute;
    top: 0;
    right: 0;
}
// @import "@/assets/sass/footer.scss";
</style>