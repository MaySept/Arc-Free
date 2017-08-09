<template>
  <div id="Number">
    <div class="border-top">
      <LineChartHeader :titleSon="trendTitle"
                       :trendSon="downSelect"
                       @transferTrendValue="acceptTrendValue"
                       @transferTimeRangeValue="acceptTimeRangeValue"
      ></LineChartHeader>
      <div class="tab-charts">
        <el-tabs v-model="activeName" @tab-click ="tabChart">
          <el-tab-pane label="新增开发者" name="1">
            <div class="containers">
              <LineChart ref ="line1"
                         :time-axis = "timeSlotArr"
                         :lines ="lines"
                         :title = "title"
                         chart-id="a"
              ></LineChart>
            </div>
          </el-tab-pane>
          <el-tab-pane label="累计开发者" name="2">
            <div class="containers">
              <LineChart ref ="line2"
                         :time-axis = "timeSlotArr"
                         :lines ="lines"
                         :title = "title"
                         chart-id="b"
              ></LineChart>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
  import LineChartHeader from '../../../.././components/lineChartHeader'
  import LineChart from '../../../.././components/charts/lineChart'
  export default {
    data() {
      return {
        trendTitle: '整体趋势',
        activeName: '1',
        downSelect: [{
          value: 1,
          label: '按SDK统计'
        }, {
          value: 2,
          label: '按个人/企业统计'
        }],
        trendValue: 1,
        timeRangeValue: 2,
        lines : [{
          name:"ArcFace",data:[12,21,23,44,17,21,12]
        },{
          name:"PhotoStyling",data:[2,3,4,5,6,7,6]
        }],
        title : 'xx折线图',
        timeSlotArr: ['2017-1-2','2017-1-3','2017-1-4','2017-1-5','2017-1-6','2017-1-7',
          '2017-1-8'],
      }
    },
    components: {
      LineChartHeader,
      LineChart
    },
    methods: {
      acceptTrendValue(trendValue) {
        this.trendValue = trendValue
        console.log(this.trendValue)
      },
      acceptTimeRangeValue(timeRangeValue) {
        this.timeRangeValue = timeRangeValue
        console.log(timeRangeValue)
      },
      tabChart(){
        if (this.activeName === '2') {
          this.$nextTick(() => {
            this.$refs.line2.drawLine()
          })
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.$refs.line1.drawLine()
      })
    }
  }
</script>
<style lang="scss">
  #Number {
    .el-tabs__active-bar {
      background-color: #13CE66;
      height: 2px;
    }
    .el-tabs__item.is-active {
      color: #13CE66;
    }
    .containers {
      width: 100%;
      height: 400px;
    }
  }
</style>
