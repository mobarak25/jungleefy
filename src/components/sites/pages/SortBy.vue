<template>
    <v-flex class="d-flex flex-grow-0 align-center sort-field-box">
        <strong v-text="title"></strong>
        <v-flex class="sort-field">
            <v-select
                hide-details
                :items="options"
                label="Date: Newest on top"
                dense
                solo
                flat
                outlined
            ></v-select>
        </v-flex>
    </v-flex>
</template>

<script>
export default {
    name: "SortBy",
    props: {
        options: Array,
        title: String,
    },
    data() {
        return {};
    },
};
</script>
<style lang="scss">
.sort-field-box {
    strong {
        @include font(primary, 15px, 25px, medium);
    }
    .sort-field {
        max-width: 180px;
        margin-left: rem-calc(8px);
        .v-input {
            fieldset {
                border: 1px solid #e5e5e5;
                border-radius: 0;
            }
            .v-input__slot {
                padding-right: 0 !important;
            }
            .v-select__selection,
            .v-label {
                @include font(primary, 14px, 18px, false);
            }
        }
    }
}
</style>