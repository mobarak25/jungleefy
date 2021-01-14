<template>
    <v-flex class="delivery-wrap">
        <!-- inner banner -->
        <inner-banner :options="bannerContent"></inner-banner>

        <v-flex class="delivery-panel">
            <v-container class="py-0">ghfgh</v-container>
        </v-flex>
    </v-flex>
</template>

<script>
import InnerBanner from "@/components/sites/common/InnerBanner";

export default {
    name: "privacyPolicy",
    components: {
        InnerBanner,
    },

    data() {
        return {
            bannerContent: {
                title: "How can we help you?",
                image: "faq.jpg",
            },
        };
    },
};
</script>

<style lang="scss">
</style>