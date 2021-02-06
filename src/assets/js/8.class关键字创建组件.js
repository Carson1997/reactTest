import React from 'react'
import ReactDOM from 'react-dom'

const user = {
    name: 'cjc',
    age: 24
}


//class的组件：有状态组件，
//function的组件，只有props，没有私有数据state属性和生命周期，效率会高一点
//props和state/data区别：
// props中数据是外界传递过来的，只读不能重新赋值
// state/data组件是有的（ajax获取的数据），可读写


class Movie extends React.Component {

    constructor()
    {
        //只有调用supper才能用this
        super()
        //this.date = {} 相当于Vue的data(){return{}},可读写
        this.state = {
            msg: '432432'
        }
    }

    render()
    {
        this.state.msg = 'msg被修改了'
        return <div> movie组件, {
            this.props.name
        }, {
            this.props.age
        }
            <h3>{ this.state.msg}</h3>
        </div>
    }
}

ReactDOM.render( <Movie {
            ...user
        } > </Movie>, document.getElementById('app'))