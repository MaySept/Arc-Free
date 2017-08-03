import * as types from '../mutation-types'
import api from '../api'
const state = {
    loginSuccess: false,
    errorMessage: '',
     userid:''
}
//state 代表数据实体

const actions = {
    goLogin: function ({commit}, params) {
        return new Promise((resolve, reject) => {
            api.getLogin(params, function (res) {
                commit(types.LOGIN_IS_SUCCESS, res);
                resolve(res)
            });
        })
    }
}
//action 可以包含异步操作的状态变更

const getters = {
    getLoginSuccess: state => state.loginSuccess,
    getLoginMessage: state => state.errorMessage
}


//getters 代表数据实体计算属性 能够根据state动态变更值
const mutations = {
    [types.LOGIN_IS_SUCCESS] (state, res) {
        state.loginSuccess = res.error_code === '0000'
        state.errorMessage = res.error_msg
        state.userid=res.data.userid;
    }
}
//mutations 同步状态变更 直接修改状态值

export default {
    state,
    actions,
    getters,
    mutations
}
