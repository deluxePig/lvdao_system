/**
 * api接口的统一出口
 */
import article from '@/api/article';//公用接口
import account from '@/api/account';// 登录接口
import everyday from '@/api/everyday';// 日常值守的接口
import operatStatis from '@/api/operatStatis';// 运营统计的接口


// 导出接口
export default {
    article, account,everyday,operatStatis
}
