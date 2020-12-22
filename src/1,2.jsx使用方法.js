// 导入依赖 cnpm i react react-dom -S
import React from 'react'
import ReactDOM from 'react-dom'

//参数1 dom，参数2 dom的属性，参数3 子节点
const myH1 = React.createElement('h1',{id:'myh1'},"h1h1h1")

// const myDiv = React.createElement('div',null,'divdiv',myH1)

//配置bebel识别jsx语法
const myDiv = <div>hello</div>

//参数1 react实例，参数2 容器，类型是dom
ReactDOM.render(myDiv, document.getElementById('app'))