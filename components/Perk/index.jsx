import styles from './index.module.scss'

const Perk = (props) => {
    return (
        <div className={styles.container}>
            <span className={styles.number}>{props.number}</span>
            <div className={styles.textContainer}>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Perk