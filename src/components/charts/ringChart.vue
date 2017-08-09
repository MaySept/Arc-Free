<template>
  <div :id="chartId" class="ring-chart">

  </div>
</template>
<script>
  export default{
    data(){
      return{
//        colors:['#99ccff','#ff9966','#ffcccc','#99cc00','#ffff66']
      }
    },
    props:{
      chartId : String,
      chartData : Array
    },
    methods:{
      drawRing(){
        let myRing = this.$echarts.init(document.getElementById(this.chartId));

        let legendData = [];
        for(let i=0 ;i<this.chartData.length ;i++){
          legendData.push(this.chartData[i].name)

        }
        let option ={
          tooltip: {
            trigger: 'item',
//            formatter: "{a} <br/>{b}: {c} ({d}%)"
            formatter: "{b}: </br>{c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data: legendData
          },
          series: [
            {
//              name:'下载量',
              type:'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '10',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.chartData
            }
          ]
//          color : this.colors
        };
        myRing.setOption(option);
      }

    }
  }

</script>
<style lang="scss">
  .ring-chart{
    width: 100%;
    height: 100%;
  }
</style>
