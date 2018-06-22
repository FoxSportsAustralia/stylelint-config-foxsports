'use strict'

module.exports = {
    // Color
    'color-no-invalid-hex': true, // Disallow invalid hex colors.

    // Font family
    'font-family-no-duplicate-names': true, // Disallow duplicate font family names.
    'font-family-no-missing-generic-family-keyword': true, // Disallow missing generic families in lists of font family names

    // Function
    'function-calc-no-unspaced-operator': true, // Disallow an unspaced operator within calc functions.
    'function-linear-gradient-no-nonstandard-direction': true, // Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.

    // String
    'string-no-newline': true, // Disallow (unescaped) newlines in strings.

    // Unit
    'unit-no-unknown': true, // Disallow unknown units.

    // Shorthand property
    'shorthand-property-no-redundant-values': true, // Disallow redundant values in shorthand properties.

    // Property
    'property-no-unknown': true, // Disallow unknown properties.

    // Keyframe declaration
    'keyframe-declaration-no-important': true, // Disallow !important within keyframe declarations.

    // Declaration block
    'declaration-block-no-duplicate-properties': true, // Disallow duplicate properties within declaration blocks.
    'declaration-block-no-redundant-longhand-properties': true, // Disallow longhand properties that can be combined into one shorthand property.
    'declaration-block-no-shorthand-property-overrides': true, // Disallow shorthand properties that override related longhand properties within declaration blocks.

    // Block
    'block-no-empty': true, // Disallow empty blocks.

    // Selector
    'selector-pseudo-class-no-unknown': true, // Disallow unknown pseudo-class selectors.
    'selector-pseudo-element-no-unknown': true, // Disallow unknown pseudo-element selectors.
    'selector-type-no-unknown': true, // Disallow unknown type selectors.

    // Media feature
    'media-feature-name-no-unknown': true, // Disallow unknown media feature names.

    // At-rule
    'at-rule-no-unknown': [true, {ignoreAtRules: ["/^include/", "/^each/", "/^function/", "/^return/", "/^for/", "/^mixin/", "/^function/", "/^return/"]}], // Disallow unknown at-rules.

    // Comment
    'comment-no-empty': true, // Disallow empty comments.

    // General / Sheet
    'no-descending-specificity': true, // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
    'no-duplicate-at-import-rules': true, // Disallow duplicate @import rules within a stylesheet (not that styled-components is affected)
    'no-duplicate-selectors': true, // Disallow duplicate selectors.
    'no-empty-source': true, // Disallow empty sources.
    'no-extra-semicolons': true, // Disallow extra semicolons.
    'no-invalid-double-slash-comments': true, // Disallow double-slash comments (//...) which are not supported by CSS.
    'no-unknown-animations': null // Disallow unknown animations.
}
