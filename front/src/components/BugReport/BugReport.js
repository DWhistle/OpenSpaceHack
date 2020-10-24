import React from 'react'
import styles from './BugReport.module.less'

const BugReport = ({ bug }) => {
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
                <div className={styles.description}>
                    Условное описание бага, может быть очень разным. Тут можно много написать, но
                    без фанатизма конечно, не трактаты на всю карточку. Вот так вот не надо делать,
                    молодой человек, имейте уважение, ей богу. Вообще тут можно написать побольше и
                    даже пару абзацев. Вот так. Да. Вот так.
                </div>
                <div className={styles.bottom}>
                    <div className={styles.liked}>Орехова Елизавета</div>
                </div>
            </div>
        </div>
    )
}

export default BugReport
