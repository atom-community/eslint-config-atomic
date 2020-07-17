# eslint-config-atomic

This includes the Eslint configuration used in atom-ide-community.

## Installation
```
npm install --save-dev eslint-config-atomic
```

You should also install the peer dependencies:
```
npm install -save-dev "eslint"
```

## Usage
Create a `.eslintrc.json` file at the root of the project with the following content:
```json
{
    "extends": "eslint-config-atomic",
    "ignorePatterns": ["dist/", "node_modules/"]
}
```
`ignorePatterns` is the Eslint ignore paths.

## Behind the scenes

This configuration lints JavaScript, TypeScript, CoffeeScript, JSON, and YAML.
