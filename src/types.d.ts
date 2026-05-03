// Eslint plugins

declare module "eslint-plugin-n" {
  import type { ESLint } from "eslint"
  const plugin: ESLint.Plugin
  export = plugin
}

declare module "eslint-plugin-import" {
  import type { Linter } from "eslint"
  const plugin: {
    rules: Record<string, Linter.RuleEntry>
    configs: {
      recommended: Linter.LegacyConfig
      errors: Linter.LegacyConfig
      warnings: Linter.LegacyConfig
      stage0: Linter.LegacyConfig
      react: Linter.LegacyConfig
      "react-native": Linter.LegacyConfig
      electron: Linter.LegacyConfig
      typescript: Linter.LegacyConfig
    }
    flatConfigs: {
      recommended: Linter.Config
      errors: Linter.Config
      warnings: Linter.Config
      react: Linter.Config
      "react-native": Linter.Config
      electron: Linter.Config
      typescript: Linter.Config
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
  import type { Linter } from "eslint"
  const plugin: {
    rules: Record<string, Linter.RuleEntry>
    configs: {
      recommended: Linter.Config
      'recommended-with-comments': Linter.Config,
      'recommended-legacy': Linter.LegacyConfig,
      'recommended-with-comments-legacy': Linter.LegacyConfig,
    }
  }
  export = plugin
}

declare module "eslint-plugin-only-warn" {
  import type { ESLint } from "eslint"
  const plugin: ESLint.Plugin
  export = plugin
}

// Eslint parsers

declare module "eslint-plugin-coffee/parser" {
  import type { Linter } from "eslint"
  const parser: Linter.Parser
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

declare module "astro-eslint-parser" {
  import type { Linter } from "eslint"
  const parser: Linter.Parser
  export = parser
}
