const { FALSE } = require("node-sass");

module.exports = {
    transpileDependencies: ["vuetify"],
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                    @import "@/assets/sass/app.scss";
                `
            },
        }
    }
};
