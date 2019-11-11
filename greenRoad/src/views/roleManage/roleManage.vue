<template>
    <div id="roleManage">
        <div class="roleManage-box">
            <div class="roleManage-title">新增账号</div>
            <div class="roleManage-form">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
                    <el-form-item label="角色" prop="roleId">
                        <el-select v-model="ruleForm.roleId" placeholder="请选择要修改的角色">
                            <el-option
                                    v-for="item in roleOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="角色" prop="module">
                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                        <div style="margin: 15px 0;"></div>
                        <el-checkbox-group v-model="ruleForm.module" @change="handleCheckedCitiesChange">
                            <el-checkbox v-for="city in cities" :label="city" name="module" :key="city">{{city}}</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
                        <el-button @click="onBack()">返回</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import roleManage from './roleManage'

    export default roleManage
</script>
<style scoped src="./roleManage.less?time=New Date()">

</style>
