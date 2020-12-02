<template>
    <v-flex class="site-content-wrap site_bg">
        <v-container class="py-0">
            <v-flex wrap class="d-flex justify-space-between">
                <product-sidebar></product-sidebar>

                <v-card tile class="portlet">
                    <site-breadcrumb></site-breadcrumb>

                    <v-layout
                        class="product-top-filter d-flex flex-grow-0 flex-wrap justify-space-between"
                    >
                        <v-sheet>
                            <span class="filter-info">
                                <b>Drop shipping</b> (Showing 1 – 24 products
                                <span>ads</span> of 11,075 products
                                <span>ads</span>)
                            </span>
                        </v-sheet>

                        <v-sheet>
                            <v-flex class="d-flex align-center">
                                <v-flex class="d-flex align-center sort-field-box">
                                    <strong>Sort by:</strong>
                                    <v-flex class="sort-field">
                                        <v-select
                                            hide-details
                                            :items="items"
                                            label="Date:Newest on top"
                                            dense
                                            solo
                                            flat
                                            outlined
                                        ></v-select>
                                    </v-flex>
                                </v-flex>

                                <v-flex>
                                    <v-icon>mdi-format-list-bulleted</v-icon>
                                    <v-icon>mdi-view-grid-outline</v-icon>
                                </v-flex>
                            </v-flex>
                        </v-sheet>
                    </v-layout>

                    <product-card></product-card>
                </v-card>
            </v-flex>
        </v-container>
    </v-flex>
</template>

<script>
import ProductSidebar from "@/components/ProductSidebar";
import SiteBreadcrumb from "@/components/SiteBreadcrumb";
import ProductCard from "@/components/ProductCard";

export default {
    name: "Products",
    components: {
        ProductSidebar,
        SiteBreadcrumb,
        ProductCard,
    },

    data() {
        return {
            items: ["Date:Newest on top", "Foo", "Bar", "Fizz", "Buzz"],
        };
    },
};
</script>

<style lang="scss">
.portlet {
    width: calc(100% - 288px);
    padding: rem-calc(20px 30px);
}
.product-top-filter {
    padding-top: rem-calc(13px);
    margin: 0;

    .filter-info {
        @include font(grey, 15px, 25px, medium);

        b {
            color: map-get($colors, primary);
        }
        span {
            color: darken(map-get($colors, grey), 25);
        }
    }
    .sort-field-box {
        strong {
            @include font(primary, 15px, 25px, medium);
        }
        .sort-field {
            max-width: 180px;
            margin-left: rem-calc(8px);
            .v-input {
                input {
                    height: 25px;
                    padding: 0;
                    @include font(primary, 14px, 25px, false);
                }
                fieldset {
                    border: 1px solid #e5e5e5;
                    border-radius: 0;
                }
                .v-input__slot {
                    padding-right: 0 !important;
                }
                .v-select__selection,
                .v-label {
                    @include font(primary, 14px, 18px, false);
                }
            }
        }
    }
}
</style>