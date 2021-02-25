<template>
    <v-flex class="inner-banner">
        <v-img
            :src="require('@/assets/images/inner-banners/' + options.image)"
            alt="options.title + 'Image'"
        >
            <v-container class="fill-height d-flex align-center">
                <h1 v-html="options.title"></h1>
            </v-container>
        </v-img>
    </v-flex>
</template>

<script>
export default {
    name: "InnerBanner",

    props: {
        options: Object,
    },
};
</script>

<style lang="scss">
.inner-banner {
    padding: 0;

    h1 {
        @include font(primary, 40px, 50px, medium);

        span {
            padding-top: rem-calc(5px);
            display: block;
            @include font(false, 16px, 22px, regular);
        }
    }
}
@include media(md) {
    .inner-banner {
        h1 {
            @include font(primary, 30px, 40px, medium);
        }
    }
}
</style>