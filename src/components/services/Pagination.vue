<!-- Product section -->
<template>
    <div class="pagination-holder text-center d-flex flex-wrap">
        <v-pagination color="brand" v-model="page" :length="15" :total-visible="7"></v-pagination>

        <v-flex class="d-flex align-center goto-holder">
            <span class="goto">Go to Page</span>
            <v-text-field type="number" v-model="goToPage" solo flat hide-details="auto" outlined></v-text-field>
            <v-btn @click="goTo()" type="submit" outlined depressed tile>Go</v-btn>
        </v-flex>
    </div>
</template>


<script>
export default {
    name: "Pagination",

    data() {
        return {
            page: 3,
            goToPage: "",
        };
    },

    methods: {
        goTo() {
            this.page = parseInt(this.goToPage);
            this.goToPage = "";
        },
    },
};
</script>

<style lang="scss">
.pagination-holder {
    .goto-holder {
        padding-left: rem-calc(18px);
        .goto {
            padding-right: rem-calc(28px);
            display: block;
            @include font(false, 13px, 13px, false);
        }
    }

    .v-input {
        max-width: 45px;

        input {
            height: 30px;
            padding: 0;
            @include font(primary, 14px, 28px, false);
        }
        fieldset {
            border: 1px solid #e5e5e5;
            border-radius: 0;
        }
    }

    .v-btn {
        padding: 0;
        margin-left: rem-calc(6px);
        width: 30px !important;
        min-width: 30px !important;
        height: 30px !important;
        background-color: #f3f3f3;
        border-color: #e5e5e5;
        text-transform: none;
        @include font(primary, 13px, 13px, false);
    }
}
@include media(699px) {
    .pagination-holder {
        .goto-holder {
            padding-left: rem-calc(10px);
            padding-top: rem-calc(10px);
            .goto {
                padding-right: rem-calc(5px);
            }
        }
        .v-pagination__item,
        .v-pagination__navigation {
            height: 26px;
            min-width: 26px;
        }
        .v-input {
            max-width: 45px;
            input {
                height: 28px;
            }
        }
        .v-btn {
            height: 28px !important;
        }
    }
}
</style>