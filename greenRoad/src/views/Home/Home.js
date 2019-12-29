import router from "../../router";
import api from '@/api'
import md5 from "md5";

export default {
    name: 'home',
    components: {},
    data() {
        return {
            /*导航*/
            navList: [
                {
                    title: "日常值守", childrenNav: this.$store.state.sysCityList, routerLink: "everyday"
                },
                {title: "设备管理", childrenNav: [], routerLink: "deviceManage"},
                {title: "运营统计", childrenNav: [], routerLink: "operatStatistic"},
                {title: "违规处罚", childrenNav: [], routerLink: "punishesCases"},
                {title: "评分评价", childrenNav: [], routerLink: "grade"},
            ],
            /*选中的路由*/
            homePageRouter: "everyday",
            navIsShow:1,//导航是否显示
            userName: '',
            caution: {},
            reData: {
                'return':'还车异常',
                'rent':'租车异常'
            },
            timer: '',
            userModule: [],  //权限
            sysCityList:this.$store.state.sysCityList
        }
    },
    computed: {
        navListModule: function () {
            if (this.userModule.length) {
                const arr = this.onInitList()
                return arr
            } else {
                return this.navList.slice(0, 1)
            }
        }
    },
    created: function () {
        this.userName = this.$ss.get('user').userName || ''
        this.userModule = (this.$ss.get('user').module || '').split(',')
    },
    mounted() {
        this.timer = setInterval(this.onCautionList, 10000);
       // this.$router.push({name: "everyday"})
        this.getUserCity()

    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
    methods: {
        onInitList() {
            let newNavList = {}
            for(let index in this.userModule) {
                newNavList[index] = this.navList.filter(item => item.title == this.userModule[index])
            }
            //console.log(newNavList)
            //console.log(Object.values(newNavList).reduce((a,b) => [...a, ...b], []))
            return Object.values(newNavList).reduce((a,b) => [...a, ...b], [])
        },
        onCautionList(){
            api.area.cautionList(1, 5).then(res => {
                if (res.code === 200) {
                  //  console.log("告警消息",res)
                    this.caution = res.data
                } else if (res.code === 20112){
                    this.$message.error(res.message);
                    this.$ss.remove('user');
                    this.$router.replace('/login')
                } else {
                    this.$message.error(res.message);
                }
            })
        },
        /*导航——打开*/
        handleOpen(key, keyPath) {
          //   console.log("打开",key, keyPath);
            if(key == "1-1"){
                this.chooseCity(key, keyPath)
            }
        },
        /*导航——关闭*/
        handleClose(key, keyPath) {
           //  console.log("关闭",key, keyPath);
            if(key == "1-1"){
                this.chooseCity(key, keyPath)
            }

        },
        /*选择城市*/
        chooseCity(key, keyPath){
            let that=this
          //  console.log("选择城市",key, keyPath);
            let cityIndex=keyPath[1].split("-")[1]
            cityIndex=Number(cityIndex)-1
         //   console.log("cityIndex",cityIndex,this.$store.state.sysCityList)
            this.$router.push({
                path: '/home/everyday',
                query: {
                    id: that.$store.state.sysCityList[cityIndex].id,
                    name: that.$store.state.sysCityList[cityIndex].name,
                    pId: that.$store.state.sysCityList[cityIndex].pid,
                    pName: "中国"
                }
            })
        },
        /*选择城市区域*/
        locationChoose(itemChild, itemThirdChild) {
            console.log("选择城市区域::")
            console.log(itemChild)
            console.log(itemThirdChild)
            this.$router.push({
                path: '/home/everyday',
                query: {
                    id: itemThirdChild.id,
                    name: itemThirdChild.name,
                    pId: itemChild.pid,
                    pName: itemChild.name
                }
            })
            /* this.$router.push({
                 name: 'everyday',
                 params: {
                     id: itemChild.id
                 }
             })*/
        },
        // 退出登录
        onLogout() {
            this.$confirm('请确认是否退出当前账号？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                api.account.logout().then(res => {
                    // console.log(1, res)
                    this.onLogoutLogic(res)
                })
            });
        },
        // 退出登录逻辑
        onLogoutLogic(res) {
            if (res.code === 200) {
                // 退出成功信息
                this.$message({
                    message: res.message,
                    type: 'success'
                });
            } else {
                //退出失败信息
                this.$message.error(res.message);
            }
            this.$ss.remove('user');
            this.$router.replace('/login')
        },
        /*获取用户城市区域*/
        getUserCity() {
            api.article.getUserCity(this)
        },
        onJumpPage(type) {
            if(type ==1) {
                this.$router.push('/home/bikeManage')
            } else if(type==2) {
                this.$router.push('/home/accountManage')
            }else{
                this.$router.push('/home/cityManage')
            }
        },
        onJump(url) {
            api.article.clearWrronNews(this)
            this.$router.push(`/home/${url}`)
        }
    },
    watch: {
        sysCityList:{
            handler(newvalue,oldvalue){
               //console.log("拥有的城市区域11",newvalue)
                this.navList[0].childrenNav=newvalue
            },
            deep:true
        }
    }
}