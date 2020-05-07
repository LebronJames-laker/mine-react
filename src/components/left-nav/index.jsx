import React from 'react';
import './index.less';
import {Link,withRouter} from 'react-router-dom';
import logo from '../../asserts/images/logo.jpg';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  HomeOutlined,
  UserOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import menuList from '../../config/menuConfig';

const { SubMenu } = Menu;
class LeftNav extends React.Component{
    //根据数据数组生成对应的标签数组
    getMenuNodes=(menuList)=>{

        
        
        return menuList.map(item=>{
            /**
             * <Menu.Item key="/home">
                    <Link to='/home'>
                        <HomeOutlined />
                        <span>首页</span>
                    </Link>
                </Menu.Item>
             */
            /**
             *      <SubMenu
                        key="sub1"
                        title={
                        <span>
                            <MailOutlined />
                            <span>商品</span>
                        </span>
                        }
                    >
                        <Menu.Item key="7">品牌logo</Menu.Item>
                        <Menu.Item key="8">维修信息</Menu.Item>
                    </SubMenu>
             * 
             * 
             */
            //判断是否有children属性，如果有，那么生成submenu标签
            if(!item.children){ //此时没有children属性,则生成menuItem
                return(
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                           
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                );
            }else{
                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                               
                            <span>{item.title}</span>
                            </span>
                            }
                        >
                        {
                            this.getMenuNodes(item.children)
                        }
                    </SubMenu>
                );
            }
         })        
    }
    getMenuNodesByReduce=(menuList)=>{
        //获取当前访问路径
        const path = this.props.location.pathname
        return menuList.reduce((pre,item)=>{
            if(!item.children){
                pre.push((
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>                 
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                ))
            }else{
                //查找一个与当前路径匹配的子Item
                const citem = item.children.find(citem=>citem.key===path)
                //给this绑定一个openkey,用于默认展开的菜单栏
                if(citem){
                   this.openKey = item.key 
                }
                
                console.log(this.openKey)
                console.log(path)
                pre.push((
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                               
                            <span>{item.title}</span>
                            </span>
                            }
                        >
                        {
                            this.getMenuNodesByReduce(item.children)
                        }
                    </SubMenu>
                ))
            }
            return pre
        },[])
    }
    //在第一次执行render的之前执行一次
    //为第一次render（）做一个数据准备
    componentWillMount(){
        this.menuNodes = this.getMenuNodesByReduce(menuList)
    }

    render(){
        //获取当前路径，并且这个路径起始就是我们的路由地址
        const path = this.props.location.pathname
        const openKey = this.openKey
        return(
            <div className='left-nav'>
                <Link to='/' className='left-nav-header'>
                    <img src={logo}  />
                    <h1>商品后台</h1>
                </Link>
                <Menu
                    selectedKeys={[path]}
                    defaultOpenKeys={[openKey]}
                    mode="inline"
                    theme="dark">
                    {this.menuNodes}
                </Menu>
            </div>
        );
    }
    
}
//利用withRouter这个高阶组件使当前组件成为路由组件，为了让LeftNav这个组件的props获得location属性
//传递三个属性 location match history
export default withRouter(LeftNav)