import styles from'./index.module.scss'
import logo from '../../src/assets/m7pro.png'

import Watch from '../Watch'

const Catalogue = () => {
    return (
        <div className={styles.container}>
            <h2>Каталог товаров</h2>
            <div className={styles.watches}>
                <Watch 
                    title='M7 pro' 
                    image={logo}
                    perksArr={["Заряд держится 7 дней", "GPS", "калькулятор, календарь, погода", "шагомер"]} 
                    price='80 руб'
                />
                <Watch 
                    title='M7 pro' 
                    image={logo}
                    perksArr={["Заряд держится 7 дней", "GPS", "калькулятор, календарь, погода", "шагомер"]} 
                    price='80 руб'
                />
                <Watch 
                    title='M7 pro' 
                    image={logo}
                    perksArr={["Заряд держится 7 дней", "GPS", "калькулятор, календарь, погода", "шагомер"]} 
                    price='80 руб'
                />
                <Watch 
                    title='M7 pro' 
                    image={logo}
                    perksArr={["Заряд держится 7 дней", "GPS", "калькулятор, календарь, погода", "шагомер"]} 
                    price='80 руб'
                />
                <Watch 
                    title='M7 pro' 
                    image={logo}
                    perksArr={["Заряд держится 7 дней", "GPS", "калькулятор, календарь, погода", "шагомер"]} 
                    price='80 руб'
                />
                <Watch 
                    title='M7 pro' 
                    image={logo}
                    perksArr={["Заряд держится 7 дней", "GPS", "калькулятор, календарь, погода", "шагомер"]} 
                    price='80 руб'
                />
            </div>
        </div>
    )
}

export default Catalogue