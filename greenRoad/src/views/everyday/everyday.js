
import  bdMapObj from '@/utils/bdMap';//引入地图方法
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
            statisticsShow:0 ,//统计区是否展开
            newsShow:0 ,//消息区是否展开
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
            let that=this
           // let cont=$("#statisticsPop").html()
            let cont='  <div class="detailPopBox">\n' +
                '         <div class="detailPoplist">\n' +
                '             <span class="title">品牌名称：</span><span>'+data.brandName+'</span>\n' +
                '         </div>\n' +
                '          <div class="detailPoplist">\n' +
                '              <span class="title">品牌ID：</span><span>'+data.brandId+'</span>\n' +
                '          </div>\n' +
                '          <div class="detailPoplist">\n' +
                '              <span class="title">品牌账号：</span><span>'+data.brandAccount+'</span>\n' +
                '          </div>\n' +
                '          <div class="detailPoplist">\n' +
                '              <span class="title">品牌联系人：</span><span>'+data.brandContactPerson+'</span>\n' +
                '          </div>\n' +
                '          <div class="detailPoplist">\n' +
                '              <span class="title">品牌地址：</span><span>'+data.brandAddress+'</span>\n' +
                '          </div>\n' +
                '          <div class="detailPoplist">\n' +
                '              <span class="title">运营单位名称：</span><span>'+data.brandOperation+'</span>\n' +
                '          </div>\n' +
                '          <div class="detailPoplist">\n' +
                '              <span class="title">运维人员数量：</span><span>'+data.brandOperationNum+'</span>\n' +
                '          </div>\n' +
                '          <div class="detailPoplist">\n' +
                '              <span class="title">核定共享自行车：</span><span>'+data.brandRealityNum+'</span>\n' +
                '          </div>\n' +
                '          <div class="detailPoplist">\n' +
                '              <span class="title">核定共享电动车：</span><span>'+data.brandTrolleyBikeNum+'</span>\n' +
                '          </div>\n' +
                '      </div>'
         //   console.log(cont)
            that.$layer.confirm(cont,{
                type: 0, //0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
                title: data.brandName+'详情',
                area:['700px', '600px'], //宽高
                offset: 'auto',

            });

// data参数可认为是componentName的props，同时 该方法会自动添加一个key为layerid的值， 该值为创建层的id， 可以直接用来关闭该层
// options参数直接写到json里即可，比如title
        },
        /*查看消息详情*/
        newsDetail(data){
           // console.log(data)
            this.$api.everyday.siteNewsDetail(this,data.siteId)
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