
import { useDispatch } from 'react-redux';
import { removeTableFromServer, removeTable } from '../../redux/tablesRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const RemoveTable = props => {
    const dispatch = useDispatch();   

    const handleClick = e => {
        e.preventDefault();
        removeTableFromServer(props.tableId)
        dispatch(removeTable(props.tableId));
    }

    return (
        <button onClick={handleClick}>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    );
}

export default RemoveTable;