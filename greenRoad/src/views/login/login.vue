<!-- 登录页-->
<template>
  <div id="login">
      <el-col :span="24">
          <div class="login-head">
              <div class="login-bg"></div>
              <div class="head-info">
                  <div class="head-title">共享单车监管系统</div>
                  <div class="login-container">
                      <div class="title">用户登录</div>
                      <div class="input-items">
                          <i class="el-icon-s-custom common"></i>
                          <el-input v-model="account" type="text"
                                    class="login-user"
                                    placeholder="请输入用户名">
                          </el-input>
                      </div>
                      <div class="input-items">
                          <i class="el-icon-s-help common"></i>
                          <el-input v-model="passWord" type="password"
                                    class="login-password"
                                    @keyup.enter.native="onLogin()"
                                    placeholder="请输入登录密码">
                          </el-input>
                      </div>
                      <div class="input-items-last clearfix">
                          <i class="el-icon-s-marketing common"></i>
                          <el-input v-model="code" type="text"
                                    class="fl login-cord"
                                    :maxlength="4"
                                    @keyup.enter.native="onLogin()"
                                    placeholder="请输入验证码">
                          </el-input>
                          <div id="v_container" class="fr"></div>
                      </div>
                      <el-checkbox-group v-model="rememb" style="text-align: left;padding-left: 4px;">
                          <el-checkbox label="记住密码" name="type"></el-checkbox>
                      </el-checkbox-group>
                      <div class="input-items" style="margin: 20px 0 0 0;">
                          <el-button type="primary" style="width:100%; height: 40px;font-family: PingFangSC-Medium;"
                                     @click.native="onLogin()"
                                     :loading="load">
                              登&nbsp;录
                          </el-button>
                      </div>
                  </div>
                  <div class="login-footer">
                      <span>主办单位：******** &nbsp;&nbsp; 技术支持：****</span><br>
                      <span>建议IE10 1024*768以上分辨率浏览本网站</span>
                  </div>
              </div>
          </div>
      </el-col>
  </div>
</template>

<script>
    import login from './login'
    export default login
</script>
<style scoped src="./login.less?time=New Date()">

</style>
