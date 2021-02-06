import React from 'react'

import styles from '@/components/CmtListStyle';

export default function  CmtItem(item)
{
    return <div style={styles.itemSyle}>
        <h2 style={styles.userStyle}> 用户：{item.user}</h2>
        <p style={styles.contentStyle}>评论：{item.content}</p>
    </div>
}