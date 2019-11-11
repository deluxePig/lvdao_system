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
                    title: "日常值守", childrenNav: [
                        /* {
                             id: 330100,
                             name: "杭州市",
                             pid: 330000,
                             areas: [
                                 {
                                     id: 330102,
                                     name: "上城区",
                                     pid: 330100,
                                 }
                             ],
                         },*/
                    ], routerLink: "everyday"
                },
                {title: "运营统计", childrenNav: [], routerLink: "operatStatistic"},
                {title: "违规处罚", childrenNav: [], routerLink: "punishesCases"},
                {title: "设备管理", childrenNav: [], routerLink: "deviceManage"},
                {title: "评分评价", childrenNav: [], routerLink: "grade"},
            ],
            /*选中的路由*/
            homePageRouter: "everyday",
            userName: '',
            userModule: []  //权限
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
        this.$router.push({name: "everyday"})
        this.getUserCity()
        this.$router.push({
            path: '/home/everyday',
            query: {
                /*   id: this.navList.childrenNav[0].areas[0].id,
                   name: this.navList.childrenNav[0].areas[0].name,
                   parentName: this.navList.childrenNav[0].name*/
            }
        })
    },
    methods: {
        onInitList() {
            let newNavList = {}
            for(let index in this.userModule) {
                newNavList[index] = this.navList.filter(item => item.title == this.userModule[index])
            }
            console.log(newNavList)
            console.log(Object.values(newNavList).reduce((a,b) => [...a, ...b], []))
            return Object.values(newNavList).reduce((a,b) => [...a, ...b], [])
        },
        /*导航——打开*/
        handleOpen(key, keyPath) {
            // console.log("打开",key, keyPath);
        },
        /*导航——关闭*/
        handleClose(key, keyPath) {
            // console.log("关闭",key, keyPath);
        },
        /*选择城市区域*/
        locationChoose(itemChild, itemThirdChild) {
            // console.log("选择城市区域::")
            // console.log(itemChild)
            // console.log(itemThirdChild)
            this.$router.push({
                path: '/home/everyday',
                query: {
                    id: itemThirdChild.id,
                    name: itemThirdChild.name,
                    pId: itemChild.name,
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
                    console.log(1, res)
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
                this.$ss.remove('user');
                this.$router.replace('/login')
            } else {
                //退出失败信息
                this.$message.error(res.message);
            }
        },
        /*获取用户城市区域*/
        getUserCity() {
            api.article.getUserCity(this)
        },
        onJumpPage(type) {
            if(type) {
                this.$router.push('/home/bikeManage')
            } else {
                this.$router.push('/home/accountManage')
            }
        }
    },
    watch: {}
}