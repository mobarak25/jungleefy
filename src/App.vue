<template>
    <v-app>
        <SiteHeader />
        <router-view></router-view>
        <SiteFooter />
    </v-app>
</template>

<script>
import SiteHeader from "./components/sites/common/SiteHeader";
import SiteFooter from "./components/sites/common/SiteFooter";

export default {
    name: "App",
    components: {
        SiteHeader,
        SiteFooter,
    },
};
</script>