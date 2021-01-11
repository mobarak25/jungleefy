<template>
    <v-flex class="contact-us-wrap">
        <!-- inner banner -->
        <inner-banner :options="bannerContent"></inner-banner>

        <v-flex class="about-panel">
            <v-flex class="about-box">
                <v-container class="py-0">
                    <h3>Proin ultrices eros massa</h3>
                    <p>eu convallis eros maximus quis. Ut sit amet dapibus sem. Vivamus pharetra orci vel felis aliquet venenatis. Suspendisse tincidunt massa eget mi eleifend, vitae varius orci malesuada. Donec tincidunt ultrices purus sit amet venenatis. Nullam dignissim, massa a tristique ultricies, turpis sem fermentum nibh, ut fermentum purus tortor non mauris. Pellentesque aliquam eu magna bibendum tincidunt. Donec et luctus libero. Maecenas gravida ligula id dui vulputate tincidunt. In laoreet tempor nibh. Fusce felis magna, iaculis ac vulputate vel, posuere et nibh. Aliquam viverra tellus eros. Phasellus purus erat, elementum sed elit at.</p>

                    <p>eu convallis eros maximus quis. Ut sit amet dapibus sem. Vivamus pharetra orci vel felis aliquet venenatis. Suspendisse tincidunt massa eget mi eleifend, vitae varius orci malesuada. Donec tincidunt ultrices purus sit amet venenatis. Nullam dignissim, massa a tristique ultricies, turpis sem fermentum nibh, ut fermentum purus tortor non mauris. Pellentesque aliquam eu magna bibendum tincidunt. Donec et luctus libero. Maecenas gravida ligula id dui vulputate tincidunt. In laoreet tempor nibh. Fusce felis magna, iaculis ac vulputate vel, posuere et nibh. Aliquam viverra tellus eros. Phasellus purus erat, elementum sed elit at, tristique facilisis quam. Integer est sapien, vulputate nec congue imperdiet, sagittis ac dolor. Maecenas bibendum erat vel ipsum feugiat, at elementum quam hendrerit. In hac habitasse platea dictumst.</p>
                </v-container>
            </v-flex>

            <v-flex class="about-box pt-1">
                <v-img
                    :src="require('@/assets/images/inner-banners/about-us-1.jpg')"
                    alt="About image"
                ></v-img>
            </v-flex>

            <v-flex class="about-box pt-5 pt-lg-10">
                <v-container class="py-0">
                    <p>eu convallis eros maximus quis. Ut sit amet dapibus sem. Vivamus pharetra orci vel felis aliquet venenatis. Suspendisse tincidunt massa eget mi eleifend, vitae varius orci malesuada. Donec tincidunt ultrices purus sit amet venenatis. Nullam dignissim, massa a tristique ultricies, turpis sem fermentum nibh, ut fermentum purus tortor non mauris. Pellentesque aliquam eu magna bibendum tincidunt. Donec et luctus libero. Maecenas gravida ligula id dui vulputate tincidunt. In laoreet tempor nibh. Fusce felis magna, iaculis ac vulputate vel, posuere et nibh. Aliquam viverra tellus eros. Phasellus purus erat, elementum sed elit at, tristique facilisis quam. Integer est sapien, vulputate nec congue imperdiet, sagittis ac dolor. Maecenas bibendum erat vel ipsum feugiat, at elementum quam hendrerit. In</p>
                </v-container>
            </v-flex>

            <v-flex class="about-box about-box-bg py-10 py-md-15 mt-md-7">
                <v-container class="py-0">
                    <h3>Our Mission</h3>
                    <p
                        class="pb-0"
                    >Etiam pretium a sapien vel sollicitudin. Sed ornare in nunc at efficitur. In consectetur hendrerit eros. Integer a leo a ante condimentum luctus nec et libero. Praesent in fermentum augue. Sed porta mi non enim volutpat iaculis. Nullam sagittis sapien laoreet arcu blandit imperdiet. Integer vitae aliquam lacus. Nunc dignissim purus sit amet porta sodales.</p>
                </v-container>
            </v-flex>

            <v-flex class="about-box pt-15">
                <v-container class="py-0">
                    <h3>Our Vision</h3>
                    <p
                        class="pb-0"
                    >Etiam pretium a sapien vel sollicitudin. Sed ornare in nunc at efficitur. In consectetur hendrerit eros. Integer a leo a ante condimentum luctus nec et libero. Praesent in fermentum augue. Sed porta mi non enim volutpat iaculis. Nullam sagittis sapien laoreet arcu blandit imperdiet. Integer vitae aliquam lacus. Nunc dignissim purus sit amet porta sodales.</p>
                </v-container>
            </v-flex>
        </v-flex>

        <how-to-bid></how-to-bid>
    </v-flex>
</template>

<script>
import InnerBanner from "@/components/sites/common/InnerBanner";
import HowToBid from "@/components/sites/common/HowToBid";

export default {
    name: "AboutUs",
    components: {
        InnerBanner,
        HowToBid,
    },

    data() {
        return {
            bannerContent: {
                title: "About Us",
                image: "about-us.jpg",
            },
        };
    },
};
</script>

<style lang="scss">
@import "@/assets/sass/about_us.scss";
</style>