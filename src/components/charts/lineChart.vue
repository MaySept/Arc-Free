<template>
  <div :id="chartId" class="my-chart">

  </div>
</template>
<script>
  export default{
    data(){
      return{
//        lines : [{name:"ArcFace",data:[1,2,3,4,7,10,22,23,28,33,34,35]},{name:"PhotoStyling",data:[2,3,4,5,6,7,8,9,20,36,39,46]}],
//        title : 'xx折线图',
//        timeSlotArr: ['2017-1-2','2017-1-3','2017-1-4','2017-1-5','2017-1-6','2017-1-7',
//          '2017-1-8','2017-1-9','2017-1-10','2017-1-11','2017-1-12','2017-1-13']
      }
    },
    props: {
      lines: Array, //对象数组，line:[{name,data数组}]
      isStacked :{  //是否堆积折线图
        type : Boolean,
        default : false
      },
      title : String,//图表标题
      subTitle : {
        type : String,
        default : ''
      },
      timeAxis : Array,//xAxis data数组
      chartId : String //绑定组件Id
    },
    methods:{
      drawLine(){
        let myChart = this.$echarts.init(document.getElementById(this.chartId));
        let series=[];
        let legend_data =[];
        //set chart series
        for(let i = 0;i<this.lines.length;i++){
          let curObj = {
                        name: this.lines[i].name,
                        type: 'line',
                        data: this.lines[i].data
                      }
          if(this.isStacked){
            curObj.stack = '总量'
          }
          series.push(curObj);
          legend_data.push(this.lines[i].name);
        }

        myChart.setOption({
          title : {
            text: this.title,
            subtext: this.subTitle,
            textStyle: {
              color: '#000',
              fontWeight: 'normal',
              fontSize: 14
            }
          },
          tooltip : {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985',
                show: true,
                precision: 0,
              }
            },
          },
          legend: {
            data: legend_data
          },
          toolbox: {
            show: true,
          },
          grid: {
            // 直角坐标系网格
            show: true,
            left: '4%',
            right: '4%',
            bottom: '10%',
            containLabel: true
          },
          calculable : true,
          xAxis : [
            {
              type: 'category',
              boundaryGap : false,
              data: this.timeAxis
            }
          ],
          dataZoom: [{
            startValue: (this.timeAxis.length - 10 > 0)?(this.timeAxis.length - 10):0,
          }, {
            type: 'inside'
          }],
          yAxis : [
            {
              type : 'value',
              axisLabel : {
                formatter: '{value}'
              }
            }
          ],
          series : series
        })
      }
    }
  }
</script>
<style>
  .my-chart{
    width: 100%; height: 100%;
  }
</style>
