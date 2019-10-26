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
                        width="150"
                        trigger="hover">
                    <div class="homeHeadRight-pop">
                        <p @click="onLogout"><i class="el-icon-s-unfold"></i>退出登录</p>
                    </div>
                    <div slot="reference" class="userInfoWindow"></div>
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
                        <el-submenu v-for="(item,index) in navList" :index="(index+1).toString()">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span><router-link :to="{name:item.routerLink}">{{item.title}}</router-link></span>
                            </template>
                            <el-submenu v-for="(itemChild,inedxChild) in item.childrenNav"
                                        :index="(index+1).toString()+'-'+(inedxChild+1).toString()">
                                <template slot="title">{{itemChild.title}}</template>
                                <el-menu-item v-for="(itemThirdChild,inedxThirdChild) in itemChild.childrenNav"
                                              @click="locationChoose(itemThirdChild)"
                                              :index="(index+1).toString()+'-'+(inedxChild+1).toString()+'-'+(inedxThirdChild+1).toString()">
                                    {{itemThirdChild.title}}
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
