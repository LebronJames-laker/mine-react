import React from 'react'
import './index.less'
import {withRouter} from 'react-router-dom'
import {formateDate} from '../../utils/dateUtils'
import menuList from '../../config/menuConfig'
import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import LinkButton from '../linkButton'

const { confirm } = Modal;
class Header extends React.Component{


    state = {
        currentTime:formateDate(Date.now())
    }
    //每隔1s更新一下时间！！！
    getTime=()=>{
        this.intervalId = setInterval(()=>{
            const currentTime = formateDate(Date.now())
            this.setState({currentTime})
        },1000)

    }
    
    //动态显示每个菜单栏对应的标题
    getTitle=()=>{
        //得到当前访问路径 
        const path = this.props.location.pathname
        //定义一个标题
        let title
        //遍历
        menuList.forEach(item=>{
            if(item.key===path){
                title = item.title
            }else if(item.children){
                const cItem = item.children.find(cItem=>cItem.key===path)
                if(cItem){
                    title = cItem.title
                }
            }
        })
        return title

    }
    //点击退出登录的函数
    

    logOut=()=>{
        confirm({
          title: '退出系统',
          icon: <ExclamationCircleOutlined />,
          content: '确定吗？',
          onOk:()=> { //改成箭头函数，此时的this就会引用外部的this
            console.log('OK');
            //删除保存的user数据，跳转到login界面
            this.props.history.replace('/login')
          }
        });
      }
    //在第一次执行render()之后执行，并且只执行一次!!!
    componentDidMount(){
        this.getTime()
    }
    //在组件被卸载之前调用
    componentWillUnmount(){
        clearInterval(this.intervalId)
    }


    render(){

        //结构state
        const currentTime = this.state.currentTime
        //获取标题
        const title = this.getTitle()
        return (
            <div className='header'>
                <div className='header-top'>
                    <span>欢迎，admin</span>
                    <LinkButton onClick={this.logOut}>退出</LinkButton>
                </div>
                
               
                <div className='header-bottom'>
                    <div className='header-bottom-left'>
                    <span>{title}</span>
                    </div>
                    <div className='header-bottom-right'>
                        <span>{currentTime}</span>
                        <img src="http://pics.sc.chinaz.com/Files/pic/icons128/5904/w12.png" alt="晴天"/>
                        <span>天气：晴</span>
                    </div>
                </div>        
            </div>
        );
    }
}
export default withRouter(Header)