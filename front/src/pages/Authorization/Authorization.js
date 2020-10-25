import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import { ReactComponent as Logo } from '../../assets/img/bankLogo.svg'
import styles from './Authorization.module.less'
import '../../App.less'
import paths from '../../paths';
import authService from '../../services/authService'
import cookieManager from '../../utils/cookieManager'
import { Link } from 'react-router-dom'

const Authorization = ({ setUser }) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const validateForm = () => {
        return login.length > 0 && password.length > 0
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await authService.login({
            username: login,
            password,
        });
        cookieManager.setCookie('userId', res.id);
        cookieManager.setCookie('userID', res.id);
        localStorage.setItem('role', res.roleEnum.toLowerCase());
        localStorage.setItem('userId', res.id);
        localStorage.setItem('name', res.name);
        setUser(res.roleEnum.toLowerCase());
        window.location = paths.index;
    }

    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <Logo />
                <p className={styles.title}>Вход на платформу тестирования</p>
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
                    <div className={styles.button}>
                        <Button disabled={!validateForm()} type={'submit'} text={'Войти'} />
                    </div>
                    <Link to={paths.registration}>Регистрация</Link>
                </form>
            </div>
        </div>
    )
}

export default Authorization
