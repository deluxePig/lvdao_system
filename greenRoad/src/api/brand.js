import $http from "@/utils/http";

const brand = {
    getBrandList:() => {
        let reqData = {
            url: '/superviseServer/brand/all',
        }
        return $http._axios(reqData)
    },
    addBrand:(obj) => {
        let reqData = {
            url: '/superviseServer/brand/add',
            data: obj
        }
        return $http._axios(reqData)
    },
    updateBrand:(obj) => {
        let reqData = {
            url: '/superviseServer/brand/update',
            data: obj
        }
        return $http._axios(reqData)
    },
    deleteBrand:(id) => {
        let reqData = {
            url: '/superviseServer/brand/delete',
            data: {
                brandId: id
            }
        }
        return $http._axios(reqData)
    },
    getBrandInfo:(id) => {
        let reqData = {
            url: '/superviseServer/brand/get',
            data: {
                brandId: id
            }
        }
        return $http._axios(reqData)
    }
}

export default brand;
