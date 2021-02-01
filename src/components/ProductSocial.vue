<template>
    <!-- Product section -->

    <div class="share-product-box">
        <a href="#" v-for="social in socials" :key="social.name">
            <v-icon :class="social.class">{{social.name}}</v-icon>
        </a>
    </div>
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
<style lang="scss" scoped>
.share-product-box {
    a {
        .v-icon.v-icon {
            font-size: 20px;
        }
        line-height: 30px;
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
</style>