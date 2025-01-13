import { Link } from 'react-router-dom'
import styles from "../css/LinkPage.module.css"

function LinkPage({to, text}) {
    return(
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default LinkPage