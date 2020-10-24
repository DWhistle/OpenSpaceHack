import React from 'react'
import styles from './Rating.module.less'
import SearchPanel from '../SearchPanel/SearchPanel'

const Card = () => {
    return <div className={styles.card}>Отсталость</div>
}

const Rating = () => {
    return (
        <>
            <SearchPanel />
            <div className={styles.container}>
                {Array.from(Array(10).keys()).map((item) => (
                    <Card />
                ))}
            </div>
        </>
    )
}

export default Rating
