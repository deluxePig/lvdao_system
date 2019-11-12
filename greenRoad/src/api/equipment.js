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
    }
}

export default equipment;
