<template>
    <v-flex class="cart-summary">
        <template v-if="login">
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
                    <v-menu transition="slide-x-transition" bottom left offset-y rounded="0">
                        <template v-slot:activator="{ on, attrs }">
                            <h4 v-bind="attrs" v-on="on" class="pointer">Change</h4>
                        </template>
                        <v-list dense>
                            <v-list-item v-for="shipping in shippingAddress" :key="shipping.id">
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
        </template>

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
                <span class="grand-total brand--text" v-text="`TK${grandTotal}`"></span>
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
</template>

<script>
export default {
    name: "OrderSummay",

    props: {
        login: Boolean,
    },

    data() {
        return {
            coupon_code: "",
            couponDiscount: 0,
            shipping_fee: 70,
            shippingAddress: [
                {
                    id: 1,
                    title: "Own House",
                    name: "Abir Amzad",
                    phone: "01823 895 372",
                    email: "info@gmail.com",
                    address: "Zora Villa, GP-j, 46/3 Mohakhali, Dhaka-1212",
                },
                {
                    id: 2,
                    title: "Brother House",
                    name: "Md. Mobarak Ali",
                    phone: "01767513948",
                    email: "mobarakali62@gmail.com",
                    address: "MF Tower, Pragati Sharani, Link Rd, Dhaka 1212",
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
        //             {
        //                 id: 4,
        //                 img: "product-3.jpg",
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
</style>