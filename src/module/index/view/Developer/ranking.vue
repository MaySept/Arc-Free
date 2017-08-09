<template>
  <div id="Ranking">
    <div class="border-top">
      <LineChartHeader :titleSon="trendTitle"
                       :trendSon="downSelect"
                       @transferTrendValue="acceptRankingValue"
                       @transferTimeRangeValue="acceptTimeRangeValue"
      ></LineChartHeader>
      <div class="table-box">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            fixed
            type="index"
            label="排序"
            align="center"
            width="80">
          </el-table-column>
          <el-table-column
            prop="photoStyling"
            label="PhotoStyling"
            align="center"
            width="120">
          </el-table-column>
          <el-table-column
            prop="PStotal"
            label="调用总量"
            align="center"
            width="120">
          </el-table-column>
          <el-table-column
            prop="faceDetection"
            label="FaceDetection"
            align="center"
            width="120">
          </el-table-column>
          <el-table-column
            prop="FDtotal"
            label="调用总量"
            align="center"
            width="120">
          </el-table-column>
          <el-table-column
            prop="faceTracking"
            label="FaceTracking"
            align="center"
            width="120">
          </el-table-column>
          <el-table-column
            prop="FTtotal"
            label="调用总量"
            align="center"
            width="120">
          </el-table-column>
          <el-table-column
            prop="faceRecognition"
            label="FaceRecognition"
            align="center"
            width="130">
          </el-table-column>
          <el-table-column
            prop="FRtotal"
            label="调用总量"
            align="center"
            width="120">
          </el-table-column>
        </el-table>
        <Pagination @pagination="getPagination" :totalFather='total'></Pagination>
      </div>
    </div>
  </div>
</template>
<script>
  import Pagination from '../../../.././components/pagination'
  import LineChartHeader from '../../../.././components/lineChartHeader'
  export default {
    data() {
      return {
        trendTitle: '排序方式',
        downSelect: [{
          value: 1,
          label: '使用频率'
        }, {
          value: 2,
          label: '主API调用量'
        }],
        rankingValue: 1,
        timeRangeValue: 2,
        total: 500,
        currentPage: 1,
        jumperToPage: 1,
        tableData: [{
          photoStyling: '',
          PStotal: '',
          faceDetection: '',
          PDtotal: '',
          faceTracking: '',
          FTtotal: '',
          faceRecognition: '',
          FRtotal: '',
        },{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
      }
    },
    components: {
      LineChartHeader,
      Pagination
    },
    methods: {
      acceptRankingValue(rankingValue) {
        this.rankingValue = rankingValue
        console.log(this.rankingValue)
      },
      acceptTimeRangeValue(timeRangValue) {
        this.timeRangeValue = timeRangValue
        console.log(this.timeRangeValue)
      },
      getPagination(currentPage, jumperToPage) {
        this.currentPage = currentPage || 1
        this.jumperToPage = jumperToPage || 1
        console.log(this.currentPage + '当前页')
        console.log(this.jumperToPage + '跳转页')
      }
    }
  }
</script>
<style lang="scss">
  #Ranking {
    .table-box {
      padding: 10px 20px;
    }
  /*  .el-table th,
    .el-table__fixed-header-wrapper thead div,
    .el-table__footer-wrapper thead div, .el-table__header-wrapper thead div{
      background-color: #ffffff;
    }*/
  }

</style>
