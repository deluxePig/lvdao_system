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
        onGetDeviceList() {
            api.equipment.getList(this.pageNum, this.pageSize).then(res => {
                if (res.code === 200 && res.data) {
                    this.deviceData = res.data
                    // console.log('设备接口', this.deviceList)
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
            const tiShi = type?'此操作将永久删除该站点, 该站点下的所有设备也将随之永久删除, 是否继续？': '此操作将永久删除该设备, 是否继续？'
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