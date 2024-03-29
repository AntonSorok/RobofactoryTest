/* eslint-disable import/order */
import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI';
import './registerServiceWorker';
import store from './store';

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(store).mount('#app');
