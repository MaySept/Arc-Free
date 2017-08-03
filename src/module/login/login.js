/**
 * Created by zp6077 on 2017/8/3.
 */
import {Vue, Common, i18n} from 'js/base'
import  router from './router/loginRouter.js'
import app from './App'
import '../../assets/scss/base/_necessary.scss'
import './scss/login.scss'

new Vue({
  el: '#login',
  router,
  template: '<app></app>',
  components: {
    'app':app
  }
})

router.push('/login')
