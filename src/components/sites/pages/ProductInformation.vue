<template>
    <v-card wrap tile outlined class="product-details-mid">
        <v-card-title class="product-detail-title brand--text py-3">
            <v-sheet
                dark
                color="brand"
                width="30"
                height="30"
                rounded
                class="mr-5 d-flex align-center justify-center"
            >
                <v-icon>mdi-format-list-bulleted-square</v-icon>
            </v-sheet>Product Details
        </v-card-title>

        <v-card-text>
            <v-card-subtitle class="primary--text">Item specifics</v-card-subtitle>
            <ul class="items">
                <li v-for="descriptionItem in descriptionItems" :key="descriptionItem.id">
                    <span v-html="descriptionItem.title + ':'"></span>
                    <span class="item-content" v-html="descriptionItem.description"></span>
                </li>
            </ul>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "ProductInformation",
    data() {
        return {
            descriptionItems: [
                {
                    id: "1",
                    title: "Condition",
                    description:
                        "An item that has been restored to working order by the Jungleebazaar seller or a third party not approved by the manufacturer. This means the item has been inspected, cleaned, and repaired to full working order and is in excellent condition. This item may or may not be in original packaging. See the seller’s listing for full details.",
                },
                { id: "2", title: "Color", description: "Multi-Color" },
                { id: "3", title: "MPN", description: "Does Not Apply" },
                { id: "4", title: "Network", description: "Unlocked" },
                { id: "5", title: "Storage Capacity", description: "32GB" },
                { id: "6", title: "Brand", description: "LG" },
                { id: "7", title: "Processor", description: "Octa Core" },
                { id: "8", title: "Screen Size", description: "55" },
                { id: "9", title: "Camera Resolution", description: "13.0MP" },
                { id: "10", title: "Model", description: "LG G Flex2 H950" },
                { id: "11", title: "Operating System", description: "Android" },
                {
                    id: "12",
                    title: "Contract",
                    description: "Without Contract",
                },
                { id: "13", title: "Style", description: "Bar" },
                {
                    id: "14",
                    title: "Unlock Status",
                    description: "Carrier Unlocked",
                },
                {
                    id: "15",
                    title: "Features",
                    description:
                        "3G Data Capable, 4G Data Capable, Bluetooth Enabled, GPS, Music Player, Wi-Fi Capable, Touchscreen, Near Field Communication",
                },
                { id: "16", title: "Features", description: "3GB" },
                { id: "17", title: "Used", description: "6 months" },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.product-details-mid {
    margin: rem-calc(85px 0 0);
    .product-detail-title {
        margin-bottom: rem-calc(30px);
        @include font(false, 22px, 25px, medium);
        background-color: #f7f8f8;
    }
    .v-card__subtitle {
        padding: rem-calc(0 0 13px);
        @include font(false, 15px, 24px, medium);
    }
    .items {
        padding: 0;
        margin: 0;
        column-count: 2;
        column-gap: 40px;

        li {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding-bottom: rem-calc(10px);
            @include font(grey, 14px, 22px, false);

            .item-content {
                width: calc(100% - 160px);
                color: map-get($colors, primary);
            }
        }
    }
}

@include media(1639px) {
    .product-details-mid {
        margin: rem-calc(60px 0 0);
    }
}
@include media(lg) {
    .product-details-mid {
        .items {
            column-count: auto;
            column-gap: normal;
        }
    }
}
@include media(479px) {
    .product-details-mid {
        .items {
            li {
                .item-content {
                    width: 100%;
                }
            }
        }
    }
}
</style>