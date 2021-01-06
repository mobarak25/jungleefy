<template>
    <v-flex class="site-content-wrap site_bg">
        <v-container class="py-0">
            <v-card tile>
                <v-sheet class="card-list-wrap">
                    <h1 v-text="`Shopping  Cart (${cardItems.length})`"></h1>
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
                                            v-for="(item, index) in cardItems.slice(0, 5)"
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
                                                            @click="removeProduct(index)"
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
                                <v-flex class="cart-summary">
                                    <h2 class="d-flex align-center">Summary</h2>
                                    <v-flex class="cart-summary-box">
                                        <v-flex class="cart-info">
                                            <strong>Subtotal:</strong>
                                            <span>TK86,000.00</span>
                                        </v-flex>

                                        <v-flex class="cart-info">
                                            <strong>Shipping Fee:</strong>
                                            <span>TK70.00</span>
                                        </v-flex>
                                        <v-flex class="cart-info">
                                            <strong>Total:</strong>
                                            <span class="grand-total brand--text">TK86,000.00</span>
                                        </v-flex>

                                        <v-layout class="justify-space-between">
                                            <v-flex class="input-wrap coupon-code flex-grow-0">
                                                <v-text-field
                                                    solo
                                                    flat
                                                    hide-details
                                                    outlined
                                                    type="number"
                                                    label="Enter Your Price"
                                                    v-model="coupon_code"
                                                ></v-text-field>
                                            </v-flex>

                                            <v-flex class="grand-total flex-grow-0">
                                                <v-btn
                                                    width="100%"
                                                    type="submit"
                                                    tile
                                                    depressed
                                                    class="primary white--text text-none"
                                                >Apply Coupon</v-btn>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                </v-flex>
                            </v-col>
                        </v-row>

                        <v-flex class="pt-5 d-flex">
                            <v-btn
                                href="#"
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
import RelatedProducts from "@/components/RelatedProducts";
import QuantityHolder from "@/components/QuantityHolder";

export default {
    name: "Cart",
    components: {
        RelatedProducts,
        QuantityHolder,
    },
    data() {
        return {
            coupon_code: "",
        };
    },
    computed: {
        cardItems() {
            return this.$store.state.cardItems;
        },
    },
    methods: {
        getCardIemsFormLocalStorage() {
            return JSON.parse(localStorage.getItem("jungleefy-card-items"));
        },
        getItemTotal(basePrice, qty) {
            return qty * basePrice;
        },
    },
    created() {
        // localStorage.setItem(
        //     "jungleefy-card-items",
        //     JSON.stringify([
        //         {
        //             id: 2,
        //             img: "product-8.jpg",
        //             title: "Nikon COOLPIX B500 Digital Camera (Black)",
        //             qty: 3,
        //             basePrice: 500,
        //         },
        //         {
        //             id: 3,
        //             img: "product-2.jpg",
        //             title: "Nikon COOLPIX B500 Digital Camera (Black)",
        //             qty: 2,
        //             basePrice: 500,
        //         },
        //     ])
        // );
        this.$store.state.cardItems = this.getCardIemsFormLocalStorage();
        console.log(this.$store.state.cardItems);
    },
    mounted() {},
};
</script>

<style lang="scss">
@import "@/assets/sass/cart.scss";
</style>