<template>
    <v-layout wrap class="home-seller-sections" tag="section">
        <v-container>
            <v-flex class="home-seller-conrainer">
                <v-img
                    class="align-center"
                    :src="require('@/assets/images/saller.jpg')"
                    alt="Saller Image"
                >
                    <div class="home-seller-box">
                        <h2>Become a seller</h2>
                        <span class="seller-text">
                            Do you have hidden treasure in your attic? It's the ideal time to turn that forgotten
                            <br />hobby into a lucrative side hustle.
                        </span>

                        <v-btn depressed color="primary" tile class>Start Selling</v-btn>
                    </div>
                </v-img>
            </v-flex>
        </v-container>
    </v-layout>
</template>
<script>
export default {
    name: "HomeSellerSection",

    data: () => ({}),
};
</script>

<style lang="scss">
.home-seller-sections {
    padding: rem-calc(55px 0 0);

    .home-seller-box {
        padding-left: 7.5%;

        h2 {
            padding-bottom: rem-calc(10px);
            @include font(primary, 38px, 38px, semi-bold);
        }
        .seller-text {
            padding: rem-calc(0 0 20px);
            display: block;
            @include font(primary, 22px, 38px, medium);
        }
        .v-btn {
            width: 175px;
            height: 48px;
            @include font(false, 16px, 22px, medium);
        }
    }
}
</style>


