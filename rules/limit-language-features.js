'use strict'

module.exports = {
    // Color
    'color-named': "never", // Require (where possible) or disallow named colors.
    'color-no-hex': null, // Disallow hex colors.
    'color-function-notation': "legacy", // Specify modern or legacy notation for applicable color-functions.

    // Function
    'function-disallowed-list': null, // Specify a list of disallowed functions
    'function-url-no-scheme-relative': true, // Disallow scheme-relative urls.
    'function-url-scheme-disallowed-list': ["ftp", "/^http/"], // Specify a list of disallowed URL schemes.
    'function-url-scheme-allowed-list': null, // Specify a list of allowed URL schemes.
    'function-allowed-list': null, // Specify a list of allowed functions.

    // animations/keyframes
    'keyframes-name-pattern': null, // Specify a pattern for keyframe names.

    // Number
    'number-max-precision': 2, // Limit the number of decimal places allowed in numbers.

    // Time
    'time-min-milliseconds': [100, {ignore: ["delay"]}], // Specify the minimum number of milliseconds for time values.

    // Unit
    'unit-disallowed-list': null, // Specify a list of disallowed units.
    'unit-allowed-list': null, // Specify a list of allowed units.

    // Value
    'value-no-vendor-prefix': true, // Disallow vendor prefixes for values.

    // Custom property
    'custom-property-pattern': "fs-.+", // Specify a pattern for custom properties.

    // Property
    'property-disallowed-list': null, // Specify a list of disallowed properties.
    'property-no-vendor-prefix': true, // Disallow vendor prefixes for properties.
    'property-allowed-list': null, // Specify a list of allowed properties.

    // Declaration
    'declaration-no-important': true, // Disallow !important within declarations.
    'declaration-property-unit-disallowed-list': null, // Specify a list of disallowed property and unit pairs within declarations.
    'declaration-property-unit-allowed-list': null, // Specify a list of allowed property and unit pairs within declarations.
    'declaration-property-value-disallowed-list': null, // Specify a list of disallowed property and value pairs within declarations.
    'declaration-property-value-allowed-list': null, // Specify a list of allowed property and value pairs within declarations.

    // Declaration block
    'declaration-block-single-line-max-declarations': null, // Limit the number of declaration within single line declaration blocks.

    // Selector
    'selector-attribute-operator-disallowed-list': null, // Specify a list of disallowed attribute operators.
    'selector-attribute-operator-allowed-list': null, // Specify a list of allowed attribute operators.
    'selector-attribute-name-disallowed-list': null, // Specify a list of disallowed attribute names.
    'selector-class-pattern': null, // Specify a pattern for class selectors.
    'selector-combinator-disallowed-list': null, // Specify a list of disallowed combinators.
    'selector-combinator-allowed-list': null, // Specify a list of allowed combinators.
    'selector-id-pattern': null, // Specify a pattern for id selectors.
    'selector-max-attribute': 2, // Limit the number of attribute selectors in a selector.
    'selector-max-class': null, // Limit the number of classes in a selector. (covered by selector-max-specificity)
    'selector-max-combinators': 2, // Limit the number of combinators in a selector.
    'selector-max-compound-selectors': 3, // Limit the number of compound selectors in a selector.
    'selector-max-empty-lines': 0, // Limit the number of adjacent empty lines within selectors.
    'selector-max-id': null, // Limit the number of id selectors in a selector. (covered by selector-max-specificity)
    'selector-max-pseudo-class': null, // Limit the number of pseudo-classes in a selector
    'selector-max-specificity': ["1,3,2", {ignoreSelectors: ['.fsui-normalise', '.fiso-widget']}], // Limit the specificity of selectors.
    'selector-max-type': null, // Limit the number of type in a selector. (covered by selector-max-specificity)
    'selector-max-universal': 1, // Limit the number of universal selectors in a selector.
    'selector-nested-pattern': null, // Specify a pattern for the selectors of rules nested within rules.
    'selector-no-qualifying-type': [true, { ignore: ["attribute"] }], // Disallow qualifying a selector by type.
    'selector-no-vendor-prefix': true, // Disallow vendor prefixes for selectors.
    'selector-pseudo-class-disallowed-list': null, // Specify a list of disallowed pseudo-class selectors.
    'selector-pseudo-class-allowed-list': null, // Specify a list of allowed pseudo-class selectors.
    'selector-pseudo-element-disallowed-list': null, // Specify a list of disallowed pseudo-element selectors.
    'selector-pseudo-element-allowed-list': null, // Specify a list of allowed pseudo-element selectors.

    // Media feature
    'media-feature-name-disallowed-list': null, // Specify a list of disallowed media feature names.
    'media-feature-name-no-vendor-prefix': true, // Disallow vendor prefixes for media feature names.
    'media-feature-name-value-allowed-list': null, // Specify a list of allowed media feature name and value pairs.
    'media-feature-name-allowed-list': null, // Specify a list of allowed media feature names.

    // Custom media
    'custom-media-pattern': "fs-.+", // Specify a pattern for custom media query names.

    // At-rule
    'at-rule-disallowed-list': null, // Specify a list of disallowed at-rules.
    'at-rule-no-vendor-prefix': true, // Disallow vendor prefixes for at-rules.
    'at-rule-property-required-list': {}, // Specify a list of required properties for an at-rule.
    'at-rule-allowed-list': null, // Specify a list of allowed at-rules.

    // Comment
    'comment-word-disallowed-list': ["/^TODO/", { "severity": "warning" }], // Specify a list of disallowed words within comments.
    'comment-pattern': null, // Specify a pattern for comments.

    // General / Sheet
    'linebreaks': null, // Specify unix or windows linebreaks.
    'max-nesting-depth': [2, {ignore: ['blockless-at-rules', 'pseudo-classes']}], // Limit the depth of nesting.
    'alpha-value-notation': "number", // Specify percentage or number notation for alpha-values.
    'hue-degree-notation': "angle", // Specify number or angle notation for degree hues.
}
