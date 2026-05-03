import type { Linter } from "eslint"
// eslint-disable-next-line @typescript-eslint/no-require-imports
import htmlPlugin = require("eslint-plugin-html")

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
  plugins: {
    html: htmlPlugin,
  },
}
