module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:jest/recommended",
        "prettier",
        "prettier/react",
    ],
    plugins: ["react", "react-hooks", "jest"],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        es6: true,
        browser: true,
        node: true,
        "jest/globals": true,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error",
        "no-console": "warn",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-member-accessibility": 0,
        "import/prefer-default-export": "off",
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
    },
};
