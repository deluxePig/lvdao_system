<template>
    <!--  饼状图-->
    <div class="base_pieBox">
        <div :id="indexAll.id" class="base_pie">
        </div>
        <div class="echartLableBox">
            <div class="echartLable" v-for="(item,index) in indexAll.seriesData">
                <b class="ico" :style="{background:indexAll.colorList[index]}"></b>
                <span class="name">{{item.name}}</span>—
                <span class="value">核定投放量：{{item.value}} </span>
                <span class="value" style="padding-left:12px;">占比：{{item.ratio}}% </span>
            </div>
        </div>
    </div>

</template>

<script>
    // 引入echarts
    // import echarts from 'echarts'
    export default {
        name: 'dg-pie',
        props:{
            indexPie:{//饼状图
                type:Object,//当前字段类型
                default: function () {// 默认值
                    return {
                        id:'pie',
                        legendData:['哈罗','膜拜','滴滴','青桔'],
                        legendDataX:'left',
                        valueType:'',
                        name:'访问来源',
                        unit:'',
                        colorList:['#fd5277', '#fcd578','#2bcdfc','#1ba0ff','#bdbdbd'],
                        seriesData:[
                            {value:335,ratio:"30", name:'哈罗',id:'111'},
                            {value:310,ratio:"30", name:'膜拜',id:'222'},
                            {value:234,ratio:"30", name:'滴滴',id:'333'},
                            {value:135,ratio:"30", name:'青桔',id:'444'},
                        ],
                    }
                }
            }
        },
        data () {
            return {
                myChart4:"",
                indexAll:this.indexPie,
            }
        },
        methods: {
            //构造饼状图函数
            funPie(){
                let that = this;
                let _option = {
                    title:{
                        text: "",
                        show:false,
                        x:'center',
                        y:'center',
                        textStyle:{
                            color:'#fff',
                            fontSize:30
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        // formatter: "{b} : {c}"+that.indexAll.unit+" ({d}%)"
                        formatter: function(param){
                            // console.log("param::")
                            // console.log(param)
                            return param.data.name+':'+param.value+that.indexAll.unit+param.percent+'%'
                        }
                    },
                    legend: {
                        show:true,
                        right:"3px",
                        top:"3px",
                        itemGap:5,
                        /*  itemWidth:0,
                        itemHeight:0,
                      textStyle:{
                            color:"#3691d2",
                            fontSize:12,
                            borderColor:"#3691d2",
                            borderWidth:1,
                            padding:[2,15],
                            borderRadius:10,
                            lineHeight:16
                        },
                        inactiveColor:'#eee',
                        icon:'stack',*/
                        data:that.indexAll.legendData
                    },
                    calculable : true,
                    series : [
                        {
                            name:that.indexAll.name,
                            type:'pie',
                            radius : ['30%', '65%'],
                            center: ['20%', '55%'],
                            hoverAnimation:true,
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        var colorList = that.indexAll.colorList;
                                        return colorList[params.dataIndex];
                                    },
                                    label : {
                                        show : false,
                                        fontSize:12,
                                        // formatter: "{b}\n\n{c}",
                                        color:'#333',
                                        formatter: function(param){
                                            let value = '';
                                            if (that.indexAll.valueType == 'ratio'){//显示占比
                                                value = param.percent+'%';
                                            }else {//显示值
                                                value = param.data.value;
                                            }
                                            return param.data.name+'\n\n'+value;
                                        }
                                    },
                                    labelLine : {
                                        show : true,
                                        length2:40,
                                        lineStyle:{
                                            color:'#cecece'
                                        }
                                    }
                                }
                            },
                            data:that.indexAll.seriesData
                        }
                    ]
                };
                that.myChart4 = this.$echarts.init(document.getElementById(that.indexAll.id));
                that.myChart4.clear();
                that.myChart4.setOption(_option);
            },
        },
        computed: {

        },
        created: function () {

        },
        watch: {
            indexPie:{
                handler(newvalue,oldvalue){
                    this.indexAll=newvalue;
                    this.funPie();
                },
                deep:true
            }
        },
        mounted () {
            let that=this;
            setTimeout(function(){
                that.funPie();
            },100)
            $(window).resize(function (){
                setTimeout(function(){
                    that.myChart4.resize()
                },500)

            });

        }
    }
</script>

<style scoped>
    .base_pieBox{
        width:100%;
        height:100%;
        position: relative;
    }
    .base_pie{
        width:100%;
        height:100%;
        z-index:80;
    }
    .echartLableBox{
        width:50%;
        height:60%;
        position: absolute;
        right:0;
        top:25%;
        z-index:85;
    }
    .echartLable{
        width:100%;
        line-height: 0.35rem;
        font-size:0.17rem;
        color:#aaa;
        text-align: left;
    }
    .echartLable .ico{
        display: inline-block;
        width:12px;
        height:12px;
        border-radius: 50%;
        margin-right:2px;
        vertical-align: initial;
    }
    .echartLable .name{
        display: inline-block;
        padding:0 3px;
    }

</style>
