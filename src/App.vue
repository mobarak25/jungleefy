<template>
    <v-app>
        <SiteHeader />
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

<style lang="less">
</style>
