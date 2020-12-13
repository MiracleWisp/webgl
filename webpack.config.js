const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/app/index.ts',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'WebGl',
            meta: {
                "viewport": 'width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0',
                "property": {"property": "og:image", "content": "ogimage.jpg"}
            }
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {outputPath: 'img'} // where to place images referenced in CSS and modules
                    }
                ]
            },
            {
                test: /\.(obj)$/i,
                use: 'raw-loader'
            },
            {
                test: /\.(glsl)$/,
                use: 'raw-loader',
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    experiments: {
        topLevelAwait: true
    }
};
