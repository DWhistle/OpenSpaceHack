import React from 'react';
import ReactModal from 'react-modal';
import styles from './Modal.module.less';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import Button from '../Button/Button'

const MyModal = ({ isOpen, children, setOpen, title, onSubmit, submitTitle }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            className={styles.container}
            overlayClassName={styles.overlay}
            onRequestClose={() => setOpen(false)}
        >
            <div className={styles.header}>
                <h1 className={styles.header__text}>{title}</h1>
                <CloseIcon onClick={() => setOpen(false)} style={{ cursor: 'pointer' }} />
            </div>
            <div className={styles.body}>
                {children}
            </div>
            <div className={styles.footer}>
                <Button text={submitTitle} onClick={onSubmit} />
            </div>

        </ReactModal>
    );
};

export default MyModal;
