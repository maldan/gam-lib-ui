<template>
  <div :class="$style.container" :style="{ gridTemplateColumns: `repeat(${list.length}, 1fr)` }">
    <button
      @click="$router.push(x.url)"
      v-for="x in list"
      :class="[$style.button, $route.path === x.url ? $style.selected : '']"
      :key="x.url"
    >
      {{ x.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  list: { url: string; label: string }[];
}>();
</script>

<style module lang="scss">
@import '../../vars';

.container {
  display: grid;
  // grid-template-columns: 1fr;
  gap: $space-1;

  .button {
    padding: $space-1 $space-2;
    height: 24px;
    background: $color-foreground-elevation-1;
    border-radius: $radius-0;
    color: $color-white-040;
    line-height: 1rem;
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    border: 0;
    cursor: pointer;

    &.selected {
      background-color: $color-blue;
      color: #fff;
    }
  }
}
</style>
