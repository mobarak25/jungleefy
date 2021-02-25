<template>
    <v-app :class="{static_header: static_header}" v-scroll="onScroll">
        <SiteHeader />
        <router-view></router-view>
        <SiteFooter />
    </v-app>
</template>

<script>
import SiteHeader from "./components/sites/common/SiteHeader";
import SiteFooter from "./components/sites/common/SiteFooter";

export default {
    name: "App",
    components: {
        SiteHeader,
        SiteFooter,
    },
    data() {
        return {
            static_header: false,
        };
    },
    methods: {
        onScroll(e) {
            if (typeof window === "undefined") return;
            const top = window.pageYOffset || e.target.scrollTop || 0;
            if (top > 135) {
                this.static_header = true;
            } else {
                this.static_header = false;
            }
        },
    },
};
</script>