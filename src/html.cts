import type { Linter } from "eslint"
import * as htmlPlugin from "eslint-plugin-html"

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
