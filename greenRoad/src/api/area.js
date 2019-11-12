import $http from "@/utils/http";

const area = {
    getAreaList:(pid) => {
        let reqData = {
            url: '/superviseServer/region/system',
            data: {
                pid: pid
            }
        }
        return $http._axios(reqData)
    },
    cautionList:(num, size) => {
        let reqData = {
            url: '/superviseServer/caution/list',
            data: {
                pageNum: num,
                pageSize: size
            }
        }
        return $http._axios(reqData)
    }
}

export default area;
