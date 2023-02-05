const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 8082,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/bootstrap',
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
