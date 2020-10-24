import React, { useEffect, useState } from 'react'
import { ReactComponent as BTSLogo } from '../../assets/img/BTSlogo.svg'
import { ReactComponent as BugsIcon } from '../../assets/img/bugs.svg'
import { ReactComponent as ChatsIcon } from '../../assets/img/chats.svg'
import { ReactComponent as RatingIcon } from '../../assets/img/rating.svg'
import { ReactComponent as ThreadsIcon } from '../../assets/img/threads.svg'
import styles from './AdminPage.module.less'
import Button from '../../components/Button/Button'
import Comments from '../../components/Comments'

const navItems = [
    {
        title: 'Список багов',
        icon: <BugsIcon />,
    },
    {
        title: 'Рейтинг',
        icon: <RatingIcon />,
    },
    {
        title: 'Треды',
        icon: <ThreadsIcon />,
    },
    {
        title: 'Чаты',
        icon: <ChatsIcon />,
    },
]

const BugList = () => (
    <>
        <div>Я баглист</div>
    </>
)
const Rating = () => <div>Я Rating</div>

const Threads = () => (
    <div>
        <Comments />
    </div>
)
const Chats = () => <div>Я Chats</div>

const content = [<BugList />, <Rating />, <Threads />, <Chats />]

const NavItem = ({ icon, text, isSelected, setSelectedTab, index }) => (
    <li
        onClick={() => setSelectedTab(index)}
        className={`${styles.navItem} ${isSelected ? styles.selected : ''}`}
    >
        <div className={styles.content}>
            <div className={styles.icon}>{icon}</div>
            {text}
        </div>
    </li>
)

const NavBar = ({ selectedTab, setSelectedTab }) => {
    return (
        <div className={styles.navigation}>
            <div className={styles.logo}>
                <BTSLogo />
            </div>
            <ul>
                {navItems.map((item, i) => (
                    <NavItem
                        key={i}
                        icon={item.icon}
                        text={item.title}
                        isSelected={selectedTab === i}
                        setSelectedTab={setSelectedTab}
                        index={i}
                    />
                ))}
            </ul>
        </div>
    )
}

const AdminPage = ({ setUser }) => {
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div className={styles.container}>
            <NavBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <div style={{ display: 'block' }}>
                <div className={styles.topPanel} onClick={() => setUser('')}>
                    <Button text={'выпустите меня'} />
                </div>
                {content[selectedTab.toString()]}
            </div>
        </div>
    )
}

export default AdminPage
