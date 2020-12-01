<template>
    <v-card tile class="product-sidebar">
        <!-- Filters Section -->
        <v-flex class="product-sidebar-box">
            <v-card-title>Filters</v-card-title>
            {{selected}}
            <v-checkbox
                v-for="filter in filters"
                :key="filter.id"
                hide-details
                color="brand"
                v-model="selected"
                :label="filter.title"
                :value="filter.title"
            ></v-checkbox>
        </v-flex>

        <!-- Type of Seller Section -->
        <v-flex class="product-sidebar-box">
            <v-card-title>Type of Seller</v-card-title>
            <v-checkbox
                v-for="SellerType in SellerTypes"
                :key="SellerType.id"
                hide-details
                color="brand"
                v-model="selected"
                :label="SellerType.title"
                :value="SellerType.title"
            ></v-checkbox>
        </v-flex>

        <!-- Category Section -->
        <v-flex class="product-sidebar-box product-sidebar-category">
            <v-expansion-panels flat tile v-model="panel" multiple>
                <v-expansion-panel>
                    <v-expansion-panel-header class="pa-0">
                        <v-card-title>Category</v-card-title>
                    </v-expansion-panel-header>

                    <v-expansion-panel-content>
                        <v-list>
                            <v-list-item-group>
                                <v-list-item
                                    active-class="mobarak"
                                    v-for="(category,index) in AllCategory.categories"
                                    :key="index"
                                >
                                    <v-icon>mdi-checkbox-blank-circle</v-icon>
                                    {{category.title}}
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-flex>

        <!-- Min. Order Section -->
        <v-flex class="product-sidebar-box">
            <v-card-title>Min. Order</v-card-title>
            <v-layout class="min-order" justify-space-between>
                <v-text-field solo flat outlined value="5000" :rules="[numberRule]"></v-text-field>
                <v-btn outlined depressed tile>OK</v-btn>
            </v-layout>
        </v-flex>

        <!-- Price Section -->
        <v-flex class="product-sidebar-box">
            <v-card-title>Min. Order</v-card-title>

            <v-range-slider v-model="range" :max="max" :min="min" hide-details class="align-center">
                <template v-slot:prepend>
                    <v-text-field
                        :value="range[0]"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        type="number"
                        style="width: 60px"
                        @change="$set(range, 0, $event)"
                    ></v-text-field>
                </template>
                <template v-slot:append>
                    <v-text-field
                        :value="range[1]"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        type="number"
                        style="width: 60px"
                        @change="$set(range, 1, $event)"
                    ></v-text-field>
                </template>
            </v-range-slider>
        </v-flex>
    </v-card>
</template>

<script>
export default {
    name: "ProductSidebar",

    data() {
        return {
            numberRule: (v) => {
                if (!v.trim()) return true;
                if (!isNaN(parseFloat(v)) && v >= 0) return true;
                return "Value must be a Number";
            },
            min: 0,
            max: 100,
            range: [20, 70],
            panel: [0],
            selected: ["All Product"],
            filters: [
                { id: 1, title: "All Product" },
                { id: 2, title: "Ready to Ship" },
                { id: 3, title: "Auctioned Products" },
                { id: 4, title: "Lot" },
                { id: 5, title: "New" },
                { id: 6, title: "Used" },
            ],
            SellerTypes: [
                { id: 1, title: "All" },
                { id: 2, title: "Members" },
                { id: 4, title: "Authorized dealers" },
            ],
        };
    },
    computed: {
        AllCategory() {
            return this.$store.state.productCategories;
        },
    },

    mounted() {
        this.$store.dispatch("getProductCategories");
    },
};
</script>

<style lang="scss">
@import "@/assets/sass/product_sidebar.scss";
</style>