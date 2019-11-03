const isProd = String(process.env.NODE_ENV) === "production";
const isTest = String(process.env.NODE_ENV) === "test";

module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                modules: isTest ? "commonjs" : false,
                targets: {
                    browsers: [
                        "last 2 versions",
                        "not dead",
                        "not < 2%",
                        "not ie 11",
                    ],
                },
            },
        ],
        "@babel/preset-react",
        "@babel/preset-typescript",
    ],
    plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        isTest ? "babel-plugin-dynamic-import-node" : null,
    ].filter(Boolean),
};
