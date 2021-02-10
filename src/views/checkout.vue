<template>
    <v-flex class="site-content-wrap site_bg">
        <v-container class="py-0">
            <v-card tile>
                <v-sheet class="card-list-wrap">
                    <v-layout wrap class="justify-space-between align-center">
                        <h1 class="pr-2" v-text="`${cards.cardItems.length} Items`"></h1>
                        <span>Bill to the same address</span>
                    </v-layout>

                    <v-flex class="card-list-table">
                        <v-row>
                            <v-col lg="8" cols="12">
                                <table>
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            v-for="item in cards.cardItems.slice(0, 5)"
                                            :key="item.id"
                                        >
                                            <td data-label="Product Name">
                                                <v-layout class="cart-product">
                                                    <v-img
                                                        contain
                                                        max-width="80"
                                                        :src="require('@/assets/images/products/'+ item.img)"
                                                        alt="Image"
                                                    ></v-img>
                                                    <v-flex class="cart-product-title flex-grow-0">
                                                        <h4 v-text="item.title"></h4>
                                                        <a
                                                            @click="removeProduct(item.id)"
                                                            href="javascript:void(0)"
                                                        >
                                                            <v-icon>mdi-delete</v-icon>
                                                        </a>
                                                    </v-flex>
                                                </v-layout>
                                            </td>
                                            <td data-label="Quantity">
                                                <quantity-holder
                                                    :qty="item.qty"
                                                    :product-id="item.id"
                                                ></quantity-holder>
                                            </td>
                                            <td data-label="Price">
                                                <span
                                                    class="unit-price"
                                                    v-text="getItemTotal(item.basePrice,item.qty)"
                                                ></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </v-col>

                            <v-col lg="4" cols="12">
                                <!-- order-summay information-->
                                <order-summay :login="true"></order-summay>

                                <v-flex class="pt-8 d-flex">
                                    <v-btn
                                        :to="{name:'Payment'}"
                                        tile
                                        depressed
                                        class="more-product brand white--text text-none order-1"
                                    >Continue To Payment</v-btn>
                                </v-flex>
                            </v-col>
                        </v-row>
                    </v-flex>
                </v-sheet>
            </v-card>

            <v-card tile>
                <v-sheet class="watch-list-related-product">
                    <!-- Related Products sections -->
                    <related-products></related-products>
                </v-sheet>
            </v-card>
        </v-container>
    </v-flex>
</template>

<script>
import RelatedProducts from "@/components/sites/common/RelatedProducts";
import QuantityHolder from "@/components/sites/common/QuantityHolder";
import OrderSummay from "@/components/sites/common/OrderSummay";

export default {
    name: "checkout",
    components: {
        RelatedProducts,
        QuantityHolder,
        OrderSummay,
    },
    data() {
        return {
            coupon_code: "",
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
        Subtotal() {
            var SubtotalHolder = 0;
            this.cards.cardItems.forEach((element) => {
                SubtotalHolder += element.basePrice * element.qty;
            });
            return SubtotalHolder;
        },
        grandTotal() {
            var grandTotalHolder = (this.Subtotal + this.shipping_fee).toFixed(
                2
            );
            return grandTotalHolder;
        },
    },
    methods: {
        getCardIemsFormLocalStorage() {
            return JSON.parse(localStorage.getItem("jungleefy-card-items"));
        },

        getItemTotal(basePrice, qty) {
            return qty * basePrice;
        },

        removeProduct(productId) {
            this.$store.dispatch("deleteFromCards", productId);
        },
        changeAddress(val) {
            this.$store.commit("UPDATE_ADDRESS", val);
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
@import "@/assets/sass/cart.scss";
</style>