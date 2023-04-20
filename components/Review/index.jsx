import styles from'./index.module.scss'

const Review = (props) => {
    return (
        <div className={styles.container}>
            <h4>{props.title}</h4>
            <img src={props.image} alt="" />
            <p>{props.text}</p>
            <span>{props.author}</span>
        </div>
    )
}

export default Review