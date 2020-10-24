import React, { useEffect, useState } from 'react'
import TabBar from '../TabBar'
import SearchPanel from '../SearchPanel/SearchPanel'
import styles from './Threads.module.less'

const items = [
    {
        id: 0,
        name: 'Активные',
    },
    {
        id: 1,
        name: 'Закрытые',
    },
]

const threadsData = [
    {
        tags: [],
        date: '',
        title: '',
        description: '',
        liked: [],
        isActive: true,
    },
    {
        tags: [],
        date: '',
        title: '',
        description: '',
        liked: [],
        isActive: false,
    },
    {
        tags: [],
        date: '',
        title: '',
        description: '',
        liked: [],
        isActive: false,
    },
    {
        tags: [],
        date: '',
        title: '',
        description: '',
        liked: [],
        isActive: false,
    },
    {
        tags: [],
        date: '',
        title: '',
        description: '',
        liked: [],
        isActive: false,
    },
]

const Tweet = () => {
    return <div>я твит</div>
}
const ThreadsContainer = ({ data }) => {
    return (
        <div className={styles.container}>
            {data.map((item) => (
                <Tweet />
            ))}
        </div>
    )
}

const Threads = () => {
    const [activeItem, setActiveItem] = useState(items[0])
    const [showData, setShowData] = useState(threadsData.filter((el) => el.isActive))

    useEffect(() => {
        if (activeItem.id === 0) {
            setShowData(threadsData.filter((el) => el.isActive))
        } else {
            setShowData(threadsData.filter((el) => !el.isActive))
        }
    }, [activeItem])

    useEffect(() => {
        console.log(activeItem)
    }, [activeItem])

    return (
        <>
            <SearchPanel />
            <TabBar items={items} activeItem={activeItem} setActiveItem={setActiveItem} />
            <ThreadsContainer data={showData} />
        </>
    )
}

export default Threads
