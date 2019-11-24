
import $http from "@/utils/http";//引入调用后台函数
import  bdMapObj from '@/utils/bdMap';//引入地图方法

const everyday ={
    /*获取站点列表*/
    getSiteList(that){
       // console.log('获取站点列表参数',that.chooseCityData.id)
        let reqData = {
            url:'/superviseServer/site/area',
            data:{
                id:that.chooseCityData.id
            }
        };
        $http._axios(reqData).then(response => {
           // console.log("获取站点列表",response)
            if(response.code == "200"){
                let dataList=response.data
               /*  dataList=[
                                  {
                                      siteCeiling: 2,
                                      siteCreateTime: "2019-10-21 10:22:38.0",
                                      siteId: "100001",
                                      siteLat: 30.253831,
                                      siteLon: 120.186405,
                                      siteName: "站点1",
                                   },
                                  {
                                      siteCeiling: 2,
                                      siteCreateTime: "2019-10-21 10:22:38.0",
                                      siteId: "100001",
                                      siteLat: 30.260257,
                                      siteLon: 120.193878,
                                      siteName: "站点2",
                                  }
                              ]*/
                bdMapObj.clean()
             //   console.log("城市：",that.chooseCityData)
                if(dataList.length>0){
                    if(dataList[0].siteLon && dataList[0].siteLon!=''){
                        if(that.chooseCityData.id!="330785"){
                         bdMapObj.Geocoder(that.chooseCityData.pName,that.chooseCityData.name,that)
                        }
                        bdMapObj.printArea(dataList,that)



                    }else {
                        bdMapObj.Geocoder(that.chooseCityData.pName,that.chooseCityData.name,that)
                    }
                }else{
                    bdMapObj.Geocoder(that.chooseCityData.pName,that.chooseCityData.name,that)

                }


            }
        })
    },
    /*获取站点（单车/电动车）统计数据*/
    getSitestatisticsData(that){
        let reqData = {
            url:'/superviseServer/brand/all',
            data:{
                date:''
            }
        };
        $http._axios(reqData).then(response => {
            //console.log("获取站点（单车/电动车）统计数据",response)
            if(response.code == "200"){
                let dataList=response.data
                let bicycleAll=0,electrocarListAll=0
                $.each(dataList,function (i,n) {
                    bicycleAll=bicycleAll+n.brandRealityNum
                    electrocarListAll=electrocarListAll+n.brandTrolleyBikeNum
                })
                that.bicycle.list=dataList
                that.bicycle.total=bicycleAll
                that.electrocarList.list=dataList
                that.electrocarList.total=electrocarListAll
            }
        })
    },
    /*获取站点消息*/
    getSiteNewsData(that){
        let reqData = {
            url:'/superviseServer/message/site/get',
            data:{
                siteId:"",
                num:5,
            }
        };
        $http._axios(reqData).then(response => {
           // console.log("获取站点消息",response)
            if(response.code == "200"){
                let dataList=response.data
                that.newsList=dataList
            }
        })
    },
    /*搜索站点*/
    searchSite(that){
        let reqData = {
            url:'/superviseServer/site/search',
            data:{
                siteName:that.searchValue,
            }
        };
        $http._axios(reqData).then(response => {
            //console.log("搜索站点",response)
            if(response.code == "200"){
                let dataList=response.data
                bdMapObj.clean()
                bdMapObj.printArea(dataList)
            }
        })
    },
    /*点击消息详情查看该站点详情*/
    siteNewsDetail(that,siteId){
        let reqData = {
            url:'/superviseServer/message/site/get',
            data:{
                siteId:siteId,
                num:20,
            }
        };
        $http._axios(reqData).then(response => {
          //  console.log("点击消息详情查看该站点详情",response)
            if(response.code == "200"){
                let dataList=response.data
                let con=''
                $.each(dataList,function (i,n) {
                    let tipcont= '<span class="newslist tip">'+n.content+'</span>'
                    if(n.content == '车辆偏多'){
                        tipcont= '<span class="newslist tip2">'+n.content+'</span>'
                    }else if(n.content == '满桩'){
                        tipcont= '<span class="newslist tip3">'+n.content+'</span>'
                    }
                    let bikeSit=""
                    if(n.brands && n.brands.length >0){
                        $.each(n.brands,function (c,t) {
                            bikeSit=bikeSit+'<div class="bikesiteBox"><span class="title">'+t.bikeBrand+'：</span><span class="num">'+t.brandTotal+'辆</span><span class="peo">联系人：'+t.brandMobile+'</span></div>'
                        })

                    }
                    con=con+'  <div class="detailPoplist"><div>' +
                        '<span class="newslist">'+n.createTime+'</span>' +
                        '<span class="newslist siteName">'+n.siteName+'</span>' +
                        '<span class="newslist">总数：'+n.bikeNum+'辆</span>'+tipcont+'</div>' +
                        '<div class="bikeIteaBox">'+bikeSit+'</div>' +
                        '</div>'
                })
                let cont=' <div class="detailPopBox">'+con+'</div>'
                that.$layer.confirm(cont,{
                    type: 0, //0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
                    title: dataList[0].siteName+'消息详情',
                    area:['700px', '440px'], //宽高
                    offset: 'auto',

                });
            }
        })
    },
}

export default everyday;


