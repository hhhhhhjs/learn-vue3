// import './assets/main.css'

import { createApp } from 'vue'

import App from './two.vue'
import ChildComp from '@/components/child.vue'

//全局注册
const app = createApp(App)
app.component('ChildComp',ChildComp)
app.mount('#app') 