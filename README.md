# stylelint-config-foxsports
Sharable stylelint config for fox sports projects

Heavily opinionated for usage in styled-components.

### Example usage

Create a file called `stylelint.config.js` in your project's root. 

```
module.exports = {
    processors: ['stylelint-processor-styled-components'],
    extends: [
        'stylelint-config-foxsports',
        'stylelint-config-styled-components',
    ],
    syntax: 'scss',
    rules: {
        // Add any per project customisations here
    },
};
```
