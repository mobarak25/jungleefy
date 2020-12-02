<template>
    <v-breadcrumbs class="pa-0" :items="items" divider=">"></v-breadcrumbs>
</template>

<script>
export default {
    name: "SiteBreadcrumb",

    data() {
        return {
            items: [
                {
                    text: "Home",
                    disabled: false,
                    href: "/",
                },
                {
                    text: "Drop shipping",
                    disabled: true,
                    href: "breadcrumbs_link_1",
                },
            ],
        };
    },
};
</script>

<style lang="scss">
// @import "@/assets/sass/product_sidebar.scss";
.v-breadcrumbs {
    padding: 0;

    li {
        @include font(grey, 15px, 20px, medium);
    }
}
</style>