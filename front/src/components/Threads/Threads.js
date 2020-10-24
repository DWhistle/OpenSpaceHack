import React, { useEffect, useState } from 'react'
import TabBar from '../TabBar'
import SearchPanel from '../SearchPanel/SearchPanel'
import styles from './Threads.module.less'
import BugReport from '../BugReport/BugReport'

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
        tags: [
            {
                name: 'переводы',
                color: '#FF7F00',
                id: 0,
            },
            {
                name: 'iOs',
                color: 'rgba(0, 212, 72, 0.4)',
                id: 1,
            },
            {
                name: 'авторизация',
                color: 'rgba(219, 0, 44, 0.4)',
                id: 2,
            },
        ],
        date: '23.10.2020 в 19:34',
        title: 'Опечатка в разделе "Дебетовые карты"',
        description:
            'Условное описание бага, может быть очень разным. Максимальное отображение в карточке треда – 1-2 строчки.',
        liked: ['Жанна'],
        isActive: true,
    },
    {
        tags: ['Переводы', 'Опечатка', 'Срочно'],
        date: '23.10.2020 в 19:34',
        title: 'Опечатка в разделе "Дебетовые карты"',
        description:
            'Условное описание бага, может быть очень разным. Максимальное отображение в карточке треда – 1-2 строчки.',
        liked: ['Жанна'],
        isActive: true,
    },
    {
        tags: ['Переводы', 'Опечатка', 'Срочно'],
        date: '23.10.2020 в 19:34',
        title: 'Опечатка в разделе "Дебетовые карты"',
        description:
            'Условное описание бага, может быть очень разным. Максимальное отображение в карточке треда – 1-2 строчки.',
        liked: ['Жанна'],
        isActive: true,
    },
    {
        tags: ['Переводы', 'Опечатка', 'Срочно'],
        date: '23.10.2020 в 19:34',
        title: 'Опечатка в разделе "Дебетовые карты"',
        description:
            'Условное описание бага, может быть очень разным. Максимальное отображение в карточке треда – 1-2 строчки.',
        liked: ['Жанна'],
        isActive: false,
    },
    {
        tags: ['Переводы', 'Опечатка', 'Срочно'],
        date: '23.10.2020 в 19:34',
        title: 'Опечатка в разделе "Дебетовые карты"',
        description:
            'Условное описание бага, может быть очень разным. Максимальное отображение в карточке треда – 1-2 строчки.',
        liked: ['Жанна'],
        isActive: false,
    },
    {
        tags: ['Переводы', 'Опечатка', 'Срочно'],
        date: '23.10.2020 в 19:34',
        title: 'Опечатка в разделе "Дебетовые карты"',
        description:
            'Условное описание бага, может быть очень разным. Максимальное отображение в карточке треда – 1-2 строчки.',
        liked: ['Жанна'],
        isActive: true,
    },
]

const BugReportPage = ({ bug }) => {
    return (
        <div>
            тут детальный твит
            <BugReport bug={bug} />
        </div>
    )
}

const Tweet = ({ item, showTweet, setSelectedBug }) => {
    const chooseBug = () => {
        showTweet(true)
        setSelectedBug(item)
    }

    return (
        <div className={styles.tweet} onClick={() => chooseBug()}>
            <div className={styles.top}>
                <span className={styles.title}>{item.title}</span>
                <div className={styles.tags}>
                    {item.tags.map((tag) => (
                        <div key={tag.id} className={styles.item} style={{ background: tag.color }}>
                            <span>{tag.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.description}>{item.description}</div>
            <div className={styles.bottom}>
                <div className={styles.liked}>{item.liked}</div>
                <span className={styles.date}>{item.date}</span>
            </div>
        </div>
    )
}

const ThreadsContainer = ({ data, showTweet, setSelectedBug }) => {
    return (
        <div className={styles.container}>
            {data.map((item, i) => (
                <Tweet key={i} item={item} showTweet={showTweet} setSelectedBug={setSelectedBug} />
            ))}
        </div>
    )
}

const Threads = () => {
    const [activeItem, setActiveItem] = useState(items[0])
    const [showData, setShowData] = useState(threadsData.filter((el) => el.isActive))
    const [showDetailedTweet, setShowDetailedTweet] = useState(false)
    const [selectedBug, setSelectedBug] = useState({})

    useEffect(() => {
        if (activeItem.id === 0) {
            setShowData(threadsData.filter((el) => el.isActive))
        } else {
            setShowData(threadsData.filter((el) => !el.isActive))
        }
    }, [activeItem])

    return (
        <>
            <SearchPanel />
            {!showDetailedTweet ? (
                <>
                    <TabBar items={items} activeItem={activeItem} setActiveItem={setActiveItem} />
                    <ThreadsContainer
                        data={showData}
                        showTweet={setShowDetailedTweet}
                        setSelectedBug={setSelectedBug}
                    />
                </>
            ) : (
                <BugReportPage bug={selectedBug} />
            )}
        </>
    )
}

export default Threads
