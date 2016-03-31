module.exports = {
    "extends": [],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "generators": true
        },
    },
    "env": {
        // Enable all global mocha functions
        "mocha": true
    },
    "globals": {
        // Don't complain about babel-plugin-version-inline
        "__VERSION__": false
    },
    "rules": {
        // Ignore dangling commas
        "comma-dangle": [0, "never"],

        // Use 2 spaces as indentation
        "indent": [2, 2],

        // Allow console logs
        "no-console": 0,

        // Allow unused vars
        "no-unused-vars": 0,

        // Support generators
        "generator-star-spacing": [2, {"before": false, "after": true}]
    }
};