<template>
    <ValidationObserver class="bid-form" tag="div" ref="form" v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
            <v-layout wrap class="justify-space-between">
                <ValidationProvider
                    tag="div"
                    class="place-bid-field"
                    name="bidding price"
                    rules="required"
                    :bails="false"
                    v-slot="{ errors, classes }"
                >
                    <div class="input-wrap" :class="classes">
                        <v-text-field
                            solo
                            type="number"
                            step="any"
                            flat
                            hide-details
                            outlined
                            label="Enter Your Bidding Price"
                            v-model="formData.bid_price"
                        ></v-text-field>
                        <span>{{ errors[0] }}</span>
                    </div>
                </ValidationProvider>

                <!-- Product Price & Description -->

                <v-btn
                    type="submit"
                    tile
                    depressed
                    class="place-bid-btn brand white--text text-none"
                >Place Bid</v-btn>
            </v-layout>
        </form>
    </ValidationObserver>
</template>

<script>
export default {
    name: "BiddingForm",

    data() {
        return {
            formData: {
                bid_price: "",
            },

            auctionBids: [],
        };
    },

    methods: {
        onSubmit() {
            this.$refs.form.validate().then((success) => {
                if (!success) {
                    return;
                }
                this.auctionBids.push({
                    id: this.auctionBids.length + 1,
                    name: "Md. Mobarak Ali",
                    image: "avator.jpg",
                    bid_amount: this.formData.bid_price,
                    bid_time: "8 Aug 2020 at 8:59:25AM PDT",
                });

                localStorage.setItem(
                    "auction-bids",
                    JSON.stringify(this.auctionBids)
                );

                this.Fire.$emit("BidInserted");
                // Resetting Values
                this.formData.bid_price = "";

                // Wait until the models are updated in the UI
                this.$nextTick(() => {
                    this.$refs.form.reset();
                });
            });
        },
    },

    created() {
        this.auctionBids = JSON.parse(
            localStorage.getItem("auction-bids") || "[]"
        );
    },
};
</script>

<style lang="scss">
.bid-form {
    .place-bid-field {
        width: 49%;

        .input-wrap {
            padding: 0;
        }
    }
    .v-btn.place-bid-btn {
        width: 49%;
        height: 43px;
        @include font(light, 16px, 20px, medium);
    }
}
</style>