<template>
    <!--  柱状图-->
    <div :id="indexAll.id" class="base_pie">

    </div>
</template>

<script>
    // 引入echarts
    // import echarts from 'echarts'
    import $public from "@/utils/public";//引入公共方法
    export default {
        name: 'dg-bar',
        props:{
            indexBar:{//柱状图
                type:Object,//当前字段类型
                default: function () {// 默认值
                    return {
                        id:'bar1',
                        legendData:['上月','本月','净利润率'],
                        unit:"次",
                        colorList:['#95d4ff', '#1ba0ff', '#d85330', '#8fabc3','#a3c7d5','#c4ccce','#bdbdbd'],
                        xAxis:["06-01","06-02","06-03","06-04","06-05","06-06","06-07"],
                        seriesData:[
                            [45,45,63,55,25,76,45],
                            [22,33,23,34,77,76,34],
                        ],
                    }
                }
            }
        },
        data () {
            return {
                myChart:"",
                indexAll:this.indexBar,
            }
        },
        methods: {
            //构造饼状图函数
            funCreat(){
                let that = this;
                //定义y轴最大值、最小值
                let yAxisMax = 1;
                let yAxisMin = 1;
                let _option = {
                    title: {
                        show:false,
                        text: '',
                        x: 'center',
                        y: 0,
                        textStyle:{
                            color:'#B4B4B4',
                            fontSize:16,
                            fontWeight:'normal',
                        },

                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow',
                            label: {
                                show: true,
                                backgroundColor: '#7B7DDC',
                                color:'#333'
                            }
                        },
                       /* formatter: function (params) {
                            // console.log("params::");
                            // console.log(params);
                            let that=this
                            let htp=''
                            $.each(params,function (i,n) {
                                if(i==0){
                                    htp=htp+'<p>'+n.seriesName+':'+(n.data*100).toFixed(2)+'%</p>'
                                }else{
                                    htp=htp+'<p>'+n.seriesName+':'+$public.numberDeal(n.data)+'万元</p>'
                                }

                            })
                            let html='<div style="text-align: left;padding:3px 9px;"><p>时间：'+params[0].axisValue+'</p>'+htp+'</div>'
                            return html
                        }*/
                    },
                    legend: {
                        data: that.indexAll.legendData,
                        textStyle: {
                            color: '#333'
                        },
                        icon:'circle',
                        itemWidth:8,
                        itemHeight:8,
                        top:'20',
                        left:"16"
                    },
                    grid:{
                        x:'5%',
                        width:'90%',
                        y:'2%',
                        top: '60px', // 与容器底部的距离
                        bottom: '20px', // 与容器底部的距离
                    },
                    xAxis: {
                        data: that.indexAll.xAxis,
                        offset:0,
                        axisLine: {
                            lineStyle: {
                                color: '#bbb'
                            }
                        },
                        axisTick:{
                            show:false,
                        },
                    },
                    yAxis: [
                        {
                            show:true,
                            splitLine: {show: false},
                            min:0,
                            /* max: function(value) {
                                 yAxisMax = value.max;
                                 return (value.max * 1.2).toFixed(0);
                             },
                             min: function(value) {
                                 if(value.min < 0){
                                     yAxisMin = value.min;
                                     return (value.min * 1.2).toFixed(0);
                                 }else {
                                     yAxisMin = 0;
                                     return 0;
                                 }
                             },*/
                            axisLine: {
                                lineStyle: {
                                    color: '#bbb',
                                }
                            },
                            axisLabel:{
                                formatter:'{value}',
                            }
                        },
                        {
                            show:false,
                            splitLine: {show: false},
                            min:0,
                            /* max: function(value) {
                                 return (value.max * 1.2).toFixed(0);
                             },
                             min: function(value) { //y轴左右两边0刻度对齐 比例一致
                                 /!*return 0;*!/
                                 return ((value.max * yAxisMin)/yAxisMax * 1.2).toFixed(0);
                             },*/
                            axisLine: {
                                lineStyle: {
                                    color: '#B4B4B4',
                                }
                            },
                            axisLabel:{
                                formatter:'{value} ',
                            }
                        }],
                    series: []
                };
                _option.series = [];
                for(let i=0;i<that.indexAll.seriesData.length;i++){
                    _option.series.push({
                        name: that.indexAll.legendData[i],
                        type: 'bar',
                        color:that.indexAll.colorList[i],
                        data: that.indexAll.seriesData[i],
                        barWidth: 10,
                    })
                }
                that.myChart = this.$echarts.init(document.getElementById(that.indexAll.id));
                that.myChart.clear();
                that.myChart.setOption(_option);

            }
        },
        computed: {
        },
        created: function () {

        },
        watch: {
            indexBar:{
                handler(newvalue,oldvalue){
                    this.indexAll=newvalue;
                    this.funCreat();
                },
                deep:true
            }
        },
        mounted () {
            let that=this;
            setTimeout(function(){
                that.funCreat();
            },100)
            $(window).resize(function (){
                setTimeout(function(){
                    that.myChart.resize()
                },500)
            });

        }
    }
</script>

<style scoped>
    .base_pie{
        width:100%;
        height:100%;
    }
</style>
