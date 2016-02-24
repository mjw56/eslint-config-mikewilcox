const rules = {
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
        // Use 2 spaces as indentation
        "indent": [2, 2],

        // Ignore dangling commas
        "comma-dangle": [0, "never"],

        "yoda": [2, "never"]
    }
}

export default rules;