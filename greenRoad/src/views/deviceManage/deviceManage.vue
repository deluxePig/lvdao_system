<!-- 设备管理-->
<template>
    <div id="deviceManage">
        <div id="deviceTop" class="deviceManage-box">
            <p class="deviceManage-title">设备管理</p>
            <div class="deviceManage-header">
                <el-row>
                    <el-col :span="2"><div>站点名称</div></el-col>
                    <el-col :span="2"><div>站点编号<p>（{{deviceData.totalNumber}}）</p></div></el-col>
                    <el-col :span="2"><div>蓝牙道钉<p>（{{deviceData.eqSum}}）</p></div></el-col>
                    <el-col :span="2"><div>道钉编号</div></el-col>
                    <el-col :span="2"><div>MAC地址</div></el-col>
                    <el-col :span="2"><div>信号强度</div></el-col>
                    <el-col :span="2"><div>电池电量</div></el-col>
                    <el-col :span="2"><div>上线时间</div></el-col>
                    <el-col :span="2"><div>经度</div></el-col>
                    <el-col :span="2"><div>纬度</div></el-col>
                    <el-col v-if="myRole == 1" :span="3"><div>设备管理</div></el-col>
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

            <div class="deviceManage-items" :class="moduleClass(item)" v-for="item in deviceData.list" :key="item.siteId">
                <el-row class="device-content">
                    <el-col :span="2">
                        <div>{{item.siteName}}</div>
                    </el-col>
                    <el-col :span="2">
                        <div>{{item.siteId}}</div>
                    </el-col>
                    <el-col :span="2">
                        <div>{{item.siteCeiling}}</div>
                    </el-col>
                    <el-col :span="2">
                        <div>
                            <div v-for="(equipment, i) in item.equipments" :key="i">
                                <p>{{equipment.equipmentNum | ddInit}}</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="2">
                        <div v-for="(equipment, i) in item.equipments" :key="i">
                            <p>{{equipment.equipmentMac}}</p>
                        </div>
                    </el-col>
                    <el-col :span="2">
                        <div v-for="(equipment, i) in item.equipments" :key="i">
                            <p>{{equipment.equipmentSignal}}</p>
                        </div>
                    </el-col>
                    <el-col :span="2">
                        <div v-for="(equipment, i) in item.equipments" :key="i">
                            <p>{{equipment.equipmentPower}}%</p>
                        </div>
                    </el-col>
                    <el-col :span="2">
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
                    <el-col v-if="myRole == 1" :span="2">
                        <div v-for="(equipment, i) in item.equipments" :key="i">
                            <el-button size="mini" @click="onDelete(equipment.equipmentMac)">删除</el-button>
<!--                            <el-button size="mini" type="text">删除</el-button>-->
                        </div>
                    </el-col>
                    <el-col v-if="myRole == 1" :span="2">
                        <div>
                            <el-button size="mini" type="danger" @click="onDelete(item.siteId,1)">删除</el-button>
<!--                            <el-button type="danger" size="mini" icon="el-icon-close" circle></el-button>-->
                        </div>
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
