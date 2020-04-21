<template>
  <div>
    <SmartElements :data="list" />
  </div>
</template>

<script>
import SmartElements from './SmartElements'

let id = 0
const it = (level = 1) => {
  return [
    {
      id: id++,
      name: '普通文件测试文件0 hello',
      children: level > 20 ? [] : it(level + 1),
    },
    {
      id: id++,
      name: '普通文件测试文件1',
      children:
        level > 5
          ? []
          : () => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve(it(level + 1))
                }, 1000)
              })
            },
    },
    {
      id: id++,
      name: '普通文件测试文件2',
      children:
        level > 5
          ? []
          : () => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve(it(level + 1))
                }, 1000)
              })
            },
    },
    {
      id: id++,
      name: '普通文件测试文件3',
    },
  ]
}

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      list: it(),
    }
  },
  components: {
    SmartElements,
  },
}
</script>
