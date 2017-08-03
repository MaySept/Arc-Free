/**
 * Created by zp6077 on 2017/8/3.
 */
import {router} from 'js/base'

export default new router({
  routes: [{
    path: '/login',
    component: resolve => {require(['../view/index.vue'], resolve)}
  }]
})
