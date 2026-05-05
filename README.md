# eslint-config-atomic

ESLint configuration used in atom-ide-community. Supports ESLint 9 flat config.

Lints JavaScript, TypeScript, JSON, HTML, YAML, and Astro files out of the box.

[![CI](https://github.com/atom-community/eslint-config-atomic/actions/workflows/CI.yml/badge.svg)](https://github.com/atom-community/eslint-config-atomic/actions/workflows/CI.yml)

## Installation

```
npm install --save-dev eslint-config-atomic
```

[eslint-config-atomic@^2](https://www.npmjs.com/package/eslint-config-atomic) -> Eslint 9 and higher
[eslint-config-atomic@^1](https://www.npmjs.com/package/eslint-config-atomic/v/1.22.1) -> Eslint 8 and lower

<details>
<summary>Peer dependencies (pnpm users)</summary>

If using `pnpm`, either add the following to your `.npmrc` to hoist bundled dependencies automatically:

```
public-hoist-pattern[]=*
```

Or install them explicitly:

```
pnpm install --save-dev eslint typescript @babel/core
```

</details>

## Usage

Create an `eslint.config.cjs` at the root of your project:

```js
const config = require("eslint-config-atomic")

module.exports = [{ ignores: ["dist/**", "node_modules/**"] }, ...config]
```

Add a lint script to your `package.json`:

```json
"lint": "eslint --fix --cache .",
"test.lint": "eslint --cache ."
```

### Variants

All variants are non-strict by default — lint violations are reported as **warnings** (via `eslint-plugin-only-warn`). Use the `strict-*` variants to report them as **errors**.

| Entry point                         | Description                                        |
| ----------------------------------- | -------------------------------------------------- |
| `eslint-config-atomic`              | Base config (JS + TS + JSON + HTML + YAML + Astro) |
| `eslint-config-atomic/strict`       | Same as base, but errors instead of warnings       |
| `eslint-config-atomic/react`        | Base + React (`eslint-plugin-react`)               |
| `eslint-config-atomic/strict-react` | React, strict                                      |
| `eslint-config-atomic/solid`        | Base + SolidJS (`eslint-plugin-solid`)             |
| `eslint-config-atomic/strict-solid` | SolidJS, strict                                    |

Example using the React variant:

```js
const config = require("eslint-config-atomic/react")

module.exports = [{ ignores: ["dist/**", "node_modules/**"] }, ...config]
```

## Behind the scenes

Plugins and parsers bundled with this config:

| Plugin / Parser             | Purpose                                               |
| --------------------------- | ----------------------------------------------------- |
| `typescript-eslint`         | TypeScript linting                                    |
| `@typescript-eslint/parser` | TypeScript parser                                     |
| `@babel/eslint-parser`      | JavaScript (Flow, JSX) parser                         |
| `eslint-plugin-import`      | Import/export linting                                 |
| `eslint-plugin-n`           | Node.js rules                                         |
| `eslint-plugin-only-warn`   | Downgrades errors to warnings (non-strict configs)    |
| `eslint-plugin-react`       | React rules (react/strict-react variants)             |
| `eslint-plugin-solid`       | SolidJS rules (solid/strict-solid variants)           |
| `eslint-plugin-json`        | JSON linting                                          |
| `eslint-plugin-html`        | HTML linting                                          |
| `eslint-plugin-yaml`        | YAML linting                                          |
| `eslint-plugin-astro`       | Astro file linting                                    |
| `eslint-config-prettier`    | Disables formatting rules that conflict with Prettier |
