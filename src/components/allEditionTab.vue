<template>
  <div id="AllEditionTab">
    <div class="edition-select">
      <span>版本</span>
      <el-select v-model="value"  @change="selectEdition">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <el-table
      :data="editionDataSon"
      border
      :row-class-name="tableRowClassName"
      style="width: 100%">
      <el-table-column
        prop="editionName"
        align="center"
        className="first-col"
        width="150">
      </el-table-column>
      <el-table-column
        prop="date"
        align="center"
        label="Windows">
        <el-table-column
          prop="WAdd"
          align="center"
          min-width="120"
          label="新增调用量">
        </el-table-column>
        <el-table-column
          prop="WCumulative"
          align="center"
          min-width="120"
          label="累计调用量">
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="date"
        align="center"
        label="Android">
        <el-table-column
          prop="AAdd"
          align="center"
          min-width="120"
          label="新增调用量">
        </el-table-column>
        <el-table-column
          prop="ACumulative"
          align="center"
          min-width="120"
          label="累计调用量">
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="date"
        align="center"
        label="iOS">
        <el-table-column
          prop="IAdd"
          align="center"
          min-width="120"
          label="新增调用量">
        </el-table-column>
        <el-table-column
          prop="ICumulative"
          align="center"
          min-width="120"
          label="累计调用量">
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [{
          value: '1',
          label: 'V1.0'
        }, {
          value: '2',
          label: 'V2.0'
        }],
        value: '1'
      }
    },
    props: ['editionDataSon'],
    methods: {
      selectEdition() {
        this.$emit('transferValue', this.value)
      },
      tableRowClassName(row, index) {
        if (index === 0 || index === 4 || index === 8 ) {
          return 'info-row';
        }
        return '';
      }
    }
  }
</script>
<style lang="scss">
  #AllEditionTab {
    position: relative;
    .edition-select {
      position: absolute;
      z-index: 999;
      top: 30px;
      left: 25px;
    }
    .el-input {
      width: 75px;
      font-size:12px;
    }
    .el-select .el-input__inner {
      height: 20px;
    }
    .first-col {
      background-color: #eef1f6;
    }
    .el-table .info-row {
      background: #c9e5f5;
    }
  }
</style>
