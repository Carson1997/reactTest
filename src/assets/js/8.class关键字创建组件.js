import React from 'react'
import ReactDOM from 'react-dom'

const user = {
    name: 'cjc',
    age: 24
}

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