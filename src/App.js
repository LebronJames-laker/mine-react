import React from 'react';
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

    }
}