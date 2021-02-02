<template>
    <v-flex class="product-details-summery">
        <v-flex class="product-details-box">
            <small class="category">
                Electronics
                <v-btn fab elevation="5" width="30" height="30">
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
            </small>
            <h1>LG G Flex2 H950 4G LTE 32GB Rom 3GB Ram AT&T SmartPhone</h1>
        </v-flex>

        <ul>
            <li>
                Condition:
                <span>Used</span>
            </li>
            <li>
                Available Quantity:
                <span>15pcs</span>
            </li>
        </ul>
        <v-flex class="time-holder">
            Time Left:
            <strong>3 Day</strong>
            <strong>10 Hours</strong>
            <strong>10 Minutes</strong>
            <strong>10 Seconds</strong>
        </v-flex>

        <ul>
            <li>
                Active Bidders:
                <span class="d-inline-block mr-2">07</span>
                <router-link :to="{name:'totalBid'}" class="all-bidders">
                    Total Bid:
                    <span v-text="totalBid"></span>
                </router-link>
            </li>

            <li>
                Current Bid:
                <span class="current-Bid">TK 25,000</span>
            </li>

            <li>
                (approximate Price:
                <span>TK20,100</span>)
            </li>
            <li>You will review this before it's final</li>
        </ul>
        <v-flex class="place-bid-wrap">
            <v-flex class="bid-label">Enter your available bid (It’s Free)</v-flex>

            <!-- bidding form here -->
            <bidding-form></bidding-form>

            <v-flex class="automatic-bid">
                <a @click="dialog= !dialog" href="javascript:void(0);">Place an automatic bid</a>
                <v-tooltip right>
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon v-bind="attrs" v-on="on">mdi-information-outline</v-icon>
                    </template>
                    <span class="tooltip-info">
                        Lorem ipsum, dolor sit
                        <br />amet consectetur
                        <br />adipisicing elit.
                        <br />Dolorem facilis unde
                        <br />fugiat eum iure sequi
                    </span>
                </v-tooltip>
            </v-flex>
        </v-flex>

        <v-layout class="share-product align-center">
            <span>Share:</span>
            <!-- Product-Social -->
            <product-social></product-social>
        </v-layout>

        <!-- success greeting popup -->
        <v-dialog content-class="autobid-popup" v-model="dialog" width="670">
            <v-sheet class="autobid-wrap">
                <h3>How do automatic bids work here?</h3>
                <v-flex class="autobid-text">
                    <p>By setting up a programmed offer, our framework will naturally put new offers for your sake each time you are outbid. You should simply enter the most extreme value you are happy to offer for a thing. Our framework will at that point continue offering for you, by the littlest conceivable increment each time, until your most extreme cost is reached.</p>
                </v-flex>

                <ValidationObserver
                    class="autobid-form"
                    tag="div"
                    ref="form"
                    v-slot="{ handleSubmit }"
                >
                    <form @submit.prevent="handleSubmit(onSubmit)">
                        <ValidationProvider
                            tag="div"
                            class="place-bid-field"
                            name="maximum bid price"
                            rules="required"
                            :bails="false"
                            v-slot="{ errors, classes }"
                        >
                            <div class="input-wrap" :class="classes">
                                <v-flex class="input-label">Maximum bid price</v-flex>
                                <v-text-field
                                    solo
                                    type="number"
                                    step="any"
                                    flat
                                    hide-details
                                    outlined
                                    label="Maximum bid tk 25,000"
                                    v-model="formData.maximum_price"
                                ></v-text-field>
                                <span>{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>

                        <ValidationProvider
                            tag="div"
                            class="place-bid-field"
                            name="automatic per bid price"
                            rules="required"
                            :bails="false"
                            v-slot="{ errors, classes }"
                        >
                            <div class="input-wrap" :class="classes">
                                <v-flex class="input-label">Automatic per bid price</v-flex>
                                <v-text-field
                                    solo
                                    type="number"
                                    step="any"
                                    flat
                                    hide-details
                                    outlined
                                    label="Automatic bid tk 3"
                                    v-model="formData.auto_price"
                                ></v-text-field>
                                <span>{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>

                        <!-- Product Price & Description -->

                        <v-flex class="text-right">
                            <v-btn
                                type="submit"
                                tile
                                depressed
                                class="place-bid-btn brand white--text text-none"
                            >Ok</v-btn>
                        </v-flex>
                    </form>
                </ValidationObserver>
            </v-sheet>
        </v-dialog>
    </v-flex>
</template>

<script>
import ProductSocial from "@/components/sites/pages/ProductSocial";
import BiddingForm from "@/components/sites/pages/BiddingForm";
export default {
    name: "ProductDetailsSummeryAuction",
    components: {
        ProductSocial,
        BiddingForm,
    },
    data() {
        return {
            getbidItem: [],
            dialog: false,

            formData: {
                maximum_price: "",
                auto_price: "",
            },
        };
    },

    computed: {
        totalBid() {
            var totalBidCounter = this.getbidItem.length;
            return totalBidCounter;
        },
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate().then((success) => {
                if (!success) {
                    return;
                }
                this.formData.maximum_price = this.formData.auto_price = "";

                this.dialog = false;

                // Wait until the models are updated in the UI
                this.$nextTick(() => {
                    this.$refs.form.reset();
                });
            });
        },
    },
    mounted() {
        this.Fire.$on("BidInserted", () => {
            this.getbidItem = JSON.parse(localStorage.getItem("auction-bids"));
        });
    },

    created() {
        this.getbidItem = JSON.parse(
            localStorage.getItem("auction-bids") || "[]"
        );
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/product_details_summery_auction.scss";
</style>