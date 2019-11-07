import api from '@/api'

export default {
    name: 'accountManage',
    components: {},
    data() {
        return {
            user: {
                userName: '',
                password: '',
                mobile: '',
                roleId: '',
                cityId: '',
                areaId: '',
                meid: ''
            },
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
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        onAddAccount() {
            if(this.user.userName && this.user.password && this.user.roleId) {
                api.account.addAccount(this.user).then(res => {
                    console.log('创建用户', res)
                })
            } else {
                this.$message.error('请填写必填项...');
            }
        }
    },
    watch: {}
}