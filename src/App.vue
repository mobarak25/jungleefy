<template>
    <v-app>
        <SiteHeader />
        <router-view></router-view>
    </v-app>
</template>

<script>
import SiteHeader from "./components/SiteHeader";

export default {
    name: "App",

    components: {
        SiteHeader
    },

    data: () => ({
        //
    })
};
</script>

<style>
</style>
