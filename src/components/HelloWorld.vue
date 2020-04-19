<template>
  <div>
    <SmartElements :data="list" />
  </div>
</template>

<script>
import SmartElements from './SmartElements'

const it = (level = 1) => {
  return [
    {
      id: '0',
      name: '普通文件测试文件0 hello',
      type: 'FOLDER',
      children: level > 20 ? [] : it(level + 1),
    },
    {
      id: '1',
      name: '普通文件测试文件1',
      type: 'FOLDER',
      children:
        level > 2
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
      id: '2',
      name: '普通文件测试文件2',
      type: 'FILE',
    },
    {
      id: '3',
      name: '普通文件测试文件3',
      type: 'X',
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
