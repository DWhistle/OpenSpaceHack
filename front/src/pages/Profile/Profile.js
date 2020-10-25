import React, { useState } from 'react'
import styles from './profile.module.less'
import editProfileIcon from '../../icons/edit_profile.svg'
import plusIcon from '../../icons/plus2.svg'
import TabBar from '../../components/TabBar'

const Profile = ({ avatar, user, userDevices, setUserDevices }) => {
    const tabs = [
        {
            id: 0,
            name: 'Вся активность',
        },
        {
            id: 1,
            name: 'Треды',
        },
        {
            id: 2,
            name: 'Мои баги',
        },
    ]

    const [activeTab, setActiveTab] = useState(tabs[0])
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.main__content}>
                    <TabBar items={tabs} activeItem={activeTab} setActiveItem={setActiveTab} />
                    Profile Page
                </div>
            </div>
            <div className={styles.side_bar}>
                <div className={styles.side_bar__section}>
                    <div className={styles.side_bar__images}>
                        <img src={avatar} height={'30%'} alt="avatar" />
                        <img src={editProfileIcon} alt="edit" />
                    </div>
                    {user === 'tester' ? (
                        <>
                            <h1>Елизавета Орехова</h1>
                            <span>Бета-тестер</span>
                        </>
                    ) : (
                        <>
                            <h1>Жаннета Бутерус</h1>
                            <span>Администратор</span>
                        </>
                    )}
                </div>
                <div className={styles.side_bar__section}>
                    <h3 className={styles.device__header}>Мои девайсы</h3>
                    {userDevices.map((device) => (
                        <div className={styles.device} key={device.id}>
                            <span className={styles.device__text}>
                                OS: {device.os.family} {device.os.version}
                            </span>
                            <span className={styles.device__text}>
                                Браузер: {device.browser.name} {device.browser.version}
                            </span>
                        </div>
                    ))}
                    <span className={styles.device__add}>
                        <img src={plusIcon} alt="addIcon" />
                        Добавить новое устройство
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Profile
