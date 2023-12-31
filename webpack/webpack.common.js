const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: ["./src/app.ts"],
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$|\.jsx?$/,
                include: path.join(__dirname, "../src"),
                loader: "ts-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                    filename: "[name].bundle.js",
                },
            },
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            gameName: "J.W.S.T. 2048",
            template: "./index.html",
            filename: "index.html",
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "./src/assets/assetsNames", to: "assets/assetsNames" },
                { from: "./src/assets/audio", to: "assets/audio" },
                { from: "./src/assets/spines", to: "assets/spines" },
                { from: "./src/assets/uncompressed", to: "assets/uncompressed" },
                { from: "./src/assets/spriteSheets", to: "assets/spriteSheets" },
                { from: "./src/assets/video_back", to: "assets/video_back" },
            ],
        }),
    ],
};
