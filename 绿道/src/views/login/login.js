import 'utils/gVerify'

export default {
    name: 'login',
    components: {},
    data() {
        return {
            account: '',
            passWord: '',
            code: '',
            load: false,
            flag: true,
            rememb: false //记住密码
        }
    },
    created: function () {

    },
    mounted() {
        const verifyCode = new GVerify("v_container")
    },
    methods: {},
    watch: {}
}
