<!-- 单车管理-->
<template>
    <div id="bikeManage">
        <div class="bikeManage-box">
            <div class="bikeManage-title">单车管理</div>
            <div class="bikeManage-add">
                <el-button size="small" type="primary" @click="onJumpPage()">新增单车</el-button>
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
                            label="品牌运营单位名称" width="150" :show-overflow-tooltip='true'>
                    </el-table-column>
                    <el-table-column
                            prop="brandContactPerson"
                            label="联系人" width="120">
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
                            label="投放单车量" width="100">
                    </el-table-column>
                    <el-table-column
                            prop="brandTrolleyBikeNum"
                            label="投放电车量" width="100">
                    </el-table-column>
                    <el-table-column
                            prop="brandAddress" :show-overflow-tooltip='true'
                            label="品牌地址">
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="150">
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
