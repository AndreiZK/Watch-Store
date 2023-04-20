import styles from'./index.module.scss'

import Button from '../Button'

const Watch = (props) => {

    const perks = props.perksArr.map(perk => <li>{perk}</li>)

    return (
        <div className={styles.container}>
            <h4>{props.title}<img src={props.image} alt="" /></h4>
            <ul>{perks}</ul>
            <Button>{props.price}</Button>
        </div>
    )
}

export default Watch