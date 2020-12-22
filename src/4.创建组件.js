// 导入依赖 cnpm i react react-dom -S
import React from 'react'
import ReactDOM from 'react-dom'

const user ={
	name:"abc",
	age:10
	}

function Hello (params){
	return <div {...params}>hello组件--{params.name}--{params.age}</div>
}

ReactDOM.render(
<div>
<Hello  {...user}></Hello>
</div>
, document.getElementById('app'))
