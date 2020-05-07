import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';
import {reqLogin} from '../../api/index'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
export default class MyForm extends React.Component{
    
  formRef = React.createRef()
    
  render(){
      // const MyForm = () => {
      const onFinish = async (values,err) => {
        //此时这个values里面包含了我们输入的用户名和密码
        //此时证明用户输入的账号和密码符合规则，但是并不一定是注册了的用户名和密码,此时向后台登录接口发起ajax请求
        //用户输入的用户名和密码
        const {userName,passWord} = values
      
        /**
         * await和async的用法
         */
        if(!err){
            const result = await reqLogin(userName,passWord)
            // console.log(result) //{statusCode: 0, resultType: {…}}
            if(result.statusCode === 0){
                // // const result = response.userId
                //保存user对象的数据
                message.success('登录成功')
                // const user = result.resultType
                // // memoryUtils.user = user
                // //将user的信息保存到本地
                // storageUtils.saveUser(user)
                this.props.dataList.history.replace('/admin')  
            }else{
                message.error('用户名或密码错误')
            }
           
        }else{
            console.log('检验失败')
        }                
      };  
      return (
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
    
        >
          <Form.Item
            name="userName"
            rules={[
                { required: true, whitespace:true, message: '用户名不能为空!' },
                { min: 3, message: '用户名长度不能少于4位!' },
                { max: 12, message: '用户名长度不能多于12位' },
                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名只能是数字或者字母组成' }
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="passWord"
            rules={[
                { required: true, whitespace:true, message: '密码不能为空!' },
                { min: 6, message: '密码长度不能少于6位!' },
                { max: 30, message: '密码长度不能多于18位!' },
                {pattern:/^(?![0-9]+$)(?![a-zA-Z]+$)/,message:'密码必须包含字母和数字'}
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>
    
            <a className="login-form-forgot" href="">
              忘记密码
            </a>
          </Form.Item>
    
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
            Or <a href="">注册</a>
          </Form.Item>
        </Form>
      );
  };  
}
