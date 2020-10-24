import styles from '../../pages/AdminPage/AdminPage.module.less'
import { ReactComponent as BTSLogo } from '../../assets/img/BTSlogo.svg'
import React from 'react'

export const NavItem = ({ icon, text, isSelected, setSelectedTab, index }) => (
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

const NavBar = ({ selectedTab, setSelectedTab, navItems }) => {
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

export default NavBar
