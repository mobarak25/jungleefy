<template>
    <v-layout wrap class="feature-auction" tag="section">
        <v-container>
            <v-flex>
                <h2>
                    {{options.title}}
                    <v-btn
                        height="30"
                        width="90"
                        outlined
                        rounded
                        text
                        color="primary"
                        class="color text-none"
                        :to="{name:options.url}"
                    >Show All</v-btn>
                </h2>
            </v-flex>
            <v-row>
                <v-col lg="3">sd</v-col>
                <v-col lg="3">sd</v-col>
                <v-col lg="3">sd</v-col>
                <v-col lg="3">sd</v-col>
                <v-col lg="3">sd</v-col>
            </v-row>
        </v-container>
    </v-layout>
</template>
<script>
export default {
    name: "HomeProductSections",
    props: {
        options: Object,
    },
    data: () => ({}),
};
</script>

<style lang="scss">
// @import "@/assets/sass/footer.scss";
</style>