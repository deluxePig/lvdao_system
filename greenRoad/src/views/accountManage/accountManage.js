import api from '@/api'

export default {
    name: 'accountManage',
    components: {},
    data() {
        return {
            userData: {
                list: [],
                currentPage: 1,
                totalNumber: 1,
                totalPage: 1
            },
            pageNum: 1,
            pageSize: 10
        }
    },
    created: function () {

    },
    mounted() {
        this.onGetList()    //获取用户列表
    },
    methods: {
        onGetList() {
            api.account.getList(this.pageNum, this.pageSize).then(res => {
                if (res.code === 200) {
                    this.userData = res.data
                    console.log('用户列表', this.userData)
                } else {
                    this.$message.error(res.message);
                }
            })
        },
        tableRowClassName({row, rowIndex}) {
            if (rowIndex % 2) {
                return 'success-row';
            }
            return '';
        },
        handleSizeChange(val) {
            this.pageSize = val
            this.onGetList()
            // console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.pageNum = val
            this.onGetList()
            // console.log(`当前页: ${val}`);
        }
    },
    watch: {}
}