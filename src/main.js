import { createApp } from 'vue'
import { Vue3Mq } from "vue3-mq"
import App from './App.vue'

const app = createApp(App)

app.use(Vue3Mq, {
    breakpoints: {
        xs: 0,
        sm: 361,
        md: 641, // +1
        lg: 1081, // +1
    }
})

app.mount('#app')
