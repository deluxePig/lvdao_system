<!-- 城市区域管理-->
<template>
    <div id="cityManage">
        <div class="cityManageBox">
            <div class="cityManageHead">城市区域管理</div>
             <div class="cityManageCont">
              <!--   <div class="selfCityListBox">
                    <div class="cityTitle">已拥有城市区域</div>
                 </div>-->
                 <div class="newCityBox">
                    <!-- <div class="cityTitle">添加新城市区域</div>-->
                     <div class="newCityListBox">
                        <div class="newList">
                            <span class="title">省 份：</span>
                            <el-input class="newCon"
                                    placeholder="请输入内容"
                                    v-model="province.name"
                                    :disabled="true">
                            </el-input>
                        </div>
                         <div class="newList">
                             <span class="title">城 市：</span>
                             <el-select  class="newCon" v-model="cityList.cityId" filterable placeholder="请选择新添加的城市" @change="onSelectChange()">
                                 <el-option
                                         v-for="item in newCitylist"
                                         :key="item.id"
                                         :label="item.name"
                                         :value="item.id">
                                 </el-option>
                             </el-select>
                         </div>
                         <div class="newList">
                             <span class="title">区 域：</span>
                             <el-select  class="newCon" v-model="cityList.areaId" filterable placeholder="请选择新添加的城市区域">
                                 <el-option
                                         v-for="item in newArealist"
                                         :key="item.id"
                                         :label="item.name"
                                         :value="item.id">
                                 </el-option>
                             </el-select>
                         </div>
                         <div class="newlist btnList">
                             <el-button type="primary" @click="onsubmit()">提交</el-button>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    </div>
</template>

<script>
    import cityManage from './cityManage'

    export default cityManage
</script>
<style scoped src="./cityManage.less?time=New Date()">

</style>
