<template>
    <v-flex v-resize="onResize">
        <v-btn
            tile
            dark
            color="brand"
            class="filter-btn d-lg-none"
            @click.stop="drawer = !drawer"
        >My Profile</v-btn>

        <v-flex v-if="windowSize >= 1264" class="account-sidebar flex-grow-0">
            <v-sheet tile class="user-box mb-5 d-flex align-center">
                <v-avatar size="75">
                    <img :src="require('@/assets/images/john.jpg')" alt="profile image" />
                </v-avatar>
                <v-sheet class="user-title pl-4">
                    <span>Hello,</span>
                    <h4>Abir Amzad</h4>
                </v-sheet>
            </v-sheet>
            <v-card tile elevation="0">
                <v-list class="py-0" flat>
                    <v-list-item-group color="brand" v-model="selectedItem">
                        <v-divider></v-divider>
                        <v-flex v-for="(item, i) in items" :key="i">
                            <v-list-item :to="{name:`${item.link}` }">
                                <v-list-item-icon>
                                    <v-icon v-text="item.icon"></v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.text"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider></v-divider>
                        </v-flex>
                    </v-list-item-group>
                </v-list>
            </v-card>
        </v-flex>

        <v-flex v-else>
            <v-scroll-x-reverse-transition>
                <v-btn
                    tile
                    depressed
                    width="40"
                    min-width="20"
                    class="drawer-toggle d-lg-none"
                    v-if="drawer"
                    @click.stop="drawer = !drawer"
                >
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-scroll-x-reverse-transition>
            <v-navigation-drawer v-model="drawer" temporary app>
                <v-flex class="account-sidebar flex-grow-0">
                    <v-sheet tile class="user-box mb-5 d-flex align-center">
                        <v-avatar size="75">
                            <img :src="require('@/assets/images/john.jpg')" alt="profile image" />
                        </v-avatar>
                        <v-sheet class="user-title pl-4">
                            <span>Hello,</span>
                            <h4>Abir Amzad</h4>
                        </v-sheet>
                    </v-sheet>
                    <v-card tile elevation="0">
                        <v-list class="py-0" flat>
                            <v-list-item-group color="brand" v-model="selectedItem">
                                <v-divider></v-divider>
                                <v-flex v-for="(item, i) in items" :key="i">
                                    <v-list-item :to="{name:`${item.link}` }">
                                        <v-list-item-icon>
                                            <v-icon v-text="item.icon"></v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title v-text="item.text"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-divider></v-divider>
                                </v-flex>
                            </v-list-item-group>
                        </v-list>
                    </v-card>
                </v-flex>
            </v-navigation-drawer>
        </v-flex>
    </v-flex>
</template>

<script>
export default {
    name: "AccountSidebar",
    data() {
        return {
            windowSize: "",
            drawer: false,

            selectedItem: 0,
            items: [
                {
                    text: "My Account",
                    icon: "mdi-account-edit",
                    link: "MyAccount",
                },
                {
                    text: "My Orders",
                    icon: "mdi-badge-account-outline",
                    link: "MyOrder",
                },
                {
                    text: "My Auction",
                    icon: "mdi-hammer-screwdriver",
                    link: "MyAuction",
                },
                {
                    text: "Buying Item",
                    icon: "mdi-cash-usd",
                    link: "BuyingItem",
                },
                { text: "Selling Item", icon: "mdi-cart", link: "SellingItem" },
            ],
        };
    },
    methods: {
        onResize() {
            this.windowSize = window.innerWidth;
        },
    },
    mounted() {
        this.onResize();
    },
};
</script>
<style lang="scss">
.account-sidebar {
    width: 375px;

    .user-box {
        padding: rem-calc(20px 30px);
        border: 1px solid map-get($colors, brand);
        span {
            @include font(false, 15px, 22px, false);
        }
        h4 {
            @include font(false, 16px, 22px, semi-bold);
        }
    }
}
.filter-btn {
    position: fixed;
    top: 50%;
    left: 0;
    z-index: 2;
    transform: translateY(-50%);
}
.drawer-toggle {
    left: 255px;
    top: 24px;
    z-index: 9;
    position: fixed;
    background: #fff;
}

@include media(1639px) {
    .account-sidebar {
        width: 275px;
    }
}

@include media(lg) {
    .account-sidebar {
        width: 300px;
        .user-box {
            padding: rem-calc(30px 15px 10px);
            border: none;
        }
    }
}
</style>