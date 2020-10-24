import React, { useState, useEffect } from 'react';
import styles from './BugList.module.less';
import TabBar from '../../components/TabBar'

const BugCard = ({ bug }) => {
    return (
        <div className={styles.bug_card}>

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
            id: 0,
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
