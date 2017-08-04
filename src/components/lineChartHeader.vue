<template>
  <div id="line-chart-header">
    <el-row>
      <el-col :span="6">
        <el-row>
          <el-col :span="6">
            <span>{{titleSon}}</span>
          </el-col>
          <el-col :span="18">
            <el-select v-model="trendValueSon" @change="selectChange" style="width: 125px;margin-top: 4px">
              <el-option
                v-for="item in trendSon"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="5" style="position: relative" class="time-select">
        <div class="time-show">{{timeShow}}</div>
        <el-select v-model="timeRangeValueSon" >
          <el-option
            v-for="item in timeRange"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        timeRange: [{
          value: 1,
          label: '过去7天'
        }, {
          value: 2,
          label: '过去30天'
        }, {
          value: 3,
          label: '过去60天'
        }],
        trendValueSon: 1,
        timeRangeValueSon: 2,
        timeShow: this.$Common.getNewDate(30)
      }
    },
    props: ['trendSon','titleSon'],
    watch: {
      timeRangeValueSon(val) {
        this.$emit('transferTimeRangeValue',this.timeRangeValueSon)
        if(val === 1) {
          this.timeShow = this.$Common.getNewDate(7)
        } else if (val === 3) {
          this.timeShow = this.$Common.getNewDate(60)
        }else {
          this.timeShow = this.$Common.getNewDate(30)
        }
      }
    },
    methods: {
      selectChange() {
        this.$emit("transferTrendValue",this.trendValueSon)
      },
    }
  }
</script>
<style lang="scss">
  #line-chart-header {
    width: 100%;
    height: 35px;
    padding: 2px 20px;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.05);
    .el-col:nth-child(2) {
      float: right;
    }
    span {
      font-size: 10px;
      line-height: 30px;
    }
    .el-select .el-input__inner {
      height: 24px;
    }
    .el-select {
      width: 170px;
    }
    .time-show {
      position: absolute;
      z-index: 9999;
      width: 130px;
      height: 16px;
      background-color: #ffffff;
      top: 4px;
      left: 6px;
      font-size: 10px;
    }
  }
</style>
