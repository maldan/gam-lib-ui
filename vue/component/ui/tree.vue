<template>
  <div :class="$style.tree">
    <div :class="$style.row" v-for="(v, k) in data" :key="k">
      <div :class="$style.info">
        <div
          style="display: flex; align-items: center; justify-content: center"
        >
          <IconArrowRightSmall
            v-if="!showTree[k]"
            :clickable="true"
            style="position: relative; top: 2px"
            @click="showTree[k] = !showTree[k]"
          />
          <IconArrowDownSmall
            v-if="showTree[k]"
            :clickable="true"
            style="position: relative; top: 2px"
            @click="showTree[k] = !showTree[k]"
          />
        </div>

        <div :class="$style.key">{{ k }}</div>
        <div :class="$style.type">
          ({{ Array.isArray(v) ? "array" : typeof v }})
        </div>
      </div>

      <div v-if="showTree[k]" :class="$style.value">
        <tree v-if="isObject(v)" :data="v" />
        <Input
          v-else-if="typeof v === 'string'"
          :placeholder="k"
          v-model="data[k]"
        />
        <InputNumber
          v-else-if="typeof v === 'number'"
          :placeholder="k"
          v-model="data[k]"
        />
        <Checkbox
          v-else-if="typeof v === 'boolean'"
          :placeholder="k"
          v-model="data[k]"
        />
        <div v-else>{{ format(v) }}</div>
      </div>
    </div>

    <div
      style="display: grid; grid-template-columns: 120px 120px; gap: 10px"
      v-if="isArray(data)"
    >
      <Select placeholder="Type..." :list="typeList" v-model="selectedType" />
      <Button @click="pushArray(data)" color="gray" style="margin-top: 5px"
        >Push</Button
      >
    </div>
    <div
      style="display: grid; grid-template-columns: 120px 120px 120px; gap: 10px"
      v-else-if="isObject(data)"
    >
      <Input placeholder="Key..." v-model="keyName" />
      <Select placeholder="Type..." :list="typeList" v-model="selectedType" />
      <Button @click="createKeyValue(data)" color="gray" style="margin-top: 5px"
        >Add</Button
      >
    </div>

    <!-- <div>
      <div :class="$style.row" v-for="(v, k) in data" :key="k">
        <div :class="$style.key">{{ k }}</div>
        <div v-if="isObject(v)" :class="$style.value"><tree :data="v" /></div>
        <div v-else-if="typeof v === 'string'" :class="$style.value">
          <Input v-model="data[k]" />
        </div>
        <div v-else-if="typeof v === 'number'" :class="$style.value">
          <InputNumber v-model="data[k]" />
        </div>
        <div v-else :class="$style.value">{{ format(v) }}</div>
      </div>
    </div>
    <Button
      v-if="isArray(data)"
      @click="pushArray(data)"
      color="gray"
      style="margin-top: 5px"
      >Push</Button
    >
    <Button
      v-else-if="isObject(data)"
      @click="pushObject(data)"
      color="gray"
      style="margin-top: 5px"
      >Add</Button
    > -->
  </div>
</template>

<script setup lang="ts">
import { computed, h, onMounted, ref } from "vue";
import _ from "lodash";
import dayjs from "dayjs";
import {
  Button,
  Input,
  InputNumber,
  Select,
  Checkbox,
} from "@/gam-lib-ui/vue/component/ui";
import {
  IconArrowDownSmall,
  IconCircleFilled,
  IconPlus,
  IconPencil,
  IconArrowRightSmall,
} from "@/gam-lib-ui/vue/component/icon";

const props = defineProps<{
  data: any;
}>();

const isObject = (x: any) => typeof x === "object";
const isArray = (x: any) => Array.isArray(x);
const isTree = (x: any) => typeof x === "object";
const typeList = [
  { label: "string", value: "string" },
  { label: "number", value: "number" },
  { label: "array", value: "array" },
  { label: "object", value: "object" },
  { label: "boolean", value: "boolean" },
];
const keyName = ref("");
const selectedType = ref("");
const showTree = ref<Record<string, any>>({});

// Hooks
onMounted(() => {
  for (const key in props.data) {
    showTree.value[key] = false;
  }
});

// Methods
const format = (x: any) => {
  if (typeof x === "string") return `"${x}"`;
  return x;
};

const pushArray = (x: any[]) => {
  if (selectedType.value === "string") x.push("");
  if (selectedType.value === "number") x.push(0);
  if (selectedType.value === "array") x.push([]);
  if (selectedType.value === "object") x.push({});
  if (selectedType.value === "boolean") x.push(false);
};
const createKeyValue = (x: any) => {
  if (selectedType.value === "string") x[keyName.value] = "";
  if (selectedType.value === "number") x[keyName.value] = 0;
  if (selectedType.value === "array") x[keyName.value] = [];
  if (selectedType.value === "object") x[keyName.value] = {};
  if (selectedType.value === "boolean") x[keyName.value] = false;
  console.log(x);
};
</script>

<style module lang="scss">
@import "../../vars";

.tree {
  display: flex;
  flex-direction: column;
  user-select: none;

  .row {
    display: flex;
    flex-direction: column;
    padding: 5px;

    .info {
      display: grid;
      grid-template-columns: 16px auto 1fr;
      gap: 10px;

      .type {
        color: $color-white-040;
      }
    }

    .value {
      display: grid;
      grid-template-columns: 1fr;
      padding-left: 20px;
      position: relative;
      margin-top: 10px;

      &::before {
        content: "|";
        position: absolute;
        left: 7px;
        top: -5px;
      }

      &::after {
        content: "_";
        position: absolute;
        left: 9px;
        top: -4px;
      }
    }
  }
}
</style>
