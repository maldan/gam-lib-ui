<template>
  <table :class="$style.table">
    <thead>
      <tr>
        <th v-for="(x, i) in cHeader" :key="x" :style="{ width: size?.[i] || 'auto' }">{{ _.capitalize(x) }}</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="x in list" :key="x.id">
        <td v-for="key in cHeader" :key="key">
          <div v-if="isArray(x[key])"><component :is="vTable(key, x[key], x)" /></div>
          <div v-else-if="component && component[key]"><component :is="component[key](x, parent)" /></div>
          <div v-else v-html="dataFormat(key, x[key])"></div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed, h } from 'vue';
import _ from 'lodash';
import dayjs from 'dayjs';
import UITable from './table.vue';

const props = defineProps<{
  header?: string[];
  size?: string[];
  format?: Record<string, any>;
  component?: Record<string, any>;
  list: any[];
  parent?: any;
}>();

const cHeader = computed(() => {
  const keys = {} as Record<string, unknown>;
  for (let i = 0; i < props.list.length; i++) {
    for (const key in props.list[i]) {
      // eslint-disable-next-line no-prototype-builtins
      if (props.format && props.format.hasOwnProperty(key) && props.format[key] === undefined) continue;
      keys[key] = true;
    }
  }
  return [...Object.keys(keys), ...Object.keys(props.component || {}).filter((x) => !x.includes('.'))];
});

const vTable = (key: string, x: any, parent: any) => {
  const keys = Object.keys(props.component || {})
    .filter((x) => x.includes('.') && x.split('.')[0] === key)
    .map((x) => {
      return x.split('.').slice(1).join('.');
    });
  const components = {};
  for (let i = 0; i < keys.length; i++) {
    // @ts-ignore
    components[keys[i]] = props.component[key + '.' + keys[i]];
  }
  return h(UITable, { list: x, component: components, parent });
};

const isArray = (x: any) => {
  return Array.isArray(x);
};

/*const isComponent = (x: any) => {
  return typeof x === 'object';
};*/

const dataFormat = (key: string, x: any) => {
  if (!props.format) {
    return x;
  }
  if (props.format[key]) {
    if (typeof props.format[key] === 'function') {
      return props.format[key](x);
    }
    const type = props.format[key].split(':')[0];
    let params = null;
    if (props.format[key].split(':').length > 0) {
      params = props.format[key].split(':').slice(1).join(':');
    }

    if (type === 'time') {
      return dayjs(x).format('HH:mm:ss');
    }
    if (type === 'date') {
      if (params != null) return dayjs(x).format(params);
      return dayjs(x).format('HH:mm:ss');
    }
  }
  return x;
};
</script>

<style module lang="scss">
@import '../../vars';

.table {
  border-collapse: collapse;
  border: 1px solid $color-white-010;
  width: 100%;
  height: auto;

  thead {
    // background: #505050;

    text-align: left;
    tr {
      th {
        padding: 5px;
      }
    }
  }

  tbody {
    // background: #404040;
    // color: #a9a9a9;
    // background: $color-white-005;

    text-align: left;
    tr {
      border: 1px solid $color-white-010;

      td {
        padding: 5px;
      }
    }
  }
}
</style>
