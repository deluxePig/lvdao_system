
import $http from "@/utils/http";//引入调用后台函数

const operatStatis ={
    /*获取品牌占比*/
    getbrandData(that){
        let reqData = {
            url:'/superviseServer/statistics/brand/get',
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
}

export default operatStatis;
