
import $http from "@/utils/http";//引入调用后台函数

const operatStatis ={
    /*获取品牌占比*/
    getbrandData(that){
        let reqData = {
            url:'/superviseServer/statistics/brand/pie',
            data:{
                type:that.brandTimeChoose,
                date:''
            }
        };
        $http._axios(reqData).then(response => {
            console.log("获取品牌占比",response)
            if(response.code == "200"){
                let dataList=response.data
                let total=0
                $.each(dataList,function (i,n) {
                    total=total+Number(n.statisticsNum)
                })
                let legendData=[],seriesData=[]
                $.each(dataList,function (i,n) {
                    legendData.push(n.statisticsBrand)
                    seriesData.push({
                        value:n.statisticsNum,
                        ratio:((Number(n.statisticsNum)/total)*100).toFixed(2),
                        name:n.statisticsBrand,
                        id:n.statisticsId
                    })
                })
                that.indexPieData={ // 品牌占比数据
                    id:'pie',
                    legendData:legendData,
                    legendDataX:'left',
                    valueType:'',
                    name:'访问来源',
                    unit:'辆',
                    colorList:['#fd5277', '#8476d5', '#fcd578', '#4bd0a3','#2bcdfc','#1ba0ff','#bdbdbd'],
                    seriesData:seriesData,
                }
            }
        })
    },
    /*潮汐统计*/
    tidalStatistics(that){
        let reqData = {
            url:'/superviseServer/statistics/brand/get',
            data:{
                type:1,
            }
        };
        $http._axios(reqData).then(response => {
            console.log("潮汐统计",response)
            if(response.code == "200"){
                let dataList=response.data
                let xAxis=[],legendData=[],seriesData=[]
                $.each(dataList,function (i,n) {
                    xAxis.push(n.weekOfYear)
                    if(legendData.indexOf(n.statisticsBrand) == -1){
                        legendData.push(n.statisticsBrand)
                        seriesData.push([])
                    }
                })
                $.each(dataList,function (i,n) {
                    $.each(legendData,function (c, t) {
                        if(n.statisticsBrand==t){
                            seriesData[c].push(n.statisticsNum)
                        }
                    })
                })
                // console.log(xAxis)
                // console.log(legendData)
                // console.log(seriesData)
                that.indexLinedata={ //潮汐统计
                    id:'line1',
                    legendData:legendData,
                    unit:"",
                    colorList:['#58b9ff', 'rgba(154,181,200,.8)', '#d85330', '#8fabc3','#a3c7d5','#c4ccce','#bdbdbd'],
                    xAxis:xAxis,
                    seriesData:seriesData,
                }
            }
        })
    },
    /*使用量统计*/
    usedStatic(that){
        let reqData = {
            url:'/superviseServer/statistics/brand/get',
            data:{
                type:that.usageTimeChoose,
                date:''
            }
        };
        $http._axios(reqData).then(response => {
            console.log("使用量统计",response)
            if(response.code == "200"){
                let dataList=response.data
                let xAxis=[],legendData=[],seriesData=[[],[]]
                if(that.usageTimeChoose==0){
                    legendData=['本月近7天','上月近7天']
                    seriesData=[[],[]]
                }else if(that.usageTimeChoose==1){
                    legendData=['当前周']
                    seriesData=[[]]
                }else if(that.usageTimeChoose==3){
                    legendData=['本年','去年']
                    seriesData=[[],[]]
                }else{
                    legendData=['本月','上月']
                    seriesData=[[],[]]
                }
                $.each(dataList,function (i,n) {
                    if(that.usageTimeChoose==1){
                        xAxis.push(n.weekOfYear)
                    }else{
                        xAxis.push(n.statisticsDate)
                    }

                    seriesData[0].push(n.statisticsNum)
                    if(n.lastStatisticsNum && n.lastStatisticsNum!=null){
                        seriesData[1].push(n.lastStatisticsNum)
                    }else{
                        if(that.usageTimeChoose!=1){
                            seriesData[1].push('')
                        }

                    }
                })
                // console.log(xAxis)
                // console.log(legendData)
                // console.log(seriesData)
                that.indexBarData={ //使用量统计
                    id:'bar1',
                        legendData:legendData,
                        unit:"次",
                        colorList:['#95d4ff', '#1ba0ff', '#d85330', '#8fabc3','#a3c7d5','#c4ccce','#bdbdbd'],
                        xAxis:xAxis,
                        seriesData:seriesData
                }
            }
        })
    },
    /*最大使用量站点*/
    maxUsedStatic(that){
        let reqData = {
            url:'/superviseServer/statistics/site/get',
            data:{
                date:''
            }
        };
        $http._axios(reqData).then(response => {
            console.log("最大使用量站点",response)
            if(response.code == "200"){
                let dataList=response.data
                that.maxUsageList=dataList
            }
        })
    },
}

export default operatStatis;
