<template>
  <component
    :class="$style.wrapper"
    :is="componentId"
    :meta="meta"
    :level="level"
    :collapse="collapse"
    :pending="pending"
    @itemClick="itemClick"
    @itemDrag="itemDrag"
  >
    <template #children>
      <div v-if="children" :class="$style.children" v-show="!collapse">
        <SmartElement
          v-for="item in children"
          :key="item.id"
          :meta="item"
          :level="level + 1"
          :dragGhost="dragGhost"
        />
      </div>
    </template>
  </component>
</template>

<script>
import ElementFile from './supportComponents/ElementFile'
import ElementFolder from './supportComponents/ElementFolder'
import ElementUnknown from './supportComponents/ElementUnknown'
import { dataSort } from './utils'

export default {
  name: 'SmartElement',
  props: {
    meta: {
      type: Object,
      required: true,
    },
    level: {
      type: Number,
      default: 0,
    },
    dragGhost: {
      type: HTMLDivElement,
    },
  },
  data() {
    return {
      collapse: this.meta.children ? true : undefined,
      pending: undefined,
      asyncChildren: [],
    }
  },
  computed: {
    componentId() {
      return (
        {
          'FILE': 'ElementFile',
          'FOLDER': 'ElementFolder',
          'UNKNOWN': 'ElementUnknown',
        }[this.meta.type || 'UNKNOWN'] || 'ElementUnknown'
      )
    },
    children() {
      const children =
        typeof this.meta.children === 'function'
          ? this.asyncChildren
          : this.meta.children
      return this.meta.children ? dataSort(children) : this.meta.children
    },
  },
  watch: {
    collapse: {
      immediate: true,
      handler(val) {
        if (!val && typeof this.meta.children === 'function' && !this.pending) {
          this.pending = true
          // this.asyncChildren = []
          this.meta
            .children()
            .then((children) => {
              this.asyncChildren = children
            })
            .finally(() => {
              this.pending = false
            })
        }
      },
    },
  },
  methods: {
    itemClick() {
      if (this.meta.children) {
        this.collapse = !this.collapse
      }
    },
    itemDrag({ event, meta }) {
      this.dragGhost.innerText = meta.name
      event.dataTransfer.setDragImage('123', 0, 0)
    },
  },
  components: {
    ElementFile,
    ElementFolder,
    ElementUnknown,
  },
}
</script>

<style lang="less" module src="./styles.less"></style>
