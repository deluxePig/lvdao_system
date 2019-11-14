import api from '@/api'

export default {
    name: 'roleManage',
    components: {},
    data() {
        return {
            checkAll: false,
            cities: ['日常值守', '运营统计', '违规处罚', '设备管理', '评分评价'],
            isIndeterminate: true,
            roleOptions: [{
                value: 1,
                label: '超级管理员'
            }, {
                value: 2,
                label: '市级管理员'
            }, {
                value: 3,
                label: '区级管理员'
            }, {
                value: 4,
                label: '市操作员'
            }, {
                value: 5,
                label: '区操作员'
            }, {
                value: 6,
                label: 'app用户'
            }],
            ruleForm: {
                roleId: '',
                module: ['日常值守']
            },
            rules: {
                roleId: [
                    {required: true, message: '请选择账户权限', trigger: 'change'}
                ],
                module: [
                    {type: 'array', required: true, message: '请至少选择一个功能模块', trigger: 'change'}
                ]
            }
        }
    },
    created: function () {

    },
    mounted() {

    },
    methods: {
        handleCheckAllChange(val) {
            this.ruleForm.module = val ? this.cities : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        },
        onBack() {
            this.$router.push('/home/accountManage')
        },
        onRoleModule() {
            api.account.roleModule(this.ruleForm).then(res => {
                if (res.code === 200) {
                    this.onLogout()
                } else {
                    this.$message.error(res.message);
                }
            })
        },
        // 退出登录
        onLogout() {
            api.account.logout().then(res => {
                this.$message({
                    message: res.message,
                    type: 'success'
                });
                this.$ss.remove('user');
                this.$router.replace('/login')
            })
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$confirm('此操作将修改角色权限，修改后需重新登录账号，是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.onRoleModule()
                    });
                } else {
                  //  console.log('error submit!!');
                    return false;
                }
            });
        }
    },
    watch: {}
}