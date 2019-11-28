<!-- 单车管理-->
<template>
    <div id="bikeManage">
        <div class="bikeManage-box">
            <div class="bikeManage-title">运营企业管理</div>
            <div class="bikeManage-add">
                <el-button size="small" type="primary" @click="onJumpPage()">新增企业</el-button>
            </div>
            <div class="bikeManage-table">
                <el-table :header-cell-style="{background:'#FAFAFA',color:'#555'}"
                          :row-class-name="tableRowClassName"
                          :data="bikeList"
                          border
                          style="width: 100%">
                    <el-table-column
                            fixed
                            prop="brandName"
                            label="品牌名称" width="100">
                    </el-table-column>
                    <el-table-column
                            prop="brandOperation"
                            label="运营企业" width="150" :show-overflow-tooltip='true'>
                    </el-table-column>
                    <el-table-column
                            prop="brandContactPerson"
                            label="联系人" width="120">
                    </el-table-column>
                    <el-table-column
                            prop="brandContactMobile"
                            label="联系方式" width="120">
                    </el-table-column>
                    <el-table-column
                            prop="brandOperationNum"
                            label="运维人数" width="100">
                    </el-table-column>
<!--                    <el-table-column-->
<!--                            prop="brandRealityNum"-->
<!--                            label="实际单车数量" width="120">-->
<!--                    </el-table-column>-->
                    <el-table-column
                            prop="brandBikeNum"
                            :label="'核定共享\n自行车'" width="100">
                    </el-table-column>
                    <el-table-column
                            prop="brandTrolleyBikeNum"
                            :label="'核定共享\n电动车'" width="100">
                    </el-table-column>
                    <el-table-column
                            prop="brandAddress" :show-overflow-tooltip='true'
                            label="联系地址">
                    </el-table-column>
                    <el-table-column v-if="myRole < 3" fixed="right" label="操作" width="150">
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                            <el-button
                                    size="mini"
                                    type="danger"
                                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
    import bikeManage from './bikeManage'

    export default bikeManage
</script>

<style scoped src="./bikeManage.less?time=New Date()">

</style>
