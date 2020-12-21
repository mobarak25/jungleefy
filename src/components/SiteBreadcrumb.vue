<template>
    <v-breadcrumbs class="pa-0" :items="items" divider=">"></v-breadcrumbs>
</template>

<script>
export default {
    name: "SiteBreadcrumb",
    props: {
        options: Array,
    },

    data() {
        return {
            items: [],
        };
    },
    mounted() {
        this.items = this.options;
    },
};
</script>

<style lang="scss">
.v-breadcrumbs {
    padding: 0;

    li {
        @include font(grey, 15px, 20px, medium);
    }
}
</style>