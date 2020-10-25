import React, { useState, useRef, useEffect } from 'react'
import styles from './ProfileBar.module.less'
import { useOutsideAlerter } from '../../utils/useOutsideAlerter'
import paths from '../../paths'
import NotificationIcon from '../../icons/notification.svg'
import { Link } from 'react-router-dom'

const ProfileBar = ({ setUser, avatar }) => {
    const [isOpen, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!isOpen)
    }

    const profileRef = useRef()

    useOutsideAlerter(profileRef, () => {
        setOpen(false)
    })

    return (
        <div className={styles.container} ref={profileRef}>
            <img alt="notifications" src={NotificationIcon} />
            <img src={avatar} height={32} alt="avatar" onClick={handleOpen} />
            {isOpen && (
                <div className={styles.modal}>
                    <Link to={paths.profile} className={styles.modal__item}>
                        <span className={styles.modal__item__text}>ПРОФИЛЬ</span>
                    </Link>
                    <div
                        className={styles.modal__item}
                        onClick={() => {
                            setUser('')
                            localStorage.clear()
                        }}
                    >
                        <span className={styles.modal__item__text}>ВЫЙТИ</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProfileBar
