<template>
  <div :class="$style.container">
    <!-- Calendar -->
    <div style="position: relative; display: flex">
      <Button color="gray" @click="isShowCalendar = !isShowCalendar" style="border-radius: 4px; flex: 1">
        {{ dayjs(modelValue).format('YYYY-MM-DD') }}
      </Button>

      <Calendar v-if="isShowCalendar" @select="isShowCalendar = false" :class="$style.calendar" v-model="modelValue" />
    </div>

    <!-- Time -->
    <div style="position: relative; display: flex">
      <Button color="gray" @click="isShowTime = !isShowTime" style="border-radius: 4px; flex: 1">
        {{ dayjs(modelValue).format('HH:mm:ss') }}
      </Button>
      <div v-if="isShowTime" :class="$style.time">
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; align-items: center">
          <Button @click="offset(-1, 'hour')" color="gray">&lt;</Button>
          <div>{{ dayjs(modelValue).format('HH') }}</div>
          <Button @click="offset(1, 'hour')" color="gray">&gt;</Button>
        </div>
        <div
          style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; align-items: center; margin-top: 10px"
        >
          <Button @click="offset(-1, 'minute')" color="gray">&lt;</Button>
          <div>{{ dayjs(modelValue).format('mm') }}</div>
          <Button @click="offset(1, 'minute')" color="gray">&gt;</Button>
        </div>
      </div>
    </div>

    <Button
      @click="now()"
      color="gray"
      style="padding: 2px; font-size: 12px; border-radius: 4px; width: 28px; height: 28px"
    >
      <IconStopwatch size="21" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import Button from '@/gam-lib-ui/vue/component/ui/button.vue';
import { IconStopwatch } from '@/gam-lib-ui/vue/component/icon';
import Calendar from '@/gam-lib-ui/vue/component/ui/calendar.vue';
import { ref } from 'vue';

const props = defineProps<{
  modelValue: string;
  placeholder?: string;
}>();

// Vars
const emit = defineEmits(['update:modelValue']);
const isShowCalendar = ref(false);
const isShowTime = ref(false);

// Methods
function offset(amount: number, type: 'hour' | 'minute') {
  emit('update:modelValue', dayjs(props.modelValue).add(amount, type).format('YYYY-MM-DD HH:mm:ss.SSSZ'));
}

function now() {
  emit('update:modelValue', dayjs().format('YYYY-MM-DD HH:mm:ss.SSSZ'));
}
</script>

<style module lang="scss">
@import '../../vars';

.container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  align-items: center;
  position: relative;
  gap: $space-1;

  .date,
  .time {
    text-align: center;
    cursor: pointer;
  }

  .calendar,
  .time {
    position: absolute;
    z-index: 1;
    background: rgba(0, 0, 0, 1);
    padding: 10px;
    top: 34px;
    left: 0;
  }

  .time {
  }
}
</style>
