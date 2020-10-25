import React, { useState } from 'react'
import styles from '../Authorization/Authorization.module.less'
import { ReactComponent as Logo } from '../../assets/img/bankLogo.svg'
import Button from '../../components/Button/Button'
import authService from '../../services/authService'
import paths from '../../paths'

const Registration = ({ setUser }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('ADMIN');
    const [name, setName] = useState('');

    const roleOptions = ['ADMIN', 'TESTER'];

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await authService.registration({
            bio: 'string',
            name,
            roleEnum: role,
            username: login,
        })
        if (res) {
            window.location = paths.login;
        }
    }
    const validateForm = () => {
        return login.length > 0 && password.length > 0 && name.length > 0
    }

    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <Logo />
                <p className={styles.title}>Регистрация на платформе тестирования</p>
                <form onSubmit={handleSubmit} className={styles.formContainer}>
                    <div className={styles.form}>
                        <label className="text-xs">Логин</label>
                        <input
                            className={styles.input}
                            autoFocus
                            type="login"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </div>
                    <div className={styles.form}>
                        <label className="text-xs">Пароль</label>
                        <input
                            className={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                        />
                    </div>
                    <div className={styles.form}>
                        <label className="text-xs">Имя</label>
                        <input
                            className={styles.input}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="name"
                        />
                    </div>
                    <div className={styles.form}>
                        <label className="text-xs">Роль</label>
                        <select
                            className={styles.input}
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            {roleOptions.map((option) => <option>{option}</option>)}
                        </select>
                    </div>
                    <div className={styles.button}>
                        <Button disabled={!validateForm()} type={'submit'} text={'Регистрация'} />
                    </div>
                </form>
            </div>
        </div>)
};

export default Registration;
