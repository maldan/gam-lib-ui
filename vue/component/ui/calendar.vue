<template>
  <div :class="$style.container">
    <div :class="$style.switch">
      <Button @click="changeDate(-1, 'year')" color="gray">&lt;</Button>
      <div>{{ year }}</div>
      <Button @click="changeDate(1, 'year')" color="gray">&gt;</Button>
      <Button @click="changeDate(-1, 'month')" color="gray">&lt;</Button>
      <div>{{ monthName[month] }}</div>
      <Button @click="changeDate(1, 'month')" color="gray">&gt;</Button>
    </div>
    <div :class="$style.week">
      <div v-for="x in week" :key="x">{{ x }}</div>
    </div>
    <div :class="$style.days">
      <div
        @click="clickOnDate(x)"
        :class="[
          $style.day,
          isToday(x) ? $style.today : null,
          isCurrentMonth(x) ? $style.currentMonth : null,
          isSelected(x) ? $style.selected : null,
        ]"
        v-for="x in dates"
        :key="x"
      >
        <span>{{ dayjs(x).format('D') }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import Button from '@/gam-lib-ui/vue/component/ui/button.vue';
import { IconStopwatch } from '@/gam-lib-ui/vue/component/icon';
import { onMounted, ref } from 'vue';

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits(['update:modelValue', 'change']);

// Vars
const dates = ref<Date[]>([]);
const year = ref(dayjs(props.modelValue).toDate().getFullYear());
const month = ref(dayjs(props.modelValue).toDate().getMonth());
const week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const monthName = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

// Hooks
onMounted(() => {
  buildDates();
});

// Methods
function changeDate(amount: number, type: 'month' | 'year') {
  if (type === 'year') year.value += amount;
  if (type === 'month') {
    month.value += amount;
    if (month.value < 0) {
      month.value = 11;
      year.value -= 1;
    }
    if (month.value > 11) {
      month.value = 0;
      year.value += 1;
    }
  }
  buildDates();
}

const clickOnDate = (x: Date) => {
  x.setHours(new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());

  emit('update:modelValue', dayjs(x).format('YYYY-MM-DD HH:mm:ss.SSSZ'));
  emit('change', dayjs(x).format('YYYY-MM-DD HH:mm:ss.SSSZ'));
};

function isCurrentMonth(x: Date) {
  return x.getMonth() === month.value;
}

function isToday(x: Date) {
  return dayjs(x).format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD');
}

function isSelected(x: Date) {
  return dayjs(x).format('YYYY-MM-DD') === dayjs(props.modelValue).format('YYYY-MM-DD');
}

function buildDates() {
  const prevMonth = [] as Date[];
  const current = [] as Date[];
  const nextMonth = [] as Date[];

  // Current month
  for (let i = 0; i <= 31; i++) {
    const date = dayjs(`${year.value}-${('00' + (month.value + 1)).slice(-2)}-01`);
    const from = date.add(i, 'day');
    if (from.month() !== date.month()) break;
    current.push(from.toDate());
  }

  // Prev month
  for (let i = 0; i <= 31; i++) {
    const date = dayjs(`${year.value}-${('00' + (month.value + 1)).slice(-2)}-01`).add(-1, 'month');
    const from = date.add(i, 'day');
    if (from.month() !== date.month()) break;
    prevMonth.push(from.toDate());
  }

  // Next month
  for (let i = 0; i <= 31; i++) {
    const date = dayjs(`${year.value}-${('00' + (month.value + 1)).slice(-2)}-01`).add(1, 'month');
    const from = date.add(i, 'day');
    if (from.month() !== date.month()) break;
    nextMonth.push(from.toDate());
  }

  let stupidShit = current[0].getDay();
  if (stupidShit === 0) stupidShit = 7; // Change sunday
  if (-stupidShit + 1 === 0) prevMonth.length = 0; // First day

  dates.value = [
    ...prevMonth.slice(-stupidShit + 1),
    ...current,
    ...nextMonth.slice(0, 7 - current[current.length - 1].getDay()),
  ];
}
</script>

<style module lang="scss">
@import '../../vars';

.container {
  user-select: none;

  .switch {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 10px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .week {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

    > div {
      padding: 10px;
      border: 1px solid $color-white-010;
      font-weight: bold;
      text-align: center;
    }
  }

  .days {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;

    .day {
      padding: 10px;
      border: 1px solid $color-white-010;
      text-align: center;
      color: $color-white-020;
      cursor: pointer;

      &.currentMonth {
        color: $color-white-060;
      }

      &.today {
        font-weight: bold;
        color: $color-green !important;
      }

      &.selected {
        border: 1px solid $color-main;
      }
    }
  }
}
</style>
