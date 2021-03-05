exports.pluginImportRulesExtra = {
  "import/no-absolute-path": "error",
  "import/no-useless-path-segments": "error",
  "import/no-deprecated": "error",
  "import/no-extraneous-dependencies": "error",
  "import/no-unassigned-import": "warn",
  "import/no-mutable-exports": "warn",
  "import/no-anonymous-default-export": "error",
  "import/no-amd": "error",
  //// might be too restrictive:
  // "import/no-commonjs": "warn",
  // "import/no-dynamic-require": "warn", // prevent abusing dynamic require
  //// don't work properly:
  // "import/unambiguous": "error",
  // "import/no-unused-modules": ["warn", {"missingExports": true}],
}

exports.pluginImportTypeScriptRulesExtra = {
  // Buggy on TypeScript:
  "import/no-unresolved": "off",
  "import/named": "off",
  "import/namespace": "off",
}

exports.pluginImportSettings = {
  "import/core-modules": ["atom", "electron"],
  // support TypeScript and Coffee importing
  "import/extensions": [".ts", ".tsx", ".d.ts", ".js", ".jsx", ".coffee"],
  "import/external-module-folders": ["node_modules", "node_modules/@types"],
  "import/parsers": {
    "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
  },
  "import/resolver": {
    node: {
      extensions: [".ts", ".tsx", ".d.ts", ".js", ".jsx", ".coffee"],
    },
  },
}
