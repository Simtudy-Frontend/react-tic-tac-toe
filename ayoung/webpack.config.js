const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.jsx',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'esbuild-loader',
                options: {
                    loader: 'jsx',
                    target: 'es2015', // ES6로 변환
                    jsx: 'automatic',  // 자동 JSX 런타임 설정
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // '.js', '.jsx' 확장자를 자동으로 인식하도록 추가
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
    watchOptions: {
        ignored: /node_modules/,
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        hot: true
    },
};