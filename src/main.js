import { boot, setPublicPath } from '@xcedu/web-share'
import router from './router'
import store from './stores'

import App from './App.vue'

setPublicPath('@xcedu/user')

const { bootstrap, mount, unmount } = boot(store, router, App)
export { bootstrap, mount, unmount }
