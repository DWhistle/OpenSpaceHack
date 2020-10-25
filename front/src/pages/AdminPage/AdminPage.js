import React, { useEffect, useState } from 'react'
import { ReactComponent as BTSLogo } from '../../assets/img/BTSlogo.svg'
import { ReactComponent as BugsIcon } from '../../assets/img/bugs.svg'
import { ReactComponent as ChatsIcon } from '../../assets/img/chats.svg'
import { ReactComponent as RatingIcon } from '../../assets/img/rating.svg'
import { ReactComponent as ThreadsIcon } from '../../assets/img/threads.svg'
import styles from './AdminPage.module.less'
import NavBar from '../../components/NavBar/NavBar'
import ProfileBar from '../../components/ProfileBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from '../../routes'
import paths from '../../paths'
import history from '../../history'

const navItems = [
    {
        title: 'Список багов',
        icon: <BugsIcon />,
        path: paths.bugList,
    },
    {
        title: 'Треды',
        icon: <ThreadsIcon />,
        path: paths.threads,
    },
    {
        title: 'Рейтинг',
        icon: <RatingIcon />,
        path: paths.rating,
    },
    {
        title: 'Чаты',
        icon: <ChatsIcon />,
        path: paths.chats,
    },
]

const AdminPage = ({ setUser, avatar, user, setUserDevices, userDevices }) => {
    return (
        <div className={styles.container}>
            <NavBar navItems={navItems} />
            <div className={styles.container__content}>
                <ProfileBar setUser={setUser} avatar={avatar} />
                <Router history={history}>
                    <Switch>
                        {Object.values(routes).map((route) => (
                            <Route
                                key={route.path}
                                exact
                                path={route.path}
                                component={() =>
                                    route.component({ avatar, user, userDevices, setUserDevices })
                                }
                            />
                        ))}
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default AdminPage
