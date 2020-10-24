import React from 'react'
import styles from './Shop.module.less'
import Button from '../Button/Button'
import tshirt from '../../assets/img/merch/tshirt.png'
import socks from '../../assets/img/merch/socks.jpeg'
import hoodie from '../../assets/img/merch/hoodie.jpeg'
import '../../App.less'

const items = [
    {
        title: 'Футболка',
        descripton: 'Очень красивая футболочка для вас и вашей милой дамы',
        image: tshirt,
        price: '1250',
        available: true,
    },
    {
        title: 'Носки',
        descripton: 'Очень красивая футболочка для вас и вашей милой дамы',
        image: socks,
        price: '500',
        available: true,
    },
    {
        title: 'Худак',
        descripton: 'Очень красивая футболочка для вас и вашей милой дамы',
        image: hoodie,
        price: '2500',
        available: false,
    },
    {
        title: 'Футболка',
        descripton: 'Очень красивая футболочка для вас и вашей милой дамы',
        image: tshirt,
        price: '1250',
        available: true,
    },

    {
        title: 'Худак',
        descripton: 'Очень красивая футболочка для вас и вашей милой дамы',
        image: hoodie,
        price: '2500',
        available: false,
    },
    {
        title: 'Носки',
        descripton: 'Очень красивая футболочка для вас и вашей милой дамы',
        image: socks,
        price: '500',
        available: true,
    },
    {
        title: 'Футболка',
        descripton: 'Очень красивая футболочка для вас и вашей милой дамы',
        image: tshirt,
        price: '1250',
        available: true,
    },
    {
        title: 'Носки',
        descripton: 'Очень красивая футболочка для вас и вашей милой дамы',
        image: socks,
        price: '500',
        available: true,
    },
    {
        title: 'Худак',
        descripton: 'Очень красивая футболочка для вас и вашей милой дамы',
        image: hoodie,
        price: '2500',
        available: false,
    },
]

export const ProgressBar = () => {
    return (
        <svg
            width="349"
            height="4"
            viewBox="0 0 349 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="200" height="4" fill="#DDE7F0" />
            <svg
                width="77"
                height="4"
                viewBox="0 0 77 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0 0H77V4H0V0Z" fill="#02BAE8" />
            </svg>
        </svg>
    )
}

export const Card = ({ title, description, price, imageSrc, available }) => (
    <div className={styles.item}>
        <div className={`${styles.photo} ${!available ? styles.disabledPhoto : ''}`}>
            <img src={imageSrc} className={`${styles.mainPhoto}`} />
        </div>
        <div className={styles.infoBlock}>
            <div className={styles.descrBlock}>
                <div className={styles.title}>{title}</div>
                <span className={styles.text}>{description}</span>
            </div>
            <span className={styles.price}>{price}</span>
            <span className={styles.rub}>руб</span>
        </div>
        <div className={styles.bottomBlock}>
            {!available && <ProgressBar />}
            <Button text={'Купить'} disabled={!available} />
        </div>
    </div>
)

const Shop = () => (
    <div className={styles.container}>
        {items.map((item) => (
            <Card
                title={item.title}
                description={item.descripton}
                price={item.price}
                imageSrc={item.image}
                available={item.available}
            />
        ))}
    </div>
)

export default Shop
