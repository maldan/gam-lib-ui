<template>
  <div @click="change" :class="[$style.checkbox, modelValue ? $style.selected : null]">
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits(['update:modelValue', 'change']);

function change() {
  const v = !props.modelValue;
  emit('update:modelValue', v);
  emit('change', v);
}
</script>

<style module lang="scss">
@import '../../vars';

.checkbox {
  background-color: $color-white-010;
  width: 32px;
  height: 16px;
  position: relative;
  border-radius: 20px;
  cursor: pointer;

  > div {
    background-color: $color-white-020;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 16px;
    height: 16px;
    border-radius: 16px;
    transition: left 0.2s ease, right 0.2s ease-in;
  }

  &.selected {
    background-color: $color-main;

    > div {
      background-color: #fff;
      left: calc(100% - 16px);
      right: 0;
      transition: left 0.2s ease-in, right 0.2s ease;
    }
  }
}
</style>
