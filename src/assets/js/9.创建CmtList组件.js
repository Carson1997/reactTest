import React from 'react'
import ReactDOM from 'react-dom'

//使用function定义组件
// function CmtItem(item)
// {
//     return <div>
//         <h2> 用户：{item.user}</h2>
//         <p>评论：{item.content}</p>
//     </div>
// }

// 导入子组件
// import CmtItem from '@/components/CmtItem'

//使用class定义组件
// class CmtList extends React.Component
// {
//     constructor()
//     {
//         super()
//         this.state = {
//             CommentList: [{
//                 id: 1,
//                 user: 'aaa',
//                 content: '232332'
//             },
//             {
//                 id: 2,
//                 user: 'bbb',
//                 content: 'sdfds'
//             },
//             {
//                 id: 3,
//                 user: 'ccc',
//                 content: '344fds'
//             }
//             ]
//         }
//     }

//     render()
//     {
//         return <div>
//             <h1>评论列表</h1>
//             {this.state.CommentList.map(item =>
//                 <CmtItem {...item} key={item.id}></CmtItem>
//             )}
//         </div>
//     }
// }

// 导入CmtList组件
import CmtList from '@/components/CmtList'


ReactDOM.render(< CmtList > </CmtList>, document.getElementById('app'))