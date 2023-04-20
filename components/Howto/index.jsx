import styles from'./index.module.scss'
import Tip from '../Tip'

const Howto = () => {
    return (
        <div className={styles.container}>
            <h2>Как заказать smart-часы</h2>
            <div className={styles.tipsContainer}>
                <Tip 
                    number='1'
                    title='Выбор нужной модели'
                    text='lorem ipsum dolor sit amet lorem lorem'
                />
                <Tip 
                    number='2'
                    title='Выбор нужной модели'
                    text='lorem ipsum dolor sit amet lorem lorem'
                />
                <Tip 
                    number='3'
                    title='Выбор нужной модели'
                    text='lorem ipsum dolor sit amet lorem lorem'
                />
                <Tip 
                    number='4'
                    title='Выбор нужной модели'
                    text='lorem ipsum dolor sit amet lorem lorem'
                />
            </div>
        </div>
    )
}

export default Howto