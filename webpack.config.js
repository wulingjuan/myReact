const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OpenBrowserWebpackPlugin = require("open-browser-webpack-plugin");
const webpack = require("webpack");

const config = {
    entry: {
        index: "./app/index.js",
    },
    devtool: 'inline-source-map',//页面报错在哪一行
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 9000
    },
    plugins: [
        new CleanWebpackPlugin(['build']),//清理没有用到的文件
        new HtmlWebpackPlugin({//自动将打包的问题到index.html并且生成index.html
            title: "this is my test file",
            template:"./app/index.html"
        }),
        new OpenBrowserWebpackPlugin({//启动服务之后自动打开页面
            url:"http://localhost:9000"
        }),
        new webpack.HotModuleReplacementPlugin(),//热更新
        
    ],
    output: {
        filename: "[name][hash].bundle.js",
        path: path.resolve(__dirname, "./build"),
        publicPath:"/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test:/\.(js|jsx)$/,
                use:[
                    "babel-loader"
                ]
            },
            {
                test:/\.(jpg|png)$/,
                use:[
                    "url-loader?limit=8192&name=images/[hash:8].name.[ext]"//图片大小小于8KB，转换为base64，指定打包的路径并加上hash值
                ]
            }
        ]
    },
}

module.exports = config;