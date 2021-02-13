<template>
    <v-flex class="site-content-wrap site_bg">
        <v-flex class="create-ad-wrap mx-auto">
            <v-container class="py-0">
                <v-layout wrap>
                    <!-- account-sidebar -->
                    <account-sidebar></account-sidebar>

                    <v-flex class="account-wrap">
                        <v-card tile elevation="0">
                            <v-flex class="account-panel">
                                <v-layout
                                    wrap
                                    class="account-panel-top align-center justify-space-between"
                                >
                                    <h2>My Auction</h2>

                                    <!-- Show components -->
                                    <sort-by
                                        :options="sort_item"
                                        title="Show"
                                        select-option="Last 2 Auction"
                                    ></sort-by>
                                </v-layout>

                                <v-flex class="account-panel-table">
                                    <table
                                        v-for="orders_item in orders_items"
                                        :key="orders_item.id"
                                    >
                                        <thead>
                                            <tr>
                                                <th>
                                                    <span
                                                        class="order-date"
                                                        v-text="'Date: '+ orders_item.order_date"
                                                    ></span>
                                                </th>
                                                <th>Product</th>
                                                <th>
                                                    <div style="width: 100px;">Price</div>
                                                </th>
                                                <th>
                                                    <span class="winning-auction">Winning Auction</span>
                                                </th>
                                                <th>
                                                    <span class="status">Shipping Status</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="border-right" data-label="Account">
                                                    <h4 class="payment-method">
                                                        Payment Method:
                                                        <strong
                                                            v-text="orders_item.payment_method"
                                                        ></strong>
                                                    </h4>
                                                    <address class="address">
                                                        <h4>Shipping Address:</h4>

                                                        <span v-text="orders_item.shipping_address"></span>
                                                    </address>
                                                </td>
                                                <td data-label="Product">
                                                    <v-layout class="my-product-img fill-height">
                                                        <v-img
                                                            contain
                                                            max-width="45"
                                                            :src="require('@/assets/images/products/'+ orders_item.image)"
                                                            alt="Image"
                                                        ></v-img>

                                                        <v-flex class="my-product-title">
                                                            <h4
                                                                class="product"
                                                                v-text="orders_item.title"
                                                            ></h4>

                                                            <v-flex>
                                                                <span
                                                                    class="qty"
                                                                    v-text="'Qty - '+orders_item.qty"
                                                                ></span>
                                                                <v-chip
                                                                    v-if="orders_item.type == 'Auction'"
                                                                    class="type"
                                                                >Auction</v-chip>
                                                            </v-flex>
                                                        </v-flex>
                                                    </v-layout>
                                                </td>
                                                <td data-label="Price">
                                                    <span
                                                        v-text="'TK '+ orders_item.price"
                                                        class="order-mony d-block"
                                                    ></span>
                                                    <span
                                                        v-if="orders_item.type == 'Auction'"
                                                        class="d-block grey--text"
                                                    >Starting bid</span>
                                                </td>
                                                <td data-label="Winning Auction">
                                                    <v-layout class="winning align-center">
                                                        <v-img
                                                            v-if="orders_item.auction_status=='Winning Bid'"
                                                            contain
                                                            width="36"
                                                            height="36"
                                                            :src="require('@/assets/images/wining-bid.png')"
                                                        ></v-img>
                                                        <v-img
                                                            v-else
                                                            contain
                                                            width="28"
                                                            height="28"
                                                            :src="require('@/assets/images/bid_participate.png')"
                                                        ></v-img>
                                                        <v-flex class="winning-bid">
                                                            <span
                                                                v-text="orders_item.auction_status"
                                                                class="d-block"
                                                            ></span>
                                                            <span
                                                                v-text="'TK '+orders_item.auction_last_price"
                                                                class="brand--text"
                                                            ></span>
                                                        </v-flex>
                                                    </v-layout>
                                                </td>
                                                <td
                                                    data-label="Shipping Status"
                                                    v-text="orders_item.shipping_status"
                                                ></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <v-flex class="d-flex justify-end account-pagination">
                                        <pagination></pagination>
                                    </v-flex>
                                </v-flex>
                            </v-flex>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-flex>
</template>

<script>
import AccountSidebar from "@/components/sites/pages/AccountSidebar";
import SortBy from "@/components/sites/pages/SortBy";
import Pagination from "@/components/services/Pagination";

export default {
    name: "MyOrder",
    components: {
        AccountSidebar,
        SortBy,
        Pagination,
    },

    data() {
        return {
            windowSize: "",
            drawer: false,
            sort_item: [
                "Last 2 Auction",
                "Low to high price",
                "high to Low price",
            ],

            orders_items: [
                {
                    id: 1,
                    title:
                        "ASUS Chromebook Flip C302 Laptop- 12.5” Touchscreen",
                    qty: 1,
                    image: "features-product-1.jpg",
                    type: "Auction",
                    price: 16500,
                    payment_method: "Cash On Delivery",
                    shipping_address:
                        "gp-j, 46/1, mohakhali, dhaka, Mohakhali, Bangladesh",
                    auction_status: "Winning Bid",
                    auction_last_price: 18500,
                    shipping_status: "Not yet shipped",
                    order_date: "30 Aug 2020",
                },
                {
                    id: 2,
                    title:
                        "ASUS Chromebook Flip C302 Laptop- 12.5” Touchscreen",
                    qty: 2,
                    image: "features-product-2.jpg",
                    type: "Auction",
                    price: 15500,
                    payment_method: "Cash On Delivery",
                    shipping_address:
                        "gp-j, 46/1, mohakhali, dhaka, Mohakhali, Bangladesh",
                    auction_status: "Bid Participate",
                    auction_last_price: 18500,
                    shipping_status: "Not yet shipped",
                    order_date: "30 Aug 2020",
                },
            ],
        };
    },
    methods: {
        onResize() {
            this.windowSize = window.innerWidth;
        },
    },
    mounted() {
        this.onResize();
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/account_table.scss";
</style>


