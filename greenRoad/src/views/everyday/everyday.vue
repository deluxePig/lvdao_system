<!-- 日常值守-->
<template>
  <div id="everydayPage" class="pageBox">
     <div id="bdMap"></div>
      <!--搜索框-->
      <div class="mapSearchBox">
        <div class="mapSearchCon">
            <input class="seerchInput" v-model="searchValue" placeholder="搜索停车点名称" type="search">
            <div class="searchBtnBox">
                <i class="iconfont">&#xe614;</i>
            </div>
        </div>
      </div>
      <!--统计区-->
      <div class="statisticsBox mapPopBox">
         <div class="popHeadBox">
            统计区
         </div>
          <div class="popConBox">
              <div class="groupBox">
                <div class="totalBox">
                    共享单车总量：{{bicycle.total}}
                </div>
                  <div class="seaticListBox bicycleListBox">
                      <ul>
                          <li v-for="(list,index) in bicycle.list">
                              <span class="title">{{list.name}}:</span>
                              <span class="value">{{list.value}}</span>
                              <span class="look" @click="getbicycleDtail(item)">查看</span>
                          </li>
                      </ul>
                  </div>
              </div>
              <div class="groupBox">
                  <div class="totalBox">
                      电动车总量：5000
                  </div>
                  <div class="seaticListBox electrocarListBox">
                      <ul>
                          <li v-for="(list,index) in bicycle.list">
                              <span class="title">{{list.name}}:</span>
                              <span class="value">{{list.value}}</span>
                              <span class="look" @click="getbicycleDtail(item)">查看</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
      <!--消息区-->
      <div class="newsBox mapPopBox">
          <div class="popHeadBox">
              消息区
          </div>
          <div class="popConBox">
              <ul>
                  <li v-for="(item,index) in newsList">
                      <span class="time">{{item.time}}</span>
                      <span class="addres">{{item.addres}}</span>
                      <span class="num">{{item.num}}辆</span>
                      <span class="tip">{{item.tip}}</span>
                      <span class="detail" @click="newsDetail(item)">详情</span>
                  </li>
              </ul>
          </div>
      </div>
      <!--地图控件-->
      <div class="mapControlBox">
        <div class="mapBtn mapBig" @click="mapBiger()">
            <span class="con">+</span>
        </div>
          <div class="mapBtn smallBig" @click="mapSmall()">
              <span class="con">-</span>
          </div>
      </div>
  </div>
</template>


<script>
    import everyday from './everyday'
    export default everyday
</script>
<style scoped src="./everyday.less?time=New Date()">

</style>
