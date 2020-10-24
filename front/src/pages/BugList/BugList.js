import React, { useState, useEffect } from 'react';
import styles from './BugList.module.less';
import TabBar from '../../components/TabBar'
import plusIcon from '../../icons/plus.svg';
import attachIcon from '../../icons/attachment.svg';

const BugCard = ({ bug }) => {
    return (
        <div className={styles.bug_card}>
            <div className={styles.bug_card__header}>
                <div className={styles.bug_card__header__tags_list}>
                    {
                        bug.tags.length > 0 ?
                            bug.tags.map((tag) => (
                                <div
                                    key={tag.id}
                                    className={styles.bug_card__header__tags_list__item}
                                    style={{ background: tag.color }}
                                >
                                <span>{tag.name}</span>
                            </div>
                            )) :
                            <button className={styles.bug_card__header__tags_list__empty}>
                                <img src={plusIcon} alt="plusIcon" />
                                Добавить тег
                            </button>
                    }
                </div>
                <div className={styles.bug_card__header__attachments}>
                    <img src={attachIcon} alt="attachIcon" />
                    {bug.attachments.length}
                </div>
            </div>

            <div className={styles.bug_card__body}>
                <h1 className={styles.bug_card__body__title}>
                    {bug.title}
                </h1>
                <p className={styles.bug_card__body__description}>
                    {bug.description}
                </p>
            </div>

            <div className={styles.bug_card__footer}>

            </div>
        </div>
    )
};

const BugList = () => {
    const tabs = [
        {
           id: 0,
           name: 'Не обработанные'
        },
        {
            id: 1,
            name: 'В работе'
        },
        {
            id: 2,
            name: 'Закрытые'
        },
    ];
    const bugs = [
        {
            id: 1,
            title: 'Опечатка в разделе “дебетовые карты”',
            description: 'Условное описание бага, может быть очень разным. Максимальное отображение в карточке – 2-3 строчки.',
            attachments: [1,2,3],
            tags: [],
            author: {
                avatar: '',
                firstName: 'Елизавета',
                lastName: 'Орехова',
            }
        },
        {
            id: 2,
            title: 'Опечатка в разделе “дебетовые карты”',
            description: 'Условное описание бага, может быть очень разным. Максимальное отображение в карточке – 2-3 строчки.',
            attachments: [1,2,3],
            tags: [
                {
                    name: 'переводы',
                    color: '#FF7F00',
                    id: 0,
                }
            ],
            author: {
                avatar: '',
                firstName: 'Елизавета',
                lastName: 'Орехова',
            }
        },
        {
            id: 3,
            title: 'Опечатка в разделе “дебетовые карты”',
            description: 'Условное описание бага, может быть очень разным. Максимальное отображение в карточке – 2-3 строчки.',
            attachments: [1,2,3],
            tags: [
                {
                    name: 'переводы',
                    color: '#FF7F00',
                    id: 0,
                },
                {
                    name: 'переводы',
                    color: '#FF7F00',
                    id: 0,
                },
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
            }
        },
        {
            id: 4,
            title: 'Опечатка в разделе “дебетовые карты”',
            description: 'Условное описание бага, может быть очень разным. Максимальное отображение в карточке – 2-3 строчки.',
            attachments: [1,2,3],
            tags: [],
            author: {
                avatar: '',
                firstName: 'Елизавета',
                lastName: 'Орехова',
            }
        },
        {
            id: 5,
            title: 'Опечатка в разделе “дебетовые карты”',
            description: 'Условное описание бага, может быть очень разным. Максимальное отображение в карточке – 2-3 строчки.',
            attachments: [1,2,3],
            tags: [],
            author: {
                avatar: '',
                firstName: 'Елизавета',
                lastName: 'Орехова',
            }
        },
        {
            id: 6,
            title: 'Опечатка в разделе “дебетовые карты”',
            description: 'Условное описание бага, может быть очень разным. Максимальное отображение в карточке – 2-3 строчки.',
            attachments: [1,2,3],
            tags: [],
            author: {
                avatar: '',
                firstName: 'Елизавета',
                lastName: 'Орехова',
            }
        },
        {
            id: 7,
            title: 'Опечатка в разделе “дебетовые карты”',
            description: 'Условное описание бага, может быть очень разным. Максимальное отображение в карточке – 2-3 строчки.',
            attachments: [1,2,3],
            tags: [],
            author: {
                avatar: '',
                firstName: 'Елизавета',
                lastName: 'Орехова',
            }
        },
    ];
    const [activeTab, setActiveTab] = useState(tabs[0]);
    return (
        <div className={styles.container}>
            <TabBar items={tabs} activeItem={activeTab} setActiveItem={setActiveTab} />
            <div className={styles.bug_list}>
                {bugs.map((item) => <BugCard bug={item} key={item.id} />)}
            </div>
        </div>
    )
};

export default BugList;
