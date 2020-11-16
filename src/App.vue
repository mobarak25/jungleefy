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

    data: () => ({}),

    mounted() {
        // let url = "http://localhost:8080/data/auctionproduct.json";
        // this.$http
        //     .get(url)
        //     .then((res) => {
        //         console.log(res.data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    },
};
</script>

<style>
</style>
