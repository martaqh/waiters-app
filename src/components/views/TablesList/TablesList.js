import { useSelector } from 'react-redux';
import TableCard from "../../features/TableCard/TableCard";
import shortid from 'shortid';
import styles from './TablesList.module.scss';

const TablesList = props => {
    const tables = useSelector(state => state.tables);
    console.log(tables);

    return (
        <ul className={styles.tablesList}>
            {tables.map(table => <TableCard key={shortid()} {...table} />)}
        </ul>
    )
}

export default TablesList;