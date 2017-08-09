<template>
  <div id="Other">
    <div class="border-top">
      <div class="search-input">
        <el-input placeholder="请输入查找内容"
                  v-model="searchValue"
                  :on-icon-click="handleIconClick"
                  icon="search">
          <el-select v-model="searchType" slot="prepend">
            <el-option label="手机号" value="1"></el-option>
            <el-option label="姓名" value="2"></el-option>
            <el-option label="公司名" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="search"></el-button>
        </el-input>
        <i class="el-icon-close" @click="empty" v-if="emptyIcon"></i>
      </div>
      <div style="position: relative">
        <div class="sort" @click="sortCompany"></div>
        <div class="sort2" @click="sortSdk"></div>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            type="index"
            label="序号"
            align="center"
            width="80">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            align="center"
            width="120">
          </el-table-column>
          <el-table-column
            prop="subject"
            label="公司/个人 ▼"
            height="50"
            align="center"
            width="120">
          </el-table-column>
          <el-table-column
            prop="mobile"
            label="电话"
            min-width="126"
            align="center">
          </el-table-column>
          <el-table-column
            prop="mailbox"
            label="邮箱"
            min-width="126"
            align="center">
          </el-table-column>
          <el-table-column
            prop="downSdk"
            label="SDK下载记录"
            min-width="126"
            align="center">
          </el-table-column>
          <el-table-column
            prop="useSdk"
            label="SDK使用记录 ▼"
            min-width="126"
            align="center">
          </el-table-column>
        </el-table>
      </div>
      <Pagination @pagination="getPagination" :totalFather='total'></Pagination>
    </div>
  </div>
</template>
<script>
  import Pagination from '../../../.././components/pagination.vue'
  export default {
    data() {
      return {
        emptyIcon: false,
        searchValue: '',
        searchType: '1',
        tableData: [{
          name: '张鹏',
          subject: '个人',
          mobile: '15384077817',
          mailbox: '5454654@qq.com',
          downSdk: 'dadadadad',
          useSdk: 'asdaadasdad'
        }, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        total: 500,
        currentPage: 1,
        jumperToPage: 1,
      }
    },
    watch: {
      searchValue (val) {
        if(val !== '') {
          this.emptyIcon = true
        } else if(val === '') {
          this.emptyIcon = false
        }
      }
    },
    components: {
      Pagination
    },
    methods: {
      handleIconClick(ev) {
        console.log(ev);
      },
      empty() {
        this.searchValue = ''
      },
      getPagination(currentPage, jumperToPage) {
        this.currentPage = currentPage || 1
        this.jumperToPage = jumperToPage || 1
        console.log(this.currentPage + '当前页')
        console.log(this.jumperToPage + '跳转页')
      },
      sortCompany() {
        console.log('123')
      },
      sortSdk() {
        console.log('222')
      }
    }
  }
</script>
<style lang="scss">
  #Other {
    .border-top {
      padding: 20px 20px;
    }
    .el-select {
      width: 85px;
    }
    .el-input-group {
      width: 300px;
    }
    .el-input-group__append {
      display: none;
    }
    .el-input-group--append .el-input__inner, .el-input-group__prepend {
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }
    .el-input__icon {
      width: 28px;
    }
    .el-input__icon+.el-input__inner {
      padding-right: 0;
    }
    .search-input {
      position: relative;
      width: 300px;
      .el-icon-close {
        position: absolute;
        top: 12px;
        right: 30px;
        color: #bfcbd9;
        cursor: pointer;
      }
    }
    .el-table {
      margin-top: 30px;
    }
    .el-pagination {
      margin-top: 30px;
    }
    .sort, .sort2 {
      position: absolute;
      width: 35px;
      height: 26px;
      cursor: pointer;
      z-index: 3000;
    }
    .sort {
      top: 11px;
      left: 286px;
    }
    .sort2 {
      top: 9px;
      right: 10px;
    }
  }
</style>

