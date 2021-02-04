// 导入依赖 cnpm i react react-dom -S
import React from 'react'
import ReactDOM from 'react-dom'

//导入组件
import Hello from '@/components/hello'

const user = {
	name:'dfsf',
	age:20
}

ReactDOM.render(
<div>
<Hello {...user}></Hello>
</div>
, document.getElementById('app'))
