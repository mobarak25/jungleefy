<template>
    <v-flex class="home-featured-wrap">
        <v-container>
            <v-img
                class="align-top"
                :src="require('@/assets/images/big-featured-image.jpg')"
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
                        <v-slide-group class active-class="success" show-arrows>
                            <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
                                <v-card
                                    :color="active ? undefined : 'grey lighten-1'"
                                    class="ma-4"
                                    height="200"
                                    width="173"
                                    @click="toggle"
                                >
                                    <v-row class="fill-height" align="center" justify="center">
                                        <v-scale-transition>
                                            <v-icon
                                                v-if="active"
                                                color="white"
                                                size="48"
                                                v-text="'mdi-close-circle-outline'"
                                            ></v-icon>
                                        </v-scale-transition>
                                    </v-row>
                                </v-card>
                            </v-slide-item>
                        </v-slide-group>
                    </v-flex>
                </v-layout>
            </v-img>
        </v-container>
    </v-flex>
</template>

<style lang="scss">
.home-featured-wrap{
    padding-top: rem-calc(30px);
    
    .home-featured-left {
        width: 26.5%;
        padding: rem-calc(65px 44px 0);

        h3 {
            padding-bottom: rem-calc(15px);
            @include font(primary, 25px, 26px, semi-bold);
        }
        .sub-title {
            padding-bottom: rem-calc(29px);
            color: darken(map-get($colors, gray), 9);
            @include font(false, 22px, 26px, semi-bold);
        }
        .v-btn{
            width: 125px;
            height: 48px;
            @include font(false, 16px, 48px, semi-bold);
        }
    }

    .home-featured-right {
        width: 73.5%;
        padding: rem-calc(50px 0 0);
    }
}
</style>