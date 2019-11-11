import api from '@/api'

export default {
    name: 'cautionInfo',
    components: {},
    data() {
        return {
            caution: {
                list: [],
                currentPage: 1,
                totalNumber: 1,
                totalPage: 1
            },
            reData: {
                'return':'还车异常',
                'rent':'租车异常'
            },
            pageNum: 1,
            pageSize: 10
        }
    },
    created: function () {

    },
    mounted() {
        this.onCautionList()    //获取列表
    },
    methods: {
        onCautionList(){
            api.area.cautionList(this.pageNum, this.pageSize).then(res => {
                if (res.code === 200) {
                    this.caution = res.data
                    // console.log('告警', this.caution)
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
            this.onCautionList()
            // console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.pageNum = val
            this.onCautionList()
            // console.log(`当前页: ${val}`);
        },
        onJumpPage() {
            this.$router.push('/home')
        },
        onJump(url) {
            this.$router.push(`/home/${url}`)
        }
    },
    watch: {}
}