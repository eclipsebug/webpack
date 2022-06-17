const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.join(__dirname, 'lib'),
        filename: "index.js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin
    ]
}