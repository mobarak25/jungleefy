<template>
    <v-flex class="blog-comments">
        <h3 v-text="totalComments +' Comment'"></h3>

        <v-flex v-for="blog_comment in blog_comments" :key="blog_comment.id" class="comments-item">
            <v-layout>
                <v-avatar size="120">
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                </v-avatar>
                <v-flex class="comments-content">
                    <v-flex v-html="blog_comment.comments"></v-flex>
                    <v-flex class="replay-btn">
                        <a @click="replay(blog_comment.id)" href="#replay-form">REPLAY</a>
                    </v-flex>
                </v-flex>
            </v-layout>

            <v-flex v-if="blog_comment.replays" class="replay-holder">
                <v-layout v-for="replay in blog_comment.replays" :key="replay.id" class="replays">
                    <v-avatar size="120">
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                    </v-avatar>

                    <v-flex class="comments-content">
                        <v-flex v-html="replay.replay_content"></v-flex>

                        <v-flex class="likes">
                            {{replay.likes}}
                            <a
                                @click="like(blog_comment.id, replay.id)"
                                href="javascript:void(0)"
                            >
                                <v-icon>mdi-hand-pointing-left</v-icon>
                            </a>
                            <a href="#" class="ml-5">
                                <v-icon>mdi-message-processing-outline</v-icon>
                            </a>
                        </v-flex>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-flex>
        <v-flex class="comments-form">
            <h4>LEAVE A COMMENT</h4>

            <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(onSubmit)">
                    <!-- comment -->
                    <ValidationProvider
                        tag="div"
                        name="comment"
                        rules="required"
                        :bails="false"
                        v-slot="{ errors, classes }"
                    >
                        <div class="input-wrap" :class="classes">
                            <v-textarea
                                id="replay-form"
                                rows="4"
                                solo
                                flat
                                hide-details
                                outlined
                                label="Your comment"
                                v-model="formData.comment"
                            ></v-textarea>
                            <span>{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>

                    <v-row>
                        <!--Name -->
                        <ValidationProvider
                            tag="div"
                            class="col-md-4 py-0"
                            name="name"
                            rules="required"
                            :bails="false"
                            v-slot="{ errors, classes }"
                        >
                            <div class="input-wrap" :class="classes">
                                <v-text-field
                                    solo
                                    flat
                                    hide-details
                                    outlined
                                    label="Name"
                                    v-model="formData.name"
                                ></v-text-field>
                                <span>{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>

                        <!--Email -->
                        <ValidationProvider
                            tag="div"
                            class="col-md-4 py-0"
                            name="email"
                            rules="required|email"
                            :bails="false"
                            v-slot="{ errors, classes }"
                        >
                            <div class="input-wrap" :class="classes">
                                <v-text-field
                                    solo
                                    flat
                                    hide-details
                                    outlined
                                    label="Email"
                                    v-model="formData.email"
                                ></v-text-field>
                                <span>{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>

                        <!--Website -->
                        <ValidationProvider tag="div" class="col-md-4 py-0" name="website">
                            <div class="input-wrap">
                                <v-text-field
                                    solo
                                    flat
                                    hide-details
                                    outlined
                                    label="Website"
                                    v-model="formData.website"
                                ></v-text-field>
                            </div>
                        </ValidationProvider>
                    </v-row>

                    <v-btn
                        type="submit"
                        tile
                        depressed
                        class="submit mt-5 brand white--text text-none"
                    >Submit</v-btn>
                </form>
            </ValidationObserver>
        </v-flex>
    </v-flex>
</template>

<script>
export default {
    name: "BlogComments",

    data() {
        return {
            replay_id: "",
            formData: {
                comment: "",
                name: "",
                email: "",
                website: "",
            },

            blog_comments: [
                {
                    id: 1,
                    comments: "mmm<br> i wana talk to you",
                    replays: [
                        {
                            id: 1,
                            image: "replay-1.jpg",
                            replay_content: "Thanks<br> Sir",
                            likes: 3,
                        },
                    ],
                },
            ],
        };
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate().then((success) => {
                if (!success) {
                    return;
                }

                alert("message send");
                if (this.replay_id) {
                    this.blog_comments.find((element) => {
                        if (element.id == this.replay_id) {
                            element.replays.push({
                                id: element.replays.length + 1,
                                image: "replay-1.jpg",
                                replay_content: this.formData.comment,
                                likes: 0,
                            });
                        }
                    });
                } else {
                    this.blog_comments.push({
                        id: this.blog_comments.length + 1,
                        image: "replay-1.jpg",
                        comments: this.formData.comment,
                        replays: [],
                    });
                }

                // Resetting Values
                this.formData.comment = this.formData.name = this.formData.email = this.formData.website = this.replay_id =
                    "";

                // Wait until the models are updated in the UI
                this.$nextTick(() => {
                    this.$refs.form.reset();
                });
            });
        },

        replay(id) {
            this.replay_id = id;
        },

        like(parentId, replayid) {
            this.blog_comments.find((element) => {
                if (element.id == parentId) {
                    element.replays.find((val) => {
                        if (val.id == replayid) {
                            val.likes += 1;
                        }
                    });
                }
            });
        },
    },

    computed: {
        totalComments() {
            var count = String(this.blog_comments.length);
            return count.padStart(2, "0");
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/blog_comments.scss";
</style>
