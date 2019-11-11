<template>
    <div id="homePageBox">
        <!--顶部head-->
        <div class="homeHeadBox">
            <div class="logoTitleox lf">
                <img class="logoImg" src="" alt="">
                <span class="title">共享单车监管系统</span>
            </div>
            <div class="homeHeadRight lf">
                <el-popover
                        placement="bottom"
                        trigger="hover">
                    <div class="homeHeadRight-pop">
                        <p @click="onLogout"><i class="el-icon-switch-button"></i>退出登录</p>
                    </div>
                    <div slot="reference" class="userInfoWindow"><i class="el-icon-user-solid"></i>欢迎，{{userName}}</div>
                </el-popover>

                <el-popover
                        placement="bottom"
                        trigger="hover">
                    <div class="homeHeadRight-jg">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>异常单车告警</span>
                                <el-button style="float: right; padding: 3px 0" type="text" @click="onJump('cautionInfo')">历史详情</el-button>
                            </div>
                            <div v-for="o in caution.list" :key="o.id" class="text item">
                                <el-row>
                                    <el-col :span="12"><div>{{o.cautionCreateTime}}</div></el-col>
                                    <el-col :span="3"><div>{{o.cautionBrand}}</div></el-col>
                                    <el-col :span="4"><div>{{o.siteName}}</div></el-col>
                                    <el-col :span="5"><div>{{reData[o.cautionType]}}</div></el-col>
                                </el-row>
                            </div>
                        </el-card>
                    </div>
                    <div slot="reference" class="userInfoWindow">
                        <el-badge :value="caution.totalNumber" style="line-height: 25px;margin: 6px 12px 0 10px;">
                            <i class="el-icon-bell" style="font-size: 16px"></i>
                        </el-badge>
                    </div>
                </el-popover>

                <el-popover
                        placement="bottom"
                        trigger="hover">
                    <div class="homeHeadRight-pop setting-p">
<!--                        <p @click=""><i class="el-icon-star-off"></i>本地区投放量</p>-->
                        <p @click="onJumpPage()"><i class="el-icon-user"></i>账号管理</p>
                        <p @click="onJumpPage(1)"><i class="el-icon-bicycle"></i>单车管理</p>
                    </div>
                    <div slot="reference" class="userInfoWindow">
                        <i class="el-icon-setting" style="font-size: 16px"></i>设置
                    </div>
                </el-popover>
            </div>
        </div>
        <!--主题部分-->
        <div class="homePageBody">
            <!--导航-->
            <div class="navListBox">
                <el-col :span="24" style="width:101%;">
                    <el-menu
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-submenu v-for="(item,index) in navListModule" :index="(index+1).toString()">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span><router-link :to="{name:item.routerLink}">{{item.title}}</router-link></span>
                            </template>
                            <el-submenu v-for="(itemChild,inedxChild) in item.childrenNav"
                                        :index="(index+1).toString()+'-'+(inedxChild+1).toString()">
                                <template slot="title">{{itemChild.name}}</template>
                                <el-menu-item v-for="(itemThirdChild,inedxThirdChild) in itemChild.areas"
                                              @click="locationChoose(itemChild,itemThirdChild)"
                                              :index="(index+1).toString()+'-'+(inedxChild+1).toString()+'-'+(inedxThirdChild+1).toString()">
                                    {{itemThirdChild.name}}
                                </el-menu-item>
                            </el-submenu>
                        </el-submenu>
                    </el-menu>
                </el-col>
            </div>
            <!--主体页面-->
            <div class="homePageCon">
                <!-- <router-link v-bind:to="homePageRouter">路由</router-link>-->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Home from './Home'

    export default Home
</script>
<style scoped src="./Home.less?time=New Date()">

</style>
