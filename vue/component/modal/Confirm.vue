<template>
  <div :class="$style.container">
    <div>Are you sure?</div>

    <Row size="1fr 1fr" style="margin-top: 8px">
      <Button @click="modalStore.ok()" color="gray" text="Ok" />
      <Button @click="modalStore.cancel()" color="gray" text="Cancel" />
    </Row>
  </div>
</template>

<script setup lang="ts">
import { Row, Button, Input, Select } from '@/gam-lib-ui/vue/component/ui';
import { useModalStore } from '@/gam-lib-ui/vue/store/modal';
const modalStore = useModalStore();
</script>

<style module lang="scss">
@import '@/gam-lib-ui/vue/vars';

.container {
}
</style>
