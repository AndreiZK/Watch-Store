import styles from'./index.module.scss'
import Review from '../Review'
import customerPlaceholder from '../../src/assets/customer.png'
import { useEffect, useState } from 'react'
import reviewsData from '../../src/reviewsData'
import { motion } from 'framer-motion'

const Reviews = () => {

    const reviewsArray = reviewsData.map(review => {
        return (
            <Review 
                title={review.title}
                image={customerPlaceholder}
                text={review.text}
                author={review.name}
            />
        )
    })

    const [page, setPage] = useState(1)

    const goToNextPage = () => {
        if (page <= 4) {
            setPage(prevPage => prevPage + 1)
        } else {
            setPage(1)
        }
    }

    const goToPreviousPage = () => {
        if (page >= 2) {
            setPage(prevPage => prevPage - 1)
        } else {
            setPage(5)
        }
    }

    useEffect(() => {
        document.querySelectorAll(`.${styles.dot}`).forEach(dot => {
            dot.classList.remove(styles.black)
        })
        document.getElementById(String(page)).classList.toggle(styles.black)
    }, [page])

   

    return (
        <div className={styles.container}>
            <h2>Отзывы покупателей</h2>
            <div className={styles.reviewsContainer}>
                <motion.i 
                    initial={{fontSize: '5rem'}}
                    whileHover={{fontSize: '5.5rem'}}
                    exit={{fontSize: '5rem'}} 
                    transition={{duration: 0.2}} 
                    className="fa-solid fa-angle-left" onClick={goToPreviousPage}>
                </motion.i>
                { reviewsArray[page] }
                { reviewsArray[page + 1]}
                <motion.i 
                    initial={{fontSize: '5rem'}}
                    whileHover={{fontSize: '5.5rem'}}
                    exit={{fontSize: '5rem'}} 
                    transition={{duration: 0.2}} 
                    className="fa-solid fa-angle-right" onClick={goToNextPage}>
                </motion.i>
            </div>
            <div className={styles.dotsContainer}>
                <span className={styles.dot} id='1'></span>
                <span className={styles.dot} id='2'></span>
                <span className={styles.dot} id='3'></span>
                <span className={styles.dot} id='4'></span>
                <span className={styles.dot} id='5'></span>
            </div>
            <h2>Оформление заказа</h2>
        </div>
    )
}

export default Reviews