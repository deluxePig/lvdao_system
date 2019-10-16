
import  bdMapObj from '@/utils/bdMap';//引入地图方法
export default {
    name: 'everyday',
    components: {
    },
    data(){
        return {

        }
    },
    created:function(){

    },
    mounted(){
        this.creatMap()
    },
    methods:{
        /*初始化百度地图*/
        creatMap:function () {
            var bdmap = new BMap.Map("bdMap",{minZoom:9,maxZoom:20}); // 创建Map实例,设置地图允许的最小/大级别
            var point = new BMap.Point(119.996351,30.548961);
            bdmap.centerAndZoom(point, 15);
            bdmap.enableScrollWheelZoom(true)
            bdMapObj.begin(bdmap);
        }
    },
    watch:{

    }
}