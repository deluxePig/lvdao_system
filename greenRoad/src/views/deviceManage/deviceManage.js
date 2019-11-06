import api from '@/api'

export default {
    name: 'deviceManage',
    components: {},
    data() {
        return {
            deviceList: []
        }
    },
    created: function () {

    },
    mounted() {
        this.onGetDeviceList()  //获取设备列表
    },
    methods: {
        onGetDeviceList() {
            api.equipment.getList().then(res => {
                if (res.code === 200 && res.data) {
                    this.deviceList = res.data
                    // console.log('设备接口', this.deviceList)
                }
            })
        },
    },
    watch: {}
}