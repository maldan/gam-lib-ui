<template>
  <div :class="$style.container">
    <!-- <input
      :class="$style.input"
      type="file"
      :title="placeholder"
      :value="modelValue"
      @input="update"
      :placeholder="placeholder"
    /> -->
    <input
      @change="onFileSelected"
      ref="inputFile"
      type="file"
      style="position: absolute; left: -10000px; width: 0; height: 0"
    />
    <div :class="$style.input">
      <div style="margin-right: 10px">{{ prettyBytes(selectedFile?.size || 0) }}</div>
      <Button @click="x" color="gray" style="margin-left: auto">{{ title || 'Select file...' }}</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/gam-lib-ui/vue/component/ui/index';
import { ref } from 'vue';
import prettyBytes from 'pretty-bytes';

defineProps<{
  modelValue: File;
  title?: string;
  placeholder?: string;
}>();

const emit = defineEmits(['update:modelValue']);
const inputFile = ref<HTMLInputElement>();
const selectedFile = ref<File | undefined>(undefined);

function update(e: Event) {
  emit('update:modelValue', Number((e.target as HTMLInputElement).value));
}

function x() {
  inputFile.value?.click();
}

function onFileSelected(e: any) {
  selectedFile.value = e.target.files[0];
  emit('update:modelValue', selectedFile.value);
}
</script>

<style module lang="scss">
@import '../../vars';

.container {
  height: $space-4;
  width: 100%;

  .input {
    appearance: none;
    color: inherit;
    line-height: 1rem;
    padding: $space-1 $space-2;
    width: 100%;
    height: 100%;
    min-height: 24px;
    outline: none;
    background: $color-foreground-elevation-1;
    border-radius: $radius-1;
    border: 1px solid transparent;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    &:focus {
      box-shadow: inset 0 0 0 1px $color-blue;
    }
  }
}
</style>
