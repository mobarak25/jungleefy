<template>
    <v-flex class="site-content-wrap site_bg">
        <v-flex class="create-ad-wrap mx-auto">
            <v-container class="py-0">
                <v-layout wrap>
                    <!-- account-sidebar -->
                    <account-sidebar></account-sidebar>

                    <v-flex class="account-wrap">
                        <v-card tile elevation="0">
                            <v-flex class="account-panel">
                                <ValidationObserver
                                    tag="div"
                                    class="profile-info-form"
                                    ref="form"
                                    v-slot="{ handleSubmit }"
                                >
                                    <form @submit.prevent="handleSubmit(onSubmit)">
                                        <!-- Image Uploader -->
                                        <multi-image-uploader
                                            title="Profile Picture <span>(PNG/JPG/JPEG, Max. 3MB) </span>"
                                            id="images-uploader-1"
                                            edit-id="images-uploader-edit-1"
                                            url="http://knittersland.test/api/img-upload"
                                            delete-url="http://knittersland.test/api/img-upload"
                                            :options="optionsText"
                                            :data-images="images"
                                        ></multi-image-uploader>

                                        <!-- Personal Information -->
                                        <v-flex class="account-personal-info">
                                            <h3>Personal Information</h3>
                                            <v-row>
                                                <!-- First name -->
                                                <ValidationProvider
                                                    tag="div"
                                                    class="col-md-6 py-0"
                                                    name="First Name"
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
                                                            label="Your First Name"
                                                            v-model="formData.first_name"
                                                        ></v-text-field>
                                                        <span>{{ errors[0] }}</span>
                                                    </div>
                                                </ValidationProvider>

                                                <!-- Last name -->
                                                <ValidationProvider
                                                    tag="div"
                                                    class="col-md-6 py-0"
                                                    name="Last Name"
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
                                                            label="Your Last Name"
                                                            v-model="formData.last_name"
                                                        ></v-text-field>
                                                        <span>{{ errors[0] }}</span>
                                                    </div>
                                                </ValidationProvider>

                                                <!-- Email -->
                                                <ValidationProvider
                                                    tag="div"
                                                    class="col-md-6 py-0"
                                                    name="Email"
                                                    rules="required|email"
                                                    :bails="false"
                                                    v-slot="{ errors, classes }"
                                                >
                                                    <div class="input-wrap" :class="classes">
                                                        <v-flex class="input-label">Email</v-flex>
                                                        <v-text-field
                                                            solo
                                                            flat
                                                            hide-details
                                                            outlined
                                                            label="Mail address"
                                                            v-model="formData.email"
                                                        ></v-text-field>
                                                        <span>{{ errors[0] }}</span>
                                                    </div>
                                                </ValidationProvider>

                                                <!-- Phone -->
                                                <ValidationProvider
                                                    tag="div"
                                                    class="col-md-6 py-0"
                                                    name="phone"
                                                    :bails="false"
                                                    v-slot="{ errors, classes }"
                                                >
                                                    <div class="input-wrap" :class="classes">
                                                        <v-flex class="input-label">Phone</v-flex>
                                                        <v-text-field
                                                            solo
                                                            flat
                                                            hide-details
                                                            outlined
                                                            label="Phone Number"
                                                            v-model="formData.phone"
                                                        ></v-text-field>
                                                        <span>{{ errors[0] }}</span>
                                                    </div>
                                                </ValidationProvider>

                                                <!-- Date of Birth -->
                                                <ValidationProvider
                                                    tag="div"
                                                    class="col-md-6 py-0"
                                                    name="date of birth"
                                                    rules="required"
                                                    :bails="false"
                                                    v-slot="{ errors, classes }"
                                                >
                                                    <div class="input-wrap" :class="classes">
                                                        <v-flex class="input-label">Date of Birth</v-flex>

                                                        <v-dialog
                                                            ref="dialog"
                                                            v-model="modal"
                                                            :return-value.sync="formData.birth_date"
                                                            persistent
                                                            width="300px"
                                                        >
                                                            <template
                                                                v-slot:activator="{ on, attrs }"
                                                            >
                                                                <v-text-field
                                                                    v-model="formData.birth_date"
                                                                    solo
                                                                    flat
                                                                    hide-details
                                                                    outlined
                                                                    label="Date of birth"
                                                                    append-icon="mdi-calendar"
                                                                    readonly
                                                                    v-bind="attrs"
                                                                    v-on="on"
                                                                ></v-text-field>

                                                                <span>{{ errors[0] }}</span>
                                                            </template>
                                                            <v-date-picker
                                                                v-model="formData.birth_date"
                                                                scrollable
                                                            >
                                                                <v-spacer></v-spacer>
                                                                <v-btn
                                                                    text
                                                                    color="primary"
                                                                    @click="modal = false"
                                                                >Cancel</v-btn>
                                                                <v-btn
                                                                    text
                                                                    color="primary"
                                                                    @click="$refs.dialog.save(formData.birth_date)"
                                                                >OK</v-btn>
                                                            </v-date-picker>
                                                        </v-dialog>
                                                        <span>{{ errors[0] }}</span>
                                                    </div>
                                                </ValidationProvider>

                                                <!-- Brand -->
                                                <ValidationProvider
                                                    tag="div"
                                                    class="col-md-6 py-0"
                                                    name="Gender"
                                                    rules="required"
                                                    :bails="false"
                                                    v-slot="{ errors, classes }"
                                                >
                                                    <div class="input-wrap" :class="classes">
                                                        <v-flex class="input-label">Gender</v-flex>

                                                        <v-select
                                                            :items="gender"
                                                            label="Select"
                                                            solo
                                                            flat
                                                            hide-details
                                                            outlined
                                                            v-model="formData.gender"
                                                        ></v-select>
                                                        <span>{{ errors[0] }}</span>
                                                    </div>
                                                </ValidationProvider>
                                            </v-row>
                                        </v-flex>

                                        <v-divider class="mt-4 mb-7"></v-divider>
                                        <!-- Password -->
                                        <v-flex class="account-personal-info">
                                            <h3 class="d-flex flex-wrap justify-space-between">
                                                Password
                                                <a
                                                    @click="change_password = !change_password"
                                                    href="javascript:void(0)"
                                                    class="change-password"
                                                >Change Password</a>
                                            </h3>
                                            <v-row>
                                                <!-- Your current password -->
                                                <ValidationProvider
                                                    tag="div"
                                                    class="col-md-6 py-0"
                                                    name="current password"
                                                    :bails="false"
                                                    v-slot="{ errors, classes }"
                                                >
                                                    <div class="input-wrap" :class="classes">
                                                        <v-flex
                                                            class="input-label"
                                                        >Your Current Password</v-flex>
                                                        <v-text-field
                                                            solo
                                                            flat
                                                            hide-details
                                                            outlined
                                                            type="password"
                                                            label="Your Current Password"
                                                            v-model="formData.current_password"
                                                        ></v-text-field>
                                                        <span>{{ errors[0] }}</span>
                                                    </div>
                                                </ValidationProvider>

                                                <!-- New password -->
                                                <ValidationProvider
                                                    v-if="change_password"
                                                    tag="div"
                                                    class="col-md-6 py-0"
                                                    name="new Password"
                                                    rules="required"
                                                    :bails="false"
                                                    v-slot="{ errors, classes }"
                                                >
                                                    <div class="input-wrap" :class="classes">
                                                        <v-flex
                                                            class="input-label"
                                                        >Your New Password</v-flex>
                                                        <v-text-field
                                                            solo
                                                            flat
                                                            hide-details
                                                            outlined
                                                            type="password"
                                                            label="Type new password"
                                                            v-model="formData.new_password"
                                                        ></v-text-field>
                                                        <span>{{ errors[0] }}</span>
                                                    </div>
                                                </ValidationProvider>

                                                <!-- confirm password -->
                                                <ValidationProvider
                                                    v-if="change_password"
                                                    tag="div"
                                                    class="col-md-6 py-0"
                                                    name="password confirmation"
                                                    rules="confirmed:new Password"
                                                    :bails="false"
                                                    v-slot="{ errors, classes }"
                                                >
                                                    <div class="input-wrap" :class="classes">
                                                        <v-text-field
                                                            solo
                                                            type="password"
                                                            flat
                                                            hide-details
                                                            outlined
                                                            label="Password"
                                                            v-model="formData.confirm_password"
                                                        ></v-text-field>
                                                        <span>{{ errors[0] }}</span>
                                                    </div>
                                                </ValidationProvider>
                                            </v-row>
                                        </v-flex>
                                        <v-btn
                                            type="submit"
                                            tile
                                            depressed
                                            class="save-info-btn mt-1 brand white--text text-none"
                                        >Save</v-btn>
                                    </form>
                                </ValidationObserver>
                            </v-flex>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-flex>
</template>

<script>
import MultiImageUploader from "@/components/services/MultiImageUploader";
import AccountSidebar from "@/components/sites/pages/AccountSidebar";

export default {
    name: "MyAccount",
    components: {
        MultiImageUploader,
        AccountSidebar,
    },

    data() {
        return {
            date: "",
            modal: false,

            gender: ["Male", "Female", "Other"],

            optionsText: {
                idUpload: "mipellim",
                multiple: false,
                showPrimary: false,
            },
            images: [
                {
                    path:
                        "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg",
                    name:
                        "storage/images/rough/ES1CoxEmjltLihyNi2y7yenVi4CU3PjQtNk7NrOB.jpeg",
                    default: 1,
                    highlight: 1,
                    caption: "caption to display. receive", // Optional
                },

                // {
                //     path:
                //         "http://knittersland.test/storage/images/rough/oWdfvZMUx8tlRXDqSmtMPWNfz11yNzX23yFYCpGr.jpeg",
                //     name:
                //         "storage/images/rough/oWdfvZMUx8tlRXDqSmtMPWNfz11yNzX23yFYCpGr.jpeg",
                //     default: null,
                //     highlight: null,
                //     caption: "caption to display. receive", // Optional
                // },
            ],
            formData: {
                first_name: "",
                last_name: "",
                email: "",
                phone: "",
                birth_date: null,
                gender: "",
                current_password: "mobarak84",
                new_password: "",
                confirm_password: "",
            },
            change_password: false,
        };
    },
    // created() {
    //     this.selectedCategories = JSON.parse(
    //         localStorage.getItem("selected-category-storage") || "[]"
    //     );
    // },

    methods: {
        onSubmit() {
            this.$refs.form.validate().then((success) => {
                if (!success) {
                    return;
                }
                alert("Update Successfuly");

                // Resetting Values
                this.formData.first_name = "";

                // Wait until the models are updated in the UI
                this.$nextTick(() => {
                    this.$refs.form.reset();
                });
            });
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/my_account.scss";
</style>


