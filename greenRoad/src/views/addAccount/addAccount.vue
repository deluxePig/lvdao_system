<template>
    <div id="addAccount">
        <div class="addAccount-box">
            <div class="addAccount-title">新增账号</div>
            <div class="addAccount-form">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
                    <el-form-item label="用户名" prop="userName">
                        <el-input v-model="ruleForm.userName"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="权限" prop="roleId">
                        <el-select v-model="ruleForm.roleId" placeholder="请选择账户权限" @change="onSelectRoleChange">
                            <el-option
                                    v-for="item in roleOp"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="城市" prop="cityId">
                        <el-select v-model="ruleForm.cityId" placeholder="请选择账户所属城市" @change="onSelectChange">
                            <el-option
                                    v-for="item in cityOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item v-if="ruleForm.roleId !== 2" label="区域" prop="areaId">
                        <el-select v-model="ruleForm.areaId" placeholder="请选择账户所属区域">
                            <el-option
                                    v-for="item in areaOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="手机号" prop="mobile">
                        <el-input v-model.number="ruleForm.mobile"></el-input>
                    </el-form-item>
                    <el-form-item label="IMEI码" prop="meid">
                        <el-input v-model="ruleForm.meid"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">{{userId?'修改':'提交'}}</el-button>
                        <el-button @click="resetForm('ruleForm')">{{userId?'返回':'重置'}}</el-button>
                        <el-button v-if="!userId" @click="onJumpBack()">返回</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import addAccount from './addAccount'

    export default addAccount
</script>
<style scoped src="./addAccount.less?time=New Date()">

</style>
