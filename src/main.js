import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faHourglassEnd } from '@fortawesome/free-solid-svg-icons'
library.add(faHourglassEnd)

const app = createApp(App)


app.use(router)

app.mount('#app')
