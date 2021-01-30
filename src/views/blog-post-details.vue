<template>
    <v-flex class="delivery-wrap">
        <!-- inner banner -->
        <inner-banner :options="bannerContent"></inner-banner>

        <v-flex class="blog-panel">
            <v-container class="py-0">
                <v-layout wrap class="justify-space-between">
                    <v-flex class="blog-item flex-grow-0">
                        <v-flex v-if="post_search">
                            <template v-if="posts.length > 0">
                                <v-flex
                                    v-for="post in posts"
                                    :key="post.id"
                                    class="blog-item-content d-flex flex-wrap justify-space-between"
                                >
                                    <v-flex class="blog-left">
                                        <v-flex
                                            class="blog-top d-flex flex-wrap justify-space-between"
                                        >
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
                                            href="#"
                                            depressed
                                            class="read-more primary white--text text-none"
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
                            </template>
                            <h2 v-else>Blog not found !</h2>
                        </v-flex>

                        <v-card v-else tile>
                            <v-flex>
                                <v-img :src="require('@/assets/images/blog/blog-big-1.jpg')"></v-img>
                            </v-flex>
                            <v-flex class="blog-post-details">
                                <v-flex class="blog-top d-flex flex-wrap">
                                    <span>
                                        <v-icon>mdi-account-circle-outline</v-icon>
                                        {{posts[0].user}}
                                    </span>
                                    <span>
                                        <v-icon>mdi-calendar-month-outline</v-icon>
                                        {{posts[0].date}}
                                    </span>
                                    <span v-if="posts[0].comment_count >0 ">
                                        <v-icon>mdi-comment-outline</v-icon>
                                        {{posts[0].comment_count}} Comments
                                    </span>
                                    <span v-else>
                                        <v-icon>mdi-comment-outline</v-icon>&nbsp; No Comments
                                    </span>
                                </v-flex>

                                <h2 v-text="posts[0].title"></h2>
                                <v-flex class="post-description" v-html="posts[0].description"></v-flex>

                                <v-layout class="share-blog justify-space-between">
                                    <h5>Share this post</h5>
                                    <v-flex
                                        class="share-icons d-flex justify-space-between flex-grow-0"
                                    >
                                        <a
                                            v-for="(share_icon,index) in share_icons"
                                            :key="index"
                                            :href="share_icon.link"
                                            target="_blank"
                                        >
                                            <v-icon v-text="share_icon.icon"></v-icon>
                                        </a>
                                    </v-flex>
                                </v-layout>

                                <!-- Blog Commnets -->
                                <blog-comments></blog-comments>
                            </v-flex>
                        </v-card>
                    </v-flex>

                    <v-flex class="blog-sidebar flex-grow-0">
                        <!-- Blog Sidebar -->
                        <blog-sidebar @searchText="getSearchText"></blog-sidebar>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-flex>
</template>

<script>
import InnerBanner from "@/components/sites/common/InnerBanner";
import BlogSidebar from "@/components/sites/pages/BlogSidebar";
import BlogComments from "@/components/sites/pages/BlogComments";

export default {
    name: "BlogDetails",
    components: {
        InnerBanner,
        BlogSidebar,
        BlogComments,
    },

    data() {
        return {
            post_search: "",
            bannerContent: {
                title: "Blog",
                image: "blog.jpg",
            },
            share_icons: [
                { icon: "mdi-facebook", link: "https://www.facebook.com" },
                { icon: "mdi-twitter", link: "https://www.twitter.com" },
                { icon: "mdi-linkedin", link: "https://www.linkedin.com" },
                { icon: "mdi-youtube", link: "https://www.youtube.com" },
            ],
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

<style lang="scss">
@import "@/assets/sass/blog_posts.scss";
</style>