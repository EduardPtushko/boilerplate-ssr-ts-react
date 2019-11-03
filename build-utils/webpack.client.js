const merge = require("webpack-merge");
const base = require("./webpack.base");
const path = require("path");

module.exports = merge(base, {
    entry: "./src/client/client",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../public"),
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.module\.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: true,
                        },
                    },
                ],
            },
        ],
    },
});
