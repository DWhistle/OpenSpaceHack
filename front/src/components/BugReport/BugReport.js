import React, { useState } from 'react'
import styles from './BugReport.module.less'
import { getRandomAvatar } from '../../utils/getRandomAvatar'
import platform from 'platform'

const BugReport = ({ bug }) => {
    const [userDevices, setUserDevices] = useState([
        {
            os: {
                family: platform.os.family,
                version: platform.os.version,
            },
            browser: {
                name: platform.name,
                version: platform.version,
            },
        },
    ])

    return (
        <div className={styles.container}>
            <div className={styles.tweet}>
                <div className={styles.top}>
                    <span className={styles.title}>{bug.title}</span>
                    <div className={styles.tags}>
                        {bug.tags.map((tag) => (
                            <div
                                key={tag.id}
                                className={styles.item}
                                style={{ background: tag.color }}
                            >
                                <span>{tag.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.details}>
                    <div className={styles.description}>
                        Условное описание бага, может быть очень разным. Тут можно много написать,
                        но без фанатизма конечно, не трактаты на всю карточку. Вот так вот не надо
                        делать, молодой человек, имейте уважение, ей богу. Вообще тут можно написать
                        побольше и даже пару абзацев. Вот так. Да. Вот так.
                    </div>
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
                </div>
                <div className={styles.bottom}>
                    <div className={styles.photo}>
                        <img
                            src={getRandomAvatar()}
                            alt="user avatar"
                            className={styles.avatar}
                            width={'32px'}
                            height={'32px'}
                        />
                        <div>
                            <div className={styles.author}>{bug.author}</div>
                            <div className={styles.tester}>Бета-тестер</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BugReport
