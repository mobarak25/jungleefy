<template>
    <v-btn fab elevation="2" @click="addorremovewislist(productId)">
        <v-icon :class="isWislisted?'brand--text':'grey--text'">mdi-heart</v-icon>
    </v-btn>
</template>

<script>
export default {
    name: "WishListBtn",

    props: {
        productId: Number,
    },
    computed: {
        isWislisted() {
            if (this.$store.state.wishListedIdsArr.includes(this.productId)) {
                return true;
            }
            return false;
        },
    },
    methods: {
        addorremovewislist(productId) {
            this.$store.dispatch("toggleToWishList", productId);
        },
    },
    created() {
        //console.log(this.productId);
    },
};
</script>