<template>
    <v-footer color="secondary" dark padless class="d-block site-footer">
        <v-layout class="footer-top">
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
                        <v-flex class="pt-5 footer-social">
                            <v-btn
                                height="48"
                                width="48"
                                fab
                                outlined
                                text
                                tile
                                v-for="icon in icons"
                                :key="icon"
                            >
                                <v-icon>{{icon}}</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-col>

                    <v-col class="footer-box">
                        <h3>How it Works</h3>
                        <v-flex>
                            <ul>
                                <li v-for="(work, index) in howWorks" :key="index">
                                    <a href="#">{{work.text}}</a>
                                </li>
                            </ul>
                        </v-flex>
                    </v-col>

                    <v-col class="footer-box">
                        <h3>Categories</h3>
                        <v-flex>
                            <ul>
                                <li v-for="(category, index) in categories" :key="index">
                                    <a href="#">{{category.text}}</a>
                                </li>
                            </ul>
                        </v-flex>
                    </v-col>

                    <v-col class="footer-box">
                        <h3>My Account</h3>
                        <v-flex>
                            <ul>
                                <li v-for="(accountInfo, index) in accountInfos" :key="index">
                                    <a href="#">{{accountInfo.text}}</a>
                                </li>
                            </ul>
                        </v-flex>
                    </v-col>

                    <v-col class="footer-box">
                        <h3>Information</h3>
                        <v-flex>
                            <ul>
                                <li v-for="(information, index) in informations" :key="index">
                                    <a href="#">{{information.text}}</a>
                                </li>
                            </ul>
                        </v-flex>
                    </v-col>
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
        icons: ["mdi-twitter", "mdi-facebook", "mdi-youtube", "mdi-linkedin"],

        howWorks: [
            { id: 1, text: "Online Auction" },
            { id: 2, text: "How to Bid" },
            { id: 3, text: "Auction Fees" },
            { id: 4, text: "Shipping Fees" },
            { id: 5, text: "Auction FAQ's" }
        ],
        categories: [
            { id: 1, text: "Drop shipping" },
            { id: 2, text: "Bulk selling" },
            { id: 3, text: "Warehouse Products" },
            { id: 4, text: "Warehouse Closeouts" },
            { id: 5, text: "Overstock Surplus" },
            { id: 6, text: "Wholesale Stock" },
            { id: 7, text: "Manufacturer Stock" }
        ],
        accountInfos: [
            { id: 1, text: "My Account" },
            { id: 2, text: "Orders" },
            { id: 3, text: "Addresses" },
            { id: 4, text: "Cancellation, Return & Refund Policy" },
            { id: 5, text: "Manage Your Content & Devices" },
            { id: 6, text: "Help" }
        ],
        informations: [
            { id: 1, text: "About Us" },
            { id: 2, text: "Contact" },
            { id: 3, text: "Our Blog" },
            { id: 4, text: "Careers" },
            { id: 5, text: "Delivery Information" },
            { id: 6, text: "Privacy Policy" },
            { id: 7, text: "Terms & Conditions" }
        ]
    })
};
</script>

<style lang="scss">
@import "@/assets/sass/footer.scss";
</style>