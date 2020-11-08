<template>
    <div>
        <v-layout tag="section" class="banner-wrapper">
            <v-img :src="require('@/assets/images/home_banner.png')">
                <v-flex class="banner-caption d-flex fill-height align-center">
                    <v-container>
                        <v-btn href="#" tile depressed class="brand white--text">
                            START FROM
                            <span>TK 200</span>
                        </v-btn>
                    </v-container>
                </v-flex>
            </v-img>
        </v-layout>
        <v-row no-gutters>
            <v-col sm="6">SDFSFD</v-col>
            <v-col sm="6">SDFSFD</v-col>
            <v-col sm="6">SDFSFD</v-col>
        </v-row>
    </div>
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
</style>