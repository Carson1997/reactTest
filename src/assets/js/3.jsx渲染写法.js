// 导入依赖 cnpm i react react-dom -S
import React from 'react'
import ReactDOM from 'react-dom'

let a = 10;
let str = 'hello';
let foo = true;
let title = '111';
let h1 = <h1>fsdfsdfsdfs</h1>
let arr = [
	<h2>h2</h2>,
	<h3>h3</h3>
];
let arrStr = [1,2,3];
let nameStr = arrStr.map(item => {
	return <h5 key={item}>{item}</h5>
})

ReactDOM.render(
<div>
{a + 2}
<hr/>
{str}
<hr/>
{foo?'真':'假'}
<hr/>
<p title={title}>p</p>
<hr/>
{h1}
<hr/>
{arr}
<hr/>
{arrStr}
<hr/>
{nameStr}
<hr/>
{arrStr.map(item => 
	 <h5 key={item}>{item}</h5>
)}
<hr/>
<p class="my">fdsfsdf</p>

</div>
, document.getElementById('app'))
