// 0: "off"
// 1: "warn"
// 2: "error"

module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "global": true,
        "__webpack_public_path__": true,
        "__DEVELOPMENT__": true,
        "__PRODUCTION__": true,
        "__TEST__": true,
        "DISCO": true,
        "Handlebars": true,
        "PDFJS": true,
        "QUnit": true,
        "sinon": true,
        "analytics": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "arrow-spacing": [
            "error", {
                "before": true,
                "after": true
            }
        ],
        "block-spacing": [
            "warn",
            "always"
        ],
        "brace-style": [
            "warn",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "camelcase": "warn",
        "comma-dangle": [
            "error",
            "never"
        ],
        "comma-style": [
            "error",
            "last"
        ],
        "computed-property-spacing": [
            "warn",
            "never"
        ],
        "consistent-return": "warn",
        "curly": [
            "warn",
            "all"
        ],
        "default-case": "error",
        "dot-location": [
            "warn",
            "property"
        ],
        "dot-notation": "warn",
        "eol-last": "error",
        "eqeqeq": "warn",
        "func-names": "off",
        "id-length": "off",
        "indent": [
            "warn",
            4,
            { "SwitchCase": 1 }
        ],
        "jsx-quotes": [
            "error",
            "prefer-double"
        ],
        "key-spacing": [
            "warn",
            {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "keyword-spacing": [
            "warn",
            {
                "after": true,
                "before": true
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "max-len": [
            "warn",
            120
        ],
        // Maybe we can set this to 4 to encourage objects for functions that take many params
        "max-params": "off",
        "new-cap": "warn",
        "new-parens": "error",
        "no-alert": "error",
        "no-caller": "error",
        "no-duplicate-imports": "error",
        "no-empty-function": "warn",
        "no-empty-pattern": "error",
        "no-else-return": "error",
        "no-eval": "error",
        "no-extra-parens": "off",
        "no-fallthrough": "warn",
        "no-floating-decimal": "warn",
        "no-irregular-whitespace": "warn",
        "no-lone-blocks": "warn",
        "no-multi-spaces": "warn",
        "no-nested-ternary": "error",
        "no-redeclare": "error",
        "no-return-assign": "warn",
        "no-shadow": "warn",
        "no-spaced-func": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "warn",
        // TODO: Need to discuss with team. We have some valid uses for undefined. Hoever, most usages are error prone.
        // Most errors come from x === undefined which is unsafe.
        // "no-undefined": "error",
        "no-unused-vars": "warn",
        "no-use-before-define": [
            "error",
            {
                "functions": false
            }
        ],
        "no-useless-call": "warn",
        "no-useless-computed-key": "warn",
        "no-useless-rename": "warn",
        "no-whitespace-before-property": "error",
        // TODO: Would like to enable this rule, but only if team decides we can autofix it.
        // "object-shorthand": [
        //     "warn",
        //     "always"
        // ],
        "one-var": "off",
        "one-var-declaration-per-line": [
            "warn",
            "always"
        ],
        "padded-blocks": [
            "warn",
            "never"
        ],
        "prefer-const": "warn",
        "prefer-rest-params": "warn",
        "prefer-spread": "warn",
        "quotes": [
            "error",
            "single",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "radix": "error",
        "react/display-name": "warn",
        "react/no-deprecated": "warn",
        "react/no-did-mount-set-state": "warn",
        "react/no-multi-comp": "warn",
        "react/prop-types": "warn",
        "react/react-in-jsx-scope": "off",
        // React team as noted string refs as legacy. It appears string refs could be deprecated in near future.
        "react/no-string-refs": "off",
        "react/sort-comp": [
            "warn", {
                order: [
                    'static-methods',
                    'lifecycle',
                    'everything-else',
                    'rendering'
                  ],
                  groups: {
                    lifecycle: [
                        'displayName',
                        'propTypes',
                        'contextTypes',
                        'childContextTypes',
                        'mixins',
                        'statics',
                        'defaultProps',
                        'constructor',
                        'getDefaultProps',
                        'getInitialState',
                        'state',
                        'getChildContext',
                        'componentWillMount',
                        'componentDidMount',
                        'componentWillReceiveProps',
                        'shouldComponentUpdate',
                        'componentWillUpdate',
                        'componentDidUpdate',
                        'componentWillUnmount'
                    ],
                    rendering: [
                      '/^render.+$/',
                      'render'
                    ]
                }
            }
        ],
        "react/sort-prop-types": [
            "warn", {
                "callbacksLast": false,
                "ignoreCase": true,
                "requiredFirst": false
            }
        ],
        "react/wrap-multilines": "warn",
        "rest-spread-spacing": [
            "error",
            "never"
        ],
        "semi": [
            "error",
            "always"
        ],
        "space-before-blocks": [
            "warn",
            {
                "functions": "always",
                "keywords": "always",
                "classes": "always"
            }
        ],
        "space-before-function-paren": [
            "warn",
            {
                "anonymous": "never",
                "named": "never"
            }
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-infix-ops": "error",
        "spaced-comment": [
            "warn",
            "always"
        ],
        "template-curly-spacing": [
            "error",
            "never"
        ],
        "unicode-bom": [
            "error",
            "never"
        ],
        "vars-on-top": "warn",
        "yield-star-spacing": [
            "error",
            "before"
        ]
    }
};
