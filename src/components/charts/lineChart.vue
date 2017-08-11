<template>
  <div :id="chartId" class="my-chart">

  </div>
</template>
<script>
  export default{
    data(){
      return{
      }
    },
    watch: {
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
            startValue: (this.timeAxis.length - 30 > 0)?(this.timeAxis.length - 30):0, // 数据较多时一开始显示多少
//            filterMode:'empty',// 禁止关联使Y轴不能缩放
            show: false // 滑动条隐藏
          }, {
            type: 'inside'
          },
            /*    { //滑条样式
             type: 'slider',
             show: true,
             xAxisIndex: [0],
             handleSize: 20,//滑动条的 左右2个滑动条的大小
             height: 8,//组件高度
             left: 30, //左边的距离
             right: 40,//右边的距离
             bottom: 30,//右边的距离
             handleColor: '#ddd',//h滑动图标的颜色
             handleStyle: {
             borderColor: "#cacaca",
             borderWidth: "1",
             shadowBlur: 2,
             background: "#ddd",
             shadowColor: "#ddd",
             }
             }*/],
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
