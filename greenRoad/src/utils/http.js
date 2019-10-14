import axios from 'axios'
import store from '../store'
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，
import Vue from 'vue'
import { Message } from 'element-ui' // element-ui
import $public from "@/utils/public";//引入公共方法
const DESKEY=12345678
//const BASE_URL = process.env.VUE_APP_API_URL // 第二节配置的url 可以读取 一定要VUE_APP_A为前缀
const BASE_URL = process.env.NODE_ENV === "production" ? window.location.protocol + '//' + window.location.host : process.env.VUE_APP_API_URL // 第二节配置的url 可以读取 一定要VUE_APP_A为前缀

// 创建axios实例
const http = axios.create({
    baseURL: BASE_URL,
    timeout: 30000 // 请求超时时间
})

function startLoading() {
    // 开始加载
    // Loading.service({});
}

function endLoading() {
    // 结束加载
    // Vue.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
    //   loadingInstance.close();
    // });
}

// 添加request请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
 /*   console.log("config::")
    console.log(config)
    let strcondata=JSON.stringify(config.data)
    console.log(strcondata)
    let cc=$public.encryptDes(strcondata,DESKEY)//DES加密
    config.data=cc*/
    store.state.isload=1
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
});
// 添加respone拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let datalist = response.data.data
/*    datalist = $public.decryptDes(datalist,DESKEY)//DES解密*/
    datalist=JSON.parse(datalist)
    response.data.data=datalist
    store.state.isload=0
    return Promise.resolve(response)
}, function (error) {
    // 对响应错误做点什么
    console.log("error::")
    console.log(error)
    return Promise.reject(error)
});


function get(url, params = {}) {
    return http({
        url,
        method: 'GET',
        headers: {},
        params
    })
}

//封装post请求
function post(url, data = {}) {
    return http({
        url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data
    })
}

/**  构造请求后台函数
 * options 请求后台的参数
 * */
function _axios(options) {
    return new Promise((resolve, reject) => {
        let params = new URLSearchParams();
        for(let i in options.data){
            params.append(i,options.data[i]);
        }
        axios({
            url: BASE_URL + options.url,
            method: 'post',
            data: params,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;',
            },
            withCredentials: true,
        }).then(response => {
            resolve(response.data);
        }).catch(error => {
            reject(error)
        })
    })
}



export default {
    get, post,_axios
}

