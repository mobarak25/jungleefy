<template>
    <v-flex class="site-content-wrap">
        <v-container class="py-0">
            <v-layout>
                <product-sidebar></product-sidebar>
            </v-layout>
        </v-container>
    </v-flex>
</template>

<script>
import ProductSidebar from "@/components/ProductSidebar";
export default {
    name: "Products",
    components: {
        ProductSidebar,
    },
};
</script>