<template>
  <div id="D-FaceRecognition">
    <div class="border-top">
      <LineChartHeader @transferTimeRangeValue="acceptTimeRangeValue">
        <span slot="titleSlot">整体趋势</span>
      </LineChartHeader>
      <div class="tab-charts">
        <el-tabs v-model="activeName" @tab-click ="tabChart">
          <el-tab-pane label="新增下载量" name="1">
            <div class="containers">
              <LineChart ref ="line1"
                         :time-axis = "timeSlotArr"
                         :lines ="lines"
                         :title = "title"
                         chart-id="a"
              ></LineChart>
            </div>
          </el-tab-pane>
          <el-tab-pane label="累计下载量" name="2">
            <div class="containers">
              <LineChart ref ="line2"
                         :time-axis = "timeSlotArr"
                         :lines ="lines"
                         :title = "title2"
                         chart-id="b"
                         :is-stacked="true"
              ></LineChart>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="distribution-map">
      <LineChartHeader :trendSon="downSelect"
                       :titleSon="trendTitle"
                       @transferTrendValue="acceptTrendValue"
      ></LineChartHeader>
      <div class="map-list">
        <div class="map-list-">
          <div class="header">xxxxx</div>
          <div class="ring-containers">
            <RingChart ref="ring1" chart-id="ring-a" :chart-data="chartData"></RingChart>
          </div>
        </div>
        <div class="map-list-">
          <div class="header">xxxxxx</div>
          <div class="ring-containers">
            <RingChart ref="ring2" chart-id="ring-b" :chart-data="chartData"></RingChart>
          </div>
        </div>
        <div class="map-list-">
          <div class="header">xxxxxx</div>
          <div class="ring-containers">
            <RingChart ref="ring3" chart-id="ring-c" :chart-data="chartData"></RingChart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import LineChartHeader from '../../../.././components/lineChartHeader'
  import LineChart from '../../../.././components/charts/lineChart'
  import RingChart from '../../../.././components/charts/ringChart'
  export default {
    data() {
      return {
        activeName: '1',
        trendTitle: '分布图',
        downSelect: [{
          value: 1,
          label: '不同OS'
        }, {
          value: 2,
          label: '不同版本'
        }],
        timeRangeValue: 2,
        trendValue: 1,
        lines : [{
          name:"11",data:[12,21,23,44,17,21,12]
        }, {
          name:"22",data:[2,3,4,5,6,7,6]
        }, {
          name:"33",data:[12,21,23,44,17,15,12]
        }, {
          name:"44",data:[12,21,21,28,17,43,27]
        }, {
          name:"55",data:[12,21,32,11,17,21,12]
        }, {
          name:"66",data:[12,21,23,44,17,43,32]
        }, {
          name:"77",data:[1,21,12,12,17,12,12]
        }, {
          name:"88",data:[23,21,23,44,17,21,43]
        }, {
          name:"99",data:[12,12,23,12,17,32,10]
        }],
        title : '普通折线图',
        title2 : '堆积折线图',
        timeSlotArr: ['2017-1-2','2017-1-3','2017-1-4','2017-1-5','2017-1-6','2017-1-7',
          '2017-1-8'],
        chartData:[{
          name:'111',value:'100'
        }, {
          name:'222',value:'50'
        }, {
          name:'333',value:'50'
        }]
      }
    },
    components: {
      LineChartHeader,
      LineChart,
      RingChart
    },
    methods: {
      acceptTimeRangeValue(timeRangValue) {
        this.timeRangeValue = timeRangValue
        console.log(this.timeRangeValue)
      },
      acceptTrendValue(trendValue) {
        this.trendValue = trendValue
        console.log(this.trendValue)
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
        this.$refs.ring1.drawRing()
        this.$refs.ring2.drawRing()
        this.$refs.ring3.drawRing()
      })
    }
  }
</script>
<style lang="scss">
  #D-FaceRecognition{
    .el-tabs__active-bar {
      background-color: #13CE66;
      height: 2px;
    }
    .el-tabs__item.is-active {
      color: #13CE66;
    }
    .border-top {
      height: 500px;
      .down-select {
        display: none;
      }
    }
    .distribution-map {
      margin-top: 10px;
      height: 350px;
      border-top: 2px solid #13CE66;
      background-color: #ffffff;
      .time-select {
        display: none;
      }
      .map-list {
        padding: 10px 20px;
      }
      .map-list- {
        float: left;
        width: 30%;
        height: 290px;
        border: 1px solid darkgray;
      }
      .map-list-:nth-child(2) {
        margin: 0 5%;
      }
      .header {
        height: 35px;
        border-bottom: 1px solid darkgray;
        padding: 10px 20px;
        background-color: RGB(238,241,246);
      }
    }
    .containers {
      width: 100%;
      height: 390px;
    }
    .ring-containers {
      width: 100%;
      height: 270px;
      padding: 10px 20px;
      overflow: hidden;
    }
  }
</style>
