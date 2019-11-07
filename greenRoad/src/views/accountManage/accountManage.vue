<!-- 账号管理-->
<template>
    <div id="accountManage">
        <div class="accountManage-box">
            <div class="accountManage-title">账号管理</div>
            <div class="accountManage-add">
                <el-button size="small" type="primary" @click="onAddAccount()">新增账号</el-button>
            </div>
            <div class="accountManage-table">
                <el-table :header-cell-style="{background:'#FAFAFA',color:'#555'}"
                          :row-class-name="tableRowClassName"
                          :data="userData.list"
                          style="width: 100%">
                    <el-table-column
                            type="index"
                            min-width="10">
                    </el-table-column>
                    <el-table-column
                            prop="userName"
                            label="用户名"
                            min-width="15">
                    </el-table-column>
                    <el-table-column
                            prop="roleName"
                            label="权限"
                            min-width="15">
                    </el-table-column><el-table-column
                            prop="mobile"
                            label="手机号"
                            min-width="20">
                    <template slot-scope="scope">{{ scope.row.mobile?scope.row.mobile:'/' }}</template>
                    </el-table-column>
                    <el-table-column
                            prop="createTime"
                            label="日期"
                            min-width="20">
                        <template slot-scope="scope">{{ scope.row.createTime | dateInit }}</template>
                    </el-table-column>
                    <el-table-column label="操作" min-width="20">
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
            <div class="accountManage-pagination">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="userData.currentPage"
                        :page-sizes="[5, 10, 30, 50, 80, 100]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="userData.totalNumber">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import accountManage from './accountManage'

    export default accountManage
</script>
<style scoped src="./accountManage.less?time=New Date()">

</style>
