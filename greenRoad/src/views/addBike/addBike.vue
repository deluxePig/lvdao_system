<template>
    <div id="addBike">
        <div class="addBike-box">
            <div class="addBike-title">新增企业</div>
            <div class="addBike-form">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="160px"
                         class="demo-ruleForm">
                    <el-form-item label="品牌名称" prop="brandName">
                        <el-input v-model="ruleForm.brandName" placeholder="请填写品牌名称"></el-input>
                    </el-form-item>
                    <el-form-item label="运营企业" prop="brandOperation">
                        <el-input v-model="ruleForm.brandOperation" placeholder="请填写品牌运营单位名称"></el-input>
                    </el-form-item>
                    <el-form-item label="联系地址" prop="brandAddress">
                        <el-input type="textarea" v-model="ruleForm.brandAddress" placeholder="请填写联系地址"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人" prop="brandContactPerson">
                        <el-input v-model="ruleForm.brandContactPerson" placeholder="请填写请填写品牌联系人"></el-input>
                    </el-form-item>
                    <el-form-item label="联系方式" prop="brandContactMobile">
                        <el-input v-model="ruleForm.brandContactMobile" placeholder="请填写请填写品牌联系人手机号"></el-input>
                    </el-form-item>
                    <el-form-item label="运维人员数量" prop="brandOperationNum">
                        <el-input v-model.number="ruleForm.brandOperationNum" placeholder="请填写品牌运维人员数量"></el-input>
                    </el-form-item>
                    <el-form-item label="核定共享自行车" prop="brandBikeNum">
                        <el-input v-model.number="ruleForm.brandBikeNum" placeholder="请填写品牌核定共享自行车总量"></el-input>
                    </el-form-item>
                    <el-form-item label="核定共享电动车" prop="brandTrolleyBikeNum">
                        <el-input v-model.number="ruleForm.brandTrolleyBikeNum" placeholder="请填写品牌核定共享电动车总量"></el-input>
                    </el-form-item>
<!--                    <el-form-item label="调度车辆行驶证图" prop="brandDispatchImg">-->
<!--                        <el-input v-model="ruleForm.brandDispatchImg" placeholder="请填写调度车辆行驶证图(图片局域网地址)"></el-input>-->
<!--                    </el-form-item>-->
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
