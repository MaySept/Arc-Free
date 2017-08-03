/**
 * Created by zp6077 on 2017/6/26.
 */
import { Vue, Common, i18n} from 'js/base'
import  router from './router/homeRouter'
import store from '../../vuex/store'
import app from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '../../assets/scss/base/_necessary.scss'
import './scss/homePage.scss'
import '../../assets/images/iconfont/iconfont.css'


Vue.use(ElementUI)
new Vue({
  el: '#homePage',
  store,
  router,
  template: '<app></app>',
  components: {
    'app': app
  }
})

