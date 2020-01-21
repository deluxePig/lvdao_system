
import basePie from '@/components/echart_pie.vue'//饼图
import baseLine from '@/components/echart_line.vue'//折线图
import baseBar from '@/components/echart_bar.vue'//柱状图
export default {
    name: 'operatStatistic',
    components: {
        basePie,baseLine,baseBar
    },
    data (){
        return{
            brandTimeChooseList:[ //品牌占比时间选择列表
                {name:"日",value:0},
                {name:"周",value:1},
                {name:"月",value:2},
                {name:"年",value:3},
            ],
            brandTimeChoose:0,//品牌占比选中的时间
            indexPieData:{ // 品牌占比数据
                id:'pie',
                legendData:[],
                legendDataX:'left',
                valueType:'',
                name:'访问来源',
                unit:'辆',
                colorList:['#fd5277', '#fcd578','#2bcdfc','#1ba0ff','#bdbdbd','#2bcdfc','#1ba0ff','#bdbdbd'],
                seriesData:[

                ],
            },
            waterTimeChooseList:[ //潮汐统计时间选择列表
                {name:"日",value:0},
                {name:"周",value:1},
                {name:"月",value:2},
                {name:"年",value:3},
            ],
            waterTimeChoose:0,//品牌占比选中的时间
            indexLinedata:{ //潮汐统计
                id:'line1',
                legendData:['潮汐统计'],
                unit:"",
                colorList:['#fd5277', '#fcd578','#2bcdfc','#1ba0ff','#bdbdbd','#a3c7d5','#c4ccce','#bdbdbd'],
                xAxis:[],
                seriesData:[
                ],
            },
            indexBarData:{ //使用量统计
                id:'bar1',
                legendData:['上月','本月'],
                unit:"次",
                colorList:['#fd5277', '#fcd578','#2bcdfc','#1ba0ff','#bdbdbd','#a3c7d5','#c4ccce','#bdbdbd'],
                xAxis:["06-01","06-02","06-03","06-04","06-05","06-06","06-07"],
                seriesData:[
                    [45,45,63,55,25,76,45], //上月的数据
                    [22,33,23,34,77,76,34], //本月的数据
                ],
            },
            usageTimeChooseList:[ //使用量统计时间选择列表
                {name:"日",value:0},
                {name:"周",value:1},
                {name:"月",value:2},
                {name:"年",value:3},
            ],
            usageTimeChoose:0,//使用量统计选中的时间
            maxUsageList:[ //最大使用量站点列表
                {statisticsSiteName:"人民广场"},

            ]
        }
    },
    created:function(){

    },
    mounted(){
        this.$api.operatStatis.getbrandData(this)
        this.$api.operatStatis.tidalStatistics(this)
        this.$api.operatStatis.usedStatic(this)
        this.$api.operatStatis.maxUsedStatic(this)
    },
    methods:{
        /*品牌占比时间选择*/
        brandTimeClick:function (data) {
            this.brandTimeChoose=data.value
            this.$api.operatStatis.getbrandData(this)
        },
        /*最大使用量统计时间选择*/
        usageTimeClick:function (data) {
            this.usageTimeChoose=data.value
            this.$api.operatStatis.maxUsedStatic(this)
        },
        /*潮汐统计统计时间选择*/
        waterTimeClick:function (data) {
            this.waterTimeChoose=data.value
            this.$api.operatStatis.tidalStatistics(this)
        },
    },
    watch:{
       /* brandTimeChoose:{
            handler(newvalue,oldvalue){
                this.$api.operatStatis.getbrandData(this)
            },
            deep:true
        },*/

    }
}