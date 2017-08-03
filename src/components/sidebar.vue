<template>
  <div id="sidebar">
    <div class="sidebar-header">
      <el-row>
        <el-col :span="10">
          <img src="../.././static/arc.png" alt="">
        </el-col>
        <el-col :span="14">
          <P>Are-Free-SDK</P>
        </el-col>
      </el-row>
    </div>
    <el-menu :default-active="indexPath"
             class="el-menu-vertical-demo"
             @select="handleSelect"
             theme="dark">
      <router-link to="/">
        <el-menu-item index="1"><i class="iconfont icon-qinglang"></i>概况</el-menu-item>
      </router-link>
      <el-submenu index="2">
        <template slot="title"><i class="iconfont icon-yintian"></i>开发者信息</template>
        <router-link to="/Number">
          <el-menu-item index="2-1">开发者数量</el-menu-item>
        </router-link>
        <router-link to="/Ranking">
          <el-menu-item index="2-2">活跃开发者排名</el-menu-item>
        </router-link>
        <router-link to="/Classification">
          <el-menu-item index="2-3">应用分类统计</el-menu-item>
        </router-link>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="iconfont icon-xiayu"></i>下载量</template>
        <router-link to="/DPhotoStyling">
          <el-menu-item index="3-1">PhotoStyling</el-menu-item>
        </router-link>
        <router-link to="/DFaceDetection">
          <el-menu-item index="3-2">FaceDetection</el-menu-item>
        </router-link>
        <router-link to="/DFaceTracking">
          <el-menu-item index="3-3">FaceTracking</el-menu-item>
        </router-link>
        <router-link to="/DFaceRecognition">
          <el-menu-item index="3-4">FaceRecognition</el-menu-item>
        </router-link>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="iconfont icon-xiaxue"></i>调用量</template>
        <router-link to="/TPhotoStyling">
          <el-menu-item index="4-1">PhotoStyling</el-menu-item>
        </router-link>
        <router-link to="/TFaceDetection">
          <el-menu-item index="4-2">FaceDetection</el-menu-item>
        </router-link>
        <router-link to="/TFaceTracking">
          <el-menu-item index="4-3">FaceTracking</el-menu-item>
        </router-link>
        <router-link to="/TFaceRecognition">
          <el-menu-item index="4-4">FaceRecognition</el-menu-item>
        </router-link>
      </el-submenu>
      <router-link to="/Other">
        <el-menu-item index="5"><i class="iconfont icon-shidu"></i>其他信息</el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        indexPath: '1'
      }
    },
    methods: {
      handleSelect(index) {
        sessionStorage.setItem('indexPath', index)
      }
    },
    created() {
      this.indexPath = sessionStorage.getItem('indexPath') || '1'
    }
  }
</script>
<style lang="scss">
  #sidebar {
    float: left;
    width: 230px;
    height: 100%;
    background-color: #324157;
    .sidebar-header {
      width: 100%;
      height: 63px;
      background-color: #000000;
      padding: 13px 12px;
      img {
        width: 80px;
        height: 30px;
      }
      P {
        color: #1D8CE0;
        font-size: 17px;
        line-height: 45px;
      }
    }
    .el-menu {
      height: auto;
      .iconfont {
        font-size: 18px;
        margin-right: 10px;
      }
    }
    .el-menu-item.is-active{
      border-left:3px solid  #1D8CE0;
      color: #1D8CE0;
    }
  }
</style>
