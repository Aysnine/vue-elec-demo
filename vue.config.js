module.exports = {
  transpileDependencies: [/\bvue-awesome\b/],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // extends: null,
        files: ['dist_electron/**/*'],
      },
    },
  },
}
