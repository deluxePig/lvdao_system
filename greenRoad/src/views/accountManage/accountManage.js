import api from '@/api'

export default {
    name: 'accountManage',
    components: {},
    data() {
        return {
            myRole: '',
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
        this.myRole = this.$ss.get('user').roleId || ''
    },
    mounted() {
        this.onGetList()    //获取用户列表
    },
    methods: {
        onGetList() {
            api.account.getList(this.pageNum, this.pageSize).then(res => {
                if (res.code === 200) {
                    this.userData = res.data
                    // console.log('用户列表', this.userData)
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
           // console.log(index, row);
            this.onJumpPage(row.id)
        },
        handleDelete(index, row) {
          //  console.log(index, row);
            this.$confirm('此操作将永久删除该账户, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.onDeleteUser(row.id)
            });
        },
        onDeleteUser(id) {
            api.account.deleteUser(id).then(res => {
                if (res.code === 200) {
                    this.$message.success(res.message);
                    this.onGetList()
                } else {
                    this.$message.error(res.message);
                }
            })
        },
        onJumpPage(id) {
            if(id) {
                this.$router.push({path: '/home/addAccount', query: {id: id}})
            } else {
                this.$router.push('/home/addAccount')
            }
        },
        onJumpBack() {
            this.$router.go(-1)
        },
        onJump(url) {
            this.$router.push(`/home/${url}`)
        }
    },
    watch: {}
}