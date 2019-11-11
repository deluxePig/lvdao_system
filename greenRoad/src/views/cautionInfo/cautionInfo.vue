<template>
    <div id="cautionInfo">
        <div class="cautionInfo-box">
            <div class="cautionInfo-title">历史异常</div>
            <div class="cautionInfo-add">
                <el-button size="small" @click="onJumpPage()">返 回</el-button>
            </div>
            <div class="cautionInfo-table">
                <el-table :header-cell-style="{background:'#FAFAFA',color:'#555'}"
                          :row-class-name="tableRowClassName"
                          :data="caution.list"
                          style="width: 100%">
                    <el-table-column
                            type="index"
                            min-width="10">
                    </el-table-column>
                    <el-table-column
                            prop="cautionBrand"
                            label="品牌"
                            min-width="10">
                    </el-table-column>
                    <el-table-column
                            prop="cautionCreateTime"
                            label="告警时间"
                            min-width="25">
                    </el-table-column>
                    <el-table-column
                        prop="cautionMac"
                        label="告警的mac"
                        min-width="20">
                    </el-table-column>
                    <el-table-column
                            prop="siteName"
                            label="站点"
                            min-width="15">
                    </el-table-column>
                    <el-table-column
                            prop="cautionType"
                            label="类型"
                            min-width="15">
                        <template slot-scope="scope">{{ reData[scope.row.cautionType] }}</template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="cautionInfo-pagination">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="caution.currentPage"
                        :page-sizes="[5, 10, 30, 50, 80, 100]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="caution.totalNumber">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import cautionInfo from './cautionInfo'

    export default cautionInfo
</script>
<style scoped src="./cautionInfo.less?time=New Date()">

</style>