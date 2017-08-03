/**
 * Created by zp6077 on 2017/6/26.
 */
import {router} from 'js/base' //引入路由组件

export default new router ({
  routes:[
    {
      path: '/',
      component:resolve => {require(['../view/Profile/index.vue'], resolve)}
    },
    {
      path: '/Number',
      component:resolve => {require(['../view/Developer/number.vue'], resolve)}
    },
    {
      path: '/Ranking',
      component:resolve => {require(['../view/Developer/ranking.vue'], resolve)}
    },
    {
      path: '/Classification',
      component:resolve => {require(['../view/Developer/classification.vue'], resolve)}
    },
    {
      path: '/DPhotoStyling',
      component:resolve => {require(['../view/Downloads/D-PhotoStyling.vue'], resolve)}
    },
    {
      path: '/DFaceDetection',
      component:resolve => {require(['../view/Downloads/D-FaceDetection.vue'], resolve)}
    },
    {
      path: '/DFaceTracking',
      component:resolve => {require(['../view/Downloads/D-FaceTracking.vue'], resolve)}
    },
    {
      path: '/DFaceRecognition',
      component:resolve => {require(['../view/Downloads/D-FaceRecognition.vue'], resolve)}
    },
    {
      path: '/TPhotoStyling',
      component:resolve => {require(['../view/Transfer/T-PhotoStyling.vue'], resolve)}
    },
    {
      path: '/TFaceDetection',
      component:resolve => {require(['../view/Transfer/T-FaceDetection.vue'], resolve)}
    },
    {
      path: '/TFaceTracking',
      component:resolve => {require(['../view/Transfer/T-FaceTracking.vue'], resolve)}
    },
    {
      path: '/TFaceRecognition',
      component:resolve => {require(['../view/Transfer/T-FaceRecognition.vue'], resolve)}
    },
    {
      path: '/Other',
      component:resolve => {require(['../view/Other/other.vue'], resolve)}
    },


  ]
})
