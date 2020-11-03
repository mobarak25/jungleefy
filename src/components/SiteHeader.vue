<template>
    <div>
        <v-layout tag="header" d-block class="white--text">
            <v-layout class="top-header-wrapper">
                <v-container class="py-0">
                    <v-row class="top-header mx-0">
                        <v-col class="top-header-left pa-0">
                            <v-img
                                width="171"
                                height="29"
                                contain
                                :src="logo"
                            ></v-img>
                        </v-col>

                        <v-col class="top-header-mid pa-0">
                            <v-col class="site-search pa-0">
                                <v-autocomplete
                                    v-model="values"
                                    :items="items"
                                    label="What are you looking for"
                                    solo
                                    append-icon="mdi-map-marker"
                                >
                                    <h1>hello</h1>
                                </v-autocomplete>
                            </v-col>
                        </v-col>

                        <v-col class="top-header-right pa-0">fsd</v-col>
                    </v-row>
                </v-container>
            </v-layout>
            <v-layout class="btm-header-wrapper">sdf</v-layout>
        </v-layout>

        <v-card class="d-flex" flat>
            <div>
                I'm a flexbox container!
            </div>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "SiteHeader",

    data: () => ({
        logo: require("@/assets/images/logo.png"),
        items: ["foo", "bar", "fizz", "buzz"],
        values: ["foo", "bar"],
        value: null
    })
};
</script>
