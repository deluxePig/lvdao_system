
import $http from "@/utils/http";//引入调用后台函数

const article ={
    firstData(that){
        let reqData = {
            url:'get_all_module_time.do',
            data:{}
        };
        $http._axios(reqData).then(response => {
            //console.log(response)
        })
    },
    /*获取用户城市区域*/
    getUserCity(that){
        let reqData = {
            url:'/superviseServer/user/area',
            data:{}
        };
        $http._axios(reqData).then(response => {
            //console.log("获取用户城市区域",response)
            if(response.code == "200"){
                let dataList=response.data
                if(that.navList[0].title=="日常值守"){
                    that.$store.state.sysCityList=dataList
                    that.sysCityList=that.$store.state.sysCityList
                    if(dataList.length >0){
                        that.$router.push({
                            path: '/home/everyday',
                            query: {
                                id: dataList[0].id,
                                name: dataList[0].name,
                                pName: dataList[0].name
                            }
                        }).catch(err => {})
                    }else{
                        that.$router.push({
                            path: '/home/everyday',
                            query: {
                            }
                        }).catch(err => {})
                    }

                  //  that.navList[0].childrenNav=that.$store.sysCityList
                }
            }
        })
    },
    /*清空告警消息*/
    clearWrronNews(that){
        let reqData = {
            url:'/superviseServer/caution/clear',
            data:{}
        };
        $http._axios(reqData).then(response => {
           // console.log('清空告警消息',response)
            if(response.code == 200){
                that.caution.newNumber=0
            }
        })
    },
}

export default article;
