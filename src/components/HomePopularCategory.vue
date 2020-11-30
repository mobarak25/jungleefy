<template>
    <v-layout wrap class="home-category-sections" tag="section">
        <v-container>
            <v-flex class="home-sections-title">
                <h2>
                    Popular categories
                    <v-btn
                        height="30"
                        width="90"
                        outlined
                        rounded
                        text
                        color="primary"
                        class="text-none bg-white"
                    >Show All</v-btn>
                </h2>
            </v-flex>

            <v-row>
                <v-col
                    lg="2"
                    md="3"
                    sm="4"
                    v-for="category in AllCategory.popularCategories"
                    :key="category.id"
                    class="home-category-item"
                >
                    <router-link to="/">
                        <v-flex class="category-box">
                            <v-img
                                class="white--text"
                                :src="require('@/assets/images/category/'+ category.image)"
                                alt="Category Image"
                            >
                                <div
                                    class="category-boxIn fill-height d-flex align-center justify-center"
                                >
                                    <h3>{{category.title}}</h3>
                                </div>
                            </v-img>
                        </v-flex>
                    </router-link>
                </v-col>
            </v-row>
        </v-container>
    </v-layout>
</template>
<script>
export default {
    name: "HomePopularCategory",

    data: () => ({
        color: "brand",
    }),

    computed: {
        AllCategory() {
            return this.$store.state.productCategories;
        },
    },

    mounted() {
        this.$store.dispatch("getProductCategories");
    },
};
</script>

<style lang="scss">
.home-category-sections {
    padding-top: rem-calc(25px);

    @include media(sm) {
        .home-category-item {
            max-width: 50%;
        }
    }
}
.home-sections-title {
    h2 {
        position: relative;
        padding-bottom: rem-calc(8px);
        margin-bottom: rem-calc(16px);
        @include font(primary, 22px, 33px, medium);

        &:before {
            @include sudo(50px, 2px, left, 0, bottom, 0, brand);
        }

        .v-btn.v-btn--outlined.v-btn--text {
            background-color: map-get($colors, light);
            border-color: map-get($colors, brand);
        }
    }
}
.category-box {
    .v-image__image {
        transition: all 500ms;
    }
    &:hover .v-image__image {
        transform: scale(1.1);
    }
    .category-boxIn {
        background-color: rgba(34, 34, 34, 0.6);

        h3 {
            padding: rem-calc(0 5px);
            @include font(light, 16px, 22px, semi-bold);
            text-align: center;
        }
    }
}

/* Circle */
.category-boxIn {
    position: relative;
}
.category-boxIn::before {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    display: block;
    content: "";
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 100%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
}
.category-boxIn:hover::before {
    -webkit-animation: circle 0.75s;
    animation: circle 0.75s;
}
@-webkit-keyframes circle {
    0% {
        opacity: 1;
    }
    40% {
        opacity: 1;
    }
    100% {
        width: 200%;
        height: 200%;
        opacity: 0;
    }
}
@keyframes circle {
    0% {
        opacity: 1;
    }
    40% {
        opacity: 1;
    }
    100% {
        width: 200%;
        height: 200%;
        opacity: 0;
    }
}
</style>


