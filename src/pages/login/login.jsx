import React from 'react';
import './login.less';
import logo from './images/logo.jpg';
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import MyForm from './MyForm'
    
   
//自定义一个App组件
export default class Login extends React.Component{
    
    
    
    render(){
        // const form = this.props.form
        // const {getFieldDecorator} = form
        return(
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt="logo"/>
                    <h1>React:考勤管理后台</h1>
                </header>
                <section className='login-content'>
                    <h1>用户登录</h1>
                    <MyForm/>
                </section>
            </div>
        );
    }





}

// //利用一个高阶函数，传入Login这个包含form表单的组件，得到一个新组件，利用新组件传递给Login组件一个form属性
// const NewComponent = Form.create()(Login)
// //暴露的是这个新的组件
// export default NewComponent
