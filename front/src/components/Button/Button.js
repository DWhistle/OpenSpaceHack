import React from 'react'
import styles from './Button.module.less'

const Button = ({ disabled, type, text }) => (
    <button className={styles.button} disabled={disabled} type={type}>
        {text}
    </button>
)

export default Button
