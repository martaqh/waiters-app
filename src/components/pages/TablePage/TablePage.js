import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getTableById } from "../../../redux/tablesRedux";
import StatusForm from "../../features/StatusForm/StatusForm";

const TablePage = () => {
    const { id } = useParams();
    const table = useSelector(state => getTableById(state, id));
    if (table.status === 'busy')
    return ( 
        <main>
            <h2>Table {table.id}</h2>
            <StatusForm status={table.status}>{table.status}</StatusForm> 
            <p>People: {table.people} / {table.places}</p>
            <p>Bill: {table.bill}</p>
        </main>
    )
    return (
        <main>
            <h2>Table {table.id}</h2>
            <StatusForm status={table.status}>{table.status}</StatusForm> 
            <p>People: {table.people} / {table.places}</p>
        </main>
    )

}

export default TablePage;