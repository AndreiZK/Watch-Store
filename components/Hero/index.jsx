import styles from './index.module.scss'
import Button from '../Button'
import Perk from '../Perk'

const Hero = () => {
    return (
        <div className={styles.container}>
            <h1>
                Интернет-магазин <br />smart-часов<br /><span>WATCH STORE</span>
            </h1>
            <Button>Выбрать часы</Button>
            <div className={styles.perks}>
                <Perk 
                    number='1'
                    name='Гарантия 14 дней'
                    description={`Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum accusamus quasi, sunt molestias nisi nam at optio quas voluptatibus harum!`}
                /> 
                <Perk 
                    number='2'
                    name='Доставка по РБ'
                    description={`Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum accusamus quasi, sunt molestias nisi nam at optio quas voluptatibus harum!`}
                /> 
                <Perk 
                    number='3'
                    name='Без предоплат'
                    description={`Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum accusamus quasi, sunt molestias nisi nam at optio quas voluptatibus harum!`}
                /> 
            </div>
        </div>
    )
}

export default Hero