
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
                {name:"日",value:1},
                {name:"周",value:2},
                {name:"月",value:3},
                {name:"年",value:4},
            ],
            brandTimeChoose:1,//品牌占比选中的时间
            indexPieData:{ // 品牌占比数据
                id:'pie',
                legendData:['哈罗','膜拜','滴滴','青桔'],
                legendDataX:'left',
                valueType:'',
                name:'访问来源',
                unit:'%',
                colorList:['#fd5277', '#8476d5', '#fcd578', '#4bd0a3','#2bcdfc','#1ba0ff','#bdbdbd'],
                seriesData:[
                    {value:335,ratio:"30", name:'哈罗',id:'111'},
                    {value:310,ratio:"30", name:'膜拜',id:'222'},
                    {value:234,ratio:"30", name:'滴滴',id:'333'},
                    {value:135,ratio:"30", name:'青桔',id:'444'},
                ],
            },
            indexLinedata:{ //潮汐统计
                id:'line1',
                legendData:['潮汐统计'],
                unit:"%",
                colorList:['#58b9ff', 'rgba(154,181,200,.8)', '#d85330', '#8fabc3','#a3c7d5','#c4ccce','#bdbdbd'],
                xAxis:["06-01","06-02","06-03","06-04","06-05","06-06","06-07"],
                seriesData:[
                    [45,45,63,55,25,76,45],
                ],
            },
            indexBarData:{ //使用量统计
                id:'bar1',
                legendData:['上月','本月','净利润率'],
                unit:"次",
                colorList:['#95d4ff', '#1ba0ff', '#d85330', '#8fabc3','#a3c7d5','#c4ccce','#bdbdbd'],
                xAxis:["06-01","06-02","06-03","06-04","06-05","06-06","06-07"],
                seriesData:[
                    [45,45,63,55,25,76,45],
                    [22,33,23,34,77,76,34],
                ],
            },
            usageTimeChooseList:[ //使用量统计时间选择列表
                {name:"日",value:1},
                {name:"周",value:2},
                {name:"月",value:3},
                {name:"年",value:4},
            ],
            usageTimeChoose:1,//使用量统计选中的时间
            maxUsageList:[ //最大使用量站点列表
                {name:"人民广场"},
                {name:"高铁站北"},
                {name:"高铁站北2"},
                {name:"高铁站北3"},
                {name:"高铁站北4"},
            ]
        }
    },
    created:function(){

    },
    mounted(){

    },
    methods:{
        /*品牌占比时间选择*/
        brandTimeClick:function (data) {
            this.brandTimeChoose=data.value
        },
        /*使用量统计时间选择*/
        usageTimeClick:function (data) {
            this.usageTimeChoose=data.value
        },
    },
    watch:{

    }
}