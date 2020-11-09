<template>
    <v-main>
        <HomeBanner />
        <SiteFooter />
    </v-main>
</template>

<script>
import HomeBanner from "@/components/HomeBanner";
import SiteFooter from "@/components/SiteFooter";
export default {
    name: "Home",

    components: {
        HomeBanner,
        SiteFooter
    }
};
</script>
