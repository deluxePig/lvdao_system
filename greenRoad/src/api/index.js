/**
 * api接口的统一出口
 */
import article from '@/api/article';//公用接口
import account from '@/api/account';// 登录接口
import equipment from '@/api/equipment';// 设备接口
import everyday from '@/api/everyday';// 日常值守的接口
import operatStatis from '@/api/operatStatis';
import area from "@/api/area";// 区域
import brand from "@/api/brand";// 单车
import cityManage from "@/api/cityManage";// 城市区域管理
// 运营统计的接口


// 导出接口
export default {
    article, account, area, brand, everyday, operatStatis, equipment,cityManage
}
