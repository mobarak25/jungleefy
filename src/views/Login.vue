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
            <v-progress-linear
                :active="loading"
                :indeterminate="loading"
                absolute
                top
                height="3"
                color="light"
            ></v-progress-linear>
            <v-card-title class="justify-center">Sign In</v-card-title>

            <ValidationObserver
                class="login-logup-form login-form"
                tag="div"
                ref="form"
                v-slot="{ handleSubmit }"
            >
                <form @submit.prevent="handleSubmit(onSubmit)">
                    <ValidationProvider
                        tag="div"
                        class="place-bid-field"
                        name="email or phone"
                        rules="required|email"
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
                                label="Email or Phone"
                                v-model="formData.email_or_phone"
                            ></v-text-field>
                            <span>{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>

                    <ValidationProvider
                        tag="div"
                        class="place-bid-field"
                        name="password"
                        rules="required"
                        :bails="false"
                        v-slot="{ errors, classes }"
                    >
                        <div class="input-wrap" :class="classes">
                            <v-text-field
                                solo
                                type="text"
                                step="any"
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
                                    color="grey"
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
                    <router-link :to="{name:'SignUp'}">Sign Up</router-link>
                </v-flex>
            </v-flex>
        </v-card>
    </v-flex>
</template>

<script>
// import BiddingForm from "@/components/BiddingForm";

export default {
    name: "Login",

    data() {
        return {
            loading: true,
            formData: {
                email_or_phone: "",
                password: "",
                remember: true,
            },
        };
    },
};
</script>

<style lang="scss">
@import "@/assets/sass/login_register.scss";
</style>