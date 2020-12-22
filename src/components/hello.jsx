import React from 'react'

export default function Hello (params){
	return <div {...params}>hello组件--{params.name}--{params.age}</div>
}