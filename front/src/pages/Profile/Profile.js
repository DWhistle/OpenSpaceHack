import React, { useState, useEffect } from 'react'
import styles from './profile.module.less';
import editProfileIcon from '../../icons/edit_profile.svg';
import plusIcon from '../../icons/plus2.svg';
import TabBar from '../../components/TabBar';
import deviceService from '../../services/deviceService';
import platform from 'platform';
import MyModal from '../../components/Modal'

const NewDeviceModal = ({ isOpen, setOpen }) => {

    const [os, setOs] = useState(platform.os.family);
    const [osVersion, setOsVersion] = useState(platform.os.version);
    const [environment, setEnvironment] = useState(platform.name);
    const [environmentVersion, setEnvironmentVersion] = useState(platform.version);

    return (
        <MyModal
            isOpen={isOpen}
            setOpen={setOpen}
            onSubmit={async () => {
                await deviceService.addDevice({
                    os,
                    osVersion,
                    environment,
                    environmentVersion,
                    name: os + osVersion + ` / ${Date.now()}`
                });
                setOpen(false);
            }}
            submitTitle="Сохранить"
        >
            <>
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
                        value={environment}
                        onChange={(e) => setEnvironment(e.target.value)}
                    />
                </div>
                <div className={styles.report_modal__form_item}>
                    <label className={styles.report_modal__title}>Версия браузера</label>
                    <input
                        className={styles.input}
                        type="osVersion"
                        placeholder="Введите версию браузера"
                        value={environmentVersion}
                        onChange={(e) => setEnvironmentVersion(e.target.value)}
                    />
                </div>
                </>
        </MyModal>
    )
};

const Profile = ({ avatar, user, userDevices, setUserDevices }) => {
    const [isOpen, setOpen] = useState(false);
    const tabs = [
        {
            id: 0,
            name: 'Вся активность',
        },
        {
            id: 1,
            name: 'Треды',
        },
        {
            id: 2,
            name: 'Мои баги',
        },
    ]




    const [activeTab, setActiveTab] = useState(tabs[0]);
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.main__content}>
                    <TabBar items={tabs} activeItem={activeTab} setActiveItem={setActiveTab} />
                    Profile Page
                </div>
            </div>
            <div className={styles.side_bar}>
                <div className={styles.side_bar__section}>
                    <div className={styles.side_bar__images}>
                        <img src={avatar} height={'30%'} alt="avatar" />
                        <img src={editProfileIcon} alt="edit" />
                    </div>

                            <h1>{localStorage.getItem('name')}</h1>
                            <span>{user === 'tester' ? 'Бета-тестер' : 'Администратор'}</span>
                </div>
                <div className={styles.side_bar__section}>
                    <h3 className={styles.device__header}>Мои девайсы</h3>
                    {userDevices.map((device) => (
                        <div className={styles.device} key={device.id}>
                    {console.log(device)}
                            <span className={styles.device__text}>
                                OS: {device.name ? device.name.split('/')[0]: device.name}
                            </span>
                            <span className={styles.device__text}>
                                Браузер: {device.environment} {device.environmentVersion}
                            </span>
                        </div>
                    ))}
                    <NewDeviceModal isOpen={isOpen} setOpen={setOpen}/>
                    <span onClick={() => setOpen(true)} className={styles.device__add}><img src={plusIcon} alt="addIcon" />Добавить новое устройство</span>
                </div>
            </div>
        </div>
    )
}

export default Profile
