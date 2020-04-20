import React from 'react';
import './login.less';
import logo from './images/logo.jpg';
import { Form, Input, Button, Checkbox,message } from 'antd';


    const layout = {
        labelCol: {
        span: 8,
        },
        wrapperCol: {
        span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
        offset: 8,
        span: 16,
        },
    };
    

        const onFinish = values => {
        console.log('Success:', values);
        };
    
        const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
        };
   
//自定义一个App组件
export default class Login extends React.Component{
    //此时这里用箭头函数。会保证下面this的准确性
    
    render(){
        return(
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt="logo"/>
                    <h1>React:考勤管理后台</h1>
                </header>
                <section className='login-content'>
                    <h1>用户登录</h1>
                    <Form className='myForm'
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        >
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>记住我</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" id='myButton'>
                            登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        );
    }
}
