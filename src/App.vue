<template>
  <div id="app">
    <router-view />
    <div id="draggit"></div>
  </div>
</template>

<style lang="less">
body {
  color: #505050;
  font: 12px -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fa-icon {
  width: auto;
  height: 1.2em;
  max-width: 100%;
  max-height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
