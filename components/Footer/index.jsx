import styles from'./index.module.scss'

const Footer = () => {
    return (
        <div className={styles.container}>
            <p>2022 © Все права защищены.</p>
            <div>
                <a href="/">Telegram</a>
                <a href="/">Instagram</a>
            </div>
        </div>
    )
}

export default Footer