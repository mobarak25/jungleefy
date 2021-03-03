<template>
    <v-card tile>
        <v-flex class="blog-sideIn">
            <v-flex class="search-blog">
                <div class="input-wrap">
                    <v-text-field
                        autocomplete="false"
                        append-icon="mdi-magnify"
                        solo
                        flat
                        hide-details
                        outlined
                        label="Search"
                        v-model="search"
                        @keyup="searchPost()"
                    >></v-text-field>
                </div>
            </v-flex>

            <v-flex class="blog-category">
                <h3>Categories</h3>
                <v-list dense class="py-0">
                    <v-list-item-group v-model="selected_category" color="primary">
                        <v-list-item
                            :ripple="false"
                            v-for="category in categories"
                            :key="category.id"
                        >
                            <v-list-item-icon>
                                <v-icon>mdi-checkbox-blank-circle</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title v-text="category.name"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-flex>

            <v-flex class="recent-blog">
                <h3>Recent Posts</h3>

                <a
                    v-for="post in posts"
                    :key="post.id"
                    :href="post.id"
                    class="recent-blog-item d-flex"
                >
                    <v-flex class="recent-blog-left">
                        <v-img
                            width="100%"
                            :src="require('@/assets/images/blog/'+ post.image)"
                            alt="faq contact icon"
                        ></v-img>
                    </v-flex>

                    <v-flex class="recent-blog-right">
                        <h4 v-text="post.title"></h4>
                        <i v-text="post.date"></i>
                    </v-flex>
                </a>
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
            selected_category: null,
            categories: [
                { id: 1, name: "Electronics" },
                { id: 2, name: "Fashion, Health & Beauty" },
                { id: 3, name: "Food & Agriculture" },
                { id: 4, name: "Hobbies, Sports & Kids" },
                { id: 5, name: "Home & Living" },
            ],
        };
    },
    computed: {
        posts() {
            return this.$store.state.blogPosts.allPost.slice(0, 5);
            // if (this.post_search) {
            //     return this.$store.state.blogPosts.filteredPost;
            // } else {
            //     return this.$store.state.blogPosts.allPost;
            // }
        },
    },
    methods: {
        searchPost() {
            this.$store.commit("SEARCH_POSTS", this.search);
            this.$emit("searchText", this.search);
        },
    },
};
</script>
<style lang="scss">
@import "@/assets/sass/blog_sidebar.scss";
</style>