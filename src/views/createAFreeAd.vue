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
                                    <!-- Ad Title -->
                                    <ValidationProvider
                                        tag="div"
                                        class="col-md-6 py-0"
                                        name="ad title"
                                        rules="required"
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
                                                label="Type Your ad Title*"
                                                v-model="formData.ad_title"
                                            ></v-text-field>
                                            <span>{{ errors[0] }}</span>
                                        </div>
                                    </ValidationProvider>

                                    <!-- Brand -->
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
                                                label="Select Your Brand"
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
                                    <!-- product type -->
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
                                                label="Slelect Product Type"
                                                solo
                                                flat
                                                hide-details
                                                outlined
                                                v-model="formData.product_type"
                                            ></v-select>
                                            <span>{{ errors[0] }}</span>
                                        </div>
                                    </ValidationProvider>

                                    <!-- product quantity -->
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
                                                label="Type Your Product Quantity"
                                                v-model="formData.quantity"
                                            ></v-text-field>
                                            <span>{{ errors[0] }}</span>
                                        </div>
                                    </ValidationProvider>
                                </v-row>

                                <!-- Image Uploader -->
                                <div class="multi-image-uploader">
                                    <h3>Pictures</h3>
                                    <vue-upload-multiple-image
                                        @upload-success="uploadImageSuccess"
                                        @before-remove="beforeRemove"
                                        @edit-image="editImage"
                                        :data-images="images"
                                        idUpload="myIdUpload"
                                        editUpload="myIdEdit"
                                        primaryText="Default"
                                        markIsPrimaryText="Set as default"
                                        dragText="Drag images (many)"
                                        browseText="(or) Select"
                                        dropText="Drop your file here ..."
                                        popupText="This image will be displayed as default"
                                    ></vue-upload-multiple-image>
                                </div>

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
                                        <!-- Starting Price -->
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
                                                        label="Example 8000 TK"
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

                                        <!-- Buy Now Price -->
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
                                                        label="Example 8000 TK"
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

                                        <!-- approximately price -->
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
                                                        label="Example 8000 TK"
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

                                <!-- Product Price & Description -->
                                <v-flex v-else class="personal-information">
                                    <h3>Product Price & Description</h3>
                                    <v-row>
                                        <!-- Price (TK) -->
                                        <ValidationProvider
                                            tag="div"
                                            class="col-md-6 py-0"
                                            name="price"
                                            rules="required"
                                            :bails="false"
                                            v-slot="{ errors, classes }"
                                        >
                                            <div class="input-wrap" :class="classes">
                                                <v-flex class="input-label">Price (TK)</v-flex>

                                                <v-text-field
                                                    solo
                                                    flat
                                                    hide-details
                                                    outlined
                                                    type="number"
                                                    label="Enter Your Price"
                                                    v-model="formData.price"
                                                ></v-text-field>
                                                <span>{{ errors[0] }}</span>
                                            </div>
                                        </ValidationProvider>

                                        <!-- negotiable -->
                                        <ValidationProvider
                                            tag="div"
                                            class="col-md-6 py-0"
                                            name="negotiable"
                                            :bails="false"
                                            v-slot="{ errors, classes }"
                                        >
                                            <div class="input-wrap mt-9" :class="classes">
                                                <v-checkbox
                                                    color="brand"
                                                    hide-details
                                                    v-model="formData.negotiable"
                                                    label="Negotiable"
                                                ></v-checkbox>
                                                <span>{{ errors[0] }}</span>
                                            </div>
                                        </ValidationProvider>

                                        <!-- Ad Description -->
                                        <ValidationProvider
                                            tag="div"
                                            class="col-md-12 py-0"
                                            name="ad description"
                                            rules="required"
                                            :bails="false"
                                            v-slot="{ errors, classes }"
                                        >
                                            <div class="input-wrap" :class="classes">
                                                <v-flex class="input-label">Ad Description*</v-flex>

                                                <v-textarea
                                                    solo
                                                    flat
                                                    hide-details
                                                    outlined
                                                    type="number"
                                                    label="Include the brand, model, age and any included accessories."
                                                    v-model="formData.description"
                                                ></v-textarea>
                                                <span>{{ errors[0] }}</span>
                                            </div>
                                        </ValidationProvider>
                                    </v-row>
                                </v-flex>

                                <v-flex class="personal-information">
                                    <h3>Location</h3>
                                    <v-row>
                                        <!-- region -->
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
                                                    :items="regions"
                                                    label="Select Your Division"
                                                    solo
                                                    flat
                                                    hide-details
                                                    outlined
                                                    v-model="formData.region"
                                                ></v-select>
                                                <span>{{ errors[0] }}</span>
                                            </div>
                                        </ValidationProvider>

                                        <!-- City -->
                                        <ValidationProvider
                                            tag="div"
                                            class="col-md-6 py-0"
                                            name="City"
                                            rules="required"
                                            :bails="false"
                                            v-slot="{ errors, classes }"
                                        >
                                            <div class="input-wrap" :class="classes">
                                                <v-flex class="input-label">City</v-flex>

                                                <v-select
                                                    :items="citys"
                                                    label="Enter Your City"
                                                    solo
                                                    flat
                                                    hide-details
                                                    outlined
                                                    v-model="formData.city"
                                                ></v-select>
                                                <span>{{ errors[0] }}</span>
                                            </div>
                                        </ValidationProvider>

                                        <!-- address -->
                                        <ValidationProvider
                                            tag="div"
                                            class="col-md-12 py-0"
                                            name="address"
                                            rules="required"
                                            :bails="false"
                                            v-slot="{ errors, classes }"
                                        >
                                            <div class="input-wrap" :class="classes">
                                                <v-flex class="input-label">Address</v-flex>

                                                <v-text-field
                                                    solo
                                                    flat
                                                    hide-details
                                                    outlined
                                                    type="text"
                                                    label="Type your address"
                                                    v-model="formData.address"
                                                ></v-text-field>
                                                <span>{{ errors[0] }}</span>
                                            </div>
                                        </ValidationProvider>
                                    </v-row>
                                </v-flex>

                                <v-flex class="personal-information">
                                    <h3>Seller’s information</h3>
                                    <v-row>
                                        <!-- First Name -->
                                        <ValidationProvider
                                            tag="div"
                                            class="col-md-6 py-0"
                                            name="first name"
                                            rules="required"
                                            :bails="false"
                                            v-slot="{ errors, classes }"
                                        >
                                            <div class="input-wrap" :class="classes">
                                                <v-flex class="input-label">First Name</v-flex>

                                                <v-text-field
                                                    solo
                                                    flat
                                                    hide-details
                                                    outlined
                                                    type="text"
                                                    label="Your first name"
                                                    v-model="formData.first_name"
                                                ></v-text-field>
                                                <span>{{ errors[0] }}</span>
                                            </div>
                                        </ValidationProvider>

                                        <!-- Last Name -->
                                        <ValidationProvider
                                            tag="div"
                                            class="col-md-6 py-0"
                                            name="last name"
                                            rules="required"
                                            :bails="false"
                                            v-slot="{ errors, classes }"
                                        >
                                            <div class="input-wrap" :class="classes">
                                                <v-flex class="input-label">Last Name</v-flex>

                                                <v-text-field
                                                    solo
                                                    flat
                                                    hide-details
                                                    outlined
                                                    type="text"
                                                    label="Your Last Name"
                                                    v-model="formData.last_name"
                                                ></v-text-field>
                                                <span>{{ errors[0] }}</span>
                                            </div>
                                        </ValidationProvider>

                                        <!-- phone -->
                                        <ValidationProvider
                                            tag="div"
                                            class="col-md-6 py-0"
                                            name="phone"
                                            rules="required|max:11"
                                            :bails="false"
                                            v-slot="{ errors, classes }"
                                        >
                                            <div class="input-wrap" :class="classes">
                                                <v-flex class="input-label">Phone*</v-flex>

                                                <v-text-field
                                                    solo
                                                    flat
                                                    hide-details
                                                    outlined
                                                    type="number"
                                                    label="Phone Number"
                                                    v-model="formData.phone"
                                                ></v-text-field>
                                                <span>{{ errors[0] }}</span>
                                            </div>
                                        </ValidationProvider>

                                        <!-- Email -->
                                        <ValidationProvider
                                            tag="div"
                                            class="col-md-6 py-0"
                                            name="E-mail"
                                            rules="required|email"
                                            :bails="false"
                                            v-slot="{ errors, classes }"
                                        >
                                            <div class="input-wrap" :class="classes">
                                                <v-flex class="input-label">Email*</v-flex>

                                                <v-text-field
                                                    solo
                                                    flat
                                                    hide-details
                                                    outlined
                                                    type="email"
                                                    label="Mail address"
                                                    v-model="formData.email"
                                                ></v-text-field>
                                                <span>{{ errors[0] }}</span>
                                            </div>
                                        </ValidationProvider>
                                    </v-row>
                                </v-flex>

                                <v-flex>
                                    <!--Show Email -->
                                    <ValidationProvider
                                        tag="div"
                                        name="show email on listing page"
                                        :bails="false"
                                        v-slot="{ errors, classes }"
                                    >
                                        <div class="input-wrap mt-6" :class="classes">
                                            <v-checkbox
                                                color="brand"
                                                hide-details
                                                v-model="formData.show_email_on_listing"
                                                label="Show email on listing page"
                                            ></v-checkbox>
                                            <span>{{ errors[0] }}</span>
                                        </div>
                                    </ValidationProvider>
                                </v-flex>

                                <v-btn
                                    type="submit"
                                    tile
                                    depressed
                                    class="publish-ad mt-5 brand white--text text-none"
                                >Publish Ad</v-btn>
                            </form>
                        </ValidationObserver>
                    </v-flex>
                </v-card>
            </v-container>
        </v-flex>

        <!-- success greeting popup -->
        <v-dialog v-model="dialog" width="500">
            <v-sheet>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-sheet>
        </v-dialog>
    </v-flex>
</template>

<script>
import SiteBreadcrumb from "@/components/SiteBreadcrumb";
import VueUploadMultipleImage from "vue-upload-multiple-image";
export default {
    name: "createAFreeAd",
    components: {
        SiteBreadcrumb,
        VueUploadMultipleImage,
    },

    data() {
        return {
            images: [
                {
                    path:
                        "https://cdn.pixabay.com/photo/2018/06/17/20/35/chain-3481377_960_720.jpg",
                    default: 1,
                    highlight: 1,
                    caption: "caption to display. receive", // Optional
                },
                {
                    path:
                        "https://media.istockphoto.com/photos/metail-chains-background-picture-id1168402184",
                    default: null,
                    highlight: null,
                    caption: "caption to display. receive", // Optional
                },
                {
                    path:
                        "https://media.istockphoto.com/photos/disrupting-wire-rope-isolated-picture-id157429838",
                    default: null,
                    highlight: null,
                    caption: "caption to display. receive", // Optional
                },
            ],
            formData: {
                condition: "Used",
                ad_title: "",
                brand: "",
                product_type: "",
                quantity: "",
                auction: "with_auction",
                price: "",
                negotiable: true,
                description: "",
                starting_price: "",
                buy_price: "",
                approximately_price: "",
                region: "",
                city: "",
                address: "",
                first_name: "",
                last_name: "",
                phone: "",
                email: "",
                show_email_on_listing: null,
            },
            dialog: false,
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
            regions: ["regions 1", "regions 2", "regions 3", "regions 4"],
            citys: ["City 1", "City 2", "City 3", "City 4"],
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
        uploadImageSuccess(formData, index, fileList) {
            console.log("data", formData, index, fileList);
            // Upload image api
            // axios.post('http://your-url-upload', formData).then(response => {
            //   console.log(response)
            // })
        },
        beforeRemove(index, done, fileList) {
            console.log("index", index, fileList);
            var r = confirm("remove image");
            if (r == true) {
                done();
            }
        },
        editImage(formData, index, fileList) {
            console.log("edit data", formData, index, fileList);
        },
    },
};
</script>

<style lang="scss">
@import "@/assets/sass/create_free_ad.scss";
</style>


