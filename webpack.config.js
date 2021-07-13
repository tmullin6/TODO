const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');



module.exports = {

    mode: 'development',

    entry: {

        index: './src/index.js',
    },

    output: {

        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'List-it',
            favicon: './src/list.ico',
        }),
        
    ],

    module: {
        rules: [
            {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader','less-loader',],
            },

        ],
    },

}