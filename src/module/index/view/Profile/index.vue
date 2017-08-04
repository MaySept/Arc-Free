<template>
  <div id="profile">
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
      <LineChartHeader :trendSon="trend"
                       :titleSon="trendTitle"
                       @transferTrendValue="acceptTrendValue"
                       @transferTimeRangeValue="acceptTimeRangeValue"
      ></LineChartHeader>
    </div>
    <el-row class="circular-box">
      <div class="circular-chart">
        <div class="title-distribution"><span>开发者分布</span></div>
      </div>
      <div class="circular-chart">
        <LineChartHeader :trendSon="trend"
                         :titleSon="editionTitle"
                         @transferTrendValue="acceptEditionValue"
        ></LineChartHeader>
      </div>
    </el-row>
  </div>
</template>
<script>
  import LineChartHeader from '../../../.././components/lineChartHeader'
  export default {
    data() {
      return {
        trend: [{
          value: 1,
          label: 'ArcFace'
        }, {
          value: 2,
          label: 'PhotoStyling'
        }],
        trendTitle: '整体趋势',
        editionTitle: '版本分布',
        trendValue: 1,
        timeRangeValue: '',
        editionValue: 1
      }
    },
    components: {
      LineChartHeader
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
      }
    }
  }
</script>
<style lang="scss">
  #profile {
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
      height: 400px;
      background-color: #ffffff;
      margin-top: 120px;
      border-top:2px solid RGB(243,156,18);
    }
    .circular-box {
      margin-top: 20px;
      .circular-chart {
        float: left;
        height: 300px;
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
    }

  }
</style>
