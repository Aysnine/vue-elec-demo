<template>
  <div :title="title || name" :class="$style.nameItem">
    <span v-for="i in level" :key="i" :class="$style.indent"></span>
    <span :class="$style.arrow">
      <v-icon
        v-if="arrow !== undefined"
        :name="arrow ? 'caret-right' : 'caret-down'"
      ></v-icon>
    </span>
    <span v-if="pending" :class="$style.icon">
      <v-icon name="spinner" pulse></v-icon>
    </span>
    <span v-else :class="$style.icon">
      <slot name="icon" />
    </span>
    <span :class="$style.name">{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      require: true,
    },
    level: {
      type: Number,
      default: 0,
    },
    arrow: {
      type: Boolean,
      default: undefined,
    },
    title: {
      type: String,
      default: undefined,
    },
    pending: {
      type: Boolean,
    },
  },
}
</script>

<style lang="less" module src="./styles.less"></style>
