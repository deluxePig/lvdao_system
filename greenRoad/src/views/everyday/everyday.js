
import  bdMapObj from '@/utils/bdMap';//引入地图方法
import  everydayPopnews from '@/components/everyday_popnews.vue';//引入xiaoxi详情弹框
export default {
    name: 'everyday',
    components: {
    },
    data(){
        return {
            chooseCityData:{ // 导航选中的城市区域信息
                id:'',
                name: '',
                pId: '',
                pName: '',
            },
            searchValue:"",//搜索的值
            bicycle:{ //单车数据
                total:"0",//总量
                list:[
                   /* {brandName:"哈喽",brandRealityNum:100,id:"b01"},
                    {brandName:"摩拜",brandRealityNum:100,id:"b01"},*/
                ]
            },
            electrocarList:{ //电动车数据
                total:"0",//总量
                list:[
                  /*  {brandName:"哈喽",brandTrolleyBikeNum:100,id:"b01"},
                    {brandName:"摩拜",brandTrolleyBikeNum:100,id:"b01"},*/
                ]
            },
            newsList:[ // 消息列表
            ],
            statisticsShow:1 ,//统计区是否展开
            newsShow:1 ,//消息区是否展开
            newsinfo:0,
            statisticsPopData:{}, //查看单车详情数据
        }
    },
    created:function(){

    },
    mounted(){
        let that=this
        this.creatMap() //初始化地图
        this.getSitestatisticsData() //获取站点统计数据
        this.getSiteNewsData() //获取站点消息数据
        let everInter=setInterval(function () {
            that.getSitestatisticsData() //获取站点统计数据
            that.getSiteNewsData() //获取站点消息数据
        },3000)
    },
    methods:{
        /*初始化百度地图*/
        creatMap:function () {
            var bdmap = new BMap.Map("bdMap",{minZoom:12,maxZoom:30}); // 创建Map实例,设置地图允许的最小/大级别
            var point = new BMap.Point(119.653872,29.084135);
            bdmap.centerAndZoom(point, 16);
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
        /*获取站点列表*/
        getSiteList(){
            this.$api.everyday.getSiteList(this)
        },
        /*获取导航选中的城市信息*/
        getNavCityData(){
             let that=this
            //console.log('获取导航选中的城市信息',this.$route.query)
            /* this.cityID=this.$route.query.id &&this.$route.query.id!="undefined"?this.$route.query.id:"";*/
            if(this.$route.query.id &&this.$route.query.id!="undefined"){

                that.getSiteList() //获取站点列表
            }
        },
        /*获取站点统计数据*/
        getSitestatisticsData(){
            this.$api.everyday.getSitestatisticsData(this)
        },
        /*获取站点消息数据*/
        getSiteNewsData(){
            this.$api.everyday.getSiteNewsData(this)
        },
        /*搜索站点*/
        searchSite(){
            this.$api.everyday.searchSite(this)
        },
        /*查看单车*/
        getbicycleDtail(data){
           // console.log("查看单车",data)
            this.statisticsPopData=data
            this.$api.everyday.bikeDetailShow(this,data)

// data参数可认为是componentName的props，同时 该方法会自动添加一个key为layerid的值， 该值为创建层的id， 可以直接用来关闭该层
// options参数直接写到json里即可，比如title
        },
        /*查看消息详情*/
        newsDetail(data){
            console.log("查看消息详情",data)
            let that=this
          //  this.$api.everyday.siteNewsDetail(this,data.siteId)
            that.$layer.iframe({
                content: {
                    content: everydayPopnews, //传递的组件对象
                    parent: that,//当前的vue对象
                    data:{
                        siteId:data.siteId
                    }//props
                },
                area:['860px','500px'],
                title:data.siteName+'消息列表',
                offset: 'auto',
            });
        },
        clickNews(){
            this.newsShow=1
            this.newsinfo=0
        }
    },
    watch:{
        $route(){
           // console.log("route",this.$route.query)
            this.chooseCityData=this.$route.query
        },
        chooseCityData:{
            handler(newvalue,oldvalue){
             //  console.log("监听区域ID",newvalue)
                this.getNavCityData()
            },
            deep:true
        },
        newsList:{
            handler(newvalue,oldvalue){
                 // console.log("监听区域ID",newvalue)
                if(this.newsShow==0){
                    this.newsinfo=1
                }
            },
            deep:true
        }
    }
}