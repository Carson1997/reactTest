import React from 'react'

// 导入子组件
import CmtItem from '@/components/CmtItem'

//导入样式
import css from '@/assets/css/style.scss';
console.log(css);

// //导入bootstrap
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
console.log(bootstrap);

export default class CmtList extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            CommentList: [{
                id: 1,
                user: 'aaa',
                content: '232332'
            },
            {
                id: 2,
                user: 'bbb',
                content: 'sdfds'
            },
            {
                id: 3,
                user: 'ccc',
                content: '344fds'
            }
            ]
        }
    }

    render()
    {
        return <div>
            {/* jsx样式style要用{{}}语法,class在className里引用*/}

            <button className="btn btn-primary">按钮</button>

            <h1 className={css.title} style={{ fontSize: '30px' }}>评论列表</h1>

            <div id={css.cmtTitle}>id</div>

            {/* <div className="test">全局</div> */}
            {/* <div className={css.title + ' test' }>多个类拼接</div> */}  
            <div className={[css.title, 'test'].join(' ')}>多个类拼接</div>
            
            {this.state.CommentList.map(item =>
                <CmtItem {...item} key={item.id}></CmtItem>
            )}
        </div>
    }
}