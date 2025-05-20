import { PiniaColada } from '@pinia/colada'
import Aura from '@primeuix/themes/aura'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import { setupLayouts } from 'virtual:generated-layouts'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'

import './app.css'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes),
})

app.use(router)
app.use(createPinia())
app.use(PiniaColada, {})
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.mount('#app')
