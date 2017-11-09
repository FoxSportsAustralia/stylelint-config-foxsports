'use strict'

module.exports = {
    // Color
    'color-named': "never", // Require (where possible) or disallow named colors.
    'color-no-hex': null, // Disallow hex colors.

    // Function
    'function-blacklist': null, // Specify a blacklist of disallowed functions.
    'function-url-no-scheme-relative': true, // Disallow scheme-relative urls.
    'function-url-scheme-blacklist': ["ftp", "/^http/"], // Specify a blacklist of disallowed url schemes.
    'function-url-scheme-whitelist': null, // Specify a whitelist of allowed url schemes.
    'function-whitelist': null, // Specify a whitelist of allowed functions.

    // Number
    'number-max-precision': 2, // Limit the number of decimal places allowed in numbers.

    // Time
    'time-min-milliseconds': 100, // Specify the minimum number of milliseconds for time values.

    // Unit
    'unit-blacklist': null, // Specify a blacklist of disallowed units.
    'unit-whitelist': null, // Specify a whitelist of allowed units.

    // Value
    'value-no-vendor-prefix': true, // Disallow vendor prefixes for values.

    // Custom property
    'custom-property-pattern': "fs-.+", // Specify a pattern for custom properties.

    // Property
    'property-blacklist': null, // Specify a blacklist of disallowed properties.
    'property-no-vendor-prefix': true, // Disallow vendor prefixes for properties.
    'property-whitelist': null, // Specify a whitelist of allowed properties.

    // Declaration
    'declaration-no-important': true, // Disallow !important within declarations.
    'declaration-property-unit-blacklist': null, // Specify a blacklist of disallowed property and unit pairs within declarations.
    'declaration-property-unit-whitelist': null, // Specify a whitelist of allowed property and unit pairs within declarations.
    'declaration-property-value-blacklist': null, // Specify a blacklist of disallowed property and value pairs within declarations.
    'declaration-property-value-whitelist': null, // Specify a whitelist of allowed property and value pairs within declarations.

    // Declaration block
    'declaration-block-single-line-max-declarations': null, // Limit the number of declaration within single line declaration blocks.

    // Selector
    'selector-attribute-operator-blacklist': null, // Specify a blacklist of disallowed attribute operators.
    'selector-attribute-operator-whitelist': null, // Specify a whitelist of allowed attribute operators.
    'selector-class-pattern': null, // Specify a pattern for class selectors.
    'selector-id-pattern': null, // Specify a pattern for id selectors.
    'selector-max-attribute': 2, // Limit the number of attribute selectors in a selector.
    'selector-max-class': 3, // Limit the number of classes in a selector.
    'selector-max-combinators': 2, // Limit the number of combinators in a selector.
    'selector-max-compound-selectors': 3, // Limit the number of compound selectors in a selector.
    'selector-max-empty-lines': 0, // Limit the number of adjacent empty lines within selectors.
    'selector-max-id': 1, // Limit the number of id selectors in a selector.
    'selector-max-specificity': ["0,4,2", {ignoreSelectors: ['.fsui-normalise', '.fiso-widget']}], // Limit the specificity of selectors.
    'selector-max-type': 2, // Limit the number of type in a selector.
    'selector-max-universal': 1, // Limit the number of universal selectors in a selector.
    'selector-nested-pattern': null, // Specify a pattern for the selectors of rules nested within rules.
    'selector-no-qualifying-type': [true, { ignore: ["attribute"] }], // Disallow qualifying a selector by type.
    'selector-no-vendor-prefix': true, // Disallow vendor prefixes for selectors.
    'selector-pseudo-class-blacklist': null, // Specify a blacklist of disallowed pseudo-class selectors.
    'selector-pseudo-class-whitelist': null, // Specify a whitelist of allowed pseudo-class selectors.

    // Media feature
    'media-feature-name-blacklist': null, // Specify a blacklist of disallowed media feature names.
    'media-feature-name-no-vendor-prefix': true, // Disallow vendor prefixes for media feature names.
    'media-feature-name-whitelist': null, // Specify a whitelist of allowed media feature names.

    // Custom media
    'custom-media-pattern': "fs-.+", // Specify a pattern for custom media query names.

    // At-rule
    'at-rule-blacklist': null, // Specify a blacklist of disallowed at-rules.
    'at-rule-no-vendor-prefix': true, // Disallow vendor prefixes for at-rules.
    'at-rule-whitelist': null, // Specify a whitelist of allowed at-rules.

    // Comment
    'comment-word-blacklist': ["/^TODO/", { "severity": "warning" }], // Specify a blacklist of disallowed words within comments.

    // General / Sheet
    'max-nesting-depth': 3, // Limit the depth of nesting.
}
