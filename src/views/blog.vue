<template>
    <v-flex class="delivery-wrap">
        <!-- inner banner -->
        <inner-banner :options="bannerContent"></inner-banner>

        <v-flex class="blog-panel">
            <v-container class="py-0">
                <v-layout wrap class="justify-space-between">
                    <v-flex class="blog-item flex-grow-0">
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
                                <p v-text="post.content"></p>
                                <v-btn
                                    href="#"
                                    depressed
                                    class="read-more brand white--text text-none"
                                >Read More</v-btn>
                            </v-flex>
                            <v-flex class="feature-image">
                                <v-img
                                    width="100%"
                                    height="100%"
                                    :src="require('@/assets/images/blog/'+ post.image)"
                                    alt="faq contact icon"
                                ></v-img>
                            </v-flex>
                        </v-flex>
                    </v-flex>

                    <v-flex class="blog-sidebar flex-grow-0">
                        <!-- Blog Sidebar -->
                        <blog-sidebar></blog-sidebar>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-flex>
</template>

<script>
import InnerBanner from "@/components/sites/common/InnerBanner";
import BlogSidebar from "@/components/sites/pages/BlogSidebar";

export default {
    name: "Blog",
    components: {
        InnerBanner,
        BlogSidebar,
    },

    data() {
        return {
            search: "",
            bannerContent: {
                title: "Blog",
                image: "blog.jpg",
            },
        };
    },
    computed: {
        posts() {
            return this.$store.state.blogPosts;
        },
    },

    mounted() {
        this.$store.dispatch("getPosts");
    },

    created() {},
};
</script>

<style lang="scss">
@import "@/assets/sass/blog_posts.scss";
</style>