import router from "../../router";
import api from '@/api'
import md5 from "md5";

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
                        ]},
                        {title:"温州市",cityCode:"02",childrenNav:[
                                {title:"A区",cityCode:"02-1"},
                                {title:"B区",cityCode:"02-2"}
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
        },
        // 退出登录
        onLogout() {
            this.$confirm('请确认是否退出当前账号？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                api.account.logout().then(res => {
                    console.log(1,res)
                    this.onLogoutLogic(res)
                })
            });
        },
        // 退出登录逻辑
        onLogoutLogic(res) {
            if(res.code === 200) {
                // 退出成功信息
                this.$message({
                    message: res.message,
                    type: 'success'
                });
                this.$ss.remove('user');
                this.$router.replace('/login')
            } else {
                //退出失败信息
                this.$message.error(res.message);
            }
        }
    },
    watch:{

    }
}