<template>
  <div :class="$style.container">
    <div :class="$style.inputContainer">
      <input
        :class="$style.input"
        type="text"
        :value="selectedValue"
        @click="isShowList = !isShowList"
        :placeholder="placeholder"
        @blur="blur"
      />
      <IconArrowDownSmall style="position: absolute; right: 5px; top: 5px" />
    </div>
    <div v-if="isShowList" :class="$style.list">
      <div
        @click="
          click(x.value);
          isShowList = false;
        "
        v-for="x in list"
        :key="x.value"
      >
        {{ x.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { IconArrowDownSmall } from "@/gam-lib-ui/vue/component/icon";

const props = defineProps<{
  modelValue: unknown;
  list: { label: string; value: unknown }[];
  placeholder?: string;
}>();

const isShowList = ref(false);

const emit = defineEmits(["update:modelValue"]);

const selectedValue = computed(
  () => props.list.filter((x: any) => x.value === props.modelValue)?.[0]?.label
);

function click(v: unknown) {
  console.log(v);
  emit("update:modelValue", v);
}

function blur() {
  setTimeout(() => {
    isShowList.value = false;
  }, 200);
}
</script>

<style module lang="scss">
@import "../../vars";

.container {
  height: $space-4;
  width: 100%;
  position: relative;
  z-index: 10;

  .inputContainer {
    display: flex;

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
      cursor: pointer;

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
    // padding: $space-1;
    width: 100%;
    border: 1px solid $color-white-020;

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
