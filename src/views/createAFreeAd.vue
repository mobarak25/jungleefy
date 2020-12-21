<template>
    <v-flex class="site-content-wrap site_bg">
        <v-flex class="create-ad-wrap mx-auto">
            <v-container class="py-0">
                <v-card tile elevation="1">
                    <v-flex class="create-ad">
                        <v-card-title class="breadcrumb-holder">
                            <site-breadcrumb :options="breadcrumbItems"></site-breadcrumb>
                        </v-card-title>

                        <v-flex class="pick-category d-flex">
                            <h3>Categories:</h3>

                            <ul class="d-flex flex-wrap">
                                <li
                                    v-for="selectedCategory in selectedCategories"
                                    :key="selectedCategory"
                                >
                                    {{selectedCategory}}
                                    <v-icon class="primary--text">mdi-chevron-right</v-icon>
                                </li>
                            </ul>
                            <router-link
                                :to="{name:'postYourAdCategory'}"
                                class="edit-category brand--text"
                            >Edit</router-link>
                        </v-flex>

                        <ValidationObserver v-slot="{ handleSubmit }">
                            <form @submit.prevent="handleSubmit(onSubmit)">
                                <ValidationProvider
                                    name="E-mail"
                                    rules="required|email"
                                    v-slot="{ errors }"
                                >
                                    <input
                                        v-model="formDara.email"
                                        type="email"
                                        placeholder="email"
                                    />
                                    <span>{{ errors[0] }}</span>
                                </ValidationProvider>

                                <ValidationProvider
                                    name="Name"
                                    rules="required|alpha"
                                    v-slot="{ errors }"
                                >
                                    <input v-model="formDara.name" type="text" placeholder="Name" />
                                    <span>{{ errors[0] }}</span>
                                </ValidationProvider>
                                <v-btn type="submit">Submit</v-btn>
                            </form>
                        </ValidationObserver>
                    </v-flex>
                </v-card>
            </v-container>
        </v-flex>
    </v-flex>
</template>

<script>
import SiteBreadcrumb from "@/components/SiteBreadcrumb";
export default {
    name: "createAFreeAd",
    components: {
        SiteBreadcrumb,
    },

    data() {
        return {
            formDara: {
                name: "",
                email: "",
            },
            selectedCategories: [],
            breadcrumbItems: [
                {
                    text: "Home",
                    disabled: false,
                    href: "/",
                },
                {
                    text: "Post your ad or service",
                    disabled: false,
                    href: "/select-category-for-post-ad",
                },
                {
                    text: "Create a free ad or service",
                    disabled: true,
                    href: "breadcrumbs_link_1",
                },
            ],
        };
    },
    created() {
        this.selectedCategories = JSON.parse(
            localStorage.getItem("selected-category-storage") || "[]"
        );
    },
    methods: {
        onSubmit() {
            alert("Form has been submitted!");
        },
    },
};
</script>

<style lang="scss">
@import "@/assets/sass/create_free_ad.scss";
</style>


