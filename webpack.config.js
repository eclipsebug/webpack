const path = require('path')

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.join(__dirname, 'lib'),
        filename: "webpack-demo.js",
        clean: true
    }
}