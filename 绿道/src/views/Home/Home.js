import router from "../../router";

export default {
    name: 'home',
    components: {
    },
    data (){
        return{
            /*导航*/
            navList:[
                {title:"日常值守",childrenNav:[
                    {title:"金华市",cityCode:"01",childrenNav:[
                            {title:"金东区",cityCode:"01-1"},
                            {title:"婺城区",cityCode:"01-2"},
                            {title:"开发区",cityCode:"01-3"},
                        ]}
                    ],routerLink:"everyday"},
                {title:"运营统计",childrenNav:[],routerLink:"operatStatistic"},
                {title:"违规处罚",childrenNav:[],routerLink:"punishesCases"},
                {title:"设备管理",childrenNav:[],routerLink:"deviceManage"},
                {title:"评分评价",childrenNav:[],routerLink:"grade"},
            ],
            /*选中的路由*/
            homePageRouter:"everyday"
        }
    },
    created:function(){

    },
    mounted(){
        this.$router.push({name:"everyday"})
    },
    methods:{
        /*导航*/
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        /*选择城市区域*/
        locationChoose(itemChild){
            console.log("选择城市区域::")
            console.log(itemChild)
        }
    },
    watch:{

    }
}