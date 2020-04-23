import React from 'react';
import memoryUtils from '../../utils/memoryUtils'
import { Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import Header from '../../components/header'
import LeftNav from '../../components/left-nav'
const {Footer, Sider, Content } = Layout;

//自定义一个App组件
export default class Admin extends React.Component{
    //此时这里用箭头函数。会保证下面this的准确性
    
    render(){
        const user = memoryUtils.user
        //判断
        if(!user){
            return <Redirect to='/login'/>
        }
        return(
            <Layout style={{height:'100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{backgroundColor:'#ccc'}}>Content</Content>
                    <Footer style={{textAlign:'center'}}>欢迎来新元素大家庭</Footer>
                </Layout>
            </Layout>
        );
    }

}