import Vue from "vue";
import Vuetify from "vuetify/lib";



Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#353a44',
                secondary: '#ff9900',
                brand: '#ff9900',
                info: '#fff',
                warning: '#ebd5d5',
                success: '#222428',
                danger: '#222428',
            },
        },
    },
});




