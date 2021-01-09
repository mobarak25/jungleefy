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
                                    <h2>Buying Item</h2>
                                </v-layout>

                                <v-flex class="account-panel-table">
                                    <table
                                        v-for="orders_item in orders_items"
                                        :key="orders_item.id"
                                    >
                                        <thead>
                                            <tr>
                                                <th scope="col" class="tbl-1">
                                                    <span
                                                        class="order-number"
                                                        v-text="'Order Number: '+ orders_item.order_number"
                                                    ></span>
                                                    <span
                                                        class="order-date"
                                                        v-text="'Order Date: '+ orders_item.order_date"
                                                    ></span>
                                                </th>
                                                <th scope="col" class="tbl-2">Product</th>
                                                <th
                                                    scope="col"
                                                    class="tbl-3"
                                                    v-text="'Order Total: TK '+ orders_item.price"
                                                ></th>
                                                <th scope="col" class="tbl-4">Status</th>
                                                <th scope="col" class="tbl-5">
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
                                                    <v-layout class="fill-height">
                                                        <v-img
                                                            contain
                                                            max-width="45"
                                                            :src="require('@/assets/images/products/'+ orders_item.image)"
                                                            alt="Image"
                                                        ></v-img>

                                                        <v-flex class="pl-3">
                                                            <h4
                                                                class="product"
                                                                v-text="orders_item.title"
                                                            ></h4>

                                                            <v-flex>
                                                                <span
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
                                                <td
                                                    :data-label="`Order Total : TK ${orders_item.price}`"
                                                >
                                                    <span
                                                        v-text="'TK '+ orders_item.price"
                                                        class="order-mony d-block"
                                                    ></span>
                                                    <span
                                                        v-if="orders_item.type == 'Auction'"
                                                        class="d-block grey--text"
                                                    >Winning Price</span>
                                                </td>
                                                <td data-label="Status">
                                                    <span
                                                        v-text="orders_item.status"
                                                        :class="[(orders_item.status=='Complete') ? 'brand--text' : (orders_item.status=='Cancelled') ? 'error--text':'']"
                                                    ></span>
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
import Pagination from "@/components/services/Pagination";

export default {
    name: "MyOrder",
    components: {
        AccountSidebar,
        Pagination,
    },

    data() {
        return {
            sort_item: [
                "Last 2 Order",
                "Low to high price",
                "high to Low price",
            ],

            orders_items: [
                {
                    id: 1,
                    order_number: "02302165",
                    title:
                        "ASUS Chromebook Flip C302 Laptop- 12.5” Touchscreen",
                    qty: 1,
                    image: "features-product-1.jpg",
                    type: "Auction",
                    price: 16500,
                    payment_method: "Cash On Delivery",
                    shipping_address:
                        "gp-j, 46/1, mohakhali, dhaka, Mohakhali, Bangladesh",
                    mobile: "01939569956",
                    status: "Complete",
                    shipping_status: "Delivered",
                    order_date: "30 Aug 2020",
                },
                {
                    id: 2,
                    order_number: "02302110",
                    title:
                        "HP 27” LCD LED Monitor Black - 1920x1080 Full HD Display",
                    qty: 2,
                    image: "features-product-2.jpg",
                    type: "trending",
                    price: 10000,
                    payment_method: "Cash On Delivery",
                    shipping_address:
                        "gp-j, 46/1, mohakhali, dhaka, Mohakhali, Bangladesh",
                    mobile: "01939569920",
                    status: "Complete",
                    shipping_status: "Delivered",
                    order_date: "25 Aug 2020",
                },
                {
                    id: 3,
                    order_number: "01767513948",
                    title:
                        "HP 27” LCD LED Monitor Black - 1920x1080 Full HD Display",
                    qty: 2,
                    image: "features-product-2.jpg",
                    type: "trending",
                    price: 60000,
                    payment_method: "Cash On Delivery",
                    shipping_address:
                        "gp-j, 46/1, mohakhali, dhaka, Mohakhali, Bangladesh",
                    mobile: "01939569920",
                    status: "Complete",
                    shipping_status: "Delivered",
                    order_date: "25 Aug 2020",
                },
            ],
        };
    },
};
</script>

<style lang="scss">
@import "@/assets/sass/account_table.scss";
</style>