import api from '@/api'

export default {
    name: 'addAccount',
    components: {},
    data() {
        var checkName = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('用户名不能为空'));
            } else {
                callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            cityOptions: [],
            areaOptions: [],
            userId: '',
            myRole: 0,
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
                userName: '',
                password: '',
                checkPass: '',
                mobile: '',
                roleId: '',
                cityId: '',
                areaId: '',
                meid: ''
            },
            rules: {
                password: [
                    {validator: validatePass, required: true, trigger: 'blur'}
                ],
                checkPass: [
                    {validator: validatePass2, required: true, trigger: 'blur'}
                ],
                userName: [
                    {validator: checkName, required: true, trigger: 'blur'}
                ],
                mobile: [
                    {required: false, trigger: 'blur'}
                ],
                meid: [
                    {required: false, trigger: 'blur'}
                ],
                roleId: [
                    {required: true, message: '请选择账户权限', trigger: 'change'}
                ],
                cityId: [
                    {required: false, trigger: 'change'}
                ],
                areaId: [
                    {required: false, trigger: 'change'}
                ]
            }
        }
    },
    computed: {
        roleOp: function () {
            if (this.myRole === 1) {
                return this.roleOptions
            } else if (this.myRole === 2) {
                return this.roleOptions.filter(item => item.value > 3)
            }

        }
    },
    created: function () {
        this.userId = this.$route.query.id || ''
        this.myRole = this.$ss.get('user').roleId
    },
    mounted() {
        this.onCityList()
        if (this.userId) {
            this.onGetUserInfo()
        }
    },
    methods: {
        onCityList() {
            api.area.getAreaList(1).then(res => {
                if (res.code === 200) {
                    this.cityOptions = res.data.map(o => {
                        return {value: o.id, label: o.name}
                    });
                    // console.log('城市列表', this.cityOptions)
                } else {
                    this.$message.error(res.message);
                }
            })
        },
        onAddAccount() {
            api.account.addAccount(this.ruleForm).then(res => {
                if (res.code === 200) {
                    this.$message.success(res.message);
                    this.$router.push('/home/accountManage')
                } else {
                    this.$message.error(res.message);
                }
            })
        },
        onModifyUser() {
            api.account.modifyUser(this.ruleForm).then(res => {
                if (res.code === 200) {
                    this.$message.success(res.message);
                    this.$router.push('/home/accountManage')
                } else {
                    this.$message.error(res.message);
                }
            })
        },
        onGetUserInfo() {
            api.account.getUserInfo(this.userId).then(res => {
                if (res.code === 200) {
                    this.ruleForm.userName = res.data.userName
                    this.ruleForm.roleId = res.data.roleId
                    this.ruleForm.cityId = res.data.cityId
                    if (this.ruleForm.cityId) {
                        this.onAreaList(this.ruleForm.cityId)
                    }
                    this.ruleForm.areaId = res.data.areaId
                    this.ruleForm.meid = res.data.meid
                    // console.log(this.ruleForm)
                } else {
                    this.$message.error(res.message);
                }
            })
        },
        onBack() {
            this.$router.push('/home/accountManage')
        },
        onSelectChange(val) {
            console.log(val)
            this.ruleForm.areaId = ''
            this.onAreaList(val)
        },
        onAreaList(pid) {
            api.area.getAreaList(pid).then(res => {
                if (res.code === 200) {
                    this.areaOptions = res.data.map(o => {
                        return {value: o.id, label: o.name}
                    });
                    console.log('区域列表', this.areaOptions)
                } else {
                    this.$message.error(res.message);
                }
            })
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (this.userId) {
                        this.ruleForm.id = this.userId
                        this.onModifyUser()
                    } else {
                        this.onAddAccount()
                    }
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            if (this.userId) {
                this.onBack()
            } else {
                this.$refs[formName].resetFields();
            }
        }
    },
    watch: {}
}