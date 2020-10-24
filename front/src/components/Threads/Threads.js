import React, { useEffect, useState } from 'react'
import TabBar from '../TabBar'
import SearchPanel from '../SearchPanel/SearchPanel'
import styles from './Threads.module.less'
import plusIcon from '../../icons/plus.svg'

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
                id: 0,
            },
            {
                name: 'авторизация',
                color: 'rgba(219, 0, 44, 0.4)',
                id: 0,
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

const ExpandedTweet = () => {}

const Tweet = ({ title, tags, description, liked, date }) => {
    return (
        <div className={styles.tweet}>
            <div className={styles.top}>
                <span className={styles.title}>{title}</span>
                <div className={styles.tags}>
                    {tags.map((tag) => (
                        <div key={tag.id} className={styles.item} style={{ background: tag.color }}>
                            <span>{tag.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.description}>{description}</div>
            <div className={styles.bottom}>
                <div className={styles.liked}>{liked}</div>
                <span className={styles.date}>{date}</span>
            </div>
        </div>
    )
}

const ThreadsContainer = ({ data }) => {
    return (
        <div className={styles.container}>
            {data.map((item, i) => (
                <Tweet
                    key={i}
                    title={item.title}
                    tags={item.tags}
                    description={item.description}
                    liked={item.liked}
                    date={item.date}
                />
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

    return (
        <>
            <SearchPanel />
            <TabBar items={items} activeItem={activeItem} setActiveItem={setActiveItem} />
            <ThreadsContainer data={showData} />
        </>
    )
}

export default Threads
