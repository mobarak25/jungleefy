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
};
</script>