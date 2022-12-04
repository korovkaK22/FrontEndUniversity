import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

import faqRouter from './routes/faq.routes';


app.use(faqRouter())



