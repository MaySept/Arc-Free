<template>
  <div id="Header">
    <h4>使用数据</h4>
    <div class="user-name clearFix">
      <img src=".././assets/logo.png" alt="">
      <el-button v-popover:popover2>click 激活</el-button>
      <el-popover
        ref="popover2"
        placement="bottom"
        title="标题"
        width="200"
        trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      </el-popover>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="scss">
  #Header {
    width: 100%;
    height: 80px;
    background-color: gainsboro;
    padding: 25px 100px 25px 205px;
    h4 {
      display: inline-block;
      font-size: 18px;
    }
    .user-name {
      float: right;
      width: 180px;
      height: 40px;
      border: 1px solid blue;
      padding: 5px;
      img {
        display: inline-block;
        float: left;
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      span {
        display: inline-block;
        line-height: 29px;
        font-size: 14px;
        margin-left: 7px;
      }
    }
  }
</style>
