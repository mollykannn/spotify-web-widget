module.exports = {
  root: true,
  extends: 'stylelint-config-recommended-vue',
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ["*.vue", "**/*.vue"],
      customSyntax: 'postcss-html',
    },
  ],
}
