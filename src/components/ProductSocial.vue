<template>
    <!-- Product section -->
    <v-flex class="share-productIn">
        <v-card class="share-product">
            <a href="#" v-for="social in socials" :key="social.name">
                <v-icon :class="social.class">{{social.name}}</v-icon>
            </a>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    name: "ProductSocial",

    data() {
        return {
            socials: [
                {
                    name: "mdi-facebook",
                    class: "facebook",
                },
                {
                    name: "mdi-pinterest",
                    class: "pinterest",
                },
                {
                    name: "mdi-linkedin",
                    class: "linkedin",
                },
                {
                    name: "mdi-instagram",
                    class: "instagram",
                },
                {
                    name: "mdi-twitter",
                    class: "twitter",
                },
            ],
        };
    },
};
</script>
<style lang="scss">
.share-product-wrap {
    position: relative;

    .share-product {
        width: 30px;
        border-radius: 0 !important;

        a {
            .v-icon.v-icon {
                font-size: 16px;
            }
            line-height: 25px;
            display: block;
            text-align: center;
            border-bottom: 1px solid #ebebeb;
            .facebook {
                color: #3b5999;
            }
            .pinterest {
                color: #d43232;
            }
            .linkedin {
                color: #0077b5;
            }
            .instagram {
                color: #a78966;
            }
            .twitter {
                color: #03a9f4;
            }

            &:hover {
                background-color: rgba(0, 0, 0, 0.1);
            }
        }
    }

    &.share-product-grid {
        width: 30px;
        height: 20px;
        cursor: pointer;
        text-align: center;
        position: relative;
        box-shadow: 0 0 16px rgba(62, 62, 60, 0.4);

        .mdi-share {
            font-size: 18px;
            line-height: 20px;
            margin-top: -6px;
        }
        &::after {
            @include sudo(0, 0, left, 100%, top, 50%, false);
            transform: translateY(-50%);
            border-top: 4px solid transparent;
            border-left: 8px solid #fff;
            border-bottom: 4px solid transparent;
        }
    }

    .share-productIn {
        max-width: none;
        padding-left: 10px;
        display: none;
        z-index: 3;
        @include absolute(false, false, left, 100%, top, 0);
    }

    &:hover .share-productIn {
        display: block;
    }
}
</style>