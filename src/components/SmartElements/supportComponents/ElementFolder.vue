<template>
  <div :class="$style.wrapper">
    <div
      :class="$style.inner"
      @click="itemClick"
      @dragstart="itemDragStart"
      draggable
    >
      <NameItem
        :name="meta.name"
        :level="level"
        :arrow="collapse"
        :pending="pending"
      >
        <template #icon>
          <v-icon :name="collapse ? 'folder' : 'folder-open'"></v-icon>
        </template>
      </NameItem>
    </div>
    <slot name="children"></slot>
  </div>
</template>

<script>
import NameItem from '../NameItem'

export default {
  props: {
    meta: {
      type: Object,
      required: true,
    },
    level: {
      type: Number,
      default: 0,
    },
    collapse: {
      type: Boolean,
    },
    pending: {
      type: Boolean,
    },
  },
  methods: {
    itemClick(event) {
      this.$emit('itemClick', { event, meta: this.meta })
    },
    itemDragStart(event) {
      this.$emit('itemDragStart', { event, meta: this.meta })
    },
  },
  components: {
    NameItem,
  },
}
</script>

<style lang="less" module src="../styles.less"></style>
