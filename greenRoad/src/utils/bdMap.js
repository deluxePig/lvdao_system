/**
 * 创建地图方法类
 */

class bdMap{
    //初始化地图
    begin(map){
        this.baseMap = map;
       // this.getBoundary()
        //this.setMapLib()
    }
    //地图上标点
    printArea(_this) {
        let that=this;
        let img= require("@/assets/images/markpoint.gif");
        $.each(_this, function (c, t) {
            if(t.pos_x_baidu != ""){
                let myIcon = new BMap.Icon(img, new BMap.Size(23, 25))
                let marker = new BMap.Marker(new BMap.Point(t.pos_x_baidu,t.pos_y_baidu),{icon:myIcon});   // 创建标注business_number
                let content = '<div>商户名：'+t.business_name+'</div><div>联系人：'+t.relation_name+'</div><div>联系电话：'+t.business_number+'</div><div>地址：'+t.business_address+'</div><div>所属支行：'+t.name+'</div><div>客户经理：'+t.contact_name+'</div><div>POS机ID：'+t.pos_id+'</div>';
                that.baseMap.addOverlay(marker)      // 将标注添加到地图中
                let title='商户信息'
                that.addClickHandler(title,content,marker)
            }
        })
        this.baseMap.setCenter(new BMap.Point(_this[0].pos_x_baidu,_this[0].pos_y_baidu))
    }
    //地图上拜访记录标点
    printVisit(_this){
        let that=this;
        let img= require("@/assets/images/markpoint.gif");
        $.each(_this, function (c, t) {
            if(t.startx_baidu != ""){
                let myIcon = new BMap.Icon(img, new BMap.Size(23, 25))
                let marker = new BMap.Marker(new BMap.Point(t.startx_baidu,t.starty_baidu),{icon:myIcon});  // 创建标注business_number
                let content = '<div>商户名：'+t.business_name+'</div><div>联系人：'+t.relation_name+'</div><div>联系电话：'+t.business_number+'</div><div>地址：'+t.business_address+'</div><div>所属支行：'+t.name+'</div><div>客户经理：'+t.contact_name+'</div><div>POS机ID：'+t.pos_id+'</div><div>拜访开始时间：'+t.start_time+'</div><div>拜访结束时间：'+t.end_time+'</div>';
                that.baseMap.addOverlay(marker)      // 将标注添加到地图中
                let title='拜访记录'
                that.addClickHandler(title,content,marker)
            }
        })
        this.baseMap.setCenter(new BMap.Point(_this[0].startx_baidu,_this[0].starty_baidu))
    }
    //地图放大
    big(){
        let bignow=this.baseMap.getZoom()
        if(bignow < 19){
            this.baseMap.zoomTo(this.baseMap.getZoom() + 1)
        }

    }
    //地图缩小
    small(){
        let bignow=this.baseMap.getZoom()
        if(bignow > 13){
            this.baseMap.zoomTo(this.baseMap.getZoom() - 1)
        }
    }
    //清除地图上的项目
    clean(){
        this.baseMap.clearOverlays();
        //this.getBoundary()
    }
    //返回初始状态
    returnPoint(){
        this.baseMap.setCenter(new BMap.Point(119.996351,30.548961))
    }
    /* 信息窗口 */
    addClickHandler(title,content,marker){
        let hei=200
        if(title == "拜访记录"){
            hei=260
        }
        let that=this;
        let opts = {
            width : 290,     // 信息窗口宽度
            height: hei,     // 信息窗口高度
            title : title , // 信息窗口标题
            enableMessage:false//设置允许信息窗发送短息
        }
        marker.addEventListener("click",function(e) {
            var p = e.target;
            var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
            var infoWindow = new BMap.InfoWindow(content, opts);  // 创建信息窗口对象
            that.baseMap.openInfoWindow(infoWindow, point);// 开启信息窗口
        })
    }
    //地图切换
    mapChoose(mapType){
        if(mapType == BEAUTIFULMAP){
            this.baseMap.setBasemap(this.newMap,0);
        }else  if (mapType == BLACKMAP){
            this.baseMap.setBasemap(this.newMap,2);
        }else  if (mapType == GRAYMAP){
            this.baseMap.setBasemap(this.newMap,1);
        }else  if (mapType == BASEMAP){
            this.baseMap.setBasemap(this.newMap,3);
        }
    }
    // GPS坐标点转换
    changeGPS(longitude,latitude) {
        return new Promise((resolve, reject) => {
            /*GPS坐标转换百度坐标*/
            //GPS坐标
            var ggPoint = new BMap.Point(longitude,latitude);
            //地图初始化
            var bm = new BMap.Map("baiduMap");
            bm.centerAndZoom(ggPoint, 15);
            bm.addControl(new BMap.NavigationControl());

            //添加gps marker和label
            var markergg = new BMap.Marker(ggPoint);
            bm.addOverlay(markergg); //添加GPS marker
            var labelgg = new BMap.Label("未转换的GPS坐标（错误）",{offset:new BMap.Size(20,-10)});
            markergg.setLabel(labelgg); //添加GPS label

            //坐标转换完之后的回调函数
            let translateCallback = function (data){
                if(data.status === 0) {
                    var marker = new BMap.Marker(data.points[0]);
                    bm.addOverlay(marker);
                    var label = new BMap.Label("转换后的百度坐标（正确）",{offset:new BMap.Size(20,-10)});
                    marker.setLabel(label); //添加百度label
                    bm.setCenter(data.points[0]);
                    resolve(data.points[0])
                }
            }

            setTimeout(function(){
                var convertor = new BMap.Convertor();
                var pointArr = [];
                pointArr.push(ggPoint);
                convertor.translate(pointArr, 1, 5, translateCallback)
            }, 1000);
        })
    }
    // 地图城市边界
    getBoundary(){
        let that=this
        let rs=demapdata
        let bdary = new BMap.Boundary();
        let name = "德清县";
        that.baseMap.clearOverlays();        //清除地图覆盖物
        let count = rs.boundaries.length; //行政区域的点有多少个
        for(var i = 0; i < count; i++){
            var ply = new BMap.Polygon(rs.boundaries[i],
                {strokeWeight: 5, // 设置多边形边线线粗
                    strokeOpacity: 0.5, // 设置多边形边线透明度0-1
                    StrokeStyle: "solid", // 设置多边形边线样式为实线或虚线，取值 solid 或 dashed
                    strokeColor: "#ff0000", // 设置多边形边线颜色
                    fillOpacity: 0.01, // 设置多边形填充颜色透明度0-1
                }); // 建立多边形覆盖物
            that.baseMap.addOverlay(ply);  // 添加覆盖物
            that.baseMap.setViewport(ply.getPath());    // 调整视野
        }
        /*bdary.get(name, function(rs){       //获取行政区域
          console.log(rs)
      })*/
    }
    //地图范围限制
    setMapLib(){
        let that=this
        var BMapLib = window.BMapLib = BMapLib || {};
        (function() {
            /**
             * @exports AreaRestriction as BMapLib.AreaRestriction
             */
            var AreaRestriction =
                /**
                 * AreaRestriction类，静态类，不用实例化
                 * @class AreaRestriction类提供的都是静态方法，勿需实例化即可使用。
                 */
                BMapLib.AreaRestriction = function(){
                }

            /**
             * 是否已经对区域进行过限定的标识
             * @private
             * @type {Boolean}
             */
            var _isRestricted = false;

            /**
             * map对象
             * @private
             * @type {BMap}
             */
            var _map = null;

            /**
             * 开发者需要限定的区域
             * @private
             * @type {BMap.Bounds}
             */
            var _bounds = null;

            /**
             * 对可浏览地图区域的限定方法
             * @param {BMap} map map对象
             * @param {BMap.Bounds} bounds 开发者需要限定的区域
             *
             * @return {Boolean} 完成了对区域的限制即返回true，否则为false
             */
            AreaRestriction.setBounds = function(map, bounds){
                // 验证输入值的合法性
                if (!map ||
                    !bounds ||
                    !(bounds instanceof BMap.Bounds)) {
                    throw "请检查传入参数值的合法性";
                    return false;
                }

                if (_isRestricted) {
                    this.clearBounds();
                }
                _map = map;
                _bounds = bounds;

                // 添加地图的moving事件，用以对浏览区域的限制
                _map.addEventListener("moveend", this._mapMoveendEvent)
                _isRestricted = true
                return true
            }
            /**
             * 需要绑定在地图移动事件中的操作，主要控制出界时的地图重新定位
             * @param {Event} e e对象
             *
             * @return 无返回值
             */
            AreaRestriction._mapMoveendEvent = function(e) {
                // 如果当前完全没有出界，则无操作
                if (_bounds.containsBounds(_map.getBounds())) {
                    return;
                }

                // 两个需要对比的bound区域的边界值
                var curBounds = _map.getBounds(),
                    curBoundsSW = curBounds.getSouthWest(),
                    curBoundsNE = curBounds.getNorthEast(),
                    _boundsSW = _bounds.getSouthWest(),
                    _boundsNE = _bounds.getNorthEast();

                // 需要计算定位中心点的四个边界
                var boundary = {n : 0, e : 0, s : 0, w : 0};

                // 计算需要定位的中心点的上方边界
                boundary.n = (curBoundsNE.lat < _boundsNE.lat) ?
                    curBoundsNE.lat :
                    _boundsNE.lat;

                // 计算需要定位的中心点的右边边界
                boundary.e = (curBoundsNE.lng < _boundsNE.lng) ?
                    curBoundsNE.lng :
                    _boundsNE.lng;

                // 计算需要定位的中心点的下方边界
                boundary.s = (curBoundsSW.lat < _boundsSW.lat) ?
                    _boundsSW.lat :
                    curBoundsSW.lat;

                // 计算需要定位的中心点的左边边界
                boundary.w = (curBoundsSW.lng < _boundsSW.lng) ?
                    _boundsSW.lng :
                    curBoundsSW.lng;

                // 设置新的中心点
                var center = new BMap.Point(boundary.w + (boundary.e - boundary.w) / 2,
                    boundary.s + (boundary.n - boundary.s) / 2);
                setTimeout(function() {
                    _map.panTo(center, {noAnimation : "no"});
                }, 1);
            };

            /**
             * 清除对地图浏览区域限定的状态
             * @return 无返回值
             */
            AreaRestriction.clearBounds = function(){
                if (!_isRestricted) {
                    return;
                }
                _map.removeEventListener("moveend", this._mapMoveendEvent);
                _isRestricted = false
            }
        })()
        let b = new BMap.Bounds(new BMap.Point(119.723544,30.378797),new BMap.Point(120.43679,30.711211)); // 范围 左下角，右上角的点位置
        try {    // js中尽然还有try catch方法，可以避免bug引起的错误
            BMapLib.AreaRestriction.setBounds(that.baseMap, b); // 已map为中心，已b为范围的地图
        } catch (e) {
            // 捕获错误异常
            console.log(e)
        }
    }
}
export default new bdMap()
