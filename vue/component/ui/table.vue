<template>
  <table :class="$style.table">
    <thead>
      <tr>
        <th v-for="x in cHeader" :key="x">{{ _.capitalize(x) }}</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="x in list" :key="x.id">
        <td v-for="y in cHeader" :key="y" v-html="dataFormat(y, x[y])"></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed } from "vue";
import _ from "lodash";
import dayjs from "dayjs";

const props = defineProps<{
  header?: string[];
  format: Record<string, any>;
  list: any[];
}>();

const cHeader = computed(() => {
  const keys = {} as Record<string, unknown>;
  for (let i = 0; i < props.list.length; i++) {
    for (const key in props.list[i]) {
      keys[key] = true;
    }
  }
  return Object.keys(keys);
});

const dataFormat = (key: string, x: any) => {
  if (!props.format) return x;
  if (props.format[key]) {
    if (typeof props.format[key] === "function") {
      return props.format[key](x);
    }
    const type = props.format[key].split(":")[0];
    let params = null;
    if (props.format[key].split(":").length > 0) {
      params = props.format[key].split(":").slice(1).join(":");
    }

    if (type === "time") {
      return dayjs(x).format("HH:mm:ss");
    }
    if (type === "date") {
      if (params != null) return dayjs(x).format(params);
      return dayjs(x).format("HH:mm:ss");
    }
  }
  return x;
};
</script>

<style module lang="scss">
@import "../../vars";

.table {
  border-collapse: collapse;
  border: 1px solid $color-white-020;
  width: 100%;

  thead {
    // background: #505050;

    text-align: left;
    tr {
      th {
        padding: $space-2 $space-2;
      }
    }
  }

  tbody {
    // background: #404040;
    // color: #a9a9a9;
    // background: $color-white-005;

    text-align: left;
    tr {
      border: 1px solid $color-white-020;

      td {
        padding: $space-2 $space-2;
      }
    }
  }
}
</style>
