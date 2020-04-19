<template>
  <div :class="$style.wrapper">
    <div
      :class="$style.inner"
      @click="itemClick"
      draggable
      @dragstart="itemDrag"
    >
      <NameItem :name="meta.name" :level="level">
        <b slot="icon">📄</b>
      </NameItem>
    </div>
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
