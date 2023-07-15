const sassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {


    plugins: [
        {
            plugin: sassResourcesLoader,
            options: {
                resources: [
                    "./src/scss/global_mixins.scss",
                    "./src/scss/global_variables.scss",
                    "./src/scss/fonts.scss"
                ],
            },
        },
    ],
}