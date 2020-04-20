import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a2e46ab52f53ab8b2d02787db49efe454270d4ff
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';

//自定义一个App组件
export default class App extends React.Component{
    //此时这里用箭头函数。会保证下面this的准确性
   
    render(){
        return (
            <BrowserRouter>
                <Switch>          
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch>
            </BrowserRouter>
            
        );
=======
<<<<<<< HEAD
=======
>>>>>>> 0766ece441bb4b4b7e19ff2aa0e9a4f00dc976da
=======
>>>>>>> 0766ece441bb4b4b7e19ff2aa0e9a4f00dc976da
=======
>>>>>>> a2e46ab52f53ab8b2d02787db49efe454270d4ff
import { Button,message} from 'antd'
//自定义一个App组件
export default class App extends React.Component{
    //此时这里用箭头函数。会保证下面this的准确性
    handleClick=()=>{
        message.success("成功啦，我的React项目搭起来啦")
    }
    render(){
        return <Button type="primary" onClick={this.handleClick}>点击我</Button>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0766ece441bb4b4b7e19ff2aa0e9a4f00dc976da
=======
>>>>>>> 0766ece441bb4b4b7e19ff2aa0e9a4f00dc976da
=======
=======
>>>>>>> a2e46ab52f53ab8b2d02787db49efe454270d4ff
>>>>>>> 0766ece441bb4b4b7e19ff2aa0e9a4f00dc976da
    }

}