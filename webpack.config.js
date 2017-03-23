var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
        ],
    }
}