<template>
  <component
    :class="$style.wrapper"
    :is="componentId"
    :meta="meta"
    :level="level"
    :collapse="collapse"
    :pending="pending"
    @itemClick="itemSelfClick"
    @itemDragStart="itemDragStart"
    :data-item-id="meta.id"
  >
    <template #children>
      <div v-if="children" :class="$style.children" v-show="!collapse">
        <SmartElement
          v-for="item in children"
          :key="item.id"
          :meta="item"
          :level="level + 1"
          @itemClick="itemClick"
          @itemDragStart="itemDragStart"
        />
      </div>
    </template>
  </component>
</template>

<script>
import ElementFile from './supportComponents/ElementFile'
import ElementFolder from './supportComponents/ElementFolder'
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
      return this.meta.children ? 'ElementFolder' : 'ElementFile'
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
    itemSelfClick(data) {
      if (this.meta.children) {
        this.collapse = !this.collapse
      }
      this.itemClick(data)
    },
    itemClick(data) {
      this.$emit('itemClick', data)
    },
    itemDragStart(data) {
      this.$emit('itemDragStart', data)
    },
  },
  components: {
    ElementFile,
    ElementFolder,
  },
}
</script>

<style lang="less" module src="./styles.less"></style>
