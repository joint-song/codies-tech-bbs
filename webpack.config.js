var webpack = require("webpack");
var path = require("path");

/**
 * for dev only.
 * TODO(jointsong): 
 * - 1. Provide config for production.
 * - 2. Watch and auto-refresh config.
 */
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
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
        ],
    }
}