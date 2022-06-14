import { Link } from 'react-router-dom';
import styles from './ServerUpdated.module.scss'

const ServerUpdated = () => {
    return (
        <div className={styles.serverUpdated}>
            <div className={styles.serverUpdated__successMessage}>
                <h4>The data has been successfully
                    <br />
                    <span>updated</span>
                    <br />
                    on server
                </h4>
            </div>
            
            <Link className={styles.serverUpdated__linkToTables} to="/">Come back to tables</Link>
        </div>
        
    )
}

export default ServerUpdated;