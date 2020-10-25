import styles from '../../pages/AdminPage/AdminPage.module.less'
import { ReactComponent as BTSLogo } from '../../assets/img/BTSlogo.svg'
import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'

export const NavItem = ({ icon, text, route }) => {
    const match = useRouteMatch(route)
    return (
        <NavLink
            exact
            to={route.path}
            activeClassName={styles.selected}
            isActive={() => !!match}
            className={styles.navItem}
        >
            <div className={styles.content}>
                <div className={styles.icon}>{icon}</div>
                {text}
            </div>
        </NavLink>
    )
}

const NavBar = ({ navItems }) => {
    return (
        <div className={styles.navigation}>
            <div className={styles.logo}>
                <BTSLogo />
            </div>
            <ul>
                {navItems.map((item) => (
                    <NavItem key={item.path} route={item} icon={item.icon} text={item.title} />
                ))}
            </ul>
        </div>
    )
}

export default NavBar
