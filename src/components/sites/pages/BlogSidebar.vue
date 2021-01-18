<template>
    <v-card tile>
        <v-flex class="blog-sideIn">
            <v-flex class="search-blog">
                <div class="input-wrap">
                    <v-text-field
                        append-icon="mdi-magnify"
                        solo
                        flat
                        hide-details
                        outlined
                        label="Search"
                        v-model="search"
                        @keyup="searchPost()"
                    ></v-text-field>
                </div>
            </v-flex>
        </v-flex>
    </v-card>
</template>

<script>
export default {
    name: "BlogSidebar",
    data() {
        return {
            search: "",
            recent_posts: [],
        };
    },
    methods: {
        searchPost() {
            alert(this.search);
        },
    },
};
</script>
<style lang="scss">
.blog-sideIn {
    padding: rem-calc(40px);
}
</style>