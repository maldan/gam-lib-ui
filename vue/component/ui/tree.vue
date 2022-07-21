<template>
  <div :class="$style.tree">
    <div>
      <div :class="$style.row" v-for="(v, k) in data" :key="k">
        <div :class="$style.key">{{ k }}</div>
        <div v-if="isObject(v)" :class="$style.value"><tree :data="v" /></div>
        <div v-else-if="typeof v === 'string'" :class="$style.value"><Input v-model="data[k]" /></div>
        <div v-else-if="typeof v === 'number'" :class="$style.value"><InputNumber v-model="data[k]" /></div>
        <div v-else :class="$style.value">{{ format(v) }}</div>
      </div>
    </div>
    <Button v-if="isArray(data)" @click="pushArray(data)" color="gray" style="margin-top: 5px">Push</Button>
  </div>
</template>

<script setup lang="ts">
import { computed, h } from 'vue';
import _ from 'lodash';
import dayjs from 'dayjs';
import { Button, Input, InputNumber } from '@/gam-lib-ui/vue/component/ui';

const props = defineProps<{
  data: any;
  arrayStruct?: any;
}>();

const isObject = (x: any) => typeof x === 'object';
const isArray = (x: any) => Array.isArray(x);

const format = (x: any) => {
  if (typeof x === 'string') return x;
};

const pushArray = (x: any[]) => {
  x.push(JSON.parse(JSON.stringify(props.arrayStruct || {})));
};
</script>

<style module lang="scss">
@import '../../vars';

.tree {
  display: flex;
  flex-direction: column;

  .row {
    display: grid;
    border-collapse: collapse;
    grid-template-columns: 1fr 1fr;
    border: 1px solid $color-white-020;
    padding: 5px;
    border-bottom: 0;

    &:last-child {
      border-bottom: 1px solid $color-white-020;
    }
  }
}
</style>
