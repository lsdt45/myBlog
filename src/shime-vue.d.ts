/// <reference types="vite/client" />
declare module 'vue-markdown';
declare module 'marked';
declare module 'lodash';
declare module './router';
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
  