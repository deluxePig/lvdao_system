
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
    }
}

export default article;
