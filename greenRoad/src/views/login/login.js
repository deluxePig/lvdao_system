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
         onLogin () {
            api.account.login(this.account, md5(this.passWord)).then(res => {
                //console.log(1,res)
                this.onLoginLogic(res)
            })
        },
        //登录后的业务逻辑
        onLoginLogic(res) {
            if(res.code === 200) {
                this.$ss.set('user', res.data)
                this.fullScreen()   //全屏
                this.$router.replace('home')
                // 登录成功信息
                // this.$message({
                //     message: res.message,
                //     type: 'success'
                // });
            } else {
                //登录失败信息
                this.$message.error(res.message);
            }
        },
        fullScreen() {
            const el = document.documentElement;
            const rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
            if (typeof rfs != "undefined" && rfs) {
                rfs.call(el);
            }
            return
        }
    },
    watch: {}
}
