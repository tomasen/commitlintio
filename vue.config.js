const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");

module.exports = {
    configureWebpack: {
        plugins: [
            new GoogleFontsPlugin({
                fonts: [
                    { family: "Oswald"},
                    { family: "Lato", variants: [ "100", "300", "400", "400italic", "700" ] }
                ]
            })
        ]
    }
}