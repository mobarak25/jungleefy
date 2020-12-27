<template>
    <v-flex class="product-details-summery">
        <v-flex class="product-details-box">
            <small class="category">
                Electronics
                <v-btn ripple="none" fab elevation="5" width="30" height="30">
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
            </small>
            <h1>LG G Flex2 H950 4G LTE 32GB Rom 3GB Ram AT&T SmartPhone</h1>
        </v-flex>

        <ul>
            <li>
                Condition:
                <span>Used</span>
            </li>
            <li>
                Brand:
                <span>LG</span>
            </li>
        </ul>

        <v-sheet class="d-flex align-center rating">
            <v-rating
                dense
                readonly
                v-model="rating"
                color="yellow darken-3"
                background-color="grey"
                empty-icon="$ratingFull"
                size="15"
            ></v-rating>
            <span class="d-block ml-1">38 customer reviews</span>
        </v-sheet>

        <span class="availablity">
            Availablity:
            <span class="pieces">10 Pcs</span>
            <b>In Stock</b>
        </span>

        <v-sheet class="price">
            <span class="price-payable">TK 4000</span>
            <span class="price-orginal">TK4500</span>
            <span class="price-offer">-20%</span>
        </v-sheet>

        <v-sheet class="quantity d-flex align-center">
            <span class="quantity-title">Quantity</span>

            <!-- Quantity-Holder -->
            <quantity-holder></quantity-holder>
        </v-sheet>

        <v-layout wrap class="btn-holder justify-space-between">
            <v-flex class="btn-box">
                <v-btn href="#" block tile depressed class="primary white--text text-none">Buy Now</v-btn>
            </v-flex>
            <v-flex class="btn-box">
                <v-btn href="#" block tile depressed class="brand white--text text-none">Add to Cart</v-btn>
            </v-flex>
        </v-layout>

        <v-layout class="share-product align-center">
            <span>Share:</span>
            <!-- Product-Social -->
            <product-social></product-social>
        </v-layout>
    </v-flex>
</template>

<script>
import QuantityHolder from "@/components/QuantityHolder";
import ProductSocial from "@/components/ProductSocial";
export default {
    name: "ProductDetailsSummery",
    components: {
        QuantityHolder,
        ProductSocial,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss">
.product-details-summery {
    max-width: 638px;
    padding: rem-calc(0 50px);

    .product-details-box {
        padding: rem-calc(0 35px 9px 0);
        margin-bottom: rem-calc(11px);
        position: relative;
        .v-btn {
            @include absolute(false, false, top, 0, right, 0);
            .v-icon {
                font-size: 18px;
                color: lighten(map-get($colors, grey), 28);
            }
        }
        .category {
            padding-bottom: rem-calc(6px);
            display: block;
            @include font(grey, 15px, 22px, light);
        }
        h1 {
            @include font(primary, 22px, 30px, medium);
        }
    }

    ul {
        padding: 0;
        margin: 0;

        li {
            padding-bottom: rem-calc(9px);
            @include font(grey, 15px, 20px, false);

            span {
                @include font(primary, 17px, 20px, semi-bold);
            }
        }
    }
    .rating {
        padding: rem-calc(9px 0 13px);
        @include font(primary, 14px, 20px, false);
    }
    .availablity {
        @include font(grey, 15px, 15px, false);

        .pieces {
            padding-left: rem-calc(10px);
            display: inline-block;
            color: #74788d;
        }

        b {
            padding-left: rem-calc(13px);
            display: inline-block;
            color: map-get($colors, primary);
            font-weight: map-get($font-weight, semi-bold);
        }
    }
    .price {
        padding: rem-calc(34px 0 40px);
        line-height: rem-calc(35px);
        display: flex;
        align-items: flex-end;
        .price-payable {
            @include font(brand, 32px, 35px, semi-bold);
        }
        .price-orginal {
            padding-left: rem-calc(14px);
            display: inline-block;
            @include font(grey, 15px, 30px, false);
        }
        .price-offer {
            padding-left: rem-calc(4px);
            display: inline-block;
            @include font(primary, 15px, 30px, false);
        }
    }
    .quantity-title {
        padding-right: rem-calc(50px);
        @include font(grey, 15px, 20px, false);
    }
    .btn-holder {
        padding-top: rem-calc(55px);
        .btn-box {
            max-width: 47.8%;
            .v-btn {
                height: 40px;
                @include font(false, 16px, 20px, false);
            }
        }
    }
    .share-product {
        padding: rem-calc(0 30px);
        margin-top: rem-calc(40px);
        background-color: #f7f8f8;
        span {
            padding-right: rem-calc(10px);
        }
        .share-product-box {
            width: 100%;

            a {
                padding: rem-calc(0 8px);
                display: inline-block;
                border: none;
                i {
                    @include font(false, 25px, 40px, false);
                }
            }
        }
    }
}
</style>