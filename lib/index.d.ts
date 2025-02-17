import {ESLint, Linter, Rule} from 'eslint';


declare const configs: {
    /**
     * The default recommended config in Flat Config Format
     */
    'recommended': Linter.Config
}

type Configs = typeof configs

interface UnprefixedRuleOptions {
    "split-imports": {}
}

type Rules = {
    [K in keyof UnprefixedRuleOptions]: Rule.RuleModule
}
declare const plugin: {
    rules: Rules
    configs: Configs
}

export {type Configs, type Rules, UnprefixedRuleOptions, configs, plugin as default}