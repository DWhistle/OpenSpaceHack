import React, { useState, useEffect, useRef } from 'react'
import styles from './BugList.module.less'
import TabBar from '../../components/TabBar'
import plusIcon from '../../icons/plus.svg'
import attachIcon from '../../icons/attachment.svg'
import { useOutsideAlerter } from '../../utils/useOutsideAlerter'
import Button from '../../components/Button/Button'
import { getRandomAvatar } from '../../utils/getRandomAvatar'

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
}

const BugCard = ({ bug, allTags }) => {
    const [addTagIsOpen, setAddTagIsOpen] = useState(false)
    const [currentTags, setCurrentTags] = useState(bug.tags)
    const modalRef = useRef()
    useOutsideAlerter(modalRef, () => setAddTagIsOpen(false))
    const handleAddTag = () => {
        setAddTagIsOpen(!addTagIsOpen)
    }

    return (
        <div ref={modalRef} className={styles.bug_card}>
            <div className={styles.bug_card__header}>
                <div className={styles.bug_card__header__tags_list}>
                    {addTagIsOpen && (
                        <AddTags
                            setOpen={setAddTagIsOpen}
                            setTags={setCurrentTags}
                            tags={currentTags}
                            allTags={allTags}
                        />
                    )}
                    {currentTags.length > 0 &&
                        currentTags.map((tag) => (
                            <div
                                key={tag.id}
                                className={styles.bug_card__header__tags_list__item}
                                style={{ background: tag.color }}
                            >
                                <span>{tag.name}</span>
                            </div>
                        ))}
                    <button
                        className={styles.bug_card__header__tags_list__empty}
                        onClick={handleAddTag}
                    >
                        <img src={plusIcon} alt="plusIcon" />
                        Добавить тег
                    </button>
                </div>
                {bug.attachments.length > 0 && (
                    <div className={styles.bug_card__header__attachments}>
                        <img src={attachIcon} alt="attachIcon" />
                        {bug.attachments.length}
                    </div>
                )}
            </div>

            <div className={styles.bug_card__body}>
                <h1 className={styles.bug_card__body__title}>{bug.title}</h1>
                <p className={styles.bug_card__body__description}>{bug.description}</p>
            </div>

            <div className={styles.bug_card__footer}>
                <img src={getRandomAvatar()} height={32} alt="user avatar" />
                <div className={styles.bug_card__footer__controls}>
                    <Button text="Повтор" />
                    <Button text="В работу" />
                </div>
            </div>
        </div>
    )
}

const BugList = () => {
    const allTags = [
        {
            name: 'Опечатки',
            color: '#00D448',
            id: 0,
        },
        {
            name: 'Переводы',
            color: '#FF7F00',
            id: 1,
        },
        {
            name: 'Интерфейс',
            color: '#02BAE8',
            id: 2,
        },
        {
            name: 'Crash',
            color: '#DB002C',
            id: 3,
        },
        {
            name: 'Мобильное',
            color: '#535E6E',
            id: 4,
        },
    ]
    const tabs = [
        {
            id: 0,
            name: 'Не обработанные',
        },
        {
            id: 1,
            name: 'В работе',
        },
        {
            id: 2,
            name: 'Закрытые',
        },
    ]
    const bugs = [
        {
            id: 1,
            title: 'Опечатка в разделе “дебетовые карты”',
            description:
                'Условное описание бага, может быть очень разным. Максимальное отображение в карточке – 2-3 строчки.',
            attachments: [],
            tags: [],
            author: {
                avatar: '',
                firstName: 'Елизавета',
                lastName: 'Орехова',
            },
        },
        {
            id: 2,
            title: 'Опечатка в разделе “дебетовые карты”',
            description:
                'Условное описание бага, может быть очень разным. Максимальное отображение в карточке – 2-3 строчки.',
            attachments: [],
            tags: [
                {
                    name: 'переводы',
                    color: '#FF7F00',
                    id: 0,
                },
            ],
            author: {
                avatar: '',
                firstName: 'Елизавета',
                lastName: 'Орехова',
            },
        },
        {
            id: 3,
            title: 'Опечатка в разделе “дебетовые карты”',
            description:
                'Условное описание бага, может быть очень разным. Максимальное отображение в карточке – 2-3 строчки.',
            attachments: [1, 2, 3],
            tags: [
                {
                    name: 'переводы',
                    color: '#FF7F00',
                    id: 0,
                },
                {
                    name: 'переводы',
                    color: '#FF7F00',
                    id: 1,
                },
                {
                    name: 'переводы',
                    color: '#FF7F00',
                    id: 2,
                },
            ],
            author: {
                avatar: '',
                firstName: 'Елизавета',
                lastName: 'Орехова',
            },
        },
        {
            id: 4,
            title: 'Опечатка в разделе “дебетовые карты”',
            description:
                'Условное описание бага, может быть очень разным. Максимальное отображение в карточке – 2-3 строчки.',
            attachments: [1, 2, 3],
            tags: [],
            author: {
                avatar: '',
                firstName: 'Елизавета',
                lastName: 'Орехова',
            },
        },
        {
            id: 5,
            title: 'Опечатка в разделе “дебетовые карты”',
            description:
                'Условное описание бага, может быть очень разным. Максимальное отображение в карточке – 2-3 строчки.',
            attachments: [1, 2, 3],
            tags: [],
            author: {
                avatar: '',
                firstName: 'Елизавета',
                lastName: 'Орехова',
            },
        },
        {
            id: 6,
            title: 'Опечатка в разделе “дебетовые карты”',
            description:
                'Условное описание бага, может быть очень разным. Максимальное отображение в карточке – 2-3 строчки.',
            attachments: [1, 2, 3],
            tags: [],
            author: {
                avatar: '',
                firstName: 'Елизавета',
                lastName: 'Орехова',
            },
        },
        {
            id: 7,
            title: 'Опечатка в разделе “дебетовые карты”',
            description:
                'Условное описание бага, может быть очень разным. Максимальное отображение в карточке – 2-3 строчки.',
            attachments: [1, 2, 3],
            tags: [],
            author: {
                avatar: '',
                firstName: 'Елизавета',
                lastName: 'Орехова',
            },
        },
    ]
    const [activeTab, setActiveTab] = useState(tabs[0])
    return (
        <div className={styles.container}>
            <TabBar items={tabs} activeItem={activeTab} setActiveItem={setActiveTab} />
            <div className={styles.bug_list}>
                {bugs.map((item) => (
                    <BugCard allTags={allTags} bug={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default BugList
