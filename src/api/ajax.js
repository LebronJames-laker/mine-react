/**
 * 发送异步请求的模块
 * 封装axios库
 * 返回值是promise
 */
import axios from 'axios';
//因为有的接口可能不需要传参，所以给data一个默认初始值为空，请求类型给一个默认值为'GET'
export default function ajax(url,data={},type='GET'){
    if(type==='GET'){
        //此时是get请求
        return axios.get(url,{
            params:data
        })
    }else{
        console.log('此时的url地址是：'+url)
        return axios.post(url,data)
    }

}