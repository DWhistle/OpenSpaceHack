import React from 'react'
import styles from './BugReport.module.less'

const BugReport = ({ bug }) => {
    return (
        <div className={styles.tweet}>
            <div className={styles.top}>
                <span className={styles.title}>{bug.title}</span>
                <div className={styles.tags}>
                    {bug.tags.map((tag) => (
                        <div key={tag.id} className={styles.item} style={{ background: tag.color }}>
                            <span>{tag.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.description}>{bug.description}</div>
            <div className={styles.bottom}>
                <div className={styles.liked}>{bug.liked}</div>
                <span className={styles.date}>{bug.date}</span>
            </div>
        </div>
    )
}

export default BugReport
