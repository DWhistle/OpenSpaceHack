import React, { useEffect, useState } from 'react'
import styles from './TabBar.module.less'

const TabBarItem = ({ item, isActive, setActiveItem }) => {
    const handleClick = () => {
        setActiveItem(item)
    }
    return (
        <div className={isActive ? styles.item__active : styles.item} onClick={handleClick}>
            {item.name}
        </div>
    )
}

const TabBar = ({ items, activeItem, setActiveItem }) => {
    return (
        <div className={styles.container}>
            {items.map((item) => (
                <TabBarItem
                    key={item.id}
                    isActive={item.id === activeItem.id}
                    setActiveItem={setActiveItem}
                    item={item}
                />
            ))}
        </div>
    )
}

export default TabBar
