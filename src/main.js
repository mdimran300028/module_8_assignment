import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'popper.js'

const app = createApp(App)
app.use(router)

app.mount('#app')
