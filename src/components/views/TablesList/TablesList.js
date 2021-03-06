import { useSelector } from 'react-redux';
import TableCard from "../../features/TableCard/TableCard";
import shortid from 'shortid';
import styles from './TablesList.module.scss';
import { getAllTables } from '../../../redux/tablesRedux';
import Spinner from 'react-bootstrap/esm/Spinner';
import AddTable from '../../features/AddTable/AddTable';

const TablesList = props => {
    const tables = useSelector(state => getAllTables(state));
    console.log(tables);

    if (tables.length === 0)
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden"></span>
        </Spinner>
    )
    return (
        <div>
            <AddTable />
            <ul className={styles.tablesList}>
                {tables.map(table => <TableCard key={shortid()} {...table} />)}
            </ul>
        </div>
       
    )
}

export default TablesList;