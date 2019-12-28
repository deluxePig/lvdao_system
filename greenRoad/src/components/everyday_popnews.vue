<template>
    <!--消息区查看详情弹框-->
    <div class="news_detailPopBox">
        <div class="nd_headBox">
            <span class="popBtn" :class="{active:showPage==1}" @click="chooseNews(1)">消息区</span>
            <span class="popBtn" :class="{active:showPage==2}" @click="chooseNews(2)">历史消息</span>
        </div>
        <div class="newMessageBox" v-if="showPage==1">
            <div class="newsGroup">
                <div class="title">
                    <span class="siteName">站点：{{newMessage.siteName}}</span>
                    <span class="siteAllNum">总量：{{newMessage.bikeNum}}</span>
                    <span class="tip" :class="{tip2:newMessage.content=='车辆偏多',tip3:newMessage.content=='满桩'}">({{newMessage.content}})</span>
                    <span class="time">{{newMessage.createTime}}</span>
                </div>
                <div class="drtailCon">
                    <div class="detailBikeGroup bikeBox">
                        <div class="total">自行车：{{newMessage.bick_total}}</div>
                        <ul class="bikeUl">
                            <li v-for="(item,index) in newMessage.brands" v-if="item.brandTotal>0">{{item.bikeBrand}}：{{item.brandTotal}}</li>
                        </ul>
                    </div>
                    <div class="detailBikeGroup elbikeBox">
                        <div class="total">电动车：{{newMessage.elbick_total}}</div>
                        <ul class="bikeUl">
                            <li v-for="(item,index) in newMessage.brands" v-if="item.brandEleTotal>0">{{item.bikeBrand}}：{{item.brandEleTotal}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="newMessageBox" v-else>
            <div class="histroyBox">
                <div class="newsGroup" v-for="(item,index) in messageList">
                    <div class="title">
                        <span class="siteName">站点：{{item.siteName}}</span>
                        <span class="siteAllNum">总量：{{item.bikeNum}}</span>
                        <span class="tip" :class="{tip2:item.content=='车辆偏多',tip3:item.content=='满桩'}">({{item.content}})</span>
                        <span class="time">{{item.createTime}}</span>
                    </div>
                    <div class="drtailCon">
                        <div class="detailBikeGroup bikeBox">
                            <div class="total">自行车：{{item.bick_total}}</div>
                            <ul class="bikeUl">
                                <li v-for="(itd,ind) in item.brands" v-if="itd.brandTotal>0">{{itd.bikeBrand}}：{{itd.brandTotal}}</li>
                            </ul>
                        </div>
                        <div class="detailBikeGroup elbikeBox">
                            <div class="total">电动车：{{item.elbick_total}}</div>
                            <ul class="bikeUl">
                                <li v-for="(itd,ind) in item.brands" v-if="itd.brandEleTotal>0">{{itd.bikeBrand}}：{{itd.brandEleTotal}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pageList">
                <el-pagination
                        background
                        @current-change="handleCurrentChange"
                        :current-page.sync="pageChange.currentPage1"
                        :page-size="pageChange.page_size"
                        layout="total, prev, pager, next"
                        :total="pageChange.total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import $http from "@/utils/http";//引入调用后台函数
    import  bdMapObj from '@/utils/bdMap';//引入地图方法
    export default {
        name: 'dg-newpop',
        props:{
            siteId:{
                type:String,//当前字段类型
                default:"001"
            }
        },
        data () {
            return {
                showPage:1,//显示的
                /*最新消息*/
                newMessage:{
                    bikeNum: 2,
                    brands:[
                        {
                            bikeBrand: "星骑出行",
                            brandEleTotal: "2",
                            brandMobile: "13605792797",
                            brandTotal: "0"
                        }
                    ],
                    bick_total:"2",
                    elbick_total:"2",
                    content: "车辆偏少",
                    createTime: "2019-12-28 23:16:54",
                    messageId: 126840,
                    siteId: "010579030215",
                    siteName: "宾虹路宝岛眼镜",
                },
                messageList:[
                    {
                        bikeNum: 2,
                        brands:[
                            {
                                bikeBrand: "星骑出行2",
                                brandEleTotal: "2",
                                brandMobile: "13605792797",
                                brandTotal: "0"
                            }
                        ],
                        bick_total:"2",
                        elbick_total:"2",
                        content: "车辆偏少",
                        createTime: "2019-12-28 23:16:54",
                        messageId: 126840,
                        siteId: "010579030215",
                        siteName: "宾虹路宝岛眼镜",
                    }
                ],
                pageChange:{
                    currentPage1: 1,
                    page_size: 5,
                    total: 10,
                }

            }
        },
        methods: {
            /*地图跳转*/
            sitedClick(data){
               // console.log(data)
                 bdMapObj.toPoint(data.siteLon,data.siteLat)
               // bdMapObj.searchName(data.siteLon,data.siteLat,data.siteName)
                bdMapObj.bigTo(22)
            },
            /*选择消息/历史消息*/
            chooseNews(type){
                this.showPage=type
            },
            /*查询消息*/
            /*最新消息*/
            siteNewsDetail(){
                let that=this
                let reqData = {
                    url:'/superviseServer/message/site/get',
                    data:{
                        siteId:that.siteId,
                        pageNum:1,
                        pageSize:1,
                    }
                };
                $http._axios(reqData).then(response => {
                  //  console.log("点击消息详情查看该站点详情",response)
                    if(response.code == "200"){
                        let dataList=response.data.list[0]
                        let bick_total=0,elbick_total=0
                        $.each(dataList.brands,function (i,n) {
                            if(n.brandTotal){
                                bick_total=bick_total+Number(n.brandTotal)
                            }
                            if(n.brandEleTotal){
                                elbick_total=elbick_total+Number(n.brandEleTotal)
                            }
                        })
                        dataList.bick_total=bick_total
                        dataList.elbick_total=elbick_total
                        that.newMessage=dataList
                    }
                })
            },
            /*历史详情*/
            siteHistroyDetail(){
                let that=this
                let reqData = {
                    url:'/superviseServer/message/site/get',
                    data:{
                        siteId:that.siteId,
                        pageNum:that.pageChange.currentPage1,
                        pageSize:that.pageChange.page_size,
                    }
                };
                $http._axios(reqData).then(response => {
                    console.log("历史详情",response)
                    if(response.code == "200"){
                        let dataList=response.data.list
                        $.each(dataList,function (c,t) {
                            let bick_total=0,elbick_total=0
                            $.each(t.brands,function (i,n) {
                                if(n.brandTotal){
                                    bick_total=bick_total+Number(n.brandTotal)
                                }
                               if(n.brandEleTotal){
                                   elbick_total=elbick_total+Number(n.brandEleTotal)
                               }

                            })
                            t.bick_total=bick_total
                            t.elbick_total=elbick_total
                        })
                        that.messageList=dataList
                        that.pageChange.total=response.data.totalNumber
                    }
                })
            },
            /*翻页*/
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.siteHistroyDetail()
            }
        },
        computed: {
        },
        created: function () {

        },
        watch: {
            siteId:{
                handler(newvalue,oldvalue){

                },
                deep:true
            }
        },
        mounted () {
            let that=this;
            this.siteNewsDetail()
            this.siteHistroyDetail()
        }
    }
</script>

<style  lang="less" scoped>
    .news_detailPopBox{
        width:100%;
        height:100%;
        min-width: 450px;
        background:#fff;
        .nd_headBox{
            width:100%;
            height:0.4rem;
            border-bottom:1px solid #ddd;
            padding-left:15px;
            .popBtn{
                display: inline-block;
                padding:4px 12px;
                cursor: pointer;
                color:#bbb;
                font-size:17px;
                font-weight:600;
            }
            .popBtn:hover,
            .popBtn.active{
                color:#333;
                border-bottom:2px solid #333;
            }
        }
        .newMessageBox{
            width:100%;
            height:calc(~"100% - 0.45rem");
            overflow-y: auto;
            padding:10px;
            .newsGroup{
                width:100%;
                padding:12px;
                .title{
                    line-height: 0.35rem;
                    font-size:0.17rem;
                    .siteName{
                        display: inline-block;
                        font-size:0.2rem;
                        font-weight:600;
                        padding:0 5px;
                        color:#333;
                        margin-right:15px;
                    }
                    .tip{
                        display: inline-block;
                        color:#67c590;
                        padding:0 7px;
                    }
                    .tip2{
                        color:#ffb738;
                    }
                    .tip3{
                        color:#fc7c82;
                    }
                    .time{
                        float:right;
                    }
                }
                .drtailCon{
                    width:100%;
                    padding:5px;
                    padding-left:12px;
                    overflow: hidden;
                    border-bottom:1px dashed #ccc;
                    .detailBikeGroup{
                        width:50%;
                        float:left;
                        .total{
                            font-size:0.19rem;
                            color:#333;
                            font-weight:600;
                            line-height: 32px;
                        }
                        .bikeUl{
                            width:100%;
                            line-height: 30px;
                            font-size:0.19rem;
                            color:#a39f9f;
                            li{
                                padding-left:6px;
                            }
                        }
                    }
                    .bikeBox{

                    }
                    .elbikeBox{

                    }
                }
            }
            .histroyBox{
                width:100%;
                height:calc(~"100% - 0.45rem");
                overflow-y: auto;
            }
            .pageList{
                width:100%;
                height:0.45rem;
                padding-top:10px;
            }
        }
    }
</style>
