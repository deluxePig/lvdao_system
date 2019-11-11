import $http from "@/utils/http";

const area = {
    getAreaList:(pid) => {
        let reqData = {
            url: '/superviseServer/region',
            data: {
                pid: pid
            }
        }
        return $http._axios(reqData)
    }
}

export default area;
