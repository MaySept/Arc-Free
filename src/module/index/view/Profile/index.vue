<template>
  <div id="Profile">
    <div class="number-box">
      <span>10000</span>
      <p>累计开发者</p>
      <div></div>
      <i>ArcSoft</i>
    </div>
    <div class="number-box">
      <span>90000</span>
      <p>累计下载量</p>
      <div></div>
      <i>ArcSoft</i>
    </div>
    <div class="number-box">
      <span>270000</span>
      <p>累计调用量</p>
      <div></div>
      <i>ArcSoft</i>
    </div>
    <div class="trend-line-chart">
      <LineChartHeader :trendSon="downSelect"
                       :titleSon="trendTitle"
                       @transferTrendValue="acceptTrendValue"
                       @transferTimeRangeValue="acceptTimeRangeValue"
      ></LineChartHeader>
      <div class="tabs">
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
                         :lines ="lines2"
                         :title = "title"
                         chart-id="b"
              ></LineChart>
            </div>
          </el-tab-pane>
          <el-tab-pane label="新增下载量" name="3">
            <div class="containers">
              <LineChart ref ="line3"
                         :time-axis = "timeSlotArr"
                         :lines ="lines"
                         :title = "title"
                         chart-id="c"
              ></LineChart>
            </div>
          </el-tab-pane>
          <el-tab-pane label="累计下载量" name="4">
            <div class="containers">
              <LineChart ref ="line4"
                         :time-axis = "timeSlotArr"
                         :lines ="lines2"
                         :title = "title"
                         chart-id="d"
              ></LineChart>
            </div>
          </el-tab-pane>
          <el-tab-pane label="新增调用量" name="5">
            <div class="containers">
              <LineChart ref ="line5"
                         :time-axis = "timeSlotArr"
                         :lines ="lines"
                         :title = "title"
                         chart-id="e"
              ></LineChart>
            </div>
          </el-tab-pane>
          <el-tab-pane label="累计调用量" name="6">
            <div class="containers">
              <LineChart ref ="line6"
                         :time-axis = "timeSlotArr"
                         :lines ="lines2"
                         :title = "title"
                         chart-id="f"
              ></LineChart>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <el-row class="circular-box">
      <div class="circular-chart">
        <div class="title-distribution"><span>开发者分布</span></div>
        <div class="ring-containers">
          <RingChart ref="ring1" chart-id="ring-a" :chart-data="chartData"></RingChart>
        </div>
      </div>
      <div class="circular-chart">
        <LineChartHeader :trendSon="downSelect"
                         :titleSon="editionTitle"
                         @transferTrendValue="acceptEditionValue"
        ></LineChartHeader>
        <div class="ring-containers">
          <RingChart ref="ring2" chart-id="ring-b" :chart-data="chartData2"></RingChart>
        </div>
      </div>
    </el-row>
  </div>
</template>
<script>
  import LineChartHeader from '../../../.././components/lineChartHeader'
  import LineChart from '../../../.././components/charts/lineChart'
  import RingChart from '../../../.././components/charts/ringChart'
  export default {
    data() {
      return {
        downSelect: [{
          value: 1,
          label: 'ArcFace'
        }, {
          value: 2,
          label: 'PhotoStyling'
        }],
        activeName: '1',
        trendTitle: '整体趋势',
        editionTitle: '版本分布',
        trendValue: 1,
        timeRangeValue: 2,
        editionValue: 1,
        lines : [{
          name:"ArcFace",data:[1,2,3,4,7,10,22]
        },{
          name:"PhotoStyling",data:[2,3,4,5,6,7,6]
        }],
        lines2 : [{
          name:"ArcFace",data:[12,21,23,44,17,21,12]
        },{
          name:"PhotoStyling",data:[2,3,4,5,6,7,6]
        }],
        title : 'xx折线图',
        timeSlotArr: ['2017-1-2','2017-1-3','2017-1-4','2017-1-5','2017-1-6','2017-1-7',
          '2017-1-8'],
        chartData:[{
          name:'仅下载ArcFace',value:'100'
        }, {
          name:'仅下载PhotoStyling',value:'20'
        }, {
          name:'同时下载',value:'39'
        }, {
          name:'无任何下载',value:'5'
        }],
        chartData2:[{
          name:'ArcFace v1.0',value:'100'
        }, {
          name:'PhotoStyling v1.0',value:'50'
        }]
      }
    },
    components: {
      LineChartHeader,
      LineChart,
      RingChart
    },
    methods: {
      acceptTrendValue(trendValueSon) {
        this.trendValue = trendValueSon
        console.log(this.trendValue)
      },
      acceptTimeRangeValue(timeRangeValueSon) {
        this.timeRangeValue = timeRangeValueSon
        console.log(this.timeRangeValue)
      },
      acceptEditionValue(trendValueSon) {
        this.editionValue = trendValueSon
        console.log(this.editionValue)
      },
      tabChart(){
        if (this.activeName === '2') {
          this.$nextTick(() => {
            this.$refs.line2.drawLine()
          })
        }else if(this.activeName === '3') {
          this.$nextTick(() => {
            this.$refs.line3.drawLine()
          })
        }else if(this.activeName === '4') {
          this.$nextTick(() => {
            this.$refs.line4.drawLine()
          })
        }else if(this.activeName === '5') {
          this.$nextTick(() => {
            this.$refs.line5.drawLine()
          })
        }else if(this.activeName === '6') {
          this.$nextTick(() => {
            this.$refs.line6.drawLine()
          })
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.$refs.line1.drawLine()
        this.$refs.ring1.drawRing()
        this.$refs.ring2.drawRing()
      })
    }
  }
</script>
<style lang="scss">
  #Profile {
    .number-box {
      float: left;
      width: 30%;
      height: 100px;
      position: relative;
      span {
        color: #ffffff;
        font-size: 25px;
        margin-top: 12px;
        margin-left: 10px;
      }
      p {
        color: #ffffff;
        font-size: 10px;
        margin-left: 12px;
      }
      div {
        width: 100%;
        height: 25px;
        background-color: black;
        margin-top: 20px;
        opacity: 0.3;
      }
      i {
        position: absolute;
        color: #ffffff;
        bottom: 0;
        left: 40%;
      }
    }
    .number-box:nth-child(1) {
      background-color: RGB(0,192,239);
    }
    .number-box:nth-child(2) {
      background-color: RGB(0,166,90);
      margin: 0 5%;
    }
    .number-box:nth-child(3) {
      background-color: RGB(245,105,84);
    }
    .trend-line-chart {
      width: 100%;
      height: 500px;
      background-color: #ffffff;
      margin-top: 120px;
      border-top:2px solid RGB(243,156,18);
      .tabs {
        padding: 0 20px;
      }
      .containers {
        width: 100%;
        height: 400px;
      }
    }
    .circular-box {
      margin-top: 20px;
      .circular-chart {
        float: left;
        height: 320px;
        width: 49%;
        background-color: #ffffff;
      }
      .circular-chart:nth-child(1) {
        border-top:2px solid RGB(0,166,90);
        .title-distribution {
          width: 100%;
          height: 35px;
          padding: 2px 20px;
          box-shadow: 0 3px 3px rgba(0, 0, 0, 0.05);
          span {
            font-size: 10px;
            line-height: 30px;
          }
        }
      }
      .circular-chart:nth-child(2) {
        float: right;
        border-top:2px solid RGB(0,192,239);
        .time-select {
          display: none;
        }
      }
      .ring-containers {
        width: 100%;
        height: 300px;
        padding: 10px 20px;
        overflow: hidden;
      }
    }
    .el-tabs__active-bar {
      background-color: #13CE66;
      height: 2px;
    }
    .el-tabs__item.is-active {
      color: #13CE66;
    }
  }
</style>
