import styles from './TableCard.module.scss';
import { Link } from 'react-router-dom';
import RemoveTable from '../RemoveTable/RemoveTable';

const TableCard = props => {

    return (
        <div className={styles.tableCard__wrapper}>
            <div className={styles.tableCard}>
                <div className={styles.tableData}>
                    <p className={styles.tableId}>Table {props.id}</p>
                    <p className={styles.tableStatus}><span>Status:</span> {props.status}</p>
                    <RemoveTable tableId={props.id} />
                </div>
                    <div className={styles.tableCard__buttons}>
                    <Link className={styles.button} to={"/table/" + props.id}>Show more</Link>
                    
                    </div>
                    
            </div>
        </div>
    
    )
}

export default TableCard;