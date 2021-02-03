<template>
    <v-flex class="site-content-wrap site_bg">
        <v-flex class="post-ad-wrap">
            <v-container class="py-0">
                <!-- Choose option sections -->
                <v-card tile elevation="1">
                    <v-flex class="choose-option">
                        <h4>Let's post an ad. Choose any option below:</h4>
                        <v-layout wrap class="choose-option-box justify-space-between">
                            <v-flex class="options-in">
                                <v-flex class="options active">
                                    <router-link
                                        :to="{name:'postYourAdCategory'}"
                                        class="d-flex fill-height align-center"
                                    >
                                        <v-flex
                                            class="options-icon d-flex align-center justify-center"
                                        >
                                            <img
                                                :src="require('@/assets/images/hands.png')"
                                                alt="Hands"
                                            />
                                        </v-flex>

                                        <span>I want to Sale something</span>
                                    </router-link>
                                </v-flex>
                            </v-flex>
                            <v-flex class="options-in">
                                <v-flex class="options d-flex align-center">
                                    <a href="#" class="d-flex fill-height align-center">
                                        <v-flex
                                            class="options-icon d-flex align-center justify-center"
                                        >
                                            <img
                                                :src="require('@/assets/images/cart.png')"
                                                alt="cart"
                                            />
                                        </v-flex>

                                        <span>I want to Buy something</span>
                                    </a>
                                </v-flex>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-card>

                <!-- Choose option details sections -->
                <v-card tile elevation="1" class="mt-4">
                    <v-layout wrap class="options-details justify-space-between">
                        <v-flex class="options-details-box">
                            <h4>Sale your item with auction & without auction</h4>
                            <p>Do you have something to sell, to lease, any help to extend or an employment opportunity offer? Post it at Jungleebazaar, its free, for neighborhood business and exceptionally simple to utilize!</p>
                        </v-flex>

                        <v-flex class="options-details-box">
                            <h4>Buy your item with auction & without auction</h4>
                            <p>Decide on the area you’re interested in and contact the local Junglee Bazaar. They will be able to advise you on any upcoming auctions and add you to a mailing list so that you receive the latest auction catalogues.</p>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-container>
        </v-flex>
    </v-flex>
</template>

<script>
export default {
    name: "PostYourAd",

    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/post_your_ad.scss";
</style>