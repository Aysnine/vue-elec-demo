<template>
  <div :class="$style.wrapper">
    <div
      :class="$style.inner"
      @click="itemClick"
      @dragstart="itemDragStart"
      draggable
    >
      <NameItem :name="meta.name" :level="level">
        <template #icon>
          <v-icon name="regular/file" color="#90a4ae"></v-icon>
        </template>
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
