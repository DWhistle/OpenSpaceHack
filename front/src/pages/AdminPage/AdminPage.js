import React, { useEffect, useState } from 'react'
import { ReactComponent as BTSLogo } from '../../assets/img/BTSlogo.svg'
import { ReactComponent as BugsIcon } from '../../assets/img/bugs.svg'
import { ReactComponent as ChatsIcon } from '../../assets/img/chats.svg'
import { ReactComponent as RatingIcon } from '../../assets/img/rating.svg'
import { ReactComponent as ThreadsIcon } from '../../assets/img/threads.svg'
import styles from './AdminPage.module.less'
import Button from '../../components/Button/Button'
import NavBar from '../../components/NavBar/NavBar'
import Comments from '../../components/Comments'
import BugList from '../BugList/BugList'

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

const Rating = () => <div>Я Rating</div>

const Threads = () => (
    <div>
        <Comments />
    </div>
)
const Chats = () => <div>Я Chats</div>

const content = [<BugList />, <Rating />, <Threads />, <Chats />]

const AdminPage = ({ setUser }) => {
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div className={styles.container}>
            <NavBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} navItems={navItems} />
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
