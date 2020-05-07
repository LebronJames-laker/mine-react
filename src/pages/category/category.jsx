import React from 'react'
import { PlusOutlined } from '@ant-design/icons';
import 
{
    Card,
    Table,
    Button,
    Icon
} from 'antd'
import LinkButton from '../../components/linkButton'
import {reqSelectCategorys} from '../../api'
export default class Category extends React.Component{
    state = {
        categorys:[],
        loading:false,
        parentId:0, //父id，默认是0,也就是说，默认是查看一级分类列表
        subCategorys:[],//二级分类列表
        parentName:'',
    }
    //初始化列数组
    initColumns=()=>{
        this.columns = [
            {
              title: '分类名称',
              dataIndex: 'typeName', //对应datasource里面的需要显示的字段名称
        
            },
            {
              title: '操作',
              width:300,
              render: (category)=>( //返回需要显示的界面标签
                  <span>
                      <LinkButton>修改分类</LinkButton>
                      {/* 如何向事件回调函数里传递参数：先定义一个匿名函数，在这个函数调用处理函数的时候传入 */}
                      <LinkButton onClick={()=>this.showSubCategorys(category)}>查看子分类</LinkButton>
                  </span>
              )
            },
        ];
    }
    //获取分类数据
    getCategorys = async()=>{
        //获取数据之前，显示loading
        this.setState({loading:true})
        //结构状态中的parentid
        const {parentId,subCategorys} = this.state
        //得到的是promise对象
        const result = await reqSelectCategorys(parentId)
        // console.log(result)
        //获取到数据了，关闭loading显示
        this.setState({loading:false})
        const categorys = result
        if(parentId===0){
            //证明此时应该显示的是一级列表
            this.setState({categorys})
        }else{
            //证明此时需要显示的是二级分类
            this.setState({subCategorys:categorys})
        }  
    }
    //点击查看子分类的时候触发的函数
    showSubCategorys = (category)=>{
        //先更新状态，然后再去查询二级分类列表
        this.setState(
                {
                    parentId:category.typeId,
                    parentName:category.typeName
                },
                ()=>{
                    //在状态更新并且重新render之后执行
                    //因为这个setState是异步更新状态，不加回调是达不到我们想要的效果的！！！
                    console.log('parentId',this.state.parentId)
                    this.getCategorys()
                }
            )
    }
    /**
     * 为第一次render准备数据
     */
    componentWillMount(){
        this.initColumns()
    }
    /**
     * 异步获取一级分类的数据
     */
    componentDidMount(){
        this.getCategorys()
    }

    render(){
        const {categorys,loading,subCategorys,parentId,parentName} = this.state
        const title = '一级分类'
        const extra = (
            <Button type="primary" icon={<PlusOutlined />}>
                添加
            </Button>
        )
            
        return(
            <div>
                <Card title={title} extra={extra}>
                    <Table
                        bordered
                        rowKey='typeId'
                        dataSource={parentId===0?categorys:subCategorys} 
                        columns={this.columns} 
                        pagination={{defaultPageSize:3,showQuickJumper:true}}
                        loading={loading}
                        />
                </Card>
            </div>
        );
    }
}