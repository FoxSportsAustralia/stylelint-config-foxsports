'use strict'

// See https://stylelint.io/user-guide/example-config/
module.exports = {
    "syntax": "scss",
    "plugins": [
      "stylelint-csstree-validator",
      "stylelint-declaration-block-no-ignored-properties",
      "stylelint-declaration-strict-value",
      "stylelint-order",
      "stylelint-selector-bem-pattern"
      // "stylelint-scss" // TODO: review & configure this
    ],
    "rules": Object.assign(
        {
            'csstree/validator': {
                ignore: Array.from({length: 10}, (_, i) => `-styled-mixin${i}`), // these psuedo identifiers are used by styled components for interpolated CSS generated at runtime
            },
            "plugin/declaration-block-no-ignored-properties": true,
            'scale-unlimited/declaration-strict-value': [ // Disallow named colours
                ['/color/', 'z-index'],
                {
                    ignoreKeywords: {
                        '': ['inherit', 'initial', 'unset'],
                        '/color/': ['currentColor', 'transparent'],
                        'z-index': ['0', 'auto']
                    },
                }
            ],
            "plugin/selector-bem-pattern": {
                "componentName": "/^[-_a-z0-9]+$/",
                "componentSelectors": {
                    "initial": "^\\.{componentName}(?:-[a-z]+)?$",
                    "combined": "^\\.combined-{componentName}-[a-z]+$"
                }
            }
        },
        require('./rules/stylelint-order.js'),
        require('./rules/limit-language-features.js'),
        require('./rules/possible-errors.js'),
        require('./rules/stylistic-issues.js')
    )
}
