<template>
    <v-flex class="site-content-wrap site_bg">
        <v-container class="py-0">
            <v-card tile>
                <v-sheet class="watch-list-wrap">
                    <h1>Favorite Product</h1>
                    <span class="watch-list-count">You have 4 product(s) in your wishlist</span>

                    <v-flex class="watch-list-table">
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col" class="tbl-1">Product Name</th>
                                    <th scope="col" class="tbl-2">Unit Price</th>
                                    <th scope="col" class="tbl-3">Product Type</th>
                                    <th scope="col" class="tbl-4">Stock Status</th>
                                    <th scope="col" class="tbl-5">
                                        <span class="status">Shipping Status</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border-right" data-label="Product Name">Product Name</td>
                                    <td data-label="Unit Price">Unit Price</td>
                                    <td data-label="Product Type">Product Type</td>
                                    <td data-label="Stock Status">Stock Status</td>
                                    <td data-label="Action">Action</td>
                                </tr>
                            </tbody>
                        </table>
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

export default {
    name: "WatchList",
    components: {
        RelatedProducts,
    },

    data() {
        return {};
    },
};
</script>

<style lang="scss">
@import "@/assets/sass/watch_list.scss";
</style>