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
                                    <h2>My Orders</h2>

                                    <!-- Show components -->
                                    <sort-by :options="sort_item" title="Show"></sort-by>
                                </v-layout>

                                <v-flex class="account-panel-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th scope="col" class="tbl-1">
                                                    <span
                                                        class="order-number"
                                                    >Order Number: 02302165</span>
                                                    <span class="order-date">Order Date: 30 Aug 2020</span>
                                                </th>
                                                <th scope="col" class="tbl-2">Product</th>
                                                <th scope="col" class="tbl-3">Order Total: TK 16,500</th>
                                                <th scope="col" class="tbl-4">Status</th>
                                                <th scope="col" class="tbl-5">Shipping Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td data-label="Account">
                                                    <h4>
                                                        Payment Method:
                                                        <strong>Cash On Delivery</strong>
                                                    </h4>
                                                    <h4>
                                                        Shipping Address:
                                                        <span>
                                                            gp-j, 46/1, mohakhali, dhaka,
                                                            Mohakhali, Bangladesh
                                                            M: 01939569956
                                                        </span>
                                                    </h4>
                                                    <a href="#">Details</a>
                                                </td>
                                                <td data-label="Product">
                                                    <v-layout class="fill-height">
                                                        <v-img
                                                            max-width="45"
                                                            :src="require('@/assets/images/products/features-product-1.jpg')"
                                                            alt="Payment Methods"
                                                        ></v-img>

                                                        <v-flex class="pl-3">
                                                            <h4>
                                                                ASUS Chromebook Flip C302
                                                                Laptop- 12.5” Touchscreen
                                                            </h4>
                                                            <v-flex>
                                                                <span>Qty - 1</span>
                                                                <v-chip>Auction</v-chip>
                                                            </v-flex>
                                                        </v-flex>
                                                    </v-layout>
                                                </td>
                                                <td data-label="Amount">$1,190</td>
                                                <td data-label="Amount">$1,190</td>
                                                <td data-label="Period">03/01/2016 - 03/31/2016</td>
                                            </tr>
                                        </tbody>
                                    </table>
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

export default {
    name: "MyOrder",
    components: {
        AccountSidebar,
        SortBy,
    },

    data() {
        return {
            sort_item: [
                "Last 2 orders",
                "Low to high price",
                "high to Low price",
            ],
        };
    },
};
</script>

<style lang="scss">
@import "@/assets/sass/my_order.scss";
</style>


