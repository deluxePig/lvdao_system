import $http from "@/utils/http";

const equipment = {
    getList:(num, size) => {
        let reqData = {
            url: '/superviseServer/site/list',
            data: {
                pageNum: num,
                pageSize: size
            }
        };
        return $http._axios(reqData)
    },
    deleteSite:(id, type) => {
        let reqData = {};
        if(type) {
            reqData = {
                url: '/superviseServer/site/delete',
                data: {
                    siteId: id
                }
            };
        } else {
            reqData = {
                url: '/superviseServer/equipment/delete',
                data: {
                    equipmentMac: id
                }
            };
        }
        return $http._axios(reqData)
    }
}

export default equipment;
