'use strict'

// I asked for confirmation:
// https://github.com/AndyOGo/stylelint-declaration-strict-value/issues/24
// Apparently, that’s not how default works. Once you explicitly set, it doesn’t take from default list.
// So if we want our explicit definitions to extend the default, we do this:
const strictValueDefaults = ['inherit', 'initial', 'unset'];

// See https://stylelint.io/user-guide/configure
module.exports = {
    "customSyntax": "postcss-css-in-js",
    "plugins": [
      "stylelint-csstree-validator",
      "stylelint-declaration-block-no-ignored-properties",
      "stylelint-declaration-strict-value",
      "stylelint-order",
      "stylelint-selector-bem-pattern"
    //   "stylelint-scss", // TODO: review & configure this
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
                        '': strictValueDefaults, // only not-explicitly set properties
                        '/color/': ['currentColor', 'transparent'].concat(strictValueDefaults),
                        'z-index': ['0', 'auto'].concat(strictValueDefaults),

                    }
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
    ),
    "reportDescriptionlessDisables": false,
    "reportNeedlessDisables": true,
    "reportInvalidScopeDisables": true,
    "ignoreDisables": false,
    "ignoreFiles": [],
    "overrides": [
        {
            "files": ["docs/assets/*.css"],
            "rules": {
                'color-no-hex': false, // Disallow hex colors.
            }
        }
    ]
}
