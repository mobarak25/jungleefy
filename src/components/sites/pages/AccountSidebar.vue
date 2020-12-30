<template>
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
                <v-list-item-group v-model="selectedItem" color="brand">
                    <v-divider></v-divider>
                    <v-flex v-for="(item, i) in items" :key="i">
                        <v-list-item>
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
</template>

<script>
export default {
    name: "AccountSidebar",
    data() {
        return {
            selectedItem: 0,
            items: [
                { text: "My Account", icon: "mdi-account-edit" },
                { text: "My Orders", icon: "mdi-badge-account-outline" },
                { text: "My Auction", icon: "mdi-hammer-screwdriver" },
                { text: "Buying Item", icon: "mdi-cash-usd" },
                { text: "Selling Item", icon: "mdi-cart" },
            ],
        };
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
</style>