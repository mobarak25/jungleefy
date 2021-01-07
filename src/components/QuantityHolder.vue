<template>
    <v-flex class="quantity-holder d-flex flex-grow-0">
        <v-icon @click="decrease()">mdi-minus</v-icon>
        <v-text-field
            v-model.number="quantity"
            step="1"
            @keyup="checkingZero()"
            solo
            flat
            hide-details
            type="number"
        ></v-text-field>
        <v-icon @click="increase()">mdi-plus</v-icon>
    </v-flex>
</template>
<script>
export default {
    data() {
        return {
            quantity: 0,
        };
    },
    props: {
        qty: Number,
        productId: Number,
    },
    methods: {
        increase() {
            this.quantity++;
        },
        decrease() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        },
        checkingZero() {
            if (
                Number(this.quantity) === this.quantity &&
                this.quantity % 1 !== 0
            ) {
                this.quantity = Math.floor(this.quantity);
            }

            if (this.quantity <= 1) {
                parseInt((this.quantity = 1));
            }
        },
    },
    created() {
        this.quantity = this.qty;
    },
    watch: {
        quantity: function (newVal) {
            this.$store.dispatch("updateCards", {
                id: this.productId,
                qty: newVal,
            });
        },
    },
};
</script>

<style lang="scss">
.quantity-holder {
    width: 115px;
    text-align: center;
    border: 1px solid #dbdbdb;
    .v-icon {
        padding-right: 3px;
        padding-left: 3px;

        &:focus::after {
            display: none;
        }
    }

    .mdi-minus {
        border-right: 1px solid #dbdbdb;
    }
    .mdi-plus {
        border-left: 1px solid #dbdbdb;
    }
    input {
        text-align: center;
    }
}
</style>