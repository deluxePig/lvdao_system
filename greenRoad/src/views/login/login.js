import 'utils/gVerify'
import api from '@/api'
import md5 from 'md5'

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
    methods: {
        onLogin() {
            api.account.login(this.account, md5(this.passWord))
        }

    },
    watch: {}
}
