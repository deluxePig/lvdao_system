import api from '@/api'
import isvalid from '@/utils/public'

export default {
    name: 'addBike',
    components: {},
    data() {
        var validPhone=(rule, value,callback)=>{
            if (!value){
                callback(new Error('请输入联系人手机号'))
            }else if (!isvalid.isvalidPhone(value)){
                callback(new Error('请输入正确的11位手机号码'))
            }else {
                callback()
            }
        };
        return {
            bikeId: '',
            ruleForm: {
                brandName: '',
                brandOperation: '',
                brandAddress: '',
                brandContactPerson: '',
                brandContactMobile: '',
                brandOperationNum: '',
                brandDispatchImg: '0',
                brandBikeNum: '',
                brandTrolleyBikeNum: '',
                brandApprovalImg: '',
                otherImg: ''
            },
            rules: {
                brandName: [
                    {required: true, message: '请填写品牌名称', trigger: 'blur'}
                ],
                brandOperation: [
                    {required: true, message: '请填写品牌运营单位名称', trigger: 'blur'}
                ],
                brandAddress: [
                    {required: true, message: '请填写品牌地址', trigger: 'blur'}
                ],
                brandContactPerson: [
                    {required: true, message: '请填写品牌联系人', trigger: 'blur'}
                ]
                ,brandContactMobile: [
                    {required: true, validator: validPhone, trigger: 'blur'}
                ],
                brandOperationNum: [
                    {required: true, message: '请填写品牌运维人员数量'},
                    {type: 'number', message: '品牌运维人员数量必须为数字值'}
                ],
                brandBikeNum: [
                    {required: true, message: '请填写品牌核定共享自行车总量'},
                    {type: 'number', message: '品牌核定共享自行车总量必须为数字值'}
                ],
                brandTrolleyBikeNum: [
                    {required: true, message: '请填写品牌核定共享电动车总量'},
                    {type: 'number', message: '品牌核定共享电动车总量必须为数字值'}
                ],
                brandApprovalImg: [
                    {required: true, message: '请填写政府批文图(图片局域网地址)', trigger: 'blur'}
                ],
                otherImg: [
                    {required: true, message: '请填写其他图(图片局域网地址)', trigger: 'blur'}
                ]
            }
        }
    },
    computed: {},
    created: function () {
        this.bikeId = this.$route.query.id || ''
    },
    mounted() {
        if (this.bikeId) {
            this.onGetBrandInfo()
        }
    },
    methods: {
        onAddBike() {
            api.brand.addBrand(this.ruleForm).then(res => {
                if (res.code === 200) {
                    console.log('新增单车', res)
                    this.$message.success(res.message);
                    this.$router.push('/home/bikeManage')
                } else {
                    this.$message.error(res.message);
                }
            })
        },
        onUpdateBrand() {
            api.brand.updateBrand(this.ruleForm).then(res => {
                if (res.code === 200) {
                    this.$message.success(res.message);
                    this.$router.push('/home/bikeManage')
                } else {
                    this.$message.error(res.message);
                }
            })
        },
        onGetBrandInfo() {
            api.brand.getBrandInfo(this.bikeId).then(res => {
                if (res.code === 200) {
                    this.ruleForm = res.data[0]
                    // console.log(res.data)
                } else {
                    this.$message.error(res.message);
                }
            })
        },
        onBack() {
            this.$router.push('/home/bikeManage')
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (this.bikeId) {
                        this.ruleForm.brandId = this.bikeId
                        this.onUpdateBrand()
                    } else {
                        this.onAddBike()
                    }
                } else {
                   // console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            if (this.bikeId) {
                this.onBack()
            } else {
                this.$refs[formName].resetFields();
            }
        },
        onJumpBack() {
            this.$router.go(-1)
        }
    },
    watch: {}
}