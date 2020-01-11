<template>
    <!--统计区查看详情弹框-->
    <div class="detailPopBox">
        <div class="detailPopHead">
            <span class="title xh">序号</span>
            <span class="title sitedId">站点ID</span>
            <span class="title name">站点名称</span>
            <span class="title num">站点车辆</span>
        </div>
        <div class="detailPopTableBox">
            <div class="detailPopTable">
                <div class="detailTableTr" v-for="(item,index) in citeDatalist" :key="index" :class="{two:index%2==0}">
                    <span class="con xh">{{index+1}}</span>
                    <span class="con sitedId" :title="item.siteId" @click="sitedClick(item)">{{item.siteId}}</span>
                    <span class="con name" :title="item.siteName">{{item.siteName}}</span>
                    <span class="con num">{{item.currentNum}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $http from "@/utils/http";//引入调用后台函数
    import  bdMapObj from '@/utils/bdMap';//引入地图方法
    export default {
        name: 'dg-bar',
        props:{
            citeDatalist:{//柱状图
                type:Array,//当前字段类型
                default: function () {// 默认值
                    return [
                        {
                            currentNum: 25,
                            siteBikeCeiling: 10,
                            siteCeiling: 3,
                            siteCreateTime: "2019-11-19 09:38:36.0",
                            siteId: "010579020033",
                            siteLat: 29.0953145,
                            siteLon: 119.6818455,
                            siteName: "东市南街851号少儿英语俱乐部前面",
                        },
                        {
                            currentNum: 25,
                            siteBikeCeiling: 10,
                            siteCeiling: 3,
                            siteCreateTime: "2019-11-19 09:38:36.0",
                            siteId: "010579020033",
                            siteLat: 29.0953145,
                            siteLon: 119.6818455,
                            siteName: "东市南街851号少儿英语俱乐部前面",
                        }

                    ]
                }
            }
        },
        data () {
            return {

            }
        },
        methods: {
            sitedClick(data){
                let that=this
                bdMapObj.clean()
                let reqData = {
                    url:'/superviseServer/site/search',
                    data:{
                        siteName:data.siteId,
                    }
                };
                $http._axios(reqData).then(response => {
                  //  console.log("搜索站点",response)
                    if(response.code == "200"){
                        let dataList=response.data
                        bdMapObj.printArea(dataList,"")
                        bdMapObj.bigTo(22)
                        that.$layer.closeAll();
                    }
                })

            }
        },
        computed: {
        },
        created: function () {

        },
        watch: {
            indexBar:{
                handler(newvalue,oldvalue){

                },
                deep:true
            }
        },
        mounted () {
            let that=this;

        }
    }
</script>

<style  lang="less" scoped>
    .detailPopBox{
        width:100%;
        height:100%;
        min-width: 450px;
        background:#fff;
        .detailPopHead{
            width:100%;
            height:0.45rem;
            line-height: 0.45rem;
            text-align: center;
            .title{
                width:30%;
                height:100%;
                display: inline-block;
                margin:0;
                float: left;
                background:#1a7bb2;
                color:#fff;
                font-weight:700;
                font-size:0.19rem;
            }
            .xh{
                width:6%;
            }
            .name{
                width:44%;
            }
            .num{
                width:19%;
            }
        }
        .detailPopTableBox{
            width:100%;
            height:calc(~"100% - 0.5rem");
            overflow-y: auto;
            .detailPopTable{
                width:100%;
                .detailTableTr{
                    width:100%;
                    height:0.45rem;
                    line-height: 0.45rem;
                    text-align: center;
                    .con{
                        width:30%;
                        height:100%;
                        display: inline-block;
                        border:1px dashed #ddd;
                        margin:0;
                        float: left;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .xh{
                        width:6%;
                    }
                    .num{
                        width:19%;
                    }
                    .name{
                        width:44%;
                    }
                    .sitedId{
                        cursor: pointer;
                    }
                    .sitedId:hover{
                        background:#aff0cb;
                    }
                }
                .detailTableTr.two{
                    .con{
                        background:#eee;
                    }
                }
            }
        }
        .detailPoplist{
            line-height: 0.5rem;
            border-bottom:1px dashed #cdcbcb;
            font-size:14px;
            .newslist{
                display: inline-block;
                padding:5px;
                min-width: 36px;
                width:19%;
            }
            .newslist:first-child{
                width:31%;
            }
            .newslist.siteName{
                width:31%;
            }
            .newslist.tip{
                color:#67c590;
            }
            .newslist.tip2{
                color:#ffb738;
            }
            .newslist.tip3{
                color:#fc7c82;
            }
            .bikeIteaBox{
                width:100%;
                height:auto;
                overflow: hidden;
                .bikesiteBox{
                    width:50%;
                    line-height: 32px;
                    float:left;
                    text-align: left;
                    padding-left:15px;
                    span{
                        display: inline-block;
                        padding:5px 7px;
                    }

                }
            }
        }
        .detailPoplist:hover{
            background:#ddd;
        }
    }
</style>
