<template>
    <v-card tile elevation="1">
        <v-flex class="choose-category">
            <h2>Sell an item or service</h2>
            <v-flex class="pick-category d-flex">
                <h3>Categories:</h3>

                <ul class="d-flex flex-wrap">
                    <li v-for="selectedCategory in selectedCategories" :key="selectedCategory">
                        {{selectedCategory}}
                        <v-icon class="brand--text">mdi-chevron-right</v-icon>
                    </li>
                </ul>
            </v-flex>
            <v-layout wrap :class="className">
                <!-- Parent category Section-->
                <v-flex class="category-holder">
                    <h4 class="d-flex align-center">Categories</h4>
                    <select
                        v-model="parentCat"
                        class="form-control"
                        @change="changeCat(parentCat)"
                        name="parent"
                        size="9"
                    >
                        <option
                            v-for="(val,index) in parentObj"
                            :value="[val.id, val.title]"
                            :key="index"
                            track-by="$index"
                        >{{val.title}}</option>
                    </select>
                </v-flex>

                <!-- Sub category Section-->
                <v-flex v-if="subLoad" class="category-holder">
                    <h4 class="d-flex align-center">Sub Categories</h4>
                    <select
                        v-model="subCat"
                        class="form-control"
                        @change="changeSubCat(subCat)"
                        name="subcat"
                        size="9"
                    >
                        <option
                            v-for="(val,index) in subObj"
                            :value="[val.id, val.title]"
                            :key="index"
                            track-by="$index"
                        >{{val.title}}</option>
                    </select>
                </v-flex>

                <!-- Sub Sub category Section-->
                <v-flex v-if="subSubLoad" class="category-holder">
                    <h4 class="d-flex align-center">Sub Sub Categories</h4>
                    <select
                        v-model="subSubCat"
                        @change="changeSubSubCat(subSubCat)"
                        class="form-control"
                        name="subsubcat"
                        size="9"
                    >
                        <option
                            v-for="(val,index) in subSubObj"
                            :value="[val.id, val.title]"
                            :key="index"
                            track-by="$index"
                        >{{val.title}}</option>
                    </select>
                </v-flex>
            </v-layout>

            <v-layout class="continue justify-end">
                <v-btn
                    :to="{name:'createAFreeAd'}"
                    tile
                    depressed
                    class="brand white--text text-none"
                >Continue</v-btn>
            </v-layout>
        </v-flex>
    </v-card>
</template>

<script>
import axios from "axios";

export default {
    name: "postYourAdSelectCategory",

    props: ["url", "className"],

    data() {
        return {
            selectedCategories: [],
            parentObj: {},
            subObj: {},
            subSubObj: {},
            subLoad: false,
            subSubLoad: false,
            parentCat: [],
            subCat: [],
            subSubCat: "",
        };
    },
    created() {
        this.selectedCategories = JSON.parse(
            localStorage.getItem("selected-category-storage") || "[]"
        );
    },
    mounted() {
        this.getCategoryObj(this.url + ".json").then((data) => {
            this.parentObj = data.categories;
        });
    },
    methods: {
        parseData: function (obj) {
            return JSON.parse(obj);
        },
        changeCat: function (catId) {
            this.subLoad = false;
            this.subSubLoad = false;
            this.getCategoryObj(this.url + "/" + catId[0] + ".json").then(
                (data) => {
                    this.subObj = data.categories;
                    if (Object.keys(this.subObj).length) {
                        this.subLoad = true;
                    }
                }
            );
            this.selectedCategories = [];
            this.selectedCategories.push(catId[1]);
            localStorage.setItem(
                "selected-category-storage",
                JSON.stringify(this.selectedCategories)
            );
        },
        changeSubCat: function (catId) {
            this.subSubLoad = false;
            this.getCategoryObj(this.url + "/" + catId[0] + ".json").then(
                (data) => {
                    this.subSubObj = data.categories;
                    if (Object.keys(this.subSubObj).length) {
                        this.subSubLoad = true;
                    }
                }
            );
            this.selectedCategories.splice(1, 2);
            this.selectedCategories.push(catId[1]);
            localStorage.setItem(
                "selected-category-storage",
                JSON.stringify(this.selectedCategories)
            );
        },
        changeSubSubCat(catId) {
            this.selectedCategories.splice(2, 1);
            this.selectedCategories.push(catId[1]);
            localStorage.setItem(
                "selected-category-storage",
                JSON.stringify(this.selectedCategories)
            );
        },
        getCategoryObj: function (route) {
            return axios
                .get(route)
                .then((response) => {
                    return response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>

<style lang="scss">
.choose-category {
    padding: rem-calc(73px 77px 60px);

    h2 {
        padding: rem-calc(11px 32px);
        margin: rem-calc(0 0 28px);
        @include font(primary, 23px, 28px, semi-bold);
        background-color: lighten(map-get($colors, grey), 40);
    }

    .pick-category {
        padding: rem-calc(0 0 40px);
        h3 {
            @include font(primary, 21px, 30px, regular);
        }
        ul {
            padding-left: rem-calc(10px);
            margin: 0;
            li {
                @include font(brand, 15px, 30px, false);
                .v-icon {
                    font-size: 20px;
                }
                &:last-child {
                    .v-icon {
                        display: none;
                    }
                }
            }
        }
    }

    .category-holder-wrap {
        margin: rem-calc(0 -15px);
    }
    .category-holder {
        padding: rem-calc(0 15px);
        h4 {
            height: 50px;
            padding: rem-calc(0 22px);
            @include font(light, 15px, 30px, medium);
            background-color: map-get($colors, primary);
        }
        select {
            width: 100%;
            padding-right: rem-calc(18px);
            margin: rem-calc(5px 0);
            &:focus {
                outline: 0;
            }
            @include scroll-y(6px);

            option {
                padding: rem-calc(10px 22px);
                border-bottom: 1px solid #ddd;
                @include font(primary, 15px, 15px, false);
            }
        }
    }

    .continue {
        padding: rem-calc(40px 0 0);

        .v-btn {
            width: rem-calc(150px);
            height: rem-calc(50px);
            @include font(false, 18px, 22px, semi-bold);
        }
    }
}
</style>
