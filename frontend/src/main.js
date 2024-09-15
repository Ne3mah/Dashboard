import './assets/main.css'
import { FrappeUI } from 'frappe-ui'
import { createApp } from 'vue'
import App from './App.vue'

let app = createApp(App)
app.use(FrappeUI)
app.mount('#app')
