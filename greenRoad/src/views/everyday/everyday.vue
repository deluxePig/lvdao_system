<!-- 日常值守-->
<template>
  <div id="everydayPage" class="pageBox">
      <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center">
      </el-amap>
  </div>
</template>


<script>

    import everyday from './everyday'
    export default everyday
</script>
<style scoped src="./everyday.less?time=New Date()">

</style>
