<template>
    <v-main>
        <!-- Banner Module -->
        <HomeBanner />

        <!-- How To Bid Module-->
        <HowToBid />
    </v-main>
</template>

<script>
import HomeBanner from "@/components/HomeBanner";
import HowToBid from "@/components/HowToBid";
export default {
    name: "Home",

    components: {
        HomeBanner,
        HowToBid,
    },
};
</script>
