module.exports = {
    mode: "development",
    devtool: "cheap-source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.(jp?g|png|gif|webp)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 5000,
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: "svg-inline-loader",
            },
        ],
    },
};
