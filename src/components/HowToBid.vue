<template>
    <v-layout wrap class="how-do-bid" tag="section">
        <v-card flat tile class="card primary darken-1 white--text text-center" width="100%">
            <v-card-title class="d-block">How Do I Bid</v-card-title>

            <v-card-text class="white--text pt-0">First, you need toregister on website</v-card-text>

            <v-card-text class="white--text pt-0">
                Once you complete the registration form for free, our system will email you a confirmation mail and link to login jungleebazar.com. This information is what you will
                <br />need in order to start bidding at jungleebazar.com. If you run into any technical problems, please let us know.
            </v-card-text>
            <v-card-actions class="d-block">
                <v-btn tile dark color="brand" class="learn-more text-none">Learn More</v-btn>
            </v-card-actions>
        </v-card>
    </v-layout>
</template>
<script>
export default {
    data: () => ({
        icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    }),
};
</script>

<style lang="scss">
.how-do-bid {
    .card {
        padding: rem-calc(24px 0 55px);

        .v-card__title {
            padding-bottom: rem-calc(20px);
            @include font(false, 38px, 50px, medium);
        }
        .v-card__text {
            padding-bottom: rem-calc(20px);
            @include font(false, 18px, 28px, false);
        }
        .v-card__actions {
            padding-top: rem-calc(5px);
            .learn-more {
                width: 165px;
                height: 44px;
                @include font(false, 18px, 28px, false);
            }
        }
    }
}
</style>