import Button from '../../common/Button/Button';
import styles from './TableCard.module.scss'

const TableCard = props => {
    return (
        <div className={styles.tableCard__wrapper}>
            <div className={styles.tableCard}>
                <div className={styles.tableData}>
                    <p className={styles.tableId}>Table {props.id}</p>
                    <p className={styles.tableStatus}>Status: {props.status}</p>
                </div>
                <Button>Show more</Button>
            </div>
        </div>
    
    )
}

export default TableCard;