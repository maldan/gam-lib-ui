import { defineStore } from 'pinia';

export const useModalStore = defineStore({
  id: 'modal',
  state: () => ({
    name: '',
    data: {} as Record<string, any>,
    onOk: (data: Record<string, any>) => {},
    onCancel: () => {},
  }),
  actions: {
    show(
      name: string,
      data?: Record<string, any>,
      onOk?: (data: Record<string, any>) => void,
      onCancel?: () => void,
    ): void {
      this.name = name;
      this.data = data || {};
      this.onOk = onOk || (() => {});
      this.onCancel = onCancel || (() => {});
    },
    cancel() {
      this?.onCancel();
      this.name = '';
    },
    close() {
      this.name = '';
    },
    ok() {
      this?.onOk(this.data);
    },
  },
});
