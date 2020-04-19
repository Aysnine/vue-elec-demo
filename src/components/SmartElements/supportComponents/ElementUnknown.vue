<template>
  <div :class="$style.wrapper">
    <div
      :class="$style.inner"
      @click="itemClick"
      draggable
      @dragstart="itemDrag"
    >
      <NameItem
        :name="meta.name"
        :level="level"
        :arrow="collapse"
        :pending="pending"
      >
        <b slot="icon">❓</b>
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
    itemClick() {
      this.$emit('itemClick')
    },
    itemDrag(event) {
      this.$emit('itemDrag', { event, meta: this.meta })
    },
  },
  components: {
    NameItem,
  },
}
</script>

<style lang="less" module src="../styles.less"></style>
