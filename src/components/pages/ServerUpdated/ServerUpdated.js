import { Link } from 'react-router-dom';
import styles from './ServerUpdated.module.scss'

const ServerUpdated = () => {
    return (
        <div className={styles.serverUpdated}>
            <div className={styles.serverUpdated__successMessage}>
                <h4>Table detailes has been
                    <br />
                    <span>successfully updated</span>
                </h4>
            </div>
            <Link className={styles.serverUpdated__linkToTables} to="/">Come back to tables</Link>
        </div>
        
    )
}

export default ServerUpdated;