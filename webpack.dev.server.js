"use strict";

const Webpack = require("webpack");
const WebpackDevServer = require("./node_modules/webpack-dev-server/lib/Server");
const webpackConfig = require("./webpack.config");
const path = require("path");

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
    contentBase: path.join(__dirname),
    inline:true,
    hot: true,
    // Enable special support for Hot Module Replacement
    // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
    // Use "webpack/hot/dev-server" as additional module in your entry point
    // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.

    // Set this as true if you want to access dev server from arbitrary url.
    // This is handy if you are using a html5 router.
    historyApiFallback: false,

    // Set this if you want to enable gzip compression for assets
    compress: true,
    // webpack-dev-middleware options
    quiet: false,
    noInfo: false,
    filename: "bundle.js",
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    publicPath: "./dist/",
    headers: { "X-Custom-Header": "yes" },
    stats: { colors: true }
});

server.listen(8080, "127.0.0.1", function() {
	console.log("Starting server on http://localhost:8080");
});