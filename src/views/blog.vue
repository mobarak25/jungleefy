<template>
    <v-flex class="delivery-wrap">
        <!-- inner banner -->
        <inner-banner :options="bannerContent"></inner-banner>

        <v-flex class="blog-panel">
            <v-container class="py-0">
                <v-layout wrap class="justify-space-between">
                    <v-flex class="blog-item flex-grow-0">
                        <template v-if="posts.length > 0">
                            <v-flex
                                v-for="post in posts"
                                :key="post.id"
                                class="blog-item-content d-flex flex-wrap justify-space-between"
                            >
                                <v-flex class="blog-left">
                                    <v-flex class="blog-top d-flex flex-wrap justify-space-between">
                                        <span>
                                            <v-icon>mdi-account-circle-outline</v-icon>
                                            {{post.user}}
                                        </span>
                                        <span>
                                            <v-icon>mdi-calendar-month-outline</v-icon>
                                            {{post.date}}
                                        </span>
                                        <span v-if="post.comment_count >0 ">
                                            <v-icon>mdi-comment-outline</v-icon>
                                            {{post.comment_count}} Comments
                                        </span>
                                        <span v-else>
                                            <v-icon>mdi-comment-outline</v-icon>&nbsp; No Comments
                                        </span>
                                    </v-flex>

                                    <h3 v-text="post.title"></h3>
                                    <p v-text="post.short_description"></p>
                                    <v-btn
                                        :to="{name:'BlogPostDetails'}"
                                        depressed
                                        class="read-more primary white--text text-none"
                                    >Read More</v-btn>
                                </v-flex>
                                <v-flex class="feature-image">
                                    <v-img
                                        width="100%"
                                        :src="require('@/assets/images/blog/'+ post.image)"
                                        alt="faq contact icon"
                                    ></v-img>
                                </v-flex>
                            </v-flex>
                        </template>
                        <h2 v-else>Blog not found !</h2>
                    </v-flex>

                    <v-flex class="blog-sidebar flex-grow-0">
                        <!-- Blog Sidebar -->
                        <blog-sidebar @searchText="getSearchText"></blog-sidebar>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>

        <v-flex class="blog-pagination">
            <v-container>
                <pagination></pagination>
            </v-container>
        </v-flex>
    </v-flex>
</template>

<script>
import InnerBanner from "@/components/sites/common/InnerBanner";
import BlogSidebar from "@/components/sites/pages/BlogSidebar";
import Pagination from "@/components/services/Pagination";

export default {
    name: "Blog",
    components: {
        InnerBanner,
        BlogSidebar,
        Pagination,
    },

    data() {
        return {
            post_search: "",
            bannerContent: {
                title: "Blog",
                image: "blog.jpg",
            },
        };
    },
    methods: {
        getSearchText(val) {
            this.post_search = val;
        },
    },
    computed: {
        posts() {
            if (this.post_search) {
                return this.$store.state.blogPosts.filteredPost;
            } else {
                return this.$store.state.blogPosts.allPost;
            }
        },
    },

    mounted() {
        this.$store.dispatch("getPosts");
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/blog_posts.scss";
</style>