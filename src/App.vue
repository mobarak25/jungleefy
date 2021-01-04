<template>
    <v-app>
        <SiteHeader />
        <router-view></router-view>
        <SiteFooter />
    </v-app>
</template>

<script>
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export default {
    name: "App",

    components: {
        SiteHeader,
        SiteFooter,
    },

    data: () => ({
        wishListedArr: [],
    }),
    methods: {
        toggleToWishList(productId) {
            //TODO:database query
            var index = this.wishListedArr.indexOf(productId);
            if (index !== -1) {
                this.wishListedArr.splice(index, 1);
            } else {
                this.wishListedArr.push(productId);
            }
        },
    },
    mounted() {
        this.Fire.$on("addorremovewislist", (productId) => {
            this.toggleToWishList(productId);
        });
    },
};
</script>

<style>
</style>
