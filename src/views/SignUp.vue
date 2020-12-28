<template>
    <v-flex
        class="login-register-bg"
        :style="{ background: 'url(' + require('@/assets/images/login-bg.png') + ') left top'}"
    >
        <v-card
            tile
            elevation="3"
            class="login-logup-wrap mx-auto"
            :style="{ background: '#fff url(' + require('@/assets/images/login-bar.png') + ') left top repeat-x'}"
        >
            <v-card-title class="justify-center">Sign Up</v-card-title>
            <v-card-subtitle>Enter your details to create your account:</v-card-subtitle>

            <ValidationObserver
                class="login-logup-form signup-form"
                tag="div"
                ref="form"
                v-slot="{ handleSubmit }"
            >
                <form @submit.prevent="handleSubmit(onSubmit)">
                    <v-row>
                        <ValidationProvider
                            tag="div"
                            class="col-md-6 py-0"
                            name="first name"
                            rules="required"
                            :bails="false"
                            v-slot="{ errors, classes }"
                        >
                            <div class="input-wrap" :class="classes">
                                <v-text-field
                                    solo
                                    type="text"
                                    flat
                                    hide-details
                                    outlined
                                    label="First Name"
                                    v-model="formData.first_name"
                                ></v-text-field>
                                <span>{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>

                        <ValidationProvider
                            tag="div"
                            class="col-md-6 py-0"
                            name="last name"
                            rules="required"
                            :bails="false"
                            v-slot="{ errors, classes }"
                        >
                            <div class="input-wrap" :class="classes">
                                <v-text-field
                                    solo
                                    type="text"
                                    flat
                                    hide-details
                                    outlined
                                    label="Last Name"
                                    v-model="formData.last_name"
                                ></v-text-field>
                                <span>{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>
                    </v-row>

                    <ValidationProvider
                        tag="div"
                        name="e-mail"
                        rules="required|email"
                        :bails="false"
                        v-slot="{ errors, classes }"
                    >
                        <div class="input-wrap" :class="classes">
                            <v-text-field
                                solo
                                type="email"
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
                        name="phone"
                        rules="required"
                        :bails="false"
                        v-slot="{ errors, classes }"
                    >
                        <div class="input-wrap" :class="classes">
                            <v-text-field
                                solo
                                type="text"
                                flat
                                hide-details
                                outlined
                                label="Phone"
                                v-model="formData.phone"
                            ></v-text-field>
                            <span>{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>

                    <!-- Enter your company name -->
                    <ValidationProvider
                        tag="div"
                        name="company name"
                        rules="required"
                        :bails="false"
                        v-slot="{ errors, classes }"
                    >
                        <div class="input-wrap" :class="classes">
                            <v-text-field
                                solo
                                type="text"
                                flat
                                hide-details
                                outlined
                                label="Enter your company name"
                                v-model="formData.company_name"
                            ></v-text-field>
                            <span>{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>

                    <!-- Enter your company name -->
                    <ValidationProvider
                        tag="div"
                        name="password"
                        rules="required"
                        :bails="false"
                        v-slot="{ errors, classes }"
                    >
                        <div class="input-wrap" :class="classes">
                            <v-text-field
                                solo
                                type="text"
                                flat
                                hide-details
                                outlined
                                label="Password"
                                v-model="formData.password"
                            ></v-text-field>
                            <span>{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>

                    <v-layout wrap class="remember justify-space-between">
                        <ValidationProvider
                            tag="div"
                            class="place-bid-field"
                            name="remember"
                            :bails="false"
                            v-slot="{ errors, classes }"
                        >
                            <div :class="classes">
                                <v-checkbox
                                    color="brand"
                                    hide-details
                                    v-model="formData.remember"
                                    label="Remember"
                                ></v-checkbox>
                                <span>{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>
                        <a href="#">Forgot Password ?</a>
                    </v-layout>

                    <v-btn
                        width="100%"
                        type="submit"
                        depressed
                        class="login-logup-btn brand white--text text-none d-block"
                    >Sign In</v-btn>
                </form>
            </ValidationObserver>

            <v-flex class="or-section">
                <v-flex class="or-text">OR</v-flex>
                <v-flex class="sign-with grey--text text-center pt-3">Sign in With</v-flex>
                <v-layout wrap class="sign-with-btns justify-space-between">
                    <v-btn width="225" height="48" depressed class="facebook text-none">
                        <v-icon class="mr-1">mdi-facebook</v-icon>Continue with Facebook
                    </v-btn>

                    <v-btn width="225" height="48" depressed class="gmail text-none">
                        <v-icon class="mr-1">mdi-gmail</v-icon>Sign in with Google
                    </v-btn>
                </v-layout>
                <v-flex class="account-text grey--text text-center">
                    Don't Have an Account yet?
                    <router-link :to="{name:'login'}">Sign In</router-link>
                </v-flex>
            </v-flex>
        </v-card>
    </v-flex>
</template>

<script>
// import BiddingForm from "@/components/BiddingForm";

export default {
    name: "SignUp",

    data() {
        return {
            formData: {
                first_name: "",
                last_name: "",
                email: "",
                phone: "",
                company_name: "",
                password: "",
                confirm_password: "",
                agree: true,
            },
        };
    },
};
</script>

<style lang="scss">
@import "@/assets/sass/login_register.scss";
</style>