
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeTableFromServer, removeTable } from '../../../redux/tablesRedux';

const RemoveTable = props => {
    const dispatch = useDispatch();   

    const handleClick = e => {
        e.preventDefault();
        removeTableFromServer (props.tableId)
        dispatch(removeTable(props.tableId));
    }

    return (
        <button onClick={handleClick}>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    );
}

export default RemoveTable;