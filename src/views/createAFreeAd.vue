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
                                <!-- Condition section-->
                                <ValidationProvider
                                    tag="div"
                                    class="conditions d-flex align-center"
                                    name="Condition"
                                    rules="required"
                                    :bails="false"
                                    v-slot="{ errors, classes }"
                                >
                                    <h4>Condition</h4>
                                    <div class="control" :class="classes">
                                        <v-radio-group
                                            v-model="formData.condition"
                                            row
                                            hide-details
                                        >
                                            <v-radio color="brand" label="New" value="New"></v-radio>
                                            <v-radio color="brand" label="Used" value="Used"></v-radio>
                                        </v-radio-group>
                                        <span>{{ errors[0] }}</span>
                                    </div>
                                </ValidationProvider>

                                <v-row>
                                    <ValidationProvider
                                        tag="div"
                                        class="col-md-6 py-0"
                                        name="Ad Title"
                                        rules="required|alpha"
                                        :bails="false"
                                        v-slot="{ errors, classes }"
                                    >
                                        <div class="input-wrap" :class="classes">
                                            <v-flex class="input-label">Ad Title*</v-flex>
                                            <v-text-field
                                                solo
                                                flat
                                                hide-details
                                                outlined
                                                placeholder="Type your ad Title*"
                                                v-model="formData.ad_title"
                                            ></v-text-field>
                                            <span>{{ errors[0] }}</span>
                                        </div>
                                    </ValidationProvider>

                                    <ValidationProvider
                                        tag="div"
                                        class="col-md-6 py-0"
                                        name="Brand"
                                        rules="required"
                                        :bails="false"
                                        v-slot="{ errors, classes }"
                                    >
                                        <div class="input-wrap" :class="classes">
                                            <v-flex class="input-label">Brand</v-flex>

                                            <v-select
                                                :items="brands"
                                                label="Solo field"
                                                solo
                                                flat
                                                hide-details
                                                outlined
                                                v-model="formData.brand"
                                            ></v-select>
                                            <span>{{ errors[0] }}</span>
                                        </div>
                                    </ValidationProvider>
                                </v-row>

                                <v-row>
                                    <ValidationProvider
                                        tag="div"
                                        class="col-md-6 py-0"
                                        name="product type"
                                        rules="required"
                                        :bails="false"
                                        v-slot="{ errors, classes }"
                                    >
                                        <div class="input-wrap" :class="classes">
                                            <v-flex class="input-label">Product Type</v-flex>
                                            <v-select
                                                :items="product_types"
                                                label="Solo field"
                                                solo
                                                flat
                                                hide-details
                                                outlined
                                                v-model="formData.product_type"
                                            ></v-select>
                                            <span>{{ errors[0] }}</span>
                                        </div>
                                    </ValidationProvider>

                                    <ValidationProvider
                                        tag="div"
                                        class="col-md-6 py-0"
                                        name="product quantity"
                                        rules="required"
                                        :bails="false"
                                        v-slot="{ errors, classes }"
                                    >
                                        <div class="input-wrap" :class="classes">
                                            <v-flex class="input-label">Product Quantity</v-flex>
                                            <v-text-field
                                                solo
                                                flat
                                                hide-details
                                                outlined
                                                type="number"
                                                placeholder="Type Your Product Quantity"
                                                v-model="formData.quantity"
                                            ></v-text-field>
                                            <span>{{ errors[0] }}</span>
                                        </div>
                                    </ValidationProvider>
                                </v-row>

                                <!-- check auction -->
                                <v-radio-group v-model="formData.auction" row hide-details>
                                    <v-row class="auction-check">
                                        <v-col md="6" class="py-0">
                                            <v-radio
                                                color="brand"
                                                label="Sale with Auction"
                                                value="with_auction"
                                            ></v-radio>
                                        </v-col>
                                        <v-col md="6" class="py-0">
                                            <v-radio
                                                color="brand"
                                                label="Sale without  Auction"
                                                value="without_auction"
                                            ></v-radio>
                                        </v-col>
                                    </v-row>
                                </v-radio-group>

                                <v-flex
                                    v-if="formData.auction=='with_auction'"
                                    class="with-auction mt-3"
                                >
                                    <v-row>
                                        <ValidationProvider
                                            tag="div"
                                            class="col-md-6 py-0"
                                            name="Starting Price"
                                            rules="required"
                                            :bails="false"
                                            v-slot="{ errors, classes }"
                                        >
                                            <div
                                                class="input-wrap d-flex flex-wrap"
                                                :class="classes"
                                            >
                                                <v-flex
                                                    class="input-label flex-grow-0"
                                                >Starting Price (TK)</v-flex>
                                                <v-flex>
                                                    <v-text-field
                                                        solo
                                                        flat
                                                        hide-details
                                                        outlined
                                                        type="number"
                                                        placeholder="Example 8000 TK"
                                                        v-model="formData.starting_price"
                                                    ></v-text-field>
                                                    <span>{{ errors[0] }}</span>
                                                </v-flex>
                                                <v-flex class="flex-grow-0">
                                                    <v-tooltip right>
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-icon
                                                                v-bind="attrs"
                                                                v-on="on"
                                                            >mdi-information-outline</v-icon>
                                                        </template>
                                                        <span class="tooltip-info">
                                                            Lorem ipsum, dolor sit
                                                            <br />amet consectetur
                                                            <br />adipisicing elit.
                                                            <br />Dolorem facilis unde
                                                            <br />fugiat eum iure sequi
                                                        </span>
                                                    </v-tooltip>
                                                </v-flex>
                                            </div>
                                        </ValidationProvider>

                                        <ValidationProvider
                                            tag="div"
                                            class="col-md-6 py-0"
                                            name="Buy Now Price"
                                            rules="required"
                                            :bails="false"
                                            v-slot="{ errors, classes }"
                                        >
                                            <div
                                                class="input-wrap d-flex flex-wrap"
                                                :class="classes"
                                            >
                                                <v-flex
                                                    class="input-label flex-grow-0"
                                                >Buy Now Price</v-flex>
                                                <v-flex>
                                                    <v-text-field
                                                        solo
                                                        flat
                                                        hide-details
                                                        outlined
                                                        type="number"
                                                        placeholder="Example 8000 TK"
                                                        v-model="formData.buy_price"
                                                    ></v-text-field>
                                                    <span>{{ errors[0] }}</span>
                                                </v-flex>
                                                <v-flex class="flex-grow-0">
                                                    <v-tooltip right>
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-icon
                                                                v-bind="attrs"
                                                                v-on="on"
                                                            >mdi-information-outline</v-icon>
                                                        </template>
                                                        <span class="tooltip-info">
                                                            Lorem ipsum, dolor sit
                                                            <br />amet consectetur
                                                            <br />adipisicing elit.
                                                            <br />Dolorem facilis unde
                                                            <br />fugiat eum iure sequi
                                                        </span>
                                                    </v-tooltip>
                                                </v-flex>
                                            </div>
                                        </ValidationProvider>

                                        <ValidationProvider
                                            tag="div"
                                            class="col-md-12 py-0"
                                            name="Approximately Price"
                                            rules="required"
                                            :bails="false"
                                            v-slot="{ errors, classes }"
                                        >
                                            <div
                                                class="input-wrap pb-0 d-flex flex-wrap"
                                                :class="classes"
                                            >
                                                <v-flex
                                                    class="input-label flex-grow-0"
                                                >Approximately Price (TK)</v-flex>
                                                <v-flex>
                                                    <v-text-field
                                                        solo
                                                        flat
                                                        hide-details
                                                        outlined
                                                        type="number"
                                                        placeholder="Example 8000 TK"
                                                        v-model="formData.approximately_price"
                                                    ></v-text-field>
                                                    <span>{{ errors[0] }}</span>
                                                </v-flex>
                                                <v-flex class="flex-grow-0">
                                                    <v-tooltip right>
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-icon
                                                                v-bind="attrs"
                                                                v-on="on"
                                                            >mdi-information-outline</v-icon>
                                                        </template>
                                                        <span class="tooltip-info">
                                                            Lorem ipsum, dolor sit
                                                            <br />amet consectetur
                                                            <br />adipisicing elit.
                                                            <br />Dolorem facilis unde
                                                            <br />fugiat eum iure sequi
                                                        </span>
                                                    </v-tooltip>
                                                </v-flex>
                                            </div>
                                        </ValidationProvider>
                                    </v-row>
                                </v-flex>

                                <v-flex class="personal-information">
                                    <h3>Location</h3>
                                    <v-row>
                                        <ValidationProvider
                                            tag="div"
                                            class="col-md-6 py-0"
                                            name="region"
                                            rules="required"
                                            :bails="false"
                                            v-slot="{ errors, classes }"
                                        >
                                            <div class="input-wrap" :class="classes">
                                                <v-flex class="input-label">Region</v-flex>

                                                <v-select
                                                    :items="brands"
                                                    label="Solo field"
                                                    solo
                                                    flat
                                                    hide-details
                                                    outlined
                                                    v-model="formData.brand"
                                                ></v-select>
                                                <span>{{ errors[0] }}</span>
                                            </div>
                                        </ValidationProvider>

                                        <ValidationProvider
                                            tag="div"
                                            class="col-md-6 py-0"
                                            name="product quantity"
                                            rules="required"
                                            :bails="false"
                                            v-slot="{ errors, classes }"
                                        >
                                            <div class="input-wrap" :class="classes">
                                                <v-flex class="input-label">Product Quantity</v-flex>
                                                <v-text-field
                                                    solo
                                                    flat
                                                    hide-details
                                                    outlined
                                                    type="number"
                                                    placeholder="Type Your Product Quantity"
                                                    v-model="formData.quantity"
                                                ></v-text-field>
                                                <span>{{ errors[0] }}</span>
                                            </div>
                                        </ValidationProvider>
                                    </v-row>
                                </v-flex>

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
            formData: {
                condition: "Used",
                ad_title: "",
                brand: "",
                product_type: "",
                quantity: "",
                auction: "with_auction",
                starting_price: "",
                buy_price: "",
                approximately_price: "",
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
            brands: ["Hp", "Samsung", "LG", "Sony", "Vizio", "TCL"],
            product_types: ["Hp", "Samsung", "LG", "Sony", "Vizio", "TCL"],
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


