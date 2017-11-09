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
            'csstree/validator': {ignore: ['background', 'background-color', 'box-shadow']}, // gets upset by sass rgba() function
            "plugin/declaration-block-no-ignored-properties": true,
            "scale-unlimited/declaration-strict-value": [["/color/", "z-index", "font-size", "line-height"], { ignoreKeywords: ["currentColor", "transparent", "inherit"] }],
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
