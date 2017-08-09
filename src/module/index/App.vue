<template>
  <div id="homePage">
    <SideBar></SideBar>
    <div class="top">
      <span class="title">后台数据统计</span>
      <span class="user-name">
        <i class="iconfont icon-wode-" ></i>
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{userName}}<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item command="a">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
    </div>
    <router-view class="Page"></router-view>
  </div>
</template>

<script>
  import SideBar from '../.././components/sidebar.vue'
  export default {
    data() {
      return {
        userName: ''
      }
    },
    components: {
      SideBar
    },
    methods: {
      handleCommand(command) {
        localStorage.removeItem('user-name')
          window.location.href = 'http://localhost:8088/module/login.html#/login'
      }
    },
    created() {
      if(!localStorage.getItem('user-name')) {
        window.location.href = 'http://localhost:8088/module/login.html#/login'
      }else {
        this.userName = localStorage.getItem('user-name')
      }
      console.log([
        "                   _ooOoo_",
        "                  o8888888o",
        "                  88\" . \"88",
        "                  (| -_- |)",
        "                  O\\  =  /O",
        "               ____/`---'\\____",
        "             .'  \\\\|     |//  `.",
        "            /  \\\\|||  :  |||//  \\",
        "           /  _||||| -:- |||||-  \\",
        "           |   | \\\\\\  -  /// |   |",
        "           | \\_|  ''\\---/''  |   |",
        "           \\  .-\\__  `-`  ___/-. /",
        "         ___`. .'  /--.--\\  `. . __",
        "      .\"\" '<  `.___\\_<|>_/___.'  >'\"\".",
        "     | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |",
        "     \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /",
        "======`-.____`-.___\\_____/___.-`____.-'======",
        "                   `=---='",
        "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",
        "        我佛慈悲       永无BUG"
      ].join('\n'));
    }
  }
</script>

