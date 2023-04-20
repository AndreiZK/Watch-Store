import styles from'./index.module.scss'

const Tip = (props) => {
    return (
        <div className={styles.container}>
            <span>{props.number}</span>
            <div>
                <h4>{props.title}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Tip