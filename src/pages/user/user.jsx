import React from 'react'
import { Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    firstName: '杰伦',
    lastName: '周',
    age: 41,
    address: '中国台湾',
    tags: ['帅', '唱歌好听'],
  },
  {
    key: '2',
    firstName: '志祥',
    lastName: '罗',
    age: 42,
    address: '中国台湾',
    tags: ['时间管理家','永远都充满精力','喜欢团队运动'],
  },
  {
    key: '3',
    firstName: '星驰',
    lastName: '周',
    age: 58,
    address: '中国香港',
    tags: ['幽默','梦想','奉献'],
  },
  {
    key: '3',
    firstName: '天乐',
    lastName: '古',
    age: 50,
    address: '中国香港',
    tags: ['非常帅', '发际线高','高','黑壮','演技好'],
  },
  {
    key: '3',
    firstName: '学友',
    lastName: '张',
    age: 32,
    address: '中国香港',
    tags: ['吃屎啦你', '歌王','唱歌好听到耳朵怀孕'],
  },
  {
    key: '3',
    firstName: '德华',
    lastName: '刘',
    age: 32,
    address: '中国香港',
    tags: ['光头依然帅', '忘情水','四大铁王'],
  },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  {
    key: '3',
    firstName: '洪俊',
    lastName: '刘',
    age: 22,
    address: '广东深圳',
    tags: ['胖', '头发密','喜欢吃','技术好'],
  },
  {
    key: '3',
    firstName: '太平',
    lastName: '王',
    age: 23,
    address: '广东深圳',
    tags: ['太平', '睡神','凌晨两三点依然奋斗在王者峡谷'],
  },
  {
    key: '3',
    firstName: '宏展',
    lastName: '赵',
    age: 32,
    address: '湖北黄冈',
    tags: ['壮', '泽林通宵','别吓人'],
  },
  {
    key: '3',
    firstName: '奕迅',
    lastName: '陈',
    age: 32,
    address: '中国香港',
    tags: ['歌王', '十年','爱搞怪','女儿早恋很生气'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
export default class User extends React.Component{
    render(){
        return(
            <div>
                <Table dataSource={data}>
                    <ColumnGroup title="Name">
                    <Column title="First Name" dataIndex="firstName" key="firstName" />
                    <Column title="Last Name" dataIndex="lastName" key="lastName" />
                    </ColumnGroup>
                    <Column title="Age" dataIndex="age" key="age" />
                    <Column title="Address" dataIndex="address" key="address" />
                    <Column
                    title="Tags"
                    dataIndex="tags"
                    key="tags"
                    render={tags => (
                        <span>
                        {tags.map(tag => (
                            <Tag color="blue" key={tag}>
                            {tag}
                            </Tag>
                        ))}
                        </span>
                    )}
                    />
                    <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <span>
                        <a style={{ marginRight: 16 }}>Invite {record.lastName}</a>
                        <a>Delete</a>
                        </span>
                    )}
                    />
                </Table>
            </div>
        );
    }
}