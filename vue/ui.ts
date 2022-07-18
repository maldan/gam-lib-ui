import type { App } from 'vue';

export default {
  install: (app: App, options: unknown) => {
    const components1 = import.meta.globEager('@/component/modal/**/*.vue');
    const components2 = import.meta.globEager('@/gam-lib-ui/vue/component/modal/**/*.vue');
    const components = { ...components1, ...components2 };

    for (const key in components) {
      const name = key
        .replace('./', '')
        .replace('.vue', '')
        .replace(/\//g, '-')
        .replace(/\./g, '-')
        .replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? '-' : '') + $.toLowerCase())
        .replace(/--/g, '-')
        .toLowerCase()
        .replace(/-index/g, '')
        .replace(/--component-/g, '')
        .replace(/component-/g, '');
      // console.log(name, components[key].default);
      app.component(name, components[key].default);
    }
  },
};
