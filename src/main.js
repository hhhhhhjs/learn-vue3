// // import './assets/main.css'

// import { createApp } from 'vue'

// import App from './App.vue'
// // import ChildComp from '@/components/child.vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// //全局注册
// const app = createApp(App)
// app.use(ElementPlus)
// // app.component('ChildComp',ChildComp)
// app.mount('#app') 

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './components/flex.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')