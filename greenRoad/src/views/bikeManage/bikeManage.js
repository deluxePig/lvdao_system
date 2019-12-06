import api from '@/api'

export default {
    name: 'bikeManage',
    components: {},
    data() {
        return {
            bikeList: [],
            myRole: 0
        }
    },
    created: function () {
        this.myRole = this.$ss.get('user').roleId
    },
    mounted() {
        this.onGetBrandList()    //获取单车品牌列表
    },
    methods: {
        onGetBrandList() {
            api.brand.getBrandList().then(res => {
                if (res.code === 200) {
                    this.bikeList = res.data
                  //  console.log('单车列表', this.bikeList)
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
        handleEdit(index, row) {
           // console.log(index, row);
            this.onJumpPage(row.brandId)
        },
        handleDelete(index, row) {
          //  console.log(index, row);
            this.$confirm('此操作将永久删除该单车品牌, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.onDeleteBrand(row.brandId)
            });
        },
        onDeleteBrand(id) {
            api.brand.deleteBrand(id).then(res => {
                if (res.code === 200) {
                    this.$message.success(res.message);
                    this.onGetBrandList()
                } else {
                    this.$message.error(res.message);
                }
            })
        },
        onJumpPage(id) {
            if(id) {
                this.$router.push({path: '/home/addBike', query: {id: id}})
            } else {
                this.$router.push('/home/addBike')
            }
        },
        onJumpBack() {
            this.$router.go(-1)
        }
    },
    watch: {}
}