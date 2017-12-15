const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OpenBrowserWebpackPlugin = require("open-browser-webpack-plugin");
const webpack = require("webpack");


const config = {
    entry: {
        index: path.resolve(__dirname,"./app/index.jsx")
    },
    devtool: 'source-map',//页面报错在哪一行
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 9000,
        proxy: {
            // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
            // koa 代码在 ./mock 目录中，启动命令为 npm run mock
            '/api': {
                target: 'http://localhost:3000',
                secure: false
            }
        },
    },
    
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    plugins: [
        new CleanWebpackPlugin(['build']),//清理没有用到的文件
        new HtmlWebpackPlugin({//自动将打包的问题到index.html并且生成index.html
            title: "this is my test file",
            template: path.resolve(__dirname,"./app/index.temp.html")
        }),
        new OpenBrowserWebpackPlugin({//启动服务之后自动打开页面
            url:"http://localhost:9000"
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载
        
    ],
    // postcss: [
    //     require('autoprefixer') //调用autoprefixer插件，例如 display: flex
    // ],
    output: {
        filename: "[name][hash].bundle.js",
        path: path.resolve(__dirname, "./build"),
        publicPath:"/"
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/
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