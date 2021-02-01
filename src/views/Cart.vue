<template>
    <v-flex class="site-content-wrap site_bg">
        <v-container class="py-0">
            <v-card tile>
                <v-sheet class="card-list-wrap">
                    <h1 v-text="`Shopping  Cart (${cards.cardItems.length})`"></h1>
                    <v-flex class="card-list-table">
                        <v-row>
                            <v-col md="8">
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
                                                <v-layout>
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
                            <v-col md="4">
                                <!-- order-summay information-->
                                <order-summay :login="false"></order-summay>

                                <v-flex class="pt-8 d-flex">
                                    <v-btn
                                        :to="{name:'checkout'}"
                                        tile
                                        depressed
                                        class="confirm-order brand white--text text-none order-1"
                                    >Checkout</v-btn>
                                </v-flex>
                            </v-col>
                        </v-row>

                        <v-flex class="pt-5 d-flex">
                            <v-btn
                                :to="{name:'AllFeaturedAuctions'}"
                                tile
                                depressed
                                class="more-product brand white--text text-none order-1"
                            >Continue Shopping</v-btn>
                        </v-flex>
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
import QuantityHolder from "@/components/QuantityHolder";
import OrderSummay from "@/components/sites/common/OrderSummay";

export default {
    name: "Cart",
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
        subTotal() {
            var subTotalHolder = 0;
            this.cards.cardItems.forEach((element) => {
                subTotalHolder += element.basePrice * element.qty;
            });
            return subTotalHolder;
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

        getItemTotal(basePrice, qty) {
            return qty * basePrice;
        },

        removeProduct(productId) {
            this.$store.dispatch("deleteFromCards", productId);
        },
    },
    created() {
        localStorage.setItem(
            "jungleefy-card-items",
            JSON.stringify({
                coupon: {
                    code: "dsfdsf",
                    discount: 20,
                },
                location: {
                    id: 1,
                    title: "Own House",
                    name: "Abir Amzad",
                    phone: "01823 895 372",
                    email: "info@gmail.com",
                    address: "Zora Villa, GP-j, 46/3 Mohakhali, Dhaka-1212",
                },
                cardItems: [
                    {
                        id: 2,
                        img: "product-8.jpg",
                        title: "Nikon COOLPIX B500 Digital Camera (Black)",
                        qty: 3,
                        basePrice: 500,
                    },
                ],
            })
        );
        this.$store.state.cards = this.getCardIemsFormLocalStorage();
    },
    mounted() {},
};
</script>

<style lang="scss">
@import "@/assets/sass/cart.scss";
</style>