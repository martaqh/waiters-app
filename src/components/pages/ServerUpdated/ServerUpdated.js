import { Link } from 'react-router-dom';
import styles from './ServerUpdated.module.scss';
import Spinner from 'react-bootstrap/esm/Spinner';
import { getAllTables } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux/es/exports';

const ServerUpdated = () => {
    let tables = [];
    tables = useSelector(getAllTables);

    if (tables.length === 0)
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden"></span>
        </Spinner>
    )
    else if (tables.length > 0)
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