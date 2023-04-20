import styles from'./index.module.scss'
import image from '../../src/assets/form-img.png'
import Button from '../Button'
import { useState } from 'react'

const Form = () => {

    const [formData, setFormData] = useState({name: '', phone: ''})

    const handleSubmit = (e) => {
        //Send form data to the server
        setFormData({name: '', phone: ''})
        console.log(formData)
    }

    const handleChange = (e) => {
        const {type, value} = e.target
        setFormData(prevFormData => {
            return type === 'text' ? {...prevFormData, name: value} :
            {...prevFormData, phone: value}
        })
    }

    return (
        <div className={styles.container}>
            <img src={image} alt="" />
            <div className={styles.formContainer}>
                <h6>Заполните форму — мы перезвоним, <br />ответим на вопросы и оформим заказ!</h6>
                <input onChange={handleChange} value={formData.name} type="text" placeholder='Имя'/>
                <input onChange={handleChange} value={formData.phone} type="tel" placeholder='Номер телефона'/>
                <Button handleClick={handleSubmit}>Отправить</Button>
            </div>
        </div>
    )
}

export default Form