import React from 'react';
import './index.less';
import {Link} from 'react-router-dom'
import logo from '../../asserts/images/logo.jpg'
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
export default class LeftNav extends React.Component{

    render(){
        return(
            <div className='left-nav'>
                <Link to='/' className='left-nav-header'>
                    <img src={logo}  />
                    <h1>商品后台</h1>
                </Link>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    
                    >
                    <Menu.Item key="1">
                        <PieChartOutlined />
                        <span>首页</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <DesktopOutlined />
                        <span>用户管理</span>
                    </Menu.Item>
            
                    <SubMenu
                        key="sub1"
                        title={
                        <span>
                            <MailOutlined />
                            <span>商品信息</span>
                        </span>
                        }
                    >
                        <Menu.Item key="5">商品单价</Menu.Item>
                        <Menu.Item key="6">库存管理</Menu.Item>
                        <Menu.Item key="7">品牌logo</Menu.Item>
                        <Menu.Item key="8">维修信息</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                        <span>
                            <AppstoreOutlined />
                            <span>图形图表</span>
                        </span>
                        }
                    >
                        <Menu.Item key="9">折线图</Menu.Item>
                        <Menu.Item key="10">柱状图</Menu.Item>
                        <SubMenu key="sub3" title="更新情况">
                            <Menu.Item key="11">纵向</Menu.Item>
                            <Menu.Item key="12">横向</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
    
}