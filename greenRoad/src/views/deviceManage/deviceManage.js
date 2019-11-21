import api from '@/api'

export default {
    name: 'deviceManage',
    components: {},
    data() {
        return {
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
    },
    watch: {}
}