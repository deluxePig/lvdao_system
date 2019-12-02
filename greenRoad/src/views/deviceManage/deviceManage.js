import api from '@/api'

export default {
    name: 'deviceManage',
    components: {},
    data() {
        return {
            myRole: 0,
            deviceData: {
                list: [],
                eqSum: 0,
                currentPage: 1,
                totalNumber: 1,
                totalPage: 1
            },
            pageNum: 1,
            pageSize: 100
        }
    },
    created: function () {
        this.myRole = this.$ss.get('user').roleId
    },
    mounted() {
        this.onGetDeviceList()  //获取设备列表
    },
    methods: {
        moduleClass(arr) {
            if (arr) {
                return this.onHighlightRule(arr)
            } else {
                return ''
            }
        },
        onHighlightRule(arr) {
            let className = ''
            //标红规则
            //规则1 缺少站点名称 || 规则2 缺少站点编号 || 规则3 缺少经纬度 || 规则4 MAC数量和编号数量和道钉数量不一致
            if(!arr.siteName || !arr.siteId || !arr.siteLon || !arr.siteLat || arr.equipments.length !== parseInt(arr.siteCeiling)) {
                className = 'site-Highlight'
            }
            return className
        },
        onGetDeviceList() {
            api.equipment.getList(this.pageNum, this.pageSize).then(res => {
                if (res.code === 200 && res.data) {
                    this.deviceData = res.data
                    // console.log('设备接口', this.deviceList)
                    //跳到头部
                    let anchorElement = document.getElementById('deviceTop')
                    // 如果对应id的锚点存在，就跳转到锚点
                    if(anchorElement) { anchorElement.scrollIntoView(); }
                } else {
                    this.$message.error(res.message);
                }
            })
        },
        onDeleteSite(id, type) {
            api.equipment.deleteSite(id, type).then(res => {
                if (res.code === 200) {
                    this.$message.success(res.message);
                    this.onGetDeviceList()
                } else {
                    this.$message.error(res.message);
                }
            })
        },
        handleSizeChange(val) {
            this.pageSize = val
            this.onGetDeviceList()
            // console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.pageNum = val
            this.onGetDeviceList()
            // console.log(`当前页: ${val}`);
        },
        onDelete(id, type) {
            const tiShi = type ? '此操作将永久删除该站点, 该站点下的所有设备也将随之永久删除, 是否继续？' : '此操作将永久删除该设备, 是否继续？'
            this.$confirm(tiShi, '警告', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.onDeleteSite(id, type)
            });
        }
    },
    watch: {}
}