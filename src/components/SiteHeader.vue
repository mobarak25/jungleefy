<template>
    <nav>
        <v-layout tag="header" d-block class="white--text">
            <v-layout class="top-header-wrapper">
                <v-container class="py-0">
                    <v-layout class="top-header mx-0 wrap">
                        <!-- Top header left -->
                        <v-flex
                            class="top-header-left flex-grow-0 d-flex align-center justify-space-between"
                        >
                            <v-img
                                width="171"
                                height="29"
                                contain
                                class="flex-grow-0"
                                :src="require('@/assets/images/logo.png')"
                            ></v-img>
                            <v-layout class="select-box-wrapper flex-grow-0">
                                <v-flex class="select-box flex-grow-0">
                                    <v-select
                                        dark
                                        solo
                                        append-icon="mdi-chevron-down"
                                        :items="locations"
                                        label="Location"
                                        hide-details
                                        v-model="selectedLocation"
                                        background-color="vulcan"
                                    ></v-select>
                                </v-flex>

                                <v-flex class="select-box flex-grow-0">
                                    <v-select
                                        dark
                                        solo
                                        append-icon="mdi-chevron-down"
                                        :items="locations"
                                        label="Location"
                                        hide-details
                                        v-model="selectedLocation"
                                        background-color="vulcan"
                                    ></v-select>
                                </v-flex>
                            </v-layout>
                        </v-flex>

                        <!-- Top header mid -->
                        <v-flex class="top-header-mid pa-0">
                            <v-flex class="site-search pa-0">
                                <v-flex class="site-search-box">
                                    <v-autocomplete
                                        height="44"
                                        full-width
                                        v-model="values"
                                        :items="items"
                                        label="What are you looking for"
                                        solo
                                        hide-details
                                        append-icon
                                        class="site-search-field"
                                    ></v-autocomplete>
                                </v-flex>
                                <button class="site-search-btn" type="submit">
                                    <i class="icofont-search"></i> Search
                                </button>
                            </v-flex>
                        </v-flex>

                        <!-- Top header right -->
                        <v-layout justify-end class="top-header-right">
                            <v-flex class="top-header-widgets flex-grow-0">
                                <a href="#">
                                    <v-flex class="header-widgets-icon">
                                        <i class="icofont-heart-alt"></i>
                                        <v-flex class="count">15</v-flex>
                                    </v-flex>
                                    <span>Watchlist</span>
                                </a>
                            </v-flex>

                            <v-flex class="top-header-widgets flex-grow-0">
                                <a href="#">
                                    <v-flex class="header-widgets-icon">
                                        <i class="icofont-shopping-cart"></i>
                                        <v-flex class="count">5</v-flex>
                                    </v-flex>
                                    <span>My Cart</span>
                                </a>
                            </v-flex>

                            <v-flex class="top-header-widgets flex-grow-0">
                                <v-menu offset-y transition="slide-x-transition" :offset-x="offset">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-flex v-bind="attrs" v-on="on" class="pointer">
                                            <v-flex class="header-widgets-icon">
                                                <i class="icofont-ui-user"></i>
                                                <i class="icofont-simple-down down-arrow"></i>
                                            </v-flex>
                                            <span
                                                class="text-truncate sign-text"
                                            >Hey Sign In Mobarak</span>
                                        </v-flex>
                                    </template>
                                    <v-list>
                                        <v-list-item
                                            v-for="(item, index) in userInfos"
                                            :key="index"
                                        >
                                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-flex>
                        </v-layout>
                    </v-layout>
                </v-container>
            </v-layout>

            <v-layout class="btm-header-wrapper">
                <site-menu></site-menu>
            </v-layout>
        </v-layout>
    </nav>
</template>

<script>
import SiteMenu from "@/components/SiteMenu";

export default {
    name: "SiteHeader",

    components: {
        SiteMenu
    },

    data: () => ({
        offset: false,

        selectedLocation: "",
        locations: ["Dhaka", "India", "pakistan"],

        items: ["foo", "bar", "fizz", "buzz"],
        values: [],
        value: null,

        userInfos: [
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me 2" }
        ]
    })
};
</script>
<style lang="scss">
@import "@/assets/sass/header.scss";
</style>
