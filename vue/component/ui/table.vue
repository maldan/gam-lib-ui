<template>
  <table :class="$style.table">
    <thead>
      <tr>
        <th v-for="x in cHeader" :key="x" :style="{ width: size?.[x] || 'auto' }">
          {{
            _.kebabCase(x)
              .split('-')
              .map((y) => _.capitalize(y))
              .join(' ')
          }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="x in list" :key="x.id">
        <td v-for="key in cHeader" :key="key">
          <div v-if="isArray(x[key])">
            <component :is="vTable(key, x[key], x)" />
          </div>
          <div v-else-if="component && component[key]">
            <component :is="component[key](x, parent)" />
          </div>
          <div v-else v-html="format(key, x[key], x)"></div>
        </td>
      </tr>

      <!-- Total -->
      <tr v-if="total">
        <td :class="$style.total" v-for="key in cHeader" :key="key">
          <div v-html="total[key] ? total[key](list) : null"></div>
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
  header?: Record<string, any>;
  size?: Record<string, any>;
  total?: Record<string, () => any>;
  component?: Record<string, any>;
  list: any[];
  parent?: any;
}>();

// Build header
const cHeader = computed(() => {
  const keys = {} as Record<string, unknown>;

  if (!props.header) {
    for (let i = 0; i < props.list.length; i++) {
      for (const key in props.list[i]) {
        keys[key] = true;
      }
    }
    return [...Object.keys(keys), ...Object.keys(props.component || {}).filter((x) => !x.includes('.'))];
  } else {
    return [
      ...Object.keys(props.header).filter((x) => !x.includes('.')),
      ...Object.keys(props.component || {}).filter((x) => !x.includes('.')),
    ];
  }
});

// Inject table
const vTable = (key: string, x: any, parent: any) => {
  const componentKeys = Object.keys(props.component || {})
    .filter((x) => x.includes('.') && x.split('.')[0] === key)
    .map((x) => {
      return x.split('.').slice(1).join('.');
    });
  const component = {};
  for (let i = 0; i < componentKeys.length; i++) {
    // @ts-ignore
    component[componentKeys[i]] = props.component[key + '.' + componentKeys[i]];
  }

  const outProps = { list: x, component, parent } as any;

  // Has header
  if (props.header) {
    const headerKeys = Object.keys(props.header || {})
      .filter((x) => x.includes('.') && x.split('.')[0] === key)
      .map((x) => {
        return x.split('.').slice(1).join('.');
      });
    const header = {};
    for (let i = 0; i < headerKeys.length; i++) {
      // @ts-ignore
      header[headerKeys[i]] = props.header[key + '.' + headerKeys[i]];
    }

    if (headerKeys.length > 0) outProps.header = header;
  }

  // Has size
  if (props.size) {
    const keys = Object.keys(props.size || {})
      .filter((x) => x.includes('.') && x.split('.')[0] === key)
      .map((x) => {
        return x.split('.').slice(1).join('.');
      });
    const size = {};
    for (let i = 0; i < keys.length; i++) {
      // @ts-ignore
      size[keys[i]] = props.size[key + '.' + keys[i]];
    }

    outProps.size = size;
  }

  return h(UITable, outProps);
};

const isArray = (x: any) => {
  return Array.isArray(x);
};

const format = (key: string, x: any, y: any) => {
  if (!props.header) {
    return x;
  }
  if (props.header[key]) {
    if (typeof props.header[key] === 'function') {
      return props.header[key](x, y);
    }
    const type = props.header[key].split(':')[0];
    let params = null;
    if (props.header[key].split(':').length > 0) {
      params = props.header[key].split(':').slice(1).join(':');
    }

    if (type === 'time') {
      return dayjs(x).format('HH:mm:ss');
    }
    if (type === 'date') {
      if (params) return dayjs(x).format(params);
      return dayjs(x).format('YYYY-MM-DD HH:mm:ss');
    }
  }
  return x;
};
</script>

<style module lang="scss">
@import '../../vars';

.table {
  border-collapse: collapse;

  width: 100%;
  height: auto;

  thead {
    // background: #505050;

    text-align: left;
    tr {
      th {
        border: 1px solid $color-white-010;
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
      // border: 1px solid $color-white-010;

      td {
        border: 1px solid $color-white-010;
        padding: 5px;

        > div {
          display: flex;
        }
      }
    }
  }
}
</style>
