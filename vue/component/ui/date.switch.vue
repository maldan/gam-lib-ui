<template>
  <Row size="auto 1fr auto">
    <Button @click="offset(-1)" color="gray">&lt;</Button>
    <div style="text-align: center">{{ format(modelValue) }}</div>
    <Button @click="offset(1)" color="gray">&gt;</Button>
  </Row>
</template>

<script setup lang="ts">
import { Button, Row } from '@/gam-lib-ui/vue/component/ui';
import dayjs from 'dayjs';

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits(['update:modelValue', 'change']);

const offset = (x: number) => {
  const d = dayjs(props.modelValue).add(x, 'day').format('YYYY-MM-DD HH:mm:ss.SSSZ');
  emit('update:modelValue', d);
  emit('change', d);
};
const format = (x: string) => {
  const now = dayjs().format('YYYY-MM-DD');
  const yesterday = dayjs().add(-1, 'day').format('YYYY-MM-DD');
  const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
  const c = dayjs(props.modelValue).format('YYYY-MM-DD');

  if (now === c) return 'Today';
  if (yesterday === c) return 'Yesterday';
  if (tomorrow === c) return 'Tomorrow';
  return c;
};
</script>

<style module lang="scss">
@import '../../vars';
</style>
