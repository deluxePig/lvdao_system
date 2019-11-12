import api from '@/api'

export default {
    name: 'cityManage',
    components: {},
    data() {
        return {
            province:{
                name:"浙江省",
                id:330000,
                pid:1,
            },
            /*选择的城市区域*/
            cityList:{
                cityId:"",
                areaId:"",
            },
            /*城市列表*/
            newCitylist:[

            ],
            /*区域列表*/
            newArealist:[]
        }
    },
    created: function () {

    },
    mounted() {
        this.$api.cityManage.getCityList(this)


    },
    methods: {
        onSelectChange(){
            this.$api.cityManage.getCityAreaList(this)
        },
        onsubmit(){
            this.$api.cityManage.addNewCity(this)
        }

    },
    watch: {}
}