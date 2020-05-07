import React from 'react';
import memoryUtils from '../../utils/memoryUtils';
import { Redirect,Route,Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Header from '../../components/header';
import LeftNav from '../../components/left-nav';
import Home from '../home/home';
import Category from '../category/category';
import User from '../user/user';
import Role from '../role/role';
import Product from '../product/product';
import Bar from '../charts/bar';
import Line from '../charts/line';
import Pie from '../charts/pie';
const {Footer, Sider, Content } = Layout;

//自定义一个App组件
export default class Admin extends React.Component{
    //此时这里用箭头函数。会保证下面this的准确性
    
    render(){
        // const user = memoryUtils.user
        //判断
        // if(user.userId < 1){
        //     return <Redirect to='/login'/>
        // }
        return(
            <Layout style={{height:'100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{margin:20,backgroundColor:'#ccc'}}>
                        <Switch>
                            <Route path='/home' component={Home}/>
                            <Route path='/category' component={Category}/>
                            <Route path='/user' component={User}/>
                            <Route path='/role' component={Role}/>
                            <Route path='/charts/bar' component={Bar}/>
                            <Route path='/charts/line' component={Line}/>
                            <Route path='/charts/pie' component={Pie}/>
                            <Route path='/product' component={Product}/> 
                            <Redirect to='/home'/>
                        </Switch>
                    </Content>
                    <Footer style={{textAlign:'center'}}>欢迎来新元素大家庭</Footer>
                </Layout>
            </Layout>
        );
    }

}