import React from 'react';
import { Button,message} from 'antd'
//自定义一个App组件
export default class App extends React.Component{
    //此时这里用箭头函数。会保证下面this的准确性
    handleClick=()=>{
        message.success("成功啦，我的React项目搭起来啦")
    }
    render(){
        return <Button type="primary" onClick={this.handleClick}>点击我</Button>
    }

}