<template>
    <div id="addBike">
        <div class="addBike-box">
            <div class="addBike-title">新增账号</div>
            <div class="addBike-form">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" >
                    <el-form-item label="品牌名称" prop="brandName">
                        <el-input v-model="ruleForm.brandName" placeholder="请填写品牌名称"></el-input>
                    </el-form-item>
                    <el-form-item label="品牌运营单位名称" prop="brandOperation">
                        <el-input v-model="ruleForm.brandOperation" placeholder="请填写品牌运营单位名称"></el-input>
                    </el-form-item>
                    <el-form-item label="品牌地址" prop="brandAddress">
                        <el-input type="textarea" v-model="ruleForm.brandAddress" placeholder="请填写品牌地址"></el-input>
                    </el-form-item>
                    <el-form-item label="请填写品牌联系人" prop="brandContactPerson">
                        <el-input v-model="ruleForm.brandContactPerson" placeholder="请填写请填写品牌联系人"></el-input>
                    </el-form-item>
                    <el-form-item label="品牌运维人员数量" prop="brandOperationNum">
                        <el-input v-model.number="ruleForm.brandOperationNum" placeholder="请填写品牌运维人员数量"></el-input>
                    </el-form-item>
                    <el-form-item label="调度车辆行驶证图" prop="brandDispatchImg">
                        <el-input v-model="ruleForm.brandDispatchImg" placeholder="请填写调度车辆行驶证图(图片局域网地址)"></el-input>
                    </el-form-item>
                    <el-form-item label="品牌投放单车量" prop="brandBikeNum">
                        <el-input v-model.number="ruleForm.brandBikeNum" placeholder="请填写品牌投放单车量"></el-input>
                    </el-form-item>
                    <el-form-item label="品牌投放电车量" prop="brandTrolleyBikeNum">
                        <el-input v-model.number="ruleForm.brandTrolleyBikeNum" placeholder="请填写品牌投放电车量"></el-input>
                    </el-form-item>
                    <el-form-item label="政府批文图" prop="brandApprovalImg">
                        <el-input v-model="ruleForm.brandApprovalImg" placeholder="请填写政府批文图(图片局域网地址)"></el-input>
                    </el-form-item>
                    <el-form-item label="其他图" prop="otherImg">
                        <el-input v-model="ruleForm.otherImg" placeholder="请填写其他图(图片局域网地址)"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">{{bikeId?'修改':'提交'}}</el-button>
                        <el-button @click="resetForm('ruleForm')">{{bikeId?'返回':'重置'}}</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import addBike from './addBike'

    export default addBike
</script>
<style scoped src="./addBike.less?time=New Date()">

</style>
