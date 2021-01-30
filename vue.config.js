const { FALSE } = require("node-sass");

module.exports = {
    transpileDependencies: ["vuetify"],
    css: {
        sourceMap: true,
        loaderOptions: {
            scss: {
                prependData: `
                    @import "@/assets/sass/app.scss";
                `
            },
        }
    }
};
