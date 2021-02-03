declare module '*.vue' {
  import { Component } from 'vue';
  const component: Component;
  export default component;
}

declare global {
  interface Window {
    opera: boolean;
    mobileAndTabletCheck: function;
  }
}
