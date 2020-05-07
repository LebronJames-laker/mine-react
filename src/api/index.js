/**
 * 接口请求函数
 * http://172.18.100.86:3001/#/login 这是公司提供的一个登录接口,猜测是用了Hash路由
 * Basic aGlwOmhpcA==
 */
import ajax from './ajax'
import jsonp from 'jsonp'
import {message} from "antd";
//登录接口 
export const reqLogin = (userName,passWord)=>ajax('/login',{userName,passWord},'POST')
//添加用户的接口
export const reqAddUser = (user)=>ajax('/manage/user/add',user,'POST')

//查询一级或子级分类的接口 此时是get请求，因为定义的形参默认值，所以不需要指定请求方式
export const reqSelectCategorys = (parentId)=>ajax('/category/findByParentId',{parentId})
//添加一个分类名称
export const reqAddCategory = (typeName,parentId)=>ajax('/category/addCategory',{typeName,parentId},'POST')
//更新分类信息
export const reqUpdateCategory = ({typeName,parentId})=>ajax('/category/updateCategory',{typeName,parentId},'POST')

//天气查询的接口
export const reqWeather = ()=>{
    console.log('这是一个普通的http请求')
    const url = 'http://api.map.baidu.com/weather/v1/?district_id=110100&data_type=all&ak=iYb71bGH8GYmPBzW2dXUoIT02BWeuGmI'
    jsonp(url,{},(err,data)=>{
        console.log('jsonp()',err,data)
    })
}
