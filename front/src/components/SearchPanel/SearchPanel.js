import React, { useState } from 'react'
import styles from './SearchPanel.module.less'

const SearchPanel = () => {
    const [query, setQuery] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className={styles.topPanel}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    className={styles.input}
                    placeholder={'Поиск по названию или хештегу'}
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </form>
        </div>
    )
}

export default SearchPanel
