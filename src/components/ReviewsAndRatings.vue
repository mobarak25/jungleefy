<template>
    <v-sheet wrap class="review-ratings-wrap" tag="section">
        <h2>Reviews and Ratings</h2>
        <span class="writing-info d-block">
            How to write a good review
            <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">mdi-information-outline</v-icon>
                </template>
                <span class="tooltip-info">
                    Lorem ipsum, dolor sit
                    <br />amet consectetur
                    <br />adipisicing elit.
                    <br />Dolorem facilis unde
                    <br />fugiat eum iure sequi
                </span>
            </v-tooltip>
        </span>

        <v-layout wrap class="justify-space-between">
            <!-- Review Area -->
            <v-flex class="review-area">
                <v-card outlined tile>
                    <v-sheet class="review-box">
                        <v-textarea
                            counter
                            label="Please write your honest opinion and give a rating...."
                            :rules="rules"
                            v-model="commentText"
                        ></v-textarea>

                        <v-layout wrap class="pt-2 justify-space-between align-center">
                            <v-rating
                                dense
                                v-model="rating"
                                background-color="orange lighten-3"
                                color="brand"
                                half-increments
                                hover
                                size="22"
                            ></v-rating>

                            <v-btn
                                tile
                                depressed
                                height="40"
                                width="160"
                                class="primary white--text text-none"
                                @click="submitcomments()"
                            >Submit</v-btn>
                        </v-layout>
                    </v-sheet>
                </v-card>
            </v-flex>

            <!-- Rating Area -->
            <v-flex class="rating-area">
                <v-flex class="avarage-rating d-flex align-center">
                    <strong>5.0</strong>

                    <v-sheet>
                        <span v-html="commentItems.length + ' Ratings'"></span>
                        <v-rating
                            dense
                            readonly
                            half-increments
                            v-model="avarageRating"
                            background-color="orange lighten-3"
                            color="brand"
                            size="16"
                        ></v-rating>
                    </v-sheet>
                </v-flex>

                <!-- Rating Items Section -->
                <v-flex
                    v-for="ratingItem in ratingItems"
                    :key="ratingItem.id"
                    class="rating-items d-flex pt-1"
                >
                    <v-sheet class="rating-items-left">
                        <v-rating
                            dense
                            readonly
                            :value="ratingItem.star_count"
                            :length="ratingItem.star_count"
                            background-color="orange lighten-3"
                            color="brand"
                            size="16"
                        ></v-rating>
                    </v-sheet>
                    <v-sheet class="rating-items-right d-flex flex-grow-1 align-center">
                        <span v-html="ratingItem.bar_value+'%'"></span>
                        <v-flex>
                            <v-progress-linear
                                height="8"
                                rounded
                                class="flex-grow-1"
                                background-color="grey lighten-4"
                                color="brand lighten-1"
                                :value="ratingItem.bar_value"
                            ></v-progress-linear>
                        </v-flex>
                    </v-sheet>
                </v-flex>
            </v-flex>
        </v-layout>

        <v-divider class="mt-15"></v-divider>

        <v-flex class="review-commant-wrap">
            <v-flex
                v-for="commentItem in commentItems"
                :key="commentItem.id"
                class="review-commant-item d-flex flex-wrap justify-space-between"
            >
                <v-sheet class="review-commant-left">
                    <v-avatar v-if="commentItem.image" size="40">
                        <img
                            :src="require('@/assets/images/'+ commentItem.image)"
                            alt="commentItem.name"
                        />
                    </v-avatar>
                    <v-avatar v-else size="40" color="grey">
                        <v-icon dark>mdi-account-circle</v-icon>
                    </v-avatar>
                    <span class="primary--text" v-html="commentItem.name"></span>
                    <span class="grey--text" v-html="commentItem.date"></span>

                    <v-rating
                        class="pt-1"
                        dense
                        readonly
                        half-increments
                        color="yellow darken-3"
                        background-color="grey"
                        empty-icon="$ratingFull"
                        :value="commentItem.rating"
                        size="15"
                    ></v-rating>
                </v-sheet>
                <v-sheet class="review-commant-right">
                    <p v-html="commentItem.desc"></p>

                    <v-sheet class="thumbs">
                        <v-btn depressed outlined color="grey">
                            <v-icon class="grey--text">mdi-thumb-up-outline</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                            <v-icon class="grey--text">mdi-thumb-down-outline</v-icon>
                        </v-btn>
                    </v-sheet>
                </v-sheet>
            </v-flex>
        </v-flex>
    </v-sheet>
</template>

<script>
export default {
    name: "ReviewsAndRatings",
    data() {
        return {
            rating: 0,
            commentText: "",
            avarageRating: 5,
            rules: [(v) => v.length <= 200 || "Max 200 characters"],

            ratingItems: [
                { id: 1, star_count: 5, bar_value: 70 },
                { id: 2, star_count: 4, bar_value: 55 },
                { id: 3, star_count: 3, bar_value: 35 },
                { id: 4, star_count: 2, bar_value: 20 },
                { id: 5, star_count: 1, bar_value: 10 },
            ],

            commentItems: [
                {
                    id: 1,
                    name: "Fahim Ahmed",
                    image: "john.jpg",
                    rating: 2,
                    date: "02 June 2020",
                    desc:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                },
                {
                    id: 2,
                    name: "Md. Mobarak Ali",
                    image: "",
                    rating: 3.5,
                    date: "02 June 2020",
                    desc:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                },
            ],
        };
    },

    methods: {
        submitcomments() {
            this.commentItems.unshift({
                id: "3",
                name: "Md. Mobarak Ali",
                image: "",
                rating: this.rating,
                date: "02 June 2020",
                desc: this.commentText,
            });
            this.rating = 0;
            this.commentText = "";
        },
    },
};
</script>

<style lang="scss">
@import "@/assets/sass/reviews_and_ratings.scss";
</style>