import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import { ReactComponent as Logo } from '../../assets/img/bankLogo.svg'

import styles from './Authorization.module.less'

const Authorization = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const validateForm = () => {
        return login.length > 0 && password.length > 0
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className={styles.login}>
            <form onSubmit={handleSubmit}>
                <Logo />
                <p>Вход на платформу тестирования</p>
                <div className={styles.form}>
                    <label>Логин</label>
                    <input
                        autoFocus
                        type="login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div className={styles.form}>
                    <label>Пароль</label>
                    <input
                        className={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                </div>
                <Button disabled={!validateForm()} type={'submit'} text={'Войти'} />
            </form>
        </div>
    )
}

export default Authorization
