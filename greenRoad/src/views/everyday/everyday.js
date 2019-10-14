import VueAMap from 'vue-amap';

// 初始化vue-amap
VueAMap.initAMapApiLoader({
    // 高德key
    key: '381005e2d730ad97bd0114fefa7a0820',
    // 插件集合 （插件按需引入）
    plugin: ['AMap.Geolocation']
});
export default {
    name: 'everyday',
    components: {
    },
    data(){
        const self = this;
        return {
            center: [121.59996, 31.197646],
            lng: 0,
            lat: 0,
            loaded: false,
            plugin: [{
                enableHighAccuracy: true,//是否使用高精度定位，默认:true
                timeout: 100,          //超过10秒后停止定位，默认：无穷大
                maximumAge: 0,           //定位结果缓存0毫秒，默认：0
                convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                showButton: true,        //显示定位按钮，默认：true
                buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
                showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
                showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
                panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
                zoomToAccuracy:true,//定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
                extensions:'all',
                pName: 'Geolocation',
                events: {
                    init(o) {
                        // o 是高德地图定位插件实例
                        o.getCurrentPosition((status, result) => {
                            console.log(result)
                            if (result && result.position) {
                                self.lng = result.position.lng;
                                self.lat = result.position.lat;
                                self.center = [self.lng, self.lat];
                                self.loaded = true;
                                self.$nextTick();
                            }
                        });
                    }
                }
            }]
        }
    },
    created:function(){

    },
    mounted(){

    },
    methods:{

    },
    watch:{

    }
}