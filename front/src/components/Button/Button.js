import React from 'react'
import styles from './Button.module.less'

const Button = ({ disabled, type, text, onClick }) => (
    <button
        onClick={onClick}
        className={`${styles.button} ${disabled ? styles.disabled : styles.active}`}
        disabled={disabled}
        type={type}
    >
        {text}
    </button>
)

export default Button
