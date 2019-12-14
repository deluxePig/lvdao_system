<!-- 日常值守-->
<template>
  <div id="everydayPage" class="pageBox">
     <div id="bdMap"></div>
      <!--搜索框-->
      <div class="mapSearchBox">
        <div class="mapSearchCon">
            <input class="seerchInput" v-model="searchValue" placeholder="搜索停车点名称或站点ID" type="search" @keyup.13="searchSite()">
            <div class="searchBtnBox" @click="searchSite()">
                <i class="iconfont">&#xe614;</i>
            </div>
        </div>
      </div>
      <!--统计区-->
      <div class="statisticsBox mapPopBox" :class="{statisticsHidden:statisticsShow==0}">
         <div class="popHeadBox">
            统计区
             <span class="ico iconfont small" v-if="statisticsShow==1" @click="statisticsShow=0">&#xe7af;</span>
             <span class="ico iconfont biger" v-else  @click="statisticsShow=1">&#xe72f;</span>
         </div>
          <div class="popConBox"  v-show="statisticsShow==1">
              <div class="totalBigBox">
                  <div class="totalBox">
                      共享自行车在线量：{{bicycle.total}}
                  </div>
                  <div class="totalBox">
                      共享电动车在线量：{{electrocarList.total}}
                  </div>
              </div>
              <div class="groupBigBox">
                  <div class="groupBox">
                      <!--   <div class="totalBox">
                             共享单车总量：{{bicycle.total}}
                         </div>-->
                      <div class="seaticListBox bicycleListBox">
                          <ul>
                              <li v-for="(list,index) in bicycle.list" v-if="list.brandRealityNum>0">
                                  <span class="title">{{list.brandName}}:</span>
                                  <span class="value">{{list.brandBikeNum}}</span>
                                  <span class="value" :class="{ratioUp:Number(list.brandRealityNum)>Number(list.brandBikeNum),ratioDown:Number(list.brandRealityNum)<=Number(list.brandBikeNum)}">（{{(Number(list.brandRealityNum)/Number(list.brandBikeNum)*100).toFixed(1)}}%）</span>
                                  <span class="value">站点车辆：{{list.brandRealityNum}}</span>
                                  <span class="look" @click="getbicycleDtail(list)">查看</span>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div class="groupBox">
                      <!--  <div class="totalBox">
                            电动车总量：{{electrocarList.total}}
                        </div>-->
                      <div class="seaticListBox electrocarListBox">
                          <ul>
                              <li v-for="(list,index) in electrocarList.list" v-if="list.brandRealityEleNum>0">
                                  <span class="title">{{list.brandName}}:</span>
                                  <span class="value">{{list.brandTrolleyBikeNum}}</span>
                                  <span class="value" :class="{ratioUp:Number(list.brandRealityEleNum)>Number(list.brandTrolleyBikeNum),ratioDown:Number(list.brandRealityEleNum)<=Number(list.brandTrolleyBikeNum)}">（{{(Number(list.brandRealityEleNum)/Number(list.brandTrolleyBikeNum)*100).toFixed(1)}}%）</span>
                                  <span class="value">站点车辆：{{list.brandRealityEleNum}}</span>
                                  <span class="look" @click="getbicycleDtail(list)">查看</span>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>

          </div>
      </div>
      <!--消息区-->
      <div class="newsBox mapPopBox"  :class="{newsHidden:newsShow==0}">
          <div class="popHeadBox">
              <span class="newsIco" v-show="newsinfo==1">News</span>
              消息区
              <span class="ico iconfont small" v-if="newsShow==1" @click="newsShow=0">&#xe7af;</span>
              <span class="ico iconfont biger" v-else  @click="clickNews()">&#xe72f;</span>
          </div>
          <div class="popConBox"  v-show="newsShow==1">
              <ul>
                  <li v-for="(item,index) in newsList">
                      <span class="time">{{item.createTime}}</span>
                      <span class="addres">{{item.siteName}}</span>
                      <span class="num">{{item.bikeNum}}辆</span>
                      <span class="tip" :class="{tip2:item.content=='车辆偏多',tip3:item.content=='满桩'}">{{item.content}}</span>
                      <span class="detail" @click="newsDetail(item)">详情</span>
                  </li>
              </ul>
          </div>
      </div>
      <!--地图控件-->
      <div class="mapControlBox"  :class="{mapControlDown:newsShow==0}">
        <div class="mapBtn mapBig" @click="mapBiger()">
            <span class="con iconfont">&#xe61d;</span>
        </div>
          <div class="mapBtn smallBig" @click="mapSmall()">
              <span class="con iconfont">&#xe622;</span>
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
