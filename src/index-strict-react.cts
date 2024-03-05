import nonStrictConfig from "./index-react.cjs"

// remove only-warn from javascript
if (
  nonStrictConfig.plugins !== undefined &&
  nonStrictConfig.plugins[nonStrictConfig.plugins.length - 1] === "only-warn"
) {
  nonStrictConfig.plugins.pop()
}

// remove only-warn from overrides
nonStrictConfig.overrides?.forEach((overrides) => {
  if (overrides.plugins !== undefined && overrides.plugins[overrides.plugins.length - 1] === "only-warn") {
    overrides.plugins.pop()
  }
})

export default nonStrictConfig
