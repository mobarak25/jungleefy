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
                <a href="#">Place an automatic bid</a>
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
    </v-flex>
</template>

<script>
import ProductSocial from "@/components/ProductSocial";
import BiddingForm from "@/components/BiddingForm";
export default {
    name: "ProductDetailsSummeryAuction",
    components: {
        ProductSocial,
        BiddingForm,
    },
    data() {
        return {
            getbidItem: [],
            abc: "asdfasdf",
        };
    },

    computed: {
        totalBid() {
            console.log("asdf");
            var totalBidCounter = this.getbidItem.length;
            return totalBidCounter;
        },
    },
    mounted() {
        window.Fire.$on("BidInserted", () => {
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

<style lang="scss">
.product-details-summery {
    max-width: 638px;
    padding: rem-calc(0 50px);

    .product-details-box {
        padding: rem-calc(0 35px 13px 0);
        position: relative;
        border-bottom: 1px solid lighten(map-get($colors, grey), 30);
        .v-btn {
            @include absolute(false, false, top, 0, right, 0);
            .v-icon {
                font-size: 18px;
                color: lighten(map-get($colors, grey), 28);
            }
        }
        .category {
            padding-bottom: rem-calc(6px);
            display: block;
            @include font(grey, 15px, 22px, light);
        }
        h1 {
            @include font(primary, 22px, 30px, medium);
        }
    }

    ul {
        padding: 0;
        margin: 0;

        li {
            padding-bottom: rem-calc(6px);
            @include font(grey, 15px, 20px, false);

            span {
                @include font(primary, 17px, 20px, semi-bold);

                &.current-Bid {
                    @include font(brand, 22px, 22px, semi-bold);
                }
            }

            .all-bidders {
                text-decoration: underline;

                &:hover {
                    color: map-get($colors, brand);
                    text-decoration: none;
                }
            }
        }
    }

    .time-holder {
        padding: rem-calc(14px);
        margin-bottom: rem-calc(14px);
        @include font(primary, 15px, 30px, false);
        background-color: lighten(map-get($colors, grey), 42);

        strong {
            padding: rem-calc(0 10px);
            display: inline-block;
            @include font(false, 18px, 22px, semi-bold);
            &:not(:last-child) {
                border-right: 2px solid lighten(map-get($colors, grey), 20);
            }
        }
    }

    .place-bid-wrap {
        padding: rem-calc(15px 20px);
        background-color: lighten(map-get($colors, grey), 42);

        .bid-label {
            padding-bottom: rem-calc(5px);
            @include font(grey, 15px, 20px, false);
        }

        .automatic-bid {
            padding-top: rem-calc(5px);
            a {
                margin-right: rem-calc(20px);
                display: inline-block;
                @include font(grey, 15px, 20px, false);
                text-decoration: underline;
                &:hover {
                    text-decoration: none;
                    color: map-get($colors, brand);
                }
            }
            .v-icon {
                font-size: 20px;
            }
        }
    }

    .share-product {
        padding: rem-calc(0 30px);
        margin-top: rem-calc(40px);
        background-color: #f7f8f8;
        span {
            padding-right: rem-calc(10px);
        }
        .share-product-box {
            width: 100%;

            a {
                padding: rem-calc(0 8px);
                display: inline-block;
                border: none;
                i {
                    @include font(false, 25px, 40px, false);
                }
            }
        }
    }
}
</style>