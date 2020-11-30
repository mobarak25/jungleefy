<template>
    <v-flex class="site-content-wrap">
        <v-container class="py-0">
            <v-layout>
                <v-card tile class="product-sidebar">
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

                    <v-flex class="product-sidebar-box">
                        <v-expansion-panels flat tile v-model="panel" multiple>
                            <v-expansion-panel>
                                <v-expansion-panel-header class="pa-0">
                                    <v-card-title>Category</v-card-title>
                                </v-expansion-panel-header>

                                <v-expansion-panel-content>
                                    <v-list dense>
                                        <v-list-item-group>
                                            <v-list-item
                                                active-class="mobarak"
                                                class="pa-0"
                                                v-for="(category,index) in AllCategory.categories"
                                                :key="index"
                                            >{{category.title}}</v-list-item>
                                        </v-list-item-group>
                                    </v-list>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-flex>
                </v-card>
            </v-layout>
        </v-container>
    </v-flex>
</template>

<script>
export default {
    name: "Products",
    data() {
        return {
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
.product-sidebar {
    width: 273px;
    padding: rem-calc(0 38px 0 30px);
}
.product-sidebar-box {
    padding: rem-calc(20px 0 16px 0);
    border-bottom: 1px solid lighten(map-get($colors, grey), 40);
    .v-card__title {
        padding: rem-calc(0 0 4px);
        @include font(primary, 18px, 24px, medium);
    }
    .v-input--selection-controls {
        margin: rem-calc(8px 0);
    }
    .v-label {
        @include font(primary, 14px, 14px, false);
    }
    .v-icon {
        color: map-get($colors, gery);
    }
    .v-expansion-panel-content__wrap {
        padding: 0;
    }
}
</style>

