/**
 * 发送异步请求的模块
 * 封装axios库
 * 返回值是promise
 * 做一个统异常处理！！！
 */
import axios from 'axios';
import {message} from 'antd'
//因为有的接口可能不需要传参，所以给data一个默认初始值为空，请求类型给一个默认值为'GET'
export default function ajax(url,data={},type='GET'){
    
    return new Promise((resolve,reject)=>{
        //定义一个promise对象
        let promise
        //执行ajax请求
        if(type==='GET'){
            //此时是get请求
            promise =  axios.get(url,{
                params:data
            })
        }else{
            promise =  axios.post(url,data)
        }
        //根据primise.then()来判断 如果成功了！
        promise.then(response=>{//此时await得到的就是data数据
            resolve(response.data)
        }).catch(error=>{
            message.error('请求出错啦！！'+error.message)
        })

        
    })
    

}