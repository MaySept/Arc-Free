<template>
  <div id="T-FaceTracking">
    <div class="border-top">
      <LineChartHeader @transferTimeRangeValue="acceptTimeRangeValue">
        <span slot="titleSlot">整体趋势</span>
      </LineChartHeader>
      <div class="tab-charts">
        <el-tabs v-model="activeName" @tab-click ="tabChart">
          <el-tab-pane label="新增调用量" name="1">
            <div class="containers">
              <LineChart ref ="line1"
                         :time-axis = "timeSlotArr"
                         :lines ="lines"
                         :title = "title"
                         chart-id="a"
              ></LineChart>
            </div>
          </el-tab-pane>
          <el-tab-pane label="累计调用量" name="2">
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
    <div class="edition-table">
      <EditionTab :editionDataSon="editionData"
                  @transferValue="acceptValue"
      ></EditionTab>
    </div>
  </div>
</template>
<script>
  import LineChartHeader from '../../../.././components/lineChartHeader'
  import EditionTab from '../../../.././components/editionTab'
  import LineChart from '../../../.././components/charts/lineChart'
  export default {
    data() {
      return {
        activeName: '1',
        editionData: [{
          editionName: 'init',
          WAdd: 200,
          WCumulative: 200,
          AAdd: 200,
          ACumulative: 200,
          IAdd: 200,
          ICumulative: 200,
        }, {}, {}],
        timeRangeValue: 2,
        editionValue: 1,
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
          '2017-1-8']
      }
    },
    components: {
      LineChartHeader,
      EditionTab,
      LineChart
    },
    methods: {
      acceptTimeRangeValue(timeRangValue) {
        this.timeRangeValue = timeRangValue
        console.log(this.timeRangeValue)
      },
      acceptValue(editionValue) {
        this.editionValue = editionValue
        console.log(this.editionValue)
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
  #T-FaceTracking {
    .down-select {
      display: none;
    }
    .el-tabs__active-bar {
      background-color: #13CE66;
      height: 2px;
    }
    .el-tabs__item.is-active {
      color: #13CE66;
    }
    .edition-table {
      padding: 20px 20px;
      margin-top: 10px;
      background-color: #ffffff;
    }
    .containers {
      width: 100%;
      height: 400px;
    }
  }
</style>
