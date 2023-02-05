const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/bootstrap',
            },
            shared: ['faker'],
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    entry: './src/index.js',
    optimization: {
        // runtimeChunk: 'single'
    },
};
