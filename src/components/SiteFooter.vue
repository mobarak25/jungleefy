<template>
    <v-footer color="secondary" dark padless class="d-block site-footer">
        <v-layout>
            <v-container>
                <v-row no-gutters>
                    <v-col class="footer-box">
                        <v-img
                            max-width="171"
                            max-height="29"
                            contain
                            class="flex-grow-0 mb-6"
                            :src="require('@/assets/images/logo.png')"
                            alt="Footer Logo"
                        ></v-img>
                        <h3>Get in Tuch</h3>
                        <!-- <div class="text-center">
                            <v-avatar tile color="blue">
                                <v-icon dark>mdi-alarm</v-icon>
                            </v-avatar>
                        </div>-->
                    </v-col>
                    <v-col></v-col>
                    <v-col>sdf</v-col>
                    <v-col>sdf</v-col>
                    <v-col>sdf</v-col>
                </v-row>
            </v-container>
        </v-layout>

        <v-divider></v-divider>

        <v-layout>
            <v-container>
                <span class="copy d-block">
                    &copy; Copyright
                    <router-link to="/">Jungleebazaar.com</router-link>
                    {{new Date().getFullYear()}}
                </span>
            </v-container>
        </v-layout>
    </v-footer>
</template>
<script>
export default {
    data: () => ({
        icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
        selectedItem: 1,
        items: [
            { text: "Real-Time", icon: "mdi-clock" },
            { text: "Audience", icon: "mdi-account" },
            { text: "Conversions", icon: "mdi-flag" }
        ]
    })
};
</script>

<style lang="scss">
@import "@/assets/sass/footer.scss";
</style>