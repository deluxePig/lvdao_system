
import  bdMapObj from '@/utils/bdMap';//引入地图方法
export default {
    name: 'everyday',
    components: {
    },
    data(){
        return {
            searchValue:"",//搜索的值
            bicycle:{ //单车数据
                total:"5000",//总量
                list:[
                    {name:"哈喽",value:100,id:"b01"},
                    {name:"摩拜",value:100,id:"b01"},
                ]
            },
            electrocarList:{ //电动车数据
                total:"5000",//总量
                list:[
                    {name:"哈喽",value:100,id:"b01"},
                    {name:"摩拜",value:100,id:"b01"},
                ]
            },
            newsList:[ // 消息列表
                {time:"2019.09.08 12:15",addres:"时代广场",num:3,tip:"数量较少",newsId:"n01"},
                {time:"2019.09.08 12:15",addres:"时代广场",num:3,tip:"数量较少",newsId:"n02"},
            ],
            statisticsShow:1 ,//统计区是否展开
            newsShow:1 ,//消息区是否展开
        }
    },
    created:function(){

    },
    mounted(){
        this.creatMap()
    },
    methods:{
        /*初始化百度地图*/
        creatMap:function () {
            var bdmap = new BMap.Map("bdMap",{minZoom:9,maxZoom:20}); // 创建Map实例,设置地图允许的最小/大级别
            var point = new BMap.Point(119.996351,30.548961);
            bdmap.centerAndZoom(point, 15);
            bdmap.enableScrollWheelZoom(true)
            bdMapObj.begin(bdmap);
        },
        /*地图放大*/
        mapBiger:function(){
            bdMapObj.big();
        },
        /*地图缩小*/
        mapSmall:function(){
            bdMapObj.small();
        },
        /*查看单车*/
        getbicycleDtail(data){

        },
        /*查看消息详情*/
        newsDetail(data){

        }
    },
    watch:{

    }
}