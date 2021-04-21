# eslint-config-atomic

This includes the Eslint configuration used in atom-ide-community.

[![CI](https://github.com/atom-community/eslint-config-atomic/actions/workflows/CI.yml/badge.svg)](https://github.com/atom-community/eslint-config-atomic/actions/workflows/CI.yml)

## Installation

```
npm install --save-dev eslint-config-atomic
```

<details>
<summary> You should have the peer dependencies. </summary>

If using `npm`, the bundled Eslint, TypeScript, Babel, etc is hoisted automatically.

If using `pnpm`, either add the following to your `.npmrc` to hoist the prettier bundled with the config

```
public-hoist-pattern[]=*
```

Or install these yourself in your `devDependencies`.

```
pnpm install -save-dev eslint typescript @babel/core
```

</details>

## Usage

Create a `.eslintrc.json` file at the root of the project with the following content:

```json
{
  "extends": "eslint-config-atomic",
  "ignorePatterns": ["dist/", "node_modules/"]
}
```

`ignorePatterns` is the Eslint ignore paths.

Add a lint script to your `package.json`:

```json
"lint": "eslint . --fix"
```

### Options

- **strict**:
  You can instead use the `strict` version which throws errors instead of warning:

```json
{
  "extends": "eslint-config-atomic/strict",
  "ignorePatterns": ["dist/", "node_modules/"]
}
```

- **react**:
  It supports react using `eslint-plugin-react`.

```json
{
  "extends": "eslint-config-atomic/react",
  "ignorePatterns": ["dist/", "node_modules/"]
}
```

- **strict-react**:
  Same as the react version but it is strict:

```json
{
  "extends": "eslint-config-atomic/strict-react",
  "ignorePatterns": ["dist/", "node_modules/"]
}
```

## Behind the scenes

This configuration lints JavaScript, TypeScript, CoffeeScript, JSON, and YAML.

The list of used plugins and dependencies:

```
  "@typescript-eslint/eslint-plugin": "^4.14.2",
  "@typescript-eslint/parser": "^4.14.2",
  "eslint-plugin-coffee": "^0.1.13",
  "eslint-plugin-import": "^2.22.1",
  "eslint-plugin-json": "^2.1.2",
  "eslint-plugin-node": "^11.1.0",
  "eslint-plugin-only-warn": "^1.0.2",
  "eslint-plugin-optimize-regex": "^1.2.0",
  "eslint-config-prettier": "^7.2.0",
  "eslint-plugin-react": "^7.22.0",
  "eslint-plugin-yaml": "^0.3.0",
  "prettier": "^2",
  "typescript": "^4",
  "coffeescript": "^1",
  "@babel/core": "^7",
  "@babel/eslint-parser": "^7.13.14",
```
