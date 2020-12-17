<template>
    <div :class="className" class="row">
        <div class="col-12">
            <ul>
                <li
                    v-for="selectedCategory in selectedCategories"
                    :key="selectedCategory"
                >{{selectedCategory}}</li>
            </ul>
        </div>
        <div class="col-lg-3 col-xl-3">
            <select
                v-model="parentCat"
                class="form-control"
                @change="changeCat(parentCat)"
                name
                size="10"
            >
                <option
                    v-for="val in parentObj"
                    :value="[val.id, val.title]"
                    :key="val.id"
                    track-by="$index"
                >{{val.title}}</option>
            </select>
        </div>

        <div v-if="subLoad" class="col-lg-3 col-xl-3">
            <select
                v-model="subCat"
                class="form-control"
                @change="changeSubCat(subCat)"
                name
                size="4"
            >
                <option
                    v-for="val in subObj"
                    :value="[val.id, val.title]"
                    :key="val.id"
                    track-by="$index"
                >{{val.title}}</option>
            </select>
        </div>

        <div v-if="subSubLoad" class="col-lg-3 col-xl-3">
            <select v-model="subSubCat" class="form-control" name id size="4">
                <option
                    v-for="val in subSubObj"
                    :value="val.id"
                    :key="val.id"
                    track-by="$index"
                >{{val.title}}</option>
            </select>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "postYourAdSelectCategory",
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
    props: ["url", "className"],
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
            this.selectedCategories.push(catId[1]);
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
