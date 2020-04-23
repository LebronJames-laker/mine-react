/**
 * 接口请求函数
 * http://172.18.100.86:3001/#/login 这是公司提供的一个登录接口,猜测是用了Hash路由
 * Basic aGlwOmhpcA==
 */
import ajax from './ajax'
//登录接口 
export const reqLogin = (userName,passWord)=>ajax('/login',{userName,passWord},'POST')
//添加用户的接口
export const reqAddUser = (user)=>ajax('/manage/user/add',user,'POST')