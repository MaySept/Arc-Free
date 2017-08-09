<template>
  <div class="lg-content">
    <div class="wrapper">
      <div class="container">
        <h1>Arc-SDK</h1>
        <div class="form">
          <input type="text" placeholder="Username" v-model="userName">
          <input type="password" placeholder="Password" v-model="password">
          <button type="submit" id="login-button" @click="loginBtn">Login</button>
        </div>
      </div>
      <ul class="bg-bubbles">
        <li></li><li></li><li></li>
        <li></li><li></li><li></li>
        <li></li><li></li><li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
  import api from '../../.././vuex/api'
  export default {
    data() {
      return {
        userName: '',
        password: ''
      }
    },
    methods: {
      loginBtn() {
            /*        api.GetLogin({user:this.userName, password:this.password}).then(function (data) {
              console.log('成功')
            }).catch(function (error) {
              console.log('失败')
            })*/
        $('.form').fadeOut(500);
	      $('.wrapper').addClass('form-success');
	      localStorage.setItem('user-name', this.userName)
        setTimeout(function () {
          window.location.href = 'http://localhost:8088/module/index.html#/'
        },1000)
      }
    }
  }
</script>
