<template>
    <nav>
        <v-layout tag="header" d-block class="white--text">
            <v-layout class="top-header-wrapper">
                <v-container class="py-0">
                    <v-layout class="top-header mx-0 wrap">
                        <v-flex class="top-header-left flex-grow-0 d-flex align-center justify-space-between" >
                            <v-img
                                width="171"
                                height="29"
                                contain
                                class="flex-grow-0"
                                :src="require('@/assets/images/logo.png')"
                            ></v-img>
                            <h5>sad</h5>
                        </v-flex>

                        <v-flex class="top-header-mid pa-0">
                            <v-flex class="site-search pa-0">
                                <div class="site-search-box">
                                    <v-autocomplete height="44" full-width v-model="values" :items="items" label="What are you looking for" solo hide-details append-icon class="site-search-field"></v-autocomplete>
                                </div>
                                <button class="site-search-btn" type="submit"><i class="icofont-search"></i> Search</button>
                            </v-flex>
                        </v-flex>
                        <v-flex class="top-header-right pa-0">fsd</v-flex>
                    </v-layout>
                </v-container>
            </v-layout>
            <v-layout class="btm-header-wrapper">sdf</v-layout>
        </v-layout>

        <v-card class="d-flex" flat>
            <div>I'm a flexbox container!</div>
        </v-card>
    </nav>
</template>

<script>
export default {
    name: "SiteHeader",

    data: () => ({
        items: ["foo", "bar", "fizz", "buzz"],
        values: [],
        value: null
    })
};
</script>
