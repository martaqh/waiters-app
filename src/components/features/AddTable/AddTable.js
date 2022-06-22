import { addTable, addTableToServer } from "../../../redux/tablesRedux";
import { useDispatch, useSelector } from "react-redux";
import styles from './AddTable.module.scss';



const AddTable = () => {
    const dispatch = useDispatch();

    const getLastTable = ({ tables }) => tables[tables.length-1]
    const lastTable = useSelector(getLastTable);

    const newTable = {
        id: parseInt(lastTable.id) + 1,
        status: "free",
        people: '0',
        places: '0',
        bill: '0',

    }

    const handleClick = e => {
        e.preventDefault();
        dispatch(addTableToServer(newTable));
    }

    return (
       <button className={styles.addTable} onClick={handleClick}>Add new table</button> 
    )
}

export default AddTable;