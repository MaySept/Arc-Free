import Mock from 'mockjs'
import login from 'js/mock/login'
function addToMock (api) {
    api.forEach(item => {
        Mock.mock(item.path, item.data)
    })
}
addToMock(login)
export default Mock
