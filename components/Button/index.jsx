import styles from './index.module.scss'

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.children}</button>
    )
}

export default Button