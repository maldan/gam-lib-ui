<template>
  <Modal v-if="modalStore.name">
    <component :is="'modal-' + modalStore.name.replace(/\//g, '-')" />
  </Modal>
</template>

<script setup lang="ts">
import Modal from '../ui/modal.vue';
import { useModalStore } from '@/gam-lib-ui/vue/store/modal';

const modalStore = useModalStore();
/*import { defineComponent } from 'vue';
import { useModalStore } from '@/gam-lib-ui/vue/store/modal';
import Modal from '../ui/modal.vue';

export default defineComponent({
  props: {},
  components: { Modal },
  async mounted() {},
  methods: {},
  data: () => {
    return {
      modalStore: useModalStore(),
    };
  },
});*/
</script>

<style module lang="scss"></style>
