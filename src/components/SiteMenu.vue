<template>
    <v-toolbar flat prominent height="40" tag="div" class="pa-0 primary">
        <v-container class="py-0">
            <div class="btm-header d-flex wrap justify-between align-center">
                <nav class="main-menu d-flex wrap justify-center align-center">
                    <ul>
                        <li
                            v-for="nav in navs"
                            :key="nav.id"
                            :class="{
                                    'has-child js-has-child': nav.hasChild,
                                }"
                        >
                            <a href="#">
                                {{ nav.name }}
                                <i v-if="nav.hasChild" class="icofont-rounded-down"></i>
                            </a>
                            <ul v-if="nav.hasChild">
                                <li v-for="child in nav.childs" :key="child.id">
                                    <a href>{{ child.name }}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <a class="more-menu" href="#">More..</a>
                </nav>

                <a class="post-promotion" href="#">
                    <i class="icofont-plus"></i> Post Your Ad
                </a>
            </div>
        </v-container>
    </v-toolbar>
</template>

<script>
export default {
    name: "SiteMenu",
    data() {
        return {
            navs: [
                { id: 1, name: "Drop shipping", hasChild: false },
                { id: 2, name: "Bulk selling", hasChild: false },
                { id: 3, name: "Warehouse Products", hasChild: false },
                {
                    id: 4,
                    name: "Warehouse Closeouts",
                    hasChild: true,
                    childs: [
                        { id: 1, name: "X Monica" },
                        { id: 2, name: "X Monalisa" },
                        { id: 3, name: "X Alexander" },
                        { id: 4, name: "X Monica" },
                        { id: 5, name: "X Monalisa" },
                        { id: 6, name: "X Alexander" }
                    ]
                },
                { id: 5, name: "Overstock Surplus", hasChild: false },
                { id: 6, name: "Wholesale Stock", hasChild: false },
                { id: 7, name: "Manufacturer Stock", hasChild: false }
            ]
        };
    }
};
</script>