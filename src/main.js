import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faClock, faTrophy, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faClock, faTrophy, faCheckCircle);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon); // Register the component globally

app.use(router);
app.mount('#app');
