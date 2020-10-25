import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import { ReactComponent as Logo } from '../../assets/img/bankLogo.svg'
import styles from './Authorization.module.less'
import '../../App.less'
import paths from '../../paths'

const Authorization = ({ setUser }) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const validateForm = () => {
        return login.length > 0 && password.length > 0
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        localStorage.setItem('role', login)
        setUser(login)
        window.location = paths.index
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
                    <p className="text-xs" style={{ height: 'auto', padding: '0 16px' }}>
                        Вы можете войти в систему под учетной записью <strong>admin</strong> с любым
                        паролем, чтобы увидеть панель управления администратора.
                    </p>
                    <p className="text-xs" style={{ padding: '0 16px' }}>
                        Либо под учетной записью <strong>tester</strong> для работы с интерфейсом
                        бета-тестировщика.
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Authorization
