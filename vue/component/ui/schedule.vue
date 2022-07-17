<template>
  <div :class="$style.schedule"></div>
</template>

<script setup lang="ts">
defineProps<{
  list: string[];
  modelValue: string;
}>();
</script>

<style module lang="scss">
@import "../../vars";

.schedule {
  display: flex;
}
</style>
