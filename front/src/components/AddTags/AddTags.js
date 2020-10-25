import React, { useState } from 'react'
import styles from '../../pages/BugList/BugList.module.less'
import Button from '../Button/Button'

const AddTags = ({ setTags, tags, allTags, setOpen }) => {
    const [currentTags, setCurrentTags] = useState(tags)
    const handleTags = (tag) => {
        if (currentTags.some((item) => item.id === tag.id)) {
            setCurrentTags(currentTags.filter((item) => item.id !== tag.id))
        } else {
            setCurrentTags(currentTags.concat(tag))
        }
    }

    return (
        <div className={styles.addTag}>
            <h1 className={styles.addTag__header}>Теги</h1>
            <div className={styles.addTag__tags_container}>
                {allTags.map((item) => (
                    <div
                        onClick={() => handleTags(item)}
                        key={item.id}
                        className={styles.addTag__tag}
                        style={{
                            border: `2px solid ${item.color}`,
                            backgroundColor: currentTags.some((el) => el.id === item.id)
                                ? item.color
                                : '#FFF',
                        }}
                    >
                        <span
                            style={{
                                color: currentTags.some((el) => el.id === item.id)
                                    ? '#FFF'
                                    : item.color,
                            }}
                        >
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
            <Button
                onClick={() => {
                    setTags(currentTags)
                    setOpen(false)
                }}
                text="Сохранить"
            />
        </div>
    )
};

export default AddTags;
