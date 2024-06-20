// Eslint plugins

declare module "@eslint/js" {
  import * as all from "@types/eslint__js"
  export = all
}

declare module "eslint-plugin-only-warn" {
  import type { ESLint } from "eslint"
  const plugin: ESLint.Plugin
  export = plugin
}

declare module "eslint-plugin-node" {
  import type { ESLint } from "eslint"
  const plugin: ESLint.Plugin
  export = plugin
}

declare module "eslint-plugin-import" {
  import type { ESLint, Linter } from "eslint"
  const plugin: ESLint.Plugin & {
    configs: {
      recommended: Linter.Config
    }
  }
  export = plugin
}

declare module "eslint-plugin-coffee" {
  import type { ESLint } from "eslint"
  const plugin: ESLint.Plugin
  export = plugin
}

declare module "eslint-plugin-html" {
  import type { ESLint } from "eslint"
  const plugin: ESLint.Plugin
  export = plugin
}

// declare module "eslint-plugin-prettier" {
//   import type { ESLint } from "eslint"
//   const plugin: ESLint.Plugin
//   export = plugin
// }

declare module "eslint-plugin-json" {
  import type { ESLint } from "eslint"
  const plugin: ESLint.Plugin
  export = plugin
}

// Eslint parsers

declare module "@babel/eslint-parser" {
  import type { Linter } from "eslint"
  const parser: Linter.FlatConfigParserModule
  export = parser
}

declare module "eslint-plugin-coffee/parser" {
  import type { Linter } from "eslint"
  const parser: Linter.FlatConfigParserModule
  export = parser
}

// Babel plugins

declare module "@babel/plugin-syntax-flow" {
  import type { PluginObj } from "@babel/core"
  const plugin: PluginObj
  export = plugin
}

declare module "@babel/plugin-syntax-jsx" {
  import type { PluginObj } from "@babel/core"
  const plugin: PluginObj
  export = plugin
}
