import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './stylus/index.less'
import './stylus/index.styl'

createApp(App)
  .use(Antd)
  .use(store)
  .use(router)
  .mount('#app')
