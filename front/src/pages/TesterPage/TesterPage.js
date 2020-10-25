import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from '../AdminPage/AdminPage.module.less'
import NavBar from '../../components/NavBar/NavBar'
import Button from '../../components/Button/Button'
import { ReactComponent as BugsIcon } from '../../assets/img/bugs.svg'
import { ReactComponent as RatingIcon } from '../../assets/img/rating.svg'
import { ReactComponent as ThreadsIcon } from '../../assets/img/threads.svg'
import { ReactComponent as ChatsIcon } from '../../assets/img/chats.svg'
import routes from '../../routes'
import paths from '../../paths'
import ProfileBar from '../../components/ProfileBar'

const navItems = [
    {
        path: paths.threads,
        title: 'Треды',
        icon: <ThreadsIcon />,
    },
    {
        path: paths.bugList,
        title: 'Мои баги',
        icon: <ThreadsIcon />,
    },
    {
        path: paths.rating,
        title: 'Рейтинг',
        icon: <BugsIcon />,
    },
    {
        path: paths.shop,
        title: 'Магазин',
        icon: <ChatsIcon />,
    },
]

const TesterPage = ({ setUser, avatar, user, setUserDevices, userDevices }) => {

    return (
        <div className={styles.container}>
            <NavBar navItems={navItems} />
            <div className={styles.container__content}>
                <ProfileBar avatar={avatar} setUser={setUser} />

                <Switch>
                    {Object.values(routes).map((route) => (
                            <Route
                                key={route.path}
                                exact
                                path={route.path}
                                component={() => route.component({ user, avatar, userDevices, setUserDevices })}
                            />
                            ))}
                </Switch>

            </div>
        </div>
    )
}
export default TesterPage
