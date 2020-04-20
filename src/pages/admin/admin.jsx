import React from 'react';

//自定义一个App组件
export default class Admin extends React.Component{
    //此时这里用箭头函数。会保证下面this的准确性
    
    render(){
        return <div>Admin</div>
    }

}