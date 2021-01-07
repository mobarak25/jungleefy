<template>
    <v-flex class="site-content-wrap site_bg">
        <v-container class="py-0">
            <v-card tile>
                <v-sheet class="card-list-wrap">
                    <v-layout class="justify-space-between">
                        <h1 v-text="`${cards.cardItems.length} Items`"></h1>
                        <span>Bill to the same address</span>
                    </v-layout>

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
                                <v-flex class="cart-summary">
                                    <h2 class="d-flex align-center">Ship to</h2>
                                    <v-flex class="ship-info d-flex flex-wrap">
                                        <v-flex class="address">
                                            <h4>Location</h4>
                                            <address>
                                                <span>
                                                    Name:
                                                    <strong>Abir Amzad</strong>
                                                </span>
                                                <span>
                                                    Phone:
                                                    <strong>01823 895 372</strong>
                                                </span>
                                                <span>
                                                    Address:
                                                    <strong>Zora Villa, GP-j, 46/3 Mohakhali, Dhaka-1212</strong>
                                                </span>
                                            </address>
                                        </v-flex>
                                        <v-flex class="ff">
                                            <v-list>
                                                <v-list-group
                                                    v-for="item in items"
                                                    :key="item.title"
                                                    v-model="item.active"
                                                    :prepend-icon="item.action"
                                                    no-action
                                                >
                                                    <template v-slot:activator>
                                                        <v-list-item-content>
                                                            <v-list-item-title v-text="item.title"></v-list-item-title>
                                                        </v-list-item-content>
                                                    </template>

                                                    <v-list-item
                                                        v-for="child in item.items"
                                                        :key="child.title"
                                                    >
                                                        <v-list-item-content>
                                                            <v-list-item-title v-text="child.title"></v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-list-group>
                                            </v-list>
                                        </v-flex>
                                    </v-flex>

                                    <h2 class="d-flex align-center">Summary</h2>
                                    <v-flex class="cart-summary-box">
                                        <v-flex class="cart-info">
                                            <strong>Subtotal:</strong>
                                            <span v-text="`TK${Subtotal}`"></span>
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
                                                    solo
                                                    flat
                                                    hide-details
                                                    outlined
                                                    type="number"
                                                    label="Enter Your Coupon code"
                                                    v-model="coupon_code"
                                                ></v-text-field>
                                            </v-flex>

                                            <v-flex class="coupon-code-ntn flex-grow-0">
                                                <v-btn
                                                    :to="{name:'CartDetails'}"
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
import RelatedProducts from "@/components/RelatedProducts";
import QuantityHolder from "@/components/QuantityHolder";

export default {
    name: "CartDetails",
    components: {
        RelatedProducts,
        QuantityHolder,
    },
    data() {
        return {
            coupon_code: "",
            shipping_fee: 70,
            panel: [0],
            items: [
                {
                    title: "Attractions",
                    action: "mdi-ticket",
                    items: [{ title: "List Item" }],
                },
            ],
            shippingLocations: [
                { id: 1, title: "Own Address" },
                { id: 2, title: "Brothers Address" },
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