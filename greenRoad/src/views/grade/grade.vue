<!-- 评分评价-->
<template>
  <div id="grade">
      <div class="grade-box">
          <el-alert
                  title="功能模块正在开发中，敬请期待~"
                  type="warning">
          </el-alert>
          <div class="grade-title">评分评价</div>
          <div class="grade-content">
              <div class="grade-header">
                  <el-row>
                      <el-col :span="4"><div>品牌</div></el-col>
                      <el-col :span="8"><div>评价内容</div></el-col>
                      <el-col :span="4"><div>监督部门</div></el-col>
                      <el-col :span="4"><div>市民（调查问卷）</div></el-col>
                      <el-col :span="4"><div>平均分</div></el-col>
                  </el-row>
              </div>
              <div class="grade-items">
                  <el-row class="grade-row">
                      <el-col :span="4">
                          <div class="grade-items-brand">哈罗</div>
                      </el-col>
                      <el-col :span="8">
                          <div class="grade-items-text">
                              <p>1. 车容车貌</p>
                              <p>2. 骑车舒适度</p>
                              <p>3. 寻车、还车快捷度</p>
                              <p>4. 客服处理问题</p>
                              <p>5. 收费标准满意度</p>
                          </div>
                      </el-col>
                      <el-col :span="4">
                          <div class="grade-items-text">
                              <p> 9分 </p>
                              <p> 9分 </p>
                              <p> 9分 </p>
                              <p> 9分 </p>
                              <p> 9分 </p>
                          </div>
                      </el-col>
                      <el-col :span="4">
                          <div class="grade-items-text">
                              <p> 8分 </p>
                              <p> 8分 </p>
                              <p> 8分 </p>
                              <p> 8分 </p>
                              <p> 8分 </p>
                          </div>
                      </el-col>
                      <el-col :span="4">
                          <div class="grade-items-text grade-items-text-mean">
                              <p> 8.5分 </p>
                              <p> 8.5分 </p>
                              <p> 8.5分 </p>
                              <p> 8.5分 </p>
                              <p> 8.5分 </p>
                          </div>
                      </el-col>
                  </el-row>
              </div>

              <div class="grade-items">
                  <el-row class="grade-row">
                      <el-col :span="4">
                          <div class="grade-items-brand">哈罗</div>
                      </el-col>
                      <el-col :span="8">
                          <div class="grade-items-text">
                              <p>1. 车容车貌</p>
                              <p>2. 骑车舒适度</p>
                              <p>3. 寻车、还车快捷度</p>
                              <p>4. 客服处理问题</p>
                              <p>5. 收费标准满意度</p>
                          </div>
                      </el-col>
                      <el-col :span="4">
                          <div class="grade-items-text">
                              <p> 9分 </p>
                              <p> 9分 </p>
                              <p> 9分 </p>
                              <p> 9分 </p>
                              <p> 9分 </p>
                          </div>
                      </el-col>
                      <el-col :span="4">
                          <div class="grade-items-text">
                              <p> 8分 </p>
                              <p> 8分 </p>
                              <p> 8分 </p>
                              <p> 8分 </p>
                              <p> 8分 </p>
                          </div>
                      </el-col>
                      <el-col :span="4">
                          <div class="grade-items-text grade-items-text-mean">
                              <p> 8.5分 </p>
                              <p> 8.5分 </p>
                              <p> 8.5分 </p>
                              <p> 8.5分 </p>
                              <p> 8.5分 </p>
                          </div>
                      </el-col>
                  </el-row>
              </div>

              <div class="grade-items">
                  <el-row class="grade-row">
                      <el-col :span="4">
                          <div class="grade-items-brand">哈罗</div>
                      </el-col>
                      <el-col :span="8">
                          <div class="grade-items-text">
                              <p>1. 车容车貌</p>
                              <p>2. 骑车舒适度</p>
                              <p>3. 寻车、还车快捷度</p>
                              <p>4. 客服处理问题</p>
                              <p>5. 收费标准满意度</p>
                          </div>
                      </el-col>
                      <el-col :span="4">
                          <div class="grade-items-text">
                              <p> 9分 </p>
                              <p> 9分 </p>
                              <p> 9分 </p>
                              <p> 9分 </p>
                              <p> 9分 </p>
                          </div>
                      </el-col>
                      <el-col :span="4">
                          <div class="grade-items-text">
                              <p> 8分 </p>
                              <p> 8分 </p>
                              <p> 8分 </p>
                              <p> 8分 </p>
                              <p> 8分 </p>
                          </div>
                      </el-col>
                      <el-col :span="4">
                          <div class="grade-items-text grade-items-text-mean">
                              <p> 8.5分 </p>
                              <p> 8.5分 </p>
                              <p> 8.5分 </p>
                              <p> 8.5分 </p>
                              <p> 8.5分 </p>
                          </div>
                      </el-col>
                  </el-row>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    import grade from './grade'
    export default grade
</script>
<style scoped src="./grade.less?time=New Date()">

</style>
