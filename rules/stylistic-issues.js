'use strict'

module.exports = {
    // Color
    'color-hex-case': 'lower', // Specify lowercase or uppercase for hex colors (Autofixable).
    'color-hex-length': 'short', // Specify short or long notation for hex colors (Autofixable).

    // Font family
    'font-family-name-quotes': 'always-where-recommended', // Specify whether or not quotation marks should be used around font family names.

    // Font weight
    'font-weight-notation': 'named-where-possible', // Require numeric or named (where possible) font-weight values.

    // Function
    'function-comma-newline-after': null, // Require a newline or disallow whitespace after the commas of functions.
    'function-comma-newline-before': 'never-multi-line', // Require a newline or disallow whitespace before the commas of functions.
    'function-comma-space-after': 'always', // Require a single space or disallow whitespace after the commas of functions.
    'function-comma-space-before': 'never', // Require a single space or disallow whitespace before the commas of functions.
    'function-max-empty-lines': 0, // Limit the number of adjacent empty lines within functions.
    'function-name-case': 'lower', // Specify lowercase or uppercase for function names.
    'function-parentheses-newline-inside': null, // Require a newline or disallow whitespace on the inside of the parentheses of functions.
    'function-parentheses-space-inside': 'never', // Require a single space or disallow whitespace on the inside of the parentheses of functions.
    'function-url-quotes': 'always', // Require or disallow quotes for urls.
    'function-whitespace-after': 'always', // Require or disallow whitespace after functions.

    // Number
    'number-leading-zero': 'always', // Require or disallow a leading zero for fractional numbers less than 1.
    'number-no-trailing-zeros': true, // Disallow trailing zeros in numbers.

    // String
    'string-quotes': 'single', // Specify single or double quotes around strings.

    // Length
    'length-zero-no-unit': true, // Disallow units for zero lengths.

    // Unit
    'unit-case': 'lower', // Specify lowercase or uppercase for units.

    // Value
    'value-keyword-case': ['lower', {ignoreKeywords: ['dummyValue']}], // Allow dummyValue

    // Value list
    'value-list-comma-newline-after': null, // Require a newline or disallow whitespace after the commas of value lists.
    'value-list-comma-newline-before': 'never-multi-line', // Require a newline or disallow whitespace before the commas of value lists.
    'value-list-comma-space-after': 'always', // Require a single space or disallow whitespace after the commas of value lists.
    'value-list-comma-space-before': 'never', // Require a single space or disallow whitespace before the commas of value lists.
    'value-list-max-empty-lines': 0, // Limit the number of adjacent empty lines within value lists.

    // Custom property
    'custom-property-empty-line-before': ["always", { except: ["after-comment", "after-custom-property", "first-nested"] }], // Require or disallow an empty line before custom properties (Autofixable).

    // Property
    'property-case': 'lower', // Specify lowercase or uppercase for properties.

    // Declaration
    'declaration-bang-space-after': "never", // Require a single space or disallow whitespace after the bang of declarations.
    'declaration-bang-space-before': "always", // Require a single space or disallow whitespace before the bang of declarations.
    'declaration-colon-newline-after': null, // Require a newline or disallow whitespace after the colon of declarations.
    'declaration-colon-space-after': "always", // Require a single space or disallow whitespace after the colon of declarations.
    'declaration-colon-space-before': "never", // Require a single space or disallow whitespace before the colon of declarations.
    'declaration-empty-line-before': ["never", {ignore: ["after-comment", "after-declaration"]}], // Require or disallow an empty line before declarations (Autofixable).

    // Declaration block
    'declaration-block-semicolon-newline-after': "always", // Require a newline or disallow whitespace after the semicolons of declaration blocks.
    'declaration-block-semicolon-newline-before': null, // Require a newline or disallow whitespace before the semicolons of declaration blocks.
    'declaration-block-semicolon-space-after': null, // Require a single space or disallow whitespace after the semicolons of declaration blocks.
    'declaration-block-semicolon-space-before': "never", // Require a single space or disallow whitespace before the semicolons of declaration blocks.
    'declaration-block-trailing-semicolon': "always", // Require or disallow a trailing semicolon within declaration blocks.

    // Block
    'block-closing-brace-empty-line-before': "never", // Require or disallow an empty line before the closing brace of blocks.
    'block-closing-brace-newline-after': "always", // Require a newline or disallow whitespace after the closing brace of blocks.
    'block-closing-brace-newline-before': "always-multi-line", // Require a newline or disallow whitespace before the closing brace of blocks.
    'block-closing-brace-space-after': null, // Require a single space or disallow whitespace after the closing brace of blocks.
    'block-closing-brace-space-before': 'always-single-line', // Require a single space or disallow whitespace before the closing brace of blocks.
    'block-opening-brace-newline-after': "always-multi-line", // Require a newline after the opening brace of blocks.
    'block-opening-brace-newline-before': null, // Require a newline or disallow whitespace before the opening brace of blocks.
    'block-opening-brace-space-after': "always-single-line", // Require a single space or disallow whitespace after the opening brace of blocks.
    'block-opening-brace-space-before': "always", // Require a single space or disallow whitespace before the opening brace of blocks.

    // Selector
    'selector-attribute-brackets-space-inside': "never", // Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.
    'selector-attribute-operator-space-after': "never", // Require a single space or disallow whitespace after operators within attribute selectors.
    'selector-attribute-operator-space-before': "never", // Require a single space or disallow whitespace before operators within attribute selectors.
    'selector-attribute-quotes': "always", // Require or disallow quotes for attribute values.
    'selector-combinator-space-after': "always", // Require a single space or disallow whitespace after the combinators of selectors.
    'selector-combinator-space-before': "always", // Require a single space or disallow whitespace before the combinators of selectors.
    'selector-descendant-combinator-no-non-space': true, // Disallow non-space characters for descendant combinators of selectors.
    'selector-pseudo-class-case': "lower", // Specify lowercase or uppercase for pseudo-class selectors.
    'selector-pseudo-class-parentheses-space-inside': "never", // Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors.
    'selector-pseudo-element-case': "lower", // Specify lowercase or uppercase for pseudo-element selectors.
    'selector-pseudo-element-colon-notation': "double", // Specify single or double colon notation for applicable pseudo-elements.
    'selector-type-case': "lower", // Specify lowercase or uppercase for type selector.

    // Selector list
    'selector-list-comma-newline-after': "always", // Require a newline or disallow whitespace after the commas of selector lists.
    'selector-list-comma-newline-before': null, // Require a newline or disallow whitespace before the commas of selector lists.
    'selector-list-comma-space-after': null, // Require a single space or disallow whitespace after the commas of selector lists.
    'selector-list-comma-space-before': null, // Require a single space or disallow whitespace before the commas of selector lists.

    // Rule
    'rule-empty-line-before': ['always', {except: ['first-nested'], ignore: ['after-comment']}], // Require or disallow an empty line before rules (Autofixable).

    // Media feature
    'media-feature-colon-space-after': "always", // Require a single space or disallow whitespace after the colon in media features.
    'media-feature-colon-space-before': "never", // Require a single space or disallow whitespace before the colon in media features.
    'media-feature-name-case': "lower", // Specify lowercase or uppercase for media feature names.
    'media-feature-parentheses-space-inside': "never", // Require a single space or disallow whitespace on the inside of the parentheses within media features.
    'media-feature-range-operator-space-after': "always", // Require a single space or disallow whitespace after the range operator in media features.
    'media-feature-range-operator-space-before': "always", // Require a single space or disallow whitespace before the range operator in media features.

    // Media query list
    'media-query-list-comma-newline-after': "always-multi-line", // Require a newline or disallow whitespace after the commas of media query lists.
    'media-query-list-comma-newline-before': "never-multi-line", // Require a newline or disallow whitespace before the commas of media query lists.
    'media-query-list-comma-space-after': "always", // Require a single space or disallow whitespace after the commas of media query lists.
    'media-query-list-comma-space-before': "never", // Require a single space or disallow whitespace before the commas of media query lists.

    // At-rule
    'at-rule-empty-line-before': ["always", {except: ["blockless-after-same-name-blockless", "blockless-after-blockless", "first-nested"], ignore: ["after-comment"], ignoreAtRules: ["import"]}], // Require or disallow an empty line before at-rules (Autofixable).
    'at-rule-name-case': "lower", // Specify lowercase or uppercase for at-rules names (Autofixable).
    'at-rule-name-newline-after': null, // Require a newline after at-rule names.
    'at-rule-name-space-after': "always", // Require a single space after at-rule names.
    'at-rule-semicolon-newline-after': "always", // Require a newline after the semicolon of at-rules.
    'at-rule-semicolon-space-before': "never", // Require a single space or disallow whitespace before the semicolons of at rules.

    // Comment
    'comment-empty-line-before': ["never", { except: ["first-nested"], ignore: ["after-comment", "stylelint-commands"] }], // Require or disallow an empty line before comments (Autofixable).
    'comment-whitespace-inside': "always", // Require or disallow whitespace on the inside of comment markers.

    // General / Sheet
    'indentation': [4], // Specify indentation (Autofixable).
    'max-empty-lines': [1, { ignore: ["comments"] }], // Limit the number of adjacent empty lines.
    'max-line-length': null, // Limit the length of a line.
    'no-eol-whitespace': true, // Disallow end-of-line whitespace.
    'no-missing-end-of-source-newline': true, // Disallow missing end-of-source newlines (Autofixable).
}
