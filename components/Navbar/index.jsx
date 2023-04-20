import styles from'./index.module.scss'
import logo from '../../src/assets/logo.png'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <ul>
                <li><a href="">Каталог товаров</a></li>
                <li><a href="">Как заказать часы</a></li>
                <img src={logo} alt="" />
                <li><a href="">Отзывы покупателей</a></li>
                <li><a href="">Заказ звонка</a></li>
            </ul>
        </div>
    )
}

export default Navbar