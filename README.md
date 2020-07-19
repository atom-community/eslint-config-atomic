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
