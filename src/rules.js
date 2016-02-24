module.exports = {
    "extends": [],
    "parser": require.resolve("babel-eslint"),
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

        // Allow unused vars
        "no-unused-vars": 0
    }
};