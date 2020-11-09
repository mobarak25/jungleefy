<template>
    <v-footer>{{ new Date().getFullYear() }}</v-footer>
</template>

<script>
export default {
    name: "SiteFooter",

    data() {
        return {};
    }
};
</script>

<style lang="scss">
@import "@/assets/sass/footer.scss";
</style>