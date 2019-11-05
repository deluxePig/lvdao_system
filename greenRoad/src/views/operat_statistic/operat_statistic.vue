<!-- 运营统计-->
<template>
  <div id="operat_statistic" class="pageBox">
      <div class="operat_top">
        <div class="operatGroupBox brandBox">
            <div class="operatGroupTitle">
                <b class="ico"></b>品牌占比
            </div>
            <div class="timeChooseBox">
                <span class="timeChooseBtn" :class="{active:brandTimeChoose==item.value}" v-for="(item,index) in brandTimeChooseList" @click="brandTimeClick(item)">{{item.name}}</span>
            </div>
            <div class="operatGroupPage">
                <h3 class="noneTip" v-if="indexPieData.seriesData.length<=0">暂无数据！！</h3>
                <basePie :indexPie="indexPieData"></basePie>
            </div>
        </div>
          <div class="operatGroupBox">
              <div class="operatGroupTitle">
                  <b class="ico"></b>潮汐统计
              </div>
              <div class="operatGroupPage">
                  <baseLine :indexdata="indexLinedata"></baseLine>
              </div>
          </div>
      </div>
      <div class="operat_bottom">
          <div class="operatGroupBox usageBox">
              <div class="operatGroupTitle">
                  <b class="ico"></b>使用量统计
              </div>
              <div class="timeChooseBox">
                  <span class="timeChooseBtn" :class="{active:usageTimeChoose==item.value}" v-for="(item,index) in usageTimeChooseList" @click="usageTimeClick(item)">{{item.name}}</span>
              </div>
              <div class="operatGroupPage">
                  <baseBar :indexBar="indexBarData"></baseBar>
              </div>
          </div>
          <div class="operatGroupBox maxUsageBox">
              <div class="operatGroupTitle">
                  <b class="ico"></b>最大使用量站点
              </div>
              <div class="operatGroupPage maxUsageListBox">
                <ul>
                    <li v-for="(item,index) in maxUsageList" :class="{first:index==0,second:index==1,third:index==2,}">
                        <span class="title">NO.{{index+1}}</span>
                        <span class="addres">{{item.statisticsSiteName}}</span>
                    </li>
                </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    import operatStatistic from './operat_statistic'
    export default operatStatistic
</script>
<style scoped src="./operat_statistic.less?time=New Date()">

</style>
