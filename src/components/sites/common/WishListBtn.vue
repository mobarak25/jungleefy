<template>
    <v-btn fab elevation="2" @click="Fire.$emit('addorremovewislist', productId)">
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
            if (
                this.$root.$children[0].wishListedArr.includes(this.productId)
            ) {
                return true;
            }
            return false;
        },
    },
    created() {
        //console.log(this.productId);
    },
};
</script>