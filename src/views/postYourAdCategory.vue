<template>
    <v-flex class="site-content-wrap site_bg">
        <v-flex class="post-ad-category-wrap">
            <v-container class="py-0">
                <post-your-ad-select-category
                    url="data/productCategory"
                    class-name="category-holder-wrap"
                ></post-your-ad-select-category>
            </v-container>
        </v-flex>
    </v-flex>
</template>

<script>
import postYourAdSelectCategory from "@/components/postYourAdSelectCategory";

export default {
    name: "postYourAdCategory",
    components: {
        postYourAdSelectCategory,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss">
.post-ad-category-wrap {
    max-width: 1322px;
    margin: 0 auto;
}
</style>


