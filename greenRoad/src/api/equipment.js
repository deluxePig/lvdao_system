import $http from "@/utils/http";

const equipment = {
    getList:() => {
        let reqData = {
            url: '/superviseServer/site/list',
            data: {}
        };
        return $http._axios(reqData)
    }
}

export default equipment;
