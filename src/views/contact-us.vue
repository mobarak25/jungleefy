<template>
    <v-flex class="contact-us-wrap">
        <!-- inner banner -->
        <inner-banner :options="bannerContent"></inner-banner>

        <v-flex class="contact-panel">
            <v-container class="py-0">
                <v-flex class="contact-top">
                    <h3>Proin ultrices eros massa</h3>
                    <p>eu convallis eros maximus quis. Ut sit amet dapibus sem. Vivamus pharetra orci vel felis aliquet venenatis. Suspendisse tincidunt massa eget mi eleifend, vitae varius orci malesuada. Donec tincidunt ultrices purus sit amet veneatis. Nullam dignissim, massa a tristique ultricies, turpis sem fermentum nibh.</p>
                </v-flex>

                <v-row>
                    <v-col lg="7" md="6" cols="12">
                        <v-flex class="contact-left">
                            <v-flex class="contact-left-box">
                                <h4>Address</h4>
                                <address>
                                    MF Tower, Plot-ga-95/c, Pragati Sarani
                                    <br />Gulshan 1 Link Road, Dhaka-1212, Bangladesh
                                </address>
                            </v-flex>

                            <v-flex class="contact-left-box">
                                <h4>Phone</h4>
                                <a href="tel:+8802 984 0726">+8802 984 0726</a>
                                <br />
                                <a href="tel:+8802 5881 7175">+8802 5881 7175</a>
                            </v-flex>

                            <v-flex class="contact-left-box">
                                <h4>Email</h4>
                                <a href="mailto:info@jungleebazaar.com">info@jungleebazaar.com</a>
                            </v-flex>
                        </v-flex>
                    </v-col>
                    <v-col lg="5" md="6" cols="12">
                        <v-flex class="contact-right">
                            <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                                <form @submit.prevent="handleSubmit(onSubmit)">
                                    <ValidationProvider
                                        tag="div"
                                        name="name"
                                        rules="required"
                                        :bails="false"
                                        v-slot="{ errors, classes }"
                                    >
                                        <div class="input-wrap" :class="classes">
                                            <v-text-field
                                                prepend-inner-icon="mdi-account"
                                                solo
                                                flat
                                                hide-details
                                                outlined
                                                label="Name"
                                                v-model="formData.name"
                                            ></v-text-field>
                                            <span>{{ errors[0] }}</span>
                                        </div>
                                    </ValidationProvider>

                                    <ValidationProvider
                                        tag="div"
                                        name="phone"
                                        rules="required"
                                        :bails="false"
                                        v-slot="{ errors, classes }"
                                    >
                                        <div class="input-wrap" :class="classes">
                                            <v-text-field
                                                prepend-inner-icon="mdi-phone"
                                                solo
                                                flat
                                                hide-details
                                                outlined
                                                label="Phone"
                                                v-model="formData.phone"
                                            ></v-text-field>
                                            <span>{{ errors[0] }}</span>
                                        </div>
                                    </ValidationProvider>

                                    <ValidationProvider
                                        tag="div"
                                        name="email"
                                        rules="required|email"
                                        :bails="false"
                                        v-slot="{ errors, classes }"
                                    >
                                        <div class="input-wrap" :class="classes">
                                            <v-text-field
                                                prepend-inner-icon="mdi-email"
                                                solo
                                                flat
                                                hide-details
                                                outlined
                                                label="Email"
                                                v-model="formData.email"
                                            ></v-text-field>
                                            <span>{{ errors[0] }}</span>
                                        </div>
                                    </ValidationProvider>

                                    <ValidationProvider
                                        tag="div"
                                        name="ad title"
                                        rules="required"
                                        :bails="false"
                                        v-slot="{ errors, classes }"
                                    >
                                        <div class="input-wrap" :class="classes">
                                            <v-textarea
                                                prepend-inner-icon="mdi-chat"
                                                solo
                                                flat
                                                hide-details
                                                outlined
                                                label="Message"
                                                v-model="formData.message"
                                            ></v-textarea>
                                            <span>{{ errors[0] }}</span>
                                        </div>
                                    </ValidationProvider>

                                    <v-btn
                                        type="submit"
                                        rounded
                                        depressed
                                        class="contact-btn mt-1 brand white--text text-none"
                                    >Submit</v-btn>
                                </form>
                            </ValidationObserver>
                        </v-flex>
                    </v-col>
                </v-row>
            </v-container>
        </v-flex>
    </v-flex>
</template>

<script>
import InnerBanner from "@/components/sites/common/InnerBanner";

export default {
    name: "Contact",
    components: {
        InnerBanner,
    },

    data() {
        return {
            formData: {
                name: "",
                phone: "",
                email: "",
                message: "",
            },
            bannerContent: {
                title: "Contact",
                image: "contact-us.jpg",
            },
        };
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/contact_us.scss";
</style>