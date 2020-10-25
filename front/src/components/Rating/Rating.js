import React, { useState } from 'react'
import { ReactComponent as Coins } from '../../assets/img/coins.svg'
import { ReactComponent as Photo } from '../../assets/img/photo-placeholder.svg'
import { ReactComponent as Medal } from '../../assets/img/medal.svg'
import SearchPanel from '../SearchPanel/SearchPanel'
import styles from './Rating.module.less'
import { getRandomAvatar } from '../../utils/getRandomAvatar'

const ratingData = [
    {
        name: 'Орехова Елизавета',
        place: 1,
        coins: 10950,
    },
    {
        name: 'Дима Сучков',
        place: 2,
        coins: 10700,
    },
    {
        name: 'Даша Вебб',
        place: 3,
        coins: 9850,
    },
    {
        name: 'Андрей Шибаев',
        place: 5,
        coins: 7540,
    },
    {
        name: 'Жаннетта Бутерус',
        place: 4,
        coins: 7800,
    },
    {
        name: 'Ким Нам Джун',
        place: 6,
        coins: 6230,
    },
    {
        name: 'Пак Чимин',
        place: 0,
        coins: 12350,
    },
    {
        name: 'Чон Джонгук',
        place: 8,
        coins: 4550,
    },
]

const Card = ({ item, currUser, showProfile }) => {
    return (
        <li
            className={`${styles.card} ${currUser === item.name ? styles.me : ''}`}
            onClick={() => showProfile(item)}
        >
            <div className={styles.title}>
                <div
                    className={`${styles.position} ${
                        currUser === item.name ? styles.me : styles.everyoneElse
                    }`}
                >
                    {item.place + 1}
                </div>
                <div className={styles.photo}>
                    <img src={getRandomAvatar()} alt="user avatar" className={styles.avatar} />
                    {item.name}
                </div>
            </div>
            <div className={styles.coins}>
                <Coins />
                <span className={styles.coinsText}>{item.coins}</span>
            </div>
        </li>
    )
}

const Rating = () => {
    const [data, setData] = useState(ratingData.sort((a, b) => a.place - b.place))
    const [profile, showProfile] = useState(null)

    const currUser = 'Ким Нам Джун'
    return (
        <>
            <SearchPanel />
            <div className={styles.container}>
                <ul style={{ width: '100%', marginRight: '16px' }}>
                    {data.map((item) => (
                        <Card item={item} currUser={currUser} showProfile={showProfile} />
                    ))}
                </ul>
                {profile && (
                    <div className={styles.sidePanel}>
                        <div className={styles.info}>
                            <Photo />
                            {profile.name}
                            <div>
                                <div className={styles.coins}>
                                    <Coins />
                                    <span className={styles.coinsText}>{profile.coins}</span>
                                </div>
                                <div className={styles.coins}>
                                    <Medal />
                                    <span className={styles.coinsText}>{profile.place + 1}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Rating
