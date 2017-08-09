<template>
  <div id="Classification">
    <div class="border-top">
      <LineChartHeader @transferTimeRangeValue="acceptTimeRangeValue">
        <span slot="titleSlot">应用分类统计</span>
      </LineChartHeader>
      <div class="class-content">
        <div class="chart">
          <div class="header">PhotoStyling</div>
          <div class="ring-containers">
            <RingChart ref="ring1" chart-id="ring-a" :chart-data="chartData"></RingChart>
          </div>
        </div>
        <div class="chart">
          <div class="header">ArcFace</div>
          <div class="ring-containers">
            <RingChart ref="ring2" chart-id="ring-b" :chart-data="chartData"></RingChart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import LineChartHeader from '../../../.././components/lineChartHeader'
  import RingChart from '../../../.././components/charts/ringChart'
  export default {
    data() {
      return {
        timeRangeValue: 2,
        chartData:[{
          name:'仅下载ArcFace',value:'100'
        }, {
          name:'仅下载PhotoStyling',value:'20'
        }, {
          name:'同时下载',value:'39'
        }, {
          name:'无任何下载',value:'5'
        }],
      }
    },
    components: {
      LineChartHeader,
      RingChart
    },
    methods: {
      acceptTimeRangeValue(timeRangValue) {
        this.timeRangeValue = timeRangValue
        console.log(this.timeRangeValue)
      }
    },

    mounted() {
      this.$nextTick(() => {
        this.$refs.ring1.drawRing()
        this.$refs.ring2.drawRing()
      })
    }
  }
</script>
<style lang="scss">
  #Classification {
    .down-select {
      display: none;
    }
    .class-content {
      padding: 20px 20px;
      min-height: 450px;
      .chart {
        border: 1px solid darkgray;
        height: 400px;
        width: 49%;
        float: left;
      }
      .chart:nth-child(2) {
        float: right;
      }
      .header {
        height: 35px;
        border-bottom: 1px solid darkgray;
        padding: 10px 20px;
        background-color: RGB(238,241,246);
      }
    }
    .ring-containers {
      width: 100%;
      height: 350px;
      padding: 10px 20px;
      overflow: hidden;
    }
  }
</style>
