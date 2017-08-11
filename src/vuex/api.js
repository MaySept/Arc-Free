/**
 * axios接口大全
 * api配置
 */

import store from './store'
import * as types from './mutation-types'
import axios from 'axios'
var config = require('../../config')
var url = process.env.NODE_ENV !== 'production' ? '/static/api/' : config.build.assetsPublicPath + config.build.assetsSubDirectory + '/api/'


// 请求的时候实现一个loading拦截器,不然每次都要在对应的文件写开loading和关loading
axios.interceptors.request.use(
    config => {
        // store.commit(types.GLOBAL_SET_LOADINNG, true)
        return config;
    },
    err => {
        return Promise.reject(err);
    }
)
axios.interceptors.response.use(
    response => {
        // store.commit(types.GLOBAL_SET_LOADINNG, false)
        return response;
    },
    err => {
        return Promise.reject(err);
    }
)
const API=  {
  /*用户登录*/
  GetLogin: function (params) {
    return new Promise(function (resolve, reject) {
      axios.get('center/getNotification.json',params).then(function (res) {
        if (res.status >= 200 && res.status < 300) {
          resolve(res.data)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  },
  /*概况页面*/
  GetSurvey: function (params) {
    return new Promise(function (resolve, reject) {
      axios.get('http://localhost:8088/static/mock/db.json',params).then(function (res) {
        if (res.status >= 200 && res.status < 300) {
          resolve(res.data)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  },
  /*开发者数量页面*/
  GetDeveloper: function (params) {
    return new Promise(function (resolve, reject) {
      axios.get('center/getNotification.json',params).then(function (res) {
        if (res.status >= 200 && res.status < 300) {
          resolve(res.data)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  },
  /*应用分类统计页面*/
  GetClassification: function (params) {
    return new Promise(function (resolve, reject) {
      axios.get('center/getNotification.json',params).then(function (res) {
        if (res.status >= 200 && res.status < 300) {
          resolve(res.data)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  },
  /*下载量页面*/
  GetDownloadsPS: function (params) {
    return new Promise(function (resolve, reject) {
      axios.get('center/getNotification.json',params).then(function (res) {
        if (res.status >= 200 && res.status < 300) {
          resolve(res.data)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  },
  GetDownloadsFD: function (params) {
    return new Promise(function (resolve, reject) {
      axios.get('center/getNotification.json',params).then(function (res) {
        if (res.status >= 200 && res.status < 300) {
          resolve(res.data)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  },
  GetDownloadsFT: function (params) {
    return new Promise(function (resolve, reject) {
      axios.get('center/getNotification.json',params).then(function (res) {
        if (res.status >= 200 && res.status < 300) {
          resolve(res.data)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  },
  GetDownloadsFR: function (params) {
    return new Promise(function (resolve, reject) {
      axios.get('center/getNotification.json',params).then(function (res) {
        if (res.status >= 200 && res.status < 300) {
          resolve(res.data)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  },
  /*调用页面*/
  GetTransferPS: function (params) {
    return new Promise(function (resolve, reject) {
      axios.get('center/getNotification.json',params).then(function (res) {
        if (res.status >= 200 && res.status < 300) {
          resolve(res.data)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  },
  GetTransferFD: function (params) {
    return new Promise(function (resolve, reject) {
      axios.get('center/getNotification.json',params).then(function (res) {
        if (res.status >= 200 && res.status < 300) {
          resolve(res.data)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  },
  GetTransferFT: function (params) {
    return new Promise(function (resolve, reject) {
      axios.get('center/getNotification.json',params).then(function (res) {
        if (res.status >= 200 && res.status < 300) {
          resolve(res.data)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  },
  GetTransferFR: function (params) {
    return new Promise(function (resolve, reject) {
      axios.get('center/getNotification.json',params).then(function (res) {
        if (res.status >= 200 && res.status < 300) {
          resolve(res.data)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  },
  /*其他页面*/
  GetOther: function (params) {
    return new Promise(function (resolve, reject) {
      axios.get('http://localhost:8088/static/mock/db.json',params).then(function (res) {
        if (res.status >= 200 && res.status < 300) {
          resolve(res.data)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  },

}

  module.exports = API
