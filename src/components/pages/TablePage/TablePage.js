import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getTableById } from "../../../redux/tablesRedux";

const TablePage = props => {
    const { id } = useParams();
    const table = useSelector(state => getTableById(state, id));
    if (table.status === 'busy')
    return ( 
        <main>
            <h2>Table {table.id}</h2>
            <p>Status: {table.status} </p>
            <p>People: {table.people} / {table.places}</p>
            <p>Bill: {table.bill}</p>
        </main>
    )
    return (
        <main>
            <h2>Table {table.id}</h2>
            <p>Status: {table.status} </p>
            <p>People: {table.people} / {table.places}</p>
        </main>
    )

}

export default TablePage;