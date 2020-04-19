<template>
  <div>
    <SmartElement
      v-for="item in children"
      :key="item.id"
      :meta="item"
      :dragGhost="$refs.dragGhost"
    />
    <div>
      <div ref="dragGhost"></div>
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
  computed: {
    children() {
      return this.sortRoot ? dataSort(this.data) : this.data
    },
  },
}
</script>
