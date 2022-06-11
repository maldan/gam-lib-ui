<template>
  <button :class="$style.button" v-text="text"></button>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<style module lang="scss">
@import "../../vars";

.button {
  background: $color-main;
  color: #fff;
  font-style: normal;
  font-weight: 400;
  padding-left: $space-3;
  padding-right: $space-3;
  box-shadow: inset 0 0 0 1px $color-white-010;

  &:hover {
    background-color: darken($color-main, 10%);
  }
}
</style>
