<template>
    <!--  折线图-->
    <div :id="indexAll.id" class="base_line">

    </div>
</template>

<script>
    // 引入echarts
    // import echarts from 'echarts'
    export default {
        name: 'dg-line',
        props:{
            indexdata:{//折线图
                type:Object,//当前字段类型
                default: function () {// 默认值
                    return {
                        id:'line1',
                        legendData:['潮汐统计'],
                        unit:"%",
                        colorList:['#58b9ff', 'rgba(154,181,200,.8)', '#d85330', '#8fabc3','#a3c7d5','#c4ccce','#bdbdbd'],
                        xAxis:["06-01","06-02","06-03","06-04","06-05","06-06","06-07"],
                        seriesData:[
                            [45,45,63,55,25,76,45],
                        ],
                    }
                }
            },
            lengendShow:{
                type:Number,
                default:0
            }
        },
        data () {
            return {
                myChart:"",
                indexAll:this.indexdata,
            }
        },
        methods: {
            //构造折线图函数
            funCreat(){
                let that = this;
                // console.log("that.indexAll::")
                // console.log(that.indexAll)
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
                                color:'#333',
                            },
                        },
                       /* formatter: function (params) {
                            // console.log("params::");
                            // console.log(params);
                            // console.log(that.indexAll.unit);
                            let htp=''
                            $.each(params,function (i,n) {
                                htp=htp+'<p>'+n.seriesName+'：'+that.$public.numberDeal2(n.data).value+that.$public.numberDeal2(n.data).unit+that.indexAll.unit+'</p>'

                            })
                            let html='<div style="text-align: left;padding:3px 9px;"><p>时间：'+params[0].axisValue+'</p>'+htp+'</div>'
                            return html
                        }*/
                    },
                    legend: {
                        show:that.lengendShow==1?true:false,
                        data: that.indexAll.legendData,
                        textStyle: {
                            color: '#333'
                        },
                        top:'5%',
                        right:"7%"
                    },
                    grid:{
                        x:'30',
                        width:'96%',
                        y:'9%',
                        top:"30px",
                        bottom: '30px', // 与容器底部的距离
                    },
                    xAxis: {
                        data: that.indexAll.xAxis,
                        axisLine: {
                            lineStyle: {
                                color: '#bbb'
                            }
                        },
                        axisTick:{
                            show:false,
                        },
                    },
                    yAxis : [
                        {
                            show:true,
                            type : 'value',
                            axisLabel: {
                                fontSize:9,
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'#bbb',
                                    type:'solid'
                                },
                                textStyle:{
                                    fontSize:13
                                },
                            },
                            axisTick:{
                                show:false
                            },
                            splitLine:{
                                show: false
                            },
                        }
                    ],
                    series : []
                };
                _option.series = [];
                for(let i=0;i<that.indexAll.seriesData.length;i++){
                    _option.series.push({
                        name: that.indexAll.legendData[i],
                        type: 'line',
                        data: that.indexAll.seriesData[i],
                        label: {
                            show: true,
                            position: 'top',
                            color: that.indexAll.colorList[i],
                           /* formatter: function (params) {
                                // console.log("params::");
                                // console.log(params);
                                return that.$public.numberDeal2(params.value).value+that.$public.numberDeal2(params.value).unit+that.indexAll.unit
                            }*/
                        },
                        animationDuration: 1000,
                        itemStyle: {
                            normal: {
                                color: that.indexAll.colorList[i],
                                lineStyle: {
                                    color: that.indexAll.colorList[i],
                                },

                            }
                        },
                        symbol: 'circle',
                        symbolSize: 9
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
            indexdata:{
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
    .base_line{
        width:100%;
        height:100%;
    }
</style>
