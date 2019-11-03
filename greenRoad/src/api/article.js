
import $http from "@/utils/http";//引入调用后台函数

const article ={
    firstData(that){
        let reqData = {
            url:'get_all_module_time.do',
            data:{}
        };
        $http._axios(reqData).then(response => {
            console.log(response)
        })
    },
    /*获取用户城市区域*/
    getUserCity(that){
        let reqData = {
            url:'/superviseServer/user/area',
            data:{}
        };
        $http._axios(reqData).then(response => {
           // console.log("获取用户城市区域",response)
            if(response.code == "200"){
                let dataList=response.data
                if(that.navList[0].title=="日常值守"){
                    that.navList[0].childrenNav=dataList
                }
            }
        })
    },
}

export default article;
