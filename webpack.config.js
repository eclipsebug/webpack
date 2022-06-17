const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: "./src/main.js",
    output: {
        path: path.join(__dirname, 'lib'),
        filename: "index.js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
                use: ["style-loader", "css-loader", 'less-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [
                    {
                        loader: 'url-loader', // 匹配文件, 尝试转base64字符串打包到js中
                        // 配置limit, 超过8k, 不转, file-loader复制, 随机名, 输出文件
                        options: {
                            limit: 2 * 1024,
                            name: '[name].[ext]',
                            outputPath: " lib/images/",
                            clean: true
                        },
                    },
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'lib/fonts/[hash:6][ext]'
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'] // 预设:转码规则(用bable开发环境本来预设的)
                    }
                }
            }
        ]
    }
}