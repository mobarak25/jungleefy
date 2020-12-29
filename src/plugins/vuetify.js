import Vue from "vue";
import Vuetify from "vuetify/lib";



Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#353a44',   // header-bg
                secondary: '#30353d', // footer-bg
                brand: '#ff9900',     // logo-color
                site_bg: '#f1f3f6',   // site-bg
                light: '#fff',   // site-bg
                success: '#4caf50',
                info: '#2196f3',
                warning: '#fb8c00',
                danger: '#ff5252',
                grey: '#828282',
            },
        },
    },
});




