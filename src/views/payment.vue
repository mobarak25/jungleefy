<template>
    <v-flex class="site-content-wrap site_bg">
        <v-container class="py-0">
            <v-card tile>
                <v-sheet class="payment-list-wrap">
                    <v-row>
                        <v-col md="8" class="py-0">
                            <v-flex class="payment-top">
                                <h3>Payment Method</h3>
                                <span>(Please select only one! payment method)</span>
                            </v-flex>

                            <v-radio-group class="payment-list pt-0 mt-0" v-model="paymentMethod">
                                <v-row>
                                    <v-col
                                        v-for="paymentItem in paymentItems"
                                        :key="paymentItem.id"
                                        md="6"
                                        class="py-0"
                                    >
                                        <v-radio :value="paymentItem.title">
                                            <template v-slot:label>
                                                <div class="payment-title d-flex align-center">
                                                    <span v-text="paymentItem.title"></span>
                                                    <v-img
                                                        :src="require('@/assets/images/' + paymentItem.logo)"
                                                        alt
                                                    ></v-img>
                                                </div>
                                            </template>
                                        </v-radio>
                                    </v-col>

                                    <v-col md="12" class="py-0">
                                        <v-radio value="Card Payment">
                                            <template v-slot:label>
                                                <div class="payment-title d-flex align-center">
                                                    <span>Card Payment</span>
                                                    <v-img
                                                        :src="require('@/assets/images/bank-payment.png')"
                                                        alt
                                                    ></v-img>
                                                </div>
                                            </template>
                                        </v-radio>
                                    </v-col>
                                </v-row>
                            </v-radio-group>
                        </v-col>

                        <v-col md="4" class="py-0">
                            <v-flex class="cart-summary">
                                <h2 class="d-flex align-center">Ship to</h2>
                                <v-flex class="ship-info d-flex flex-wrap justify-space-between">
                                    <v-flex class="address flex-grow-0">
                                        <h4>Location</h4>
                                        <address>
                                            <span>
                                                Name:
                                                <strong v-text="cards.location.name"></strong>
                                            </span>
                                            <span>
                                                Phone:
                                                <strong v-text="cards.location.phone"></strong>
                                            </span>
                                            <span class="text-truncate">
                                                Email:
                                                <strong v-text="cards.location.email"></strong>
                                            </span>
                                            <span>
                                                Address:
                                                <strong v-text="cards.location.address"></strong>
                                            </span>
                                        </address>
                                    </v-flex>

                                    <v-flex class="change-address flex-grow-0">
                                        <v-menu
                                            transition="slide-x-transition"
                                            bottom
                                            left
                                            offset-y
                                            rounded="0"
                                        >
                                            <template v-slot:activator="{ on, attrs }">
                                                <h4 v-bind="attrs" v-on="on" class="pointer">Change</h4>
                                            </template>
                                            <v-list dense>
                                                <v-list-item
                                                    v-for="shipping in shippingAddress"
                                                    :key="shipping.id"
                                                >
                                                    <v-list-item-title>
                                                        <a
                                                            @click="changeAddress(shipping)"
                                                            href="javascript:void(0)"
                                                            v-text="shipping.title"
                                                        ></a>
                                                    </v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </v-flex>
                                </v-flex>

                                <h2 class="d-flex align-center">Summary</h2>
                                <v-flex class="cart-summary-box">
                                    <v-flex class="cart-info">
                                        <strong>subTotal:</strong>
                                        <span v-text="`TK${subTotal}`"></span>
                                    </v-flex>

                                    <v-flex class="cart-info">
                                        <strong>Shipping Fee:</strong>
                                        <span v-text="`TK${shipping_fee}`"></span>
                                    </v-flex>
                                    <v-flex class="cart-info">
                                        <strong>Total:</strong>
                                        <span
                                            class="grand-total brand--text"
                                            v-text="`TK${grandTotal}`"
                                        ></span>
                                    </v-flex>

                                    <v-layout class="pt-8 justify-space-between">
                                        <v-flex class="input-wrap coupon-code flex-grow-0">
                                            <v-text-field
                                                v-model="coupon_code"
                                                solo
                                                flat
                                                hide-details
                                                outlined
                                                type="text"
                                                label="Enter Your Coupon code"
                                            ></v-text-field>
                                        </v-flex>

                                        <v-flex class="coupon-code-ntn flex-grow-0">
                                            <v-btn
                                                @click="applyCoupon()"
                                                tile
                                                depressed
                                                class="primary white--text text-none"
                                            >Apply Coupon</v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                            </v-flex>
                            <v-flex class="pt-8 d-flex">
                                <v-btn
                                    :to="{name:'Home'}"
                                    tile
                                    depressed
                                    class="confirm-order brand white--text text-none order-1"
                                >Confirm Order</v-btn>
                            </v-flex>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-card>
        </v-container>
    </v-flex>
</template>

<script>
export default {
    name: "payment",

    data() {
        return {
            paymentMethod: "Cash on Delivery",
            paymentItems: [
                {
                    id: 1,
                    title: "bKash Payment",
                    logo: "payment-bkash.png",
                },
                {
                    id: 2,
                    title: "Rocket Payment",
                    logo: "payment-rocket.png",
                },
                {
                    id: 3,
                    title: "Cash on Delivery",
                    logo: "payment-cash.png",
                },
                {
                    id: 4,
                    title: "Dmoney",
                    logo: "payment-dmony.png",
                },
            ],
        };
    },
    computed: {
        cards() {
            return this.$store.state.cards;
        },
        subTotal() {
            var subTotalHolder = 0;
            this.cards.cardItems.forEach((element) => {
                subTotalHolder += element.basePrice * element.qty;
            });

            return subTotalHolder - this.couponDiscount;
        },
        grandTotal() {
            var grandTotalHolder = (this.subTotal + this.shipping_fee).toFixed(
                2
            );
            return grandTotalHolder;
        },
    },
    methods: {
        getCardIemsFormLocalStorage() {
            return JSON.parse(localStorage.getItem("jungleefy-card-items"));
        },

        changeAddress(val) {
            this.$store.commit("UPDATE_ADDRESS", val);
        },
        applyCoupon() {
            this.couponDiscount = 20;
            this.subTotal();
            // if (this.coupon_code) {
            //     return (this.subTotal = this.subTotal - this.couponDiscount);
            // }
        },
    },
    created() {
        // localStorage.setItem(
        //     "jungleefy-card-items",
        //     JSON.stringify({
        //         cardItems: [
        //             {
        //                 id: 2,
        //                 img: "product-8.jpg",
        //                 title: "Nikon COOLPIX B500 Digital Camera (Black)",
        //                 qty: 3,
        //                 basePrice: 500,
        //             },
        //         ],
        //     })
        // );
        this.$store.state.cards = this.getCardIemsFormLocalStorage();
    },
    mounted() {},
};
</script>

<style lang="scss">
@import "@/assets/sass/payment.scss";
</style>