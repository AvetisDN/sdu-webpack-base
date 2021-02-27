const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devServer: {
        open: true,
        port: 8080,
        compress: true  
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            //CSS,SCSS
            {
                test: /\.(css|scss)$/,
                use: ['style-loader','css-loader','sass-loader']
            }
        ]
    }
}