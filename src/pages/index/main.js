import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import Index from './index.vue'
// import router from '../../router'
// import store from '../../store'

import '../../stylus/index.less'
import '../../stylus/index.styl'

createApp(Index)
  .use(Antd)
  // .use(router)
  // .use(store)
  .mount('#app')
