import { Linter } from "eslint"

export const htmlConfig: Linter.ConfigOverride<Linter.RulesRecord> = {
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
  plugins: ["html"],
}
