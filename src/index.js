import { recursive } from 'merge';

function resolveExtends(rule) {
    while (rule.extends.length > 0) {
        const subRuleName = rule.extends.shift();

        var subRule = require(subRuleName);
        var newRules = subRule.extends || [];

        rule.extends = newRules.concat(rule.extends);
        delete subRule.extends;

        recursive(rule, subRule);
    }

    return rule;
}

export default resolveExtends({
    "extends": [
        "eslint-config-airbnb/base",
        "./rules"
    ]
});