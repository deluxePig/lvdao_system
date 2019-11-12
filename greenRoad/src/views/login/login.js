import 'utils/gVerify'
import api from '@/api'
import md5 from 'md5'
import { Base64 } from 'js-base64'

export default {
    name: 'login',
    components: {},
    data() {
        return {
            zh:'',//账户
            account: '',
            passWord: '',
            verifyCode: '',
            code: '',
            load: false,
            flag: true,
            rememb: false //记住密码
        }
    },
    created: function () {
        this.zh = this.$ls.get('zh') || ''
    },
    mounted() {
        this.verifyCode = new GVerify("v_container")
        if(this.zh) {
            this.account = this.zh.account
            this.passWord = Base64.decode(this.zh.passWord)
            this.rememb = true
        }
    },
    methods: {
        onVerify() {
            const res = this.verifyCode.validate(this.code);
            if(res){
                this.onLogin()
            }else{
                this.$message.error("验证码错误");
                this.verifyCode.refresh()
            }
        },
        onLogin() {
            api.account.login(this.account, md5(this.passWord)).then(res => {
                //console.log(1,res)
                this.onLoginLogic(res)
            })
        },
        //登录后的业务逻辑
        onLoginLogic(res) {
            if (res.code === 200) {
                if(this.rememb) {
                    const zh = {
                        account: this.account,
                        passWord: Base64.encode(this.passWord)
                    }
                    this.$ls.set('zh', zh)
                } else {
                    this.$ls.remove('zh')
                }
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
