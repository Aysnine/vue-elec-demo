module.exports = {
  transpileDependencies: [/\bvue-awesome\b/],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: ['github'],
      },
    },
  },
}
