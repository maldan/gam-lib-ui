<template>
  <div :class="$style.container">
    <div @click="isShowList = !isShowList" :class="$style.inputContainer">
      <input
        :class="$style.input"
        type="text"
        :title="placeholder"
        :placeholder="placeholder"
        @blur="blur"
        v-model="filter"
      />
      <IconArrowDownSmall style="position: absolute; right: 8px; top: 8px" />
    </div>
    <div v-if="isShowList" :class="$style.list">
      <div
        @click="
          click(x.value, x.label);
          isShowList = false;
        "
        v-for="x in list.filter((y) => y.label.match(filter))"
        :key="x.value"
      >
        {{ x.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { IconArrowDownSmall } from '@/gam-lib-ui/vue/component/icon';

const props = defineProps<{
  modelValue: unknown;
  list: { label: string; value: unknown }[];
  placeholder?: string;
}>();

const isShowList = ref(false);

const emit = defineEmits(['update:modelValue', 'change']);

const selectedValue = computed(() => props.list.filter((x: any) => x.value === props.modelValue)?.[0]?.label);
const filter = ref(selectedValue.value);

function click(v: unknown, label: string) {
  filter.value = label;
  emit('update:modelValue', v);
  emit('change', v);
}

function blur() {
  setTimeout(() => {
    isShowList.value = false;
  }, 200);
}
</script>

<style module lang="scss">
@import '../../vars';

.container {
  // height: $space-4;
  width: 100%;
  position: relative;
  // z-index: 1;

  .inputContainer {
    display: flex;
    cursor: pointer;

    .input {
      appearance: none;
      color: inherit;
      line-height: 1rem;
      padding: $space-1 $space-2;
      width: 100%;
      height: $space-4;
      min-height: 24px;
      outline: none;
      background: $color-foreground-elevation-1;
      border-radius: $radius-1;
      border: 1px solid transparent;
      box-sizing: border-box;

      &:focus {
        box-shadow: inset 0 0 0 1px $color-blue;
      }
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 30px;
    width: 100%;
    border: 1px solid $color-white-020;
    z-index: 10;
    max-height: 240px;
    overflow-y: auto;
    background: $color-ui-bg;

    > div {
      cursor: pointer;
      padding: $space-2;
      background: $color-ui-bg;
      border-bottom: 1px solid $color-white-020;
      flex: 1;

      &:hover {
        color: $color-white-040;
      }

      &:last-child {
        border-bottom: 0;
      }
    }
  }
}
</style>
