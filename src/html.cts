import type { Linter } from "eslint"

// TODO: eslint-plugin-html@8 uses internal ESLint API patching via monkey-patching
// `Linter.prototype._verifyWithFlatConfigArrayAndWithoutProcessors`. In ESLint 9.23+,
// the second parameter of that method is a FlatConfigArray (not a plain config object),
// so `providedConfig.plugins` is undefined and the plugin silently falls through —
// HTML files are then parsed as JavaScript, resulting in parse errors.
// Re-enable when eslint-plugin-html ships a proper ESLint 9 flat-config processor.
export const htmlConfig: Linter.Config = {
  files: [
    "**/*.erb",
    "**/*.handlebars",
    "**/*.hbs",
    "**/*.htm",
    "**/*.html",
    "**/*.mustache",
    "**/*.nunjucks",
    "**/*.php",
    "**/*.tag",
    "**/*.twig",
    "**/*.we",
    "**/*.xhtml",
    "**/*.xml",
  ],
  // plugins: { html: htmlPlugin },  // disabled — see TODO above
}
