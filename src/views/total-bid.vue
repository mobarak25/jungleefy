<template>
    <v-flex class="site-content-wrap site_bg">
        <v-container class="py-0">
            <v-card tile>
                <v-sheet class="bid-history-wrap">
                    <h2>Bid history</h2>
                    <v-row>
                        <v-col md="4" order="2" class="py-0">
                            <v-flex class="item-info-wrap">
                                <v-flex class="item-info d-flex align-center">
                                    <v-flex class="item-image">
                                        <v-img
                                            :src="require('@/assets/images/products/product-2.jpg')"
                                        ></v-img>
                                    </v-flex>

                                    <v-flex class="item-title">
                                        <h3>
                                            Nikon COOLPIX B500 Digital
                                            Camera (Black)
                                        </h3>
                                        <router-link
                                            :to="{name:'ProductDetails'}"
                                        >View Product Details</router-link>
                                    </v-flex>
                                </v-flex>

                                <v-flex class="item-info">
                                    <ul>
                                        <li>
                                            Current bid:
                                            <span class="info-text">
                                                <strong>TK25000.00</strong> (Approximately TK362.75)
                                            </span>
                                        </li>
                                        <li>
                                            Shipping:
                                            <span class="info-text">
                                                Check item description and payment
                                                instructions or contact seller for details.
                                            </span>
                                        </li>
                                        <li>
                                            Item number ID:
                                            <span class="info-text">333911616245</span>
                                        </li>
                                    </ul>

                                    <!-- bidding-form -->
                                    <bidding-form></bidding-form>
                                </v-flex>
                                <v-flex class="item-info">
                                    <a href="#" class="text-decoration-underline">Seller information</a>
                                </v-flex>

                                <v-flex class="item-info">
                                    <span class="d-block pb-3">Payments Method</span>

                                    <v-img
                                        max-width="258"
                                        :src="require('@/assets/images/payment-methods.png')"
                                    ></v-img>
                                </v-flex>
                            </v-flex>
                        </v-col>

                        <v-col md="8" order="1" class="py-0">
                            <v-flex class="bid-history-box">
                                <v-flex class="time-holder">
                                    <strong>3 Day</strong>
                                    <strong>10 Hours</strong>
                                    <strong>10 Minutes</strong>
                                    <strong>10 Seconds</strong>
                                    <strong>Duration 7 days</strong>
                                </v-flex>

                                <v-flex class="table-top d-flex justify-space-between">
                                    <a href="#">Learn more about bidding</a>
                                    <a href="#">Show automatic bid</a>
                                </v-flex>

                                <v-simple-table class="bid-table" fixed-header height="520px">
                                    <template v-slot:default>
                                        <thead>
                                            <tr>
                                                <th>Bidder Name</th>
                                                <th>Bid Time</th>
                                                <th>Bid Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="bid_item in bid_items" :key="bid_item.id">
                                                <td class="col1">
                                                    <v-avatar size="35" class="mr-3">
                                                        <img
                                                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                                                            alt="John"
                                                        />
                                                    </v-avatar>
                                                    {{bid_item.name}}
                                                </td>
                                                <td class="col2" v-text="bid_item.bid_time"></td>
                                                <td
                                                    class="col3"
                                                    v-text="'TK' + bid_item.bid_amount"
                                                ></td>
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                            </v-flex>
                            <v-flex
                                class="same-amount"
                            >If two people bid the same amount, the first bid has priority</v-flex>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-card>

            <v-card tile elevation="2" class="mt-4 py-4">
                <v-card-text class="pa-0 black--text text-center please-contact">
                    If you want to Buy or Sell then create you post? please
                    <router-link :to="{name:'Contact'}">Contact</router-link>
                </v-card-text>
            </v-card>
        </v-container>
    </v-flex>
</template>

<script>
import BiddingForm from "@/components/BiddingForm";

export default {
    name: "TotalBid",

    components: {
        BiddingForm,
    },

    data() {
        return {
            bid_items: [],
        };
    },

    mounted() {
        this.Fire.$on("BidInserted", () => {
            this.bid_items = JSON.parse(localStorage.getItem("auction-bids"));
        });
    },

    created() {
        this.bid_items = JSON.parse(
            localStorage.getItem("auction-bids") || "[]"
        );
    },
};
</script>

<style lang="scss">
@import "@/assets/sass/total_bid.scss";
</style>