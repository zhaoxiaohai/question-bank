const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 自动生成HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 自动清空dist目录
const CleanWebpackPlugin = require('clean-webpack-plugin');



module.exports = {
    mode: "development",
    entry: {
        app: "./src/web/app.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue/,
                exclude: /node_modules/,
                loader: "vue-loader"
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]

}