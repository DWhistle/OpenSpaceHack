import styles from '../../pages/AdminPage/AdminPage.module.less'
import { ReactComponent as BTSLogo } from '../../assets/img/BTSlogo.svg'
import React, { useState } from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import Button from '../Button/Button'
import MyModal from '../Modal/Modal'
import plusIcon from '../../icons/plus.svg'
import AddTags from '../AddTags';
import { Upload, notification } from 'antd';
import bugService from '../../services/bugService'

export const NavItem = ({ icon, text, route }) => {
    const match = useRouteMatch(route)
    return (
        <NavLink
            exact
            to={route.path}
            activeClassName={styles.selected}
            isActive={() => !!match}
            className={styles.navItem}
        >
            <div className={styles.content}>
                <div className={styles.icon}>{icon}</div>
                {text}
            </div>
        </NavLink>
    )
}

const ReportModal = ({ isOpen, setOpen, userDevises }) => {
    const [name, setBugName] = useState('');
    const [os, setOs] = useState(userDevises && userDevises.length > 0 ?userDevises[0].os : '');
    const [osVersion, setOsVersion] = useState(userDevises && userDevises.length > 0 ?userDevises[0].osVersion : '');
    const [browser, setBrowser] = useState(userDevises && userDevises.length > 0 ?userDevises[0].environment : '');
    const [browserVersion, setBrowserVersion] = useState(userDevises && userDevises.length > 0 ?userDevises[0].environmentVersion : '');
    const [stepsToReproduce, setStepsToReproduce] = useState('');
    const [addTagIsOpen, setAddTagIsOpen] = useState(false);
    const [currentTags, setCurrentTags] = useState([]);
    const [priority, setPriority] = useState('');
    const priorityOptions = ['Low', 'Minor', 'Common', 'Major', 'High',  'Blocker'];
    const handleAddTag = () => {
        setAddTagIsOpen(!addTagIsOpen)
    }
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
    ];
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
        },
    };
    return (<MyModal
        title="Новый баг"
        isOpen={isOpen}
        setOpen={setOpen}
        onSubmit={() => {
            bugService.createReport({
                appVersion: 'latest',
                name,
                os,
                osVersion,
                screenshotUrl: '',
                stepsToReproduce,
            }).then(() => {
                notification.success({
                    message: 'Баг успешно заведен',
                });
                setOpen(false);
            }).catch(() => {
                notification.error({
                    message: 'Что-то пошло не так',
                })
            })
        }}
        submitTitle="Отправить баг"
    >
        <>
            <div className={styles.report_modal__form_item}>
                <label className={styles.report_modal__title}>Название бага</label>
                <input
                    className={styles.input}
                    type="bugName"
                    placeholder="Введите название бага"
                    value={name}
                    onChange={(e) => setBugName(e.target.value)}
                />
            </div>
            <div className={styles.report_modal__form_item}>
                <label className={styles.report_modal__title}>Операционная система</label>
                <input
                    className={styles.input}
                    type="is"
                    placeholder="Введите название OS"
                    value={os}
                    onChange={(e) => setOs(e.target.value)}
                />
            </div>
            <div className={styles.report_modal__form_item}>
                <label className={styles.report_modal__title}>Версия ОС</label>
                <input
                    className={styles.input}
                    type="osVersion"
                    placeholder="Введите версию OS"
                    value={osVersion}
                    onChange={(e) => setOsVersion(e.target.value)}
                />
            </div>

            <div className={styles.report_modal__form_item}>
                <label className={styles.report_modal__title}>Браузер</label>
                <input
                    className={styles.input}
                    type="is"
                    placeholder="Введите название браузера"
                    value={browser}
                    onChange={(e) => setBrowser(e.target.value)}
                />
            </div>
            <div className={styles.report_modal__form_item}>
                <label className={styles.report_modal__title}>Версия браузера</label>
                <input
                    className={styles.input}
                    type="osVersion"
                    placeholder="Введите версию браузера"
                    value={browserVersion}
                    onChange={(e) => setBrowserVersion(e.target.value)}
                />
            </div>

            <div className={styles.report_modal__form_item}>
                <label className={styles.report_modal__title}>Теги</label>
                <div className={styles.tags}>
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
                            className={styles.tags__item}
                            style={{ background: tag.color }}
                        >
                            <span>{tag.name}</span>
                        </div>
                    ))}
                    <button
                        className={styles.tags__add}
                        onClick={handleAddTag}
                    >
                        <img src={plusIcon} alt="plusIcon" />
                        Добавить тег
                    </button>
                </div>
            </div>
            <div className={styles.report_modal__form_item}>
                <label className={styles.report_modal__title}>Приоритет</label>
                <select
                    className={styles.input}
                    placeholder="Приоритет"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    {priorityOptions.map(opt => (<option key={opt}>{opt}</option>))}
                </select>
            </div>
            <div className={styles.report_modal__form_item}>
                <label className={styles.report_modal__title}>Подробное описание/проделанные шаги</label>
                <textarea
                    className={styles.input}
                    placeholder="Подробное описание/проделанные шаги"
                    value={stepsToReproduce}
                    onChange={(e) => setStepsToReproduce(e.target.value)}
                />
            </div>
            <div className={styles.report_modal__form_item}>
                <label className={styles.report_modal__title}>Скриншоты</label>
                    <Upload {...props}>
                        <button
                            className={styles.tags__add}
                            onClick={() => {}}
                        >
                            <img src={plusIcon} alt="plusIcon" />
                            Загрузить
                        </button>
                    </Upload>
            </div>
        </>
    </MyModal>)
};

const NavBar = ({ navItems, userDevices }) => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className={styles.navigation}>
            <div className={styles.logo}>
                <BTSLogo />
                <ReportModal isOpen={modalOpen} setOpen={setModalOpen} userDevises={userDevices} />
            </div>
            <ul>
                {navItems.map((item) => (
                    <NavItem key={item.path} route={item} icon={item.icon} text={item.title} />
                ))}
                {localStorage.getItem('role') === 'tester' && (
                    <div className={styles.navigation__additional}>
                        <Button text="Новый баг" onClick={() => setModalOpen(true)} />
                    </div>
                )}
            </ul>
        </div>
    )
}

export default NavBar
