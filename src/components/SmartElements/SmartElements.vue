<template>
  <div>
    <SmartElement
      v-for="item in children"
      :key="item.id"
      :meta="item"
      @itemClick="itemClick"
      @itemDragStart="itemDragStart"
    />
    <div>
      <div ref="dragGhost" :class="$style.dragGhost"></div>
    </div>
  </div>
</template>

<script>
import { dataSort } from './utils'

export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    sortRoot: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      selected: [],
    }
  },
  computed: {
    children() {
      return this.sortRoot ? dataSort(this.data) : this.data
    },
  },
  methods: {
    itemClick(data) {
      this.selected = [data.meta.id]
    },
    itemDragStart(data) {
      this.$refs.dragGhost.innerText = data.meta.name
      event.dataTransfer.setDragImage(this.$refs.dragGhost, 0, 0)
    },
  },
}
</script>

<style lang="less" module>
.dragGhost {
  position: absolute;
  left: -100%;
  top: -100%;
}
</style>
