<!-- 设备管理-->
<template>
    <div id="deviceManage">
        <div class="deviceManage-box">
            <p class="deviceManage-title">设备管理</p>
            <div class="deviceManage-header">
                <el-row>
                    <el-col :span="3"><div>站点名称</div></el-col>
                    <el-col :span="3"><div>站点编号<p>（{{deviceData.totalNumber}}）</p></div></el-col>
                    <el-col :span="3"><div>蓝牙信标数量<p>（{{deviceData.eqSum}}）</p></div></el-col>
                    <el-col :span="3"><div>MAC地址</div></el-col>
                    <el-col :span="2"><div>信号强度</div></el-col>
                    <el-col :span="3"><div>电池电量</div></el-col>
                    <el-col :span="3"><div>上线时间</div></el-col>
                    <el-col :span="2"><div>经度</div></el-col>
                    <el-col :span="2"><div>纬度</div></el-col>

                </el-row>
            </div>
<!--            <div class="deviceManage-items">-->
<!--                <el-row class="device-content">-->
<!--                    <el-col :span="2">-->
<!--                        <div>柳湖花园</div>-->
<!--                    </el-col>-->
<!--                    <el-col :span="3">-->
<!--                        <div>057901001</div>-->
<!--                    </el-col>-->
<!--                    <el-col :span="2">-->
<!--                        <div>8</div>-->
<!--                    </el-col>-->
<!--                    <el-col :span="3">-->
<!--                        <div>-->
<!--                            <p>E3:56:G1:76:61</p>-->
<!--                            <p>E3:56:G1:76:62</p>-->
<!--                            <p>E3:56:G1:76:63</p>-->
<!--                            <p>E3:56:G1:76:64</p>-->
<!--                            <p>E3:56:G1:76:65</p>-->
<!--                        </div>-->
<!--                    </el-col>-->
<!--                    <el-col :span="2">-->
<!--                        <div>-->
<!--                            <p>80</p>-->
<!--                            <p>80</p>-->
<!--                            <p>80</p>-->
<!--                            <p>80</p>-->
<!--                            <p>80</p>-->
<!--                        </div>-->
<!--                    </el-col>-->
<!--                    <el-col :span="2">-->
<!--                        <div>-->
<!--                            <p>90%</p>-->
<!--                            <p>90%</p>-->
<!--                            <p>90%</p>-->
<!--                            <p>90%</p>-->
<!--                            <p>90%</p>-->
<!--                        </div>-->
<!--                    </el-col>-->
<!--                    <el-col :span="3">-->
<!--                        <div>-->
<!--                            <p>2019.09.11</p>-->
<!--                            <p>2019.09.11</p>-->
<!--                            <p>2019.09.11</p>-->
<!--                            <p>2019.09.11</p>-->
<!--                            <p>2019.09.11</p>-->
<!--                        </div>-->
<!--                    </el-col>-->
<!--                    <el-col :span="3">-->
<!--                        <div>2019.0912</div>-->
<!--                    </el-col>-->
<!--                    <el-col :span="2">-->
<!--                        <div>遗失</div>-->
<!--                    </el-col>-->
<!--                    <el-col :span="2">-->
<!--                        <div>-->
<!--                            <p>查看</p>-->
<!--                            <p>查看</p>-->
<!--                            <p>查看</p>-->
<!--                            <p>查看</p>-->
<!--                            <p>查看</p>-->
<!--                        </div>-->
<!--                    </el-col>-->
<!--                </el-row>-->
<!--            </div>-->

            <div class="deviceManage-items" v-for="item in deviceData.list" :key="item.siteId">
                <el-row class="device-content">
                    <el-col :span="3">
                        <div>{{item.siteName}}</div>
                    </el-col>
                    <el-col :span="3">
                        <div>{{item.siteId}}</div>
                    </el-col>
                    <el-col :span="3">
                        <div>{{item.siteCeiling}}</div>
                    </el-col>
                    <el-col :span="3">
                        <div v-for="(equipment, i) in item.equipments" :key="i">
                            <p>{{equipment.equipmentMac}}</p>
                        </div>
                    </el-col>
                    <el-col :span="2">
                        <div v-for="(equipment, i) in item.equipments" :key="i">
                            <p>{{equipment.equipmentSignal}}</p>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div v-for="(equipment, i) in item.equipments" :key="i">
                            <p>{{equipment.equipmentPower}}%</p>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div v-for="(equipment, i) in item.equipments" :key="i">
                            <p>{{equipment.equipmentOnlineTime | dateInit}}</p>
                        </div>
                    </el-col>
                    <el-col :span="2">
                        <div>{{item.siteLon}}</div>
                    </el-col>
                    <el-col :span="2">
                        <div>{{item.siteLat}}</div>
                    </el-col>
                </el-row>
            </div>
            <div class="deviceManage-pagination">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="deviceData.currentPage"
                        :page-sizes="[100]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="deviceData.totalNumber">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import deviceManage from './deviceManage'

    export default deviceManage
</script>
<style scoped src="./deviceManage.less?time=New Date()">

</style>
