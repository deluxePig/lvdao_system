
import $http from "@/utils/http";//引入调用后台函数

const cityManage ={
    /*获取全国省市区*/
    getCityList(that){
        let reqData = {
            url:'/superviseServer/region',
            data:{
                pid:330000
            }
        };
        $http._axios(reqData).then(response => {
          //  console.log("获取全国省市区",response)
            if(response.code == "200"){
                let dataList=response.data
                that.newCitylist=dataList
                that.cityList.cityId=that.newCitylist[0].id
                this.getCityAreaList(that)
            }
        })
    },
    /*获取城市对应区域*/
    getCityAreaList(that){
        let reqData = {
            url:'/superviseServer/region',
            data:{
                pid:that.cityList.cityId
            }
        };
        $http._axios(reqData).then(response => {
           // console.log("获取城市对应区域",response)
            if(response.code == "200"){
                let dataList=response.data
                that.newArealist=dataList
                that.cityList.areaId=that.newArealist[0].id
            }
        })
    },
    /*获取用户城市区域*/
    getSelfCityList(that){
        let reqData = {
            url:'/superviseServer/user/area',
            data:{
            }
        };
        $http._axios(reqData).then(response => {
            console.log("获取用户城市区域",response)
            if(response.code == "200"){
                let dataList=response.data
                that.$store.state.sysCityList=dataList
            }
        })
    },
    /*新增本系统城市区域*/
    addNewCity(that){
        let reqData = {
            url:'/superviseServer/region/add',
            data:{
                pid:that.cityList.cityId,
                id:that.cityList.areaId,
            }
        };
        $http._axios(reqData).then(response => {
           // console.log("新增本系统城市区域",response)
            if(response.code == "200"){
                that.$message({
                    message: '添加成功！！',
                    type: 'success'
                });
                this.getSelfCityList(that)
            }else{
                that.$message({
                    message: '该城市区域已存在！！',
                    type: 'warning'
                });
            }
        })
    },

}

export default cityManage;


